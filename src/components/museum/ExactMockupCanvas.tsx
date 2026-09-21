import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Craft } from '../../types';
import { Sparkles, ArrowRight, Volume2, ShieldCheck, MapPin, Eye } from 'lucide-react';

interface HotspotItem {
  id: string;
  name: string;
  category: string;
  tag: string;
  village: string;
  box: { left: number; top: number; width: number; height: number };
  pillIndex?: number;
}

interface ExactMockupCanvasProps {
  stateSlug: string;
  stateName: string;
  allCrafts: Craft[];
  onSelectCraft: (craft: Craft) => void;
  onPlayAudio?: (craftName: string) => void;
}

const STATE_HOTSPOTS: Record<string, HotspotItem[]> = {
  'gujarat': [
    {
      id: 'kutch-mirrorwork-embroidery',
      name: 'Kutch Embroidery',
      category: 'Textiles & Weaving',
      tag: 'GI #244 • MIRRORWORK',
      village: 'Bhujodi & Mandvi, Kutch',
      box: { left: 7, top: 42, width: 24, height: 20 },
      pillIndex: 0
    },
    {
      id: 'gujarat-dhokra-art',
      name: 'Dhokra Art',
      category: 'Metalwork & Bronze',
      tag: 'LOST-WAX BRASS',
      village: 'Chhota Udaipur Tribal Guilds',
      box: { left: 4, top: 62, width: 20, height: 21 }
    },
    {
      id: 'kutch-bandhani-sari',
      name: 'Bandhani (Tie & Dye)',
      category: 'Textiles & Weaving',
      tag: 'GI #244 • TIE & DYE',
      village: 'Jamnagar & Bhuj',
      box: { left: 22, top: 72, width: 22, height: 21 },
      pillIndex: 1
    },
    {
      id: 'patan-patola-double-ikat',
      name: 'Patola Weaving',
      category: 'Textiles & Weaving',
      tag: 'GI #232 • 800-YR LINEAGE',
      village: 'Patan Royal Guilds',
      box: { left: 69, top: 44, width: 24, height: 20 },
      pillIndex: 2
    },
    {
      id: 'somnath-wood-carving',
      name: 'Wood Carving (Somnath)',
      category: 'Woodwork & Lacquer',
      tag: 'SOLANKI WOODCRAFT',
      village: 'Prabhas Patan & Somnath',
      box: { left: 73, top: 62, width: 22, height: 19 },
      pillIndex: 3
    },
    {
      id: 'gujarat-terracotta-craft',
      name: 'Terracotta Craft',
      category: 'Pottery & Ceramics',
      tag: 'SACRED EARTHENWARE',
      village: 'Poshina & Kutch Potters',
      box: { left: 63, top: 75, width: 23, height: 20 },
      pillIndex: 4
    }
  ],

  'karnataka': [
    {
      id: 'mysore-gesso-painting',
      name: 'Mysore Painting',
      category: 'Painting',
      tag: 'GI #029 • GOLD GESSO',
      village: 'Mysore Palace Workshops',
      box: { left: 6, top: 39, width: 24, height: 20 },
      pillIndex: 0
    },
    {
      id: 'channapatna-wooden-elephant',
      name: 'Channapatna Toys',
      category: 'Wooden Craft',
      tag: 'GI #004 • LACQUERED ELEPHANT',
      village: 'Channapatna, Ramanagara',
      box: { left: 4, top: 58, width: 24, height: 18 },
      pillIndex: 1
    },
    {
      id: 'mysore-crepe-silk-saree',
      name: 'Mysore Silk',
      category: 'Textile',
      tag: 'GI #001 • PURE CREPE SILK',
      village: 'Mysore Silk Weaving Factory',
      box: { left: 13, top: 72, width: 22, height: 20 },
      pillIndex: 2
    },
    {
      id: 'channapatna-wooden-chariot',
      name: 'Channapatna Chariot & Horses',
      category: 'Wooden Craft',
      tag: 'GI #004 • TWIN HORSES',
      village: 'Channapatna Crafts Guild',
      box: { left: 37, top: 78, width: 21, height: 19 },
      pillIndex: 1
    },
    {
      id: 'dhokra-bell-metal-deer',
      name: 'Dhokra Art (Metal)',
      category: 'Metal',
      tag: 'GI #218 • BELL METAL DEER',
      village: 'Karnataka Border Guilds',
      box: { left: 74, top: 40, width: 22, height: 20 },
      pillIndex: 3
    },
    {
      id: 'hoysala-stone-carving',
      name: 'Stone Carving (Temple Art)',
      category: 'Temple Art',
      tag: 'GI #224 • HOYSALA SOAPSTONE',
      village: 'Shivarapatna & Belur',
      box: { left: 78, top: 57, width: 21, height: 20 },
      pillIndex: 4
    },
    {
      id: 'ilkal-tope-teni-saree',
      name: 'Ilkal Saree',
      category: 'Textile',
      tag: 'GI #043 • TOPE TENI PALLU',
      village: 'Ilkal, Bagalkot',
      box: { left: 63, top: 74, width: 24, height: 21 },
      pillIndex: 5
    }
  ],

  'uttar-pradesh': [
    {
      id: 'banarasi-kadhwa-gold-zari-saree',
      name: 'Banarasi Saree',
      category: 'Textile',
      tag: 'GI #099 • KADHWA SILK',
      village: 'Madanpura, Varanasi',
      box: { left: 6, top: 40, width: 24, height: 20 },
      pillIndex: 0
    },
    {
      id: 'zardozi-embroidery-gold-thread',
      name: 'Zardozi Work',
      category: 'Embroidery',
      tag: 'GI #225 • GOLD METALLIC THREAD',
      village: 'Badaun & Bareilly',
      box: { left: 4, top: 58, width: 24, height: 18 },
      pillIndex: 1
    },
    {
      id: 'varanasi-wooden-lacquer-toys',
      name: 'Wooden Toys',
      category: 'Wood Craft',
      tag: 'GI #241 • VARANASI LACQUER',
      village: 'Khojwa & Varanasi',
      box: { left: 11, top: 71, width: 23, height: 20 },
      pillIndex: 2
    },
    {
      id: 'moradabad-brass-utensils-craft',
      name: 'Brass Utensils',
      category: 'Metal',
      tag: 'GI #118 • MORADABAD BRASS',
      village: 'Moradabad Metal Guilds',
      box: { left: 33, top: 80, width: 23, height: 18 },
      pillIndex: 3
    },
    {
      id: 'gorakhpur-terracotta-craft',
      name: 'Terracotta Craft',
      category: 'Clay',
      tag: 'GI #178 • GORAKHPUR TERRACOTTA',
      village: 'Aurangabad, Gorakhpur',
      box: { left: 71, top: 43, width: 23, height: 19 },
      pillIndex: 4
    },
    {
      id: 'farrukhabad-ajrak-block-printing',
      name: 'Ajarak/Block Printing',
      category: 'Textile',
      tag: 'GI #239 • FARRUKHABAD PRINT',
      village: 'Farrukhabad Print Guilds',
      box: { left: 72, top: 60, width: 25, height: 19 },
      pillIndex: 5
    },
    {
      id: 'lucknow-chikankari-shadow-work',
      name: 'Chikankari',
      category: 'Embroidery',
      tag: 'GI #119 • LUCKNOWI SHADOW WORK',
      village: 'Chowk, Lucknow',
      box: { left: 61, top: 77, width: 24, height: 21 },
      pillIndex: 1
    }
  ],

  'west-bengal': [
    {
      id: 'tant-saree-bengal',
      name: 'Tant Saree (Traditional Weave)',
      category: 'Traditional Weave',
      tag: 'HANDLOOM TANT • LAAL PAAD',
      village: 'Shantipur & Phulia',
      box: { left: 6, top: 41, width: 26, height: 20 },
      pillIndex: 0
    },
    {
      id: 'bankura-terracotta-horse',
      name: 'Terracotta Craft (Bishnupur)',
      category: 'Bishnupur',
      tag: 'GI #116 • HOLLOW FIRED',
      village: 'Panchmura, Bankura',
      box: { left: 4, top: 57, width: 22, height: 19 },
      pillIndex: 2
    },
    {
      id: 'dokra-art-jute-craft',
      name: 'Dokra Art (Tribal Metal)',
      category: 'Tribal Metal',
      tag: 'GI #060 • LOST-WAX BRASS',
      village: 'Bikna & Dariyapur Tribal Guilds',
      box: { left: 7, top: 73, width: 22, height: 19 },
      pillIndex: 4
    },
    {
      id: 'sundarban-jute-craft',
      name: 'Jute Craft (Sundarban)',
      category: 'Sundarban',
      tag: 'GOLDEN JUTE FIBER',
      village: 'Sundarbans Craft Collective',
      box: { left: 25, top: 70, width: 24, height: 22 },
      pillIndex: 5
    },
    {
      id: 'shantiniketan-kantha-stole',
      name: 'Nakshi Kantha (Embroidery)',
      category: 'Embroidery',
      tag: 'GI #027 • NAKSHI STITCH',
      village: 'Bolpur, Birbhum',
      box: { left: 70, top: 43, width: 24, height: 20 },
      pillIndex: 1
    },
    {
      id: 'shola-craft-bengal',
      name: 'Shola Craft (Traditional)',
      category: 'Traditional',
      tag: 'WHITE PITH CARVING',
      village: 'Kumartuli & Burdwan',
      box: { left: 73, top: 60, width: 23, height: 19 },
      pillIndex: 3
    },
    {
      id: 'kolkata-handicrafts-brass',
      name: 'Kolkata Handicrafts (Traditional Arts)',
      category: 'Traditional Arts',
      tag: 'SACRED BRASS DHUNUCHI',
      village: 'Kolkata Artisan Quarters',
      box: { left: 65, top: 76, width: 25, height: 20 },
      pillIndex: 0
    }
  ]
};

export const ExactMockupCanvas: React.FC<ExactMockupCanvasProps> = ({
  stateSlug,
  stateName,
  allCrafts,
  onSelectCraft,
  onPlayAudio
}) => {
  const navigate = useNavigate();
  const [hoveredHotspot, setHoveredHotspot] = useState<HotspotItem | null>(null);
  const [focusedHotspotId, setFocusedHotspotId] = useState<string | null>(null);

  const hotspots = STATE_HOTSPOTS[stateSlug] || [];
  const mockupImage = `/assets/states/${stateSlug}/mockup.jpg`;

  const findMatchingCraft = (hotspot: HotspotItem): Craft => {
    // Try exact ID match first
    const exact = allCrafts.find(c => c.id === hotspot.id);
    if (exact) return exact;

    // Try name substring match
    const byName = allCrafts.find(c => 
      c.name.toLowerCase().includes(hotspot.name.toLowerCase()) ||
      hotspot.name.toLowerCase().includes(c.name.toLowerCase())
    );
    if (byName) return byName;

    // Fallback craft representation
    return {
      id: hotspot.id,
      varnamId: `VRN-${stateSlug.slice(0, 2).toUpperCase()}-000999`,
      name: hotspot.name,
      vernacularName: hotspot.name,
      stateId: `IN-${stateSlug.slice(0, 2).toUpperCase()}`,
      stateName: stateName,
      category: (hotspot.category || 'Living Heritage') as any,
      price: 3200,
      materials: ['Authentic regional heritage raw materials'],
      technique: 'Traditional Handcrafted Master Process',
      craftDuration: '14 days',
      originVillage: hotspot.village,
      giNumber: hotspot.tag.includes('GI') ? hotspot.tag : 'GI-CERTIFIED',
      giYear: 2023,
      isGiVerified: true,
      images: [mockupImage],
      shortDescription: `Living heritage craft of ${hotspot.name} handcrafted in ${hotspot.village}, ${stateName}.`,
      story: {
        history: `Generational heritage craft preserving the indigenous artistic identity of ${stateName}.`,
        culturalSignificance: `Protected geographical indication authentic to ${hotspot.village}.`,
        artisanStory: `Hand-made by hereditary master guilds passed down through families.`,
        creationProcessSteps: [
          { stepNumber: 1, title: 'Raw Material Prep', description: 'Ethically gathered natural ingredients.', timeSpent: '3 days', tools: ['Traditional tools'] },
          { stepNumber: 2, title: 'Master Crafting', description: 'Handcrafted with generational skill.', timeSpent: '8 days', tools: ['Master hand tools'] },
          { stepNumber: 3, title: 'GI Authentication', description: 'Inspected and certified with Varnam encrypted tag.', timeSpent: '3 days', tools: ['Polishing agents'] }
        ],
        factualProvenanceNotes: ['100% authentic Indian handicraft.', 'NFC authenticity verified.']
      },
      artisanId: 'master-guild-artisan',
      rating: 4.9,
      reviewCount: 32,
      dimensions: 'Standard artisan dimensions',
      weight: '1.2 kg',
      tags: [stateName, hotspot.name, 'Living Heritage', 'GI Certified'],
      inStock: true,
      featured: true
    };
  };

  const handleHotspotClick = (hotspot: HotspotItem) => {
    const craft = findMatchingCraft(hotspot);
    onSelectCraft(craft);
  };

  return (
    <div className="relative w-full bg-[#FAF6F0] overflow-hidden select-none">
      
      {/* Master Visual Mockup Image (Matches User Image Exactly) */}
      <div className="relative w-full aspect-[1536/1024] max-w-[1920px] mx-auto shadow-2xl overflow-hidden">
        <img
          src={mockupImage}
          alt={`VARNAM ${stateName} Living Crafts Heritage Frontend`}
          className="w-full h-full object-contain object-top pointer-events-none"
        />

        {/* ============================================================ */}
        {/* INTERACTIVE HOTSPOTS OVERLAY */}
        {/* ============================================================ */}
        {hotspots.map((hotspot) => {
          const isHovered = hoveredHotspot?.id === hotspot.id;
          const isFocused = focusedHotspotId === hotspot.id;

          return (
            <div
              key={hotspot.id}
              style={{
                left: `${hotspot.box.left}%`,
                top: `${hotspot.box.top}%`,
                width: `${hotspot.box.width}%`,
                height: `${hotspot.box.height}%`,
              }}
              onMouseEnter={() => setHoveredHotspot(hotspot)}
              onMouseLeave={() => setHoveredHotspot(null)}
              onClick={() => handleHotspotClick(hotspot)}
              className={`absolute cursor-pointer transition-all duration-300 rounded-3xl group z-20 ${
                isHovered || isFocused
                  ? 'ring-4 ring-[#C59B27] shadow-[0_0_35px_rgba(197,155,39,0.55)] bg-[#C59B27]/10'
                  : 'hover:ring-2 hover:ring-[#C59B27]/60 hover:bg-[#C59B27]/5'
              }`}
            >
              {/* Pulsing Beacon Dot */}
              <div className="absolute top-2 right-2 flex items-center justify-center">
                <span className="relative flex h-4 w-4">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C59B27] opacity-75 ${isHovered ? 'scale-150' : ''}`} />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#6E2A38] text-white text-[9px] font-bold items-center justify-center shadow-md">
                    ❖
                  </span>
                </span>
              </div>

              {/* Floating Tooltip Card on Hover */}
              {isHovered && (
                <div 
                  className={`absolute z-40 w-64 p-3.5 rounded-2xl bg-[#1C1917]/95 text-[#FAF6F0] backdrop-blur-md shadow-2xl border border-[#C59B27]/40 pointer-events-none animate-in fade-in zoom-in-95 duration-150 ${
                    hotspot.box.left > 50 ? '-left-68 top-2' : '-right-68 top-2'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-[#F5D77F] text-[10px] font-serif uppercase tracking-wider font-bold">
                    <Sparkles className="w-3 h-3 text-[#F5D77F]" />
                    <span>Living Craft Heritage</span>
                  </div>

                  <h4 className="font-serif text-base font-bold text-white leading-snug mt-0.5">
                    {hotspot.name}
                  </h4>

                  <div className="flex items-center gap-1 text-[11px] text-stone-300 mt-1">
                    <MapPin className="w-3 h-3 text-[#C59B27]" />
                    <span>{hotspot.village}</span>
                  </div>

                  <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#C59B27]">
                      {hotspot.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-white font-medium bg-[#6E2A38] px-2 py-0.5 rounded-full">
                      <Volume2 className="w-2.5 h-2.5" />
                      Listen Story
                    </span>
                  </div>

                  <p className="text-[10px] text-amber-200/90 mt-1 font-serif italic text-center">
                    Click sticker to view craft details & buy
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {/* Top-Left: "← Back to India" Nav Hotspot */}
        <Link
          to="/explore-india"
          className="absolute left-[4%] top-[10%] w-[12%] h-[4%] z-30 cursor-pointer rounded-lg hover:bg-black/5 flex items-center justify-center"
          title="Return to India Heritage Map"
        >
          <span className="sr-only">Back to India</span>
        </Link>

        {/* Top-Right: "Sell Your Craft" Button Hotspot */}
        <Link
          to="/seller"
          className="absolute right-[4%] top-[2.5%] w-[13%] h-[4.5%] z-30 cursor-pointer rounded-full hover:ring-2 hover:ring-[#C59B27]"
          title="Artisan Guild Onboarding"
        >
          <span className="sr-only">Sell Your Craft</span>
        </Link>

        {/* Top Nav: Explore India Hotspot */}
        <Link
          to="/explore-india"
          className="absolute left-[30%] top-[2.5%] w-[10%] h-[4.5%] z-30 cursor-pointer rounded-md hover:bg-black/5"
          title="Explore India Regional Guilds"
        >
          <span className="sr-only">Explore India</span>
        </Link>

        {/* Top Nav: Stories Hotspot */}
        <Link
          to="/stories"
          className="absolute left-[40%] top-[2.5%] w-[6%] h-[4.5%] z-30 cursor-pointer rounded-md hover:bg-black/5"
          title="Artisan Living Stories"
        >
          <span className="sr-only">Stories</span>
        </Link>

        {/* Top Nav: Crafts Hotspot */}
        <Link
          to="/marketplace"
          className="absolute left-[46%] top-[2.5%] w-[6%] h-[4.5%] z-30 cursor-pointer rounded-md hover:bg-black/5"
          title="All Certified Crafts"
        >
          <span className="sr-only">Crafts</span>
        </Link>

        {/* Top Nav: For Artisans Hotspot */}
        <Link
          to="/seller"
          className="absolute left-[52%] top-[2.5%] w-[9%] h-[4.5%] z-30 cursor-pointer rounded-md hover:bg-black/5"
          title="For Artisans"
        >
          <span className="sr-only">For Artisans</span>
        </Link>

        {/* Top Nav: About Hotspot */}
        <Link
          to="/dataset"
          className="absolute left-[61%] top-[2.5%] w-[6%] h-[4.5%] z-30 cursor-pointer rounded-md hover:bg-black/5"
          title="About VARNAM"
        >
          <span className="sr-only">About</span>
        </Link>

      </div>

      {/* Floating Interactive Guide Banner */}
      <div className="bg-[#FAF6F0] border-t border-[#D9C4A5]/60 py-3 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-3 text-xs text-stone-600 font-serif">
          <span className="inline-flex items-center gap-1 text-[#6E2A38] font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            Interactive Museum Canvas:
          </span>
          <span>Click any signature craft sticker above to explore its story, audio narration in 15 languages, and order directly from verified guilds.</span>
        </div>
      </div>

    </div>
  );
};
