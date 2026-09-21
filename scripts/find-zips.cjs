const fs = require('fs');
const path = require('path');

function findZips(dir) {
  try {
    fs.readdirSync(dir).forEach(f => {
      const full = path.join(dir, f);
      try {
        const stat = fs.statSync(full);
        if (stat.isDirectory() && f !== 'node_modules' && f !== '.git' && f !== 'dist') {
          findZips(full);
        } else if (f.endsWith('.zip') || f.endsWith('.tar') || f.endsWith('.gz') || f.endsWith('.jsonl')) {
          console.log(`FOUND ARCHIVE/DATA: ${full} (${stat.size} bytes)`);
        }
      } catch (e) {}
    });
  } catch (e) {}
}

findZips('.');
