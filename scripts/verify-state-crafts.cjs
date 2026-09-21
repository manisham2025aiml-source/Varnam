const fs = require('fs');

const statesCode = fs.readFileSync('src/data/states.ts', 'utf8');
const craftsCode = fs.readFileSync('src/data/crafts.ts', 'utf8') + '\n' + fs.readFileSync('src/data/allStateCrafts.ts', 'utf8');

const targetStates = ['maharashtra', 'odisha', 'karnataka', 'uttar-pradesh'];

let totalMissing = 0;
targetStates.forEach(slug => {
  const stateRegex = new RegExp(`slug:\\s*'${slug}'[\\s\\S]*?signatureCraftIds:\\s*\\[([\\s\\S]*?)\\]`, 'm');
  const match = stateRegex.exec(statesCode);
  if (match) {
    const ids = match[1].split(',').map(s => s.trim().replace(/['"]/g, '')).filter(Boolean);
    console.log(`\nState ${slug} signatureCraftIds:`, ids);
    ids.forEach(id => {
      const exists = craftsCode.includes(`id: '${id}'`) || craftsCode.includes(`id: "${id}"`);
      if (!exists) totalMissing++;
      console.log(`  Craft ${id}: ${exists ? 'EXISTS' : 'MISSING'}`);
    });
  } else {
    console.log(`State ${slug} NOT FOUND`);
  }
});

console.log(`\nTotal Missing across target states: ${totalMissing}`);
