const fs = require('fs');
const lines = fs.readFileSync('src/data/states.ts', 'utf8').split('\n');
lines.forEach((line, i) => {
  if (line.includes('// ===') || line.includes('slug:')) {
    if (line.includes('karnataka') || line.includes('maharashtra') || line.includes('odisha') || line.includes('uttar-pradesh') ||
        line.includes('KARNATAKA') || line.includes('MAHARASHTRA') || line.includes('ODISHA') || line.includes('UTTAR PRADESH')) {
      console.log(`${i + 1}: ${line.trim()}`);
    }
  }
});
