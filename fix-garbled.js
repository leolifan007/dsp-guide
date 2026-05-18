const fs = require('fs');
const path = require('path');
const dir = 'C:\\Users\\ROG\\.qclaw\\workspace-irfnf4l86a7w0aii\\dsp-guide\\static\\images';

// Fix ils-warper-slot - garbled text remnant
let iw = fs.readFileSync(path.join(dir, 'ils-warper-slot.svg'), 'utf8');
iw = iw.replace(
  'Tip: Set ILS to supply warpers to inventory.ply warpers to every new outpost ILS automatically.',
  'Tip: Set ILS to auto-supply warpers to new outposts.'
);
fs.writeFileSync(path.join(dir, 'ils-warper-slot.svg'), iw, 'utf8');
console.log('1. Fixed ils-warper-slot');

// Fix ils-dual-planet - garbled text remnant
let id = fs.readFileSync(path.join(dir, 'ils-dual-planet.svg'), 'utf8');
id = id.replace(
  'Titanium loop is infinite. Add more vessels as needed.d more miners when demand outgrows supply.',
  'Titanium loop is infinite. Add vessels/miners as demand grows.'
);
fs.writeFileSync(path.join(dir, 'ils-dual-planet.svg'), id, 'utf8');
console.log('2. Fixed ils-dual-planet');

// Fix power-cascade-restart - check the prevention tip
let pcr = fs.readFileSync(path.join(dir, 'power-cascade-restart.svg'), 'utf8');
const pcrIdx = pcr.indexOf('Prevention tip');
if (pcrIdx >= 0) {
  console.log('3. power-cascade-restart tip:');
  console.log('  ' + pcr.substring(pcrIdx, pcrIdx + 120));
}
