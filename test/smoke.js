/*
 * smoke.js — headless test harness. Run with: `node test/smoke.js`
 *
 * Loads the framework files into a shared sandbox (no DOM), builds the City of
 * Mournfall, and drives it through game.handleInput(...), asserting on printed
 * output. This is the same code path the browser uses, minus rendering.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const base = path.join(__dirname, '..');
const files = [
  'js/core.js', 'js/entities.js', 'js/world.js',
  'js/commands.js', 'js/game.js', 'js/world-data.js',
];

const sandbox = { console };
sandbox.window = sandbox; // the IIFEs attach MUD here (no `window` -> uses this)
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
const player = new MUD.Player({ name: 'you', maxHp: 25, hp: 25 });
const game = new MUD.Game({ world, player, dom: null });
game._emitLine = (t) => captured.push(t); // capture instead of console
game.begin({ banner: [] });

function run(line) { captured.length = 0; game.handleInput(line); return captured.join('\n'); }

/* ---- world integrity: the Mournfall build ---- */
const rooms = world.allRooms();
assert(rooms.length === 158, 'world has exactly 158 rooms (got ' + rooms.length + ')');
assert(world.allAreas().length === 1, 'world has one area');
assert(world.getArea('mournfall').roomCount === 158, 'Mournfall area holds 158 rooms');
assert(rooms.every((r) => r.area), 'every room belongs to an area');

// full reachability from the start room
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
assert(seen.size === 158, 'all 158 rooms reachable from start (got ' + seen.size + ')');

/* ---- the area commands ---- */
assert(player.room.id === 'gate_arrival', 'player starts at the Threshold Stone');

let out = run('where');
assert(/City of Mournfall/.test(out), 'where names the current area');
assert(/158 rooms/.test(out), 'where reports the area room count');

out = run('areas');
assert(/City of Mournfall — 158 rooms/.test(out), 'areas lists Mournfall with its count');
assert(/1 area, 158 rooms total/.test(out), 'areas prints the world totals');
assert(/\*/.test(out), 'areas marks the current area');

/* ---- core verbs still work in the new world ---- */
assert(/Threshold Stone/.test(run('look')), 'look shows the starting room title');
run('n'); // into the Winnowing Hall
assert(player.room.id === 'gate_customs', 'north moves into the Winnowing Hall');
assert(/nine languages|clerk|Winnowing/i.test(run('look')), 'look works after moving');

// abbreviation + partial matching against the warden-clerk
assert(/Name, world of origin/.test(run('talk clerk')), 'talk to a partial name (clerk)');
assert(/COUNT|clerk/i.test(run('x ward')), 'examine "ward" -> warden-clerk');

// navigate to the plaza and confirm district exits fan out
run('n'); run('n'); run('n'); run('n'); // hall, queue, ramp, arch
run('n'); // con_south_end
run('n'); // con_2
run('n'); // con_plaza
assert(player.room.id === 'con_plaza', 'reached the Mournfall Plaza');
const plazaExits = player.room.exitDirs();
assert(plazaExits.indexOf('east') >= 0 && plazaExits.indexOf('west') >= 0 &&
       plazaExits.indexOf('north') >= 0, 'plaza fans out to multiple districts');

// still in the same single area the whole time
assert(run('where').match(/158 rooms/), 'still one 158-room area after travelling');

/* ---- a placed item, grabbed by partial name ---- */
// jump the player straight to the Great Breach to test the entropy-glass shard
built.R.cin_breach.add(player);
assert(/take the shard/.test(run('get entropy')), 'get "entropy" -> shard of entropy-glass');
assert(/entropy-glass/i.test(run('i')), 'inventory shows the shard');

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
