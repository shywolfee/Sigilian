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
 *   Lunden    — capital of the kingdom of Albeon, over the Sleeve (js/lunden.js)
 *   Mournfall — the city between worlds, at the end of everything (js/mournfall.js)
 *
 * Empyrean and Lunden are joined by the cross-Sleeve packet: board at the
 * Custom-House in Empyrean, arrive at the Packet-Stairs in Lunden, and board
 * again to return. The player chooses which of the two capitals to begin in.
 *
 * Empyrean is also joined to Mournfall by one uncanny, one-way thread: an
 * impasse in the Cour des Miracles that does not end in a wall, and lets out on
 * the Threshold Stone of Mournfall — with no way back.
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

    // Build each area. Order is irrelevant to linking (links are deferred).
    const emp = MUD.buildEmpyrean(ctx);
    const lun = MUD.buildLunden(ctx);
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

    // The two capitals the player may choose between at the start.
    const starts = [
      {
        key: 'empyrean', name: 'Empyrean', roomId: emp.startId,
        blurb: 'capital of the Seven-Star Empire',
      },
      {
        key: 'lunden', name: 'Lunden', roomId: lun.startId,
        blurb: 'capital of the kingdom of Albeon, across the Sleeve',
      },
    ];

    world.setStart(emp.startId); // a sane default if no choice is made
    return {
      world,
      empyrean: emp.area,
      lunden: lun.area,
      mournfall: mourn.area,
      R,
      starts,
      recallId: emp.startId, // overridden per chosen start in main.js
    };
  };
})(typeof window !== 'undefined' ? window : this);
