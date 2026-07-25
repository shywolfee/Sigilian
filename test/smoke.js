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
  'js/combat.js', 'js/game.js', 'js/coruscant.js', 'js/narshaddaa.js',
  'js/nalhutta.js', 'js/sullust.js', 'js/ryloth.js', 'js/world-data.js',
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
assert(rooms.length === 650, 'world has 650 rooms (got ' + rooms.length + ')');
assert(world.getArea('coruscant').roomCount === 200, 'Coruscant holds 200 rooms');
assert(world.getArea('narshaddaa').roomCount === 150, 'Nar Shaddaa holds 150 rooms');
assert(world.getArea('nalhutta').roomCount === 100, 'Nal Hutta holds 100 rooms');
assert(world.getArea('sullust').roomCount === 100, 'Sullust holds 100 rooms');
assert(world.getArea('ryloth').roomCount === 100, 'Ryloth holds 100 rooms');
assert(world.allAreas().length === 5, 'world has five areas');

// one start city offered by the chooser
assert(built.starts.length === 1, 'one start city is offered');
assert(built.starts[0].roomId === 'port_concourse', 'the chooser offers Westport (port_concourse)');

// reachability within an area, following only its own exits (transit is not a link)
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
const corReach = reachFrom('port_concourse');
assert(rooms.filter((r) => r.area.id === 'coruscant').every((r) => corReach.has(r.id)),
  'all 200 Coruscant rooms reachable from Westport');
const narReach = reachFrom('nard_arrival');
assert(rooms.filter((r) => r.area.id === 'narshaddaa').every((r) => narReach.has(r.id)),
  'all 150 Nar Shaddaa rooms reachable from the arrival berth');
const nalReach = reachFrom('nal_port_arrival');
assert(rooms.filter((r) => r.area.id === 'nalhutta').every((r) => nalReach.has(r.id)),
  'all 100 Nal Hutta rooms reachable from the landing pad');
const sulReach = reachFrom('sul_port_arrival');
assert(rooms.filter((r) => r.area.id === 'sullust').every((r) => sulReach.has(r.id)),
  'all 100 Sullust rooms reachable from the landing-cavern');
const rylReach = reachFrom('ryl_port_arrival');
assert(rooms.filter((r) => r.area.id === 'ryloth').every((r) => rylReach.has(r.id)),
  'all 100 Ryloth rooms reachable from the starport');

// every district of every area is represented (its prefix appears among the rooms)
const prefixes = [
  'port_', 'sky_', 'plaza_', 'senate_', 'temple_', 'coco_', 'uscru_',
  'works_', 'under_', 'deep_',              // Coruscant
  'nard_', 'narp_', 'narc_', 'narf_', 'nars_', 'narr_', 'narh_', 'nari_', // Nar Shaddaa
  'nal_port_', 'nal_baz_', 'nal_quarter_', 'nal_slum_', 'nal_swamp_',     // Nal Hutta
  'sul_port_', 'sul_city_', 'sul_mine_', 'sul_soro_', 'sul_deep_',        // Sullust
  'ryl_port_', 'ryl_city_', 'ryl_mine_', 'ryl_clan_', 'ryl_waste_',       // Ryloth
];
assert(prefixes.every((p) => rooms.some((r) => r.id.indexOf(p) === 0)),
  'every district of every area is present');

/* ---- start & area commands ---- */
assert(player.room.id === 'port_concourse', 'player starts at the Grand Concourse of Westport');
let out = run('where');
assert(/Coruscant/.test(out) && /200 rooms/.test(out), 'where reports Coruscant and 200 rooms');
out = run('areas');
assert(/Coruscant[^\n]*200 rooms/.test(out), 'areas lists Coruscant (200)');
assert(/Nar Shaddaa[^\n]*150 rooms/.test(out), 'areas lists Nar Shaddaa (150)');
assert(/Nal Hutta[^\n]*100 rooms/.test(out), 'areas lists Nal Hutta (100)');
assert(/Sullust[^\n]*100 rooms/.test(out), 'areas lists Sullust (100)');
assert(/Ryloth[^\n]*100 rooms/.test(out), 'areas lists Ryloth (100)');
assert(/5 areas, 650 rooms total/.test(out), 'areas prints the world total');

/* ---- the transit network: Coruscant -> Nar Shaddaa -> Nal Hutta and back ---- */
// The Westport departures gate is a transit board to three worlds.
built.R.port_departures.add(player);
out = run('transit');
assert(/Nar Shaddaa/.test(out) && /1\./.test(out), 'transit lists Nar Shaddaa as a destination');
assert(/Sullust/.test(out) && /Ryloth/.test(out), 'the departures board also lists Sullust and Ryloth');
const toNarMsg = run('transit 1');
assert(player.room.id === 'nard_arrival', 'transit 1 flies you to the Nar Shaddaa arrival berth');
assert(/Smugglers/.test(toNarMsg), 'the journey to Nar Shaddaa has its own message');
assert(/Nar Shaddaa/.test(run('where')), 'you are now on Nar Shaddaa');

/* ---- transit from Coruscant to Sullust and Ryloth, and back ---- */
built.R.port_departures.add(player);
const toSulMsg = run('transit 2');
assert(player.room.id === 'sul_port_arrival', 'transit 2 flies you to Sullust');
assert(/Sullust|buried|cavern/i.test(toSulMsg), 'the journey to Sullust has its own message');
assert(toSulMsg !== toNarMsg, 'Sullust\'s journey differs from Nar Shaddaa\'s');
assert(/Sullust/.test(run('where')), 'you are now on Sullust');
built.R.sul_port_concourse.add(player);
run('transit 1');
assert(player.room.id === 'port_concourse', 'the Sullust terminal books passage back to Coruscant');

built.R.port_departures.add(player);
const toRylMsg = run('transit 3');
assert(player.room.id === 'ryl_port_arrival', 'transit 3 flies you to Ryloth');
assert(/Ryloth|Twi|twilight|Kala/i.test(toRylMsg), 'the journey to Ryloth has its own message');
assert(toRylMsg !== toSulMsg, 'Ryloth\'s journey differs from Sullust\'s');
assert(/Ryloth/.test(run('where')), 'you are now on Ryloth');
built.R.ryl_port_concourse.add(player);
run('transit 1');
assert(player.room.id === 'port_concourse', 'the Ryloth terminal books passage back to Coruscant');

// From another berth on Nar Shaddaa, a Hutt shuttle drops to Nal Hutta.
built.R.nard_huttberth.add(player);
out = run('transit');
assert(/Nal Hutta/.test(out), 'the Hutt berth lists Nal Hutta');
const toNalMsg = run('transit 1');
assert(player.room.id === 'nal_port_arrival', 'transit 1 drops you at Bilbousa Spaceport');
assert(/Nal Hutta[\s\S]*from you/.test(run('where')) || /Nal Hutta/.test(run('where')),
  'you are now on Nal Hutta');
assert(toNalMsg !== toNarMsg, 'each destination has a different journey message');
assert(/homeworld|Bilbousa|Hutt/.test(toNalMsg), 'the journey to Nal Hutta has its own message');

// Return: Nal Hutta -> Nar Shaddaa -> Coruscant.
built.R.nal_port_concourse.add(player);
run('transit 1');
assert(player.room.id === 'nard_arrival', 'the shuttle back lands on Nar Shaddaa');
built.R.nard_concourse.add(player);
run('transit 1');
assert(player.room.id === 'port_concourse', 'the transit back reaches Coruscant Westport');

// transit with no terminal, and a bad number, are handled gracefully
built.R.plaza_plaza.add(player);
assert(/no transit terminal/i.test(run('transit')), 'transit off-terminal is refused');
built.R.port_departures.add(player);
assert(/No such destination/i.test(run('transit 9')), 'an out-of-range transit number is refused');
built.R.port_concourse.add(player); // reset

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
