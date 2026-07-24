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
      room: document.getElementById('hud-room'),
      exits: document.getElementById('hud-exits'),
    };

    const game = new MUD.Game({
      world: built.world,
      player,
      dom,
      tickMs: 4000,
    });

    // Expose for tinkering in the console.
    global.game = game;

    game.begin({
      banner: [
        '== MOURNFALL ==',
        'The city between worlds, at the end of everything.',
        'Type "help" for commands, "where" for your bearings, "areas" for a map.',
        '',
      ],
    });

    // Ambient world clock so the city stirs even if you stand still.
    game.startClock();

    /* ---- input wiring ---- */
    const form = document.getElementById('prompt');
    const input = document.getElementById('input');
    const history = [];
    let histIdx = -1;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const line = input.value;
      if (line.trim()) {
        history.push(line);
        histIdx = history.length;
      }
      input.value = '';
      game.handleInput(line);
      input.focus();
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
