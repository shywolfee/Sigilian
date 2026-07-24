/*
 * smoke.js — headless test harness. Run with: `node test/smoke.js`
 *
 * Loads the framework files into a shared sandbox (no DOM), builds the testbed
 * world, drives it through game.handleInput(...), and asserts on printed output.
 * This is the same code path the browser uses, minus rendering.
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
const player = new MUD.Player({ name: 'you', maxHp: 25, hp: 25 });
const game = new MUD.Game({ world: built.world, player, dom: null });
game._emitLine = (t) => captured.push(t); // capture instead of console
game.begin({ banner: [] });

function run(line) { captured.length = 0; game.handleInput(line); return captured.join('\n'); }

assert(player.room === built.antechamber, 'player starts in antechamber');

let out = run('look');
assert(/Sigil Antechamber/.test(out), 'look shows room title');
assert(/torch/i.test(out), 'look lists the torch');

assert(/nine rings/.test(run('l sig')), 'partial look "l sig" -> sigil');
assert(/oiled cloth/.test(run('x tor')), 'examine prefix "x tor" -> torch');

assert(/take the rusty key/.test(run('get rusty')), 'get rusty picks up key');
assert(/rusty key/i.test(run('i')), 'inventory shows key');

run('get tor');
assert(/drop the brass torch/.test(run('drop tor')), 'drop by prefix');
run('get tor');
assert(/alight/.test(run('use torch')), 'use torch lights it');

assert(/locked/.test(run('n')), 'north door locked initially');
assert(/Whispering Gallery/.test(run('d')), 'down leads to gallery');
assert(player.room === built.gallery, 'player now in gallery');

run('talk warden');
assert(built.antechamber.exit('north').locked === false, 'north unlocked after talk');
run('u');
run('n');
assert(player.room === built.gallery, 'north now passable');

assert(/cannot go/.test(run('e')), "'e' resolves to east direction");
assert(/Level 1/.test(run('stats')), 'stats shows level');
assert(/Movement:/.test(run('help')), 'help lists movement');
assert(/don't understand/.test(run('flibber')), 'unknown command handled');

assert(game.commands.resolve('u').command.name === 'up', "'u' resolves to up");
assert(game.commands.resolve('use').command.name === 'use', "'use' resolves to use");
assert(game.commands.resolve('us').command.name === 'use', "'us' prefix -> use");

assert(MUD.match.score('bra', { name: 'brass torch', keywords: ['brass'] }) > 0,
  'match scores keyword prefix');

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
