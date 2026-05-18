const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\ROG\\.qclaw\\workspace-irfnf4l86a7w0aii\\dsp-guide\\static\\images';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg') && !f.includes('dsp-icons'));

// Monospace width estimate: font-size * 0.6 * charCount
// A monospace char at font-size F is roughly F*0.6 px wide
function textWidthPx(text, fontSize) {
  // Count actual characters (not HTML entities)
  const clean = text.replace(/&[a-z]+;/g, 'X'); // entities count as 1 char
  return fontSize * 0.6 * clean.length;
}

let allOverflows = [];

files.forEach(f => {
  const filepath = path.join(dir, f);
  let content = fs.readFileSync(filepath, 'utf8');
  const lines = content.split('\n');
  const overflows = [];
  
  // Find all rect-text pairs. For centered text in a rect, the text x should be
  // at the rect's center. We check by finding the nearest rect for each text.
  const rects = [];
  const texts = [];
  
  // Parse all rects
  const rectRe = /<rect\s+x="([\d.]+)"\s+y="([\d.]+)"\s+width="([\d.]+)"\s+height="([\d.]+)"/g;
  let m;
  while ((m = rectRe.exec(content)) !== null) {
    rects.push({ x: parseFloat(m[1]), y: parseFloat(m[2]), w: parseFloat(m[3]), h: parseFloat(m[4]) });
  }
  
  // Parse all text elements with text-anchor="middle" (centered)
  // Multi-line: each <text> tag with both x and y
  const textRe = /<text\s+x="([\d.]+)"\s+y="([\d.]+)"[^>]*>([^<]+)<\/text>/g;
  while ((m = textRe.exec(content)) !== null) {
    const tx = parseFloat(m[1]);
    const ty = parseFloat(m[2]);
    const ttext = m[3].trim();
    
    // Find font-size for this text
    const tagStart = m[0].indexOf('<text');
    const tag = m[0].substring(tagStart);
    const fsMatch = tag.match(/font-size="([\d.]+)"/);
    if (!fsMatch) continue;
    const fontSize = parseFloat(fsMatch[1]);
    
    // Find which rect this text is inside (y check: within rect.y and rect.y + rect.h)
    let parentRect = null;
    for (const r of rects) {
      if (ty >= r.y - 2 && ty <= r.y + r.h + 2 && Math.abs(tx - (r.x + r.w / 2)) < 3) {
        parentRect = r;
        break;
      }
    }
    
    if (parentRect) {
      const estW = textWidthPx(ttext, fontSize);
      const availW = parentRect.w - 10; // 5px padding each side
      if (estW > availW) {
        overflows.push({
          text: ttext.substring(0, 50),
          fontSize,
          estWidth: Math.round(estW),
          availWidth: Math.round(availW),
          rectW: parentRect.w,
          overflow: Math.round(estW - availW)
        });
      }
    }
  }
  
  if (overflows.length > 0) {
    allOverflows.push({ file: f, issues: overflows });
    console.log('\n=== ' + f + ' ===');
    overflows.forEach(o => {
      console.log('  OVERFLOW by ' + o.overflow + 'px: "' + o.text + '" at ' + o.fontSize + 'px (est=' + o.estWidth + 'px, avail=' + o.availWidth + 'px, box=' + o.rectW + 'px)');
    });
  }
});

console.log('\n\n=== SUMMARY ===');
if (allOverflows.length === 0) {
  console.log('No overflow issues found!');
} else {
  console.log(allOverflows.length + ' files with overflow issues:');
  allOverflows.forEach(f => {
    console.log('  ' + f.file + ': ' + f.issues.length + ' issues');
  });
}
