const fs = require('fs');
const path = require('path');
const dir = 'C:\\Users\\ROG\\.qclaw\\workspace-irfnf4l86a7w0aii\\dsp-guide\\static\\images';

// 1. Fix power-cascade-restart.svg - increase rect height for 2-line tip
let rc = fs.readFileSync(path.join(dir, 'power-cascade-restart.svg'), 'utf8');
rc = rc.replace('height="24" rx="4" fill="rgba(251,191,36,0.06)" stroke="#92400e" stroke-width="0.5"/>\n  <text x="300" y="483" text-anchor="middle" fill="#fbbf24" font-size="13.3" font-weight="600" font-family="sans-serif"> Prevention tip: Keep 12 thermal generators on a separate grid, running coal.</text>',
  'height="36" rx="4" fill="rgba(251,191,36,0.06)" stroke="#92400e" stroke-width="0.5"/>\n  <text x="300" y="485" text-anchor="middle" fill="#fbbf24" font-size="13.3" font-weight="600" font-family="sans-serif">Prevention tip: Keep 12 thermal generators on separate grid, running coal.</text>');
fs.writeFileSync(path.join(dir, 'power-cascade-restart.svg'), rc, 'utf8');
console.log('Fixed: power-cascade-restart.svg rect height');

// 2. Fix proliferator-tiers.svg - find and shorten Mk.II/Mk.III card text
let pt = fs.readFileSync(path.join(dir, 'proliferator-tiers.svg'), 'utf8');
// The top cards use "PROLIFERATOR Mk.I", "PROLIFERATOR Mk.II", "PROLIFERATOR Mk.III"
// These are inside 180px boxes. Shorten to "PROLIF. Mk.I/II/III"
pt = pt.replace(/PROLIFERATOR Mk\.II/g, 'PROLIF. Mk.II');
pt = pt.replace(/PROLIFERATOR Mk\.III/g, 'PROLIF. Mk.III');
fs.writeFileSync(path.join(dir, 'proliferator-tiers.svg'), pt, 'utf8');
console.log('Fixed: proliferator-tiers.svg Mk.II/Mk.III');

// 3. Fix power-cascade.svg - widen the solution boxes (steps section)
// Steps 1-3 boxes are 200px wide. "2. Sorters slow down" overflows by 2px at 16px.
// Widen from 200 to 215px each and adjust arrows
let pc = fs.readFileSync(path.join(dir, 'power-cascade.svg'), 'utf8');
// Step 1: x=30, w=200 -> w=215
// Step 2: x=295, w=200 -> w=215 (shift right by 15)
// Step 3: x=560, w=200 -> x=570, w=215 (shift right by 10)
// Arrow 1->2: x1=235->245, x2=290 unchanged
// Arrow 2->3: x1=510->515, x2=540->555

pc = pc.replace(
  '<rect x="30" y="60" width="200" height="90" rx="6" fill="#2a2a44" stroke="#d4a020" stroke-width="1.5" filter="url(#shadow)"/>\n  <text x="130" y="85"',
  '<rect x="30" y="60" width="215" height="90" rx="6" fill="#2a2a44" stroke="#d4a020" stroke-width="1.5" filter="url(#shadow)"/>\n  <text x="137" y="85"'
);
pc = pc.replace(
  '<rect x="295" y="60" width="200" height="90" rx="6" fill="#2a2a44" stroke="#d4a020" stroke-width="1.5" filter="url(#shadow)"/>\n  <text x="395" y="85"',
  '<rect x="310" y="60" width="215" height="90" rx="6" fill="#2a2a44" stroke="#d4a020" stroke-width="1.5" filter="url(#shadow)"/>\n  <text x="417" y="85"'
);
pc = pc.replace(
  '<rect x="560" y="60" width="200" height="90" rx="6" fill="#3a2020" stroke="#c0392b" stroke-width="2" filter="url(#shadow)"/>\n  <text x="660" y="85"',
  '<rect x="570" y="60" width="215" height="90" rx="6" fill="#3a2020" stroke="#c0392b" stroke-width="2" filter="url(#shadow)"/>\n  <text x="677" y="85"'
);

// Fix arrows
pc = pc.replace(
  '<line x1="235" y1="105" x2="290" y2="105" stroke="#d4a020" stroke-width="2" marker-end="url(#arrowYell)"/>',
  '<line x1="250" y1="105" x2="305" y2="105" stroke="#d4a020" stroke-width="2" marker-end="url(#arrowYell)"/>'
);
pc = pc.replace(
  '<line x1="500" y1="105" x2="555" y2="105" stroke="#c44a4a" stroke-width="2" marker-end="url(#arrowRed)"/>',
  '<line x1="530" y1="105" x2="565" y2="105" stroke="#c44a4a" stroke-width="2" marker-end="url(#arrowRed)"/>'
);

// Fix solution boxes - widen from 220px to 235px
pc = pc.replace(
  '<rect x="30" y="265" width="220" height="115" rx="6" fill="#1e2a1e" stroke="#27ae60" stroke-width="1.5"/>\n  <text x="140" y="290"',
  '<rect x="30" y="265" width="235" height="115" rx="6" fill="#1e2a1e" stroke="#27ae60" stroke-width="1.5"/>\n  <text x="147" y="290"'
);
pc = pc.replace(
  '<rect x="285" y="265" width="220" height="115" rx="6" fill="#1e2a1e" stroke="#27ae60" stroke-width="1.5"/>\n  <text x="395" y="290"',
  '<rect x="300" y="265" width="235" height="115" rx="6" fill="#1e2a1e" stroke="#27ae60" stroke-width="1.5"/>\n  <text x="417" y="290"'
);
pc = pc.replace(
  '<rect x="540" y="265" width="220" height="115" rx="6" fill="#1e2a1e" stroke="#27ae60" stroke-width="1.5"/>\n  <text x="650" y="290"',
  '<rect x="570" y="265" width="235" height="115" rx="6" fill="#1e2a1e" stroke="#27ae60" stroke-width="1.5"/>\n  <text x="687" y="290"'
);

fs.writeFileSync(path.join(dir, 'power-cascade.svg'), pc, 'utf8');
console.log('Fixed: power-cascade.svg (widened boxes, shifted coordinates)');

console.log('\nDone with remaining fixes.');
