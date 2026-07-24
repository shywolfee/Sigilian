/*
 * world-data.js — the orchestrator, now spanning three worlds of the Hutt sky
 * and the Republic core.
 *
 * This file owns the shared World and the zone-file builder context (a room
 * table plus terse room()/link() helpers), hands that context to each area's
 * builder in turn, then applies every collected link at once — so areas may
 * reference each other's rooms freely, in any order. It also wires the
 * cross-world TRANSIT network after every room exists.
 *
 * Areas:
 *   Coruscant   — the galactic capital, a vertical slice of the ecumenopolis
 *                 from the Senate heights to Level 1313 (js/coruscant.js, 200)
 *   Nar Shaddaa — the Smugglers' Moon, the Hutts' vertical city-moon; a
 *                 deliberately unfinished area, built to expand (js/narshaddaa.js, 150)
 *   Nal Hutta   — the Hutt homeworld; only the Bilbousa landing quarter is yet
 *                 built (js/nalhutta.js, 100)
 *
 * TRANSIT connects the three: from Coruscant's Westport you can ride to Nar
 * Shaddaa; from a second berth on Nar Shaddaa, a Hutt shuttle drops to Nal
 * Hutta; and each hop can be made back the way it came. A transit terminal is a
 * room property — `room.transit = { here, intro, destinations: [...] }` — that
 * the `transit` command reads: `transit` lists the numbered destinations,
 * `transit <n>` travels, printing that destination's own journey message.
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

    // Build each area. Links are deferred, so build order is irrelevant.
    const cor = MUD.buildCoruscant(ctx);
    const nar = MUD.buildNarShaddaa(ctx);
    const nal = MUD.buildNalHutta(ctx);

    // Apply every link now that all rooms of every area exist.
    for (const [a, dir, b, opts] of pendingLinks) {
      if (!R[a]) throw new Error('link from missing room: ' + a);
      if (!R[b]) throw new Error('link to missing room: ' + b);
      R[a].link(dir, R[b], opts);
    }

    /* ---- the TRANSIT network ------------------------------------- *
     * Set matching terminals on both ends of each route so travel is
     * round-trip. Each destination carries its own journey message, so the
     * trip out reads nothing like the trip back.
     */

    // Coruscant (Westport departures) -> Nar Shaddaa.
    R.port_departures.transit = {
      here: 'An interstellar transit gate hums against the far wall',
      intro: 'The Westport transit gate books offworld passage to:',
      destinations: [{
        toId: nar.arrivalId,
        label: 'Nar Shaddaa',
        note: 'the Smugglers\' Moon',
        arrival: [
          'You clear the offworld gate and strap into a battered shuttle that ' +
            'lifts hard off Coruscant, the endless city dropping away beneath ' +
            'until the whole gleaming planet is a ball of light behind you.',
          'The jump to lightspeed, the long fall through the dark of the Core, ' +
            'and then a different world swims up — a moon of Nal Hutta, wrapped ' +
            'in its own filthy haze and blazing with a billion unlicensed lights.',
          'The shuttle drops through the smog into a canyon of neon and settles, ' +
            'with a jolt and a hiss, onto a scarred berth of the Smugglers\' Moon. ' +
            'No one asks for your papers. No one, here, ever will.',
        ],
      }],
    };

    // Nar Shaddaa (docking concourse) -> Coruscant (the way back).
    R.nard_concourse.transit = {
      here: 'A grimy transit terminal offers the long ride back to the Core',
      intro: 'The docking-concourse terminal books passage to:',
      destinations: [{
        toId: cor.startId,
        label: 'Coruscant',
        note: 'the galactic capital',
        arrival: [
          'You buy a berth on an outbound shuttle and it claws up off the Moon, ' +
            'the neon canyons falling away into Nal Hutta\'s brown murk below.',
          'The long jump coreward, the clean cold dark, and then the capital ' +
            'itself fills the viewport — Coruscant, a single city wrapped around ' +
            'a world, glittering with the ordered light of a thousand years of law.',
          'The shuttle settles into the ordered bustle of Westport, and the ' +
            'announcer\'s calm voice washes over you with the departures of a ' +
            'hundred worlds. You are back in the Republic, for what it is worth.',
        ],
      }],
    };

    // Nar Shaddaa (Hutt shuttle berth) -> Nal Hutta.
    R.nard_huttberth.transit = {
      here: 'A cartel shuttle idles at the berth, bound for the homeworld',
      intro: 'The Hutt shuttle berth books passage down to:',
      destinations: [{
        toId: nal.arrivalId,
        label: 'Nal Hutta',
        note: 'the Hutt homeworld, the Glorious Jewel',
        arrival: [
          'A Gamorrean waves you aboard the squat cartel shuttle, and it drops ' +
            'off the Moon and down the short gravity well toward the world it ' +
            'orbits — the homeworld itself, swelling brown and heavy in the port.',
          'Down through a sky the colour of a healing bruise, the shuttle ' +
            'descends over a horizon of swamp and smog and low mud-domes: Nal ' +
            'Hutta, which the Hutts, without a flicker of irony, call glorious.',
          'It sets down with a wet thump on a stained pad of the Bilbousa ' +
            'Spaceport, and the ramp drops on air thick as soup and sweet with ' +
            'rot. Welcome to the seat of the Hutts.',
        ],
      }],
    };

    // Nal Hutta (spaceport concourse) -> Nar Shaddaa (the way back).
    R.nal_port_concourse.transit = {
      here: 'A cartel transit terminal offers the shuttle back up to the Moon',
      intro: 'The Bilbousa spaceport terminal books passage up to:',
      destinations: [{
        toId: nar.arrivalId,
        label: 'Nar Shaddaa',
        note: 'the Smugglers\' Moon',
        arrival: [
          'You pay the cartel\'s fare and the shuttle heaves up off the ' +
            'homeworld, Bilbousa\'s brown sprawl and poisoned bogs shrinking ' +
            'away beneath the rising hull.',
          'The short climb up the gravity well, and the Moon swings into ' +
            'view — Nar Shaddaa, ablaze against the dark, a whole world\'s worth ' +
            'of appetite lit up in neon.',
          'The shuttle threads the traffic and settles onto a docking berth of ' +
            'the Smugglers\' Moon, the roar of its endless trade rolling in to ' +
            'meet you the moment the ramp comes down.',
        ],
      }],
    };

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
      narshaddaa: nar.area,
      nalhutta: nal.area,
      R,
      starts,
      recallId: cor.startId,
    };
  };
})(typeof window !== 'undefined' ? window : this);
