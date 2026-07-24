/*
 * game.js — the engine that binds world + commands + DOM together.
 *
 * Responsibilities:
 *   - own the player, world, and command registry
 *   - render output to the #output log and update the HUD
 *   - read player input and dispatch through the parser
 *   - run a lightweight tick loop so mobs can act
 */
(function (global) {
  'use strict';

  const MUD = global.MUD;
  const { util } = MUD;

  class Game {
    constructor(opts) {
      opts = opts || {};
      this.world = opts.world;
      this.player = opts.player;
      this.commands = opts.commands || MUD.installDefaultCommands(new MUD.CommandRegistry());

      // DOM handles (optional — engine also works headless for tests).
      this.dom = opts.dom || null;

      this.turn = 0;
      this._tickHandlers = [];
      this._tickTimer = null;
      this.tickMs = opts.tickMs || 3000;

      // Combat + respawn.
      this.combat = new MUD.Combat(this);
      this.recallId = opts.recallId || null;   // where the slain wake; defaults to start
      this._respawns = [];                      // pending mob respawns
    }

    /* ---- output -------------------------------------------------- */

    /** Print one or more lines to the log (and mirror to console headless). */
    print(text) {
      if (text == null) return;
      const lines = Array.isArray(text) ? text : [text];
      for (const line of lines) this._emitLine(String(line), 'msg');
    }

    /** Echo the player's typed command back into the log. */
    echo(text) {
      this._emitLine('> ' + text, 'echo');
    }

    /** Room titles / headers get their own style. */
    heading(text) {
      this._emitLine(String(text), 'heading');
    }

    _emitLine(text, cls) {
      if (this.dom && this.dom.output) {
        const div = document.createElement('div');
        div.className = 'line line-' + cls;
        div.textContent = text;
        this.dom.output.appendChild(div);
        this.dom.output.scrollTop = this.dom.output.scrollHeight;
      } else if (global.console) {
        console.log(text);
      }
    }

    clear() {
      if (this.dom && this.dom.output) this.dom.output.innerHTML = '';
    }

    /* ---- rendering the world ------------------------------------ */

    describeRoom(room, opts) {
      opts = opts || {};
      room = room || this.player.room;
      if (!room) return;

      this.heading(room.title);
      if (room.description) this.print(room.description);

      // Items on the ground.
      const items = room.items();
      for (const it of items) this.print(it.roomLine());

      // Other actors present (mobs, other players — not you).
      const others = room.actors((a) => a !== this.player);
      for (const a of others) {
        this.print(a.roomLine ? a.roomLine() : util.capitalize(util.aName(a)) + ' is here.');
      }

      // Exits.
      const dirs = room.exitDirs();
      this.print(
        dirs.length
          ? 'Exits: ' + util.andList(dirs.map(util.capitalize)) + '.'
          : 'There are no obvious exits.'
      );

      this.updateHud();
    }

    /* ---- movement ----------------------------------------------- */

    movePlayer(dir) {
      const from = this.player.room;
      const exit = from ? from.exit(dir) : null;
      if (!exit) {
        this.print('You cannot go ' + dir + '.');
        return false;
      }
      if (exit.locked) {
        this.print(exit.lockedMsg || 'That way is locked.');
        return false;
      }
      // Leaving a room breaks off any fight (you outran it).
      if (this.combat.engaged()) this.combat.end();

      const to = exit.room;
      from.emit('exit', this.player, dir, to);
      to.add(this.player);          // Container.add re-parents the player
      to.emit('enter', this.player, dir, from);
      this.describeRoom(to);
      this.tick();                  // moving advances the world a step
      this.checkAggro();            // hostile locals may set upon you
      return true;
    }

    /** If a hostile, living mob shares the room and no fight is on, it strikes. */
    checkAggro() {
      if (this.combat.engaged()) return;
      const room = this.player.room;
      if (!room) return;
      const foe = room.actors(
        (a) => a.is('mob') && a.alive && a.hostile && a !== this.player
      )[0];
      if (foe) this.combat.start(foe, foe); // foe is the aggressor
    }

    /* ---- respawn / recall --------------------------------------- */

    scheduleRespawn(mob) {
      if (!mob || !mob.respawns) return;
      if (typeof setTimeout !== 'function') return; // headless: no timers
      const self = this;
      setTimeout(function () {
        mob.hp = mob.maxHp;
        mob.alive = true;
        mob.hostile = mob.hostile; // preserved
        if (self.player.room === mob.location) {
          self.print(util.capitalize(util.aName(mob)) + ' appears.');
          self.checkAggro();
        }
      }, mob.respawns * 1000);
    }

    respawnPlayer() {
      const p = this.player;
      const recall = (this.recallId && this.world.get(this.recallId)) ||
        this.world.startRoom();
      p.alive = true;
      p.hp = Math.max(1, Math.floor(p.maxHp / 2));
      recall.add(p);
      this.heading('You wake, gasping, somewhere safe.');
      this.describeRoom(recall);
    }

    /* ---- HUD ----------------------------------------------------- */

    updateHud() {
      const d = this.dom;
      if (!d) return;
      const p = this.player;
      if (d.hpFill) {
        const pct = Math.round((p.hp / p.maxHp) * 100);
        d.hpFill.style.width = pct + '%';
        d.hpFill.className = 'hud-fill' + (pct <= 25 ? ' danger' : pct <= 50 ? ' warn' : '');
      }
      if (d.hpText) d.hpText.textContent = p.hp + '/' + p.maxHp;
      if (d.level) d.level.textContent = String(p.level);
      if (d.xpFill) {
        const need = p.xpToNext();
        d.xpFill.style.width = Math.round((p.xp / need) * 100) + '%';
      }
      if (d.xpText) d.xpText.textContent = p.xp + '/' + p.xpToNext();
      if (d.target) {
        const foe = this.combat.enemy;
        d.target.textContent = foe
          ? util.capitalize(util.theName(foe)) + '  ' + foe.hp + '/' + foe.maxHp
          : '—';
      }
      if (d.room) d.room.textContent = p.room ? p.room.title : '—';
      if (d.exits) {
        const dirs = p.room ? p.room.exitDirs() : [];
        d.exits.textContent = dirs.length
          ? dirs.map((x) => MUD.DIRECTIONS[x].abbr.toUpperCase()).join(' ')
          : '—';
      }
    }

    /* ---- tick loop ---------------------------------------------- */

    onTick(fn) {
      this._tickHandlers.push(fn);
      return this;
    }

    /** Advance the world one step: fire mob + registered tick handlers. */
    tick() {
      this.turn++;
      for (const actor of this.world.allActors()) {
        if (actor.alive && actor._handlers && actor._handlers.tick) {
          actor.emit('tick', this, this.turn);
        }
      }
      for (const fn of this._tickHandlers) fn(this, this.turn);
      this.updateHud();
    }

    startClock() {
      if (this._tickTimer) return;
      this._tickTimer = setInterval(() => this.tick(), this.tickMs);
    }

    stopClock() {
      if (this._tickTimer) {
        clearInterval(this._tickTimer);
        this._tickTimer = null;
      }
    }

    /* ---- input -------------------------------------------------- */

    handleInput(line) {
      MUD.parseAndRun(this, line);
    }

    /* ---- lifecycle ---------------------------------------------- */

    /** Place the player in the start room and show the intro. */
    begin(opts) {
      opts = opts || {};
      const start = opts.startRoom || this.world.startRoom();
      start.add(this.player);
      if (opts.banner) {
        for (const line of opts.banner) this.heading(line);
      }
      this.describeRoom(start);
      this.checkAggro();
    }
  }

  MUD.Game = Game;
})(typeof window !== 'undefined' ? window : this);
