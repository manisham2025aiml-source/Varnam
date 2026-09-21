const fs = require('fs');

const content = fs.readFileSync('src/data/states.ts', 'utf8');

// Strip TypeScript annotations
const jsContent = content
  .replace(/import\s+[^;]+;/g, '')
  .replace(/: StateData\[\]/g, '')
  .replace(/: StateData/g, '')
  .replace(/export const /g, 'const ');

const fn = new Function(jsContent + '\nreturn INDIAN_STATES;');
const states = fn();

const summary = states.map((s, idx) => ({
  index: idx + 1,
  slug: s.slug,
  name: s.name,
  tagLine: s.tagLine,
  accentColor: s.accentColor,
  chipsCount: (s.culturalHighlights || []).length,
  stickersCount: (s.stickers || []).length
}));

fs.writeFileSync('scripts/states-audit-report.json', JSON.stringify(summary, null, 2));
console.log('Successfully audited ' + states.length + ' states.');
