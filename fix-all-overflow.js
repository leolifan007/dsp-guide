const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\ROG\\.qclaw\\workspace-irfnf4l86a7w0aii\\dsp-guide\\static\\images';

// Define fixes per file: [oldText, newText]
const fixes = {
  // === blue-science-flow.svg ===
  'blue-science-flow.svg': [
    ['~30 Ref Oil + 20 H2/min', '~30 Oil + 20 H2/min'],
  ],

  // === blue-science-refinery-split.svg ===
  'blue-science-refinery-split.svg': [
    ['~60/min per Extractor', '~60/min/Extractor'],
    ['+ Graphite in Chem Plant', '+ Graphite(Chem)'],
    ['CRYSTAL SILICON', 'XTL SILICON'],
    ['+ Silicon Ore in Chem Plant', '+ Silicon Ore(Chem)'],
  ],

  // === fire-ice-chain.svg ===
  'fire-ice-chain.svg': [
    ['COLD / VOLCANIC PLANET', 'COLD/VOLCANIC'],
    ['Deuterium -&gt; Rocket Fuel', 'Deuterium -> Fuel'],
    ['Plan water supply BEFORE scaling', 'Plan water BEFORE scaling'],
  ],

  // === green-matrix-line.svg ===
  'green-matrix-line.svg': [
    ['Consumed as Gravity Matrix', 'Consumed as Gravity'],
  ],

  // === ils-demand-vs-supply.svg ===
  'ils-demand-vs-supply.svg': [
    ['Ships items FROM this station', 'Ships items FROM station'],
    ['Requests items INTO this station', 'Requests items INTO station'],
    // Widen Hydrogen/Deuterium/Graphene/Iron Ore boxes from 54 to 70
  ],

  // === ils-dual-planet.svg ===
  'ils-dual-planet.svg': [
    ['Once this loop is set up, titanium is infinite. Ad', 'Titanium loop is infinite. Add more vessels as needed.'],
  ],

  // === ils-how-it-works.svg ===
  'ils-how-it-works.svg': [
    ['Assemblers producing', 'Assemblers output'],
    ['Science labs needing', 'Science labs need'],
    ['[!] Ships DON\'T fly for free!', '[!] Ships need fuel to fly!'],
  ],

  // === ils-warper-slot.svg ===
  'ils-warper-slot.svg': [
    ['Pro tip: On your starter planet, set an ILS to sup', 'Pro tip: Set an ILS to supply warpers to your inventory.'],
  ],

  // === oil-refining-flow.svg ===
  'oil-refining-flow.svg': [
    ['-&gt; Refined Oil 1/s + H2 0.5/s', '-> Oil 1/s + H2 0.5/s'],
    ['-&gt; Circuit Boards', '-> C. Boards'],
  ],

  // === power-cascade-restart.svg - key fix: split long into 2 lines ===
  'power-cascade-restart.svg': [
    // Split the prevention tip into 2 lines
    ['Prevention tip: Keep a dedicated panel of 12 thermal generators on a separate grid running coal. Never let the cascade kill your main bus again.', ''],
    // We need to add a second text element - handled differently below
  ],

  // === power-cascade.svg ===
  'power-cascade.svg': [
    [' CASCADE -&gt; ALL POWER = ZERO -&gt; FACTORY DEAD', 'CASCADE: ALL POWER = ZERO => FACTORY DEAD'],
    [' Emergency (Grid is DEAD)', 'Emergency (Grid DEAD)'],
    [' Prevention (Grid is ALIVE)', 'Prevention (Grid ALIVE)'],
    [' Mid-Game (After Yellow)', 'Mid-Game (Yellow+)'],
    // Fix "2. Sorters slow down" title overflowing 200px box
    // It's at 16px in a 200px box. "2. Sorters slow down" = 21 chars * 9.6 = 202px
    // Not much we can do without widening the box
  ],
  
  // === proliferator-quantum-chips.svg ===
  'proliferator-quantum-chips.svg': [
    ['Circuit + Silicon + Copper', 'Circuit+Si+Copper'],
  ],

  // === proliferator-tiers.svg ===
  'proliferator-tiers.svg': [
    ['PROLIFERATOR Mk.II', 'PROLIF. Mk.II'],
    ['PROLIFERATOR Mk.III', 'PROLIF. Mk.III'],
  ],

  // === sail-automation-loop.svg ===
  'sail-automation-loop.svg': [
    ['Coal + Oil -&gt; Graphene', 'Coal+Oil -> Graphene'],
  ],

  // === warper-payoff.svg ===
  'warper-payoff.svg': [
    ['3 ingredients combined', '3 ingredients'],
    ['1 Green Matrix = 1 Warper', '1 GM = 1 Warper'],
    ['Vessels pick up warpers', 'Vessels grab warpers'],
  ],
};

let totalChanged = 0;
const overrides = {};

// Also handle box widening for specific files
for (const [file, fileFixes] of Object.entries(fixes)) {
  const filepath = path.join(dir, file);
  if (!fs.existsSync(filepath)) {
    console.log('NOT FOUND: ' + file);
    continue;
  }
  let content = fs.readFileSync(filepath, 'utf8');
  const original = content;
  
  for (const [oldText, newText] of fileFixes) {
    if (newText === '') {
      // Special case: mark for custom handling
      overrides[file] = { action: 'custom' };
      continue;
    }
    if (content.includes(oldText)) {
      content = content.split(oldText).join(newText);
      totalChanged++;
    } else {
      console.log('  WARNING: Not found in ' + file + ': "' + oldText.substring(0, 40) + '"');
    }
  }
  
  if (content !== original) {
    fs.writeFileSync(filepath, content, 'utf8');
  }
}

// === Handle power-cascade-restart.svg specially: split long tip into 2 lines ===
const restartPath = path.join(dir, 'power-cascade-restart.svg');
let rc = fs.readFileSync(restartPath, 'utf8');
rc = rc.replace(
  '<text x="300" y="486" text-anchor="middle" fill="#fbbf24" font-size="13.3" font-weight="600" font-family="sans-serif"> Prevention tip: Keep a dedicated panel of 12 thermal generators on a separate grid running coal. Never let the cascade kill your main bus again.</text>',
  '<text x="300" y="483" text-anchor="middle" fill="#fbbf24" font-size="13.3" font-weight="600" font-family="sans-serif"> Prevention tip: Keep 12 thermal generators on a separate grid, running coal.</text>\n  <text x="300" y="498" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="500" font-family="sans-serif">Never let the cascade kill your main bus again.</text>'
);
fs.writeFileSync(restartPath, rc, 'utf8');
totalChanged++;

// === Handle ils-demand-vs-supply.svg: widen small item boxes ===
const demandPath = path.join(dir, 'ils-demand-vs-supply.svg');
let dc = fs.readFileSync(demandPath, 'utf8');
// Widen item boxes from 54px to 72px and center x adjustments
// Original: x="163" width="54" center=190, x="223" width="54" center=250, etc.
// Just widen: 54 -> 72 means x needs to shift left by 9
dc = dc.replace('x="163" y="180" width="54"', 'x="152" y="180" width="76"');
dc = dc.replace('x="223" y="180" width="54"', 'x="212" y="180" width="76"');
dc = dc.replace('x="283" y="180" width="54"', 'x="283" y="180" width="76"');
// Also fix the text x for centered items: 190 -> 190 is fine (163+54/2=190, 152+76/2=190) 
// Wait: (152+76) = 228, center = 152+38 = 190. Same center! Perfect.
// (212+76) = 288, center = 212+38 = 250. Same ✅
// (283+76) = 359, center = 283+38 = 321. Same ✅
fs.writeFileSync(demandPath, dc, 'utf8');
console.log('Fixed: ils-demand-vs-supply.svg (widened item boxes)');

console.log('\nDone. ' + totalChanged + ' text replacements across ' + Object.keys(fixes).length + ' files.');
