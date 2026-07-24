/*
 * combat.js — a small round-based combat engine.
 *
 * One fight at a time (the player versus a single foe), the way a classic MUD
 * handles it. `start()` engages; a round is you-swing-then-they-swing. While
 * engaged, a combat clock auto-runs rounds so a fight resolves on its own — but
 * every round is also reachable directly (combat.round()) so the whole thing is
 * testable headlessly with no timers.
 *
 * Hooks the engine expects on actors (provided by entities.js):
 *   attackRating(), defenseRating(), armorTotal(), rollDamage()
 *   damage(n), alive, xp (mob reward), gainXp() (player)
 */
(function (global) {
  'use strict';

  const MUD = global.MUD;
  const { util } = MUD;

  class Combat {
    constructor(game) {
      this.game = game;
      this.enemy = null;      // the mob currently being fought
      this.roundMs = 2400;
      this._timer = null;
    }

    engaged() { return !!this.enemy && this.enemy.alive; }

    /** Begin (or, if already fighting this foe, advance) a fight. */
    start(mob, aggressor) {
      const p = this.game.player;
      if (!mob) return;
      if (!mob.alive) {
        this.game.print(util.capitalize(util.theName(mob)) + ' is already dead.');
        return;
      }
      if (this.enemy && this.enemy !== mob) {
        this.game.print('You are already fighting ' +
          util.theName(this.enemy) + '!');
        return;
      }
      if (!this.enemy) {
        this.enemy = mob;
        mob.hostile = true;
        if (aggressor === mob) {
          this.game.print(util.capitalize(util.theName(mob)) +
            ' attacks you!');
        } else {
          this.game.print('You attack ' + util.theName(mob) + '!');
        }
        this.game.updateHud();
        this._loop();
      }
      // Resolve a round now; if the mob struck first, it swings before you.
      this.round(aggressor === mob);
    }

    _loop() {
      this.stop();
      if (this.enemy && typeof setInterval === 'function') {
        this._timer = setInterval(() => this.round(), this.roundMs);
      }
    }

    stop() {
      if (this._timer && typeof clearInterval === 'function') {
        clearInterval(this._timer);
      }
      this._timer = null;
    }

    end() {
      this.stop();
      this.enemy = null;
      this.game.updateHud();
    }

    /** One exchange of blows. `enemyFirst` lets an ambusher swing first. */
    round(enemyFirst) {
      const p = this.game.player;
      const m = this.enemy;
      if (!m) return;
      if (!p.alive) return this.defeat();
      if (m.location !== p.location) {
        this.game.print(util.capitalize(util.theName(m)) + ' is no longer here.');
        return this.end();
      }

      const order = enemyFirst ? [[m, p], [p, m]] : [[p, m], [m, p]];
      for (const [attacker, defender] of order) {
        if (!attacker.alive || !defender.alive) continue;
        this.swing(attacker, defender);
        if (!defender.alive) {
          if (defender === m) return this.victory(m);
          if (defender === p) return this.defeat();
        }
      }
      this.game.updateHud();
    }

    swing(attacker, defender) {
      const isPlayer = attacker === this.game.player;
      const A = util.capitalize(isPlayer ? 'you' : util.theName(attacker));
      const D = defender === this.game.player ? 'you' : util.theName(defender);

      if (!this._hits(attacker, defender)) {
        this.game.print(A + (isPlayer ? ' miss ' : ' misses ') + D + '.');
        return;
      }
      const dmg = Math.max(1, attacker.rollDamage() - defender.armorTotal());
      defender.damage(dmg);
      this.game.print(
        A + (isPlayer ? ' hit ' : ' hits ') + D + ' for ' + dmg +
        ' damage.' + (defender.alive ? '' : ' ' + util.capitalize(D) +
          (defender === this.game.player ? ' fall.' : ' dies.'))
      );
    }

    _hits(attacker, defender) {
      const chance = util.clamp(
        0.55 + (attacker.attackRating() - defender.defenseRating()) * 0.04,
        0.1, 0.95
      );
      return Math.random() < chance;
    }

    victory(mob) {
      this.game.print('You have slain ' + util.theName(mob) + '!');
      // Loot: spill the mob's inventory into the room.
      const room = mob.location;
      if (room && mob.inventory.length) {
        const dropped = mob.inventory.slice();
        for (const it of dropped) room.add(it);
        this.game.print(util.capitalize(util.theName(mob)) + ' drops ' +
          util.andList(dropped.map((i) => util.aName(i))) + '.');
      }
      const reward = mob.xp || 0;
      this.enemy = null;
      this.stop();
      if (reward > 0) this.game.player.gainXp(reward, this.game);
      this.game.scheduleRespawn(mob);
      this.game.updateHud();
    }

    defeat() {
      this.game.print('The world dims. You have been slain.');
      this.end();
      this.game.respawnPlayer();
    }

    /** Break off and stumble through a random exit. */
    flee() {
      const p = this.game.player;
      if (!this.enemy) {
        this.game.print('You are not fighting anyone.');
        return;
      }
      const dirs = p.room ? p.room.exitDirs() : [];
      const open = dirs.filter((d) => {
        const ex = p.room.exits[d];
        return ex && !ex.locked;
      });
      if (!open.length) {
        this.game.print('There is nowhere to flee!');
        return;
      }
      const dir = util.pick(open);
      this.game.print('You break off and flee ' + dir + '!');
      this.end();
      this.game.movePlayer(dir);
    }
  }

  MUD.Combat = Combat;
})(typeof window !== 'undefined' ? window : this);
