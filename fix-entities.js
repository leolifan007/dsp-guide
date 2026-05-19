const fs = require('fs');
const path = require('path');

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.name === 'index.html') {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/&amp;/g, '&')
                       .replace(/&lt;/g, '<')
                       .replace(/&gt;/g, '>')
                       .replace(/&quot;/g, '"')
                       .replace(/&#39;/g, "'")
                       .replace(/&#34;/g, '"');
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Fixed: ${fullPath}`);
    }
  }
}

walkDir('.');
console.log('Entity fix completed!');
