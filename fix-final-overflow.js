const fs = require('fs');
const path = require('path');
const dir = 'C:\\Users\\ROG\\.qclaw\\workspace-irfnf4l86a7w0aii\\dsp-guide\\static\\images';

const fixes = {};

// Check ils-warper-slot.svg - find the long text
let iw = fs.readFileSync(path.join(dir, 'ils-warper-slot.svg'), 'utf8');
const iwIdx = iw.lastIndexOf('Pro tip:');
if (iwIdx >= 0) {
  console.log('ils-warper-slot long text:');
  console.log(iw.substring(iwIdx, iwIdx + 120));
  // Shorten it more
  iw = iw.replace(
    'Pro tip: Set an ILS to supply warpers to your inventory.',
    'Tip: Set ILS to supply warpers to inventory.'
  );
  fs.writeFileSync(path.join(dir, 'ils-warper-slot.svg'), iw, 'utf8');
  console.log('Fixed!');
}

// Check ils-dual-planet.svg - find the long text
let idp = fs.readFileSync(path.join(dir, 'ils-dual-planet.svg'), 'utf8');
const idpIdx = idp.lastIndexOf('Titanium loop');
if (idpIdx >= 0) {
  console.log('\nils-dual-planet long text:');
  const tagStart = idp.lastIndexOf('<', idpIdx);
  console.log(idp.substring(tagStart, tagStart + 250));
  // Need to shorten more
  idp = idp.replace(
    'Titanium loop is infinite. Add more vessels as needed.',
    'Titanium loop is infinite - add vessels.'
  );
  fs.writeFileSync(path.join(dir, 'ils-dual-planet.svg'), idp, 'utf8');
  console.log('Fixed!');
}

// Check power-cascade-restart.svg - the split tip
let pcr = fs.readFileSync(path.join(dir, 'power-cascade-restart.svg'), 'utf8');
const pcrIdx = pcr.lastIndexOf('Prevention tip:');
if (pcrIdx >= 0) {
  console.log('\npower-cascade-restart Prevention tip:');
  console.log(pcr.substring(pcrIdx, pcrIdx + 200));
  // Shorten the first line
  pcr = pcr.replace(
    'Prevention tip: Keep 12 thermal generators on separate grid, running coal.',
    'Prevention tip: Keep 12 thermal gens on a separate coal grid.'
  );
  fs.writeFileSync(path.join(dir, 'power-cascade-restart.svg'), pcr, 'utf8');
  console.log('Fixed!');
}

// Fix power-cascade.svg - "Prevention (Grid ALIVE)" 
let pc = fs.readFileSync(path.join(dir, 'power-cascade.svg'), 'utf8');
pc = pc.replace('Prevention (Grid ALIVE)', 'Prevention (Alive Grid)');
// That's slightly different char count... "Prevention (Alive Grid)" = 23 chars * 9.6 = 221... same issue.
// Let me just make it really short:
pc = pc.replace('Prevention (Alive Grid)', 'Prevention (Active)');
fs.writeFileSync(path.join(dir, 'power-cascade.svg'), pc, 'utf8');
console.log('\nFixed power-cascade.svg Prevention title');

// Fix others with quick shorten
// blue-science-refinery-split.svg: "+ Silicon Ore(Chem)" 
let bsr = fs.readFileSync(path.join(dir, 'blue-science-refinery-split.svg'), 'utf8');
bsr = bsr.replace('+ Silicon Ore(Chem)', '+ Silicon(Chem)');
fs.writeFileSync(path.join(dir, 'blue-science-refinery-split.svg'), bsr, 'utf8');
console.log('Fixed blue-science-refinery-split');

// oil-refining-flow.svg
let orf = fs.readFileSync(path.join(dir, 'oil-refining-flow.svg'), 'utf8');
orf = orf.replace('Prevent backup', 'No backup!');
orf = orf.replace('High-energy grid', 'High-power grid');
fs.writeFileSync(path.join(dir, 'oil-refining-flow.svg'), orf, 'utf8');
console.log('Fixed oil-refining-flow');

// warper-payoff.svg
let wp = fs.readFileSync(path.join(dir, 'warper-payoff.svg'), 'utf8');
wp = wp.replace('Vessels grab warpers', 'Vessels take warpers');
fs.writeFileSync(path.join(dir, 'warper-payoff.svg'), wp, 'utf8');
console.log('Fixed warper-payoff');

// sail-automation-loop.svg - minor 1px
// Just leave it, 1px is negligible

console.log('\nDone with final round of fixes.');
