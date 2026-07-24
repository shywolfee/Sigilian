# Sigilian — a browser MUD framework

A small, dependency-free framework for building text adventures / MUDs that run
entirely in the browser. No build step, no server: **open `index.html`** and
play. The engine is plain ES5-ish JavaScript organised under a single `MUD`
global, so it also runs headless (in Node/tests) exactly as it does in the page.

The repo ships one large hand-written area — **Coruscant**, the galactic
capital, a 200-room vertical slice through the ecumenopolis from the Senate
heights down to Level 1313 — as a *Star Wars* fan-game testbed. The point,
though, is the framework in `js/`; the content is meant to be replaced.

```
index.html          # page shell + HUD, loads the scripts in order
styles.css          # terminal look & responsive layout
js/
  core.js           # utilities, name-matching, event emitter
  entities.js       # GameObject → Item / Actor → Mob / Player, Room, directions
  world.js          # World registry, Area, content factories
  commands.js       # command registry, parser, built-in verbs
  combat.js         # round-based combat engine
  game.js           # engine: output, movement, HUD, ticks, combat, respawn, ferry
  coruscant.js      # content: Coruscant, the crown of the galaxy (200)
  world-data.js     # orchestrator: builds the area into one world
  main.js           # bootstrap: the arrival screen, DOM wiring, game start
```

## Playing

At launch the game welcomes you and drops you at **Westport** spaceport on
Coruscant — press ENTER to arrive. Type `help` in-game. Highlights:

- **Movement**: `n s e w u d ne nw se sw`, or `go <dir>`. Bare directions work.
  `u`/`d` ride the **turbolifts** between the levels of the city.
- **Looking**: `look`, `look at <thing>`, `examine <thing>` / `x <thing>`.
- **Items**: `get <thing>` (`get all`), `drop <thing>`, `inventory` / `i`,
  `use <thing>`.
- **Combat**: `attack <foe>` / `kill` / `k`, `consider <foe>` (size it up),
  `flee`. `wield <weapon>`, `wear <armor>`, `remove <item>`.
- **Travel**: `board` an air-taxi where one is idling, to skim across the
  district.
- **People**: `talk to <someone>`.
- **Character**: `stats` (level, XP, HP, stats, gear).
- **Geography**: `where` (your area + its room count), `areas` (all areas and
  their counts).

Everything abbreviates. `k scurrier` attacks the scurrier, `wi blaster` wields
the blaster pistol, `con vigo` sizes up the Black Sun overlord, `inv` shows your
pack, `wh` is `where`. Up/Down arrows recall command history.

### Coruscant — the crown of the galaxy

Set in the last years of the Republic, this is Coruscant, the galactic
capital — not a city on a planet but a planet made city, ten thousand years of
building stacked kilometres deep, so that the folk of the sunlit spires and the
folk of the sunless undercity are as far apart as two worlds and know each other
about as well.

The area is a **vertical slice** of the ecumenopolis: 200 rooms in ten districts
strung along a single **turbolift spine**, so you can ride both above and below
the level you start on. From top to bottom:

- **The Senate District** — the government heights, where a thousand worlds'
  delegations float over the well of the Grand Convocation Chamber and the
  Chancellor asks, again, for emergency powers.
- **The Jedi Temple Precinct** — the great five-spired ziggurat on its own
  plateau, bridged to the Senate by the Temple Skywalk; the Archives, the
  Council Chamber, the Room of a Thousand Fountains.
- **Monument Plaza & the Skydecks** — the upper, sunlit tourist band, built
  around Umate: the one bare nub of the planet's original rock left uncovered.
- **Column Commons & the Skylanes** — the upper-mid residential city, honest
  and stacked and endlessly in motion.
- **Westport Spaceport** — *where you begin.* A great public port where a
  hundred worlds arrive at once, and the turbolift core drops away below the
  arrivals hall.
- **CoCo Town** — Collective Commerce, a working mid-level of small foundries,
  cheap eateries, and Dex's Diner.
- **The Uscru Entertainment District** — the neon strip: the Outlander Club,
  the Galaxies Opera House, the gambling halls, and Deathstick Alley. Reachable
  on foot from CoCo Town, or by **air-taxi** from Westport.
- **The Works** — the industrial deep-city, where Coruscant's power is
  generated and its air scrubbed, and the sun is only a rumour.
- **The Coruscant Underworld** — the sunless levels, where the law is a rumour
  and the **Black Sun** syndicate is the government.
- **The Undercity & Level 1313** — the very bottom: the infamous Level 1313,
  the buried old city, the drowned foundations, and the dianoga-haunted dark.

**The turbolift spine.** From the port's Turbolift Core, `u` climbs toward
Column Commons, Monument Plaza, and the Senate heights; `d` drops through CoCo
Town and the Works into the Underworld and, if you keep riding, to the very
foundations of the world. Danger scales as you descend: a scurrier in the vents
is a first fight; the elder dianoga at the bottom is not.

**The air-taxi.** On Westport's air-taxi platform, `board` a cab to skim across
the district to the Uscru strip; `board` again on the strip to ride back — a
two-way hop you can make from either side.

## Core concepts

### Partial-name matching

Any entity exposes `keywords` (the words of its `name` are folded in
automatically). `MUD.match.score(token, entity)` ranks a typed token against an
entity, favouring exact matches over prefixes and whole-name over keyword hits.
`room.find('tor')` returns the best single match; `findAll` returns all matches
best-first. This is what makes `look at fount` resolve `fountain`.

### Command abbreviation

`MUD.CommandRegistry.resolve(token)` matches, in order:

1. an exact command name or explicit alias (so `n` is *always* north), then
2. the unique command whose name that token prefixes (`inv` → `inventory`).

Ambiguous prefixes report the candidates instead of guessing.

### Entity model

```
GameObject                identity, description, keywords, events
 └ Container               holds contents; find()/findAll() by token
    ├ Item                 portable/weight, onGet/onDrop/onUse hooks
    └ Actor                stats, hp, inventory (its own contents)
       ├ Mob               NPC/monster; dialogue, onTalk, onTick
       └ Player            the inhabited actor; capacity/load
 └ Room                    a Container with typed `exits` to other rooms
```

Rooms link with `room.link('north', otherRoom)`, which auto-creates the
reciprocal `south` exit (pass `{ oneWay: true }` to skip, `{ locked: true,
lockedMsg }` to bar it). Directions accept full names or abbreviations
everywhere.

### Areas

Every room belongs to an **`Area`** — a named division of the world (a city, a
forest, a dungeon). Create one with `world.area({ id, name, description })`; it
becomes the *active* area, and every `world.room(...)` after it joins that area
automatically (or pass `area:` on a room to override). An area knows its
`roomCount`, and the world tracks them all via `world.allAreas()`.

Two commands surface this to the player:

- **`where`** — names your current area and how many rooms it holds.
- **`areas`** — lists every area with its room count and the world total,
  marking the one you're in.

### Combat & leveling

`MUD.Combat` (js/combat.js) runs one fight at a time — the player versus a
single foe — in rounds of *you-swing-then-they-swing*. `attack <foe>` engages;
while engaged, a combat clock auto-runs rounds so a fight resolves on its own,
but every round is also reachable directly (`combat.round()`), so combat is
fully testable headlessly with no timers. Leaving the room breaks off the fight;
a **hostile** mob sets upon you the moment you enter its room.

The maths live on `Actor` (so mobs and the player share them): `attackRating()`
and `defenseRating()` (from STR/DEX + gear) decide the hit; `rollDamage()` minus
the defender's `armorTotal()` decides the wound. Give a mob combat presence with
`{ hostile, level, maxHp, damage:[min,max], armor, xp, respawns }`. Items become
gear with `{ damage:[min,max], accuracy }` (a weapon, `wield`) or
`{ armor, accuracy }` (armor, `wear`).

Killing a foe awards its `xp`; `Player.gainXp()` levels you up whenever the
total crosses `xpToNext()` (currently `level × 100`), raising max HP and stats
and healing you full. Death drops you at the world's recall room at half health.
The HUD tracks level, an XP bar, and your current target's HP.

### Events / hooks

Every entity is an event emitter. Handlers run with `this` bound to the entity,
so content stays terse:

```js
world.item({
  name: 'brass torch',
  onUse(player, game) { this.tags.add('lit'); game.print('It flares alight.'); },
});
```

Built-in events: rooms emit `enter`/`exit`, items `get`/`drop`/`use`, actors
`damaged`/`healed`/`death`, mobs `talk`/`tick`, containers `receive`/`lose`.

### The engine

`new MUD.Game({ world, player, dom })` renders to the page when given `dom`
handles and falls back to `console` when headless. It owns `describeRoom`,
`movePlayer`, the HUD, and a `tick()` loop (auto-run via `startClock()`) that
lets mobs act. `game.handleInput(line)` runs the parser.

## Building your own world

`js/world-data.js` is the **orchestrator**: it owns one shared `World` and a
zone-file builder context (a room table `R`, plus terse `room()`/`link()`
helpers), hands that context to each area's builder in turn, then applies every
collected link at once — so areas may reference each other's rooms freely, in
any order. Each area lives in its own file (`coruscant.js`) as a
`MUD.buildXxx(ctx)` function that calls `world.area(...)` and populates it. The
orchestrator also returns the list of `starts` the launcher offers the player
(here just one — Westport). Add more area files and hand each to a `buildXxx`
call in `world-data.js` to grow the world.

A minimal single-area world looks like:

```js
MUD.buildWorld = function () {
  const world = new MUD.World();
  world.area({ id: 'keep', name: 'The Old Keep' }); // rooms below join this area

  const hall = world.room({ id: 'hall', title: 'Great Hall',
    description: 'A vast hall. A door leads east.' });
  const yard = world.room({ id: 'yard', title: 'Courtyard',
    description: 'Open sky above cobblestones.' });
  hall.link('east', yard);                    // reciprocal west is automatic

  hall.add(world.item({ name: 'iron sword', keywords: ['sword'],
    damage: [2, 5] }));                        // a wieldable weapon
  yard.add(world.mob({ name: 'old guard', hostile: true, level: 2,
    maxHp: 20, damage: [2, 4], xp: 40 }));     // a fightable foe

  world.setStart(hall);
  return { world, recallId: 'hall' };
};
```

The shipped Coruscant area shows the pattern at scale, including two kinds of
non-compass link. **Turbolifts** are just ordinary `up`/`down` exits: the whole
area hangs on a vertical spine of them, so `u`/`d` carry the player between the
level-bands of the city. A **ferry** (here, the air-taxi) is a property on a
room — `room.ferry = { toId, moored, crossing }` — that the `board` command
follows, teleporting the player to the room named by `toId` (resolved by id, so
the two ends can live in different area files). Set matching `ferry` blocks on
both ends to make it round-trip.

> **Gotcha — reciprocal exits.** `link('a', dir, 'b')` auto-creates the reverse
> exit on `b` *only if that slot is free*. If a later link reuses `b`'s
> opposite-direction slot, it silently overwrites the auto-reciprocal, and the
> player can walk in but not back out. Reachability from the start doesn't catch
> this (it's forward-only); check that every room can also *return* to the start.

To add a verb, register it on the command registry (see `js/commands.js` for the
`ctx` shape):

```js
game.commands.register({
  name: 'kick', aliases: ['ki'], help: 'Kick something.',
  handler(ctx) {
    const t = ctx.room.find(ctx.rest);
    ctx.print(t ? 'You kick ' + MUD.util.theName(t) + '.' : 'Kick what?');
  },
});
```

## Development

There's no build. To sanity-check changes headlessly, the framework files load
into any shared global (set `window = global`) and run without a DOM — that's
how `test/smoke.js` drives `game.handleInput(...)` and asserts on printed output
and state. Run it with:

```
node test/smoke.js
```

It checks the framework (name-matching, abbreviation, area commands, combat,
leveling, equipment, the turbolift spine up and down, the Temple skywalk, the
air-taxi, death/recall) and the integrity of the shipped world (200 rooms, all
ten districts present, and full internal reachability from Westport).
