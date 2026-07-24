# Sigilian — a browser MUD framework

A small, dependency-free framework for building text adventures / MUDs that run
entirely in the browser. No build step, no server: **open `index.html`** and
play. The engine is plain ES5-ish JavaScript organised under a single `MUD`
global, so it also runs headless (in Node/tests) exactly as it does in the page.

The repo ships a two-room testbed to exercise every feature, but the point is
the framework in `js/` — the content is meant to be replaced.

```
index.html          # page shell + HUD, loads the scripts in order
styles.css          # terminal look & responsive layout
js/
  core.js           # utilities, name-matching, event emitter
  entities.js       # GameObject → Item / Actor → Mob / Player, Room, directions
  world.js          # World registry + content factories
  commands.js       # command registry, parser, built-in verbs
  game.js           # engine: output, movement, HUD, tick loop, input
  world-data.js     # the two-room testbed (replace with your content)
  main.js           # bootstrap: wires the DOM and starts the game
```

## Playing the testbed

Type `help` in-game. Highlights:

- **Movement**: `n s e w u d ne nw se sw`, or `go <dir>`. Bare directions work.
- **Looking**: `look`, `look at <thing>`, `examine <thing>` / `x <thing>`.
- **Items**: `get <thing>` (`get all`), `drop <thing>`, `inventory` / `i`,
  `use <thing>`.
- **People**: `talk to <someone>`.
- **Character**: `stats`.

Everything abbreviates. `l sig` looks at the sigil, `x tor` examines the torch,
`get rusty` grabs the rusty key, `inv` shows your pack. Up/Down arrows recall
command history.

The testbed's puzzle: the north door is locked; find the key, go `down`, and
`talk` to the Warden while carrying it.

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
