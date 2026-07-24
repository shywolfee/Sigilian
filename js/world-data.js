/*
 * world-data.js — the world of Coruscant: the orchestrator.
 *
 * This file owns the shared World and the zone-file builder context (a room
 * table plus terse room()/link() helpers), hands that context to the area
 * builder, then applies every collected link at once — so the area may wire its
 * rooms freely, in any order.
 *
 * Area:
 *   Coruscant — the galactic capital, a vertical slice of the ecumenopolis from
 *   the Senate heights down to Level 1313 (js/coruscant.js).
 *
 * The whole 200-room area hangs on a single turbolift spine (u/d exits) that
 * runs from the sunlit government heights at the top, through the Westport
 * spaceport where you begin, down to the drowned foundations at the bottom of
 * the world — so you may ride the lifts both above and below the level you
 * start on. An air-taxi links Westport to the Uscru entertainment strip.
 */
(function (global) {
  'use strict';

  const MUD = global.MUD;

  MUD.buildWorld = function buildWorld() {
    const world = new MUD.World();

    // Shared builder context passed to the area.
    const R = Object.create(null);
    const pendingLinks = [];
    const ctx = {
      world,
      R,
      room(id, title, description, spec) {
        spec = spec || {};
        spec.id = id;
        spec.title = title;
        spec.description = description;
        R[id] = world.room(spec);
        return R[id];
      },
      link(a, dir, b, opts) {
        pendingLinks.push([a, dir, b, opts]);
      },
    };

    // Build the area. Links are deferred, so order within it is irrelevant.
    const cor = MUD.buildCoruscant(ctx);

    // Apply every link now that all rooms exist.
    for (const [a, dir, b, opts] of pendingLinks) {
      if (!R[a]) throw new Error('link from missing room: ' + a);
      if (!R[b]) throw new Error('link to missing room: ' + b);
      R[a].link(dir, R[b], opts);
    }

    // The single start the launcher offers (the great spaceport of Westport).
    const starts = [
      {
        key: 'coruscant', name: 'Coruscant', roomId: cor.startId,
        blurb: 'the crown of the galaxy, at Westport spaceport',
      },
    ];

    world.setStart(cor.startId);
    return {
      world,
      coruscant: cor.area,
      R,
      starts,
      recallId: cor.startId,
    };
  };
})(typeof window !== 'undefined' ? window : this);
