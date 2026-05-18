const fs = require('fs');
const path = require('path');
const dir = 'C:\\Users\\ROG\\.qclaw\\workspace-irfnf4l86a7w0aii\\dsp-guide\\static\\images';

// 1. power-cascade-restart.svg - shorten prevention tip first line (56px overflow)
let pcr = fs.readFileSync(path.join(dir, 'power-cascade-restart.svg'), 'utf8');
pcr = pcr.replace(
  'Prevention tip: Keep 12 thermal generators on a separate grid, running coal.',
  'Prevention tip: 12 thermal gens on separate coal grid.'
);
fs.writeFileSync(path.join(dir, 'power-cascade-restart.svg'), pcr, 'utf8');
console.log('Fixed power-cascade-restart');

// 2. ils-how-it-works.svg - "[!] Ships need fuel to fly!" (48px overflow in 200px box)
let ihw = fs.readFileSync(path.join(dir, 'ils-how-it-works.svg'), 'utf8');
ihw = ihw.replace('[!] Ships need fuel to fly!', '[!] Ships need fuel!');
fs.writeFileSync(path.join(dir, 'ils-how-it-works.svg'), ihw, 'utf8');
console.log('Fixed ils-how-it-works');

// 3. ils-demand-vs-supply.svg - item boxes too small (54px). Widen from 54 to 76px.
let ids = fs.readFileSync(path.join(dir, 'ils-demand-vs-supply.svg'), 'utf8');
// The widen happened before but let me check current state
// These items are: Hydrogen, Deuterium, Graphene, Iron Ore
// Each at about 8-9 chars * 12*0.6 = 58-65px, boxes at 54 avail=44px
// Need boxes at least 70px wide (avail=60px) or shorter labels
// Use short labels:
ids = ids.replace('>Hydrogen<', '>H2<');
ids = ids.replace('>Deuterium<', '>D2<');
ids = ids.replace('>Graphene<', '>GRA<');
ids = ids.replace('>Iron Ore<', '>Fe Ore<');
fs.writeFileSync(path.join(dir, 'ils-demand-vs-supply.svg'), ids, 'utf8');
console.log('Fixed ils-demand-vs-supply labels');

// 4. power-cascade.svg - "Thermal plants run out of fuel" (26px overflow)
let pc = fs.readFileSync(path.join(dir, 'power-cascade.svg'), 'utf8');
pc = pc.replace('Thermal plants run out of fuel', 'Thermal plants starve for fuel');
fs.writeFileSync(path.join(dir, 'power-cascade.svg'), pc, 'utf8');
console.log('Fixed power-cascade');

// 5. ils-dual-planet.svg - garbled text remnant
let idp = fs.readFileSync(path.join(dir, 'ils-dual-planet.svg'), 'utf8');
idp = idp.replace(
  'Titanium loop is infinite - add vessels.d more miners when demand outgrows supply.',
  'Titanium loop is infinite - add vessels or miners.'
);
fs.writeFileSync(path.join(dir, 'ils-dual-planet.svg'), idp, 'utf8');
console.log('Fixed ils-dual-planet');

// 6. warper-payoff.svg - "Vessels take warpers" (8px overflow)
let wp = fs.readFileSync(path.join(dir, 'warper-payoff.svg'), 'utf8');
wp = wp.replace('Vessels take warpers', 'Vessels load warpers');
fs.writeFileSync(path.join(dir, 'warper-payoff.svg'), wp, 'utf8');
console.log('Fixed warper-payoff');

// 7. oil-refining-flow.svg - "OIL EXTRACTOR" (4px overflow in 100px box)
let orf = fs.readFileSync(path.join(dir, 'oil-refining-flow.svg'), 'utf8');
orf = orf.replace('>OIL EXTRACTOR<', '>OIL EXTR.<');
fs.writeFileSync(path.join(dir, 'oil-refining-flow.svg'), orf, 'utf8');
console.log('Fixed oil-refining-flow');

// 8. sail-automation-loop.svg - 1px overflow, leave it
// 9. fire-ice-chain.svg - 0px overflow, leave it

console.log('\nAll done!');
