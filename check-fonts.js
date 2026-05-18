const fs = require('fs');
const path = require('path');
const dir = 'C:\\Users\\ROG\\.qclaw\\workspace-irfnf4l86a7w0aii\\dsp-guide\\static\\images';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));
files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const sizes = [];
  const re = /font-size="([^"]+)"/g;
  let m;
  while ((m = re.exec(content)) !== null) sizes.push(m[1]);
  if (sizes.length) {
    const uniq = [...new Set(sizes)].sort((a, b) => parseFloat(a) - parseFloat(b));
    console.log(f + ': ' + uniq.join(', ') + ' (max=' + uniq[uniq.length - 1] + ')');
  }
});
