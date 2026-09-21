import { Craft } from '../types';

export const ADDITIONAL_CRAFTS: Craft[] = [
  // --- TAMIL NADU ---
  {
    id: 'thanjavur-bobblehead-doll',
    varnamId: 'VRN-TN-000430',
    name: 'Thanjavur Golu Bobblehead Dancing Doll (Thalaiyaatti Bommai)',
    vernacularName: 'தஞ்சாவூர் தலையாட்டி பொம்மை',
    stateId: 'IN-TN',
    stateName: 'Tamil Nadu',
    category: 'Toys & dolls' as any,
    price: 2450,
    originalPrice: 2800,
    materials: ['Kaveri River Alluvial Clay', 'Paper Pulp', 'Plaster of Paris', 'Lead Counterweight', 'Natural Enamels'],
    technique: 'Center-of-gravity low balance oscillating sphere casting with independent pivot head',
    craftDuration: '8 days',
    originVillage: 'Thanjavur Craft Colony',
    giNumber: 'GI-083',
    giYear: 2009,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'World-famous self-balancing roly-poly dancing dolls engineered during the Maratha king Serfoji II era.',
    story: {
      history: 'Engineered in the early 19th century under Thanjavur Maratha ruler Serfoji II, these dolls demonstrate an intuitive understanding of physics and physics-based kinetic art.',
      culturalSignificance: 'An essential centerpiece of the annual Navaratri Golu displays across South Indian households, symbolizing poise and inner equilibrium in life.',
      artisanStory: 'Handcrafted by generational doll moulders in Thanjavur who calculate the lead-to-clay weight ratio without digital scales.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Clay Sphere Ballast', description: 'Curved bottom cup hand-pressed with Kaveri silt and counterweighted with lead pellet ballast.', timeSpent: '2 days', tools: ['Hemispherical Clay Moulds', 'Balance Scale'] },
        { stepNumber: 2, title: 'Paper Pulp Body Molding', description: 'Lightweight upper torso moulded from recycled paper pulp and tapioca starch.', timeSpent: '3 days', tools: ['Two-part Wooden Moulds'] },
        { stepNumber: 3, title: 'Pivot Balancing & Painting', description: 'Steel wire pivot inserted for frictionless oscillation, hand-painted with Bharatanatyam costume pigments.', timeSpent: '3 days', tools: ['Pivot Wire', 'Fine Hair Brushes'] }
      ],
      factualProvenanceNotes: ['GI-083 certified authentic Thanjavur craft.', 'Non-toxic toy coating standards.']
    },
    artisanId: 'meenakshi-ammal',
    rating: 4.8,
    reviewCount: 52,
    dimensions: '14 x 6 x 6 inches',
    weight: '650 grams',
    tags: ['Thanjavur Doll', 'Bobblehead', 'GI Tagged', 'Tamil Nadu', 'Golu'],
    inStock: true
  },
  {
    id: 'chettinad-kottan-palm-basket',
    varnamId: 'VRN-TN-000431',
    name: 'Chettinad Kottan Dyed Palmyra Leaf Heritage Basket',
    vernacularName: 'செட்டிநாடு கொட்டான் கூடை',
    stateId: 'IN-TN',
    stateName: 'Tamil Nadu',
    category: 'Natural Fiber & Grass',
    price: 1850,
    materials: ['Boiled Palmyra Tender Leaf Fibers (Panai Olai)', 'Natural Turmeric & Madder Dyes', 'Acacia Bark Gum'],
    technique: 'Intricate diagonal twill weaving of split palm leaf strands into checkered geometric boxes',
    craftDuration: '5 days',
    originVillage: 'Kanadukathan, Sivaganga District',
    giNumber: 'GI-218',
    giYear: 2013,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Eco-friendly vibrant geometric palm leaf gift baskets woven by the women of Chettinad merchant households.',
    story: {
      history: 'Originally woven by Chettiar women to exchange gifts of betel nuts and diamonds during wedding ceremonies across Burma, Ceylon, and Tamil Nadu.',
      culturalSignificance: 'A zero-carbon craft utilizing naturally shed leaves of the hardy Palmyra palm, the official tree of Tamil Nadu.',
      artisanStory: 'Crafted by the women’s handloom collective in Kanadukathan reviving heirloom geometric weave charts.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Palm Leaf Sun-Drying', description: 'Tender tender-fronds harvested, boiled in water, and bleached under morning sun.', timeSpent: '2 days', tools: ['Boiling Vat', 'Drying Mats'] },
        { stepNumber: 2, title: 'Color Bath & Splitting', description: 'Dyed in vivid magenta, emerald, and turmeric vats, then sliced into 2mm uniform ribbons.', timeSpent: '1 day', tools: ['Brass Slicing Comb'] },
        { stepNumber: 3, title: 'Hexagonal Diagonal Weaving', description: 'Hand-plaited into interlocking lidded baskets with decorative beaded rims.', timeSpent: '2 days', tools: ['Bone Needle', 'Shaping Block'] }
      ],
      factualProvenanceNotes: ['GI-218 certified Chettinad Kottan.', '100% biodegradable and compostable.']
    },
    artisanId: 'meenakshi-ammal',
    rating: 4.9,
    reviewCount: 29,
    dimensions: '8 x 8 x 6 inches',
    weight: '210 grams',
    tags: ['Chettinad Kottan', 'Palm Leaf', 'Sustainable', 'GI Tagged', 'Tamil Nadu'],
    inStock: true
  },

  // --- RAJASTHAN ---
  {
    id: 'kathputli-rajasthani-puppet',
    varnamId: 'VRN-RJ-000432',
    name: 'Marwar Kathputli String Puppet — King & Queen Pair',
    vernacularName: 'कठपुतली मारवाड़',
    stateId: 'IN-RJ',
    stateName: 'Rajasthan',
    category: 'Toys & dolls' as any,
    price: 3200,
    originalPrice: 3800,
    materials: ['Seasoned Mango Wood (Aam ki Lakdi)', 'Stuffed Cotton Padding', 'Vintage Brocade & Gota Patti', 'Beeswax Cord'],
    technique: 'Hand-carved wooden head joinery with multi-layered pleated bandhani skirt and string rigging',
    craftDuration: '6 days',
    originVillage: 'Kathputli Colony, Jaipur',
    giNumber: 'GI-199',
    giYear: 2011,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Expressive hand-carved Rajasthani string puppets dressed in royal gota skirts by nomadic Bhatt puppeteers.',
    story: {
      history: 'Dating back more than a thousand years to the legendary court of King Vikramaditya, nomadic Bhatts traveled through the Thar desert singing historical ballads.',
      culturalSignificance: 'Carved with oversized stylized eyes and dramatic arched brows, animated by a single bamboo reed whistle called the boli.',
      artisanStory: 'Sculpted by master puppeteer Ramesh Bhatt in Jaipur, preserving ancestral puppet joinery.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Wood Carving', description: 'Seasoned mango wood chisel-carved into distinct oval head and expressive arched nose.', timeSpent: '2 days', tools: ['Curved Chisels', 'Sandpaper'] },
        { stepNumber: 2, title: 'Costuming & Gota Stitching', description: 'Layered pleated skirts stitched from tie-dyed Bandhani silk and golden gota borders.', timeSpent: '2 days', tools: ['Needle & Thread', 'Gota Ribbon'] },
        { stepNumber: 3, title: 'String Balancing & Rigging', description: 'Black cotton strings tied to head, hands, and waist for fluid multi-axis motion.', timeSpent: '2 days', tools: ['Stringing Needle', 'Finger Loops'] }
      ],
      factualProvenanceNotes: ['GI-199 Rajasthani Kathputli verified.', 'Direct from Bhatt artisan community.']
    },
    artisanId: 'ramesh-chhipa',
    rating: 4.7,
    reviewCount: 41,
    dimensions: '22 inches height',
    weight: '480 grams',
    tags: ['Kathputli', 'Puppets', 'Rajasthan', 'GI Tagged', 'Folk Art'],
    inStock: true
  },
  {
    id: 'pichwai-shrinathji-painting',
    varnamId: 'VRN-RJ-000433',
    name: 'Nathdwara Pichwai Cloth Mural — Shrinathji & Kamdhenu Cows',
    vernacularName: 'नाथद्वारा पिछवाई चित्रकला',
    stateId: 'IN-RJ',
    stateName: 'Rajasthan',
    category: 'Paintings & Art',
    price: 46000,
    originalPrice: 52000,
    materials: ['Khadi Cotton Canvas', 'Real 24K Gold Leaf Dust', 'Stone Lapis Lazuli', 'Kajal Carbon', 'Gum Arabica'],
    technique: 'Traditional tempera mineral painting on tamarind-primed handloom cloth with pure gold embossing',
    craftDuration: '30 days',
    originVillage: 'Nathdwara, Rajsamand District',
    giNumber: 'GI-707',
    giYear: 2023,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Consecrated 36x24 inch Nathdwara temple backdrop painting adorned with lapis cows and 24K gold foil details.',
    story: {
      history: 'Created in the 17th century to hang behind (pichh-wai) the idol of Shrinathji at Nathdwara temple, depicting seasonal lilas of Lord Krishna.',
      culturalSignificance: 'Intrinsically sacred art requiring strict devotional purity, natural stone mineral pigments, and squirrel-hair fine lining.',
      artisanStory: 'Painted by master artist Giriraj Sharma whose ancestors were painters to the Tilkayat priests of Nathdwara.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Fabric Priming (Gond Pothi)', description: 'Handloom cloth starched with rice gruel, coated with zinc oxide and burnished with agate stone.', timeSpent: '4 days', tools: ['Agate Burnisher', 'Zinc Oxide Paste'] },
        { stepNumber: 2, title: 'Charcoal Outlining', description: 'Freehand sketching of Shrinathji, blossoming lotuses, and sacred cows using burnt willow charcoal.', timeSpent: '6 days', tools: ['Willow Charcoal Stylus'] },
        { stepNumber: 3, title: 'Mineral Color & Gold Leafing', description: 'Layering crushed malachite, lapis, and cinnabar, finished with real 24K gold foil application.', timeSpent: '20 days', tools: ['Squirrel Hair Brushes', 'Gold Leaf Tweezers'] }
      ],
      factualProvenanceNotes: ['GI-707 certified Nathdwara Pichwai.', '100% natural mineral pigments and real gold leaf.']
    },
    artisanId: 'giriraj-soni',
    rating: 5.0,
    reviewCount: 38,
    dimensions: '36 x 24 inches',
    weight: '320 grams',
    tags: ['Pichwai', 'Nathdwara', 'Shrinathji', 'Gold Leaf', 'GI Tagged', 'Rajasthan'],
    inStock: true,
    featured: true
  },
  {
    id: 'sanganeri-hand-block-print-bedcover',
    varnamId: 'VRN-RJ-000434',
    name: 'Sanganer Royal Botanical Block-Printed Cotton Bedspread',
    vernacularName: 'सांगानेरी हाथ की छपाई',
    stateId: 'IN-RJ',
    stateName: 'Rajasthan',
    category: 'Textiles & Weaving',
    price: 4800,
    materials: ['300-TC Percale Handloom Cotton', 'Teakwood Hand-Carved Blocks', 'Vegetable Dyes', 'River Sand Bleach'],
    technique: 'Multi-block precision registration on stark white base with delicate botanical border butas',
    craftDuration: '10 days',
    originVillage: 'Sanganer, Jaipur',
    giNumber: 'GI-222',
    giYear: 2010,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Signature Sanganeri white-ground bedcover printed with delicate Mughal rose and narcissus motifs.',
    story: {
      history: 'Patronized by Maharaja Sawai Jai Singh in the 18th century, Sanganer prints became celebrated worldwide for their crisp white background and pastel floral outlines.',
      culturalSignificance: 'Unlike darker Bagru mud-resist prints, Sanganer represents sunny courtly elegance favored for royal palace linens.',
      artisanStory: 'Stamped by Master Rameshwar Chhipa using 4-part interlocking teak blocks for outline and color fill.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'White Ground Bleaching', description: 'Cotton washed in Saraswati river water with limestone and cow dung to achieve brilliant white.', timeSpent: '3 days', tools: ['Washing Ghats', 'Lime Vat'] },
        { stepNumber: 2, title: 'Rekh (Outline) Printing', description: 'First block stamps the fine black outline using fermented iron jaggery dye.', timeSpent: '3 days', tools: ['Carved Teak Rekh Block'] },
        { stepNumber: 3, title: 'Gad (Fill) Block Inlaying', description: 'Secondary and tertiary wooden blocks fill madder red and indigo hues with millimeter precision.', timeSpent: '4 days', tools: ['Gad Blocks', 'Felt Pad Tray'] }
      ],
      factualProvenanceNotes: ['GI-222 authentic Sanganeri print.', 'Dyed using eco-safe botanical formulations.']
    },
    artisanId: 'ramesh-chhipa',
    rating: 4.8,
    reviewCount: 34,
    dimensions: '108 x 90 inches (King)',
    weight: '1200 grams',
    tags: ['Sanganeri', 'Block Print', 'Jaipur', 'GI Tagged', 'Home Decor'],
    inStock: true
  },

  // --- GUJARAT ---
  {
    id: 'mata-ni-pachedi-shrine',
    varnamId: 'VRN-GJ-000435',
    name: 'Mata Ni Pachedi Sacred Mother Goddess Shrine Cloth',
    vernacularName: 'માતાની પછેડી',
    stateId: 'IN-GJ',
    stateName: 'Gujarat',
    category: 'Paintings & Art',
    price: 34000,
    originalPrice: 39000,
    materials: ['Unbleached Cotton Muslin', 'Fermented Iron Rust Ink', 'Alum Mordant', 'Madder Root (Alizarin)', 'Tamarind Sticks'],
    technique: 'Nomadic Vaghari community sacred Kalamkari with wood block stamps and freehand bamboo pen painting',
    craftDuration: '24 days',
    originVillage: 'Sabarmati River Basin, Ahmedabad',
    giNumber: 'GI-699',
    giYear: 2023,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1609137144822-4a004eb7c9a4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Sacred temple cloth of the nomadic Vaghari community painted with iron rust and madder red in devotion to Goddess Durga.',
    story: {
      history: 'When the nomadic Vaghari community were barred from entering brick-and-mortar temples centuries ago, they painted their own temples onto cloths hung as sacred enclosures.',
      culturalSignificance: 'Often called the "Sacred Kalamkari of Gujarat", this living ritual art honors the fierce and compassionate Mother Goddess.',
      artisanStory: 'Drawn and boiled along the Sabarmati river by master artist Sanjay Chitara, an 8th generation temple painter.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Freehand Outlining', description: 'Central Goddess figure sketched using date palm pens and fermented iron-jaggery black ink.', timeSpent: '6 days', tools: ['Date Palm Stylus', 'Iron Inkpot'] },
        { stepNumber: 2, title: 'Alum Mordant Application', description: 'Alum solution painted inside borders to capture deep blood-red when boiled.', timeSpent: '8 days', tools: ['Bamboo Kalam', 'Alum Solution'] },
        { stepNumber: 3, title: 'Sabarmati River Boiling', description: 'Boiled in giant copper cauldrons with Dhawda tree flowers and madder root to fix color.', timeSpent: '10 days', tools: ['Copper Boiling Vat', 'River Running Water'] }
      ],
      factualProvenanceNotes: ['GI-699 certified Mata Ni Pachedi.', 'Hand-painted by Chitara master lineage.']
    },
    artisanId: 'abdul-gafur-khatri',
    rating: 5.0,
    reviewCount: 22,
    dimensions: '48 x 36 inches',
    weight: '450 grams',
    tags: ['Mata Ni Pachedi', 'Sacred Textile', 'Gujarat', 'GI Tagged', 'Tribal Art'],
    inStock: true
  },
  {
    id: 'ajrakhpur-block-stole',
    varnamId: 'VRN-GJ-000436',
    name: 'Kutch Ajrakh 16-Stage Natural Indigo Silk Modal Stole',
    vernacularName: 'અજરખ કચ્છી શાલ',
    stateId: 'IN-GJ',
    stateName: 'Gujarat',
    category: 'Textiles & Weaving',
    price: 3600,
    materials: ['Silk Modal Handloom Fabric', 'Natural Indigo', 'Madder Root', 'Pomegranate Rind', 'Pounded River Mud'],
    technique: 'Ancient 16-step resist dyeing with double-sided carved teak geometric stamps matching front and back',
    craftDuration: '21 days',
    originVillage: 'Ajrakhpur, Kutch',
    giNumber: 'GI-197',
    giYear: 2011,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1609137144822-4a004eb7c9a4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'The ancient starry night geometry of the Indus Valley, hand-stamped in 16 organic stages with deep river indigo.',
    story: {
      history: 'Dating back to the Mohenjo-daro King-Priest sculpture draped in trefoil patterned fabric, Ajrakh has been practiced by the Khatri community in Kutch for over 400 years.',
      culturalSignificance: 'The word Ajrakh comes from Arabic "Azrak" (blue) and Sanskrit "Aaj-Rakh" (keep it today). The geometric stars echo the desert night sky.',
      artisanStory: 'Crafted by Master Ismail Khatri in Ajrakhpur, who rebuilt the craft village following the devastating 2001 Bhuj earthquake.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Saaj & Harda Treatment', description: 'Washed in camel dung and castor oil, then treated with Harda (myrobalan) yellow wash.', timeSpent: '4 days', tools: ['Stone Washing Basin', 'Harda Vat'] },
        { stepNumber: 2, title: 'Gach & Mud Resist Stamping', description: 'Lime and gum paste stamped on both sides of fabric to protect white geometric stars.', timeSpent: '7 days', tools: ['Matched Carved Teak Blocks'] },
        { stepNumber: 3, title: 'Indigo & Madder Fermentation', description: 'Submerged in 10-foot indigo fermentation pits and boiled in madder root for deep ruby red.', timeSpent: '10 days', tools: ['Subterranean Indigo Vats', 'Boiling Cauldron'] }
      ],
      factualProvenanceNotes: ['GI-197 authentic Kutch Ajrakh.', 'Zero synthetic chemical run-off.']
    },
    artisanId: 'abdul-gafur-khatri',
    rating: 4.9,
    reviewCount: 46,
    dimensions: '80 x 28 inches',
    weight: '190 grams',
    tags: ['Ajrakh', 'Kutch', 'Indigo', 'GI Tagged', 'Gujarat', 'Eco-Fashion'],
    inStock: true
  },

  // --- WEST BENGAL ---
  {
    id: 'baluchari-ramayana-saree',
    varnamId: 'VRN-WB-000437',
    name: 'Bishnupur Baluchari Pure Silk Saree — Kurukshetra Epics',
    vernacularName: 'বালুচরি শাড়ি বিষ্ণুপুর',
    stateId: 'IN-WB',
    stateName: 'West Bengal',
    category: 'Textiles & Weaving',
    price: 28500,
    originalPrice: 32000,
    materials: ['Pure Murshidabad Mulberry Silk', 'Untwisted Golden Resham Threads', 'Vegetable Dyes'],
    technique: 'Intricate jacquard drawloom extra-weft narrative weaving depicting miniature epic court panels',
    craftDuration: '25 days',
    originVillage: 'Bishnupur, Bankura District',
    giNumber: 'GI-196',
    giYear: 2011,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Legendary narrative silk saree from the Malla royal kingdom carrying scenes of the Bhagavad Gita and royal courtiers in its pallu.',
    story: {
      history: 'Patronized by Nawab Murshid Quli Khan in the 18th century, Baluchari weaving migrated to Bishnupur under the Malla kings where temple terracotta relief motifs were translated onto silk.',
      culturalSignificance: 'A masterpiece of storytelling where each corner of the pallu tells an episodic legend without using metallic zari — only pure colored silk thread.',
      artisanStory: 'Woven by master weaver Swapan Das on traditional jacquard pit looms in Bishnupur.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Motif Graphing (Naksha)', description: 'Epic scenes charted on graph paper and punched onto thousands of jacquard pattern cards.', timeSpent: '6 days', tools: ['Naksha Graph Board', 'Punching Stylus'] },
        { stepNumber: 2, title: 'Silk Degumming & Dyeing', description: 'Murshidabad silk boiled in soapnut bath and dyed in madder, indigo, and pomegranate.', timeSpent: '4 days', tools: ['Dyeing Vats', 'Reeling Spindles'] },
        { stepNumber: 3, title: 'Narrative Weft Inlay', description: 'Over 1,200 cross-threads shuttled by hand to form horse chariots, courtiers, and lotus medallions.', timeSpent: '15 days', tools: ['Bishnupur Jacquard Loom', 'Horn Shuttles'] }
      ],
      factualProvenanceNotes: ['GI-196 certified Baluchari Saree.', 'Pure silk mark registered.']
    },
    artisanId: 'biren-kumbhakar',
    rating: 5.0,
    reviewCount: 31,
    dimensions: '6.2 meters (with blouse)',
    weight: '720 grams',
    tags: ['Baluchari', 'Silk', 'Bishnupur', 'West Bengal', 'GI Tagged', 'Handloom'],
    inStock: true,
    featured: true
  },
  {
    id: 'shantiniketan-leather-tote',
    varnamId: 'VRN-WB-000438',
    name: 'Shantiniketan Embossed Vegetable-Tanned Leather Tote Bag',
    vernacularName: 'শান্তিনিকেতন লেদার ব্যাগ',
    stateId: 'IN-WB',
    stateName: 'West Bengal',
    category: 'Decorative' as any,
    price: 3850,
    materials: ['Vegetable-Tanned Sheepskin Leather (E.I. Tanned)', 'Glass Batik Dyes', 'Wooden Pressing Blocks', 'Cotton Lining'],
    technique: 'Intaglio blind-embossing using engraved steel rollers followed by hand-touch glass dye tinting',
    craftDuration: '7 days',
    originVillage: 'Bolpur, Birbhum District',
    giNumber: 'GI-081',
    giYear: 2008,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Artisan tote bag crafted from vegetable-tanned grain leather, blind-embossed with folk art inspired by Rabindranath Tagore’s Sriniketan ashram.',
    story: {
      history: 'Introduced by Rabindranath Tagore and his son Rathindranath in the 1920s at Sriniketan to create sustainable rural craft livelihoods in Bengal.',
      culturalSignificance: 'Combines European bookbinding leather embossing with indigenous Bengal folk motifs and non-toxic vegetable tanning.',
      artisanStory: 'Crafted in Bolpur by rural women artisans trained under the Tagore craft guild lineage.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Vegetable Tanning & Soaking', description: 'Raw sheepskin soaked in myrobalan and acacia bark liquor for chemical-free softening.', timeSpent: '3 days', tools: ['Tanning Vats', 'Stretching Frame'] },
        { stepNumber: 2, title: 'Block Press Embossing', description: 'Wet leather pressed under heavy steel dyes etched with flora, folk dancers, and owls.', timeSpent: '2 days', tools: ['Mechanical Screw Press', 'Etched Steel Plates'] },
        { stepNumber: 3, title: 'Glass Dye Hand-Painting', description: 'Translucent aniline-free dyes rubbed with cotton swabs to create rich multi-tone patina.', timeSpent: '2 days', tools: ['Cotton Daubers', 'Agate Burnishing Stone'] }
      ],
      factualProvenanceNotes: ['GI-081 certified Shantiniketan Leather.', 'Chrome-free vegetable tanning.']
    },
    artisanId: 'ananya-karmakar',
    rating: 4.8,
    reviewCount: 44,
    dimensions: '15 x 12 x 4 inches',
    weight: '580 grams',
    tags: ['Shantiniketan', 'Leather', 'Eco-Tanned', 'GI Tagged', 'West Bengal'],
    inStock: true
  },
  {
    id: 'kantha-vintage-quilt',
    varnamId: 'VRN-WB-000439',
    name: 'Bengal Nakshi Kantha Hand-Embroidered Tussar Silk Throw',
    vernacularName: 'নকশী কাঁথা',
    stateId: 'IN-WB',
    stateName: 'West Bengal',
    category: 'Textiles & Weaving',
    price: 6500,
    materials: ['Wild Tussar Silk Fabric', 'Resham Hand-Dyed Embroidery Thread', 'Cotton Padding'],
    technique: 'Dense generational running-stitch embroidery (Nakshi Kantha) creating rippled textured surfaces',
    craftDuration: '18 days',
    originVillage: 'Nanoor, Birbhum District',
    giNumber: 'GI-084',
    giYear: 2008,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Heirloom Tussar silk quilt hand-stitched with hundreds of thousands of delicate running stitches depicting the Tree of Life.',
    story: {
      history: 'For centuries, rural Bengali women layered old saris and stitched them with threads unraveled from borders, creating warm quilts for newborn babies and brides.',
      culturalSignificance: 'Nakshi Kantha is poetry written with needles, capturing rural folklore, monsoon clouds, and blooming lotuses.',
      artisanStory: 'Stitched by women artisans of the Nanoor Kantha Collective, sharing songs as their needles dance across the silk.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Layering & Basting', description: 'Layers of handloom tussar silk pinned and basted with long tacking stitches.', timeSpent: '2 days', tools: ['Wooden Embroidery Frame', 'Basting Pins'] },
        { stepNumber: 2, title: 'Folk Motif Inscription', description: 'Central mandala and tree of life outlined with disappearing chalk.', timeSpent: '2 days', tools: ['Tailor’s Chalk'] },
        { stepNumber: 3, title: 'Running Stitch Density', description: 'Over 100,000 minute running stitches executed in contrasting indigo, saffron, and madder.', timeSpent: '14 days', tools: ['Fine Steel Needles', 'Silk Resham Threads'] }
      ],
      factualProvenanceNotes: ['GI-084 certified Nakshi Kantha.', 'Empowers women artisans in Birbhum.']
    },
    artisanId: 'ananya-karmakar',
    rating: 4.9,
    reviewCount: 39,
    dimensions: '90 x 60 inches',
    weight: '950 grams',
    tags: ['Nakshi Kantha', 'Embroidery', 'Tussar Silk', 'West Bengal', 'GI Tagged'],
    inStock: true
  },

  // --- JAMMU & KASHMIR ---
  {
    id: 'walnut-wood-carved-box',
    varnamId: 'VRN-JK-000440',
    name: 'Kashmir Seasoned Walnut Wood Relief Carved Jewelry Chest',
    vernacularName: 'کشمیر ڈونٛگہٕ اکھروٹ لکڑی',
    stateId: 'IN-JK',
    stateName: 'Jammu & Kashmir',
    category: 'Woodwork & Lacquer',
    price: 14500,
    originalPrice: 17000,
    materials: ['Seasoned 100-Year Himalayan Black Walnut Wood (Doone Kul)', 'Natural Beeswax & Walnut Oil Finish'],
    technique: 'Deep undercut high-relief carving (Sunbzi) using tempered iron gouges on a single block of walnut root',
    craftDuration: '14 days',
    originVillage: 'Fateh Kadal, Srinagar',
    giNumber: 'GI-182',
    giYear: 2011,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Hand-carved heirloom jewelry chest sculpted from mature subterranean walnut root with three-dimensional Chinar leaves.',
    story: {
      history: 'Brought to Kashmir in the 14th century by Sufi saint Mir Sayyid Ali Hamadani, walnut carving flourished along the banks of the river Jhelum.',
      culturalSignificance: 'Kashmir is the only region in India where walnut trees grow at scale. Wood is seasoned for up to 3 years before carving.',
      artisanStory: 'Sculpted by Master Ghulam Mohammad Bhat in downtown Srinagar using 30 different ancestral iron chisels.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Wood Selection & Seasoning', description: 'Dark dense subterranean root wood aged in covered sheds to prevent warping.', timeSpent: '3 years seasoning + 2 days prep', tools: ['Moisture Meter', 'Adze'] },
        { stepNumber: 2, title: 'Deep Undercut Chisel Work', description: 'Chinar leaves and grape vines carved in multi-tier relief where foliage lifts free from the box body.', timeSpent: '8 days', tools: ['Tempered Steel Gouges', 'Wooden Mallet'] },
        { stepNumber: 3, title: 'Agate & Wax Burnishing', description: 'Polished with dry agate stone and raw walnut oil — zero varnish or lacquer used.', timeSpent: '4 days', tools: ['Agate Polishing Stone', 'Pure Walnut Oil'] }
      ],
      factualProvenanceNotes: ['GI-182 authentic Kashmir Walnut Wood Carving.', 'Zero artificial varnish; 100% natural oil finish.']
    },
    artisanId: 'farooq-papier-mache',
    rating: 4.9,
    reviewCount: 27,
    dimensions: '12 x 8 x 6 inches',
    weight: '1850 grams',
    tags: ['Walnut Wood', 'Kashmir', 'Wood Carving', 'GI Tagged', 'Heirloom'],
    inStock: true
  },
  {
    id: 'kashmir-sozni-needle-pashmina',
    varnamId: 'VRN-JK-000441',
    name: 'Kashmir Sozni Micro-Needle Embroidered Pashmina Shawl',
    vernacularName: 'سوزنی پشمینہ شال',
    stateId: 'IN-JK',
    stateName: 'Jammu & Kashmir',
    category: 'Textiles & Weaving',
    price: 32000,
    materials: ['Grade-A Changthangi Pashmina Wool (12-14 Microns)', 'Fine Mulberry Silk Thread'],
    technique: 'Micro-needle Sozni point stitch identical on both sides (Dorukha) with 40 stitches per square centimeter',
    craftDuration: '45 days',
    originVillage: 'Kanihama, Budgam District',
    giNumber: 'GI-046',
    giYear: 2008,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Feather-light pure Pashmina shawl embroidered with single-strand silk needlework so delicate it passes through a wedding ring.',
    story: {
      history: 'Celebrated by Empress Josephine of France who owned over 400 Kashmiri shawls, creating a 19th-century European fashion sensation.',
      culturalSignificance: 'Crafted from the soft winter undercoat shed by high-altitude goats grazing above 14,000 feet in Ladakh.',
      artisanStory: 'Embroidered by Ustad Ghulam Nabi Dar and family, working under natural daylight in their Kanihama home.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Pashmina Spinning & Weaving', description: 'Raw fleece hand-spun on wooden Yender wheels and hand-woven into diamond twill.', timeSpent: '15 days', tools: ['Charkha Yender', 'Handloom'] },
        { stepNumber: 2, title: 'Charcoal Naqash Tracing', description: 'Badam (paisley) and Chinar vine patterns hand-traced using pin-pricked paper stencils.', timeSpent: '3 days', tools: ['Perforated Stencils', 'Willow Charcoal'] },
        { stepNumber: 3, title: 'Micro-Needle Silk Sozni', description: 'Executed with short steel needles piercing only halfway through the wool fibers.', timeSpent: '27 days', tools: ['Sozni Needle #12', 'Silk Resham'] }
      ],
      factualProvenanceNotes: ['GI-046 authentic Kashmir Pashmina.', '100% Pashmina DNA certified.']
    },
    artisanId: 'ghulam-nabi-kani',
    rating: 5.0,
    reviewCount: 35,
    dimensions: '80 x 40 inches',
    weight: '180 grams',
    tags: ['Pashmina', 'Sozni', 'Kashmir', 'GI Tagged', 'Luxury Heritage'],
    inStock: true
  },

  // --- ODISHA ---
  {
    id: 'pipili-applique-canopy',
    varnamId: 'VRN-OR-000442',
    name: 'Pipili Chandua Sacred Appliqué Temple Wall Hanging',
    vernacularName: 'ପିପିଲି ଚାନ୍ଦୁଆ କାମ',
    stateId: 'IN-OR',
    stateName: 'Odisha',
    category: 'Textiles & Weaving',
    price: 3200,
    materials: ['Cotton Fabric Base', 'Colored Cloth Patches', 'Small Mirrors (Gabhru)', 'Cotton Cord Piping'],
    technique: 'Layered needle patchwork with chain stitching and circular mirror embroidery in bright primary hues',
    craftDuration: '6 days',
    originVillage: 'Pipili, Puri District',
    giNumber: 'GI-086',
    giYear: 2008,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Vibrant temple festival wall hanging handcrafted by the hereditary Darji guild of Pipili for the Ratha Yatra chariots.',
    story: {
      history: 'Dating back to the 12th century under King of Puri, Pipili artisans were granted tax-free land to make canopies, banners, and umbrellas for Lord Jagannath.',
      culturalSignificance: 'Uses four sacred temple colors: red (bravery), black (time), white (purity), and yellow (joy).',
      artisanStory: 'Stitched by Master Mahapatra in Pipili main craft market, whose family robes the grand Ratha Yatra chariots.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Motif Cutting', description: 'Elephants, peacocks, and lotuses cut freehand from brilliant red and green cotton.', timeSpent: '2 days', tools: ['Pattern Shears'] },
        { stepNumber: 2, title: 'Edge Hemming & Appliqué', description: 'Patches hand-sewn onto black cotton canvas with tight overcast chain stitches.', timeSpent: '2 days', tools: ['Sewing Needles', 'Cotton Thread'] },
        { stepNumber: 3, title: 'Mirror & Tassel Embellishment', description: 'Tiny glass mirrors anchored with embroidered petal frames and yellow cotton tassels.', timeSpent: '2 days', tools: ['Mirrors', 'Beading Wire'] }
      ],
      factualProvenanceNotes: ['GI-086 certified Pipili Applique.', 'Supplied by hereditary temple guilds.']
    },
    artisanId: 'akshaya-chitrakar',
    rating: 4.8,
    reviewCount: 30,
    dimensions: '36 x 36 inches',
    weight: '420 grams',
    tags: ['Pipili Applique', 'Odisha', 'Chandua', 'GI Tagged', 'Temple Decor'],
    inStock: true
  },

  // --- KARNATAKA ---
  {
    id: 'mysore-crepe-silk-saree',
    varnamId: 'VRN-KA-000443',
    name: 'Mysore Royal Crepe Silk Saree — Pure 0.65% Gold Zari Border',
    vernacularName: 'ಮೈಸೂರು ಕ್ರೇಪ್ ರೇಷ್ಮೆ ಸೀರೆ',
    stateId: 'IN-KA',
    stateName: 'Karnataka',
    category: 'Textiles & Weaving',
    price: 36000,
    originalPrice: 41000,
    materials: ['100% Pure High-Twist Mulberry Silk Yarn', 'Pure Silver-Gilt Zari (0.65% Real 24K Gold, 65% Silver)', 'Eco-Friendly Swiss Dyes'],
    technique: 'High-twist crepe yarn woven on vintage power-drop looms with solid gold zari pallu and contrast selvedge',
    craftDuration: '12 days',
    originVillage: 'Mysore Silk Weaving Cluster',
    giNumber: 'GI-011',
    giYear: 2005,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010e42f9b1c?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'The undisputed queen of South Indian crepe silks, established by the Maharaja of Mysore in 1912 with pure gold zari authenticity stamp.',
    story: {
      history: 'Maharaja Nalvadi Krishnaraja Wadiyar IV imported 32 looms from Switzerland in 1912 to weave the softest, most durable royal silks for the palace women.',
      culturalSignificance: 'Every authentic Mysore Silk saree carries an embossed embroidered serial number and hallmark testing 0.65% pure gold content.',
      artisanStory: 'Woven by Karnataka Silk Industries Corporation (KSIC) master guild weavers maintaining vintage Swiss jacquard mechanisms.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Silk Twisting (Creping)', description: 'Mulberry silk threads twisted up to 2,000 turns per meter to generate the famous pebbly crepe feel.', timeSpent: '3 days', tools: ['High-Speed Twister', 'Steam Conditioning Drum'] },
        { stepNumber: 2, title: 'Pure Zari Warping', description: 'Real silver-gold thread wound on warp beams under climate-controlled tension.', timeSpent: '3 days', tools: ['Warping Drum', 'Tension Gauges'] },
        { stepNumber: 3, title: 'Weaving & Laser Hologram Seal', description: 'Woven on heritage looms, washed in demineralized water, and tagged with indelible serial hologram.', timeSpent: '6 days', tools: ['Vintage Jacquard Looms', 'Laser Hologram Device'] }
      ],
      factualProvenanceNotes: ['GI-011 certified Mysore Silk.', 'Pure Gold (0.65%) & Silver (65%) Zari lab-certified.']
    },
    artisanId: 'syed-channapatna',
    rating: 5.0,
    reviewCount: 48,
    dimensions: '6.25 meters',
    weight: '550 grams',
    tags: ['Mysore Silk', 'Crepe Silk', 'Pure Zari', 'Karnataka', 'GI Tagged', 'Royal'],
    inStock: true,
    featured: true
  },

  // --- KERALA ---
  {
    id: 'balaramapuram-kasavu-saree',
    varnamId: 'VRN-KL-000444',
    name: 'Balaramapuram Pure Handloom Kasavu Saree (Puliyilakkara)',
    vernacularName: 'ബാലരാമപുരം കൈത്തറി കസവു സാരി',
    stateId: 'IN-KL',
    stateName: 'Kerala',
    category: 'Textiles & Weaving',
    price: 9500,
    materials: ['Unbleached 100s-Count Combed Cotton Yarn', 'Pure Silver Kasavu Zari', 'Natural River Rice Starch'],
    technique: 'Traditional pit loom weaving with rib weave and hand-inlaid puliyilakkara (tamarind leaf) gold zari border',
    craftDuration: '14 days',
    originVillage: 'Balaramapuram, Thiruvananthapuram',
    giNumber: 'GI-145',
    giYear: 2010,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Pristine cream unbleached cotton wedding saree bordered in pure silver-gold kasavu, patronized by the Travancore Maharajas.',
    story: {
      history: 'Introduced during the reign of Maharaja Balarama Varma (1798–1810), who invited master weavers from Tamil Nadu to create garments for the royal Travancore court.',
      culturalSignificance: 'The epitome of minimalist Kerala aesthetics worn during Onam and Vishu festivals, celebrating natural unbleached cotton and golden sunlight.',
      artisanStory: 'Woven on subterranean pit looms in Balaramapuram by hereditary Shaligar weaver families.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Cotton Starching & Sizing', description: 'Fine cotton hanks soaked in local cooked rice kanji and sun-stretched to resist breakage.', timeSpent: '3 days', tools: ['Bamboo Stretch Frames', 'Coconut Fiber Brushes'] },
        { stepNumber: 2, title: 'Pit Loom Warping', description: '100s-count yarn threaded into heddles inside cool ground-level loom pits.', timeSpent: '3 days', tools: ['Throw Shuttle Pit Loom'] },
        { stepNumber: 3, title: 'Kasavu Border Insertion', description: 'Pure zari shuttled along edges to form the crisp tamarind-leaf motif.', timeSpent: '8 days', tools: ['Brass Shuttles', 'Reed Beater'] }
      ],
      factualProvenanceNotes: ['GI-145 certified Balaramapuram Handloom.', '100% natural unbleached cotton.']
    },
    artisanId: 'parameswaran-aranmula',
    rating: 4.9,
    reviewCount: 37,
    dimensions: '6.25 meters',
    weight: '430 grams',
    tags: ['Balaramapuram', 'Kasavu', 'Kerala', 'GI Tagged', 'Onam', 'Handloom'],
    inStock: true
  },
  {
    id: 'mannar-bell-metal-uruli',
    varnamId: 'VRN-KL-000445',
    name: 'Mannar Traditional Cast Bell-Metal Cooking Uruli (Varpu)',
    vernacularName: 'മാന്നാർ വെങ്കല ഉരുളി',
    stateId: 'IN-KL',
    stateName: 'Kerala',
    category: 'Metalwork & Bronze',
    price: 12500,
    materials: ['Vengalam (Copper 78%, Tin 22% Bell-Metal Alloy)', 'River Silt Clay', 'Teak Coal'],
    technique: 'Sand casting and hot-hammering of acoustic high-tin bell metal in ground pit furnaces',
    craftDuration: '10 days',
    originVillage: 'Mannar, Alappuzha District',
    giNumber: 'GI-663',
    giYear: 2022,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Heavy resonance bell-metal shallow cauldron used for traditional Ayurvedic preparations, payasam, and temple water flower arrangements.',
    story: {
      history: 'Mannar in central Kerala is known as the Bell Metal Town of India, supplying towering temple lamps and massive cooking cauldrons for over four centuries.',
      culturalSignificance: 'Bell metal conducts and distributes heat with extraordinary uniformity, retaining 97% of nutritional minerals during slow cooking.',
      artisanStory: 'Cast by Master Krishnan Achary in Mannar, who tests alloy readiness by striking the molten pot to hear its bell chime.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Alloy Smelting', description: 'Pure electrolytic copper and Malayan tin melted in graphite crucible at 1,100°C.', timeSpent: '2 days', tools: ['Pit Blast Furnace', 'Long Pouring Ladles'] },
        { stepNumber: 2, title: 'Sand Cast Moulding', description: 'Two-part flask packed with clay-loam river sand to create the concave cooking basin.', timeSpent: '3 days', tools: ['Moulding Flasks', 'Tamping Tools'] },
        { stepNumber: 3, title: 'Lathe Turning & Edge Polishing', description: 'Turned on heavy foot-driven wooden lathes while lubricated with castor oil to achieve golden shine.', timeSpent: '5 days', tools: ['Turning Chisel', 'Rotary Lathe'] }
      ],
      factualProvenanceNotes: ['GI-663 authentic Mannar Bronze.', 'Food-grade certified tin-copper ratio.']
    },
    artisanId: 'parameswaran-aranmula',
    rating: 4.8,
    reviewCount: 26,
    dimensions: '14-inch diameter x 5-inch depth',
    weight: '4.8 kg',
    tags: ['Mannar', 'Uruli', 'Bell Metal', 'Kerala', 'GI Tagged', 'Ayurveda'],
    inStock: true
  },

  // --- ANDHRA PRADESH & TELANGANA ---
  {
    id: 'kondapalli-dasavataram-set',
    varnamId: 'VRN-AP-000446',
    name: 'Kondapalli Tella Poniki Softwood Dasavataram Deity Set',
    vernacularName: 'కొండపల్లి దశావతారాల బొమ్మలు',
    stateId: 'IN-AP',
    stateName: 'Andhra Pradesh & Telangana',
    category: 'Toys & dolls' as any,
    price: 4800,
    originalPrice: 5500,
    materials: ['Tella Poniki Softwood (Givotia rottleriformis)', 'Lappam Tamarind Paste Paste', 'Watercolors', 'Vegetable Enamels'],
    technique: 'Hand chisel shaping of feather-light native softwood, assembled with boiled tamarind seed paste and hand-painted',
    craftDuration: '9 days',
    originVillage: 'Kondapalli, Krishna District',
    giNumber: 'GI-012',
    giYear: 2006,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Complete 10-figure sacred Dasavataram set hand-carved from featherweight Tella Poniki wood by the Arya Kshatriya guild.',
    story: {
      history: 'Dating back 400 years to artisans who migrated from Rajasthan to the Kondapalli fortress under the patronage of the Reddy rulers.',
      culturalSignificance: 'Carved from light sustainable softwood that does not crack over decades, cherished during the Sankranti Bommala Koluvu celebrations.',
      artisanStory: 'Crafted by Master Venkateswara Rao in Kondapalli toy village, using non-toxic natural colors.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Wood Carving', description: 'Tella Poniki logs whittled into arms, crowns, and heads using small curved palm knives.', timeSpent: '3 days', tools: ['Palm Knives', 'Carving Gouges'] },
        { stepNumber: 2, title: 'Lappam Smoothing', description: 'Joints sealed with a paste of boiled tamarind seed powder and sawdust, then burnished.', timeSpent: '3 days', tools: ['Tamarind Seed Lappam', 'Emery Sandpaper'] },
        { stepNumber: 3, title: 'Eye Painting (Netronmeelana)', description: 'Delicate spiritual facial expressions painted with squirrel hair brushes.', timeSpent: '3 days', tools: ['Fine Brushes', 'Mineral Pigments'] }
      ],
      factualProvenanceNotes: ['GI-012 certified Kondapalli Toys.', 'Sourced from sustainable reforestation groves.']
    },
    artisanId: 'lakshmaiah-kalamkari',
    rating: 4.9,
    reviewCount: 33,
    dimensions: 'Set of 10 idols, 6 inches each',
    weight: '820 grams total',
    tags: ['Kondapalli', 'Wooden Toys', 'Andhra Pradesh', 'GI Tagged', 'Dasavataram'],
    inStock: true
  },
  {
    id: 'pochampally-ikat-patola-saree',
    varnamId: 'VRN-TS-000447',
    name: 'Pochampally Ikat Pure Silk Double-Dyed Geometric Saree',
    vernacularName: 'పోచంపల్లి ఇక్కత్ పట్టు చీర',
    stateId: 'IN-AP',
    stateName: 'Andhra Pradesh & Telangana',
    category: 'Textiles & Weaving',
    price: 16500,
    materials: ['Pure Natural Mulberry Silk', 'Azo-Free Reactive Dyes', 'Rubber Binding Ribbons'],
    technique: 'Tie-and-dye Resist Ikat (Pagdu Bandhu) where warp and weft yarns are dyed mathematically before weaving',
    craftDuration: '18 days',
    originVillage: 'Bhoodan Pochampally, Yadadri Bhuvanagiri',
    giNumber: 'GI-004',
    giYear: 2005,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'India’s first registered textile GI product, celebrated for mathematically precise diamond and chevron geometric ikat weaving.',
    story: {
      history: 'Pochampally was the birthplace of Acharya Vinoba Bhave’s historic Bhoodan land-donation movement in 1951, where weavers donated craft profits to landless farmers.',
      culturalSignificance: 'Often called "Poetry of the Loom", Pochampally ikat is celebrated for its modern geometric dynamism that appeals equally to global haute couture.',
      artisanStory: 'Woven by master artisan Mallesh in Pochampally Bhoodan village, calculating dye wraps using graph paper algorithms.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Mathematical Yarn Tying', description: 'Silk threads stretched on triangular frames and tied with rubber strips according to diamond motifs.', timeSpent: '5 days', tools: ['Asu Frame', 'Rubber Tie Strips'] },
        { stepNumber: 2, title: 'Multi-Dip Vat Dyeing', description: 'Dyed in progressive bath of red, black, and turmeric so dye only permeates exposed yarn segments.', timeSpent: '4 days', tools: ['Color Vats', 'Boiling Kettles'] },
        { stepNumber: 3, title: 'Precision Pit Loom Weave', description: 'Loomed with surgical alignment so the blurred feather edges merge into crisp diamond stars.', timeSpent: '9 days', tools: ['Fly-Shuttle Loom', 'Reeds'] }
      ],
      factualProvenanceNotes: ['GI-004 historic first textile GI of India.', 'Silk Mark certified.']
    },
    artisanId: 'lakshmaiah-kalamkari',
    rating: 4.8,
    reviewCount: 42,
    dimensions: '6.25 meters',
    weight: '510 grams',
    tags: ['Pochampally', 'Ikat', 'Telangana', 'GI Tagged', 'Handloom Silk'],
    inStock: true
  },

  // --- ASSAM ---
  {
    id: 'majuli-bamboo-sattriya-mask',
    varnamId: 'VRN-AS-000448',
    name: 'Majuli Island Sacred Bamboo Sattriya Mask — Narasimha Avatar',
    vernacularName: 'মাজুলীৰ মুখা শিল্প',
    stateId: 'IN-AS',
    stateName: 'Assam',
    category: 'Paintings & Art',
    price: 8500,
    originalPrice: 9800,
    materials: ['Endemic Assam Bamboo (Bhaluka Bah)', 'Cane Strips', 'Khadi Cotton', 'Brahmaputra Alluvial Clay', 'Cow Dung', 'Natural Hengul-Haital Pigments'],
    technique: 'Split bamboo armature weaving wrapped in river clay slip and painted with sacred mineral cinnabar',
    craftDuration: '12 days',
    originVillage: 'Samaguri Sattra, Majuli Island',
    giNumber: 'GI-820',
    giYear: 2024,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Life-sized theatrical temple mask with movable jaw mechanism, crafted in the 500-year-old river island monastery tradition.',
    story: {
      history: 'Created in the 15th century by social reformer and saint Srimanta Sankardev to make spiritual dramas (Bhaona) accessible to all villagers regardless of caste.',
      culturalSignificance: 'Lightweight and breathable, allowing monks to perform marathon dance dramas wearing towering multi-headed demon and deity crowns.',
      artisanStory: 'Crafted by Padma Shri Hemchandra Goswami at Samaguri Sattra on Majuli River Island.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Bamboo Skeleton (Dhanche)', description: 'Mature Bhaluka bamboo split into fine strips and woven into a three-dimensional facial lattice.', timeSpent: '3 days', tools: ['Assamese Dao Knife', 'Cane Bindings'] },
        { stepNumber: 2, title: 'Clay-Cloth Skin (Kharimati)', description: 'Pieces of cotton soaked in Brahmaputra silt clay and cow dung wrapped over the frame to form muscles.', timeSpent: '4 days', tools: ['Alluvial Clay Slip', 'Parchment Scraper'] },
        { stepNumber: 3, title: 'Hengul & Haital Mineral Pigments', description: 'Painted with natural vermilion (Hengul) and yellow orpiment (Haital), finished with tree resin glaze.', timeSpent: '5 days', tools: ['Feather Quill Brushes', 'Tree Resin Varnish'] }
      ],
      factualProvenanceNotes: ['GI-820 certified Majuli Mask.', 'Handcrafted by Samaguri Sattra monks.']
    },
    artisanId: 'hemchandra-goswami',
    rating: 5.0,
    reviewCount: 29,
    dimensions: '18 x 14 x 10 inches',
    weight: '850 grams',
    tags: ['Majuli', 'Sattriya Mask', 'Assam', 'GI Tagged', 'Tribal Mask', 'Spiritual Art'],
    inStock: true,
    featured: true
  },
  {
    id: 'asharikandi-hatima-terracotta',
    varnamId: 'VRN-AS-000449',
    name: 'Asharikandi Sacred Hatima Mother-Elephant Terracotta Idol',
    vernacularName: 'আশাৰীকান্দি টেৰাকোটা',
    stateId: 'IN-AS',
    stateName: 'Assam',
    category: 'Pottery & Ceramics',
    price: 2600,
    materials: ['Hiramati Alluvial Clay', 'Riverbed Fine Sand', 'Natural Red Ochre Slip'],
    technique: 'Hiramati clay hollow modeling, sun-baked and slow-fired with bamboo brushwood in circular earthen kilns',
    craftDuration: '8 days',
    originVillage: 'Asharikandi, Dhubri District',
    giNumber: 'GI-665',
    giYear: 2022,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Iconic folk terracotta sculpture of a mother figure bearing elephant ears with an infant on her lap, symbolizing fertility and forest blessings.',
    story: {
      history: 'Asharikandi is the largest cluster of traditional terracotta and pottery in North East India, preserving ancient folk fertility symbols.',
      culturalSignificance: 'The "Hatima Doll" (elephant-mother) is revered during local rituals to ward off misfortune and bless agrarian harvests.',
      artisanStory: 'Turned and hand-pinched by Mahila craft cooperatives in Asharikandi village on the banks of the Gadadhar River.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Hiramati Clay Pugging', description: 'Special sticky riverbed clay kneaded with bare feet to purge air pockets.', timeSpent: '2 days', tools: ['Clay Pug Basin'] },
        { stepNumber: 2, title: 'Hollow Body Modeling', description: 'Central cylindrical torso pinched by hand; elephant ears and infant sculpted and attached with clay slip.', timeSpent: '3 days', tools: ['Bamboo Needles', 'Sponges'] },
        { stepNumber: 3, title: 'Low-Temperature Wood Firing', description: 'Covered with paddy straw and fired at 750°C to achieve a distinctive porous terracotta chime.', timeSpent: '3 days', tools: ['Paddy Husk Kiln'] }
      ],
      factualProvenanceNotes: ['GI-665 certified Asharikandi Craft.', 'Eco-friendly river clay.']
    },
    artisanId: 'hemchandra-goswami',
    rating: 4.7,
    reviewCount: 24,
    dimensions: '12 x 8 x 6 inches',
    weight: '1150 grams',
    tags: ['Asharikandi', 'Terracotta', 'Assam', 'GI Tagged', 'Folk Idol'],
    inStock: true
  },

  // --- UTTAR PRADESH ---
  {
    id: 'lucknowi-chikankari-kurta',
    varnamId: 'VRN-UP-000450',
    name: 'Lucknowi Pure Mukaish & Chikankari Georgette Kurta (32-Stitches)',
    vernacularName: 'लखनऊ चिकनकारी कुरता',
    stateId: 'IN-UP',
    stateName: 'Uttar Pradesh',
    category: 'Textiles & Weaving',
    price: 8800,
    originalPrice: 10500,
    materials: ['Pure Silk Georgette', 'Fine White Cotton Thread', 'Electroplated Silver Mukaish Wire'],
    technique: 'Awadhi shadow-work hand embroidery incorporating Bakhiya, Phanda, Keel Kangan, and fine needlework jali',
    craftDuration: '28 days',
    originVillage: 'Kakori & Chowk, Lucknow',
    giNumber: 'GI-119',
    giYear: 2008,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Masterpiece Awadhi kurta embroidered with 32 heritage shadow stitches and sprinkled with hand-flattened silver Mukaish dots.',
    story: {
      history: 'Refined in the 18th-century royal court of Nawab Asaf-ud-Daula, inspired by Empress Noor Jahan’s admiration for delicate white-on-white Turkish lace.',
      culturalSignificance: 'A testament to feminine patience; Chikankari is practiced primarily by over 250,000 women artisans in home ateliers across rural Awadh.',
      artisanStory: 'Embroidered by Begum Naseem and her collective in Chowk, Lucknow, famous for their micro-pore jali mesh work.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Chhapa (Block Printing)', description: 'Design stamped on gossamer georgette using washable indigo and safranine dye.', timeSpent: '2 days', tools: ['Hand-Carved Wooden Chhapa Blocks'] },
        { stepNumber: 2, title: 'Tanka Embroidering (Bakhiya & Phanda)', description: 'Inverted satin stitches worked on the reverse side to create opaque shadow motifs on the front.', timeSpent: '22 days', tools: ['Steel Needle #10', 'Cotton Resham'] },
        { stepNumber: 3, title: 'Mukaish Inlay & Bhatti Wash', description: 'Silver metal threads pulled through cloth with tongs and flattened into glistening stars; washed in clear river water.', timeSpent: '4 days', tools: ['Mukaish Tongs', 'Washing Ghat'] }
      ],
      factualProvenanceNotes: ['GI-119 authentic Lucknow Chikankari.', 'Crafted by certified Awadh women artisans.']
    },
    artisanId: 'haji-munna-ansari',
    rating: 4.9,
    reviewCount: 57,
    dimensions: 'Size 40 (Chest 42, Length 44 inches)',
    weight: '240 grams',
    tags: ['Chikankari', 'Lucknow', 'Awadh', 'GI Tagged', 'Mukaish', 'Couture'],
    inStock: true
  },
  {
    id: 'moradabad-engraved-brass-vase',
    varnamId: 'VRN-UP-000451',
    name: 'Moradabad Naqqashi Hand-Engraved Imperial Brass Amphora',
    vernacularName: 'मुरादाबाद पीतल नक्काशी',
    stateId: 'IN-UP',
    stateName: 'Uttar Pradesh',
    category: 'Metalwork & Bronze',
    price: 6400,
    materials: ['Pure Brass (Copper 65%, Zinc 35%)', 'Black Lacquer Filler (Kala Kar)'],
    technique: 'Sand cast hollow brass turning, hand-chiseling intricate Mughal Arabesque vines (Marori work), inlaid with black lacquer',
    craftDuration: '11 days',
    originVillage: 'Peetal Nagri (Brass City), Moradabad',
    giNumber: 'GI-238',
    giYear: 2014,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Striking 18-inch spun brass urn with deep black-lacquer floral engraving produced in India’s historic "Brass City".',
    story: {
      history: 'Moradabad was established in 1600 by Prince Murad Baksh and rose to global prominence for supplying hand-engraved metal vessels across Central Asia and the British Empire.',
      culturalSignificance: 'Known as "Marori Work", this engraving demands absolute chisel control; a single slipped strike ruins the entire vessel.',
      artisanStory: 'Turned and engraved by Master Mohammad Rashid in Peetal Nagri, using steel burins handed down through four generations.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Sand Casting & Spinning', description: 'Molten brass poured into sand molds and spun on high-torque lathes to achieve sleek symmetry.', timeSpent: '3 days', tools: ['Smelting Crucible', 'Spinning Lathe'] },
        { stepNumber: 2, title: 'Freehand Naqqashi Chiseling', description: 'Floral Arabesque lattices cut into the metal surface using sharp V-shaped chisels and lightweight mallets.', timeSpent: '5 days', tools: ['Steel Naqqashi Burins', 'Wood Mallet'] },
        { stepNumber: 3, title: 'Lacquer Inlay & Buffing', description: 'Hot colored natural lac melted into engraved channels, then buffed with emery to reveal glistening golden brass contours.', timeSpent: '3 days', tools: ['Heating Torch', 'Cotton Buffing Wheel'] }
      ],
      factualProvenanceNotes: ['GI-238 authentic Moradabad Metal Craft.', 'Solid brass; non-tarnish protective coating.']
    },
    artisanId: 'haji-munna-ansari',
    rating: 4.8,
    reviewCount: 31,
    dimensions: '18 inches height x 7 inches diameter',
    weight: '2.4 kg',
    tags: ['Moradabad', 'Brass', 'Naqqashi', 'GI Tagged', 'Home Decor', 'Uttar Pradesh'],
    inStock: true
  },

  // --- MAHARASHTRA ---
  {
    id: 'paithani-peacock-pallu-saree',
    varnamId: 'VRN-MH-000452',
    name: 'Yeola Paithani Pure Silk Saree — Bangadi Mor Solid Gold Pallu',
    vernacularName: 'पैठणी रेशमी साडी',
    stateId: 'IN-MH',
    stateName: 'Maharashtra',
    category: 'Textiles & Weaving',
    price: 44000,
    originalPrice: 49000,
    materials: ['Pure Bangalore Mulberry Silk', 'Pure Silver-Gilt Zari', 'Natural Plant Dyes'],
    technique: 'Ancient oblique interlocking tapestry weave (Charkha) where each color is shuttled on individual wooden spools',
    craftDuration: '35 days',
    originVillage: 'Yeola Handloom Cluster, Nashik',
    giNumber: 'GI-085',
    giYear: 2008,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Regal Maharashtrian gold tapestry bridal saree featuring the iconic Bangadi Mor (peacock in bangle) motif and kaleidoscopic shot colors.',
    story: {
      history: 'Patronized by the Satavahana dynasty in 200 BCE in Paithan on the banks of the Godavari and later by the Peshwa rulers who revitalized weaving in Yeola.',
      culturalSignificance: 'Revered as the "Queen of Silks" in Maharashtra, an authentic Paithani has no loose thread floats on the reverse side.',
      artisanStory: 'Woven by Master Uttam Rao Bhosale in Yeola, who spends up to two months on the solid gold peacock pallu alone.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Silk Degumming & Dhoop-Chhaon Dyeing', description: 'Yarn dyed in contrasting warp and weft shades to create dynamic shot-silk shimmer.', timeSpent: '4 days', tools: ['Copper Boiling Kettles', 'Spindles'] },
        { stepNumber: 2, title: 'Pit Loom Asu Warping', description: 'Thousands of silk ends warped on heavy wooden frame looms with bamboo reeds.', timeSpent: '3 days', tools: ['Asu Framework', 'Bamboo Reeds'] },
        { stepNumber: 3, title: 'Tapestry Weft Interlocking', description: 'Peacock motifs woven with 40 individual wooden tilli spools, interlocking colors by hand at every weft pass.', timeSpent: '28 days', tools: ['Wooden Tilli Spools', 'Hand Beater'] }
      ],
      factualProvenanceNotes: ['GI-085 authentic Paithani Saree.', 'Pure silk mark and real zari certified.']
    },
    artisanId: 'uttam-bhosale',
    rating: 5.0,
    reviewCount: 41,
    dimensions: '6.25 meters',
    weight: '820 grams',
    tags: ['Paithani', 'Maharashtra', 'Pure Silk', 'GI Tagged', 'Bridal Heritage', 'Peacock'],
    inStock: true,
    featured: true
  },
  {
    id: 'warli-rice-paste-tarpa-painting',
    varnamId: 'VRN-MH-000453',
    name: 'Warli Indigenous Tribal Canvas — The Great Tarpa Harvest Dance',
    vernacularName: 'वारली आदिवासी चित्रकला',
    stateId: 'IN-MH',
    stateName: 'Maharashtra',
    category: 'Paintings & Art',
    price: 9200,
    materials: ['Mud-Plastered Cotton Canvas', 'Ground Rice Flour Paste', 'Water & Natural Gum (Acacia)', 'Bamboo Chew-Stick Brush'],
    technique: 'Sacred tribal iconography using basic geometric shapes (circle, triangle, line) painted with chew-stick bamboo stylus on red mud ground',
    craftDuration: '10 days',
    originVillage: 'Dahanu, Palghar District',
    giNumber: 'GI-384',
    giYear: 2014,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Hypnotic concentric harvest dance mural painted in white rice flour on red earth canvas by indigenous Warli forest tribes.',
    story: {
      history: 'Dating back to Neolithic rock shelters (2500–3000 BCE), Warli painting is one of the oldest uninterrupted living folk expressions on the Indian subcontinent.',
      culturalSignificance: 'Circles represent the sun and moon; triangles denote mountains and pointed trees; two inverted triangles joined at vertex symbolize human balance.',
      artisanStory: 'Painted by Balu Jivya Mashe, grandson of Padma Shri Jivya Soma Mashe who introduced Warli art to the global stage.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Geru Earth Grounding', description: 'Cotton canvas primed with cow dung and red terracotta earth (Geru) for authentic texture.', timeSpent: '2 days', tools: ['Geru Pigment', 'Palm Sponge'] },
        { stepNumber: 2, title: 'Rice Flour Preparation', description: 'Raw white rice soaked in river water, ground into fine paste on stone grinding mortar and mixed with tree gum.', timeSpent: '2 days', tools: ['Stone Mortar (Sil-Batta)'] },
        { stepNumber: 3, title: 'Tarpa Spiral Inscription', description: 'Concentric spiral of 200 interlocking tribal dancers painted outward from the central Tarpa musician using chewed bamboo stylus.', timeSpent: '6 days', tools: ['Chewed Bamboo Stylus'] }
      ],
      factualProvenanceNotes: ['GI-384 authentic Warli Painting.', '100% natural earth pigments; direct from Palghar tribal artists.']
    },
    artisanId: 'uttam-bhosale',
    rating: 4.9,
    reviewCount: 38,
    dimensions: '30 x 30 inches',
    weight: '380 grams',
    tags: ['Warli', 'Tribal Art', 'Maharashtra', 'GI Tagged', 'Tarpa Dance', 'Folk Art'],
    inStock: true
  },
  {
    id: 'kolhapuri-tanned-chappal',
    varnamId: 'VRN-MH-000454',
    name: 'Kolhapuri Pure Hand-Braided Vegetable-Tanned Leather Chappal (Kurundwadi)',
    vernacularName: 'कोल्हापूरी चप्पल',
    stateId: 'IN-MH',
    stateName: 'Maharashtra',
    category: 'Footwear' as any,
    price: 3200,
    originalPrice: 3800,
    materials: ['Naturally Shed Vegetable-Tanned Buffalo Hide', 'Babul (Acacia) Bark Extract', 'Myrobalan', 'Castor Oil Conditioner', 'Leather Thongs (No Nails/Thread)'],
    technique: '100% zero-metal zero-synthetic thread construction; sole and braided straps stitched solely with leather thongs and conditioned with mustard oil',
    craftDuration: '8 days',
    originVillage: 'Subhashnagar & Kurundwad, Kolhapur',
    giNumber: 'GI-125',
    giYear: 2019,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Acoustic orthopedic handcrafted leather footwear patronized by Chhatrapati Shahu Maharaj, assembled without nails or synthetic glue.',
    story: {
      history: 'Patronized by the progressive Maharaja Chhatrapati Shahu Maharaj in the early 20th century, who encouraged artisan collectives in Kurundwad to standardize ergonomic hand-stitched leather sandals.',
      culturalSignificance: 'Renowned for their distinctive crunch sound while walking (Kan-Kan sound) and therapeutic heat-drawing properties when seasoned with castor oil.',
      artisanStory: 'Hand-punched and braided by master cobbler Satish Gaikwad in Kolhapur, using inherited brass punches.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Babul Bark Tanning', description: 'Leather tanned for 45 days in pits using natural extracts of babul tree bark and harda fruit.', timeSpent: '3 days prep', tools: ['Tanning Pits', 'Stretching Stakes'] },
        { stepNumber: 2, title: 'Sole Punching & Thong Lacing', description: 'Dual-layer leather sole hand-cut, perforated with iron punches, and stitched using rolled buffalo leather cords.', timeSpent: '3 days', tools: ['Iron Awl (Aari)', 'Hammer'] },
        { stepNumber: 3, title: 'Braid Weaving & Castor Conditioning', description: 'Intricate upper thongs hand-braided and rubbed with castor oil to achieve rich golden-amber suppleness.', timeSpent: '2 days', tools: ['Bone Creaser', 'Castor Oil Polish'] }
      ],
      factualProvenanceNotes: ['GI-125 certified Kolhapuri Chappal.', 'Zero metal nails; completely biodegradable leather.']
    },
    artisanId: 'uttam-bhosale',
    rating: 4.8,
    reviewCount: 55,
    dimensions: 'UK/India Men Size 7, 8, 9, 10 available',
    weight: '490 grams pair',
    tags: ['Kolhapuri', 'Leather', 'Maharashtra', 'GI Tagged', 'Handmade Footwear'],
    inStock: true
  }
];
