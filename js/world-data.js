/*
 * world-data.js — the testbed content.
 *
 * Two rooms that exercise the framework: items (portable + fixed), a talking
 * NPC, a wandering/idle mob with a tick behaviour, a locked-then-unlockable
 * exit, and custom onUse / onLook hooks. Keep this file "data-ish"; all the
 * machinery lives in the framework files.
 */
(function (global) {
  'use strict';

  const MUD = global.MUD;

  MUD.buildWorld = function buildWorld() {
    const world = new MUD.World();

    /* ---------------- Room 1: the Antechamber ------------------- */
    const antechamber = world.room({
      id: 'antechamber',
      title: 'The Sigil Antechamber',
      description:
        'A circular stone chamber, its floor carved with a faintly glowing ' +
        'sigil. Dust hangs in a shaft of pale light from somewhere above. A ' +
        'heavy oak door stands to the north, and a dark stair spirals down.',
    });

    // A portable item with a rich description and a use hook.
    const torch = world.item({
      name: 'brass torch',
      keywords: ['torch', 'brass', 'light'],
      short: 'A brass torch lies on the floor, unlit.',
      description:
        'A stout brass torch wrapped in oiled cloth. It is not currently lit.',
      weight: 2,
      onUse(player, game) {
        if (this.is('lit')) {
          game.print('The torch is already burning brightly.');
          return;
        }
        this.tags.add('lit');
        this.short = 'A brass torch burns here, throwing dancing shadows.';
        this.description = 'The brass torch burns with a steady orange flame.';
        game.print('You strike the torch alight. Shadows leap up the walls.');
      },
    });

    // A fixed (non-portable) feature you can examine but not take.
    const sigil = world.item({
      name: 'glowing sigil',
      keywords: ['sigil', 'floor', 'carving', 'glow'],
      portable: false,
      short: null, // described in the room text; no separate ground line
      description:
        'The sigil is an interlocking knot of nine rings. As you study it, ' +
        'the glow seems to pulse in time with your heartbeat.',
      onLook() {
        // Hooks can mutate state; here we just flavour repeated looks.
      },
    });
    sigil.short = 'The sigil pulses gently underfoot.';

    // A rusty key that will unlock the north door.
    const key = world.item({
      name: 'rusty key',
      keywords: ['key', 'rusty'],
      short: 'A rusty iron key lies half-buried in the dust.',
      description: 'A pitted iron key, orange with rust but still sound.',
      weight: 1,
    });

    antechamber.add(torch);
    antechamber.add(sigil);
    antechamber.add(key);

    /* ---------------- Room 2: the Gallery ----------------------- */
    const gallery = world.room({
      id: 'gallery',
      title: 'The Whispering Gallery',
      description:
        'A long vaulted hall lined with cracked mirrors. Your reflection ' +
        'lags a half-second behind you in each one. Faint whispering rides ' +
        'the air. The chamber lies back to the south.',
    });

    // An NPC with branching dialogue and a small tick behaviour.
    const warden = world.mob({
      name: 'mirror warden',
      keywords: ['warden', 'mirror', 'figure'],
      short: 'A translucent Mirror Warden drifts among the glass.',
      description:
        'A tall, translucent figure the colour of tarnished silver. It has ' +
        'no face, only a smooth mirrored oval that shows you back to yourself.',
      maxHp: 30,
      hp: 30,
      stats: { str: 12, dex: 14, con: 12, int: 16 },
      dialogue(player) {
        return player.carrying('key')
          ? 'The rust you carry is a memory of iron. Let it go, and pass.'
          : 'Only what is reflected may proceed. Seek the key of rust.';
      },
      onTalk(player, game) {
        // First conversation unlocks the door back in the antechamber.
        const north = antechamber.exit('north');
        if (north && north.locked && player.carrying('key')) {
          north.locked = false;
          game.print('(The Warden inclines its head. Somewhere, a lock turns.)');
        }
      },
      onTick(game, turn) {
        // Occasional ambient flavour, only when the player is present.
        if (this.room !== game.player.room) return;
        if (turn % 3 === 0) {
          game.print(MUD.util.pick([
            'The Warden turns slowly, tracking your reflection.',
            'A whisper brushes past: your own voice, run backwards.',
            'The mirrors ripple as the Warden drifts by.',
          ]));
        }
      },
    });

    const shard = world.item({
      name: 'mirror shard',
      keywords: ['shard', 'glass', 'mirror'],
      short: 'A jagged mirror shard glints on the flagstones.',
      description:
        'A dagger-length shard of mirror. Your reflected eye watches from ' +
        'its surface. The edge is wickedly sharp.',
      weight: 1,
      onGet(player, game) {
        game.print('(Careful — the edge nicks your thumb.)');
        player.damage(1);
      },
    });

    gallery.add(warden);
    gallery.add(shard);

    /* ---------------- wire the exits ---------------------------- */
    // Down from antechamber leads to the gallery (and back up automatically).
    antechamber.link('down', gallery);

    // The north door is locked until the Warden is spoken to with the key.
    antechamber.link('north', gallery, {
      oneWay: true,
      locked: true,
      lockedMsg: 'The oak door is locked. Perhaps someone here knows the way.',
    });

    world.setStart(antechamber);
    return { world, antechamber, gallery };
  };
})(typeof window !== 'undefined' ? window : this);
