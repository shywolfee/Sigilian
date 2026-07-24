/*
 * world-data.js — the world of Kaelinu: the orchestrator.
 *
 * This file owns the shared World and the zone-file builder context (a room
 * table plus terse room()/link() helpers), hands that context to each area's
 * builder in turn, then applies every collected link at once — so areas may
 * reference each other's rooms freely, in any order.
 *
 * Areas:
 *   Empyrean  — capital of the Seven-Star Empire, on Kaelinu (js/empyrean.js)
 *   Mournfall — the city between worlds, at the end of everything (js/mournfall.js)
 *
 * The two are joined by one uncanny, one-way thread: an impasse in Empyrean's
 * Cour des Miracles that does not end in a wall, and lets out on the Threshold
 * Stone of Mournfall — with no way back.
 */
(function (global) {
  'use strict';

  const MUD = global.MUD;

  MUD.buildWorld = function buildWorld() {
    const world = new MUD.World();

    // Shared builder context passed to every area.
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

    // Build each area. Order is irrelevant to linking (links are deferred),
    // but Empyrean is built first so it holds the default start.
    const emp = MUD.buildEmpyrean(ctx);
    const mourn = MUD.buildMournfall(ctx);

    // The one-way thread between worlds: the impasse that isn't a wall.
    ctx.link(emp.impasseId, emp.impasseDir, mourn.arrivalId, {
      oneWay: true,
    });

    // Apply every link now that all rooms of every area exist.
    for (const [a, dir, b, opts] of pendingLinks) {
      if (!R[a]) throw new Error('link from missing room: ' + a);
      if (!R[b]) throw new Error('link to missing room: ' + b);
      R[a].link(dir, R[b], opts);
    }

    world.setStart(emp.startId);
    return {
      world,
      empyrean: emp.area,
      mournfall: mourn.area,
      R,
      recallId: emp.startId, // the slain wake back at the heart of Empyrean
    };
  };
})(typeof window !== 'undefined' ? window : this);
