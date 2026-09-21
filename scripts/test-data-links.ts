import { ALL_CRAFTS } from '../src/data/crafts.ts';
import { ALL_ARTISANS } from '../src/data/artisans.ts';
import { INDIAN_STATES } from '../src/data/states.ts';
import { CURATED_COLLECTIONS } from '../src/data/collections.ts';
import { EDITORIAL_STORIES } from '../src/data/stories.ts';
import { VERIFICATION_REGISTRY } from '../src/data/verification.ts';

const craftIds = new Set(ALL_CRAFTS.map(c => c.id));
const artisanIds = new Set(ALL_ARTISANS.map(a => a.id));
const stateSlugs = new Set(INDIAN_STATES.map(s => s.slug));

console.log('Total Crafts:', ALL_CRAFTS.length);
console.log('Total Artisans:', ALL_ARTISANS.length);
console.log('Total States:', INDIAN_STATES.length);

const missingCrafts: { source: string; id: string }[] = [];

// Check collections
for (const col of CURATED_COLLECTIONS) {
  for (const cid of col.craftIds) {
    if (!craftIds.has(cid)) {
      missingCrafts.push({ source: `Collection: ${col.id}`, id: cid });
    }
  }
}

// Check states
for (const st of INDIAN_STATES) {
  for (const cid of st.signatureCraftIds) {
    if (!craftIds.has(cid)) {
      missingCrafts.push({ source: `State: ${st.slug}`, id: cid });
    }
  }
}

// Check artisans
for (const art of ALL_ARTISANS) {
  for (const cid of art.craftIds) {
    if (!craftIds.has(cid)) {
      missingCrafts.push({ source: `Artisan: ${art.id}`, id: cid });
    }
  }
}

// Check stories
for (const st of EDITORIAL_STORIES) {
  for (const cid of st.relatedCraftIds) {
    if (!craftIds.has(cid)) {
      missingCrafts.push({ source: `Story: ${st.id}`, id: cid });
    }
  }
}

console.log('Missing craft references count:', missingCrafts.length);
for (const m of missingCrafts) {
  console.log(`  MISSING: [${m.source}] -> "${m.id}"`);
}
