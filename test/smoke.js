/*
 * smoke.js — headless test harness. Run with: `node test/smoke.js`
 *
 * Loads the framework into a shared sandbox (no DOM, no timers), builds the
 * world of Coruscant, and drives it through game.handleInput(...), asserting on
 * printed output and on state. This is the same code path the browser uses,
 * minus rendering and the combat clock.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const base = path.join(__dirname, '..');
const files = [
  'js/core.js', 'js/entities.js', 'js/world.js', 'js/commands.js',
  'js/combat.js', 'js/game.js', 'js/coruscant.js', 'js/world-data.js',
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
assert(rooms.length === 200, 'world has 200 rooms (got ' + rooms.length + ')');
assert(world.getArea('coruscant').roomCount === 200, 'Coruscant holds 200 rooms');
assert(world.allAreas().length === 1, 'world has one area');

// one start city offered by the chooser
assert(built.starts.length === 1, 'one start city is offered');
assert(built.starts[0].roomId === 'port_concourse', 'the chooser offers Westport (port_concourse)');

// the area is internally fully connected from its own start
function reachFrom(id) {
  const s = world.get(id);
  const seen = new Set([s.id]);
  const q = [s];
  while (q.length) {
    const r = q.shift();
    for (const d of r.exitDirs()) {
      const to = r.exits[d].room;
      if (to && !seen.has(to.id)) { seen.add(to.id); q.push(to); }
    }
  }
  return seen;
}
const reach = reachFrom('port_concourse');
assert(rooms.every((r) => reach.has(r.id)), 'all 200 rooms reachable from Westport');

// every district is represented (its prefix appears among the rooms)
const prefixes = ['port_', 'sky_', 'plaza_', 'senate_', 'temple_',
  'coco_', 'uscru_', 'works_', 'under_', 'deep_'];
assert(prefixes.every((p) => rooms.some((r) => r.id.indexOf(p) === 0)),
  'all ten districts are present');

/* ---- start & area commands ---- */
assert(player.room.id === 'port_concourse', 'player starts at the Grand Concourse of Westport');
let out = run('where');
assert(/Coruscant/.test(out) && /200 rooms/.test(out), 'where reports Coruscant and 200 rooms');
out = run('areas');
assert(/Coruscant[^\n]*200 rooms/.test(out), 'areas lists Coruscant (200)');
assert(/1 area, 200 rooms total/.test(out), 'areas prints the world total');

/* ---- the turbolift spine: ride ABOVE and BELOW the start band ---- */
built.R.port_nexus.add(player);
run('u'); assert(player.room.id === 'sky_nexus', 'up one turbolift: Column Commons');
run('u'); assert(player.room.id === 'plaza_skydeck', 'up again: Monument Plaza skydeck');
run('u'); assert(player.room.id === 'senate_transit', 'up again: the Senate District heights');
built.R.port_nexus.add(player); // back to the start band
run('d'); assert(player.room.id === 'coco_lift', 'down one turbolift: CoCo Town');
run('d'); assert(player.room.id === 'works_shaft', 'down again: the Works');
run('d'); assert(player.room.id === 'under_shaft', 'down again: the Underworld');
run('d'); assert(player.room.id === 'deep_bottom', 'down again: the undercity bottom');
built.R.port_concourse.add(player); // reset

/* ---- the Jedi Temple is bridged from the Senate heights ---- */
built.R.senate_skywalk.add(player);
run('e');
assert(player.room.id === 'temple_gates', 'the Temple skywalk crosses to the Jedi Temple gates');
built.R.port_concourse.add(player);

/* ---- the air-taxi: board Westport -> Uscru and back ---- */
built.R.port_taxi.add(player);
run('board');
assert(player.room.id === 'uscru_strip', 'the air-taxi carries you to the Uscru strip');
run('board');
assert(player.room.id === 'port_taxi', 'boarding again returns you to the Westport platform');
built.R.port_concourse.add(player); // reset

/* ---- equipment ---- */
player.add(world.item({ name: 'test dirk', keywords: ['dirk'], damage: [3, 6], accuracy: 1 }));
const bareAtk = player.attackRating();
out = run('wield dirk');
assert(/ready the test dirk/.test(out), 'wield readies a weapon');
assert(player.equipment.weapon && player.equipment.weapon.name === 'test dirk', 'weapon equipped');
assert(player.attackRating() === bareAtk + 1, 'weapon accuracy raises attack rating');

/* ---- combat: hunt a scurrier to death ---- */
const ventRoom = built.R.sky_vents;
ventRoom.add(player);
const scurrier = ventRoom.actors((a) => a.is('mob') && a.name === 'scurrier')[0];
assert(!!scurrier, 'a scurrier nests in the ventilation gallery');
const xpBefore = player.xp;
run('attack scurrier');
let guard = 0;
while (game.combat.engaged() && player.alive && guard++ < 50) run('attack');
assert(!scurrier.alive, 'the scurrier is slain');
assert(player.xp > xpBefore || player.level > 1, 'killing the scurrier granted experience');
assert(!game.combat.engaged(), 'combat ends when the foe dies');

/* ---- consider sizes up a foe ---- */
built.R.under_ganghideout.add(player);
out = run('consider vigo');
assert(/vigo/i.test(out) && /level 8/i.test(out), 'consider reports the Vigo\'s level');

/* ---- leveling: a big XP grant levels the player up ---- */
const lvlBefore = player.level;
const hpBefore = player.maxHp;
player.gainXp(1000, game);
assert(player.level > lvlBefore, 'a large XP award raises the level');
assert(player.maxHp > hpBefore, 'leveling up raises max HP');

/* ---- death & recall ---- */
player.hp = 1;
game.respawnPlayer();
assert(player.room.id === built.recallId, 'the slain wake at the recall point');
assert(player.alive && player.hp > 0, 'the recalled player lives');
assert(built.recallId === 'port_concourse', 'the recall point is Westport');

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
