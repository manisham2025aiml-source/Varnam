const fs = require('fs');

const content = fs.readFileSync('src/data/states.ts', 'utf8');
const regex = /slug:\s*'([^']+)',\s*name:\s*'([^']+)'/g;

let match;
let count = 0;
const states = [];
while ((match = regex.exec(content)) !== null) {
  count++;
  states.push({ index: count, slug: match[1], name: match[2] });
}

fs.writeFileSync('scripts/states-summary.json', JSON.stringify({ count, states }, null, 2));
process.exit(0);
