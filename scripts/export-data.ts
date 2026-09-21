import fs from 'node:fs';
import path from 'node:path';
import { INDIAN_STATES } from '../src/data/states';
import { ALL_CRAFTS } from '../src/data/crafts';
import { ALL_ARTISANS } from '../src/data/artisans';
import { EDITORIAL_STORIES } from '../src/data/stories';
import { VERIFICATION_REGISTRY } from '../src/data/verification';
import { CURATED_COLLECTIONS } from '../src/data/collections';

const outDir = path.resolve(process.cwd(), 'public/dataset');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Individual datasets
fs.writeFileSync(
  path.join(outDir, 'states.json'),
  JSON.stringify(INDIAN_STATES, null, 2),
  'utf-8'
);

fs.writeFileSync(
  path.join(outDir, 'crafts.json'),
  JSON.stringify(ALL_CRAFTS, null, 2),
  'utf-8'
);

fs.writeFileSync(
  path.join(outDir, 'artisans.json'),
  JSON.stringify(ALL_ARTISANS, null, 2),
  'utf-8'
);

fs.writeFileSync(
  path.join(outDir, 'stories.json'),
  JSON.stringify(EDITORIAL_STORIES, null, 2),
  'utf-8'
);

fs.writeFileSync(
  path.join(outDir, 'collections.json'),
  JSON.stringify(CURATED_COLLECTIONS, null, 2),
  'utf-8'
);

fs.writeFileSync(
  path.join(outDir, 'verification.json'),
  JSON.stringify(VERIFICATION_REGISTRY, null, 2),
  'utf-8'
);

// 2. Complete unified VARNAM dataset
const unifiedDataset = {
  metadata: {
    platform: 'VARNAM — AI-Powered Digital Identity & Discovery Platform for Indian Handicrafts',
    version: '2.0.0',
    generatedAt: new Date().toISOString(),
    license: 'Open Cultural Heritage Data (CC BY-NC 4.0)',
    counts: {
      statesCount: INDIAN_STATES.length,
      craftsCount: ALL_CRAFTS.length,
      artisansCount: ALL_ARTISANS.length,
      editorialStoriesCount: EDITORIAL_STORIES.length,
      curatedCollectionsCount: CURATED_COLLECTIONS.length,
      verificationRecordsCount: Object.keys(VERIFICATION_REGISTRY).length,
    },
    zonesRepresented: ['South', 'North', 'West', 'East', 'North-East'],
    giTaggedCount: ALL_CRAFTS.filter(c => c.isGiVerified).length,
  },
  states: INDIAN_STATES,
  crafts: ALL_CRAFTS,
  artisans: ALL_ARTISANS,
  stories: EDITORIAL_STORIES,
  collections: CURATED_COLLECTIONS,
  verificationRegistry: VERIFICATION_REGISTRY,
};

fs.writeFileSync(
  path.join(outDir, 'varnam_complete_dataset.json'),
  JSON.stringify(unifiedDataset, null, 2),
  'utf-8'
);

console.log('✅ VARNAM datasets successfully exported to public/dataset:');
console.log(`- states.json (${INDIAN_STATES.length} states)`);
console.log(`- crafts.json (${ALL_CRAFTS.length} crafts)`);
console.log(`- artisans.json (${ALL_ARTISANS.length} artisans)`);
console.log(`- stories.json (${EDITORIAL_STORIES.length} stories)`);
console.log(`- collections.json (${CURATED_COLLECTIONS.length} collections)`);
console.log(`- verification.json (${Object.keys(VERIFICATION_REGISTRY).length} verification records)`);
console.log(`- varnam_complete_dataset.json (Unified Master Dataset: ${ALL_CRAFTS.length} crafts across ${INDIAN_STATES.length} states)`);
