import { Craft } from '../types';
import { ADDITIONAL_CRAFTS } from './moreCrafts';
import { ALL_STATE_CRAFTS } from './allStateCrafts';

const BASE_CRAFTS: Craft[] = [
  // --- TAMIL NADU ---
  {
    id: 'bamboo-cane-craft',
    varnamId: 'VRN-TN-000435',
    name: 'Bamboo & Cane Crafts of Tamil Nadu',
    vernacularName: 'தமிழ்நாடு மூங்கில் மற்றும் பிரம்பு கைவினை',
    stateId: 'IN-TN',
    stateName: 'Tamil Nadu',
    category: 'Natural Fiber & Grass',
    price: 1850,
    originalPrice: 2200,
    materials: ['Natural Split Bamboo (Bambusa vulgaris)', 'Wild Forest Cane', 'Vegetable Shellac Polish', 'Brass Pins'],
    technique: 'Traditional Hand-Splitting, Weft-Warp Twining, and Steam-Bending over open charcoal braziers',
    craftDuration: '5 days',
    originVillage: 'Pollachi & Nilgiri Foothills, Tamil Nadu',
    giNumber: 'GI-AUTHENTIC',
    giYear: 2021,
    isGiVerified: true,
    images: [
      '/assets/states/tamil-nadu/bamboo-cane.png',
      'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Eco-friendly handwoven bamboo and cane vessel collection handcrafted by tribal & rural artisan clusters of the Western Ghats foothills.',
    story: {
      history: 'Practiced for centuries across Tamil Nadu’s river valleys and rainforest fringes, split-bamboo and cane craft served as royal storage containers, winnowing trays, and grain storage. The hereditary weavers of the Anaimalai foothills harvest mature bamboo during the waning moon when starch levels are lowest to naturally deter pests.',
      culturalSignificance: 'Bamboo embodies resilience and natural prosperity across Tamil festivals, where cane baskets and woven vessels are essential for Pongal harvest rituals and temple offerings.',
      artisanStory: 'Crafted by master weaver Meena Ammal in Pollachi, who splits single bamboo culms into razor-thin flexible strips using a traditional curved billhook knife before hand-weaving intricate lattice patterns.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Bamboo Seasoning & Splitting', description: 'Sun-dried culms are split longitudinally into calibrated strips using a Kathi knife.', timeSpent: '1 day', tools: ['Curved Kathi Knife', 'Measuring Gauge'] },
        { stepNumber: 2, title: 'Planing & Sizing', description: 'Strips are drawn through sizing blades to achieve uniform millimeter thickness.', timeSpent: '1 day', tools: ['Draw-Knife', 'Wooden Anvil'] },
        { stepNumber: 3, title: 'Hand-Twining & Form Shaping', description: 'Woven around traditional wooden formers with interlocking basketry weave.', timeSpent: '2 days', tools: ['Bone Awl', 'Pinch Pliers'] },
        { stepNumber: 4, title: 'Steam-Bending & Finishing', description: 'Cane rims are heat-bent over charcoal steam and bound with natural rattan fiber.', timeSpent: '1 day', tools: ['Steam Brazier', 'Vegetable Polish'] }
      ],
      factualProvenanceNotes: ['100% biodegradable native bamboo.', 'Sourced from verified agro-forestry in Pollachi.']
    },
    artisanId: 'meenakshi-ammal',
    rating: 4.9,
    reviewCount: 38,
    dimensions: '30cm x 22cm x 15cm',
    weight: '0.6 kg',
    tags: ['Bamboo', 'Cane', 'Tamil Nadu', 'Eco-Friendly', 'Handwoven', 'Living Heritage'],
    inStock: true,
    featured: true
  },
  {
    id: 'swamimalai-bronze-nataraja',
    varnamId: 'VRN-TN-000428',
    name: 'Swamimalai Bronze Nataraja (Lost-Wax Casting)',
    vernacularName: 'சுவாமிமலை வெண்கல நடராஜர்',
    stateId: 'IN-TN',
    stateName: 'Tamil Nadu',
    category: 'Metalwork & Bronze',
    price: 38500,
    originalPrice: 42000,
    materials: ['Panchaloha (Copper 80%, Zinc 15%, Tin 4%, Lead/Gold/Silver 1%)', 'Kaveri River Clay', 'Beeswax', 'Dammar Resin'],
    technique: 'Madhuchishtavidhana (Ancient Chola Cire-Perdue / Lost-Wax Casting according to Shilpa Shastras)',
    craftDuration: '45 days',
    originVillage: 'Swamimalai, Thanjavur District',
    giNumber: 'GI-023',
    giYear: 2008,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Consecrated 16-inch Nataraja icon cast in solid Panchaloha bronze by 4th-generation Chola royal guild sculptors.',
    story: {
      history: 'Dating back to the 9th-century CE Chola golden era under Emperor Rajaraja I, Swamimalai icons were cast to populate the monumental corridors of the Brihadeeswara Temple. The master sculptors (Sthapathis) claim direct lineage from Vishwakarma, the divine architect of the universe.',
      culturalSignificance: 'The Cosmic Dance of Shiva embodies the five divine acts (Panchakritya): creation (Damaru drum), protection (Abhaya mudra), destruction (Agni flame), solace (raised foot), and liberation (trampled Apasmara dwarf of ignorance).',
      artisanStory: 'Cast by Master Sthapathi Rajendran, who spent three months preparing the beeswax model by hand without moulds, melting the sacred metal in an open coal furnace fueled by tamarind charcoal.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Wax Modeling (Mezhugu Seidhal)',
          description: 'Pure forest beeswax mixed with Kungilium resin is heated and hand-sculpted strictly using finger measurement ratios (Talamana) described in the Agamas.',
          timeSpent: '12 days',
          tools: ['Bamboo Spatula', 'Brass Heated Stylus', 'Measuring Thread']
        },
        {
          stepNumber: 2,
          title: 'Clay Moulding (Karuvu)',
          description: 'Three distinct coats of clay from Kaveri riverbed: finest river silt (Vandal man), followed by coarse sand clay, bound with iron wire.',
          timeSpent: '14 days',
          tools: ['Kaveri Silt Paste', 'Jute Fiber', 'Iron Binding Wire']
        },
        {
          stepNumber: 3,
          title: 'Lost-Wax Burnout & Molten Pouring',
          description: 'The mould is baked in a ground kiln so the wax drains away completely. Panchaloha alloy is heated to 1,150°C and poured in a continuous single stream.',
          timeSpent: '3 days',
          tools: ['Graphite Crucible', 'Charcoal Pit Furnace', 'Long Tongs']
        },
        {
          stepNumber: 4,
          title: 'Chiseling & Facial Inscription (Kan-Thirappu)',
          description: 'Once cool, the outer terracotta shell is shattered. The raw bronze is chased, filed, and detailed with steel chisels. The sacred ritual opening of the eyes is performed last.',
          timeSpent: '16 days',
          tools: ['Tempered Steel Chisels', 'Fine Emery Files', 'Tamarind Wash']
        }
      ],
      factualProvenanceNotes: [
        'Raw copper and tin certified non-recycled metallurgical grade.',
        'Kaveri alluvial silt extracted under local sustainable harvesting permits.',
        'Recorded in the Swamimalai Sthapathi Guild Registry #428.'
      ]
    },
    artisanId: 'rajendran-sthapathi',
    rating: 5.0,
    reviewCount: 38,
    dimensions: '16" H x 13" W x 5" D',
    weight: '8.4 kg',
    tags: ['Chola Bronze', 'Nataraja', 'Panchaloha', 'Swamimalai', 'Lost-Wax', 'GI Tagged'],
    inStock: true,
    featured: true
  },
  {
    id: 'tanjore-painting-krishna',
    varnamId: 'VRN-TN-000429',
    name: 'Thanjavur Gold Foil Painting — Yashoda Krishna',
    vernacularName: 'தஞ்சாவூர் தங்க முலாம் ஓவியம்',
    stateId: 'IN-TN',
    stateName: 'Tamil Nadu',
    category: 'Paintings & Art',
    price: 24500,
    originalPrice: 27500,
    materials: ['22K Pure Gold Foil (Vark)', 'Teak Wood Plank', 'Unbleached Cotton Cloth', 'Sukkan Limestone Chalk', 'Semi-precious Jaipur Gems', 'Natural Gum'],
    technique: 'Marabu Thanjavur Oviyam with high-relief gesso work and 22-carat gold foil cladding',
    craftDuration: '28 days',
    originVillage: 'Thanjavur Old Town Cluster',
    giNumber: 'GI-022',
    giYear: 2007,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Masterpiece 20x16 inch Thanjavur devotional painting adorned with genuine 22-carat gold leaf and faceted gems.',
    story: {
      history: 'Originated in the 16th century under the patronage of Nayaka and Maratha rulers of Thanjavur (particularly King Serfoji II), combining Vijayanagara classicism with Deccan miniature richness.',
      culturalSignificance: 'Tanjore paintings are revered as living domestic shrines. The luminous gold surface glows in dim lamp oil light, serving as a portal for meditation on the deity.',
      artisanStory: 'Painted by Meenakshi Ammal, who was apprenticed by her father in Thanjavur at age 14 and has dedicated 34 years to preserving unadulterated gold leaf cladding.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Canvas Preparation (Palagai Padam)',
          description: 'Solid seasoned teak wood plank is wrapped in unbleached cotton cloth using tamarind seed paste glue and dried flat.',
          timeSpent: '4 days',
          tools: ['Teak Plank', 'Fine Muslin', 'Tamarind Seed Adhesive']
        },
        {
          stepNumber: 2,
          title: 'Gesso Relief Work (Makku)',
          description: 'Finely pulverized limestone chalk (sukkan) boiled with natural gum is piped to create three-dimensional embossed jewelry, pillars, and halos.',
          timeSpent: '8 days',
          tools: ['Limestone Paste', 'Piping Cones', 'Sculpting Needles']
        },
        {
          stepNumber: 3,
          title: 'Gold Foil Inlaying',
          description: 'Sheets of 22-carat pure gold leaf are trimmed and adhered over the raised relief curves, followed by setting of faceted cabochon stones.',
          timeSpent: '6 days',
          tools: ['Agate Burnisher', 'Gold Leaf Sheets', 'Natural Lacquer']
        },
        {
          stepNumber: 4,
          title: 'Iconic Character Detailing',
          description: 'Deity faces and bodies are painted with luminous mineral watercolors, finishing with large almond-shaped eyes (Meenatchi eyes).',
          timeSpent: '10 days',
          tools: ['Squirrel Hair Brushes', 'Mineral Pigments', 'Teak Frame']
        }
      ],
      factualProvenanceNotes: [
        'Gold foil verified 22-karat non-tarnish leaf certified by Chennai Assay laboratory.',
        'Seasoned Burma teak backing board, naturally pest-resistant.'
      ]
    },
    artisanId: 'meenakshi-ammal',
    rating: 4.9,
    reviewCount: 27,
    dimensions: '20" H x 16" W x 2.5" D',
    weight: '4.2 kg',
    tags: ['Tanjore Painting', 'Gold Foil', 'Thanjavur', 'Krishna', 'GI Tagged'],
    inStock: true,
    featured: true
  },
  {
    id: 'kanchipuram-silk-sari',
    varnamId: 'VRN-TN-000430',
    name: 'Kanchipuram Pure Mulberry Silk Sari (Korvai Weave)',
    vernacularName: 'காஞ்சிபுரம் பட்டுப் புடவை',
    stateId: 'IN-TN',
    stateName: 'Tamil Nadu',
    category: 'Textiles & Weaving',
    price: 46000,
    originalPrice: 51000,
    materials: ['100% Pure Mulberry Silk Yarn', 'Pure Silver & Gold Thread (0.6% Gold, 57% Silver Zari)', 'Natural Dye Extracts'],
    technique: 'Three-shuttle Korvai interlocking pit loom weaving with Petni contrast pallu attachment',
    craftDuration: '22 days',
    originVillage: 'Pillaiyarpalayam, Kanchipuram',
    giNumber: 'GI-002',
    giYear: 2005,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Bridal crimson and antique temple gold zari sari with Mayil (peacock) and Rudraksha borders woven on traditional pit looms.',
    story: {
      history: 'According to legend, the Kanchi silk weavers are the descendants of Sage Markanda, the master weaver of the gods. Historically patronized by the Pallava and Chola crowns.',
      culturalSignificance: 'The hallmark of authentic Kanchipuram silk is its weight and the Korvai technique, where two weavers operate shuttles simultaneously on either side of the loom to interlock contrasting borders so tightly they never fray.',
      artisanStory: 'Woven by Vadivelu and his apprentice son on their pit loom in Pillaiyarpalayam. It takes three threads twisted together to form the sturdy warp and weft.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Silk Twisting & Natural Dyeing',
          description: 'High-denier mulberry silk is hand-twisted with starch and dyed in boiling copper vats with natural madder root and turmeric.',
          timeSpent: '5 days',
          tools: ['Copper Dye Vats', 'Warping Wheels', 'Charkha']
        },
        {
          stepNumber: 2,
          title: 'Korvai Interlock Weaving',
          description: 'Two weavers sit together; one throws the body shuttle while the second interlocks the border shuttle at the selvedge.',
          timeSpent: '15 days',
          tools: ['Traditional Wooden Pit Loom', 'Three Shuttles', 'Bamboo Reeds']
        },
        {
          stepNumber: 3,
          title: 'Petni Pallu Attachment',
          description: 'The body threads are individually twisted and knotted to the contrast color pallu threads without cutting.',
          timeSpent: '2 days',
          tools: ['Needle Twisting Knife', 'Comb']
        }
      ],
      factualProvenanceNotes: [
        'Silk Mark certified 100% pure silk.',
        'Zari tested for genuine silver core with 24K gold flash gilding.',
        'Kanchipuram Silk Weavers Co-operative certified.'
      ]
    },
    artisanId: 'vadivelu-weaver',
    rating: 5.0,
    reviewCount: 42,
    dimensions: '6.2 meters (including blouse)',
    weight: '820 grams',
    tags: ['Kanchipuram Silk', 'Korvai', 'Zari', 'Pure Silk', 'GI Tagged'],
    inStock: true,
    featured: true
  },
  {
    id: 'pattamadai-fine-mat',
    varnamId: 'VRN-TN-000431',
    name: 'Pattamadai Superfine Korai Grass Wedding Mat',
    vernacularName: 'பத்தமடை பாய்',
    stateId: 'IN-TN',
    stateName: 'Tamil Nadu',
    category: 'Natural Fiber & Grass',
    price: 6800,
    materials: ['River Korai Grass (Cyperus corymbosus)', 'Pure Cotton/Silk Warp Threads', 'Natural Vegetable Dyes'],
    technique: '120-140 count fine split-reed handloom weaving (silk-like pliability)',
    craftDuration: '18 days',
    originVillage: 'Pattamadai, Tirunelveli District',
    giNumber: 'GI-047',
    giYear: 2013,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Superfine silk-soft Pattamadai floor mat woven from Thamirabarani river grass, rollable into a tight cylinder.',
    story: {
      history: 'Pattamadai mats were woven as diplomatic gifts by Lebbai Muslim master weavers for Queen Elizabeth II’s coronation in 1953, earning global renown for grass as fine as raw silk.',
      culturalSignificance: 'Traditionally inscribed with wedding couple initials, these cooling mats retain room temperature and have natural orthopedic benefits.',
      artisanStory: 'Crafted by the Pattamadai Mat Weavers Society, who harvest grass only during the brief seasonal floods of the perennial Thamirabarani river.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'River Grass Harvesting & Soaking',
          description: 'Korai grass stalks are harvested, slit into micro-strands with razor blades, and soaked in river water for days to soften.',
          timeSpent: '6 days',
          tools: ['Special Curved Slitting Knife', 'River Soaking Pits']
        },
        {
          stepNumber: 2,
          title: 'High-Count Handloom Weaving',
          description: 'The damp reeds are woven over fine silk/cotton warp threads at up to 140 threads per inch count.',
          timeSpent: '12 days',
          tools: ['Pattamadai Reed Frame Loom', 'Bone Shuttle']
        }
      ],
      factualProvenanceNotes: ['Harvested along Thamirabarani River basin.', 'GI Registry #47 verified.']
    },
    artisanId: 'vadivelu-weaver',
    rating: 4.8,
    reviewCount: 19,
    dimensions: '6 ft x 4 ft',
    weight: '1.2 kg',
    tags: ['Pattamadai', 'Korai Grass', 'Eco-friendly', 'GI Tagged'],
    inStock: true
  },

  // --- RAJASTHAN ---
  {
    id: 'jaipur-blue-pottery-vase',
    varnamId: 'VRN-RJ-000102',
    name: 'Jaipur Blue Pottery Persian Floral Amphora Vase',
    vernacularName: 'जयपुर ब्लू पॉटरी गुलदस्ता',
    stateId: 'IN-RJ',
    stateName: 'Rajasthan',
    category: 'Pottery & Ceramics',
    price: 7200,
    originalPrice: 8500,
    materials: ['Quartz Powder', 'Powdered Glass (Cullet)', 'Fuller\'s Earth (Multani Mitti)', 'Natural Katira Gum', 'Cobalt Oxide (Blue)', 'Copper Oxide (Turquoise)'],
    technique: 'Non-clay Egyptian paste / quartz pottery fired in single-bake low-temperature wood kiln',
    craftDuration: '14 days',
    originVillage: 'Kot Jewar & Jaipur Craft Hub',
    giNumber: 'GI-028',
    giYear: 2008,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: '12-inch hand-painted quartz pottery vase featuring cobalt blue and turquoise arabesque motifs.',
    story: {
      history: 'Introduced by Maharaja Sawai Ram Singh II in the mid-19th century following a legendary kite-flying contest where potters downed the king’s kites using glass-laced strings.',
      culturalSignificance: 'Unlike normal ceramic pottery, Jaipur blue pottery never uses any clay. It does not crack under heat and stays impervious to water, carrying Persian turquoise blue elegance.',
      artisanStory: 'Crafted in the lineage of Padma Shri Kripal Singh Shekhawat by master potter Kripal Kumbhakar, who prepares the quartz dough by hand.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Dough Formulation (Non-Clay)',
          description: 'Ground quartz stone, glass powder, Sajji (soda bicarbonate), Katira gum, and Multani mitti are kneaded with water into smooth dough.',
          timeSpent: '3 days',
          tools: ['Stone Grinder', 'Wooden Kneading Trough']
        },
        {
          stepNumber: 2,
          title: 'Open Moulding & Smoothing',
          description: 'Dough is rolled into flat cakes and pressed inside open terracotta moulds filled with burnt wood ash to prevent sticking.',
          timeSpent: '3 days',
          tools: ['Plaster Moulds', 'Ash Sieve', 'Smoothing Stone']
        },
        {
          stepNumber: 3,
          title: 'Freehand Cobalt Painting',
          description: 'Artisans paint traditional floral arabesques directly using natural hair brushes dipped in cobalt and copper oxide mineral liquids.',
          timeSpent: '5 days',
          tools: ['Squirrel Tail Hair Brushes', 'Mineral Oxides']
        },
        {
          stepNumber: 4,
          title: 'Glazing & Kiln Firing',
          description: 'Coated with glass-borax glaze and baked for 8 hours in an updraft wood kiln at 800°C. Fired only once.',
          timeSpent: '3 days',
          tools: ['Wood-Fired Muffle Kiln', 'Glaze Dip Vat']
        }
      ],
      factualProvenanceNotes: [
        'Pure quartz from Rajasthan Aravalli quarries.',
        'Lead-free, non-toxic food-safe glaze certification.'
      ]
    },
    artisanId: 'kripal-kumbhakar',
    rating: 4.9,
    reviewCount: 31,
    dimensions: '12" H x 6.5" Dia',
    weight: '1.8 kg',
    tags: ['Blue Pottery', 'Jaipur', 'Quartz Ceramic', 'Cobalt', 'GI Tagged'],
    inStock: true,
    featured: true
  },
  {
    id: 'bagru-dabu-block-textile',
    varnamId: 'VRN-RJ-000103',
    name: 'Bagru Dabu Mud-Resist Indigo Running Fabric',
    vernacularName: 'बगरू दाबू हस्त ब्लॉक छपाई',
    stateId: 'IN-RJ',
    stateName: 'Rajasthan',
    category: 'Textiles & Weaving',
    price: 3400,
    materials: ['Organic Cotton Cloth', 'Dabu Mud Paste (Clay, Gum, Lime)', 'Natural Fermented Indigo', 'Harda (Myrobalan) Mordant'],
    technique: 'Hand block printing using hand-carved Sheesham wood blocks with clay mud-resist immersion dyeing',
    craftDuration: '10 days',
    originVillage: 'Bagru Village, Jaipur',
    giNumber: 'GI-089',
    giYear: 2011,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Deep indigo hand-block printed cotton length patterned with ancient mud-resist floral butas.',
    story: {
      history: 'For over 350 years, the Chhipa community of Bagru has practiced the Dabu mud resist printing method along the banks of the Sanjaria river.',
      culturalSignificance: 'The cracks in the dried mud allow faint veins of indigo dye to seep into the cloth, producing an organic marble texture that machine printing cannot replicate.',
      artisanStory: 'Master printer Ramesh Chhipa dips hand-carved wooden blocks into viscous river mud paste and stamps the fabric with metronomic precision.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Harda Pre-treatment',
          description: 'Raw cotton is soaked in Myrobalan (Harda) extract to impart a warm yellow base and prepare fibers to bind dyes.',
          timeSpent: '2 days',
          tools: ['Harda Soaking Pits', 'Sun Drying Fields']
        },
        {
          stepNumber: 2,
          title: 'Dabu Mud Stamping',
          description: 'Wooden blocks are dipped into mud paste made of black clay, Bidhan gum, and slaked lime, stamped firmly onto the fabric.',
          timeSpent: '3 days',
          tools: ['Hand-Carved Teakwood Blocks', 'Padded Printing Tables']
        },
        {
          stepNumber: 3,
          title: 'Indigo Pit Immersion & River Washing',
          description: 'Immersed into deep underground fermented indigo vats up to 4 times, then washed vigorously in flowing water to dissolve the mud.',
          timeSpent: '5 days',
          tools: ['10-foot Deep Indigo Vats', 'Washing Slabs']
        }
      ],
      factualProvenanceNotes: ['100% natural vegetable dyes (indigo, harda, pomegranate rind).', 'GI Tag Registered Bagru Chhipa Guild.']
    },
    artisanId: 'ramesh-chhipa',
    rating: 4.8,
    reviewCount: 22,
    dimensions: '2.5 meters x 44 inches',
    weight: '340 grams',
    tags: ['Bagru', 'Dabu', 'Indigo', 'Hand Block', 'GI Tagged'],
    inStock: true
  },
  {
    id: 'thewa-gold-pendant',
    varnamId: 'VRN-RJ-000104',
    name: 'Pratapgarh Thewa 23K Pure Gold on Belgian Glass Pendant',
    vernacularName: 'प्रतापगढ़ थेवा कला लॉकेट',
    stateId: 'IN-RJ',
    stateName: 'Rajasthan',
    category: 'Stone & Filigree',
    price: 18500,
    originalPrice: 21000,
    materials: ['23K Pure Gold Sheet', 'Emerald Green Fused Glass', 'Pure Sterling Silver Frame', 'Natural Lac Resin'],
    technique: 'Secret Thewa fusion: micro-pierced 23K gold filigree fused onto molten colored glass surface',
    craftDuration: '16 days',
    originVillage: 'Pratapgarh, Rajasthan',
    giNumber: 'GI-070',
    giYear: 2014,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Regal royal green pendant featuring micro-cut 23-carat gold hunting and peacock motifs permanently bonded into shimmering glass.',
    story: {
      history: 'Invented in 1707 by goldsmith Nathu Ji Soni, who was awarded the title of Rajsoni by Maharawat Salim Singh. The technique was guarded so secretly that masters historically taught it only to sons, never daughters who would marry outside the family.',
      culturalSignificance: 'Thewa unites the brilliance of gold with the translucence of stained glass, producing an iridescent glow unmatched by traditional enameling (Meenakari).',
      artisanStory: 'Crafted by Master Giriraj Soni, 8th-generation Rajsoni, who uses microscopic chisels to pierce hunting scenes out of gold foil thinner than human hair.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Gold Foil Piercing (Jali Work)',
          description: 'A sheet of 23K pure gold is pasted on warm lac and hand-pierced with micro-chisels without tearing the gold.',
          timeSpent: '7 days',
          tools: ['Micro Chisels (Tanki)', 'Lac Base Board', 'Jeweler Loupe']
        },
        {
          stepNumber: 2,
          title: 'Thermal Fusion onto Glass',
          description: 'The pierced gold filigree is placed over molten colored glass and heated until the gold fuses irrevocably into the top layer of glass.',
          timeSpent: '4 days',
          tools: ['Charcoal Furnace', 'Special Crucible']
        },
        {
          stepNumber: 3,
          title: 'Silver Setting & Bezel Mounting',
          description: 'Mounted into an ornate 92.5 silver bezel with a gold-plated foil backing (vark) that reflects light back through the glass.',
          timeSpent: '5 days',
          tools: ['Silver Chasing Tools', 'Burnishers']
        }
      ],
      factualProvenanceNotes: [
        'Assay-certified 23K gold sheet verification.',
        'Crafted solely by licensed Pratapgarh Rajsoni family artisans.'
      ]
    },
    artisanId: 'giriraj-soni',
    rating: 5.0,
    reviewCount: 16,
    dimensions: '2.2" L x 1.4" W',
    weight: '24 grams',
    tags: ['Thewa', 'Pure Gold', 'Pratapgarh', 'Jewelry', 'GI Tagged'],
    inStock: true
  },

  // --- GUJARAT ---
  {
    id: 'nirona-roghan-tree-of-life',
    varnamId: 'VRN-GJ-000210',
    name: 'Nirona Roghan Art — Tree of Life Wall Tapestry',
    vernacularName: 'નિરોણા રોગાન કળા — જીવન વૃક્ષ',
    stateId: 'IN-GJ',
    stateName: 'Gujarat',
    category: 'Paintings & Art',
    price: 32000,
    materials: ['Boiled Wild Castor Seed Oil (Roghan)', 'Earth & Stone Mineral Pigments', 'Pure Silk Cloth', 'Brass Stylus (Kalam)'],
    technique: 'Freehand mid-air thread painting with sticky castor oil paste, followed by mirror-fold transfer',
    craftDuration: '30 days',
    originVillage: 'Nirona Village, Kutch District',
    giNumber: 'GI-Roghan',
    giYear: 2018,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1609137144822-4a004eb7c9a4?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Rare Tree of Life textile painting drawn in mid-air with castor oil sap by the world’s last remaining master family.',
    story: {
      history: 'Originally brought from Persia over 400 years ago, Roghan art survived solely in the remote village of Nirona in Kutch through the resilience of the Khatri family. Prime Minister Narendra Modi famously gifted a Nirona Roghan painting to US President Barack Obama in 2014.',
      culturalSignificance: 'The technique is miraculous: the artist never touches the cloth with the metal stylus. A thread of viscous castor sap is spun in the palm and guided into place through the air, then folded in half to mirror the design.',
      artisanStory: 'Crafted by National Awardee Abdul Gafur Khatri, who boils castor oil continuously for 48 hours in earthen pits until it transforms into an elastic, resinous golden paste.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Castor Oil Refining (Roghan Preparation)',
          description: 'Wild castor oil is boiled over wood fire for two days outdoors until it turns into a thick jelly residue, then mixed with stone mineral powders.',
          timeSpent: '5 days',
          tools: ['Earthen Cauldron', 'Charcoal Pit', 'Stone Grinding Slab']
        },
        {
          stepNumber: 2,
          title: 'Stylus Thread Drawing in Mid-Air',
          description: 'The artist rubs a small ball of colored roghan in the left palm to warm it, draws out a fine sticky thread with a 7-inch brass rod, and lays it across the fabric.',
          timeSpent: '18 days',
          tools: ['Brass Stylus (Kalam)', 'Artist Palm']
        },
        {
          stepNumber: 3,
          title: 'Mirror Symmetry Folding',
          description: 'The fabric is precisely folded down the center axis while the paste is moist, transferring an exact symmetrical mirror image onto the opposite half.',
          timeSpent: '7 days',
          tools: ['Smooth Bone Folder', 'Drying Frame']
        }
      ],
      factualProvenanceNotes: [
        'Created exclusively at the Khatri atelier in Nirona.',
        '100% pure castor oil and mineral pigments with zero synthetic plasticizers.'
      ]
    },
    artisanId: 'abdul-gafur-khatri',
    rating: 5.0,
    reviewCount: 45,
    dimensions: '36" H x 24" W',
    weight: '320 grams',
    tags: ['Roghan', 'Nirona', 'Castor Oil Art', 'Kutch', 'UNESCO Heritage'],
    inStock: true,
    featured: true
  },
  {
    id: 'patan-patola-double-ikat',
    varnamId: 'VRN-GJ-000211',
    name: 'Patan Patola Pure Silk Double-Ikat Saree (Navratna Motif)',
    vernacularName: 'પાટણ પટોળા ડબલ ઇકત સાડી',
    stateId: 'IN-GJ',
    stateName: 'Gujarat',
    category: 'Textiles & Weaving',
    price: 185000,
    originalPrice: 195000,
    materials: ['Pure Mulberry 8-ply Silk Yarn', 'Natural Dyes (Madder root, Indigo, Marigold, Pomegranate, Catechu)'],
    technique: 'Double-Ikat warp and weft tie-dye weaving on tilted rosewood slant loom (Salvi heritage)',
    craftDuration: '180 days (6 months)',
    originVillage: 'Patan, North Gujarat',
    giNumber: 'GI-030',
    giYear: 2007,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Ultra-rare heirloom double-ikat silk saree where both sides look identical; can last over 300 years without fading.',
    story: {
      history: 'In the 12th century, King Kumarapala of the Solanki dynasty invited 700 weaver families from Jalna to Patan so he could wear a pristine, unblemished Patola every day for temple prayers.',
      culturalSignificance: 'There is a famous Gujarati proverb: "Padi patole bhat, fatey pan phitey nahin" — The design laid in Patola will never wash out, even if the fabric tears with age.',
      artisanStory: 'Woven by Master Paresh Salvi, whose family is one of only four remaining Salvi households holding the ancient mathematical dye calculations.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Mathematical Graphing & Yarn Tie-Dye',
          description: 'Both warp and weft silk yarns are tied with cotton strings at millimeter intervals and dyed up to 8 times with natural colors before loom setup.',
          timeSpent: '75 days',
          tools: ['Cotton Binding Thread', 'Brass Measuring Calipers', 'Natural Dye Vats']
        },
        {
          stepNumber: 2,
          title: 'Slant Loom Weaving',
          description: 'Yarns are set on a hand-operated bamboo and rosewood slant loom tilted at 30 degrees. Each intersection is aligned with a curved needle.',
          timeSpent: '105 days',
          tools: ['Teakwood Slant Loom', 'Curved Steel Alignment Pin', 'Rosewood Needle Shuttle']
        }
      ],
      factualProvenanceNotes: [
        'Authenticated by Patan Patan Heritage Museum.',
        'Both sides tested 100% visually identical in color and registration.'
      ]
    },
    artisanId: 'paresh-salvi',
    rating: 5.0,
    reviewCount: 12,
    dimensions: '5.5 meters',
    weight: '680 grams',
    tags: ['Patan Patola', 'Double Ikat', 'Heirloom Silk', 'Gujarat', 'GI Tagged'],
    inStock: true,
    featured: true
  },

  // --- WEST BENGAL ---
  {
    id: 'bankura-terracotta-horse',
    varnamId: 'VRN-WB-000315',
    name: 'Bankura Panchmura Terracotta Sacred Horse',
    vernacularName: 'বাঁকুড়া পঞ্চমুড়া পোড়ামাটির ঘোড়া',
    stateId: 'IN-WB',
    stateName: 'West Bengal',
    category: 'Pottery & Ceramics',
    price: 4800,
    materials: ['Laterite Red Earth', 'Alluvial Silt', 'Natural Sand', 'Organic Straw Ash'],
    technique: 'Separate wheel-thrown hollow components assembled by hand and open-pit kiln fired',
    craftDuration: '12 days',
    originVillage: 'Panchmura Village, Bankura District',
    giNumber: 'GI-076',
    giYear: 2008,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Iconic 22-inch Bankura terracotta votive horse with erect ears and elongated neck, the national emblem of Indian handicrafts.',
    story: {
      history: 'Originating as votive offerings to the village deity Dharmathakur in rural Bengal, the Panchmura horse was adopted by the All India Handicrafts Board as the official symbol of Indian craft genius.',
      culturalSignificance: 'The horse features symmetrical architectural geometry: circular eyes, vertical tubular neck, and flared ears symbolizing wakefulness and protection.',
      artisanStory: 'Crafted by Biren Kumbhakar in Panchmura, who throws four legs, belly, neck, and face as separate cylinders on the potter’s wheel before assembling them.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Clay Sifting & Kneading',
          description: 'Locally dug laterite clay is weathered in rain, mixed with fine sand, and kneaded with feet to remove air pockets.',
          timeSpent: '3 days',
          tools: ['Clay Sieve', 'Wooden Paddle']
        },
        {
          stepNumber: 2,
          title: 'Wheel Throwing & Assembly',
          description: 'Hollow legs, body, and elongated neck are thrown separately on the flywheel, joined with clay slip, and detailed with hand-applied clay rosettes.',
          timeSpent: '5 days',
          tools: ['Potter’s Wheel', 'Bamboo Ribs', 'Clay Carving Needles']
        },
        {
          stepNumber: 3,
          title: 'Open Pit Kiln Firing (Bhati)',
          description: 'Fired with dry leaves, cow dung, and rice husks in an open pit kiln. Slow thermal buildup yields its distinctive warm terracotta red hue.',
          timeSpent: '4 days',
          tools: ['Clay-Coated Ground Pit', 'Organic Fuel']
        }
      ],
      factualProvenanceNotes: ['GI Registry #76 Panchmura Kumbhakar Society verified.']
    },
    artisanId: 'biren-kumbhakar',
    rating: 4.9,
    reviewCount: 34,
    dimensions: '22" H x 14" L x 6" W',
    weight: '3.4 kg',
    tags: ['Bankura Horse', 'Terracotta', 'Panchmura', 'Bengal', 'GI Tagged'],
    inStock: true
  },
  {
    id: 'bikna-dokra-tribal-lamp',
    varnamId: 'VRN-WB-000316',
    name: 'Bikna Dokra Non-Ferrous Lost-Wax Tribal Oil Lamp',
    vernacularName: 'বিকনা ডোকরা হস্তশিল্প প্রদীপ',
    stateId: 'IN-WB',
    stateName: 'West Bengal',
    category: 'Metalwork & Bronze',
    price: 8900,
    materials: ['Recycled Brass & Bronze Scrap', 'Beeswax', 'Mustard Oil', 'Ant-Hill Clay', 'Paddy Husk'],
    technique: '4,000-year-old hollow lost-wax casting (Dhokra Damar metallurgical tradition)',
    craftDuration: '16 days',
    originVillage: 'Bikna Village, Bankura',
    giNumber: 'GI-084',
    giYear: 2018,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Primitive lost-wax cast brass oil lamp adorned with coiled tribal figures and mythical birds.',
    story: {
      history: 'Direct continuous descendant of the Mohenjo-daro "Dancing Girl" lost-wax method from 2500 BCE, practiced by nomadic metal smiths settled in Bikna.',
      culturalSignificance: 'Dokra pieces are never identical; because each wax model is melted away and each clay mould broken open, every lamp is a unique world-original creation.',
      artisanStory: 'Crafted by Ananya Karmakar, who extrudes wax threads through a wooden press to wind delicate filigree lines over an ant-hill clay core.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Clay Core Sculpting',
          description: 'Ant-hill soil mixed with cattle dung is shaped into the inner core and dried hard in the sun.',
          timeSpent: '3 days',
          tools: ['Ant-Hill Earth', 'Sun Dry Platform']
        },
        {
          stepNumber: 2,
          title: 'Wax Thread Coiling',
          description: 'Beeswax softened with mustard oil is squeezed through a brass piston into thin noodle-like strands, wound over the core to build motifs.',
          timeSpent: '6 days',
          tools: ['Piston Extruder (Janta)', 'Heated Brass Blade']
        },
        {
          stepNumber: 3,
          title: 'Direct Firing & Metal Pour',
          description: 'Wrapped in outer clay with an integrated crucible containing brass scrap. Fired in a charcoal trench where melting metal fills the wax void.',
          timeSpent: '7 days',
          tools: ['Trench Furnace', 'Manual Bellows']
        }
      ],
      factualProvenanceNotes: ['GI Registry #84 Bikna Dokra Guild certified.']
    },
    artisanId: 'ananya-karmakar',
    rating: 4.8,
    reviewCount: 29,
    dimensions: '14" H x 9" W',
    weight: '2.8 kg',
    tags: ['Dokra', 'Bikna', 'Lost-Wax', 'Tribal Bronze', 'GI Tagged'],
    inStock: true
  },

  // --- JAMMU & KASHMIR ---
  {
    id: 'kashmir-kani-pashmina-shawl',
    varnamId: 'VRN-JK-000501',
    name: 'Kashmir Kani Pashmina Shawl (Hand-Woven with Wooden Spools)',
    vernacularName: 'کانی پشمینہ شال',
    stateId: 'IN-JK',
    stateName: 'Jammu & Kashmir',
    category: 'Textiles & Weaving',
    price: 95000,
    originalPrice: 110000,
    materials: ['100% Pure Changthangi Pashm (12-14 micron underfleece)', 'Natural Walnut, Saffron & Indigo Dyes'],
    technique: 'Kani weave: woven knot-by-knot using eye-less wooden needle spools (Tujis) guided by coded Talim verses',
    craftDuration: '120 days',
    originVillage: 'Kanihama, Kashmir Valley',
    giNumber: 'GI-046',
    giYear: 2008,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Exquisite Jamawar floral Kani shawl woven from Ladakh mountain goat down, so delicate it slips smoothly through a finger ring.',
    story: {
      history: 'Patronized by Mughal Emperor Akbar (who called them "Parm-narm" or superlatively soft) and Napoleon Bonaparte, whose Empress Joséphine owned over 400 Kashmiri shawls.',
      culturalSignificance: 'Unlike embroidered shawls, Kani designs are woven into the very structure of the fabric using up to 100 individual wooden spools operating concurrently across the warp.',
      artisanStory: 'Woven by Master Ghulam Nabi in Kanihama village, following the rhythmic recited chants of the Talim cryptographic paper script.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Hand-Spinning on Yender',
          description: 'Ladakh mountain cashmere fleece is hand-sorted, dehaired, and spun on the traditional wooden Yender wheel into ultra-fine thread.',
          timeSpent: '25 days',
          tools: ['Kashmiri Yender Spinning Wheel', 'Rice Powder Sizing']
        },
        {
          stepNumber: 2,
          title: 'Talim Coding & Loom Setup',
          description: 'The pattern master converts floral artwork into coded cryptographic text (Talim) indicating the exact count of colored warp threads.',
          timeSpent: '15 days',
          tools: ['Talim Script Scrolls', 'Handloom Frame']
        },
        {
          stepNumber: 3,
          title: 'Kani Spool Interlock Weaving',
          description: 'Weavers manipulate dozens of small eyeless wooden sticks (Kani/Tujis) wound with dyed threads, building motifs row by micro-row.',
          timeSpent: '80 days',
          tools: ['Tujis (Wooden Needles)', 'Iron Beater Comb']
        }
      ],
      factualProvenanceNotes: [
        'Tested with GI Kashmir testing laboratory laser scan (<14 microns).',
        'Certified 100% Changthangi goat pashmina without synthetic blends.'
      ]
    },
    artisanId: 'ghulam-nabi-kani',
    rating: 5.0,
    reviewCount: 19,
    dimensions: '2 meters x 1 meter',
    weight: '210 grams',
    tags: ['Pashmina', 'Kani Shawl', 'Kashmir', 'Cashmere', 'GI Tagged'],
    inStock: true,
    featured: true
  },
  {
    id: 'kashmir-papier-mache-globe',
    varnamId: 'VRN-JK-000502',
    name: 'Kashmir Royal Gilded Papier-Mâché Samovar Box',
    vernacularName: 'کشمیر پیپیر ماشی',
    stateId: 'IN-JK',
    stateName: 'Jammu & Kashmir',
    category: 'Woodwork & Lacquer',
    price: 9400,
    materials: ['Macerated Waste Paper Pulp', 'Rice Starch Adhesive', 'Gypsum Plaster (Gach)', 'Pure 24K Gold Leaf', 'Mineral Pigments', 'Copal Amber Varnish'],
    technique: 'Sakhtsazi mould shaping and fine Naqqashi miniature floral painting with gold-leaf gilding',
    craftDuration: '20 days',
    originVillage: 'Zadibal, Srinagar',
    giNumber: 'GI-045',
    giYear: 2008,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Intricate heirloom papier-mâché jewelry chest adorned with Hazara (thousand flowers) and gold Chinar foliage.',
    story: {
      history: 'Introduced by 15th-century monarch Sultan Zain-ul-Abidin (Badshah) who invited Persian master craftsmen to train Kashmiri artisans in the dual arts of Sakhtsazi and Naqqashi.',
      culturalSignificance: 'The surface requires polishing with smooth agate stones until it feels as cool and glossy as jade stone, protected by coats of natural amber varnish.',
      artisanStory: 'Painted by Ustad Farooq in Zadibal, whose family has painted miniature court scenes and Chinar motifs for five generations.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Sakhtsazi (Paper Pulp Moulding)',
          description: 'Waste paper soaked in water for weeks is beaten into pulp, mixed with rice paste, pressed into wooden moulds, and dried.',
          timeSpent: '6 days',
          tools: ['Stone Mortar', 'Hardwood Moulds', 'Rice Paste']
        },
        {
          stepNumber: 2,
          title: 'Gach Smoothing & Agate Polishing',
          description: 'Coated with gypsum plaster, filed smooth, and burnished with a semi-precious agate stone until porcelain smooth.',
          timeSpent: '4 days',
          tools: ['Pumice Stone', 'Agate Stone Burnisher']
        },
        {
          stepNumber: 3,
          title: 'Naqqashi (Miniature Painting & Gilding)',
          description: 'Fine miniature Chinar and Gul-o-Bulbul motifs painted with cat-hair brushes, illuminated with pure 24K gold foil lines, sealed with lacquer.',
          timeSpent: '10 days',
          tools: ['Cat-Hair Brushes', '24K Gold Leaf', 'Amber Varnish']
        }
      ],
      factualProvenanceNotes: ['GI Registry #45 Srinagar Naqqashi Guild verified.']
    },
    artisanId: 'farooq-papier-mache',
    rating: 4.9,
    reviewCount: 23,
    dimensions: '9" L x 6" W x 4.5" H',
    weight: '620 grams',
    tags: ['Papier-Mache', 'Kashmir', 'Naqqashi', 'Gold Leaf', 'GI Tagged'],
    inStock: true
  },

  // --- ODISHA ---
  {
    id: 'raghurajpur-pattachitra-scroll',
    varnamId: 'VRN-OR-000601',
    name: 'Raghurajpur Talapatra Pattachitra Palm Leaf Scroll',
    vernacularName: 'ରଘୁରାଜପୁର ତାଳପତ୍ର ପଟ୍ଟଚିତ୍ର',
    stateId: 'IN-OR',
    stateName: 'Odisha',
    category: 'Paintings & Art',
    price: 14500,
    materials: ['Seasoned Palm Leaves (Corypha umbraculifera)', 'Tamarind Seed Paste', 'Iron Stylus (Lekhani)', 'Lampblack Pigment', 'Vegetable Colors'],
    technique: 'Intricate incised line etching on stitched palm leaves rubbed with natural soot and plant dyes',
    craftDuration: '24 days',
    originVillage: 'Raghurajpur Heritage Crafts Village, Puri',
    giNumber: 'GI-087',
    giYear: 2008,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Foldable palm-leaf manuscript scroll etched with scenes from the Gitagovinda and Lord Jagannath legends.',
    story: {
      history: 'Dating back to the 12th century, Pattachitra paintings were originally prepared to stand in as temporary icons (Anasara Patti) during the 15-day period when the deities of Puri Jagannath temple were secluded.',
      culturalSignificance: 'No pencil outlines are ever drawn. The master artist carves directly into brittle dry palm leaves with an iron stylus, then rubs soot over the incisions to make the drawings appear miraculously.',
      artisanStory: 'Etched by National Awardee Akshaya Chitrakar in Raghurajpur, where every house has an open front verandah serving as a studio.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Palm Leaf Curing & Slicing',
          description: 'Tala leaves dried for months are soaked in turmeric water to prevent fungal decay, cut to uniform strips, and stitched with cotton thread.',
          timeSpent: '5 days',
          tools: ['Bone Cutter', 'Turmeric Soaking Bath', 'Needle Thread']
        },
        {
          stepNumber: 2,
          title: 'Stylus Incision (Lekhani Khodai)',
          description: 'Master artist holds sharp iron stylus (Lekhani) and etches intricate figures freehand into the hard fibrous surface without breaking through.',
          timeSpent: '15 days',
          tools: ['Tempered Iron Lekhani Stylus', 'Magnifying Glass']
        },
        {
          stepNumber: 3,
          title: 'Ink Inlay & Washing',
          description: 'A mixture of lampblack soot and bean-leaf juice is smeared across the scroll and wiped away; the black pigment stays permanently trapped in the grooves.',
          timeSpent: '4 days',
          tools: ['Kajal Soot Paste', 'Cotton Swabs', 'Water Rinse']
        }
      ],
      factualProvenanceNotes: ['Sourced from Raghurajpur Heritage Crafts Village.', 'GI Registry #87 authenticated.']
    },
    artisanId: 'akshaya-chitrakar',
    rating: 5.0,
    reviewCount: 31,
    dimensions: '28" H x 18" W (expanded)',
    weight: '380 grams',
    tags: ['Pattachitra', 'Palm Leaf', 'Raghurajpur', 'Odisha', 'GI Tagged'],
    inStock: true,
    featured: true
  },
  {
    id: 'cuttack-tarakasi-silver-peacock',
    varnamId: 'VRN-OR-000602',
    name: 'Cuttack Tarakasi 99% Fine Silver Filigree Dancing Peacock',
    vernacularName: 'କଟକ ତାରକସି ରୂପା କାମ',
    stateId: 'IN-OR',
    stateName: 'Odisha',
    category: 'Stone & Filigree',
    price: 21500,
    materials: ['99% Pure Fine Silver', 'Borax Flux', 'Silver Solder Alloy'],
    technique: 'Drawing silver through steel gauge plates into hair-thin crimped wires soldered into gossamer frames',
    craftDuration: '22 days',
    originVillage: 'Nayasarak & Alisha Bazar, Cuttack',
    giNumber: 'GI-512',
    giYear: 2024,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Museum-grade silver filigree peacock with open fan plumage constructed entirely from hair-thin crimped wires.',
    story: {
      history: 'Over 500 years old, Cuttack Tarakasi was shaped by maritime trade links with Indonesia (Bali and Java). Every year during Durga Puja, Cuttack goldsmiths erect entire 20-foot silver backdrops (Chandi Medha).',
      culturalSignificance: 'Fine silver (Chandi) is drawn until it is finer than human hair, crimped into zigzag waves, and soldered without a trace of seam.',
      artisanStory: 'Crafted by Master Pramod Maharana, who blows through a brass pipe flame to solder micro-wires without melting the delicate silver lace.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Wire Drawing (Tarakasi)',
          description: 'Silver ingots melted with borax are pulled by hand through perforated steel plates into microscopic hair-fine wires.',
          timeSpent: '5 days',
          tools: ['Steel Wire Drawing Plates', 'Hand Winch']
        },
        {
          stepNumber: 2,
          title: 'Crimping & Lattice Insertion',
          description: 'Two wires are twisted together and flattened, forming serrated ribbons inserted into thicker outer framework wire contours.',
          timeSpent: '12 days',
          tools: ['Micro Tweezers', 'Crimping Pliers']
        },
        {
          stepNumber: 3,
          title: 'Blowpipe Soldering & Acid Cleansing',
          description: 'Sprinkled with silver-copper solder powder and fused with an oral blowpipe, then cleaned in boiling tamarind water.',
          timeSpent: '5 days',
          tools: ['Traditional Oral Blowpipe', 'Kerosene Oil Lamp', 'Tamarind Bath']
        }
      ],
      factualProvenanceNotes: ['99% fine silver purity certified with assay mark.', 'Cuttack Tarakasi GI #512.']
    },
    artisanId: 'pramod-maharana',
    rating: 4.9,
    reviewCount: 20,
    dimensions: '8" H x 7" W x 4" D',
    weight: '165 grams pure silver',
    tags: ['Tarakasi', 'Silver Filigree', 'Cuttack', 'Peacock', 'GI Tagged'],
    inStock: true
  },

  // --- KARNATAKA ---
  {
    id: 'channapatna-lacquer-rocking-horse',
    varnamId: 'VRN-KA-000701',
    name: 'Channapatna Wooden Lacquerware Rocking Horse Toy',
    vernacularName: 'ಚನ್ನಪಟ್ಟಣ ಆಟಿಕೆಗಳು',
    stateId: 'IN-KA',
    stateName: 'Karnataka',
    category: 'Woodwork & Lacquer',
    price: 2600,
    materials: ['Aale Mara Ivory Wood (Wrightia tinctoria)', 'Natural Shellac Resin', 'Turmeric, Indigo & Vermillion Vegetable Dyes', 'Screw Pine Leaves (Pandanus)'],
    technique: 'Woodturning on power/treadle lathes with thermal friction natural vegetable lacquer polishing',
    craftDuration: '4 days',
    originVillage: 'Channapatna (Gombegala Ooru), Ramanagara',
    giNumber: 'GI-004',
    giYear: 2006,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010e42f9b1c?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Completely non-toxic, baby-safe traditional wooden toy turned from ivory wood and glazed with vegetable lacquer.',
    story: {
      history: 'Introduced by Tipu Sultan in the 18th century, who invited Persian artisans to train local woodturners in natural lac polishing, earning Channapatna the title "Toy Town of India".',
      culturalSignificance: '100% natural and child-safe. Colors are derived from turmeric (yellow), indigo (blue), kumkum (red), and acacia catechu (brown), with zero artificial chemical pigments.',
      artisanStory: 'Crafted by Syed Channapatna on his wood lathe. While the wood spins at high speed, he presses a colored lac stick against it; the friction heat melts the lac smoothly onto the wood.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Seasoning Ivory Wood (Aale Mara)',
          description: 'Felled Wrightia wood logs are air-seasoned for 2 months to release moisture and prevent warping.',
          timeSpent: '1 day',
          tools: ['Wood Saw', 'Moisture Meter']
        },
        {
          stepNumber: 2,
          title: 'Lathe Turning & Shaping',
          description: 'The wooden cylinder is shaped on a lathe using handheld gouges into smooth curves with rounded baby-safe edges.',
          timeSpent: '1 day',
          tools: ['Woodturning Lathe', 'Chisels & Gouges']
        },
        {
          stepNumber: 3,
          title: 'Friction Lacquering & Screw-Pine Buffing',
          description: 'A solid vegetable lac stick is pressed against the spinning toy. High rotational friction melts the lacquer onto the wood. It is polished with screw-pine leaves.',
          timeSpent: '2 days',
          tools: ['Colored Lac Sticks', 'Dry Pandanus (Screw-Pine) Leaf']
        }
      ],
      factualProvenanceNotes: ['Non-toxic EN-71 child-safety certified.', 'GI Registry #4 Channapatna Toy Artisans.']
    },
    artisanId: 'syed-channapatna',
    rating: 4.8,
    reviewCount: 52,
    dimensions: '10" L x 8" H x 3.5" W',
    weight: '520 grams',
    tags: ['Channapatna', 'Wooden Toy', 'Non-toxic', 'Karnataka', 'GI Tagged'],
    inStock: true
  },
  {
    id: 'bidriware-silver-vase',
    varnamId: 'VRN-KA-000702',
    name: 'Bidar Bidriware Silver Inlay Floral Huqqa Vase',
    vernacularName: 'ಬಿದ್ರಿ ಕಲೆ ಹೂದಾನಿ',
    stateId: 'IN-KA',
    stateName: 'Karnataka',
    category: 'Metalwork & Bronze',
    price: 13500,
    originalPrice: 15000,
    materials: ['Zinc (95%) & Copper (5%) Alloy', 'Pure 99.9% Silver Sheet & Wire', 'Bidar Fort Soil (Ammonium Chloride Rich)', 'Copper Sulphate Solution'],
    technique: 'Tarkashi (silver wire) and Taihnishan (silver sheet) inlay with soil-oxidation blackening',
    craftDuration: '18 days',
    originVillage: 'Bidar, Northern Karnataka',
    giNumber: 'GI-011',
    giYear: 2006,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Striking matte-jet black metal vase inlaid with pure silver floral foliage that never tarnishes.',
    story: {
      history: 'Developed during the Bahmani Sultanate in the 14th century, blending Persian motifs with Deccan metalcraft. The blackening agent is soil collected exclusively from the unlit ruins of the 15th-century Bidar Fort.',
      culturalSignificance: 'The magical contrast between pure silver and the deep black zinc alloy is created by chemical reaction with the unique nitrogenous mineral salts in historic Bidar soil.',
      artisanStory: 'Crafted by Master Narasimha Bidri, whose hands chisel narrow trenches into the zinc alloy and gently hammer pure silver wire flush with the surface.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Casting & Temporary Blackening',
          description: 'Sand-cast from zinc-copper alloy, filed smooth, and dipped into copper sulphate solution so engraved lines show up clearly.',
          timeSpent: '4 days',
          tools: ['Sand Moulds', 'Files', 'Copper Sulphate Bath']
        },
        {
          stepNumber: 2,
          title: 'Chiseling & Silver Inlaying (Tarkashi)',
          description: 'Intricate floral designs are engraved with small chisels; pure silver wire is gently hammered into the grooves.',
          timeSpent: '10 days',
          tools: ['Steel Engravers', 'Light Brass Hammer', 'Pure Silver Wire']
        },
        {
          stepNumber: 3,
          title: 'Bidar Fort Soil Blackening & Oil Rub',
          description: 'Boiled in a paste of historic Bidar Fort earth and ammonium chloride. The zinc turns permanently jet black, leaving the silver gleaming.',
          timeSpent: '4 days',
          tools: ['Boiling Copper Cauldron', 'Bidar Soil Paste', 'Groundnut Oil']
        }
      ],
      factualProvenanceNotes: ['Authentic Bidar Fort soil oxidized.', 'Pure 99.9% silver inlay verified under GI #11.']
    },
    artisanId: 'narasimha-bidri',
    rating: 4.9,
    reviewCount: 26,
    dimensions: '10" H x 5" Dia',
    weight: '1.4 kg',
    tags: ['Bidriware', 'Silver Inlay', 'Bidar', 'Karnataka', 'GI Tagged'],
    inStock: true
  },

  // --- KERALA ---
  {
    id: 'aranmula-kannadi-vaalkannadi',
    varnamId: 'VRN-KL-000801',
    name: 'Aranmula Kannadi Handheld Sacred Vaalkannadi Metal Mirror',
    vernacularName: 'ആറന്മുള വാൽക്കണ്ണാടി',
    stateId: 'IN-KL',
    stateName: 'Kerala',
    category: 'Metalwork & Bronze',
    price: 16500,
    materials: ['Copper and Tin Sacred Alloy (Front-Surface Mirror)', 'Cast Brass Handle & Frame', 'Natural Velvet Polishing Cloth'],
    technique: 'Front-surface non-glass metallurgical casting with multi-day velvet and chalk polishing',
    craftDuration: '26 days',
    originVillage: 'Aranmula, Pathanamthitta District',
    giNumber: 'GI-007',
    giYear: 2005,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'One of the eight auspicious items (Ashtamangalyam) of Kerala: an optical front-surface metal alloy mirror without glass or distortion.',
    story: {
      history: 'According to temple records, Vishwakarma craftsmen summoned from Tirunelveli in the 18th century to build the Aranmula Parthasarathy Temple discovered this extraordinary alloy after a divine revelation.',
      culturalSignificance: 'Unlike standard glass mirrors which reflect light from the back silvered surface (causing refractive double-imaging), Aranmula mirrors reflect light directly from the polished front metal surface with 100% optical fidelity.',
      artisanStory: 'Crafted by Parameswaran, one of only five master families holding the secret metallurgic ratio of copper and tin.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Alloy Compounding & Kiln Melting',
          description: 'Secret ratio of copper and tin is melted in a sealed clay crucible in a charcoal pit furnace.',
          timeSpent: '4 days',
          tools: ['Crucible Kiln', 'Charcoal Bellows']
        },
        {
          stepNumber: 2,
          title: 'Cast Blank Moulding',
          description: 'Poured between two flat clay discs separated by a ring spacer to cast an ultra-thin circular metal disc.',
          timeSpent: '6 days',
          tools: ['Clay Disc Moulds', 'Tongs']
        },
        {
          stepNumber: 3,
          title: 'Progressive Velvet & Chalk Polishing',
          description: 'Polished for 16 consecutive days using coarse jute, followed by velvet cloth and burnt clay powder moistened with oil until it achieves flawless mirror reflection.',
          timeSpent: '16 days',
          tools: ['Velvet Polishing Board', 'Chalk Oil Slurry']
        }
      ],
      factualProvenanceNotes: [
        'Each mirror carries the Aranmula Metal Mirror Society hologram and GI seal.',
        'Zero glass used; 100% solid front-reflecting metal.'
      ]
    },
    artisanId: 'parameswaran-aranmula',
    rating: 5.0,
    reviewCount: 39,
    dimensions: '8" H x 4" Dia (mirror 2.5")',
    weight: '480 grams',
    tags: ['Aranmula Kannadi', 'Metal Mirror', 'Kerala', 'Sacred Alloy', 'GI Tagged'],
    inStock: true,
    featured: true
  },

  // --- ANDHRA PRADESH & TELANGANA ---
  {
    id: 'srikalahasti-kalamkari-ramayana',
    varnamId: 'VRN-AP-000901',
    name: 'Srikalahasti Freehand Kalamkari Ramayana Epic Wall Hanging',
    vernacularName: 'శ్రీకాళహస్తి కలంకారీ చిత్రలేఖనం',
    stateId: 'IN-AP',
    stateName: 'Andhra Pradesh',
    category: 'Paintings & Art',
    price: 18900,
    materials: ['Unbleached Cotton Cloth', 'Bamboo Pen (Kalam)', 'Buffalo Milk', 'Alum Mordant', 'Fermented Iron & Jaggery (Kasimi)', 'Madder Root & Pomegranate Rind Dyes'],
    technique: '17-step freehand pen drawing and natural river-washed vegetable immersion dyeing',
    craftDuration: '35 days',
    originVillage: 'Srikalahasti, Tirupati District',
    giNumber: 'GI-019',
    giYear: 2006,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Freehand temple wall hanging depicting the coronation of Rama, drawn with bamboo pens and natural vegetable pigments.',
    story: {
      history: 'Flourished under the Vijayanagara Empire along the Swarnamukhi river as temple tapestries (Goravalu) hung behind shrines to teach epics to devotees.',
      culturalSignificance: 'Unlike Machilipatnam Kalamkari which uses carved blocks, Srikalahasti Kalamkari is drawn 100% freehand using a bamboo stick with felt wool wrapped around it as an ink reservoir.',
      artisanStory: 'Drawn by Master Lakshmaiah, whose father and grandfather painted mythological tapestries for the Srikalahasteeswara Shiva Temple.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Buffalo Milk & Myrobalan Treatment',
          description: 'Cotton cloth is washed in flowing river water and treated with buffalo milk to prevent natural dye bleed.',
          timeSpent: '4 days',
          tools: ['Buffalo Milk Vats', 'Swarnamukhi River Sand']
        },
        {
          stepNumber: 2,
          title: 'Freehand Bamboo Pen Outline (Kasimi)',
          description: 'Black contours are drawn freehand with bamboo kalam dipped into fermented jaggery-iron extract (Kasimi).',
          timeSpent: '16 days',
          tools: ['Bamboo Kalam', 'Wool Reservoir']
        },
        {
          stepNumber: 3,
          title: 'Natural Dye Infilling & Alum Fixing',
          description: 'Colors filled with vegetable extracts: red from madder, yellow from pomegranate rind, blue from indigo, washed in river after each color.',
          timeSpent: '15 days',
          tools: ['Alum Fixing Water', 'Boiling Copper Vats']
        }
      ],
      factualProvenanceNotes: ['GI Registry #19 Srikalahasti Kalamkari Society verified.', 'Swarnamukhi river washed.']
    },
    artisanId: 'lakshmaiah-kalamkari',
    rating: 4.9,
    reviewCount: 28,
    dimensions: '48" H x 36" W',
    weight: '550 grams',
    tags: ['Kalamkari', 'Srikalahasti', 'Bamboo Pen', 'Natural Dye', 'GI Tagged'],
    inStock: true
  },

  // --- ASSAM ---
  {
    id: 'assam-muga-golden-silk-mekhela',
    varnamId: 'VRN-AS-001001',
    name: 'Assam Muga Golden Silk Mekhela Chador',
    vernacularName: 'অসমৰ মুগা সোণালী ৰেচম মেখেলা চাদৰ',
    stateId: 'IN-AS',
    stateName: 'Assam',
    category: 'Textiles & Weaving',
    price: 52000,
    originalPrice: 58000,
    materials: ['100% Pure Wild Muga Silk (Antheraea assamensis)', 'Pure Eri and Silk Warp Weft'],
    technique: 'Traditional Assamese throw-shuttle frame handloom weaving with Kingkhab (royal bird) extra-weft motifs',
    craftDuration: '28 days',
    originVillage: 'Sualkuchi (Manchester of Assam), Kamrup District',
    giNumber: 'GI-055',
    giYear: 2007,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Naturally golden, ultra-resilient wild silk attire that outlasts human lifespans and glows more with every wash.',
    story: {
      history: 'Historically reserved for Ahom royalty under kingly decrees. The wild Antheraea assamensis moth survives nowhere else in the world outside the humid Brahmaputra river forests.',
      culturalSignificance: 'Muga silk has an organic shimmering golden-yellow tint without any artificial dye. It is stain-resistant, UV-absorbent, and traditionally passed from grandmother to granddaughter as a bridal heirloom.',
      artisanStory: 'Woven by Master Pratima Baruah on her traditional frame loom in Sualkuchi, using indigenous bamboo jakhala reeds.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Forest Cocoon Rearing & Reeling',
          description: 'Silkworms feed on wild Som and Soalu tree leaves outdoors. Cocoons are boiled in alkaline water and reeled by hand.',
          timeSpent: '8 days',
          tools: ['Reeling Apparatus (Bhir)', 'Clay Boiling Pots']
        },
        {
          stepNumber: 2,
          title: 'Throw-Shuttle Handloom Weaving',
          description: 'Woven with traditional extra-weft motifs of the Kingkhab (twin peacocks) and Kaziranga flora.',
          timeSpent: '20 days',
          tools: ['Assamese Frame Loom', 'Bamboo Jacquard Cards']
        }
      ],
      factualProvenanceNotes: ['Assam Muga Silk GI #55 verified.', 'DNA authenticated Antheraea assamensis filament.']
    },
    artisanId: 'pratima-baruah',
    rating: 5.0,
    reviewCount: 17,
    dimensions: 'Mekhela (bottom) + Chador (drape) 2-piece set',
    weight: '640 grams',
    tags: ['Muga Silk', 'Assam', 'Golden Silk', 'Sualkuchi', 'GI Tagged'],
    inStock: true,
    featured: true
  },

  // --- UTTAR PRADESH ---
  {
    id: 'banarasi-kadhwa-gold-zari-saree',
    varnamId: 'VRN-UP-001101',
    name: 'Varanasi Kadhwa Pure Gold Zari Brocade Saree',
    vernacularName: 'बनारसी कढ़वा शुद्ध सोने की ज़री साड़ी',
    stateId: 'IN-UP',
    stateName: 'Uttar Pradesh',
    category: 'Textiles & Weaving',
    price: 68000,
    originalPrice: 75000,
    materials: ['Katan Pure Silk Yarn', 'Pure Silver Thread Electroplated with 24K Gold (Real Zari)', 'Silk Floats'],
    technique: 'Authentic Kadhwa handloom weaving: each motif hand-engraved individually with no floating threads at the back',
    craftDuration: '40 days',
    originVillage: 'Madanpura & Peeli Kothi, Varanasi',
    giNumber: 'GI-099',
    giYear: 2009,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Imperial royal purple Banarasi brocade woven with pure gold zari hunting scenes (Shikargah) using the flawless Kadhwa technique.',
    story: {
      history: 'Mentioned in Buddhist texts and the Mahabharata as "Kasheyyaka" silk, Banarasi brocades reached the height of luxury under Mughal Emperor Akbar who commissioned court robes from Varanasi.',
      culturalSignificance: 'Unlike standard jacquard brocades where threads float loosely across the reverse side, authentic Kadhwa weave hand-locks every gold motif so cleanly that the back of the saree is as smooth as the front.',
      artisanStory: 'Woven by 5th-generation Master Weaver Haji Munna Ansari in Varanasi, who has operated pit looms since age 15.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Naksha Graphing & Jacquard Punching',
          description: 'The master designer draws Shikargah hunting motifs on graph sheets and cuts wooden punch cards (Naksha).',
          timeSpent: '10 days',
          tools: ['Naksha Cards', 'Punching Needles']
        },
        {
          stepNumber: 2,
          title: 'Kadhwa Hand Weaving',
          description: 'The weaver uses small bamboo spools to insert gold zari separately for each floral buti, locking each thread by hand.',
          timeSpent: '30 days',
          tools: ['Traditional Banarasi Pit Loom', 'Bamboo Zari Spools']
        }
      ],
      factualProvenanceNotes: [
        'Varanasi Weavers Association certified.',
        'Assay certified real silver-gold zari alloy under GI #99.'
      ]
    },
    artisanId: 'haji-munna-ansari',
    rating: 5.0,
    reviewCount: 48,
    dimensions: '6.5 meters with blouse',
    weight: '980 grams',
    tags: ['Banarasi Brocade', 'Kadhwa', 'Varanasi', 'Gold Zari', 'GI Tagged'],
    inStock: true,
    featured: true
  },
  {
    id: 'kannauj-deg-bhapka-mitti-ittar',
    varnamId: 'VRN-UP-001102',
    name: 'Kannauj Deg-Bhapka Mitti Attar (Scent of Baked Earth)',
    vernacularName: 'कन्नौज देग-भपका मिट्टी इत्र',
    stateId: 'IN-UP',
    stateName: 'Uttar Pradesh',
    category: 'Fragrance & Distillation',
    price: 4200,
    materials: ['Parched Gangetic Alluvial Baked Clay (Mitti)', 'Pure Mysore Sandalwood Oil (Base)', 'Rainwater'],
    technique: '1,000-year-old hydro-distillation in sealed copper cauldrons (Deg-Bhapka) using wood fire and river condensation pits',
    craftDuration: '15 days',
    originVillage: 'Kannauj (Perfume Capital of India)',
    giNumber: 'GI-433',
    giYear: 2014,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'The poetic petrichor scent of first monsoon rain on parched earth, hydro-distilled into pure sandalwood oil in copper stills.',
    story: {
      history: 'Kannauj has distilled floral and earth perfumes since the Harshavardhana Empire in the 7th century CE, earning it the title "Grasse of the East".',
      culturalSignificance: 'Mitti Attar captures the exact aroma of parched soil when first kissed by summer rain (petrichor). Zero synthetic chemicals, alcohol, or fixatives are ever used.',
      artisanStory: 'Distilled by Ramesh Tandon in Kannauj, whose distillery maintains wood-fired copper deg cauldrons sealed with river mud paste.',
      creationProcessSteps: [
        {
          stepNumber: 1,
          title: 'Clay Baking & Deg Loading',
          description: 'Alluvial clay from dry pond beds is baked into discs, broken into shards, and loaded into large copper cauldrons (Degs) with water.',
          timeSpent: '3 days',
          tools: ['Copper Deg Cauldrons', 'Clay Oven']
        },
        {
          stepNumber: 2,
          title: 'Hydro-Distillation into Sandalwood Receiver',
          description: 'Cauldron is sealed with mud. Vapors pass through bamboo pipes (Chonga) into a submerged copper receiver (Bhapka) containing sandalwood oil.',
          timeSpent: '8 days',
          tools: ['Bamboo Chonga Pipes', 'Water Cooling Tank']
        },
        {
          stepNumber: 3,
          title: 'Kuppi Leather Dehydration',
          description: 'Transferred into camel-leather pouches (Kuppi) which breathe through pores to evaporate residual moisture, intensifying the oil.',
          timeSpent: '4 days',
          tools: ['Camel Leather Kuppi', 'Sun Racks']
        }
      ],
      factualProvenanceNotes: ['Kannauj Ittar GI #433 verified.', '100% alcohol-free natural hydro-distillation.']
    },
    artisanId: 'ramesh-tandon-ittar',
    rating: 4.9,
    reviewCount: 36,
    dimensions: '12 ml crystal flacon',
    weight: '95 grams',
    tags: ['Kannauj Ittar', 'Mitti Attar', 'Petrichor', 'Sandalwood', 'GI Tagged'],
    inStock: true
  },
  // --- JAMMU & KASHMIR ---
  {
    id: 'kani-pashmina-shawl',
    varnamId: 'VRN-JK-000951',
    name: 'Royal Kani Pashmina Shawl',
    vernacularName: 'کانی شال پشمینہ',
    stateId: 'IN-JK',
    stateName: 'Jammu & Kashmir',
    category: 'Textiles & Weaving',
    price: 48500,
    originalPrice: 55000,
    materials: ['Changthangi Capra Hircus Down Cashmere', 'Organic Walnut Shell Dye', 'Saffron Scented Bath'],
    technique: 'Discontinuous Weft Twill Tapestry woven with wooden eyeless spools (Tujis) guided by coded Talim verses',
    craftDuration: '180 days',
    originVillage: 'Kanihama, Budgam, Kashmir',
    giNumber: 'GI-009',
    giYear: 2008,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Aristocratic Pashmina masterpiece woven on traditional handlooms using hundreds of pointed wooden Kanis following melodic Talim scripts.',
    story: {
      history: 'Patronized by Mughal Emperor Akbar and worn by Napoleon Bonaparte and Empress Josephine in 18th-century Europe, Kani weaving is the pinnacle of Asian textile artistry. Originating in Kanihama ("village of Kani"), each shawl takes from six months to two years to complete as two weavers thread individual colored spools through the gossamer warp.',
      culturalSignificance: 'Kani shawls were recorded in the Ain-i-Akbari as the imperial gift par excellence. The Capra hircus goat sheds its microscopic underdown (12-14 microns) during spring in Ladakh, which is carded by hand and spun on Kashmiri Yender spinning wheels.',
      artisanStory: 'Woven by master craftsman Bashir Ahmed in Kanihama, whose family has passed down the handwritten coded Talim papers across seven generations.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Raw Pashm Sorting & Hand-Spinning', description: 'Raw high-altitude fleece is dehaired and hand-spun on traditional Yender wheels by village women.', timeSpent: '30 days', tools: ['Yender Wheel', 'Wooden Carding Comb'] },
        { stepNumber: 2, title: 'Talim Pattern Transcription', description: 'The master Naqqash draws the floral composition, which the Talim Guru translates into coded numerical script notations.', timeSpent: '15 days', tools: ['Parchment Paper', 'Calligraphic Reed Pen'] },
        { stepNumber: 3, title: 'Kani Loom Tapestry Weaving', description: 'Two master weavers sit side-by-side chanting the Talim code, inserting up to 1,500 wooden spools across the width.', timeSpent: '120 days', tools: ['Wooden Tujis (Eyeless Spools)', 'Traditional Loom'] },
        { stepNumber: 4, title: 'Purzor Washing & Spring Steaming', description: 'Washed in pure glacial mountain stream water and cold-pressed with river stones.', timeSpent: '15 days', tools: ['River Spring Water', 'Chinar Wood Press'] }
      ],
      factualProvenanceNotes: ['GI #009 registered authentic Kashmiri Kani Shawl.', 'Guaranteed 100% pure high-altitude Ladakhi Pashmina.', 'Non-mechanized handloom certificate included.']
    },
    artisanId: 'bashir-ahmed-kani',
    rating: 5.0,
    reviewCount: 42,
    dimensions: '200cm x 100cm',
    weight: '210 grams',
    tags: ['Kani Shawl', 'Pashmina', 'Kashmir', 'GI Certified', 'Royal Heritage'],
    inStock: true,
    featured: true
  },
  {
    id: 'kashmiri-papier-mache-box',
    varnamId: 'VRN-JK-000952',
    name: 'Imperial Kashmiri Papier-Mâché Royal Box',
    vernacularName: 'کٲشُر پاپیر ماشے',
    stateId: 'IN-JK',
    stateName: 'Jammu & Kashmir',
    category: 'Woodwork & Lacquer',
    price: 3600,
    originalPrice: 4200,
    materials: ['Macerated Waste Paper & Rice Glue', '24K Liquid Gold Leaf Foil', 'Lapis Lazuli and Natural Mineral Pigments'],
    technique: 'Sakhtsazi base moulding, followed by fine squirrel hair Naqqashi brush painting and amber lacquer burnishing',
    craftDuration: '25 days',
    originVillage: 'Zadibal, Downtown Srinagar, Kashmir',
    giNumber: 'GI-015',
    giYear: 2011,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Luminous handcrafted jewelry casket decorated in Hazara Gul-o-Bulbul (rose & nightingale) motifs and 24-karat gold illumination.',
    story: {
      history: 'Introduced to Kashmir in the 15th century by Sultan Zain-ul-Abidin who invited Persian court artisans, Kashmiri papier-mâché combines the structural Sakhtsazi molding technique with microscopic Naqqashi brush illumination.',
      culturalSignificance: 'Unlike European paper-mâché, Kashmiri pieces use zero machine pulp: layers of discarded cotton rag paper are soaked for weeks, hand-pounded in stone mortars with rice water starch, and coated with gesso ground.',
      artisanStory: 'Crafted by Ghulam Rasool in Zadibal, Srinagar, using miniature brushes fashioned from domestic kitten neck hair and squirrel tails to draw hair-fine gold veins.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Sakhtsazi Pulp Moulding', description: 'Paper pulp soaked in water is pounded with rice flour glue and layered over clay moulds.', timeSpent: '7 days', tools: ['Stone Mortar', 'Timber Mould'] },
        { stepNumber: 2, title: 'Astar Priming & Gesso Burnishing', description: 'Coated with chalk powder slurry and burnished smooth using polished river agate stones.', timeSpent: '5 days', tools: ['Agate Burnisher', 'Chalk Slurry'] },
        { stepNumber: 3, title: 'Naqqashi Miniature Painting', description: 'Intricate Hazara floral arabesques and imperial nightingales painted with natural pigments.', timeSpent: '10 days', tools: ['Squirrel Hair Brushes', 'Mineral Pigments'] },
        { stepNumber: 4, title: 'Liquid Gold Chasing & Lacquer Glazing', description: 'Illuminated with 24K pure gold leaf lines and sealed under multiple coats of crystal copal varnish.', timeSpent: '3 days', tools: ['24K Gold Foil', 'Copal Varnish'] }
      ],
      factualProvenanceNotes: ['Kashmir Papier-Mâché GI #015 authenticated.', 'Handcrafted base and hand-painted miniature motifs.']
    },
    artisanId: 'ghulam-nabi-wood',
    rating: 4.8,
    reviewCount: 31,
    dimensions: '22cm x 15cm x 8cm',
    weight: '450 grams',
    tags: ['Papier-Mache', 'Kashmir', 'Gold Leaf', 'Naqqashi', 'GI Tagged'],
    inStock: true,
    featured: true
  },
  {
    id: 'sozni-embroidery-stole',
    varnamId: 'VRN-JK-000953',
    name: 'Fine Sozni Needle-Embroidered Pashmina Stole',
    vernacularName: 'سوزنی کڑھائی',
    stateId: 'IN-JK',
    stateName: 'Jammu & Kashmir',
    category: 'Textiles & Weaving',
    price: 19500,
    originalPrice: 22500,
    materials: ['Pure Ladakhi Pashmina Ground', 'Untwisted Pure Silk Floss (Resham)'],
    technique: 'Microscopic Single-Thread Needlepoint (Suzani Satin Stitch) with zero reverse-side thread show',
    craftDuration: '60 days',
    originVillage: 'Anantnag & Srinagar, Kashmir',
    giNumber: 'GI-192',
    giYear: 2013,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Regal Kashmiri needlework stole carrying badam (paisley) and chinar leaf arabesques executed in microscopic silk stitches.',
    story: {
      history: 'Sozni (from the Persian "sozan" meaning needle) is the most refined needle embroidery known to South Asia, perfected over six centuries in the valley of Kashmir.',
      culturalSignificance: 'The stitches are so dense and microscopic (up to 50 stitches per inch) that the embroidery appears woven directly into the pashmina cloth.',
      artisanStory: 'Stitched by master craftswoman Fahmida Begum in Srinagar, working by daylight near an open wooden lattice window overlooking the Jhelum river.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Pashmina Steaming & Wooden Block Stamping', description: 'The motif is hand-stamped onto charcoal-primed pashmina using hand-carved walnut woodblocks.', timeSpent: '2 days', tools: ['Walnut Woodblocks', 'Charcoal Chalk Ink'] },
        { stepNumber: 2, title: 'Resham Silk Thread Matching', description: 'Up to 24 shades of natural-dyed silk threads are selected for tonal petal gradation.', timeSpent: '3 days', tools: ['Silk Hanks', 'Color Cards'] },
        { stepNumber: 3, title: 'Microscopic Needlework Execution', description: 'Stitched with fine steel needles using darning and stem stitches following the stamped outlines.', timeSpent: '50 days', tools: ['Finest Gauge Needles', 'Needle Rest'] },
        { stepNumber: 4, title: 'Washing & Cedar Finishing', description: 'Washed in cool mountain water and pressed with herbal steam.', timeSpent: '5 days', tools: ['Steam Iron', 'Cedar Cloth'] }
      ],
      factualProvenanceNotes: ['Sozni Needlework GI #192 certified.', 'Hand-embroidered on pure certified Pashmina.']
    },
    artisanId: 'bashir-ahmed-kani',
    rating: 4.9,
    reviewCount: 27,
    dimensions: '200cm x 70cm',
    weight: '160 grams',
    tags: ['Sozni', 'Embroidery', 'Kashmir', 'Pashmina', 'Resham Silk'],
    inStock: true
  },
  {
    id: 'carved-walnut-wood-box',
    varnamId: 'VRN-JK-000954',
    name: 'Hand-Carved Kashmiri Walnut Wood Chest',
    vernacularName: 'کٔشیٖر دونی کاٹھ',
    stateId: 'IN-JK',
    stateName: 'Jammu & Kashmir',
    category: 'Woodwork & Lacquer',
    price: 12500,
    originalPrice: 14000,
    materials: ['Single-Piece Seasoned Kashmir Walnut Wood (Juglans regia)', 'Natural Beeswax & Walnut Oil'],
    technique: 'Deep Undercut (Sunbhi) and Openwork (Jali) Hand Carving with zero nails or industrial screws',
    craftDuration: '20 days',
    originVillage: 'Old Srinagar Downtown (Fateh Kadal), Kashmir',
    giNumber: 'GI-182',
    giYear: 2011,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Masterpiece jewelry chest hand-carved from seasoned root walnut wood with multi-layer undercut Chinar leaves and secret latch.',
    story: {
      history: 'Walnut wood carving was patronized under the Shah Mir dynasty and popularized by Central Asian woodcrafters who built the monumental cedar Jama Masjid in Srinagar.',
      culturalSignificance: 'Kashmir is the sole region in India where the English walnut tree (Juglans regia) grows abundantly. Root wood, cured for 3 to 4 years, yields the dark chocolate grain celebrated worldwide.',
      artisanStory: 'Chiseled by Ghulam Nabi in Fateh Kadal, Old Srinagar, whose ancestral workshop has specialized in high-relief undercut carving for over 90 years.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Timber Curing & Planing', description: 'Walnut root logs are air-dried for 3 years to ensure zero warping before sawing into planks.', timeSpent: '3 days', tools: ['Traditional Handsaw', 'Jack Plane'] },
        { stepNumber: 2, title: 'Freehand Chinar Stenciling', description: 'Floral patterns and intertwining vines are sketched directly onto timber with pencil.', timeSpent: '2 days', tools: ['Graphite Pencil', 'Compass'] },
        { stepNumber: 3, title: 'Deep Undercut Chisel Sculpting', description: 'Carved through five depth planes with curved gouges to achieve three-dimensional relief.', timeSpent: '12 days', tools: ['Gouges', 'Carving Mallet', 'V-Chisels'] },
        { stepNumber: 4, title: 'Agate & Walnut Oil Friction Burnishing', description: 'Buffed with crushed walnut kernels and agate stone to release natural timber oils.', timeSpent: '3 days', tools: ['Agate Stone', 'Walnut Kernels'] }
      ],
      factualProvenanceNotes: ['Kashmir Walnut Wood Carving GI #182 certified.', 'Zero mechanical CNC carving, 100% hand chiseled.']
    },
    artisanId: 'ghulam-nabi-wood',
    rating: 4.9,
    reviewCount: 39,
    dimensions: '32cm x 22cm x 18cm',
    weight: '2.4 kg',
    tags: ['Walnut Wood', 'Kashmir', 'Hand Carved', 'Undercut', 'GI Tagged'],
    inStock: true
  },
  {
    id: 'kashmiri-silk-carpet',
    varnamId: 'VRN-JK-000955',
    name: 'Kashmiri Hand-Knotted Pure Silk Carpet',
    vernacularName: 'کٔشیٖر قالین',
    stateId: 'IN-JK',
    stateName: 'Jammu & Kashmir',
    category: 'Textiles & Weaving',
    price: 65000,
    originalPrice: 75000,
    materials: ['Pure Mulberry Silk Pile', 'High-Tensile Cotton Warp & Weft'],
    technique: 'Farsi Baff Hand-Knotting with over 576 knots per square inch guided by melodic Talim chanting',
    craftDuration: '120 days',
    originVillage: 'Carpet Looms, Srinagar, Kashmir',
    giNumber: 'GI-237',
    giYear: 2016,
    isGiVerified: true,
    images: [
      'https://images.unsplash.com/photo-1609137144822-4a004eb7c9a4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80'
    ],
    shortDescription: 'Sumptuous hand-knotted silk rug displaying hunting scene (Shikargah) and floral arabesque medallions that shift colors in different lights.',
    story: {
      history: 'Brought to the Kashmir Valley by Mir Sayyid Ali Hamadani in the 14th century, Kashmiri carpet weaving adopted the Persian asymmetrical knot (Sehna / Farsi baff) to achieve peerless knot densities.',
      culturalSignificance: 'Kashmiri carpets are unique in the world for their coded musical notation system (Talim), where a master reader recites color notes in rhythmic meter while weavers tie knots in unison.',
      artisanStory: 'Knotted by master artisan Bashir Ahmed and his sons on ancestral vertical timber looms in Srinagar.',
      creationProcessSteps: [
        { stepNumber: 1, title: 'Warp Setting on Vertical Loom', description: 'Cotton warp threads are stretched taut on vertical wooden frames with uniform tension.', timeSpent: '5 days', tools: ['Vertical Timber Loom', 'Warp Tensioner'] },
        { stepNumber: 2, title: 'Talim Rhythm Knotting', description: 'Silk pile is hand-knotted around warp pairs at 600 knots per sq inch following the Talim chant.', timeSpent: '100 days', tools: ['Curved Carpet Knife', 'Heavy Iron Panja Beater'] },
        { stepNumber: 3, title: 'Clipping & Pile Leveling', description: 'Pile height is sheared to uniform millimeter height using specialized curved scissors.', timeSpent: '8 days', tools: ['Shearing Scissors'] },
        { stepNumber: 4, title: 'Glacial Washing & Sun Curing', description: 'Washed with natural soap nuts and dried on open meadow wooden stretchers.', timeSpent: '7 days', tools: ['Washing Planks', 'Drying Frame'] }
      ],
      factualProvenanceNotes: ['Kashmir Hand Knotted Carpet GI #237 verified.', '100% natural mulberry silk pile.', 'Includes Quick Response provenance traceability tag.']
    },
    artisanId: 'bashir-ahmed-kani',
    rating: 5.0,
    reviewCount: 19,
    dimensions: '180cm x 120cm (4ft x 6ft)',
    weight: '4.8 kg',
    tags: ['Kashmiri Carpet', 'Pure Silk', 'Hand Knotted', 'GI Certified', 'Living Heritage'],
    inStock: true
  }
];

export const ALL_CRAFTS: Craft[] = [...BASE_CRAFTS, ...ADDITIONAL_CRAFTS, ...ALL_STATE_CRAFTS];

