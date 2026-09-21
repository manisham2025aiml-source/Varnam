const fs = require('fs');
const path = require('path');

console.log('=== Checking workspace root directories ===');
fs.readdirSync('.').forEach(f => {
  const stat = fs.statSync(f);
  if (stat.isDirectory()) {
    console.log(`DIR: ${f}`);
  } else {
    console.log(`FILE (${stat.size}B): ${f}`);
  }
});

console.log('\n=== Walking "demo and dataset" ===');
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full);
    } else {
      console.log(`${stat.size} bytes: ${full}`);
      if (stat.size > 0 && stat.size < 5000) {
        try {
          const preview = fs.readFileSync(full, 'utf8').slice(0, 300);
          console.log(`   Preview: ${preview.replace(/\n/g, ' ')}`);
        } catch (e) {}
      }
    }
  });
}

walk('demo and dataset');
