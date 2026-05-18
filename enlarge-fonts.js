const fs = require('fs');
const path = require('path');
const dir = 'C:\\Users\\ROG\\.qclaw\\workspace-irfnf4l86a7w0aii\\dsp-guide\\static\\images';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));
const SCALE = 4 / 3; // enlarge by 1/3

let totalChanged = 0;
const report = [];

files.forEach(f => {
  const filepath = path.join(dir, f);
  let content = fs.readFileSync(filepath, 'utf8');
  const original = content;
  
  // Replace all font-size values
  let count = 0;
  content = content.replace(/font-size="([^"]+)"/g, (match, val) => {
    const num = parseFloat(val);
    if (!isNaN(num)) {
      const newVal = Math.round(num * SCALE * 10) / 10; // round to 1 decimal
      count++;
      return 'font-size="' + newVal + '"';
    }
    return match;
  });
  
  if (content !== original) {
    fs.writeFileSync(filepath, content, 'utf8');
    totalChanged += count;
    report.push(f + ': ' + count + ' sizes changed');
  } else {
    report.push(f + ': no font-size found');
  }
});

console.log('Total files processed: ' + files.length);
console.log('Total font-size changes: ' + totalChanged);
report.forEach(r => console.log('  ' + r));
