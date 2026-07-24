/*
 * commands.js — the command registry, parser, and the built-in verb set.
 *
 * Design goals:
 *   - Any command can be abbreviated to an unambiguous prefix ("inv", "l").
 *   - Explicit short aliases win over prefix guessing ("n" is always north).
 *   - Handlers receive a rich context so verbs stay short and declarative.
 *
 * A command handler is `(ctx) => void`, where ctx = {
 *     game, player, room, world,
 *     verb,        // the canonical command name matched
 *     args,        // array of remaining tokens
 *     arg,         // args joined back into a string (the "noun phrase")
 *     rest,        // arg with a leading "at"/"to" preposition stripped
 *     out,         // game.print helpers
 *   }
 */
(function (global) {
  'use strict';

  const MUD = global.MUD;
  const { util, canonicalDir, DIRECTIONS } = MUD;

  class CommandRegistry {
    constructor() {
      this.commands = [];          // ordered; registration order breaks ties
      this._byAlias = Object.create(null);
    }

    /**
     * register({ name, aliases, help, usage, handler })
     * `aliases` are exact tokens that always resolve to this command.
     */
    register(def) {
      const cmd = {
        name: def.name,
        aliases: (def.aliases || []).map((a) => a.toLowerCase()),
        help: def.help || '',
        usage: def.usage || def.name,
        handler: def.handler,
        hidden: !!def.hidden,
      };
      this.commands.push(cmd);
      this._byAlias[cmd.name.toLowerCase()] = cmd;
      for (const a of cmd.aliases) this._byAlias[a] = cmd;
      return this;
    }

    /**
     * Resolve a raw verb token to a command.
     * Returns { command } | { ambiguous: [names] } | null.
     */
    resolve(token) {
      token = String(token || '').toLowerCase();
      if (!token) return null;

      // 1) exact name or explicit alias
      if (this._byAlias[token]) return { command: this._byAlias[token] };

      // 2) unique prefix among command names
      const hits = this.commands.filter(
        (c) => !c.hidden && c.name.indexOf(token) === 0
      );
      if (hits.length === 1) return { command: hits[0] };
      if (hits.length > 1) {
        // Prefer an exact-length-1 canonical single-letter if present handled
        // above; otherwise report ambiguity.
        return { ambiguous: hits.map((c) => c.name) };
      }
      return null;
    }

    all() {
      return this.commands.filter((c) => !c.hidden);
    }
  }

  /* ------------------------------------------------------------------ *
   *  Parser — turns a raw line into { verb, args } and dispatches.
   * ------------------------------------------------------------------ */
  function parseAndRun(game, line) {
    line = String(line || '').trim();
    if (!line) return;

    game.echo(line); // echo the player's input into the log

    const tokens = line.split(/\s+/);
    let verbToken = tokens[0].toLowerCase();
    let args = tokens.slice(1);

    // Bare direction? ("n", "northeast", "go" handled by a command)
    if (canonicalDir(verbToken) && args.length === 0) {
      return game.commands.resolve('go').command.handler(
        makeCtx(game, 'go', [verbToken])
      );
    }

    const res = game.commands.resolve(verbToken);
    if (!res) {
      game.print("I don't understand \"" + verbToken + "\".");
      return;
    }
    if (res.ambiguous) {
      game.print(
        'Did you mean: ' + util.andList(res.ambiguous) + '?'
      );
      return;
    }

    const ctx = makeCtx(game, res.command.name, args);
    try {
      res.command.handler(ctx);
    } catch (err) {
      game.print('[error] ' + (err && err.message ? err.message : err));
      if (global.console) console.error(err);
    }
  }

  function makeCtx(game, verb, args) {
    const arg = args.join(' ');
    const rest = arg.replace(/^(at|to|on|in|with|the)\s+/i, '');
    return {
      game,
      player: game.player,
      room: game.player.room,
      world: game.world,
      verb,
      args,
      arg,
      rest,
      out: game,
      print: (s) => game.print(s),
    };
  }

  /* ------------------------------------------------------------------ *
   *  Built-in command set. Installed onto a registry by installDefaults.
   * ------------------------------------------------------------------ */
  function installDefaults(reg) {
    reg.register({
      name: 'look',
      aliases: ['l'],
      usage: 'look / look at <thing>',
      help: 'Survey your surroundings, or examine something in detail.',
      handler(ctx) {
        if (!ctx.rest) {
          ctx.game.describeRoom(ctx.room);
          return;
        }
        const target = findVisible(ctx, ctx.rest);
        if (!target) {
          ctx.print("You don't see \"" + ctx.rest + '" here.');
          return;
        }
        ctx.print(target.describe());
        // Reveal actor vitals / container contents where sensible.
        if (target.is('actor') && !target.is('player')) {
          ctx.print(
            util.capitalize(util.theName(target)) +
              (target.alive
                ? ' looks to be at ' + hpWord(target) + ' health.'
                : ' is dead.')
          );
        }
      },
    });

    reg.register({
      name: 'examine',
      aliases: ['exa', 'x'],
      usage: 'examine <thing>',
      help: 'Examine something closely (same as look at).',
      handler(ctx) {
        ctx.game.commands.resolve('look').command.handler(
          Object.assign({}, ctx, { rest: ctx.rest || ctx.arg, arg: ctx.arg })
        );
      },
    });

    reg.register({
      name: 'go',
      aliases: [],
      usage: 'go <direction>',
      help: 'Move in a compass direction. You can also just type the direction.',
      handler(ctx) {
        const dirTok = ctx.args[0] || ctx.rest;
        const dir = canonicalDir(dirTok);
        if (!dir) {
          ctx.print('Go where? Try a direction like north, se, or up.');
          return;
        }
        ctx.game.movePlayer(dir);
      },
    });

    // Direction shortcut commands so "n", "sw", "up" work as verbs and also
    // show up in help. Each simply delegates to movePlayer.
    for (const name in DIRECTIONS) {
      const info = DIRECTIONS[name];
      reg.register({
        name: name,
        aliases: [info.abbr],
        hidden: true, // listed compactly under "movement" in help instead
        usage: name,
        help: 'Move ' + name + '.',
        handler(ctx) {
          ctx.game.movePlayer(name);
        },
      });
    }

    reg.register({
      name: 'exits',
      aliases: [],
      usage: 'exits',
      help: 'List the visible exits from this room.',
      handler(ctx) {
        const dirs = ctx.room.exitDirs();
        if (!dirs.length) ctx.print('There are no obvious exits.');
        else ctx.print('Obvious exits: ' + util.andList(dirs.map(util.capitalize)) + '.');
      },
    });

    reg.register({
      name: 'inventory',
      aliases: ['inv', 'i'],
      usage: 'inventory',
      help: 'List what you are carrying.',
      handler(ctx) {
        const inv = ctx.player.inventory;
        if (!inv.length) {
          ctx.print('You are carrying nothing.');
          return;
        }
        ctx.print('You are carrying:');
        for (const it of inv) {
          ctx.print('  ' + util.capitalize(util.aName(it)));
        }
        ctx.print(
          '(' + ctx.player.carriedWeight() + '/' + ctx.player.capacity + ' load)'
        );
      },
    });

    reg.register({
      name: 'get',
      aliases: ['take', 'g'],
      usage: 'get <thing>',
      help: 'Pick up an item from the room.',
      handler(ctx) {
        if (!ctx.rest) {
          ctx.print('Get what?');
          return;
        }
        if (/^(all|everything)$/i.test(ctx.rest)) {
          return getAll(ctx);
        }
        const item = ctx.room.find(ctx.rest, (o) => o.is('item'));
        if (!item) {
          ctx.print("You don't see \"" + ctx.rest + '" here.');
          return;
        }
        pickUp(ctx, item);
      },
    });

    reg.register({
      name: 'drop',
      aliases: ['dr'],
      usage: 'drop <thing>',
      help: 'Drop an item you are carrying.',
      handler(ctx) {
        if (!ctx.rest) {
          ctx.print('Drop what?');
          return;
        }
        if (/^(all|everything)$/i.test(ctx.rest)) {
          const carried = ctx.player.inventory.slice();
          if (!carried.length) return ctx.print('You are carrying nothing.');
          carried.forEach((it) => dropItem(ctx, it));
          return;
        }
        const item = ctx.player.carrying(ctx.rest);
        if (!item) {
          ctx.print("You aren't carrying \"" + ctx.rest + '".');
          return;
        }
        dropItem(ctx, item);
      },
    });

    reg.register({
      name: 'use',
      aliases: [], // note: no 'u' — that's reserved for the "up" direction
      usage: 'use <thing>',
      help: 'Use or activate an item you carry or can see.',
      handler(ctx) {
        if (!ctx.rest) return ctx.print('Use what?');
        const item =
          ctx.player.carrying(ctx.rest) ||
          ctx.room.find(ctx.rest, (o) => o.is('item'));
        if (!item) return ctx.print("You don't have \"" + ctx.rest + '".');
        if (item._handlers && item._handlers.use) {
          item.emit('use', ctx.player, ctx.game);
        } else {
          ctx.print('You see no obvious way to use ' + util.theName(item) + '.');
        }
      },
    });

    reg.register({
      name: 'talk',
      aliases: ['say', 'greet'],
      usage: 'talk to <someone>',
      help: 'Talk to a person or creature.',
      handler(ctx) {
        if (!ctx.rest) return ctx.print('Talk to whom?');
        const mob = ctx.room.find(ctx.rest, (o) => o.is('mob'));
        if (!mob) return ctx.print("There's no \"" + ctx.rest + '" here to talk to.');
        if (mob._handlers && mob._handlers.talk) mob.emit('talk', ctx.player, ctx.game);
        ctx.print(util.capitalize(util.theName(mob)) + ' says: "' + mob.speak(ctx.player) + '"');
      },
    });

    reg.register({
      name: 'stats',
      aliases: ['score', 'st'],
      usage: 'stats',
      help: 'Show your character sheet.',
      handler(ctx) {
        const p = ctx.player;
        ctx.print('--- ' + util.capitalize(p.name) + ' ---');
        ctx.print('Level ' + p.level + '   HP ' + p.hp + '/' + p.maxHp);
        const s = p.stats;
        ctx.print(
          'STR ' + s.str + '  DEX ' + s.dex + '  CON ' + s.con + '  INT ' + s.int
        );
        ctx.print('Load ' + p.carriedWeight() + '/' + p.capacity);
      },
    });

    reg.register({
      name: 'where',
      aliases: ['wh'],
      usage: 'where',
      help: 'Name the area you are in and how many rooms it holds.',
      handler(ctx) {
        const area = ctx.room && ctx.room.area;
        if (!area) {
          ctx.print('You are nowhere in particular.');
          return;
        }
        const n = area.roomCount;
        ctx.print('You are in ' + area.name + '.');
        ctx.print(
          'This area contains ' + n + ' room' + (n === 1 ? '' : 's') + '.'
        );
      },
    });

    reg.register({
      name: 'areas',
      aliases: ['ar'],
      usage: 'areas',
      help: 'List every area of the world and its room count.',
      handler(ctx) {
        const areas = ctx.world.allAreas();
        if (!areas.length) {
          ctx.print('The world has no named areas.');
          return;
        }
        const here = ctx.room && ctx.room.area;
        ctx.print('Known areas:');
        let total = 0;
        for (const a of areas) {
          total += a.roomCount;
          const mark = a === here ? ' *' : '';
          ctx.print(
            '  ' + a.name + ' — ' + a.roomCount +
              ' room' + (a.roomCount === 1 ? '' : 's') + mark
          );
        }
        ctx.print('(' + areas.length + ' area' + (areas.length === 1 ? '' : 's') +
          ', ' + total + ' rooms total; * = current)');
      },
    });

    reg.register({
      name: 'help',
      aliases: ['?', 'commands'],
      usage: 'help [command]',
      help: 'List commands, or get detail on one.',
      handler(ctx) {
        if (ctx.rest) {
          const res = ctx.game.commands.resolve(ctx.rest.split(/\s+/)[0]);
          if (res && res.command) {
            const c = res.command;
            ctx.print(util.capitalize(c.name) +
              (c.aliases.length ? '  (' + c.aliases.join(', ') + ')' : ''));
            ctx.print('  Usage: ' + c.usage);
            ctx.print('  ' + c.help);
          } else {
            ctx.print('No help for "' + ctx.rest + '".');
          }
          return;
        }
        ctx.print('Movement: n s e w u d ne nw se sw  (or "go <dir>")');
        ctx.print('Commands (any unambiguous prefix works):');
        for (const c of ctx.game.commands.all()) {
          const al = c.aliases.length ? '  [' + c.aliases.join(' ') + ']' : '';
          ctx.print('  ' + util.capitalize(c.name) + al + ' — ' + c.help);
        }
      },
    });

    return reg;
  }

  /* ------------------------------------------------------------------ *
   *  Shared verb helpers.
   * ------------------------------------------------------------------ */
  function findVisible(ctx, token) {
    // Look at things in the room first, then inventory, then the player.
    return (
      ctx.room.find(token) ||
      ctx.player.find(token) ||
      (MUD.match.score(token, ctx.player) > 0 ? ctx.player : null)
    );
  }

  function pickUp(ctx, item) {
    if (!item.portable) {
      ctx.print(util.capitalize(util.theName(item)) + " won't budge.");
      return;
    }
    if (ctx.player.carriedWeight() + (item.weight || 0) > ctx.player.capacity) {
      ctx.print("You can't carry any more.");
      return;
    }
    ctx.player.add(item);
    item.emit('get', ctx.player, ctx.game);
    ctx.print('You take ' + util.theName(item) + '.');
  }

  function getAll(ctx) {
    const items = ctx.room.items((o) => o.portable);
    if (!items.length) return ctx.print('There is nothing here to take.');
    items.forEach((it) => pickUp(ctx, it));
  }

  function dropItem(ctx, item) {
    ctx.room.add(item);
    item.emit('drop', ctx.player, ctx.game);
    ctx.print('You drop ' + util.theName(item) + '.');
  }

  function hpWord(actor) {
    const frac = actor.hp / actor.maxHp;
    if (frac > 0.8) return 'full';
    if (frac > 0.5) return 'good';
    if (frac > 0.25) return 'poor';
    return 'critical';
  }

  MUD.CommandRegistry = CommandRegistry;
  MUD.parseAndRun = parseAndRun;
  MUD.installDefaultCommands = installDefaults;
})(typeof window !== 'undefined' ? window : this);
