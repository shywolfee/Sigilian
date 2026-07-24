/*
 * entities.js — the object model.
 *
 *   GameObject          base: identity, description, keywords, events
 *     +-- Container      anything that can hold other GameObjects
 *           +-- Item     things you can look at / get / drop / use
 *           +-- Actor    living things with stats + an inventory
 *                 +-- Mob      NPCs and monsters
 *                 +-- Player   the object the human inhabits
 *     +-- Room           a place, itself a Container of items/actors, with exits
 */
(function (global) {
  'use strict';

  const MUD = global.MUD;
  const { util, Emitter } = MUD;

  /* Canonical directions and their opposites, plus accepted abbreviations. */
  const DIRECTIONS = {
    north: { abbr: 'n', opposite: 'south' },
    south: { abbr: 's', opposite: 'north' },
    east: { abbr: 'e', opposite: 'west' },
    west: { abbr: 'w', opposite: 'east' },
    up: { abbr: 'u', opposite: 'down' },
    down: { abbr: 'd', opposite: 'up' },
    northeast: { abbr: 'ne', opposite: 'southwest' },
    northwest: { abbr: 'nw', opposite: 'southeast' },
    southeast: { abbr: 'se', opposite: 'northwest' },
    southwest: { abbr: 'sw', opposite: 'northeast' },
  };

  // Map every accepted token (full word + abbreviation) -> canonical name.
  const DIR_ALIASES = Object.create(null);
  for (const name in DIRECTIONS) {
    DIR_ALIASES[name] = name;
    DIR_ALIASES[DIRECTIONS[name].abbr] = name;
  }

  function canonicalDir(token) {
    return DIR_ALIASES[String(token || '').toLowerCase()] || null;
  }

  /* ------------------------------------------------------------------ */
  class GameObject extends Emitter {
    constructor(spec) {
      super();
      spec = spec || {};
      this.id = spec.id || util.uid('obj');
      this.name = spec.name || 'thing';
      // Keywords the player can type to refer to this object. The name's
      // words are folded in automatically so authors rarely need to repeat.
      this.keywords = dedupeKeywords(this.name, spec.keywords);
      this.short = spec.short || null;             // one-line room listing text
      this.description = spec.description || '';    // shown on "look at"
      this.proper = !!spec.proper;                  // proper noun? (no article)
      this.article = spec.article || null;          // override "a"/"an"
      this.location = null;                         // set when placed
      this.tags = new Set(spec.tags || []);

      if (typeof spec.onLook === 'function') this.on('look', spec.onLook);
    }

    is(tag) { return this.tags.has(tag); }

    /** Text shown when someone examines this object. */
    describe() {
      this.emit('look', this);
      return this.description || ('You see nothing special about ' +
        util.theName(this) + '.');
    }
  }

  /* ------------------------------------------------------------------ *
   *  Container — holds contents, provides find-by-token.
   * ------------------------------------------------------------------ */
  class Container extends GameObject {
    constructor(spec) {
      super(spec);
      this.contents = [];
    }

    add(obj) {
      if (obj.location && obj.location.remove) obj.location.remove(obj);
      obj.location = this;
      this.contents.push(obj);
      this.emit('receive', obj);
      return obj;
    }

    remove(obj) {
      const i = this.contents.indexOf(obj);
      if (i >= 0) {
        this.contents.splice(i, 1);
        if (obj.location === this) obj.location = null;
        this.emit('lose', obj);
      }
      return obj;
    }

    has(obj) { return this.contents.indexOf(obj) >= 0; }

    /** Contents optionally filtered by a predicate. */
    list(filter) {
      return filter ? this.contents.filter(filter) : this.contents.slice();
    }

    /** Best single content object matching a player token. */
    find(token, filter) {
      const pool = this.list(filter);
      return MUD.match.best(token, pool);
    }

    findAll(token, filter) {
      return MUD.match.all(token, this.list(filter));
    }
  }

  /* ------------------------------------------------------------------ *
   *  Item — a thing in the world.
   * ------------------------------------------------------------------ */
  class Item extends Container {  // extends Container so items can be openable/hold things
    constructor(spec) {
      spec = spec || {};
      super(spec);
      this.tags.add('item');
      this.portable = spec.portable !== false;  // gettable by default
      this.weight = spec.weight != null ? spec.weight : 1;

      // Equipment properties. A weapon has `damage` [min,max] (+ optional
      // `accuracy`); armor has `armor` soak (+ optional `accuracy` deflection).
      this.damage = spec.damage || null;
      this.armor = spec.armor != null ? spec.armor : null;
      this.accuracy = spec.accuracy || 0;
      if (this.damage) this.tags.add('weapon');
      if (this.armor != null) this.tags.add('armor');

      // Optional custom behaviours.
      if (typeof spec.onGet === 'function') this.on('get', spec.onGet);
      if (typeof spec.onDrop === 'function') this.on('drop', spec.onDrop);
      if (typeof spec.onUse === 'function') this.on('use', spec.onUse);
    }

    /** How this item appears in a room's item list. */
    roomLine() {
      if (this.short) return this.short;
      return util.capitalize(util.aName(this)) + ' is here.';
    }
  }

  /* ------------------------------------------------------------------ *
   *  Actor — living thing with stats + inventory.
   * ------------------------------------------------------------------ */
  const DEFAULT_STATS = { str: 10, dex: 10, con: 10, int: 10 };

  class Actor extends Container {
    constructor(spec) {
      spec = spec || {};
      super(spec);
      this.tags.add('actor');

      this.stats = Object.assign({}, DEFAULT_STATS, spec.stats || {});
      this.level = spec.level != null ? spec.level : 1;
      this.maxHp = spec.maxHp != null ? spec.maxHp : 20;
      this.hp = spec.hp != null ? spec.hp : this.maxHp;
      this.alive = true;

      // Combat. `attackDamage` is an innate [min,max] dice (mobs); players
      // get theirs from a wielded weapon. `armorValue` is innate soak.
      this.attackDamage = spec.damage || null;
      this.armorValue = spec.armor != null ? spec.armor : 0;
      this.equipment = { weapon: null, armor: null };

      // An actor's `contents` IS its inventory.
    }

    get inventory() { return this.contents; }

    carrying(token) {
      return this.find(token, (o) => o.is('item'));
    }

    /* ---- combat maths (see js/combat.js for how these are used) ---- */
    weapon() { return this.equipment.weapon; }

    /** Chance-to-hit rating: brawn, skill (level), and weapon accuracy. */
    attackRating() {
      let r = Math.floor(this.stats.str / 2) + this.level;
      const w = this.weapon();
      if (w && w.accuracy) r += w.accuracy;
      return r;
    }

    /** Avoidance rating: agility plus all worn/innate armor's deflection. */
    defenseRating() {
      let d = Math.floor(this.stats.dex / 2);
      const a = this.equipment.armor;
      if (a && a.accuracy) d += a.accuracy;
      return d;
    }

    /** Damage-soak: innate toughness plus worn armor. */
    armorTotal() {
      let a = this.armorValue;
      const worn = this.equipment.armor;
      if (worn && worn.armor) a += worn.armor;
      return a;
    }

    /** The [min,max] damage dice for this actor's current attack. */
    damageDice() {
      const w = this.weapon();
      if (w && w.damage) return w.damage;
      if (this.attackDamage) return this.attackDamage;
      return [1, 3]; // unarmed
    }

    rollDamage() {
      const dice = this.damageDice();
      return util.randInt(dice[0], dice[1]) + Math.floor(this.stats.str / 4);
    }

    damage(amount) {
      this.hp = util.clamp(this.hp - amount, 0, this.maxHp);
      this.emit('damaged', amount);
      if (this.hp <= 0 && this.alive) {
        this.alive = false;
        this.emit('death', this);
      }
      return this.hp;
    }

    heal(amount) {
      this.hp = util.clamp(this.hp + amount, 0, this.maxHp);
      this.emit('healed', amount);
      return this.hp;
    }
  }

  /* ------------------------------------------------------------------ *
   *  Mob — an NPC / monster. Given a `game` it can act each tick.
   * ------------------------------------------------------------------ */
  class Mob extends Actor {
    constructor(spec) {
      spec = spec || {};
      super(spec);
      this.tags.add('mob');
      this.hostile = !!spec.hostile;           // attacks on sight?
      this.dialogue = spec.dialogue || null;   // string or fn(player)->string
      // Combat. `xp` is the reward for killing this mob; `respawns` (seconds)
      // lets it return after death. Sensible defaults scale with level.
      this.xp = spec.xp != null ? spec.xp : this.level * 15;
      this.respawns = spec.respawns != null ? spec.respawns : null;
      this.spawnRoom = null;                   // remembered for respawn
      if (!this.attackDamage) this.attackDamage = [1, 2 + this.level];
      if (typeof spec.onTalk === 'function') this.on('talk', spec.onTalk);
      if (typeof spec.onTick === 'function') this.on('tick', spec.onTick);
      if (typeof spec.onDeath === 'function') this.on('death', spec.onDeath);
    }

    get combatant() { return this.attackDamage != null && this.maxHp > 0; }

    roomLine() {
      if (this.short) return this.short;
      const state = this.alive ? 'is here' : 'lies dead here';
      return util.capitalize(util.aName(this)) + ' ' + state + '.';
    }

    speak(player) {
      let line = this.dialogue;
      if (typeof line === 'function') line = line(player, this);
      return line || (util.capitalize(util.theName(this)) +
        ' has nothing to say.');
    }
  }

  /* ------------------------------------------------------------------ *
   *  Player — the actor the human inhabits.
   * ------------------------------------------------------------------ */
  class Player extends Actor {
    constructor(spec) {
      spec = spec || {};
      spec.name = spec.name || 'you';
      super(spec);
      this.tags.add('player');
      this.proper = true; // "you" needs no article
      this.capacity = spec.capacity != null ? spec.capacity : 20; // max carry weight
      this.xp = spec.xp || 0;   // experience accumulated toward the next level
    }

    get room() {
      return this.location instanceof Room ? this.location : null;
    }

    carriedWeight() {
      return this.inventory.reduce((sum, o) => sum + (o.weight || 0), 0);
    }

    /* ---- leveling ---- */

    /** Experience needed to advance from the current level to the next. */
    xpToNext() {
      return this.level * 100;
    }

    /**
     * Award experience and level up as many times as the total allows.
     * `game` (optional) receives the announcements.
     */
    gainXp(amount, game) {
      if (amount <= 0) return;
      this.xp += amount;
      if (game) game.print('You gain ' + amount + ' experience.');
      while (this.xp >= this.xpToNext()) {
        this.xp -= this.xpToNext();
        this.levelUp(game);
      }
      if (game) game.updateHud();
    }

    levelUp(game) {
      this.level++;
      this.maxHp += 8;
      this.stats.str += 1;
      this.stats.con += 1;
      this.hp = this.maxHp; // a fresh level restores you
      if (game) {
        game.heading('*** You have reached level ' + this.level + '! ***');
        game.print('Power settles into your bones. (+8 HP, +1 STR, +1 CON)');
      }
    }
  }

  /* ------------------------------------------------------------------ *
   *  Room — a place. Contains items and actors; wires exits to neighbours.
   * ------------------------------------------------------------------ */
  class Room extends Container {
    constructor(spec) {
      spec = spec || {};
      super(spec);
      this.tags.add('room');
      this.title = spec.title || this.name;
      this.area = null;                   // set when the room joins an Area
      this.exits = Object.create(null);   // canonicalDir -> { room, locked, ... }
      if (typeof spec.onEnter === 'function') this.on('enter', spec.onEnter);
      if (typeof spec.onExit === 'function') this.on('exit', spec.onExit);
    }

    /**
     * Link an exit. `dir` may be any accepted token; `to` is a Room.
     * Pass { oneWay:true } to skip the reciprocal link.
     */
    link(dir, to, opts) {
      opts = opts || {};
      const d = canonicalDir(dir);
      if (!d) throw new Error('Unknown direction: ' + dir);
      this.exits[d] = Object.assign({ room: to }, opts);
      if (!opts.oneWay && to instanceof Room) {
        const back = DIRECTIONS[d].opposite;
        if (!to.exits[back]) {
          to.exits[back] = { room: this };
        }
      }
      return this;
    }

    exit(dir) {
      const d = canonicalDir(dir);
      return d ? this.exits[d] || null : null;
    }

    exitDirs() {
      return Object.keys(this.exits);
    }

    actors(filter) {
      return this.list((o) => o.is('actor') && (!filter || filter(o)));
    }

    items(filter) {
      return this.list((o) => o.is('item') && (!filter || filter(o)));
    }
  }

  MUD.DIRECTIONS = DIRECTIONS;
  MUD.canonicalDir = canonicalDir;
  MUD.GameObject = GameObject;
  MUD.Container = Container;
  MUD.Item = Item;
  MUD.Actor = Actor;
  MUD.Mob = Mob;
  MUD.Player = Player;
  MUD.Room = Room;

  /* helpers */
  function dedupeKeywords(name, extra) {
    const set = new Set();
    String(name || '')
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean)
      .forEach((w) => set.add(w));
    (extra || []).forEach((k) => set.add(String(k).toLowerCase()));
    return Array.from(set);
  }
})(typeof window !== 'undefined' ? window : this);
