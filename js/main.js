/*
 * main.js — bootstrap. Wires the DOM to the engine and starts the game.
 */
(function (global) {
  'use strict';

  const MUD = global.MUD;

  function boot() {
    const built = MUD.buildWorld();

    const player = new MUD.Player({
      name: 'you',
      maxHp: 25,
      hp: 25,
      stats: { str: 12, dex: 11, con: 12, int: 13 },
      capacity: 20,
    });

    const dom = {
      output: document.getElementById('output'),
      hpFill: document.getElementById('hp-fill'),
      hpText: document.getElementById('hp-text'),
      level: document.getElementById('hud-level'),
      xpFill: document.getElementById('xp-fill'),
      xpText: document.getElementById('hud-xp'),
      target: document.getElementById('hud-target'),
      room: document.getElementById('hud-room'),
      exits: document.getElementById('hud-exits'),
    };

    const game = new MUD.Game({
      world: built.world,
      player,
      dom,
      tickMs: 4000,
      recallId: built.recallId,   // where the slain wake (set on choice below)
    });

    // Expose for tinkering in the console.
    global.game = game;

    /* ---- start-city selection ---------------------------------- *
     * Before play begins, the game asks which capital to start in. Until a
     * valid choice is made, the input box feeds this chooser instead of the
     * command parser.
     */
    const starts = built.starts || [];
    let started = false;

    function showChooser() {
      game.heading('== SIGILIAN ==');
      game.print('Upon the world of Kaelinu, two capitals face each other ' +
        'across the narrow sea called the Sleeve.');
      game.print('');
      for (const s of starts) {
        game.print('  ' + s.name.toUpperCase() + ' — ' + s.blurb + '.');
      }
      game.print('');
      game.print('Where will you begin? Type ' +
        starts.map((s) => s.name).join(' or ') + '.');
    }

    function matchStart(text) {
      const t = String(text || '').trim().toLowerCase();
      if (!t) return null;
      // by number
      const n = parseInt(t, 10);
      if (n >= 1 && n <= starts.length) return starts[n - 1];
      // by name prefix (empyrean/emp/e, lunden/lun/l, ...)
      return starts.find((s) => s.name.toLowerCase().indexOf(t) === 0) || null;
    }

    function beginIn(choice) {
      started = true;
      const startRoom = game.world.get(choice.roomId);
      game.recallId = choice.roomId; // recall to your chosen home
      game.clear();
      game.begin({
        banner: [
          '== SIGILIAN ==',
          choice.name + ', ' + choice.blurb + ', upon the world of Kaelinu.',
          'Type "help" for commands, "where" for your bearings, "areas" for a map.',
          '',
        ],
        startRoom: startRoom,
      });
      game.startClock(); // the world stirs even while you stand still
    }

    showChooser();

    /* ---- input wiring ---- */
    const form = document.getElementById('prompt');
    const input = document.getElementById('input');
    const history = [];
    let histIdx = -1;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const line = input.value;
      input.value = '';
      input.focus();

      if (!started) {
        game.echo(line);
        const choice = matchStart(line);
        if (choice) beginIn(choice);
        else game.print('Please type ' +
          starts.map((s) => s.name).join(' or ') + '.');
        return;
      }

      if (line.trim()) {
        history.push(line);
        histIdx = history.length;
      }
      game.handleInput(line);
    });

    // Up/Down arrows recall command history.
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowUp') {
        if (histIdx > 0) {
          histIdx--;
          input.value = history[histIdx];
          moveCaretToEnd(input);
          e.preventDefault();
        }
      } else if (e.key === 'ArrowDown') {
        if (histIdx < history.length - 1) {
          histIdx++;
          input.value = history[histIdx];
        } else {
          histIdx = history.length;
          input.value = '';
        }
        e.preventDefault();
      }
    });

    // Keep focus on the input when clicking anywhere in the screen.
    document.getElementById('screen').addEventListener('click', function () {
      input.focus();
    });
  }

  function moveCaretToEnd(el) {
    const v = el.value;
    el.value = '';
    el.value = v;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})(typeof window !== 'undefined' ? window : this);
