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
 * Areas (all deliberately expandable except Coruscant, which is complete):
 *   Coruscant   — the galactic capital, a vertical slice of the ecumenopolis
 *                 from the Senate heights to Level 1313 (js/coruscant.js, 200)
 *   Nar Shaddaa — the Smugglers' Moon, the Hutts' vertical city-moon
 *                 (js/narshaddaa.js, 150)
 *   Nal Hutta   — the Hutt homeworld; only the Bilbousa landing quarter is yet
 *                 built (js/nalhutta.js, 100)
 *   Sullust     — the SoroSuub company-world, its people buried against a lethal
 *                 surface (js/sullust.js, 100)
 *   Ryloth      — the harsh Twi'lek homeworld of the wandering twilight
 *                 (js/ryloth.js, 100)
 *
 * TRANSIT connects them. Coruscant's Westport departures gate is a board that
 * books Nar Shaddaa, Sullust, and Ryloth; from a second berth on Nar Shaddaa a
 * Hutt shuttle drops to Nal Hutta; and every hop can be made back the way it
 * came. A transit terminal is a room property — `room.transit = { here, intro,
 * destinations: [...] }` — that the `transit` command reads: `transit` lists the
 * numbered destinations, `transit <n>` travels, printing that destination's own
 * journey message.
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
    const sul = MUD.buildSullust(ctx);
    const ryl = MUD.buildRyloth(ctx);

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

    // Coruscant (Westport departures) -> the wider galaxy. A departures board:
    // keep Nar Shaddaa first so its list-number is stable, then Sullust, Ryloth.
    R.port_departures.transit = {
      here: 'An interstellar transit gate hums against the far wall',
      intro: 'The Westport transit gate books offworld passage to:',
      destinations: [
        {
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
        },
        {
          toId: sul.arrivalId,
          label: 'Sullust',
          note: 'the SoroSuub company-world',
          arrival: [
            'You board a trim SoroSuub liner — the company runs the route as it ' +
              'runs everything — and Coruscant dwindles astern into the star-glow ' +
              'as the pilot lays in the long course out toward the Rim.',
            'Days in the dark, and then a sullen ember of a world resolves ahead: ' +
              'Sullust, its surface a boil of lava-light and ash-storm under a ' +
              'bruised sky, beautiful and utterly lethal, a planet that wears its ' +
              'fire on the outside.',
            'The liner threads a gauntlet of orbital shields and dives for a black ' +
              'gash in the crust, and the burning surface closes overhead like a ' +
              'lid — and then, impossibly, cool green light: a vast dressed cavern, ' +
              'hushed and clean, the buried world receiving you into its calm.',
          ],
        },
        {
          toId: ryl.arrivalId,
          label: 'Ryloth',
          note: 'the Twi\'lek homeworld',
          arrival: [
            'You take passage on a battered free-trader running the Rim, and ' +
              'Coruscant\'s ordered glitter falls away behind into the long dark ' +
              'of the road out to the edge of the known.',
            'At the end of it hangs Ryloth: a rugged, ochre, slow-turning world, ' +
              'one face seared white beneath a merciless sun, the other lost in ' +
              'freezing night, and between them a thin wandering band of bearable ' +
              'twilight where, somehow, a people live.',
            'The trader drops through a sky the colour of a bruise and slips into ' +
              'a rock-cut hangar-mouth in the flank of a mountain, the great ' +
              'blast-shutter grinding closed behind against the killing day. You ' +
              'have come to Kala\'uun, and to the grief and grace of the Twi\'leks.',
          ],
        },
      ],
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

    // Sullust (Pinyumb port concourse) -> Coruscant (the way back).
    R.sul_port_concourse.transit = {
      here: 'A SoroSuub transit terminal offers the long ride back to the Core',
      intro: 'The Pinyumb port terminal books passage to:',
      destinations: [{
        toId: cor.startId,
        label: 'Coruscant',
        note: 'the galactic capital',
        arrival: [
          'A SoroSuub liner lifts you out of the cool green cavern, up through ' +
            'the shield-gauntlet and the fire, and the buried world falls away ' +
            'beneath its boiling surface until only the ember of it remains.',
          'The long haul coreward, and then the capital swells in the ' +
            'viewport — Coruscant, city without end, blazing with the ordered ' +
            'light of a thousand years of law after the honest dark of Sullust.',
          'The liner settles into the ceaseless bustle of Westport, and the ' +
            'announcer\'s voice and the crush of a hundred worlds close over you ' +
            'again. The air here, at least, no one thinks to charge you for. Yet.',
        ],
      }],
    };

    // Ryloth (Kala'uun starport concourse) -> Coruscant (the way back).
    R.ryl_port_concourse.transit = {
      here: 'A weathered transit terminal offers the long ride back to the Core',
      intro: 'The Kala\'uun starport terminal books passage to:',
      destinations: [{
        toId: cor.startId,
        label: 'Coruscant',
        note: 'the galactic capital',
        arrival: [
          'A free-trader takes you on, and the mountain-starport\'s shutter ' +
            'grinds open into the brief twilight just long enough to loose the ' +
            'ship into a bruised sky, Ryloth\'s harsh ochre face dwindling below.',
          'The long road back from the Rim, and then Coruscant fills the dark ' +
            'ahead — a whole world made city, glittering and vast and ' +
            'untroubled, a place that has never once had to burrow to survive.',
          'The trader sets down amid the ordered roar of Westport, and the ' +
            'capital swallows you back into its bright indifference. Somewhere ' +
            'behind you, a world you will not forget goes on enduring its suns.',
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
      sullust: sul.area,
      ryloth: ryl.area,
      R,
      starts,
      recallId: cor.startId,
    };
  };
})(typeof window !== 'undefined' ? window : this);
