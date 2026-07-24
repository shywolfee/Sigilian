# Sigilian — a browser MUD framework

A small, dependency-free framework for building text adventures / MUDs that run
entirely in the browser. No build step, no server: **open `index.html`** and
play. The engine is plain ES5-ish JavaScript organised under a single `MUD`
global, so it also runs headless (in Node/tests) exactly as it does in the page.

The repo ships two hand-written areas — a 200-room capital, **Empyrean**, and a
158-room city between worlds, **Mournfall** (358 rooms in all) — as its testbed,
but the point is the framework in `js/`; the content is meant to be replaced.

```
index.html          # page shell + HUD, loads the scripts in order
styles.css          # terminal look & responsive layout
js/
  core.js           # utilities, name-matching, event emitter
  entities.js       # GameObject → Item / Actor → Mob / Player, Room, directions
  world.js          # World registry, Area, content factories
  commands.js       # command registry, parser, built-in verbs
  combat.js         # round-based combat engine
  game.js           # engine: output, movement, HUD, ticks, combat, respawn
  empyrean.js       # content: Empyrean, capital of the Seven-Star Empire (200)
  mournfall.js      # content: the City of Mournfall (158)
  world-data.js     # orchestrator: builds both areas into one world
  main.js           # bootstrap: wires the DOM and starts the game
```

## Playing

Type `help` in-game. Highlights:

- **Movement**: `n s e w u d ne nw se sw`, or `go <dir>`. Bare directions work.
- **Looking**: `look`, `look at <thing>`, `examine <thing>` / `x <thing>`.
- **Items**: `get <thing>` (`get all`), `drop <thing>`, `inventory` / `i`,
  `use <thing>`.
- **Combat**: `attack <foe>` / `kill` / `k`, `consider <foe>` (size it up),
  `flee`. `wield <weapon>`, `wear <armor>`, `remove <item>`.
- **People**: `talk to <someone>`.
- **Character**: `stats` (level, XP, HP, stats, gear).
- **Geography**: `where` (your area + its room count), `areas` (all areas and
  their counts).

Everything abbreviates. `k rat` attacks the rat, `wi saber` wields the saber,
`con coesre` sizes up the King of Thieves, `inv` shows your pack, `wh` is
`where`. Up/Down arrows recall command history.

### Empyrean — capital of the Seven-Star Empire

You start on the Isle, at the Carrefour of the Seven Stars, in Empyrean: the
capital of the Seven-Star Empire, astride the river Sequane, upon the world of
**Kaelinu**. Kaelinu reads as ordinary fantasy only if you aren't paying
attention — look closer and it's a world that went *differently* from ours, its
countries, seas, and ideas the linguistic cousins of names you half-know. The
Seven-Star Empire is the France that might have been; Empyrean its Paris; across
the narrow sea called the Sleeve lies the kingdom of Albeon. 200 rooms in ten
districts:

| District | Rooms | |
|---|---|---|
| The Isle | 24 | the ancient island heart (**start**) |
| The Quays of the Sequane | 18 | banks & bridges |
| The Astrarium | 22 | the imperial palace |
| Les Grènes | 20 | the great market |
| The Collegium | 22 | the university, Left Bank |
| The Sanctuary | 16 | churches of the Left Bank |
| The Gilded Marais | 18 | the nobles' quarter |
| Montcorbeau | 18 | the butte of artists |
| The Bastion & Faubourg | 20 | fortress & restive workers |
| The Cour des Miracles | 22 | the thieves' slum |

**The way between worlds.** Very near the start, off the Carrefour, the
neglected Saints' Cut drops into the Cour des Miracles. Deep in the Cour, past
the Cutpurse's Nook, is the **Impasse of the Last Saint** — an alley that does
not end in a wall but in something else, that isn't, or is, or never was. Walk
north into the not-wall and you cross, one way and no way back, onto the
Threshold Stone of Mournfall.

### The City of Mournfall

A city caught between worlds, in the Far-Land at the end of everything, roofed by
an obsidian dome that holds back the Void — its poorer quarters patched with a
magical substance called *entropy-glass*. 158 rooms in ten districts (the
Worldgate, the Obsidian Concourse, Highmournt, the Ashmarket, the Cinder Wards,
the Voidquays, the Sepulchre, the Pale Assembly, the Undermourn, the Guttering
Rows), fanning out from the Mournfall Plaza. Where Empyrean worships the seven
stars, Mournfall has a sky with none — and no way home.

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
any order. Each area lives in its own file (`empyrean.js`, `mournfall.js`) as a
`MUD.buildXxx(ctx)` function that calls `world.area(...)` and populates it.

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

The two shipped areas show the pattern at scale, including a one-way exit
stitched *between* areas (Empyrean's impasse → Mournfall's Threshold Stone).

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
leveling, equipment, the one-way impasse, death/recall) and the integrity of the
shipped world (358 rooms, both areas' counts, and full reachability from the
start).
