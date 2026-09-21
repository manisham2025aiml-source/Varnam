import { EditorialStory } from '../types';

export const EDITORIAL_STORIES: EditorialStory[] = [
  {
    id: 'secret-metallurgy-aranmula',
    title: 'The Secret Metallurgy of the Aranmula Mirror: Where Light Never Bends',
    subtitle: 'Behind temple doors in rural Kerala, five families preserve the world’s only surviving front-reflecting metal mirror alloy.',
    author: 'Dr. Radhika Menon',
    authorTitle: 'Archaeometallurgist & Cultural Historian',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    tags: ['Ancient Metallurgy', 'Kerala', 'Aranmula', 'Sacred Crafts'],
    excerpt: 'Step in front of an everyday glass mirror and you are looking through a sheet of glass onto a silvered backing. Step in front of an Aranmula Kannadi, and your reflection meets the metal itself — unfiltered, unrefracted, and startlingly true.',
    stateName: 'Kerala',
    craftName: 'Aranmula Kannadi',
    content: [
      'In the quiet riverine town of Aranmula, in Kerala’s Pathanamthitta district, morning begins not with the clatter of commerce, but with the measured scrape of velvet over metal. Here, inside modest tiled workshops surrounded by coconut palms, master craftsmen belonging to the Vishwakarma community are polishing mirrors made entirely without glass.',
      'Known as the Aranmula Kannadi, this object is unlike any other mirror manufactured on Earth. Ordinary household mirrors are "back-surface" mirrors: light passes through a 3mm sheet of float glass, bounces off a chemical silver coating on the back, and passes through the glass a second time. This causes microscopic refraction and chromatic distortion.',
      'An Aranmula mirror, however, is a front-surface reflector. The light hits the polished metal face directly and bounces back instantly. When you place a pen tip against the surface, there is zero gap between the object and its reflection. It is an optical fidelity that NASA and astronomical telescopes spend millions to achieve with vaporized beryllium — yet here in Kerala, it is achieved with copper, tin, and tamarind charcoal.',
      'According to temple lore, the alloy was discovered by accident in the 18th century when craftsmen summoned from Tirunelveli were preparing a crown for the deity of Parthasarathy Temple. An unexpected proportion of copper and tin produced an alloy as brittle as porcelain, yet when ground with river clay and velvet, it began to shine with an unnatural, divine luminescence.',
      'Today, the exact ratio remains an oral secret handed down only from father to son. Each mirror takes up to 26 days to cast, cool, and polish. "We do not sell glass," Master Parameswaran remarks softly. "We give you a piece of truth that will remain bright when our grandchildren are old."'
    ],
    quote: 'When you look into an Aranmula mirror, there is no glass between you and yourself. You meet the bronze face to face.',
    quoteAuthor: 'A. Parameswaran Achary, Master Metallurgist',
    relatedCraftIds: ['aranmula-kannadi-vaalkannadi'],
    publishedAt: 'March 2024'
  },
  {
    id: 'forty-eight-hour-castor-sap',
    title: '48 Hours Over Wood Fire: The Alchemy of Nirona’s Roghan Art',
    subtitle: 'How wild castor seed oil, boiled outdoors until it turns to golden rubber, creates the world’s most mesmerizing mid-air painting technique.',
    author: 'Karanvir Rathore',
    authorTitle: 'Craft Researcher, Desert Guilds',
    readTime: '7 min read',
    coverImage: 'https://images.unsplash.com/photo-1609137144822-4a004eb7c9a4?auto=format&fit=crop&w=1200&q=80',
    tags: ['Kutch', 'Roghan', 'Rare Crafts', 'Living Heritage'],
    excerpt: 'Watch Abdul Gafur Khatri at work, and you will see something impossible: his metal stylus never touches the fabric. Instead, a glistening thread of castor sap hangs suspended in mid-air, guided by breath and muscle memory into floral eternity.',
    stateName: 'Gujarat',
    craftName: 'Nirona Roghan Art',
    content: [
      'The journey of a Roghan masterpiece does not begin at an easel. It begins in an open field outside Nirona village in Kutch, where wild castor oil is poured into a massive iron cauldron over an open fire of Babul wood.',
      'For two whole days and nights — forty-eight continuous hours — the oil boils. Dense fumes rise into the desert air as the liquid thickens, darkens, and undergoes chemical polymerization. If it is taken off the flame ten minutes too soon, it remains greasy and ruins the silk; ten minutes too late, it turns brittle like burnt charcoal. Only the Khatri family knows the exact moment the boiling castor turns into "roghan" — an elastic, honey-colored gummy resin.',
      'Once cooled, the roghan is ground on a stone slab with crushed mineral pigments: yellow ochre, lapis blue, cinnabar red, and chalk white. The resulting colored pastes are rolled into small balls kept in water to prevent drying.',
      'When an artisan prepares to paint, he takes a lump of paste the size of a coin and rubs it vigorously in the palm of his left hand. The warmth of human skin softens the rubbery resin. With a six-inch brass stylus held in his right hand, he pulls out a thread of colored sap. Holding the stylus half an inch above the stretched silk fabric, he draws flowers, peacocks, and the sacred Tree of Life in the air.',
      'Finally comes the climax: the fabric is folded down the center while the roghan is moist, transferring an exact mirror image to the other side. "People think we are painters," Abdul Gafur smiles. "We are alchemists who found a way to make oil dance."'
    ],
    quote: 'We never paint on the fabric. The air is our canvas, and the cloth is only where the thread chooses to land.',
    quoteAuthor: 'Padma Shri Abdul Gafur Khatri',
    relatedCraftIds: ['nirona-roghan-tree-of-life'],
    publishedAt: 'February 2024'
  },
  {
    id: 'kanchipuram-korvai-mystery',
    title: 'Two Weavers, One Loom: The Ancient Drama of Kanchipuram Korvai',
    subtitle: 'Why the world’s most coveted wedding silk requires two artisans working in synchronized breathing across a single pit loom.',
    author: 'Sowmya Ramanathan',
    authorTitle: 'Textile Conservator, Kaveri Delta Studies',
    readTime: '5 min read',
    coverImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Handloom', 'Kanchipuram', 'Silk Weaving', 'Living Traditions'],
    excerpt: 'In an era of high-speed powerlooms, the Korvai weave of Kanchipuram defies mechanization. The contrast border cannot be made by one person alone; it demands two weavers operating in complete rhythmic telepathy.',
    stateName: 'Tamil Nadu',
    craftName: 'Kanchipuram Silk Sari',
    content: [
      'Step down into the cool earth of a traditional weaver’s home in Pillaiyarpalayam, Kanchipuram, and you will notice that the looms do not stand on legs. They are set inside dug pits in the floor, where subterranean humidity keeps the mulberry silk pliable and prevents fine zari threads from snapping in the tropical heat.',
      'The hallmark of a royal Kanchipuram saree is the stark contrast between the body and the border — an emerald body with a crimson border, or midnight blue with antique temple gold. On ordinary looms, this is faked by printing or stitching borders separately.',
      'In authentic Korvai, however, the border and body threads are interlocked loop-by-loop at every single weft pass. This requires three shuttles: one shuttle thrown by the master weaver on the right across the body, and two border shuttles operated by an assistant weaver sitting on the left.',
      'As the master shoots his shuttle across the width, the assistant catches it, interlocks the border thread, and beats the reed with equal force. If either weaver breathes off-tempo or presses the pedal with uneven tension, the border buckles. It takes two artisans working eight hours a day for twenty-two days to finish a single six-yard saree.',
      'When you hold an authentic Korvai Kanchipuram, you are not holding a garment. You are holding hundreds of hours of synchronized human heartbeat.'
    ],
    quote: 'A Korvai loom is like a marriage: neither weaver can move faster than the other. If one pulls too hard, the silk weeps.',
    quoteAuthor: 'Vadivelu, Master Weaver',
    relatedCraftIds: ['kanchipuram-silk-sari'],
    publishedAt: 'January 2024'
  },
  {
    id: 'kadhwa-gold-constellations',
    title: 'Varanasi Kadhwa: Weaving Celestial Constellations in Pure Gold Zari',
    subtitle: 'Inside the labyrinthine weaver mohallas of Banaras, where each motif is individually hand-embroidered on the loom with zero loose threads.',
    author: 'Ananya Sengupta',
    authorTitle: 'Handloom Historian & Sanskrit Epigraphist',
    readTime: '6 min read',
    coverImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80',
    tags: ['Varanasi', 'Kadhwa', 'Pure Zari', 'Mughal Heritage', 'Royal Brocade'],
    excerpt: 'Turn over a cheap powerloom saree and you will see a jungle of loose, scratchy hanging threads. Turn over an authentic Banarasi Kadhwa, and the back is as smooth as a newborn’s cheek.',
    stateName: 'Uttar Pradesh',
    craftName: 'Varanasi Kadhwa Pure Gold Brocade Saree',
    content: [
      'In Madanpura, one of the oldest weaver wards of Varanasi overlooking the holy Ganga, the houses are built tall and narrow to accommodate the vertical height of Jacquard wooden drawlooms.',
      'The word "Kadhwa" is derived from the Hindi verb "Kadhna", meaning to etch or embroider. Unlike ordinary brocade where a supplementary weft thread runs continuously from selvage to selvage leaving loose floats at the back, Kadhwa requires the weaver to pick and insert the gold zari thread by hand motif by individual motif.',
      'Using a small curved wooden spool called a tilli, Master Haji Munna Ansari leans over the warp threads. He manually lifts specific silk threads using wooden spools, slides the real silver-gilt zari through, and cuts the thread clean. No two motifs are connected by a thread float. The back of the fabric is as pristine, flat, and comfortable against bare skin as the front.',
      'A single master weaver can complete only one to two inches of intricate Shikargah (hunting scene) Kadhwa pattern per day. A bridal saree with 1,500 individual floral butis takes four to six months of uninterrupted labor.',
      'When you wear an authentic Banarasi Kadhwa, you are draped in the imperial aesthetics of Akbar’s court and the eternal spiritual stillness of the Kashi ghats.'
    ],
    quote: 'We do not weave fabric to be worn once and discarded. We weave an heirloom that grandmother will place in the hands of her granddaughter.',
    quoteAuthor: 'Haji Munna Ansari, National Awardee Master Weaver',
    relatedCraftIds: ['banarasi-kadhwa-gold-zari-saree'],
    publishedAt: 'December 2023'
  }
];

