import { INDIAN_STATES } from '../src/data/states.ts';
import { ALL_CRAFTS } from '../src/data/crafts.ts';

const craftIds = new Set(ALL_CRAFTS.map(c => c.id));
console.log('Total States in dataset:', INDIAN_STATES.length);
console.log('Total Crafts in repository:', ALL_CRAFTS.length);

const missing: { state: string; craftId: string }[] = [];
for (const state of INDIAN_STATES) {
  for (const cid of state.signatureCraftIds) {
    if (!craftIds.has(cid)) {
      missing.push({ state: state.name, craftId: cid });
    }
  }
}

console.log('Missing craft count:', missing.length);
for (const m of missing) {
  console.log(`  State: ${m.state} missing -> ${m.craftId}`);
}
