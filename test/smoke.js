/*
 * smoke.js — headless test harness. Run with: `node test/smoke.js`
 *
 * Loads the framework into a shared sandbox (no DOM, no timers), builds the
 * world of Kaelinu (Empyrean + Mournfall), and drives it through
 * game.handleInput(...), asserting on printed output and on state. This is the
 * same code path the browser uses, minus rendering and the combat clock.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const base = path.join(__dirname, '..');
const files = [
  'js/core.js', 'js/entities.js', 'js/world.js', 'js/commands.js',
  'js/combat.js', 'js/game.js', 'js/empyrean.js', 'js/mournfall.js',
  'js/world-data.js',
];

const sandbox = { console };
sandbox.window = sandbox;
sandbox.global = sandbox;
vm.createContext(sandbox);
for (const f of files) {
  vm.runInContext(fs.readFileSync(path.join(base, f), 'utf8'), sandbox, { filename: f });
}

const MUD = sandbox.MUD;
let pass = 0, fail = 0;
const captured = [];
function assert(cond, msg) {
  if (cond) pass++;
  else { fail++; console.log('  FAIL: ' + msg); }
}

const built = MUD.buildWorld();
const world = built.world;
const player = new MUD.Player({ name: 'you', maxHp: 25, hp: 25, stats: { str: 12, dex: 12, con: 12, int: 12 } });
const game = new MUD.Game({ world, player, dom: null, recallId: built.recallId });
game._emitLine = (t) => captured.push(t);
game.begin({ banner: [] });

function run(line) { captured.length = 0; game.handleInput(line); return captured.join('\n'); }

/* ---- world integrity ---- */
const rooms = world.allRooms();
assert(rooms.length === 358, 'world has 358 rooms (got ' + rooms.length + ')');
assert(world.getArea('empyrean').roomCount === 200, 'Empyrean holds 200 rooms');
assert(world.getArea('mournfall').roomCount === 158, 'Mournfall holds 158 rooms');
assert(world.allAreas().length === 2, 'world has two areas');

const start = world.startRoom();
const seen = new Set([start.id]);
const q = [start];
while (q.length) {
  const r = q.shift();
  for (const d of r.exitDirs()) {
    const to = r.exits[d].room;
    if (to && !seen.has(to.id)) { seen.add(to.id); q.push(to); }
  }
}
assert(seen.size === 358, 'all 358 rooms reachable from start (got ' + seen.size + ')');

/* ---- start & area commands across two areas ---- */
assert(player.room.id === 'isle_carrefour', 'player starts at the Carrefour in Empyrean');
let out = run('where');
assert(/Empyrean/.test(out) && /200 rooms/.test(out), 'where reports Empyrean and 200 rooms');
out = run('areas');
assert(/Empyrean[^\n]*200 rooms/.test(out), 'areas lists Empyrean (200)');
assert(/Mournfall[^\n]*158 rooms/.test(out), 'areas lists Mournfall (158)');
assert(/2 areas, 358 rooms total/.test(out), 'areas prints the world total');

/* ---- equipment ---- */
player.add(world.item({ name: 'test dirk', keywords: ['dirk'], damage: [3, 6], accuracy: 1 }));
const bareAtk = player.attackRating();
out = run('wield dirk');
assert(/ready the test dirk/.test(out), 'wield readies a weapon');
assert(player.equipment.weapon && player.equipment.weapon.name === 'test dirk', 'weapon equipped');
assert(player.attackRating() === bareAtk + 1, 'weapon accuracy raises attack rating');

/* ---- combat: hunt a market rat to death ---- */
const ratRoom = built.R.gren_rats;
ratRoom.add(player);
const rat = ratRoom.actors((a) => a.is('mob') && a.name === 'market rat')[0];
assert(!!rat, 'a market rat lairs in the rat-runs');
const xpBefore = player.xp;
run('attack rat');
let guard = 0;
while (game.combat.engaged() && player.alive && guard++ < 50) run('attack');
assert(!rat.alive, 'the rat is slain');
assert(player.xp > xpBefore || player.level > 1, 'killing the rat granted experience');
assert(!game.combat.engaged(), 'combat ends when the foe dies');

/* ---- consider sizes up a foe ---- */
built.R.cour_throne.add(player);
out = run('consider coesre');
assert(/Grand Co/.test(out) && /level 8/i.test(out), 'consider reports a foe\'s level');

/* ---- leveling: a big XP grant levels the player up ---- */
const lvlBefore = player.level;
const hpBefore = player.maxHp;
player.gainXp(1000, game);
assert(player.level > lvlBefore, 'a large XP award raises the level');
assert(player.maxHp > hpBefore, 'leveling up raises max HP');

/* ---- the one-way impasse into Mournfall ---- */
built.R.cour_nook.add(player);
run('e');  // into the impasse
assert(player.room.id === 'cour_impasse', 'you reach the Impasse of the Last Saint');
run('n');  // through the not-wall
assert(player.room.id === 'gate_arrival', 'the impasse lets out on Mournfall\'s Threshold Stone');
out = run('where');
assert(/Mournfall/.test(out), 'you are now in the City of Mournfall');
assert(!player.room.exits.south, 'there is no way back south from the Threshold Stone');

/* ---- death & recall ---- */
player.hp = 1;
game.respawnPlayer();
assert(player.room.id === built.recallId, 'the slain wake at the recall point');
assert(player.alive && player.hp > 0, 'the recalled player lives');

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
