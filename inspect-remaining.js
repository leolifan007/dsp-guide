const fs = require('fs');
const path = require('path');
const dir = 'C:\\Users\\ROG\\.qclaw\\workspace-irfnf4l86a7w0aii\\dsp-guide\\static\\images';

// 1. Fix power-cascade-restart.svg - check current state and fix rect height
let rc = fs.readFileSync(path.join(dir, 'power-cascade-restart.svg'), 'utf8');
console.log("Bottom of power-cascade-restart.svg:");
console.log(rc.substring(rc.length - 500));

// 2. Fix proliferator-tiers.svg - find the Mk.II/Mk.III text
let pt = fs.readFileSync(path.join(dir, 'proliferator-tiers.svg'), 'utf8');
console.log("\n\nproliferator-tiers Mk.II/Mk.III context:");
const idxMk2 = pt.lastIndexOf('Mk.II');
if (idxMk2 >= 0) console.log(pt.substring(Math.max(0, idxMk2 - 100), idxMk2 + 60));
const idxMk3 = pt.lastIndexOf('Mk.III');
if (idxMk3 >= 0) console.log(pt.substring(Math.max(0, idxMk3 - 100), idxMk3 + 60));
