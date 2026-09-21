import { StateData } from '../types';

export const INDIAN_STATES: StateData[] = [
  // ==========================================
  // 1. TAMIL NADU (South)
  // ==========================================
  {
    id: 'IN-TN',
    slug: 'tamil-nadu',
    name: 'Tamil Nadu',
    capital: 'Chennai',
    zone: 'South',
    tagLine: 'Where temples, textiles and traditional craftsmanship tell stories across generations.',
    culturalStory: "Tamil Nadu's craft identity is inseparable from its temple architecture and classical culture — towering Dravidian gopurams, silk-weaving cities, and hill towns that grew around colonial-era railways. Its artisans carry forward traditions of stone, bronze, silk and paint that are centuries old.",
    accentColor: '#6E2A38', // Muted Maroon
    secondaryColor: '#AD7C2B', // Antique Gold
    motifName: 'Dravidian Gopuram & Sacred Kolam Mandala',
    motifSvg: 'M12 2L4 22h16L12 2zm0 4l5 13H7l5-13z',
    heroImage: '/assets/states/tamil-nadu/hero.png', // User-provided Meenakshi Amman Temple Gopuram!
    signatureCraftIds: [
      'tanjore-painting-krishna',
      'kanchipuram-silk-sari',
      'swamimalai-bronze-nataraja',
      'pattamadai-fine-mat',
      'bamboo-cane-craft'
    ],
    featuredArtisanIds: ['rajendran-sthapathi', 'meenakshi-ammal', 'vadivelu-weaver'],
    culturalHighlights: [
      {
        title: 'Meenakshi Amman Temple',
        category: 'Dravidian Architecture',
        description: 'Towering Dravidian gopurams adorned with thousands of polychromatic stone and stucco sculptures in Madurai.',
        iconName: 'Landmark'
      },
      {
        title: 'Brihadeeswarar Temple',
        category: 'Chola Royal Monument',
        description: '1,000-year-old Chola granite architectural marvel housing century-old bronze casting workshops in Thanjavur.',
        iconName: 'Columns'
      },
      {
        title: 'Kanchipuram',
        category: 'Sacred Textile Guilds',
        description: 'City of a Thousand Temples and the global capital of three-shuttle interlocked Korvai pure mulberry silk.',
        iconName: 'Scroll'
      },
      {
        title: 'Ooty',
        category: 'Nilgiri Heritage',
        description: 'Misty Blue Mountain foothills renowned for natural eucalyptus oils, Toda tribal red-and-black embroidery and tea heritage.',
        iconName: 'Mountain'
      },
      {
        title: 'Nilgiri Mountain Railway',
        category: 'UNESCO Engineering',
        description: 'Historic 1908 rack-and-pinion mountain steam train connecting Mettupalayam to the tea hills of Udhagamandalam.',
        iconName: 'Sparkles'
      }
    ],
    giCount: 56,
    artisanCount: 24500,
    stickers: [
      {
        id: 'tanjore-painting-krishna',
        name: 'Tanjore Gold Leaf Painting',
        category: 'Paintings & Art',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Thanjavur Palace Guilds',
        tag: 'GI #042 • 22K GOLD',
        rotationClass: '-rotate-3',
        description: 'Traditional devotional painting with 22K gold foil, unheated gemstones, and chalk gesso relief on teak wood.'
      },
      {
        id: 'kanchipuram-silk-sari',
        name: 'Kanchipuram Korvai Silk',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Pillaiyarpalayam, Kanchipuram',
        tag: 'GI #007 • 3-SHUTTLE',
        rotationClass: 'rotate-4',
        description: 'Pure South Indian mulberry silk handwoven with authentic silver-gilt zari on dual-weaver pit looms.'
      },
      {
        id: 'swamimalai-bronze-nataraja',
        name: 'Swamimalai Bronze Icon',
        category: 'Metalwork & Bronze',
        image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Swamimalai, Thanjavur',
        tag: 'GI #023 • PANCHALOHA',
        rotationClass: '-rotate-2',
        description: 'Ancient lost-wax cire-perdue casting according to the Shilpa Shastras using Kaveri riverbed silt.'
      },
      {
        id: 'pattamadai-fine-mat',
        name: 'Pattamadai Pai Reed Mat',
        category: 'Natural Fiber & Grass',
        image: 'https://images.unsplash.com/photo-1609137144822-4a004eb7c9a4?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Pattamadai, Tirunelveli',
        tag: 'GI #138 • KORAI GRASS',
        rotationClass: 'rotate-3',
        description: 'Superfine 140-count split Korai river grass mats woven so supple they can be folded like silk shawls.'
      },
      {
        id: 'bamboo-cane-craft',
        name: 'Bamboo & Cane Craft',
        category: 'Natural Fiber & Grass',
        image: '/assets/states/tamil-nadu/bamboo-cane.png',
        originVillage: 'Pollachi & Nilgiri Foothills',
        tag: 'LIVING GUILD • CANE',
        rotationClass: '-rotate-4',
        description: 'Hand-split native bamboo and wild cane storage baskets and vessels handwoven by Western Ghats artisans.'
      }
    ]
  },

  // ==========================================
  // 2. KERALA (South)
  // ==========================================
  {
    id: 'IN-KL',
    slug: 'kerala',
    name: 'Kerala',
    capital: 'Thiruvananthapuram',
    zone: 'South',
    tagLine: 'Where lush landscapes, rich traditions and skilled hands create timeless crafts.',
    culturalStory: 'Guided by Vedic metallurgy and riverine ecology, Kerala crafts celebrate sacred simplicity. The secret front-surface copper-tin alloy of Aranmula mirrors produces optical fidelity without glass refraction, while pit looms of Balaramapuram weave unbleached cotton with pure zari.',
    accentColor: '#1E3A2B', // Forest Emerald
    secondaryColor: '#AD7C2B', // Temple Bronze
    motifName: 'Nalukettu Gabled Eaves & Kasavu Temple Border',
    motifSvg: 'M3 17l9-12 9 12H3zm9-8l-4.5 6h9L12 9z',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'kerala-kalamkari',
      'payyanur-bell-metal-uruli',
      'alappuzha-coir-woven-craft',
      'kerala-rosewood-elephant-carving',
      'balaramapuram-kasavu-saree',
      'kerala-temple-mural-painting'
    ],
    featuredArtisanIds: ['parameswaran-aranmula', 'krishnan-bellmetal'],
    culturalHighlights: [
      {
        title: 'Kerala Kalamkari',
        category: 'Hand-painted Fabric',
        description: 'Sacred narrative textiles painted with natural vegetable dyes and cow dung mordant depicting Kathakali epics.',
        iconName: 'Scroll'
      },
      {
        title: 'Coir Craft',
        category: 'Natural Coconut Fiber',
        description: 'Golden coconut husk fibers retted in backwaters and hand-spun into organic woven vessels and mats.',
        iconName: 'Waves'
      },
      {
        title: 'Wood Carving (Anjil & Rosewood)',
        category: 'Sacred Timber',
        description: 'Malabar rosewood hand-chiseled into majestic temple caparisoned elephants and royal woodwork.',
        iconName: 'Trees'
      },
      {
        title: 'Kasavu Saree',
        category: 'Golden Weave',
        description: 'Pristine unbleached cotton handwoven on pit looms bordered in hallmark pure gold and silver kasavu zari.',
        iconName: 'Sparkles'
      },
      {
        title: 'Bell Metal (Ural)',
        category: 'Bronze Metallurgy',
        description: 'Heavy bronze ritual cauldron and temple bells hand-hammered with resonant panchaloha acoustic tones.',
        iconName: 'Landmark'
      },
      {
        title: 'Mural Painting',
        category: 'Temple Fresco',
        description: 'Five-color Panchavarna natural mineral murals adorning sacred sanctums of Padmanabhapuram and Mattancherry.',
        iconName: 'Palette'
      }
    ],
    giCount: 35,
    artisanCount: 22000,
    stickers: [
      {
        id: 'kerala-kalamkari',
        name: 'Kerala Kalamkari',
        category: 'Paintings & Art',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Guruvayur & Kottayam',
        tag: 'GI CERTIFIED • NATURAL DYES',
        rotationClass: '-rotate-3',
        description: 'Sacred cloth murals painted with natural mineral pigments and buffalo milk mordants.'
      },
      {
        id: 'payyanur-bell-metal-uruli',
        name: 'Bell Metal (Ural)',
        category: 'Metalwork & Bronze',
        image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Payyanur & Mannar',
        tag: 'GI #128 • PANCHALOHA',
        rotationClass: '-rotate-1',
        description: 'Heavy bell-metal cookware and ritual vessel hammered with acoustic panchaloha purity.'
      },
      {
        id: 'alappuzha-coir-woven-craft',
        name: 'Coir Craft',
        category: 'Natural Fiber & Grass',
        image: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Alappuzha Backwaters',
        tag: 'GI #112 • ORGANIC COIR',
        rotationClass: '-rotate-2',
        description: 'Coconut husk fibers spun by hand into durable natural baskets, coasters and floor runners.'
      },
      {
        id: 'kerala-rosewood-elephant-carving',
        name: 'Wood Carving (Anjil & Rosewood)',
        category: 'Woodwork & Lacquer',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Trichur & Nilambur',
        tag: 'HERITAGE TIMBER',
        rotationClass: 'rotate-3',
        description: 'Solid Malabar rosewood hand-chiseled into magnificent temple caparisoned elephants.'
      },
      {
        id: 'balaramapuram-kasavu-saree',
        name: 'Kasavu Saree',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Balaramapuram, Trivandrum',
        tag: 'GI #211 • GOLDEN KASAVU',
        rotationClass: 'rotate-2',
        description: 'Pristine unbleached handloom cotton bordered in pure silver-gold zari.'
      },
      {
        id: 'kerala-temple-mural-painting',
        name: 'Mural Painting',
        category: 'Paintings & Art',
        image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Vaikom & Aranmula',
        tag: 'TEMPLE FRESCO',
        rotationClass: '-rotate-2',
        description: 'Vedic five-color fresco painting technique executing intricate spiritual iconography.'
      }
    ]
  },

  // ==========================================
  // 3. KARNATAKA (South)
  // ==========================================
  {
    id: 'IN-KA',
    slug: 'karnataka',
    name: 'Karnataka',
    capital: 'Bengaluru',
    zone: 'South',
    tagLine: 'Where royal heritage, vibrant art forms and traditional crafts weave a timeless story.',
    culturalStory: 'From Hoysala stone relief to Tipu Sultan’s royal workshops, Karnataka crafts balance regal opulence with folk precision. Master turners in Channapatna coat turned wood in vegetable lac, Bidar artisans oxidise silver in fort soil, and Mysore silk looms weave hallmark pure gold.',
    accentColor: '#7A2021', // Mysore Maroon
    secondaryColor: '#D4AF37', // Palace Gold
    motifName: 'Mysore Palace Arch & Hoysala Stone Floral',
    motifSvg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
    heroImage: '/assets/states/karnataka/hero.jpg',
    signatureCraftIds: [
      'mysore-gesso-painting',
      'channapatna-wooden-elephant',
      'mysore-crepe-silk-saree',
      'dhokra-bell-metal-deer',
      'hoysala-stone-carving',
      'ilkal-tope-teni-saree',
      'channapatna-wooden-chariot'
    ],
    featuredArtisanIds: ['syed-channapatna', 'narasimha-bidri'],
    culturalHighlights: [
      {
        title: 'Mysore Painting',
        category: 'Painting',
        description: 'Traditional classical South Indian painting with gesso gold leaf relief depicting sacred deities.',
        iconName: 'Sparkles'
      },
      {
        title: 'Channapatna Toys',
        category: 'Wooden Craft',
        description: 'Turned ivory wood toys lacquered with natural organic vegetable dyes from the Land of Toys.',
        iconName: 'Crown'
      },
      {
        title: 'Mysore Silk',
        category: 'Textile',
        description: 'Pure royal mulberry silk woven with authentic gold zari created under the patronage of the Wadiyar dynasty.',
        iconName: 'Scroll'
      },
      {
        title: 'Dhokra Art',
        category: 'Metal',
        description: 'Ancient lost-wax bell metal casting producing rustic folk and tribal animal iconography.',
        iconName: 'Shield'
      },
      {
        title: 'Stone Carving',
        category: 'Temple Art',
        description: 'Intricately chiseled chloritic schist soapstone sculptures inspired by Belur and Halebidu temples.',
        iconName: 'Columns'
      },
      {
        title: 'Ilkal Saree',
        category: 'Textile',
        description: 'Century-old handwoven textile renowned for its Kasuti embroidery and distinctive red-white Tope Teni pallu.',
        iconName: 'Sparkles'
      }
    ],
    giCount: 47,
    artisanCount: 31000,
    stickers: [
      {
        id: 'mysore-gesso-painting',
        name: 'Mysore Painting',
        category: 'Painting',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Mysore Palace Workshops',
        tag: 'GI #029 • GOLD GESSO',
        rotationClass: '-rotate-3',
        description: 'Traditional gesso relief painting coated with pure 22-karat gold foil depicting Goddess Lakshmi.'
      },
      {
        id: 'channapatna-wooden-elephant',
        name: 'Channapatna Toys',
        category: 'Wooden Craft',
        image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Channapatna, Ramanagara',
        tag: 'GI #004 • LACQUERED ELEPHANT',
        rotationClass: '-rotate-2',
        description: 'Hand-turned Wrightia tinctoria softwood finished with glossy vegetable dyes and shellac polish.'
      },
      {
        id: 'mysore-crepe-silk-saree',
        name: 'Mysore Silk',
        category: 'Textile',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Mysore Silk Weaving Factory',
        tag: 'GI #001 • PURE CREPE SILK',
        rotationClass: '-rotate-3',
        description: 'Regal crepe de chine mulberry silk hallmarked with 0.65% pure gold zari borders.'
      },
      {
        id: 'dhokra-bell-metal-deer',
        name: 'Dhokra Art',
        category: 'Metal',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Nagaland & Karnataka Border Guilds',
        tag: 'GI #218 • BELL METAL DEER',
        rotationClass: 'rotate-3',
        description: 'Lost-wax non-ferrous metal casting creating an ornate spiral-horned brass deer sculpture.'
      },
      {
        id: 'hoysala-stone-carving',
        name: 'Stone Carving',
        category: 'Temple Art',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Shivarapatna & Belur',
        tag: 'GI #224 • HOYSALA SOAPSTONE',
        rotationClass: 'rotate-2',
        description: 'Exquisitely carved soapstone bust of a celestial temple maiden carved with microscopic chisels.'
      },
      {
        id: 'ilkal-tope-teni-saree',
        name: 'Ilkal Saree',
        category: 'Textile',
        image: 'https://images.unsplash.com/photo-1609137144822-4a004eb7c9a4?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Ilkal, Bagalkot',
        tag: 'GI #043 • TOPE TENI PALLU',
        rotationClass: '-rotate-2',
        description: 'Cotton-silk handwoven saree distinctive for its red-and-white Kasuti temple border and interlocking Tope Teni pallu.'
      },
      {
        id: 'channapatna-wooden-chariot',
        name: 'Channapatna Toys',
        category: 'Wooden Craft',
        image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Channapatna Crafts Guild',
        tag: 'GI #004 • LACQUER CHARIOT',
        rotationClass: 'rotate-1',
        description: 'Multi-color turned lacquer chariot pulled by twin wooden horses with royal charioteer.'
      }
    ]
  },

  // ==========================================
  // 4. ANDHRA PRADESH (South)
  // ==========================================
  {
    id: 'IN-AP',
    slug: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    capital: 'Amaravati',
    zone: 'South',
    tagLine: 'Where bamboo pens sketch divine epics in milk and Etikoppaka seeds turn lacquer into ivory sheen.',
    culturalStory: 'Carrying the golden legacy of the Vijayanagara and Kakatiya dynasties, Andhra craftsmanship thrives in Srikalahasti temple murals, Machilipatnam kalamkari block prints, Kondapalli softwood toys, and Etikoppaka round lacquer turnings.',
    accentColor: '#8C2D19', // Burnt Brick
    secondaryColor: '#E0A96D', // Turmeric Ochre
    motifName: 'Kalamkari Tree of Life & Peacock Arch',
    motifSvg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'srikalahasti-kalamkari-tree-of-life',
      'kondapalli-wooden-toys',
      'etikoppaka-lacquer-craft',
      'uppada-jamdani-saree'
    ],
    featuredArtisanIds: ['lakshmaiah-kalamkari'],
    culturalHighlights: [
      {
        title: 'Srikalahasteeswara Temple Riverbed',
        category: 'Sacred Art Lineage',
        description: 'Swarnamukhi riverbanks where master Kalamkari artists wash organic mordants and Buffalo milk treated cotton.',
        iconName: 'Droplets'
      },
      {
        title: 'Lepakshi Veerabhadra Temple',
        category: 'Monuments & Frescoes',
        description: '16th-century Vijayanagara engineering wonder famous for the Hanging Pillar and India’s largest monolithic Nandi.',
        iconName: 'Landmark'
      },
      {
        title: 'Kondapalli Fort & Toy Guilds',
        category: 'Folk Heritage',
        description: 'Tella Poniki softwood carving clusters producing the iconic village bullock carts and Dasavatara sets.',
        iconName: 'Trees'
      }
    ],
    giCount: 21,
    artisanCount: 26000,
    stickers: [
      {
        id: 'srikalahasti-kalamkari-tree-of-life',
        name: 'Srikalahasti Kalamkari',
        category: 'Paintings & Art',
        image: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Srikalahasti, Tirupati',
        tag: 'GI #024 • KALAM DRAWING',
        rotationClass: '-rotate-3',
        description: 'Hand-drawn with bamboo reed pens using natural tamarind seed dye, madder root, and buffalo milk mordant.'
      },
      {
        id: 'etikoppaka-lacquer-craft',
        name: 'Etikoppaka Lacquer Toy',
        category: 'Woodwork & Lacquer',
        image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Etikoppaka, Visakhapatnam',
        tag: 'GI #087 • NATURAL SEED DYE',
        rotationClass: 'rotate-4',
        description: 'Turned on hand lathes from Ankudu wood and burnished with Mogali plant leaves and pure beeswax.'
      }
    ]
  },

  // ==========================================
  // 5. TELANGANA (South)
  // ==========================================
  {
    id: 'IN-TG',
    slug: 'telangana',
    name: 'Telangana',
    capital: 'Hyderabad',
    zone: 'South',
    tagLine: 'Where mathematical double-ikat aligns on the loom and Nirmal teak glows with herbal lacquer.',
    culturalStory: 'From the Qutb Shahi courtyards to the Kakatiya temple arches of Warangal, Telangana crafts embody mathematical precision. Pochampally Ikat master weavers map warp and weft before dyeing, Cheriyal artists paint ballad scrolls on tamarind-coated khadi, and Pembarthi sheet metal workers beat brass into sacred emblems.',
    accentColor: '#9C27B0', // Royal Nizam Purple
    secondaryColor: '#F59E0B', // Kakatiya Gold
    motifName: 'Pochampally Ikat Rhombus & Kakatiya Toranam',
    motifSvg: 'M12 2L2 12l10 10 10-10L12 2zm0 4l6 6-6 6-6-6 6-6z',
    heroImage: 'https://images.unsplash.com/photo-1609137144822-4a004eb7c9a4?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'pochampally-ikat-patola-saree',
      'cheriyal-scroll-painting',
      'nirmal-lacquer-craft',
      'pembarthi-metal-craft'
    ],
    featuredArtisanIds: ['mallesh-ikat'],
    culturalHighlights: [
      {
        title: 'Warangal Kakatiya Kala Thoranam',
        category: 'Heritage Architecture',
        description: 'Monumental 12th-century stone archway serving as the timeless cultural emblem of Telangana arts.',
        iconName: 'Landmark'
      },
      {
        title: 'Charminar & Laad Bazaar Lac Bangles',
        category: 'Nizam Craft Quarter',
        description: 'Centuries-old stone bazaar where hereditary craftsmen embed mirror foil and glass into molten natural lac.',
        iconName: 'Crown'
      }
    ],
    giCount: 17,
    artisanCount: 18500,
    stickers: [
      {
        id: 'pochampally-ikat-patola-saree',
        name: 'Pochampally Double-Ikat',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Bhoodan Pochampally, Yadadri',
        tag: 'GI #002 • TELIA RUMAL',
        rotationClass: '-rotate-3',
        description: 'Complex mathematical tie-and-dye weaving where geometric patterns align with sub-millimeter precision.'
      }
    ]
  },

  // ==========================================
  // 6. RAJASTHAN (North)
  // ==========================================
  {
    id: 'IN-RJ',
    slug: 'rajasthan',
    name: 'Rajasthan',
    capital: 'Jaipur',
    zone: 'North',
    tagLine: 'Where royal heritage, vibrant textiles and exquisite crafts come alive in every creation.',
    culturalStory: 'Forged across the golden sands of the Thar Desert, Rajasthani crafts reflect the vibrant defiance of nature through color. The Kachwaha, Rathore, and Sisodia royal courts fostered master guilds who mastered non-clay quartz blue pottery, pure gold-on-glass Thewa secrets, and mud-resist Dabu block prints.',
    accentColor: '#800020', // Royal Marwar Crimson
    secondaryColor: '#AD7C2B', // Antique Gold
    motifName: 'Jharokha Lattice & Floral Buta',
    motifSvg: 'M3 21h18M5 21V7l7-4 7 4v14M9 10a3 3 0 0 1 6 0v4a3 3 0 0 1-6 0v-4z',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'bandhej-fabric-rajasthan',
      'jaipur-blue-pottery-vase',
      'jodhpur-leather-mojari',
      'jaisalmer-wood-carving-camel',
      'udaipur-miniature-painting',
      'bikaner-terracotta-craft'
    ],
    featuredArtisanIds: ['kripal-kumbhakar', 'ramesh-chhipa', 'giriraj-soni'],
    culturalHighlights: [
      {
        title: 'Bandhej (Tie & Dye)',
        category: 'Royal Textile',
        description: 'Vibrant pincered tie-and-dye silk and georgette fabrics dyed in Jaipur and Jodhpur royal courts.',
        iconName: 'Sparkles'
      },
      {
        title: 'Blue Pottery (Jaipur)',
        category: 'Quartz Dough',
        description: 'Clay-free Egyptian dough pottery ground from quartz stone and glass cullet, glazed in cobalt blue.',
        iconName: 'Landmark'
      },
      {
        title: 'Leather Craft (Jodhpur)',
        category: 'Desert Mojari',
        description: 'Hand-stitched leather footwear with silk and copper thread embroidery worn across Marwar.',
        iconName: 'Shield'
      },
      {
        title: 'Wood Carving (Jaisalmer)',
        category: 'Desert Teak',
        description: 'Intricately chiseled desert camels, jharokha brackets, and royal furniture in Rohida and teak wood.',
        iconName: 'Trees'
      },
      {
        title: 'Miniature Painting (Udaipur)',
        category: 'Mewar Fine Art',
        description: 'Intricate single-hair brush court paintings utilizing 24-carat gold leaf and crushed gemstone pigments.',
        iconName: 'Palette'
      },
      {
        title: 'Terracotta Craft (Bikaner)',
        category: 'Earthen Kiln',
        description: 'Red and black clay ritual vessels, water pitchers, and camel figurines fired in desert kilns.',
        iconName: 'Columns'
      }
    ],
    giCount: 38,
    artisanCount: 38000,
    stickers: [
      {
        id: 'bandhej-fabric-rajasthan',
        name: 'Bandhej Fabric (Tie & Dye)',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Jaipur & Jodhpur Guilds',
        tag: 'ROYAL BANDHEJ • TIE & DYE',
        rotationClass: '-rotate-3',
        description: 'Finely knotted silk-cotton fabric dipped in vibrant desert vegetable dyes.'
      },
      {
        id: 'jaipur-blue-pottery-vase',
        name: 'Blue Pottery (Jaipur)',
        category: 'Pottery & Ceramics',
        image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Jaipur Craft Enclave',
        tag: 'GI #005 • QUARTZ GLAZE',
        rotationClass: '-rotate-1',
        description: 'Clay-free Egyptian dough pottery made of ground quartz and glazed in cobalt blue.'
      },
      {
        id: 'jodhpur-leather-mojari',
        name: 'Leather Mojari (Jodhpur)',
        category: 'Leather Craft',
        image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Jodhpur & Nagaur',
        tag: 'HAND-STITCHED MOJARI',
        rotationClass: '-rotate-2',
        description: 'Vegetable-tanned leather footwear embroidered with pure silk and brass zari wires.'
      },
      {
        id: 'jaisalmer-wood-carving-camel',
        name: 'Wood Carving (Jaisalmer)',
        category: 'Woodwork & Lacquer',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Jaisalmer & Barmer',
        tag: 'DESERT TEAK • CAMEL',
        rotationClass: 'rotate-3',
        description: 'Master hand-chiseled desert camel figurines with ceremonial harness reliefs.'
      },
      {
        id: 'udaipur-miniature-painting',
        name: 'Miniature Painting (Udaipur)',
        category: 'Paintings & Art',
        image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Udaipur City Palace Guilds',
        tag: 'MEWAR ROYAL MINIATURE',
        rotationClass: 'rotate-2',
        description: 'Traditional miniature court portraits painted with squirrel hair brushes and 24K gold foil.'
      },
      {
        id: 'bikaner-terracotta-craft',
        name: 'Terracotta Craft (Bikaner)',
        category: 'Pottery & Ceramics',
        image: 'https://images.unsplash.com/photo-1609137144822-4a004eb7c9a4?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Bikaner Desert Potters',
        tag: 'KILN FIRED • PAINTED EARTH',
        rotationClass: '-rotate-2',
        description: 'White-painted terracotta urns and pots fired with indigenous Thar sand clay.'
      }
    ]
  },

  // ==========================================
  // 7. GUJARAT (West)
  // ==========================================
  {
    id: 'IN-GJ',
    slug: 'gujarat',
    name: 'Gujarat',
    capital: 'Gandhinagar',
    zone: 'West',
    tagLine: 'Where vibrant textiles, intricate mirror work and timeless crafts tell stories of resilience, tradition and artistry.',
    culturalStory: 'From the salt flats of the Rann of Kutch to the ancient trading ports of Patan, Gujarat’s craft history is one of unmatched technical precision. The 8-century-old Salvi Patola technique weaves both sides identical, while the Khatri masters of Nirona keep the world’s only surviving Roghan castor art alive.',
    accentColor: '#9E2A2B', // Kutch Rust / Terracotta
    secondaryColor: '#DDA15E', // Kutch Clay
    motifName: 'Ajrakh Jali & Bandhani Constellation',
    motifSvg: 'M12 2l3 7h7l-5.5 4.5 2 7.5-6.5-5-6.5 5 2-7.5L2 9h7z',
    heroImage: '/assets/states/gujarat/hero.jpg',
    signatureCraftIds: [
      'kutch-mirrorwork-embroidery',
      'gujarat-dhokra-art',
      'kutch-bandhani-sari',
      'patan-patola-double-ikat',
      'somnath-wood-carving',
      'gujarat-terracotta-craft'
    ],
    featuredArtisanIds: ['abdul-gafur-khatri', 'paresh-salvi'],
    culturalHighlights: [
      {
        title: 'Kutch Embroidery',
        category: 'Mirrorwork & Needle',
        description: 'Nomadic Rabari and Ahir tribal mirrorwork embroidery executing vibrant silk chain-stitches.',
        iconName: 'Sparkles'
      },
      {
        title: 'Bandhani (Tie & Dye)',
        category: 'Sacred Resist',
        description: 'Tens of thousands of fingernail-pinched knots hand-tied with glass thread before dip-dyeing.',
        iconName: 'Palette'
      },
      {
        title: 'Patola Weaving',
        category: 'Double-Ikat Silk',
        description: 'Mathematical double-ikat pure silk sarees taking 6 months of warp and weft alignment in Patan.',
        iconName: 'Scroll'
      },
      {
        title: 'Wood Carving (Somnath)',
        category: 'Temple Teak',
        description: 'Solanki temple architecture inspired relief panels, wooden shrines, and carved doors.',
        iconName: 'Columns'
      },
      {
        title: 'Terracotta Craft',
        category: 'Sacred Clay',
        description: 'Whimsical ritual animal figurines, clay horses, and water vessels sculpted by Gujarati potters.',
        iconName: 'Landmark'
      },
      {
        title: 'Mata ni Pachedi',
        category: 'Shrine Textile',
        description: 'Devotional cloth canopies painted with bamboo pens and block-printed with natural red and black iron pigments.',
        iconName: 'Shield'
      }
    ],
    giCount: 22,
    artisanCount: 34000,
    stickers: [
      {
        id: 'kutch-mirrorwork-embroidery',
        name: 'Kutch Embroidery',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Bhujodi & Mandvi, Kutch',
        tag: 'GI #244 • MIRRORWORK',
        rotationClass: '-rotate-3',
        description: 'Traditional mirror-studded hand embroidery stitched by pastoral Rabari and Mutwa craftswomen.'
      },
      {
        id: 'gujarat-dhokra-art',
        name: 'Dhokra Art',
        category: 'Metalwork & Bronze',
        image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Chhota Udaipur Tribal Guilds',
        tag: 'LOST-WAX BRASS',
        rotationClass: '-rotate-1',
        description: 'Tribal non-ferrous brass metal casting creating stylized camel, elephant, and horse icons.'
      },
      {
        id: 'kutch-bandhani-sari',
        name: 'Bandhani (Tie & Dye)',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1609137144822-4a004eb7c9a4?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Jamnagar & Bhuj',
        tag: 'GI #244 • TIE & DYE',
        rotationClass: '-rotate-2',
        description: 'Fine silk-cotton fabric pinch-tied into thousands of micro-dots creating kaleidoscope patterns.'
      },
      {
        id: 'patan-patola-double-ikat',
        name: 'Patola Weaving',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Patan Royal Guilds',
        tag: 'GI #232 • 800-YR LINEAGE',
        rotationClass: 'rotate-3',
        description: 'Reversible double-ikat silk saree that never fades, taking 6 months of mathematical alignment.'
      },
      {
        id: 'somnath-wood-carving',
        name: 'Wood Carving (Somnath)',
        category: 'Woodwork & Lacquer',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Prabhas Patan & Somnath',
        tag: 'SOLANKI WOODCRAFT',
        rotationClass: 'rotate-2',
        description: 'Intricately relief-carved teakwood panels depicting divine processions, elephants and peacocks.'
      },
      {
        id: 'gujarat-terracotta-craft',
        name: 'Terracotta Craft',
        category: 'Pottery & Ceramics',
        image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Poshina & Kutch Potters',
        tag: 'SACRED EARTHENWARE',
        rotationClass: '-rotate-2',
        description: 'Hand-sculpted votive clay figurines and ceremonial pottery painted in natural white lime motifs.'
      }
    ]
  },

  // ==========================================
  // 8. MAHARASHTRA (West)
  // ==========================================
  {
    id: 'IN-MH',
    slug: 'maharashtra',
    name: 'Maharashtra',
    capital: 'Mumbai',
    zone: 'West',
    tagLine: 'Where forts, folk art and fine craftsmanship come together in timeless traditions.',
    culturalStory: 'From the Sahyadri mountain caves of Ajanta to the Godavari riverbanks in Yeola, Maharashtra preserves indigenous tribal geometry and royal Maratha court textiles. Warli rice paste murals connect humans to mother earth, while Paithani pure gold brocades weave kaleidoscopic shot colors.',
    accentColor: '#B45309', // Terracotta Ochre
    secondaryColor: '#047857', // Paithani Emerald
    motifName: 'Warli Tarpa Circle & Bangadi Mor Peacock',
    motifSvg: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z',
    heroImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'paithani-silk-saree',
      'warli-rice-paste-tarpa-painting',
      'kolhapuri-leather-chappal',
      'terracotta-clay-pottery',
      'tambat-brass-copper-work',
      'wada-wood-carving',
      'maharashtrian-pagadi-pheta'
    ],
    featuredArtisanIds: ['dinesh-warli', 'kalyani-paithani'],
    culturalHighlights: [
      {
        title: 'Paithani',
        category: 'Silk Saree',
        description: 'Centuries-old royal handloom silk woven with solid gold zari pallu and kaleidoscopic peacock motifs.',
        iconName: 'Scroll'
      },
      {
        title: 'Warli Art',
        category: 'Tribal Painting',
        description: 'Geometric tribal murals painted with white rice paste celebrating harvest, mother earth and Tarpa dance.',
        iconName: 'Sparkles'
      },
      {
        title: 'Kolhapuri Chappal',
        category: 'Leather Footwear',
        description: 'Vegetable-tanned bag-tanned pure leather handcrafted braided sandals made in historic Kolhapur.',
        iconName: 'Footprints'
      },
      {
        title: 'Terracotta Crafts',
        category: 'Clay',
        description: 'Rustic earthenware pottery painted with indigenous sacred white patterns and geometric borders.',
        iconName: 'Flower2'
      },
      {
        title: 'Brass & Copper Work',
        category: 'Metal',
        description: 'Hand-beaten Tambat Matharkam metal vessels, Samai lamps and ritual pooja thalis.',
        iconName: 'Hammer'
      },
      {
        title: 'Wada Architecture',
        category: 'Wood Carving',
        description: 'Carved teakwood pillars, arches and brackets defining the historic Peshwa-era courtyard residences.',
        iconName: 'Landmark'
      }
    ],
    giCount: 34,
    artisanCount: 29000,
    stickers: [
      {
        id: 'paithani-silk-saree',
        name: 'Paithani Saree',
        category: 'Silk',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Yeola & Paithan, Nashik',
        tag: 'GI #085 • BANGADI MOR',
        rotationClass: '-rotate-3',
        description: 'Regal handloom tapestry woven with kaleidoscopic purple silk and pure gold zari peacock pallu.'
      },
      {
        id: 'warli-rice-paste-tarpa-painting',
        name: 'Warli Painting',
        category: 'Tribal Art',
        image: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Dahanu, Palghar',
        tag: 'GI #184 • TRIBAL RICE',
        rotationClass: '-rotate-2',
        description: 'Sacred circle and triangle geometry executed with rice paste and binder on earthen mud walls.'
      },
      {
        id: 'kolhapuri-leather-chappal',
        name: 'Kolhapuri Chappal',
        category: 'Leather',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Kolhapur Heritage Alleys',
        tag: 'GI #191 • TANNED LEATHER',
        rotationClass: '-rotate-4',
        description: 'Pure bag-tanned buffalo leather slippers hand-stitched with cord and braided leather straps.'
      },
      {
        id: 'terracotta-clay-pottery',
        name: 'Terracotta Pottery',
        category: 'Clay',
        image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Kumbharwada, Kolhapur',
        tag: 'GI CRAFT • EARTHENWARE',
        rotationClass: 'rotate-3',
        description: 'Hand-thrown earthen clay pots and ceremonial water vessels adorned with white lime etchings.'
      },
      {
        id: 'tambat-brass-copper-work',
        name: 'Brass & Copper Work',
        category: 'Metal',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Tambat Ali, Pune',
        tag: 'GI #254 • TAMBAT CRAFT',
        rotationClass: 'rotate-2',
        description: 'Hand-hammered Matharkam brass pooja thali set and tiered traditional Samai ceremonial lamp.'
      },
      {
        id: 'wada-wood-carving',
        name: 'Wood Carving',
        category: 'Wada Architecture',
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Wai & Pune Heritage Guilds',
        tag: 'TEAKWOOD HERITAGE',
        rotationClass: '-rotate-2',
        description: 'Deep relief-carved teakwood window frame and brackets showcasing classical Maratha motifs.'
      },
      {
        id: 'maharashtrian-pagadi-pheta',
        name: 'Maharashtrian Pagadi',
        category: 'Traditional Headgear',
        image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Pune & Kolhapur',
        tag: 'HERITAGE PHETA',
        rotationClass: 'rotate-1',
        description: 'Saffron-orange pleated ceremonial silk turban worn during royal festivals and Maratha honors.'
      }
    ]
  },

  // ==========================================
  // 9. WEST BENGAL (East)
  // ==========================================
  {
    id: 'IN-WB',
    slug: 'west-bengal',
    name: 'West Bengal',
    capital: 'Kolkata',
    zone: 'East',
    tagLine: 'Where culture, art and tradition flow through every handcrafted creation.',
    culturalStory: 'Rooted in the red laterite soil of Rarh and the fertile Ganges delta, Bengal crafts bridge sacred folk devotion with literary sophistication. Bankura terracotta kilns fire mythic clay horses, rural women embroider generational Kantha quilts, and Bishnupur pit looms recreate scenes of the Mahabharata.',
    accentColor: '#1B365D', // Royal Bengal Indigo
    secondaryColor: '#D97706', // Shantiniketan Ochre
    motifName: 'Alpana Floor Lotus & Terracotta Horse Neck',
    motifSvg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z',
    heroImage: '/assets/states/west-bengal/hero.jpg',
    signatureCraftIds: [
      'tant-saree-bengal',
      'bankura-terracotta-horse',
      'dokra-art-jute-craft',
      'shantiniketan-kantha-stole',
      'shola-craft-bengal',
      'kolkata-handicrafts-brass'
    ],
    featuredArtisanIds: ['gokul-kumbhakar'],
    culturalHighlights: [
      {
        title: 'Kolkata (Traditional Arts)',
        category: 'Heritage Brass & Clay',
        description: 'Kumartuli clay sculptors and brass casting artisans carrying forward centuries-old guild heritage.',
        iconName: 'Landmark'
      },
      {
        title: 'Nakshi (Kantha Embroidery)',
        category: 'Running Stitch',
        description: 'Pastoral storytelling stitched with fine running threads onto soft pure tussar silk quilts.',
        iconName: 'Scroll'
      },
      {
        title: 'Terracotta Craft (Bishnupur)',
        category: 'Malla Earth',
        description: 'Panchmura terracotta kilns crafting monumental hollow-fired horses with arched necks and erect ears.',
        iconName: 'Columns'
      },
      {
        title: 'Shola Craft (Traditional)',
        category: 'Pith Carving',
        description: 'Sponge-like white wetland reed pith hand-sliced into delicate bridal headpieces, flowers and deities.',
        iconName: 'Sparkles'
      },
      {
        title: 'Dokra Art (Tribal Metal)',
        category: 'Lost-Wax Cast',
        description: 'Ancient non-ferrous lost-wax bronze casting by Bikna metalsmiths shaping village owl and elephant totems.',
        iconName: 'Shield'
      },
      {
        title: 'Jute Craft (Sundarban)',
        category: 'Golden Fiber',
        description: 'Natural organic golden jute fiber woven into durable eco-friendly embroidered totes and baskets.',
        iconName: 'Trees'
      }
    ],
    giCount: 27,
    artisanCount: 42000,
    stickers: [
      {
        id: 'tant-saree-bengal',
        name: 'Tant Saree (Traditional Weave)',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Shantipur & Phulia',
        tag: 'HANDLOOM TANT • LAAL PAAD',
        rotationClass: '-rotate-3',
        description: 'Featherlight pure cotton handloom saree with classic red border woven on pit looms.'
      },
      {
        id: 'bankura-terracotta-horse',
        name: 'Terracotta Craft (Bishnupur)',
        category: 'Pottery & Ceramics',
        image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Panchmura, Bankura',
        tag: 'GI #116 • HOLLOW FIRED',
        rotationClass: '-rotate-1',
        description: 'Monumental hollow terracotta horse with erect ears and arched neck, symbol of Indian folk art.'
      },
      {
        id: 'dokra-art-jute-craft',
        name: 'Dokra Art (Tribal Metal)',
        category: 'Metalwork & Bronze',
        image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Bikna & Dariyapur Tribal Guilds',
        tag: 'GI #060 • LOST-WAX BRASS',
        rotationClass: '-rotate-2',
        description: 'Lost-wax casting using beeswax threads to shape ancient rustic tribal deities and musicians.'
      },
      {
        id: 'shantiniketan-kantha-stole',
        name: 'Nakshi Kantha (Embroidery)',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Bolpur, Birbhum',
        tag: 'GI #027 • NAKSHI STITCH',
        rotationClass: 'rotate-3',
        description: 'Generational running stitch embroidery turning pure tussar silk into embroidered pastoral folklore.'
      },
      {
        id: 'shola-craft-bengal',
        name: 'Shola Craft (Traditional)',
        category: 'Woodwork & Lacquer',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Kumartuli & Burdwan',
        tag: 'WHITE PITH CARVING',
        rotationClass: 'rotate-2',
        description: 'Ivory-white dried plant core sliced into intricate wedding mukuts, garlands, and filigree flowers.'
      },
      {
        id: 'kolkata-handicrafts-brass',
        name: 'Kolkata Handicrafts (Traditional Arts)',
        category: 'Metalwork & Bronze',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Kolkata Artisan Quarters',
        tag: 'SACRED BRASS DHUNUCHI',
        rotationClass: '-rotate-2',
        description: 'Hand-engraved brass incense burners and ritual utensils crafted for temple devotion and celebration.'
      }
    ]
  },

  // ==========================================
  // 10. ODISHA (East)
  // ==========================================
  {
    id: 'IN-OD',
    slug: 'odisha',
    name: 'Odisha',
    capital: 'Bhubaneswar',
    zone: 'East',
    tagLine: 'Where ancient temples, coastal beauty and vibrant crafts create a timeless legacy.',
    culturalStory: 'Centred around the Jagannath Temple at Puri and the sun-chariot of Konark, Odisha’s artistic lineage is inextricably linked with sacred devotion. Raghurajpur chitrakars prepare cloth canvas from tamarind seed paste, while Cuttack silversmiths twist pure silver wire thinner than human hair.',
    accentColor: '#78350F', // Konark Stone Ochre
    secondaryColor: '#B91C1C', // Pattachitra Vermillion
    motifName: 'Konark Sun Wheel & Pattachitra Fish Eyes',
    motifSvg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'raghurajpur-pattachitra-cloth',
      'pipili-applique-work-chandua',
      'kantilo-brass-bell-metal',
      'konark-stone-carving-wheel',
      'dhenkanal-dhokra-tribal-metal',
      'sambalpuri-ikat-handloom-weave',
      'cuttack-tarakasi-silver-filigree'
    ],
    featuredArtisanIds: ['bhaskar-chitrakar'],
    culturalHighlights: [
      {
        title: 'Pattachitra',
        category: 'Painting',
        description: 'Sacred mythological cloth paintings created using fine bamboo styluses and natural stone-organic pigments.',
        iconName: 'Sparkles'
      },
      {
        title: 'Applique Work',
        category: 'Chandua',
        description: 'Vibrant geometric and floral patchwork textiles traditionally crafted for the sacred Rath Yatra in Pipili.',
        iconName: 'Sun'
      },
      {
        title: 'Brass & Bell Metal',
        category: 'Brassware',
        description: 'Traditional metal casting and hand-beaten Kansa ware crafted along the Mahanadi river basin.',
        iconName: 'Hammer'
      },
      {
        title: 'Silver Filigree',
        category: 'Tarakasi',
        description: 'Century-old micro-fine silver wire filigree jewelry and ceremonial ornaments crafted in historic Cuttack.',
        iconName: 'Sparkles'
      },
      {
        title: 'Stone Carving',
        category: 'Temple Art',
        description: 'Traditional Kalinga architectural masonry carving sandstones and soapstones inspired by Konark Sun Temple.',
        iconName: 'Columns'
      },
      {
        title: 'Dhokra Art',
        category: 'Tribal Metal',
        description: 'Ancient lost-wax bell metal casting celebrating tribal ancestors, musicians and forest wildlife.',
        iconName: 'Shield'
      }
    ],
    giCount: 25,
    artisanCount: 31000,
    stickers: [
      {
        id: 'raghurajpur-pattachitra-cloth',
        name: 'Pattachitra',
        category: 'Painting',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Raghurajpur Heritage Village, Puri',
        tag: 'GI #117 • NATURAL PIGMENT',
        rotationClass: '-rotate-3',
        description: 'Traditional canvas painted with conch-shell white, lamp black and organic vegetable dyes.'
      },
      {
        id: 'pipili-applique-work-chandua',
        name: 'Applique Work',
        category: 'Chandua',
        image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Pipili, Puri',
        tag: 'GI #086 • PIPILI CANOPY',
        rotationClass: '-rotate-2',
        description: 'Layered cloth patchwork canopy embroidered with mirrors and motifs for temple processions.'
      },
      {
        id: 'kantilo-brass-bell-metal',
        name: 'Brass & Bell Metal',
        category: 'Brassware',
        image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Kantilo & Balakati',
        tag: 'GI #220 • KANTILO BRASS',
        rotationClass: '-rotate-3',
        description: 'Sacred standing deity icon and ceremonial bell metal vessel cast with ancient sand-mould technique.'
      },
      {
        id: 'konark-stone-carving-wheel',
        name: 'Stone Carving',
        category: 'Temple Art',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Konark & Puri Guilds',
        tag: 'GI #125 • PURI STONE',
        rotationClass: 'rotate-2',
        description: 'Intricately chiseled sandstone replica of the sacred 24-spoke Konark Sun Chariot Wheel.'
      },
      {
        id: 'dhenkanal-dhokra-tribal-metal',
        name: 'Dhokra Art',
        category: 'Tribal Metal',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Sadeibarani, Dhenkanal',
        tag: 'GI #221 • LOST WAX',
        rotationClass: 'rotate-3',
        description: 'Primitive lost-wax casting of a tribal guardian holding staff and traditional ceremonial bow.'
      },
      {
        id: 'sambalpuri-ikat-handloom-weave',
        name: 'Sambalpuri Weave',
        category: 'Textile',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Bargarh & Sambalpur',
        tag: 'GI #022 • BANDHA IKAT',
        rotationClass: '-rotate-2',
        description: 'Handwoven tie-and-dye Ikat fabric featuring traditional Shankha, Chakra and floral motifs.'
      },
      {
        id: 'cuttack-tarakasi-silver-filigree',
        name: 'Silver Filigree',
        category: 'Tarakasi',
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Chandi Chowk, Cuttack',
        tag: 'GI #241 • CUTTACK SILVER',
        rotationClass: 'rotate-1',
        description: 'Spiderweb-delicate pure silver wire drawn and soldered into elaborate circular medallion earrings.'
      }
    ]
  },

  // ==========================================
  // 11. UTTAR PRADESH (North)
  // ==========================================
  {
    id: 'IN-UP',
    slug: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    capital: 'Lucknow',
    zone: 'North',
    tagLine: 'Where timeless traditions, sacred heritage and exquisite craftsmanship come together.',
    culturalStory: 'From the sacred ghats of Varanasi to the Nawabi baithaks of Lucknow, Uttar Pradesh crafts celebrate imperial court luxury. Banaras masters interlock pure gold zari with microscopic Kadhwa technique, while Lucknowi women execute 32 distinct shadow and embossed stitches in Chikankari.',
    accentColor: '#1E3A8A', // Banaras Royal Blue
    secondaryColor: '#D97706', // Zari Gold
    motifName: 'Chikankari Paisley & Banarasi Shikargah Jaal',
    motifSvg: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
    heroImage: '/assets/states/uttar-pradesh/hero.jpg',
    signatureCraftIds: [
      'banarasi-kadhwa-gold-zari-saree',
      'zardozi-embroidery-gold-thread',
      'varanasi-wooden-lacquer-toys',
      'gorakhpur-terracotta-craft',
      'farrukhabad-ajrak-block-printing',
      'lucknow-chikankari-shadow-work',
      'moradabad-brass-utensils-craft'
    ],
    featuredArtisanIds: ['anand-kadhwa', 'sakina-chikankari'],
    culturalHighlights: [
      {
        title: 'Banarasi Saree',
        category: 'Textile',
        description: 'Finest mulberry silk handwoven with pure gold and silver brocade zari along the holy ghats of Kashi.',
        iconName: 'Scroll'
      },
      {
        title: 'Zari & Zardozi',
        category: 'Embroidery',
        description: 'Heavy Mughal imperial embroidery using metallic bullion wires, pearls and precious stones.',
        iconName: 'Sparkles'
      },
      {
        title: 'Wooden Toys',
        category: 'Wood Craft',
        description: 'Traditional lathe-turned and carved wooden animals and mythological toys painted in bright lacquers.',
        iconName: 'Crown'
      },
      {
        title: 'Brass & Bell Metal',
        category: 'Metal',
        description: 'Moradabad engraved brassware, ceremonial thalis, lidded vases and traditional sacred metal vessels.',
        iconName: 'Hammer'
      },
      {
        title: 'Terracotta Craft',
        category: 'Clay',
        description: 'Ornamental hollow earthenware elephants, sacred bells and pots made by Gorakhpur potters.',
        iconName: 'Flower2'
      },
      {
        title: 'Ajrak/Block Printing',
        category: 'Textile',
        description: 'Heritage hand block printing on natural fabrics using hand-carved Sheesham wooden blocks and indigo dyes.',
        iconName: 'Sparkles'
      }
    ],
    giCount: 48,
    artisanCount: 54000,
    stickers: [
      {
        id: 'banarasi-kadhwa-gold-zari-saree',
        name: 'Banarasi Saree',
        category: 'Textile',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Madanpura, Varanasi',
        tag: 'GI #099 • KADHWA SILK',
        rotationClass: '-rotate-3',
        description: 'Every gold motif individually hand-embroidered on the loom with zero loose floating threads.'
      },
      {
        id: 'zardozi-embroidery-gold-thread',
        name: 'Zardozi Work',
        category: 'Embroidery',
        image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Badaun & Bareilly',
        tag: 'GI #225 • GOLD METALLIC THREAD',
        rotationClass: '-rotate-2',
        description: 'Elaborate gold wire bullion embroidery on rich crimson velvet showcasing royal pastoral and animal jaal.'
      },
      {
        id: 'varanasi-wooden-lacquer-toys',
        name: 'Wooden Toys',
        category: 'Wood Craft',
        image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Khojwa & Varanasi',
        tag: 'GI #241 • VARANASI LACQUER',
        rotationClass: '-rotate-4',
        description: 'Turned Koriya softwood painted into vibrant ceremonial elephants and horses with non-toxic lac.'
      },
      {
        id: 'gorakhpur-terracotta-craft',
        name: 'Terracotta Craft',
        category: 'Clay',
        image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Aurangabad, Gorakhpur',
        tag: 'GI #178 • GORAKHPUR TERRACOTTA',
        rotationClass: 'rotate-3',
        description: 'Earthenware clay jars and sacred votive bull figurines hand-sculpted and fired in subterranean kilns.'
      },
      {
        id: 'farrukhabad-ajrak-block-printing',
        name: 'Ajarak/Block Printing',
        category: 'Textile',
        image: 'https://images.unsplash.com/photo-1609137144822-4a004eb7c9a4?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Farrukhabad Print Guilds',
        tag: 'GI #239 • FARRUKHABAD PRINT',
        rotationClass: 'rotate-2',
        description: 'Indigo and madder hand block printed geometric motifs stamped with intricately carved wood blocks.'
      },
      {
        id: 'lucknow-chikankari-shadow-work',
        name: 'Chikankari',
        category: 'Embroidery',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Chowk, Lucknow',
        tag: 'GI #119 • LUCKNOWI SHADOW WORK',
        rotationClass: '-rotate-2',
        description: 'White-on-white shadow embroidery utilizing Bakhiya and Phanda stitches stretched across embroidery hoop.'
      },
      {
        id: 'moradabad-brass-utensils-craft',
        name: 'Brass Utensils',
        category: 'Metal',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Moradabad Brass City',
        tag: 'GI #138 • MORADABAD BRASSWARE',
        rotationClass: 'rotate-1',
        description: 'Hand-engraved Naqashi brass vessels, lidded kalash, pooja lota and traditional serving spoon set.'
      }
    ]
  },

  // ==========================================
  // 12. ASSAM (North-East)
  // ==========================================
  {
    id: 'IN-AS',
    slug: 'assam',
    name: 'Assam',
    capital: 'Dispur',
    zone: 'North-East',
    tagLine: 'Where verdant landscapes, rich traditions and skilled hands create timeless crafts.',
    culturalStory: 'Nurtured along the Brahmaputra river valley, Assam craftsmanship is rooted in biodiversity. Sualkuchi weavers rear endemic silkworms producing golden Muga silk that outlives its owner, while Majuli island monks mould mythological Sattriya performance masks from bamboo and river silt.',
    accentColor: '#A6192E', // Gamusa Scarlet Red
    secondaryColor: '#C59B27', // Muga Gold
    motifName: 'Rhino Silhouette & Jaapi Conical Sun Hat',
    motifSvg: 'M12 3L2 12h3v8h14v-8h3L12 3zm0 4.5l6 5.5v6H6v-6l6-5.5z',
    heroImage: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'sualkuchi-muga-silk-mekhela',
      'assamese-jaapi-hat',
      'assam-bamboo-cane-basket',
      'dokhona-traditional-dress',
      'assamese-gamosa-towel',
      'sarthebari-bell-metal-kahi'
    ],
    featuredArtisanIds: ['hemchandra-mask'],
    culturalHighlights: [
      {
        title: 'Mekhela Chador (Traditional Dress)',
        category: 'Golden Muga Silk',
        description: 'Endemic wild Muga golden silk two-piece attire handwoven with Kingkhab royal motifs in Sualkuchi.',
        iconName: 'Sparkles'
      },
      {
        title: 'Japi (Traditional Hat)',
        category: 'Conical Sun Hat',
        description: 'Conical headgear woven from tokou leaves and split bamboo, decorated with red and black felt motifs.',
        iconName: 'Sun'
      },
      {
        title: 'Dokhona (Traditional Dress)',
        category: 'Bodo Weaving',
        description: 'Traditional Bodo women woven dress featuring sacred Agor diamond and floral patterns on indigenous looms.',
        iconName: 'Scroll'
      },
      {
        title: 'Bamboo & Cane Crafts',
        category: 'Forest Weave',
        description: 'Sustainable wild bamboo split to hair-thin strips and woven into durable heirloom baskets and tea carriers.',
        iconName: 'Trees'
      },
      {
        title: 'Tea Craft',
        category: 'Valley Leaves',
        description: 'Hand-plucked artisanal orthodox and CTC tea leaf crafts from heritage Brahmaputra river valley estates.',
        iconName: 'Droplets'
      },
      {
        title: 'Bell Metal (Ural & Gamosa Holder)',
        category: 'Sarthebari Alloy',
        description: 'Resonant bell metal dining platters (Kahi), bowls, and ceremonial betel nut holders hand-hammered in Sarthebari.',
        iconName: 'Landmark'
      }
    ],
    giCount: 16,
    artisanCount: 21000,
    stickers: [
      {
        id: 'sualkuchi-muga-silk-mekhela',
        name: 'Mekhela Chador (Traditional Dress)',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Sualkuchi Silk Town',
        tag: 'GI #055 • GOLDEN FIBER',
        rotationClass: '-rotate-3',
        description: 'Naturally golden wild silk harvested from endemic silkworms and woven with sacred motifs.'
      },
      {
        id: 'assamese-jaapi-hat',
        name: 'Japi (Traditional Hat)',
        category: 'Natural Fiber & Grass',
        image: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Nalbari & Barpeta',
        tag: 'TOKOU LEAF WEAVE',
        rotationClass: '-rotate-1',
        description: 'Conical ceremonial sun hat hand-woven from dried Tokou palm leaves and polished cane.'
      },
      {
        id: 'assam-bamboo-cane-basket',
        name: 'Bamboo & Cane Crafts',
        category: 'Natural Fiber & Grass',
        image: '/assets/states/tamil-nadu/bamboo-cane.png',
        originVillage: 'Tezpur & Majuli',
        tag: 'FOREST BAMBOO WEAVE',
        rotationClass: '-rotate-2',
        description: 'Finely sliced bamboo and wild cane storage baskets handwoven by riverside village communities.'
      },
      {
        id: 'dokhona-traditional-dress',
        name: 'Dokhona (Traditional Dress)',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Kokrajhar & Udalguri',
        tag: 'BODO TRADITIONAL WEAVE',
        rotationClass: 'rotate-3',
        description: 'Indigenous Bodo wrap-around dress woven with geometric Agor patterns on bamboo frame looms.'
      },
      {
        id: 'assamese-gamosa-towel',
        name: 'Gamosa (Traditional Towel)',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1609137144822-4a004eb7c9a4?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Barpeta & Jorhat',
        tag: 'GI #198 • SACRED WEAVE',
        rotationClass: 'rotate-2',
        description: 'Pristine white cotton cloth bordered with intricate red woven floral patterns of respect.'
      },
      {
        id: 'sarthebari-bell-metal-kahi',
        name: 'Bell Metal (Ural & Gamosa Holder)',
        category: 'Metalwork & Bronze',
        image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Sarthebari, Barpeta',
        tag: 'GI #124 • ACOUSTIC BRONZE',
        rotationClass: '-rotate-2',
        description: 'Hand-hammered heavy bell-metal traditional platters, water carafes, and ceremonial utensils.'
      }
    ]
  },

  // ==========================================
  // 13. BIHAR (East)
  // ==========================================
  {
    id: 'IN-BR',
    slug: 'bihar',
    name: 'Bihar',
    capital: 'Patna',
    zone: 'East',
    tagLine: 'Where mud courtyard walls celebrate nature and golden Sikki grass weaves the bride’s dowry.',
    culturalStory: 'From the sacred bodhi trees of Gaya to the Mithila plains, Bihar holds thousands of years of uninterrupted ritual art. Village women paint Madhubani sacred line drawings with bamboo twigs, weave golden wild Sikki grass into jewel cases, and embroider narrative Sujuni quilts.',
    accentColor: '#B91C1C', // Madhubani Vermillion
    secondaryColor: '#D97706', // Sikki Gold
    motifName: 'Mithila Lotus & Kohbar Nuptial Mandala',
    motifSvg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'madhubani-mithila-painting',
      'sikki-grass-golden-craft',
      'sujuni-narrative-embroidery',
      'bhagalpur-tussar-silk'
    ],
    featuredArtisanIds: ['bhaskar-chitrakar'],
    culturalHighlights: [
      {
        title: 'Mahabodhi Temple Complex',
        category: 'UNESCO Sacred Ground',
        description: 'Sacred temple in Bodh Gaya where Gautama Buddha attained supreme enlightenment beneath the Bodhi Tree.',
        iconName: 'Landmark'
      },
      {
        title: 'Nalanda Ancient University Ruins',
        category: 'Ancient Academy',
        description: '5th-century residential monastic university that housed 10,000 scholars from across Asia.',
        iconName: 'BookOpen'
      }
    ],
    giCount: 18,
    artisanCount: 26000,
    stickers: [
      {
        id: 'madhubani-mithila-painting',
        name: 'Mithila Madhubani Painting',
        category: 'Paintings & Art',
        image: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Jitwarpur & Ranti, Madhubani',
        tag: 'GI #105 • MITHILA LINE',
        rotationClass: '-rotate-4',
        isDrawing: true,
        description: 'Ritual wall and handmade paper art painted with bamboo twigs and nibs using soot and plant juices.'
      },
      {
        id: 'sikki-grass-golden-craft',
        name: 'Sikki Golden Grass Craft',
        category: 'Natural Fiber & Grass',
        image: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Rampur, Madhubani',
        tag: 'GI #114 • GOLDEN REED',
        rotationClass: 'rotate-3',
        description: 'Wild golden Sikki grass split and coiled with needles into storage boxes and traditional wedding figurines.'
      }
    ]
  },

  // ==========================================
  // 14. MADHYA PRADESH (Central)
  // ==========================================
  {
    id: 'IN-MP',
    slug: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    capital: 'Bhopal',
    zone: 'Central',
    tagLine: 'Where Gond tribal dots bring forest spirits alive and Chanderi looms weave tissue sheer silk.',
    culturalStory: 'In the geographic heart of India, surrounded by ancient Sal forests and the Narmada river, Madhya Pradesh crafts celebrate primal rhythm. Gond tribal artists paint dream-like animal patterns using thousands of delicate dots and lines, while royal Chanderi looms blend silk with gossamer cotton.',
    accentColor: '#831843', // Chanderi Plum
    secondaryColor: '#B45309', // Forest Ochre
    motifName: 'Gond Flying Tree & Khajuraho Temple Carving',
    motifSvg: 'M12 2l3 7h7l-5.5 4.5 2 7.5-6.5-5-6.5 5 2-7.5L2 9h7z',
    heroImage: 'https://images.unsplash.com/photo-1609137144822-4a004eb7c9a4?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'gond-tribal-dot-painting',
      'chanderi-silk-cotton-saree',
      'bagh-woodblock-print',
      'bastar-dhokra-bellmetal'
    ],
    featuredArtisanIds: ['dinesh-warli'],
    culturalHighlights: [
      {
        title: 'Khajuraho Group of Monuments',
        category: 'Chandela Architecture',
        description: '10th-century nagara-style temple complex celebrating the full spectrum of human joy, music and sacred love.',
        iconName: 'Landmark'
      },
      {
        title: 'Bhimbetka Prehistoric Rock Shelters',
        category: 'Paleolithic Art',
        description: '30,000-year-old rock art galleries showing the dawn of human creative expression.',
        iconName: 'Shield'
      }
    ],
    giCount: 22,
    artisanCount: 28000,
    stickers: [
      {
        id: 'gond-tribal-dot-painting',
        name: 'Gond Tribal Dot Painting',
        category: 'Paintings & Art',
        image: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Patangarh, Dindori',
        tag: 'GI #209 • NATURE DOTS',
        rotationClass: '-rotate-3',
        isDrawing: true,
        description: 'Intricate lines and dots depicting birds, sacred trees, and animist forest legends in earth colors.'
      },
      {
        id: 'chanderi-silk-cotton-saree',
        name: 'Chanderi Pure Zari Saree',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Chanderi, Ashoknagar',
        tag: 'GI #006 • SHEER TISSUE',
        rotationClass: 'rotate-4',
        description: 'Feather-light sheer drape handwoven with pure gold zari booties and unglued fine silk threads.'
      }
    ]
  },

  // ==========================================
  // 15. PUNJAB (North)
  // ==========================================
  {
    id: 'IN-PB',
    slug: 'punjab',
    name: 'Punjab',
    capital: 'Chandigarh',
    zone: 'North',
    tagLine: 'Where mustard yellow silk blossoms across coarse khaddar and brass bells ring true.',
    culturalStory: 'Across the five river plains of Punjab, craft is a celebration of joyful abundance. Grandmothers embroider Phulkari floral geometry on homespun indigo and madder cotton, cobblers shape embroidered leather juttis, and Thathera metal masters hammer solid copper and brass with rhythmic cadence.',
    accentColor: '#CA8A04', // Mustard Gold
    secondaryColor: '#991B1B', // Phulkari Red
    motifName: 'Phulkari Bagh Geometric Diamond & Golden Temple Dome',
    motifSvg: 'M12 2L2 12l10 10 10-10L12 2zm0 4l6 6-6 6-6-6 6-6z',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'phulkari-geometric-embroidery',
      'jandiala-guru-brass-craft',
      'punjabi-jutti-leather'
    ],
    featuredArtisanIds: ['sakina-chikankari'],
    culturalHighlights: [
      {
        title: 'Sri Harmandir Sahib (Golden Temple)',
        category: 'Spiritual Sanctum',
        description: 'The holiest shrine of Sikhism in Amritsar, coated with 500kg of pure gold foil leaf.',
        iconName: 'Landmark'
      },
      {
        title: 'Jandiala Guru Thathera Enclave',
        category: 'UNESCO Heritage Craft',
        description: 'India’s only craft inscribed on UNESCO’s Intangible Heritage list for hand-hammered brass metallurgy.',
        iconName: 'Flame'
      }
    ],
    giCount: 8,
    artisanCount: 15000,
    stickers: [
      {
        id: 'phulkari-geometric-embroidery',
        name: 'Punjab Phulkari Dupatta',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Patiala & Amritsar',
        tag: 'GI #111 • SILK ON KHADDAR',
        rotationClass: '-rotate-3',
        description: 'Geometric silk floss embroidery counted thread-by-thread from the reverse side of handloom khaddar.'
      }
    ]
  },

  // ==========================================
  // 16. HARYANA (North)
  // ==========================================
  {
    id: 'IN-HR',
    slug: 'haryana',
    name: 'Haryana',
    capital: 'Chandigarh',
    zone: 'North',
    tagLine: 'Where heavy pit looms weave durable Punja rugs and terracotta hearths shape clay pots.',
    culturalStory: 'From the Kurukshetra plains to the weaver districts of Panipat, Haryana has stood as the weaving engine of northern India. Traditional Punja durries are hand-knotted on upright wooden frames using pure wool and cotton, built to endure for generations.',
    accentColor: '#4D7C0F', // Olive Earth
    secondaryColor: '#B45309', // Terracotta
    motifName: 'Punja Durrie Chevron & Peacock Motif',
    motifSvg: 'M3 21h18M5 21V7l7-4 7 4v14M9 10a3 3 0 0 1 6 0v4a3 3 0 0 1-6 0v-4z',
    heroImage: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'panipat-punja-durrie-rug',
      'jhajjar-pottery-craft'
    ],
    featuredArtisanIds: ['ramesh-chhipa'],
    culturalHighlights: [
      {
        title: 'Surajkund International Crafts Fair',
        category: 'Global Cultural Fair',
        description: 'Annual fair bringing together over 1,000 master artisans and folklorists around an 11th-century sun reservoir.',
        iconName: 'Sun'
      }
    ],
    giCount: 5,
    artisanCount: 14000,
    stickers: [
      {
        id: 'panipat-punja-durrie-rug',
        name: 'Panipat Punja Durrie',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1609137144822-4a004eb7c9a4?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Panipat Weaver Hub',
        tag: 'HANDLOOM DURRIE',
        rotationClass: 'rotate-2',
        description: 'Heavy handloom flat-weave rug woven on pit looms using the heavy iron Punja claw beater.'
      }
    ]
  },

  // ==========================================
  // 17. HIMACHAL PRADESH (North)
  // ==========================================
  {
    id: 'IN-HP',
    slug: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    capital: 'Shimla',
    zone: 'North',
    tagLine: 'Where Himalayan snow sheep yield fine wool and Chamba needles weave double-sided satin.',
    culturalStory: 'Cradled in the Pir Panjal and Dhauladhar pine ranges, Himachal crafts embody mountain warmth. Weavers in Kullu and Kinnaur weave geometric border shawls from pashmina and merino wool, while court artists in Chamba embroider needle paintings where both sides look identical.',
    accentColor: '#1E40AF', // Mountain Indigo
    secondaryColor: '#BE123C', // Kullu Crimson
    motifName: 'Kullu Shawl Geometric Slit & Snow Deodar',
    motifSvg: 'M12 2L2 22h20L12 2zm0 4l6 14H6l6-14z',
    heroImage: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'kullu-handloom-wool-shawl',
      'chamba-rumal-double-embroidery',
      'kangra-miniature-painting'
    ],
    featuredArtisanIds: ['bashir-jan'],
    culturalHighlights: [
      {
        title: 'Kangra Valley Toy Train & Fort',
        category: 'Himalayan Heritage',
        description: 'Ancient mountain citadel overlooking Dharamshala where Kangra school miniature paintings flourished.',
        iconName: 'Mountain'
      }
    ],
    giCount: 11,
    artisanCount: 16500,
    stickers: [
      {
        id: 'kullu-handloom-wool-shawl',
        name: 'Kullu Pure Wool Shawl',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Kullu Valley Weavers',
        tag: 'GI #018 • MERINO WOOL',
        rotationClass: '-rotate-3',
        description: 'Dovetail-tapestry geometric border shawl handwoven with indigenous Himalayan wool yarns.'
      }
    ]
  },

  // ==========================================
  // 18. UTTARAKHAND (North)
  // ==========================================
  {
    id: 'IN-UK',
    slug: 'uttarakhand',
    name: 'Uttarakhand',
    capital: 'Dehradun',
    zone: 'North',
    tagLine: 'Where sacred Aipan rice designs protect thresholds and Ringal bamboo bends with mountain grace.',
    culturalStory: 'Perched along the Garhwal and Kumaon ridges, Uttarakhand crafts reflect high-altitude sacred harmony. Kumaoni women paint red-and-white geometric Aipan symbols across doorsteps, weavers weave soft Thulma wool blankets, and Tamta coppersmiths hammer ceremonial vessels in Almora.',
    accentColor: '#9F1239', // Geru Red
    secondaryColor: '#D97706', // Himalayan Pine
    motifName: 'Aipan Rice Flour Floor Glyph & Ringal Weave',
    motifSvg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
    heroImage: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'kumaoni-aipan-ritual-art',
      'ringal-bamboo-craft',
      'thulma-himalayan-blanket'
    ],
    featuredArtisanIds: ['meena-ammal'],
    culturalHighlights: [
      {
        title: 'Almora Tamta Copper Enclave',
        category: 'Vedic Metallurgical Lineage',
        description: 'Centuries-old coppersmith quarter crafting sacred water vessels and temple bells for the Kedarnath trail.',
        iconName: 'Flame'
      }
    ],
    giCount: 9,
    artisanCount: 12000,
    stickers: [
      {
        id: 'kumaoni-aipan-ritual-art',
        name: 'Kumaoni Aipan Art',
        category: 'Paintings & Art',
        image: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Almora & Nainital, Kumaon',
        tag: 'GI #203 • SACRED GERU',
        rotationClass: 'rotate-4',
        isDrawing: true,
        description: 'Sacred geomantic diagrams painted with wet rice flour paste (Biswar) on red ochre mud surfaces.'
      }
    ]
  },

  // ==========================================
  // 19. JAMMU & KASHMIR (North)
  // ==========================================
  {
    id: 'IN-JK',
    slug: 'kashmir',
    name: 'Jammu & Kashmir',
    capital: 'Srinagar',
    zone: 'North',
    tagLine: 'Where Chinar leaves turn to gold and Himalayan mountain wool spins into featherweight clouds.',
    culturalStory: 'In the high alpine valleys of Kashmir, craftsmanship is an act of meditative devotion. Pashmina goat down from Ladakh is spun on wooden charkhas and woven on Kani spools with poetic Talim codes, while royal papier-mâché masters apply pure 24-carat gold leaf over boiled mountain pulp.',
    accentColor: '#1E3A8A', // Deep Kashmir Indigo
    secondaryColor: '#D97706', // Chinar Saffron Gold
    motifName: 'Chinar Leaf & Mughal Paisley Shikargah',
    motifSvg: 'M12 2l3 7h7l-5.5 4.5 2 7.5-6.5-5-6.5 5 2-7.5L2 9h7z',
    heroImage: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'kashmir-kani-pashmina-shawl',
      'kashmir-papier-mache-globe',
      'kashmir-sozni-needle-pashmina',
      'kashmir-walnut-wood',
      'kashmir-silk-carpet'
    ],
    featuredArtisanIds: ['bashir-jan', 'ghulam-pashmina'],
    culturalHighlights: [
      {
        title: 'Dal Lake & Floating Shikaras',
        category: 'Alpine Waters',
        description: 'Tranquil mountain waters flanked by towering Chinar trees and floating wooden houseboats and markets in Srinagar.',
        iconName: 'Waves'
      },
      {
        title: 'Mughal Chinar Gardens',
        category: 'Royal Terraces',
        description: 'Centuries-old terraced gardens cascading towards Dal lake with majestic crimson Chinar canopies.',
        iconName: 'Mountain'
      },
      {
        title: 'Shankaracharya Hilltop Temple',
        category: 'Ancient Stone',
        description: '9th-century octagonal granite temple commanding panoramic vistas of the entire Kashmir Valley.',
        iconName: 'Landmark'
      },
      {
        title: 'Gulmarg Himalayan Meadows',
        category: 'Alpine Peaks',
        description: 'Pristine snow-capped Pir Panjal ridges where alpine nomadic pastoral communities rear mountain livestock.',
        iconName: 'Mountain'
      },
      {
        title: 'Old Srinagar Artisan Mohallas',
        category: 'Living Guilds',
        description: 'Centuries-old wooden bridge quarters along the Jhelum where master Kani weavers and Naqqashi painters preserve court arts.',
        iconName: 'Columns'
      }
    ],
    giCount: 14,
    artisanCount: 36000,
    stickers: [
      {
        id: 'kashmir-kani-pashmina-shawl',
        name: 'Kashmir Kani Pashmina',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1609137144822-4a004eb7c9a4?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Kanihama, Kashmir Valley',
        tag: 'GI #046 • KANI SPOOLS',
        rotationClass: '-rotate-3',
        description: 'Handwoven with wooden eyeless spools (Tujis) guided by coded metric calligraphy (Talim).'
      },
      {
        id: 'kashmir-papier-mache-globe',
        name: 'Imperial Papier-Mâché Box',
        category: 'Paintings & Art',
        image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Srinagar Old City',
        tag: 'GI #048 • 24K GOLD NAQQASHI',
        rotationClass: 'rotate-3',
        description: 'Hand-shaped from soaked paper pulp and chalk, gilded with pure 24K gold foil and glazed with amber varnish.'
      },
      {
        id: 'kashmir-sozni-needle-pashmina',
        name: 'Sozni Needlework Pashmina',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Budgam, Kashmir',
        tag: 'GI #047 • MICRO NEEDLE',
        rotationClass: '-rotate-2',
        description: 'Microscopic needle embroidery so delicate that both the front and reverse of the fabric appear identical.'
      },
      {
        id: 'kashmir-walnut-wood',
        name: 'Carved Walnut Wood Chest',
        category: 'Woodwork & Lacquer',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Safakadal, Srinagar',
        tag: 'GI #182 • NATURAL OIL',
        rotationClass: '-rotate-1',
        description: 'Naturally seasoned Himalayan walnut wood deep-carved with three-dimensional dragon and chinar leaf patterns.'
      },
      {
        id: 'kashmir-silk-carpet',
        name: 'Kashmiri Silk-on-Silk Carpet',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Ganderbal & Srinagar',
        tag: 'GI #127 • 900 KPSI',
        rotationClass: 'rotate-2',
        description: 'Hand-knotted with pure mulberry silk warp and weft, reaching over 900 knots per square inch.'
      }
    ]
  },

  // ==========================================
  // 19. CHHATTISGARH (Central)
  // ==========================================
  {
    id: 'IN-CG',
    slug: 'chhattisgarh',
    name: 'Chhattisgarh',
    capital: 'Raipur',
    zone: 'Central',
    tagLine: 'Where tribal iron hammers strike by firelight and wild Kosa cocoons weave into forest silk.',
    culturalStory: 'In the deep Sal forests of Bastar, craftsmanship is an elemental connection to ancestral spirits. Ghadwa metalsmiths cast bell metal lost-wax sculptures of forest deities, blacksmiths shape recycled scrap into modern Loha Shilp iron art, and weavers harvest wild forest Kosa silk.',
    accentColor: '#374151', // Wrought Iron Charcoal
    secondaryColor: '#D97706', // Forest Kosa Gold
    motifName: 'Bastar Tribal Deer & Bell Metal Sun Mask',
    motifSvg: 'M12 2l3 7h7l-5.5 4.5 2 7.5-6.5-5-6.5 5 2-7.5L2 9h7z',
    heroImage: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'bastar-dhokra-bellmetal',
      'bastar-iron-craft-loha-shilp',
      'chhattisgarh-kosa-silk'
    ],
    featuredArtisanIds: ['krishnan-bellmetal'],
    culturalHighlights: [
      {
        title: 'Bastar Dussehra Forest Festival',
        category: 'Tribal Living Heritage',
        description: '75-day festival celebrated by 12 tribal communities with handcrafted 8-wheeled giant wooden chariots.',
        iconName: 'Flame'
      }
    ],
    giCount: 7,
    artisanCount: 19000,
    stickers: [
      {
        id: 'bastar-dhokra-bellmetal',
        name: 'Bastar Dhokra Bell Metal',
        category: 'Metalwork & Bronze',
        image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Kondagaon & Jagdalpur, Bastar',
        tag: 'GI #084 • TRIBAL WAX',
        rotationClass: '-rotate-3',
        description: 'Primal lost-wax brass and bronze casting utilizing bees-wax threads to shape tribal wildlife and dancers.'
      }
    ]
  },

  // ==========================================
  // 20. JHARKHAND (East)
  // ==========================================
  {
    id: 'IN-JH',
    slug: 'jharkhand',
    name: 'Jharkhand',
    capital: 'Ranchi',
    zone: 'East',
    tagLine: 'Where Santhal mud walls tell winter harvest tales in black manganese and kaolin white.',
    culturalStory: 'Surrounded by the Chota Nagpur plateau and sacred sacred groves, Jharkhand crafts are an organic expression of tribal ecology. Village women paint Sohrai and Khovar ceremonial murals with broken combs and fingers using soil clays, while Paitkar scroll painters tell tribal myths on handmade bark paper.',
    accentColor: '#78350F', // Clay Umber
    secondaryColor: '#15803D', // Sacred Grove Green
    motifName: 'Sohrai Animal Glyph & Khovar Nuptial Flora',
    motifSvg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
    heroImage: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'sohrai-khovar-painting',
      'paitkar-scroll-painting',
      'jharkhand-tribal-bamboo'
    ],
    featuredArtisanIds: ['dinesh-warli'],
    culturalHighlights: [
      {
        title: 'Hazaribagh Sohrai Painted Villages',
        category: 'Living Mural Architecture',
        description: 'Cluster of tribal villages where mud houses are repainted every autumn with dramatic wildlife murals.',
        iconName: 'Home'
      }
    ],
    giCount: 6,
    artisanCount: 16000,
    stickers: [
      {
        id: 'sohrai-khovar-painting',
        name: 'Sohrai & Khovar Mural Art',
        category: 'Paintings & Art',
        image: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Hazaribagh, Jharkhand',
        tag: 'GI #182 • NATURAL SOIL',
        rotationClass: '-rotate-4',
        isDrawing: true,
        description: 'Mural painting using black manganese, red iron oxide, and white kaolin clay cut with combs and twigs.'
      }
    ]
  },

  // ==========================================
  // 21. GOA (West)
  // ==========================================
  {
    id: 'IN-GA',
    slug: 'goa',
    name: 'Goa',
    capital: 'Panaji',
    zone: 'West',
    tagLine: 'Where coastal coconut shells carve into filigree and Kunbi checks weave tribal dignity.',
    culturalStory: 'Where Portuguese colonial mansions meet ancient Konkani temple traditions, Goa has a distinctive seaside craft aesthetic. Artisans carve polished coconut shells into delicate filigree containers, sculpt terracotta Azulejos tiles, and weave red-and-white Kunbi cotton checked sarees.',
    accentColor: '#BE185D', // Kunbi Pink Red
    secondaryColor: '#0E7490', // Arabian Sea Teal
    motifName: 'Kunbi Checked Grid & Coconut Palm Frond',
    motifSvg: 'M3 17l9-12 9 12H3zm9-8l-4.5 6h9L12 9z',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'goan-kunbi-saree',
      'goa-coconut-shell-craft',
      'bicholim-terracotta-craft'
    ],
    featuredArtisanIds: ['janardhanan-achari'],
    culturalHighlights: [
      {
        title: 'Fontainhas Latin Quarter',
        category: 'Colonial Architecture',
        description: 'Heritage quarter in Panaji lined with Portuguese azulejos ceramic tiles and terracotta rooftops.',
        iconName: 'Landmark'
      }
    ],
    giCount: 7,
    artisanCount: 8500,
    stickers: [
      {
        id: 'goan-kunbi-saree',
        name: 'Goan Kunbi Tribal Saree',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Chandor & Quepem, South Goa',
        tag: 'GI #215 • KUNBI CHECK',
        rotationClass: 'rotate-3',
        description: 'Sturdy handwoven red-and-white checked cotton saree worn tied above the ankles by indigenous Gawda women.'
      }
    ]
  },

  // ==========================================
  // 22. SIKKIM (North-East)
  // ==========================================
  {
    id: 'IN-SK',
    slug: 'sikkim',
    name: 'Sikkim',
    capital: 'Gangtok',
    zone: 'North-East',
    tagLine: 'Where Kangchenjunga winds blow prayer flags and Thangka brushes grind lapis into deities.',
    culturalStory: 'Guarded by Mount Kangchenjunga, Sikkim’s craft traditions carry deep Tibetan Buddhist reverence. Monastic painters grind lapis lazuli, cinnabar, and pure gold to paint meditation Thangkas, while Lepcha weavers craft diamond-motif shawls on indigenous backstrap looms.',
    accentColor: '#854D0E', // Monastery Gold
    secondaryColor: '#1E3A8A', // Himalayan Lapis
    motifName: 'Ashtamangala Endless Knot & Snow Lion',
    motifSvg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
    heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'sikkim-thangka-scroll-painting',
      'choktse-carved-wooden-table',
      'lepcha-traditional-weaving'
    ],
    featuredArtisanIds: ['hemchandra-mask'],
    culturalHighlights: [
      {
        title: 'Rumtek & Pemayangtse Monasteries',
        category: 'Sacred Buddhist Sanctuaries',
        description: 'Monasteries preserving centuries-old painted silk Thangka scrolls and ritual wood carvings.',
        iconName: 'Landmark'
      }
    ],
    giCount: 4,
    artisanCount: 7500,
    stickers: [
      {
        id: 'sikkim-thangka-scroll-painting',
        name: 'Sikkim Sacred Thangka',
        category: 'Paintings & Art',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Gangtok Monastic Guilds',
        tag: 'SACRED BUDDHIST',
        rotationClass: '-rotate-3',
        isDrawing: true,
        description: 'Cotton canvas meditation scroll painted with powdered minerals and 24K gold dust, bordered in silk brocade.'
      }
    ]
  },

  // ==========================================
  // 23. ARUNACHAL PRADESH (North-East)
  // ==========================================
  {
    id: 'IN-AR',
    slug: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    capital: 'Itanagar',
    zone: 'North-East',
    tagLine: 'Where sunrise first touches the snow peaks and Wancho chisels shape warrior timber.',
    culturalStory: 'In the Land of the Dawn-Lit Mountains, 26 major tribes preserve undisturbed natural craft cultures. Wancho craftsmen carve timber warrior statues and tobacco pipes, Monpa monks beat daphne shrub bark into handmade paper, and Apatani women weave geometric diamond shawls on loin looms.',
    accentColor: '#065F46', // Pine Emerald
    secondaryColor: '#B45309', // Timber Bark
    motifName: 'Hornbill Beak & Wancho Warrior Silhouette',
    motifSvg: 'M12 2l3 7h7l-5.5 4.5 2 7.5-6.5-5-6.5 5 2-7.5L2 9h7z',
    heroImage: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'wancho-tribal-wood-carving',
      'monpa-handmade-paper-shugu',
      'apatani-loinloom-textile'
    ],
    featuredArtisanIds: ['hemchandra-mask'],
    culturalHighlights: [
      {
        title: 'Tawang Monastery',
        category: 'Gelug Buddhist Citadel',
        description: 'India’s largest monastery founded in 1680 overlooking the snow-covered Tawang Chu valley.',
        iconName: 'Landmark'
      }
    ],
    giCount: 8,
    artisanCount: 9000,
    stickers: [
      {
        id: 'wancho-tribal-wood-carving',
        name: 'Wancho Wood Carving',
        category: 'Woodwork & Lacquer',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Longding, Arunachal',
        tag: 'GI #239 • WANCHO TIMBER',
        rotationClass: 'rotate-4',
        description: 'Expressive hand-chiseled wooden human figures and animal totems carved from single tree logs.'
      }
    ]
  },

  // ==========================================
  // 24. MANIPUR (North-East)
  // ==========================================
  {
    id: 'IN-MN',
    slug: 'manipur',
    name: 'Manipur',
    capital: 'Imphal',
    zone: 'North-East',
    tagLine: 'Where serpentite black stone polishes without a potter’s wheel and reed mats float on Loktak.',
    culturalStory: 'In the emerald valley of Manipur, craft is deeply matrilineal and tied to the wetlands. In Longpi village, Tangkhul craftsmen mould black stone pottery without wheels using serpentite rock and river clay; on floating phumdis of Loktak lake, women harvest Kauna water reeds to weave baskets.',
    accentColor: '#18181B', // Longpi Stone Black
    secondaryColor: '#B91C1C', // Meitei Crimson
    motifName: 'Sangai Deer Antlers & Longpi Black Amphora',
    motifSvg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
    heroImage: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'longpi-black-stone-pottery',
      'shaphee-lanphee-warrior-shawl',
      'kauna-water-reed-mat'
    ],
    featuredArtisanIds: ['meena-ammal'],
    culturalHighlights: [
      {
        title: 'Ima Keithel (Mother’s Market)',
        category: 'Matriarchal Commercial Heritage',
        description: 'World’s only 500-year-old all-women market run by over 5,000 licensed female traders in Imphal.',
        iconName: 'Landmark'
      },
      {
        title: 'Loktak Lake & Keibul Lamjao',
        category: 'Floating Wetlands',
        description: 'The world’s only floating national park, home to the endangered brow-antlered Sangai deer.',
        iconName: 'Waves'
      }
    ],
    giCount: 7,
    artisanCount: 17500,
    stickers: [
      {
        id: 'longpi-black-stone-pottery',
        name: 'Longpi Black Stone Pottery',
        category: 'Pottery & Ceramics',
        image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Longpi, Ukhrul',
        tag: 'GI #125 • WHEEL-LESS STONE',
        rotationClass: '-rotate-3',
        description: 'Crafted without a potter’s wheel from crushed serpentite stone and weathered clay, burnished with leaves.'
      }
    ]
  },

  // ==========================================
  // 25. MEGHALAYA (North-East)
  // ==========================================
  {
    id: 'IN-ML',
    slug: 'meghalaya',
    name: 'Meghalaya',
    capital: 'Shillong',
    zone: 'North-East',
    tagLine: 'Where living tree roots weave into bridges and organic peace silk never harms a cocoon.',
    culturalStory: 'High among the misty cloud forests of the Khasi, Jaintia, and Garo hills, craftsmanship is an organic extension of nature. In Ri-Bhoi, Khasi weavers breed Eri silkworms and spin organic Ryndia Peace Silk without boiling pupae, while bamboo crafters weave rainproof Knup head shields.',
    accentColor: '#047857', // Rainforest Moss
    secondaryColor: '#D97706', // Natural Ryndia Silk
    motifName: 'Living Root Bridge Curve & Knup Umbrella Lattice',
    motifSvg: 'M3 17l9-12 9 12H3zm9-8l-4.5 6h9L12 9z',
    heroImage: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'ryndia-eri-peace-silk',
      'khasi-cane-knup-rainshield',
      'tyrshang-black-clay-pottery'
    ],
    featuredArtisanIds: ['meenakshi-ammal'],
    culturalHighlights: [
      {
        title: 'Cherrapunji Living Root Bridges',
        category: 'Bio-Engineering Wonder',
        description: 'Centuries-old suspension bridges trained across rivers by Khasi elders using the living roots of Ficus elastica.',
        iconName: 'Trees'
      }
    ],
    giCount: 5,
    artisanCount: 11000,
    stickers: [
      {
        id: 'ryndia-eri-peace-silk',
        name: 'Ryndia Eri Peace Silk',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Umden, Ri-Bhoi',
        tag: 'AHIMSA PEACE SILK',
        rotationClass: 'rotate-4',
        description: 'Ahimsa peace silk spun from open cocoons without killing silkworms, dyed in wild turmeric and lac.'
      }
    ]
  },

  // ==========================================
  // 26. MIZORAM (North-East)
  // ==========================================
  {
    id: 'IN-MZ',
    slug: 'mizoram',
    name: 'Mizoram',
    capital: 'Aizawl',
    zone: 'North-East',
    tagLine: 'Where mountain loin looms weave geometric Puan drapes and bamboo creates the dance of life.',
    culturalStory: 'Surrounded by lush bamboo-clad ridgelines and cool mountain air, Mizo artisans are renowned for geometric textile geometry. Women weave ceremonial Puan shawls on waist looms with black, white and vermillion zig-zags, and split wild mountain bamboo into airtight storage bins.',
    accentColor: '#991B1B', // Puan Vermillion
    secondaryColor: '#18181B', // Obsidian Black
    motifName: 'Puanchei Chevron & Cheraw Bamboo Grid',
    motifSvg: 'M12 2L2 12l10 10 10-10L12 2zm0 4l6 6-6 6-6-6 6-6z',
    heroImage: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'mizo-puan-traditional-textile',
      'mizo-bamboo-cane-hat-khumbeu'
    ],
    featuredArtisanIds: ['meenakshi-ammal'],
    culturalHighlights: [
      {
        title: 'Cheraw Bamboo Dance Lineage',
        category: 'Living Performance Art',
        description: 'Rhythmic folk dance where male dancers clap bamboo staves while dancers step gracefully between the grids.',
        iconName: 'Sparkles'
      }
    ],
    giCount: 6,
    artisanCount: 8200,
    stickers: [
      {
        id: 'mizo-puan-traditional-textile',
        name: 'Mizo Puan Handloom',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Aizawl & Thenzawl',
        tag: 'GI #229 • LOINLOOM PUAN',
        rotationClass: '-rotate-3',
        description: 'Traditional wedding drape handwoven on indigenous backstrap loinlooms with iconic Puanchei chevrons.'
      }
    ]
  },

  // ==========================================
  // 27. NAGALAND (North-East)
  // ==========================================
  {
    id: 'IN-NL',
    slug: 'nagaland',
    name: 'Nagaland',
    capital: 'Kohima',
    zone: 'North-East',
    tagLine: 'Where tribal warrior shawls declare courage and carvers shape sacred mithun horns.',
    culturalStory: 'Across the misty peaks of Nagaland, textile design is a visual heraldry of honour and community status. Each of the 16 Naga tribes weaves distinct geometric symbols on tension backstrap looms: Chakhesang shawls show spearheads, Ao drapes show tigers, and carvers sculpt sacred Mithun totems.',
    accentColor: '#B91C1C', // Naga Warrior Red
    secondaryColor: '#18181B', // Midnight Black
    motifName: 'Mithun Horn Emblem & Warrior Spear Stripe',
    motifSvg: 'M12 2l3 7h7l-5.5 4.5 2 7.5-6.5-5-6.5 5 2-7.5L2 9h7z',
    heroImage: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'chakhesang-naga-shawl',
      'naga-mithun-wood-carving',
      'naga-tribal-bead-necklace'
    ],
    featuredArtisanIds: ['hemchandra-mask'],
    culturalHighlights: [
      {
        title: 'Hornbill Festival Heritage Village (Kisama)',
        category: 'Inter-Tribal Gathering',
        description: 'Annual cultural festival uniting all 16 Naga tribes with Morung ancestral dormitory architecture.',
        iconName: 'Landmark'
      }
    ],
    giCount: 6,
    artisanCount: 14000,
    stickers: [
      {
        id: 'chakhesang-naga-shawl',
        name: 'Chakhesang Naga Shawl',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Pfutsero, Phek District',
        tag: 'GI #200 • WARRIOR WEAVE',
        rotationClass: '-rotate-4',
        description: 'Heavy backstrap woven tribal shawl carrying sacred red-and-black stripes symbolizing valor.'
      }
    ]
  },

  // ==========================================
  // 28. TRIPURA (North-East)
  // ==========================================
  {
    id: 'IN-TR',
    slug: 'tripura',
    name: 'Tripura',
    capital: 'Agartala',
    zone: 'North-East',
    tagLine: 'Where split bamboo weaves into whisper-thin screens and royal Risa wraps sacred drapes.',
    culturalStory: 'Blessed with over twenty species of indigenous bamboo and a proud Manikya royal heritage, Tripura is India’s master of bamboo refinement. Artisans split green bamboo to thin, flexible silk-like ribbons to weave screens and umbrellas, while indigenous women handweave the sacred Risa breastcloth on backstrap looms.',
    accentColor: '#15803D', // Muli Bamboo Green
    secondaryColor: '#B45309', // Risa Terracotta
    motifName: 'Manikya Royal Crown & Muli Bamboo Lattice',
    motifSvg: 'M3 21h18M5 21V7l7-4 7 4v14M9 10a3 3 0 0 1 6 0v4a3 3 0 0 1-6 0v-4z',
    heroImage: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'tripura-risa-handloom',
      'tripura-bamboo-flute-screen',
      'cane-bamboo-sculpture'
    ],
    featuredArtisanIds: ['meena-ammal'],
    culturalHighlights: [
      {
        title: 'Ujjayanta & Neermahal Water Palaces',
        category: 'Royal Lake Architecture',
        description: 'Stunning 1930s water palace built in the middle of Rudrasagar Lake blending Hindu and Mughal styles.',
        iconName: 'Landmark'
      }
    ],
    giCount: 5,
    artisanCount: 13500,
    stickers: [
      {
        id: 'tripura-risa-handloom',
        name: 'Tripura Sacred Risa',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Radhakishorepur, Gomati',
        tag: 'GI #248 • SACRED WEAVE',
        rotationClass: 'rotate-3',
        description: 'Sacred ceremonial custom handloom textile woven with tribal emblems for adolescent rites of passage.'
      }
    ]
  },

  // ==========================================
  // 29. JAMMU & KASHMIR (North)
  // ==========================================
  {
    id: 'IN-JK',
    slug: 'jammu-and-kashmir',
    name: 'Jammu & Kashmir',
    capital: 'Srinagar',
    zone: 'North',
    tagLine: 'Where mountain goat underfleece spins into whisper-soft shawls and walnut wood carves into royal chests.',
    culturalStory: 'Nestled between snow-crested Pir Panjal peaks and Dal Lake waterways, Kashmir has nurtured a legacy of imperial craftsmanship since Sultan Zain-ul-Abidin invited Persian and Central Asian masters in the 15th century. Kashmiri artisans spin microscopic Capra hircus down into gossamer Pashmina, hand-tie silk carpets with thousands of knots per inch, and carve indigenous walnut wood.',
    accentColor: '#1E3A5F', // Kashmiri Sapphire
    secondaryColor: '#B45309', // Walnut Amber
    motifName: 'Chinar Leaf & Badam Paisley',
    motifSvg: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
    heroImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=80',
    signatureCraftIds: [
      'kani-pashmina-shawl',
      'kashmiri-papier-mache-box',
      'sozni-embroidery-stole',
      'carved-walnut-wood-box',
      'kashmiri-silk-carpet'
    ],
    featuredArtisanIds: ['bashir-ahmed-kani', 'ghulam-nabi-wood'],
    culturalHighlights: [
      {
        title: 'Dal Lake & Floating Gardens',
        category: 'Waterways & Shikaras',
        description: 'Tranquil alpine lake famous for ornate cedar houseboats, lotus floating gardens, and hand-carved Shikara boats.',
        iconName: 'Waves'
      },
      {
        title: 'Nishat & Shalimar Chinar Gardens',
        category: 'Mughal Terraces',
        description: 'Centuries-old terraced Persian water gardens shaded by majestic heritage Chinar trees overlooking Dal Lake.',
        iconName: 'Trees'
      },
      {
        title: 'Shankaracharya Ancient Temple',
        category: '8th-Century Sanctum',
        description: 'Historic stone Shiva temple perched atop Gopadari Hill offering panoramic vistas across the Srinagar valley.',
        iconName: 'Landmark'
      },
      {
        title: 'Gulmarg Alpine Meadows',
        category: 'High-Altitude Valley',
        description: 'Misty pine-clad highlands and snowfields beneath Mount Apharwat, preserving high-altitude shepherd craft.',
        iconName: 'Mountain'
      },
      {
        title: 'Old Srinagar Downtown Mohallas',
        category: 'Heritage Craft Quarter',
        description: 'Historic wooden bridge mohallas along the Jhelum river housing hereditary papier-mâché and woodcarving karkhanas.',
        iconName: 'Home'
      }
    ],
    giCount: 10,
    artisanCount: 45000,
    stickers: [
      {
        id: 'kani-pashmina-shawl',
        name: 'Kani Pashmina Shawl',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Kanihama, Budgam',
        tag: 'GI #009 • WOODEN KANIS',
        rotationClass: '-rotate-3',
        description: 'Woven with microscopic wooden eyeless spools (Tujis) from Changthangi goat pashm following coded Talim scripts.'
      },
      {
        id: 'kashmiri-papier-mache-box',
        name: 'Imperial Papier-Mâché',
        category: 'Woodwork & Lacquer',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Zadibal, Srinagar',
        tag: 'GI #015 • 24K GOLD NAQQASHI',
        rotationClass: 'rotate-3',
        description: 'Layered pulp molded by Sakhtsazi artisans and painted with pure gold leaf and squirrel hair brushes in Naqqashi floral patterns.'
      },
      {
        id: 'sozni-embroidery-stole',
        name: 'Sozni Needlework Stole',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Anantnag & Baramulla',
        tag: 'GI #192 • MICROSCOPIC NEEDLE',
        rotationClass: '-rotate-2',
        description: 'Single-thread silk needlepoint so delicate that hundreds of microscopic satin stitches fit within a square centimeter.'
      },
      {
        id: 'carved-walnut-wood-box',
        name: 'Carved Walnut Wood Box',
        category: 'Woodwork & Lacquer',
        image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Srinagar Downtown',
        tag: 'GI #182 • INDIGENOUS WALNUT',
        rotationClass: '-rotate-1',
        description: 'High-relief undercut dragon and chinar leaves chiseled from seasoned indigenous Kashmiri walnut tree roots.'
      },
      {
        id: 'kashmiri-silk-carpet',
        name: 'Kashmiri Silk Carpet',
        category: 'Textiles & Weaving',
        image: 'https://images.unsplash.com/photo-1609137144822-4a004eb7c9a4?auto=format&fit=crop&w=400&q=80',
        originVillage: 'Srinagar Carpet Looms',
        tag: 'GI #237 • 600 KNOTS/SQ INCH',
        rotationClass: 'rotate-2',
        description: 'Hand-knotted pure mulberry silk pile carpet knotted at over 600 knots per square inch following musical Talim notations.'
      }
    ]
  }
];
