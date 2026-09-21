export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedCraftId?: string;
  suggestedStateSlug?: string;
  suggestedActions?: string[];
}

export function getVarnamAiResponse(query: string): ChatMessage {
  const lower = query.toLowerCase();

  // 1. Difference between Kanchipuram and Banarasi
  if (lower.includes('difference') && (lower.includes('kanchipuram') || lower.includes('banarasi'))) {
    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: `Namaste! Both Kanchipuram and Banarasi are crowned jewels of Indian silk heritage, but their craftsmanship and aesthetic philosophies differ fundamentally:

1. **Weaving Technique**: 
   - **Kanchipuram (Tamil Nadu)**: Famous for the *Korvai* technique where two weavers throw shuttles from opposite sides of the pit loom to tightly interlock contrasting borders and body. The pallu is attached using the *Petni* twist.
   - **Banarasi (Uttar Pradesh)**: Renowned for the *Kadhwa* and *Feekwa* brocade techniques, where gold and silver zari motifs are etched individually like embroidery across the warp with no loose floats.

2. **Silk & Weight**:
   - Kanchipuram uses 3-ply heavy mulberry silk yarn dipped in rice starch, resulting in a heavier, sturdier drape that can stand upright.
   - Banarasi traditionally uses gossamer *Katan* or fine organza silk, yielding a softer, regal Mughal court fall.

3. **Motif Lexicon**:
   - Kanchipuram motifs are temple-inspired: Mayil (peacock), Rudraksha, Temple Gopurams, and Yazhi.
   - Banarasi motifs draw from Persian and Awadhi royal gardens: Shikargah (hunting scenes), Jall (floral lattice), and Kalka (paisley).

Both carry authentic Geographical Indication (GI) tags verified on Varnam!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedCraftId: 'kanchipuram-silk-sari',
      suggestedActions: ['View Kanchipuram Silk', 'View Banarasi Brocade', 'Learn about Korvai Weaving']
    };
  }

  // 2. Caring for a Tanjore Painting
  if (lower.includes('tanjore') || lower.includes('thanjavur') && lower.includes('care')) {
    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: `Authentic Thanjavur paintings use 22-carat pure gold foil and natural limestone gesso (makku), making them precious domestic heirlooms. Here is how master painters advise preserving them:

1. **Light & Placement**: Display in indirect natural light or warm LED lighting. Avoid direct harsh sunlight, which can alter the moisture balance of the seasoned teak board.
2. **Moisture Control**: Keep away from direct water splashes or high humidity. In coastal or monsoon areas, ensure the frame is sealed with silicone backing.
3. **Cleaning**: Never use chemical glass cleaners or wet wipes on unglazed portions. If framed under glass, spray cleaner onto a microfiber cloth first—never directly onto the frame.
4. **Gold Foil Longevity**: Genuine 22K gold foil never tarnishes or oxidizes over time. If gold appears dim, it is usually surface dust—gently dust with an ostrich feather or camel hair brush.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedCraftId: 'tanjore-painting-krishna',
      suggestedActions: ['Explore Tanjore Paintings', 'Meet Master Meenakshi Ammal']
    };
  }

  // 3. Lost-Wax Bronze Casting
  if (lower.includes('lost-wax') || lower.includes('swamimalai') || lower.includes('bronze') || lower.includes('nataraja')) {
    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: `The Swamimalai lost-wax bronze casting (*Madhuchishtavidhana*) is an unbroken 1,000-year-old tradition dating to the Chola Dynasty (9th–13th century CE).

Here is what makes it unique:
- **No Two Are Identical**: Each wax model is sculpted freehand from forest beeswax, dammar resin, and groundnut oil. Because the wax melts away during firing (*lost-wax*), and the clay mould is shattered after cooling, every bronze icon is a solitary original.
- **Panchaloha Sacred Alloy**: Cast in a five-metal alloy (predominantly copper, with zinc, tin, and traces of lead, gold, or silver) proportioned according to the sacred *Shilpa Shastras*.
- **Kaveri Delta Soil**: The clay used for moulding is harvested specifically from the Kaveri river basin in Swamimalai, whose fine silt withstands the thermal shock of molten bronze at 1,150°C.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedCraftId: 'swamimalai-bronze-nataraja',
      suggestedStateSlug: 'tamil-nadu',
      suggestedActions: ['View Swamimalai Nataraja', 'Verify Sthapathi Lineage']
    };
  }

  // 4. Gifts under budget
  if (lower.includes('gift') || lower.includes('under') || lower.includes('wedding')) {
    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: `Here are three highly meaningful, verified Indian heritage gifts under ₹10,000 that carry authentic cultural blessings:

1. **Jaipur Blue Pottery Amphora Vase (₹7,200)**: Non-clay Egyptian paste hand-painted with cobalt blue arabesques. Perfect for modern living spaces.
2. **Channapatna Lacquer Rocking Horse (₹2,600)**: 100% baby-safe, polished with turmeric and screw-pine leaves on ivory wood. Ideal for newborns and baby showers.
3. **Kannauj Deg-Bhapka Mitti Attar (₹4,200)**: Captures the sacred scent of first rain on parched earth, distilled into pure sandalwood oil in copper cauldrons.

All pieces come with a Varnam Cryptographic Certificate of Authenticity and the artisan's personal story booklet.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedCraftId: 'jaipur-blue-pottery-vase',
      suggestedActions: ['Browse Gifts under ₹5000', 'Explore All GI Crafts']
    };
  }

  // 5. Roghan Art
  if (lower.includes('roghan') || lower.includes('kutch') || lower.includes('castor')) {
    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: `Roghan Art from Nirona, Kutch, is one of the world’s rarest textile arts:
- Master artisans boil wild castor oil for 48 continuous hours until it transforms into a thick elastic sap.
- Colored with stone mineral pigments, the artist warms a small ball of the paste in his palm, pulls a fine thread with a metal stylus, and guides it through mid-air without touching the fabric.
- When the painting is half finished, the fabric is folded along the middle axis, creating a flawless symmetrical mirror print!
- The Khatri family in Nirona is the only master family in the world preserving this ancient lineage.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedCraftId: 'nirona-roghan-tree-of-life',
      suggestedStateSlug: 'gujarat',
      suggestedActions: ['View Roghan Tree of Life', 'Meet Padma Shri Abdul Gafur']
    };
  }

  // 6. NFC Verification / GI Tag
  if (lower.includes('verify') || lower.includes('nfc') || lower.includes('qr') || lower.includes('gi tag')) {
    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: `Varnam’s verification system bridges physical craftsmanship with cryptographic truth:

1. **Geographical Indication (GI)**: Every craft on Varnam holds a certified Indian GI tag under the Geographical Indications of Goods Act (1999), certifying it originates from its historical cluster.
2. **Physical NFC Tag**: An encrypted NTAG424 DNA micro-chip is embedded directly into the craft (or woven into the selvedge thread).
3. **Cryptographic Proof**: Tapping the craft with your smartphone reads a unique cryptographic token that matches our immutable ledger, displaying the exact artisan, materials test, and date of creation.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedActions: ['Simulate NFC Scan Now', 'Learn How Varnam Verifies']
    };
  }

  // Default intelligent cultural response
  return {
    id: Math.random().toString(),
    sender: 'assistant',
    text: `Namaste! I am your Varnam Cultural Assistant. I can guide you through India’s authentic Geographical Indication (GI) tagged crafts, help you decipher the difference between regional weaves, share artisan lineages, or recommend verified heirloom pieces.

Feel free to ask me about:
- Differences between **Kanchipuram** and **Banarasi** silks
- How **lost-wax bronze casting** works in Swamimalai
- The 48-hour castor sap alchemy of **Roghan Art** in Kutch
- The secret front-surface mirror of **Aranmula Kannadi**
- Personalized wedding, festive, or corporate gift curation!`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    suggestedActions: ['Compare Regional Silks', 'Explore India State Map', 'Test NFC Verification']
  };
}
