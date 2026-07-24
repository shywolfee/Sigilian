# Sigilian — a browser MUD framework

A small, dependency-free framework for building text adventures / MUDs that run
entirely in the browser. No build step, no server: **open `index.html`** and
play. The engine is plain ES5-ish JavaScript organised under a single `MUD`
global, so it also runs headless (in Node/tests) exactly as it does in the page.

The repo ships a full 158-room area — **the City of Mournfall** — as its
testbed, but the point is the framework in `js/`; the content is meant to be
replaced.

```
index.html          # page shell + HUD, loads the scripts in order
styles.css          # terminal look & responsive layout
js/
  core.js           # utilities, name-matching, event emitter
  entities.js       # GameObject → Item / Actor → Mob / Player, Room, directions
  world.js          # World registry, Area, content factories
  commands.js       # command registry, parser, built-in verbs
  game.js           # engine: output, movement, HUD, tick loop, input
  world-data.js     # the City of Mournfall (158 rooms; replace with your world)
  main.js           # bootstrap: wires the DOM and starts the game
```

## Playing

Type `help` in-game. Highlights:

- **Movement**: `n s e w u d ne nw se sw`, or `go <dir>`. Bare directions work.
- **Looking**: `look`, `look at <thing>`, `examine <thing>` / `x <thing>`.
- **Items**: `get <thing>` (`get all`), `drop <thing>`, `inventory` / `i`,
  `use <thing>`.
- **People**: `talk to <someone>`.
- **Character**: `stats`.
- **Geography**: `where` (your area + its room count), `areas` (all areas and
  their counts).

Everything abbreviates. `l clerk` looks at the warden-clerk, `x ward` examines
it, `get entropy` grabs a shard of entropy-glass, `inv` shows your pack, `wh`
is `where`. Up/Down arrows recall command history.

### The City of Mournfall

The testbed world is a city caught between worlds, in the Far-Land at the end of
everything, roofed by an obsidian dome that holds back the Void — its poorer
quarters patched with a magical substance called *entropy-glass*. It is laid out
the way a MUD zone is built: 158 rooms in ten districts, stitched together with
compass exits.

| District | Rooms | |
|---|---|---|
| The Worldgate / Threshold | 10 | arrival between worlds |
| The Obsidian Concourse | 8 | the spine avenue |
| Highmournt (the Dome-Crown) | 22 | the wealthy, intact quarter |
| The Ashmarket | 20 | the great bazaar |
| The Cinder Wards | 26 | slums under the broken dome |
| The Voidquays | 16 | moorings at the dome's rim |
| The Sepulchre District | 16 | temples to the End |
| The Pale Assembly | 12 | the wardens and their law |
| The Undermourn | 18 | catacombs and undercity |
| The Guttering Rows | 10 | the working poor's tenements |

You start on the Threshold Stone; the Mournfall Plaza (north up the Concourse)
is the hub the districts fan out from.

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

Replace `js/world-data.js`. Minimal example:

```js
MUD.buildWorld = function () {
  const world = new MUD.World();
  world.area({ id: 'keep', name: 'The Old Keep' }); // rooms below join this area

  const hall = world.room({ id: 'hall', title: 'Great Hall',
    description: 'A vast hall. A door leads east.' });
  const yard = world.room({ id: 'yard', title: 'Courtyard',
    description: 'Open sky above cobblestones.' });
  hall.link('east', yard);                    // reciprocal west is automatic

  hall.add(world.item({ name: 'iron sword', keywords: ['sword'], weight: 3 }));
  yard.add(world.mob({ name: 'old guard', dialogue: 'Move along.' }));

  world.setStart(hall);
  return { world, hall, yard };
};
```

For a larger world, the Mournfall build in `js/world-data.js` shows the
zone-file pattern: create rooms into an id-keyed table, collect all the exits,
then apply them once every room exists — so districts can reference each other
freely regardless of definition order.

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
how the smoke tests drive `game.handleInput(...)` and assert on printed output.
