const fs = require('fs');

// Fix proliferator-quantum-chips.svg - ROI text overflow
const filepath = 'C:\\Users\\ROG\\.qclaw\\workspace-irfnf4l86a7w0aii\\dsp-guide\\static\\images\\proliferator-quantum-chips.svg';
let content = fs.readFileSync(filepath, 'utf8');

// Estimate text width in monospace: font-size * 0.6 * charCount
// Box width = 310px. Check all texts in 310px and 180px boxes.
const fixes = {
  // === ROI comparison boxes (x=40..350, width=310, center=195) ===
  // "100 Circuit Boards -> 100 Quantum Chips" at 16px = ~38 chars * 9.6 = 365px OVER 310px
  '100 Circuit Boards -&gt; 100 Quantum Chips': 'Circuit Boards -&gt; Quantum Chips (x100)',
  // "100 Circuit Boards -> 120 Quantum Chips" at 16px = same issue
  '100 Circuit Boards -&gt; 120 Quantum Chips': 'Circuit Boards -&gt; Quantum Chips (x120)',
  // "Proliferator cost < building 2nd assembler" at 12.4px = 44 chars * 7.4 = 326px OVER 310px
  'Proliferator cost &lt; building 2nd assembler': 'Cheaper than building 2nd assembler',
  // === Layered boxes (each 180px wide) ===
  // "Endgame optimization" at 12.4px = 20 chars * 7.4 = 148px fits OK
  // "Biggest bottleneck first" at 12.4px = 24 chars * 7.4 = 178px barely fits 180
  // "Mid-tier cost, high ROI" at 12.4px = 23 chars * 7.4 = 170px fits OK
  // All others look OK
};

for (const [oldText, newText] of Object.entries(fixes)) {
  content = content.split(oldText).join(newText);
}

fs.writeFileSync(filepath, content, 'utf8');
console.log('Fixed: ' + filepath);
