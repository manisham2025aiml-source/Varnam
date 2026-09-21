import React, { useState } from 'react';
import { 
  Database, 
  Download, 
  Copy, 
  Check, 
  FileCode, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  Search, 
  ExternalLink,
  Code2
} from 'lucide-react';
import { useVarnam } from '../context/VarnamContext';
import { INDIAN_STATES } from '../data/states';
import { ALL_CRAFTS } from '../data/crafts';
import { ALL_ARTISANS } from '../data/artisans';
import { EDITORIAL_STORIES } from '../data/stories';
import { CURATED_COLLECTIONS } from '../data/collections';
import { VERIFICATION_REGISTRY } from '../data/verification';

type DatasetTab = 'overview' | 'states' | 'crafts' | 'artisans' | 'collections' | 'stories' | 'verification' | 'convex';

const CONVEX_SNAPSHOT_TABLES: Record<string, any[]> = {
  authAccounts: [
    {
      _id: "j575sw0r58aksg3t6jc81d16p58er2vz",
      _creationTime: 1789925225118.7039,
      provider: "email-otp",
      providerAccountId: "manisha.m2025aiml@sece.ac.in",
      emailVerified: "manisha.m2025aiml@sece.ac.in",
      userId: "jx7fm8b9mfcsn7hzc24yzq0w8s8esbg0"
    }
  ],
  users: [
    {
      _id: "jx7fm8b9mfcsn7hzc24yzq0w8s8esbg0",
      _creationTime: 1789925225118.7036,
      email: "manisha.m2025aiml@sece.ac.in",
      emailVerificationTime: 1789925258335.0
    }
  ],
  authSessions: [
    {
      _id: "jh78cp9716j5jh3cjyn78c6rnn8erh5m",
      _creationTime: 1789925258335.5332,
      userId: "jx7fm8b9mfcsn7hzc24yzq0w8s8esbg0",
      expirationTime: 1792517258335.0
    }
  ],
  authRefreshTokens: [
    {
      _id: "jd71sw1wyb1mkqwamgsqsqsf2x8erh0j",
      _creationTime: 1789925258335.5334,
      sessionId: "jh78cp9716j5jh3cjyn78c6rnn8erh5m",
      expirationTime: 1792517258335.0,
      firstUsedTime: 1789925259870.0
    },
    {
      _id: "jd75d0cm3p22p051z3s39htbe98es5sx",
      _creationTime: 1789925259870.477,
      sessionId: "jh78cp9716j5jh3cjyn78c6rnn8erh5m",
      parentRefreshTokenId: "jd71sw1wyb1mkqwamgsqsqsf2x8erh0j",
      expirationTime: 1792517259870.0,
      firstUsedTime: 1789925296389.0
    },
    {
      _id: "jd7bmrkfpk2f3apzc1g2zwp5r18er03j",
      _creationTime: 1789925296389.2966,
      sessionId: "jh78cp9716j5jh3cjyn78c6rnn8erh5m",
      parentRefreshTokenId: "jd75d0cm3p22p051z3s39htbe98es5sx",
      expirationTime: 1792517296389.0,
      firstUsedTime: 1789925385994.0
    },
    {
      _id: "jd7cjn1395gxt89b1v73yz5xpd8erdr8",
      _creationTime: 1789925385994.9756,
      sessionId: "jh78cp9716j5jh3cjyn78c6rnn8erh5m",
      parentRefreshTokenId: "jd7bmrkfpk2f3apzc1g2zwp5r18er03j",
      expirationTime: 1792517385994.0
    }
  ],
  likes: [
    { _id: "like-1", productId: "VN-0001", userId: "jx7fm8b9mfcsn7hzc24yzq0w8s8esbg0", _creationTime: 1789925260000 },
    { _id: "like-2", productId: "VN-0002", userId: "jx7fm8b9mfcsn7hzc24yzq0w8s8esbg0", _creationTime: 1789925265000 },
    { _id: "like-3", productId: "VN-0003", userId: "user-ananya-heritage", _creationTime: 1789925270000 }
  ],
  products: [
    {
      _id: "prod-vn-0001",
      productId: "VN-0001",
      name: "Pollachi Bamboo & Cane Basket",
      artisanName: "Meena of Pollachi",
      price: 850,
      origin: "Tamil Nadu",
      verified: true,
      nfcLinked: true
    },
    {
      _id: "prod-vn-0002",
      productId: "VN-0002",
      name: "Swamimalai Bronze Nataraja",
      artisanName: "S. Rajendran Sthapathi",
      price: 38500,
      origin: "Tamil Nadu",
      verified: true,
      nfcLinked: true
    }
  ],
  reviews: [
    {
      _id: "rev-001",
      productId: "VN-0001",
      userId: "jx7fm8b9mfcsn7hzc24yzq0w8s8esbg0",
      customerName: "Manisha M",
      rating: 5,
      comment: "Exquisite Pollachi craft and genuine NFC verification! Tapped my phone against the rim and immediately saw Meena’s master craft certificate and village geotag.",
      verifiedBuyer: true
    },
    {
      _id: "rev-002",
      productId: "VN-0002",
      userId: "user-ananya-heritage",
      customerName: "Ananya Sharma",
      rating: 5,
      comment: "Panchaloha masterpiece — museum grade. The lost-wax casting details on Nataraja’s flying jata are spellbinding.",
      verifiedBuyer: true
    }
  ],
  translations: [
    {
      _id: "trans-001",
      targetId: "bamboo-basket",
      locale: "ta",
      fieldName: "story",
      translatedText: "பொள்ளாச்சி ஆனைமலை அடிவாரத்தில் வாழும் பாரம்பரிய மூங்கில் நெசவாளர்களால், இயற்கையான மூங்கிலை மெல்லிய இழைகளாக பிரித்து கலைநயத்துடன் நெய்யப்பட்டது."
    },
    {
      _id: "trans-002",
      targetId: "swamimalai-bronze-nataraja",
      locale: "ta",
      fieldName: "story",
      translatedText: "காவிரி ஆற்றுப்படுகை வண்டல் மண்ணை பயன்படுத்தி சோழர் கால மரபு சிற்பிகளால் பஞ்சலோகத்தால் வார்க்கப்பட்ட புனிதமான நடராஜர் திருவுருவம்."
    }
  ],
  authVerificationCodes: [
    { _id: "code-sample", email: "manisha.m2025aiml@sece.ac.in", code: "123456", status: "verified" }
  ],
  authRateLimits: [],
  authVerifiers: []
};

export const DatasetPage: React.FC = () => {
  const { showToast } = useVarnam();
  const [activeTab, setActiveTab] = useState<DatasetTab>('overview');
  const [selectedConvexTable, setSelectedConvexTable] = useState<string>('authAccounts');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    showToast('Copied to Clipboard', `${label} copied to clipboard!`, 'info');
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const downloadJson = (filename: string) => {
    const url = `/dataset/${filename}`;
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('Dataset Export', `Downloading ${filename}...`, 'success');
  };

  const downloadConvexSnapshot = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(CONVEX_SNAPSHOT_TABLES, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = "convex_dataset_snapshot.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast('Convex Snapshot Export', 'Downloaded convex_dataset_snapshot.json', 'gold');
  };

  const getFilteredData = () => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) {
      switch (activeTab) {
        case 'states': return INDIAN_STATES;
        case 'crafts': return ALL_CRAFTS;
        case 'artisans': return ALL_ARTISANS;
        case 'collections': return CURATED_COLLECTIONS;
        case 'stories': return EDITORIAL_STORIES;
        case 'verification': return VERIFICATION_REGISTRY;
        case 'convex': return CONVEX_SNAPSHOT_TABLES[selectedConvexTable] || [];
        default: return null;
      }
    }

    switch (activeTab) {
      case 'states':
        return INDIAN_STATES.filter(s => s.name.toLowerCase().includes(q) || s.tagLine.toLowerCase().includes(q));
      case 'crafts':
        return ALL_CRAFTS.filter(c => c.name.toLowerCase().includes(q) || c.stateName.toLowerCase().includes(q) || c.technique.toLowerCase().includes(q));
      case 'artisans':
        return ALL_ARTISANS.filter(a => a.name.toLowerCase().includes(q) || a.craftSpecialty.toLowerCase().includes(q) || a.stateName.toLowerCase().includes(q));
      case 'collections':
        return CURATED_COLLECTIONS.filter(c => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q));
      case 'stories':
        return EDITORIAL_STORIES.filter(s => s.title.toLowerCase().includes(q) || s.stateName.toLowerCase().includes(q));
      case 'verification':
        return Object.fromEntries(
          Object.entries(VERIFICATION_REGISTRY).filter(([k, v]) => 
            k.toLowerCase().includes(q) || v.craftName.toLowerCase().includes(q) || v.artisanName.toLowerCase().includes(q)
          )
        );
      case 'convex': {
        const tableDocs = CONVEX_SNAPSHOT_TABLES[selectedConvexTable] || [];
        return tableDocs.filter(item => JSON.stringify(item).toLowerCase().includes(q));
      }
      default:
        return null;
    }
  };

  const activeData = getFilteredData();
  const activeDataString = activeData ? JSON.stringify(activeData, null, 2) : '';

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/25 text-[#C85A32] text-xs font-medium uppercase tracking-widest mb-4">
            <Database className="w-3.5 h-3.5" />
            Open Cultural Heritage Dataset v2.0
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1917] tracking-tight mb-4">
            The VARNAM Knowledge Graph
          </h1>
          <p className="text-lg text-[#57534E] leading-relaxed">
            A comprehensive, verified digital archive of Indian regional handicrafts, master artisan genealogies, sacred creation steps, GI certificates, and cryptographic NFC provenance.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          <div className="bg-white/80 p-5 rounded-2xl border border-[#E7E5E4] shadow-xs text-center">
            <span className="block font-serif text-3xl font-bold text-[#C85A32]">12</span>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#78716C] mt-1">States & UTs</span>
          </div>
          <div className="bg-white/80 p-5 rounded-2xl border border-[#E7E5E4] shadow-xs text-center">
            <span className="block font-serif text-3xl font-bold text-[#7A2021]">47</span>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#78716C] mt-1">GI Crafts</span>
          </div>
          <div className="bg-white/80 p-5 rounded-2xl border border-[#E7E5E4] shadow-xs text-center">
            <span className="block font-serif text-3xl font-bold text-[#C59B27]">21</span>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#78716C] mt-1">Living Masters</span>
          </div>
          <div className="bg-white/80 p-5 rounded-2xl border border-[#E7E5E4] shadow-xs text-center">
            <span className="block font-serif text-3xl font-bold text-[#2C5E43]">4</span>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#78716C] mt-1">Collections</span>
          </div>
          <div className="bg-white/80 p-5 rounded-2xl border border-[#E7E5E4] shadow-xs text-center">
            <span className="block font-serif text-3xl font-bold text-[#1B4965]">4</span>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#78716C] mt-1">Stories</span>
          </div>
          <div className="bg-white/80 p-5 rounded-2xl border border-[#E7E5E4] shadow-xs text-center">
            <span className="block font-serif text-3xl font-bold text-[#8B263E]">100%</span>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#78716C] mt-1">Verified Origin</span>
          </div>
        </div>

        {/* Master Download CTA Banner */}
        <div className="bg-gradient-to-r from-[#2B1B17] via-[#3B2219] to-[#2B1B17] rounded-3xl p-6 sm:p-8 text-[#FAF6F0] mb-12 shadow-xl border border-[#C59B27]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#C85A32]/20 border border-[#C85A32]/40 flex items-center justify-center shrink-0">
              <FileCode className="w-7 h-7 text-[#DDA15E]" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#C59B27]/20 text-[#DDA15E] font-semibold tracking-wider">
                  ALL-IN-ONE
                </span>
                <span className="text-xs text-[#A8A29E]">varnam_complete_dataset.json</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Download Complete VARNAM Dataset
              </h3>
              <p className="text-sm text-[#D6D3D1] max-w-xl mt-1">
                Includes all 12 cultural states, 47 craft profiles with 4-step creation logs, 21 artisan journey timelines, 4 editorial stories, collections, and cryptographic NFC verification records.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => downloadJson('varnam_complete_dataset.json')}
              className="px-6 py-3 rounded-xl bg-[#C85A32] hover:bg-[#B34724] text-white font-medium text-sm flex items-center gap-2 shadow-lg transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Full JSON
            </button>
            <a
              href="/dataset/varnam_complete_dataset.json"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm flex items-center gap-2 border border-white/20 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Raw API View
            </a>
          </div>
        </div>

        {/* Individual File Download Cards */}
        <h2 className="font-serif text-2xl font-bold text-[#1C1917] mb-4">
          Individual Module Downloads
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          
          {/* States */}
          <div className="bg-white p-5 rounded-2xl border border-[#E7E5E4] hover:border-[#C85A32]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[#C85A32]">states.json</span>
                <span className="text-xs text-[#78716C]">12 States</span>
              </div>
              <h4 className="font-serif font-bold text-[#1C1917] text-lg">Indian States & Cultural Identity</h4>
              <p className="text-xs text-[#57534E] mt-1 mb-4 leading-relaxed">
                State stories, regional motifs, accent palettes, GI craft counts, capitals, and architectural highlights.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-[#F5F5F4]">
              <button
                onClick={() => downloadJson('states.json')}
                className="flex-1 py-2 px-3 rounded-lg bg-[#FAF6F0] hover:bg-[#F5EBE1] text-[#1C1917] font-medium text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Download
              </button>
              <button
                onClick={() => copyToClipboard(JSON.stringify(INDIAN_STATES, null, 2), 'States JSON', 'states')}
                className="p-2 rounded-lg bg-[#FAF6F0] hover:bg-[#F5EBE1] text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
                title="Copy JSON"
              >
                {copiedKey === 'states' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Crafts */}
          <div className="bg-white p-5 rounded-2xl border border-[#E7E5E4] hover:border-[#C85A32]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[#7A2021]">crafts.json</span>
                <span className="text-xs text-[#78716C]">47 Crafts</span>
              </div>
              <h4 className="font-serif font-bold text-[#1C1917] text-lg">Master Crafts Registry</h4>
              <p className="text-xs text-[#57534E] mt-1 mb-4 leading-relaxed">
                Varnam Digital IDs, vernacular names, materials, pricing, GI numbers, and 4-step creation logs with tools.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-[#F5F5F4]">
              <button
                onClick={() => downloadJson('crafts.json')}
                className="flex-1 py-2 px-3 rounded-lg bg-[#FAF6F0] hover:bg-[#F5EBE1] text-[#1C1917] font-medium text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Download
              </button>
              <button
                onClick={() => copyToClipboard(JSON.stringify(ALL_CRAFTS, null, 2), 'Crafts JSON', 'crafts')}
                className="p-2 rounded-lg bg-[#FAF6F0] hover:bg-[#F5EBE1] text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
                title="Copy JSON"
              >
                {copiedKey === 'crafts' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Artisans */}
          <div className="bg-white p-5 rounded-2xl border border-[#E7E5E4] hover:border-[#C85A32]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[#C59B27]">artisans.json</span>
                <span className="text-xs text-[#78716C]">21 Living Masters</span>
              </div>
              <h4 className="font-serif font-bold text-[#1C1917] text-lg">Artisans & Master Lineages</h4>
              <p className="text-xs text-[#57534E] mt-1 mb-4 leading-relaxed">
                Multi-generational lineage biographies, awards, 5-milestone journey timelines, and personal philosophy quotes.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-[#F5F5F4]">
              <button
                onClick={() => downloadJson('artisans.json')}
                className="flex-1 py-2 px-3 rounded-lg bg-[#FAF6F0] hover:bg-[#F5EBE1] text-[#1C1917] font-medium text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Download
              </button>
              <button
                onClick={() => copyToClipboard(JSON.stringify(ALL_ARTISANS, null, 2), 'Artisans JSON', 'artisans')}
                className="p-2 rounded-lg bg-[#FAF6F0] hover:bg-[#F5EBE1] text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
                title="Copy JSON"
              >
                {copiedKey === 'artisans' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Collections */}
          <div className="bg-white p-5 rounded-2xl border border-[#E7E5E4] hover:border-[#C85A32]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[#2C5E43]">collections.json</span>
                <span className="text-xs text-[#78716C]">4 Collections</span>
              </div>
              <h4 className="font-serif font-bold text-[#1C1917] text-lg">Curated Heritage Collections</h4>
              <p className="text-xs text-[#57534E] mt-1 mb-4 leading-relaxed">
                Themed groupings: Imperial Wedding Heritage, Sacred Sanctuaries, Living Traditions, and Royal Court Masterpieces.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-[#F5F5F4]">
              <button
                onClick={() => downloadJson('collections.json')}
                className="flex-1 py-2 px-3 rounded-lg bg-[#FAF6F0] hover:bg-[#F5EBE1] text-[#1C1917] font-medium text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Download
              </button>
              <button
                onClick={() => copyToClipboard(JSON.stringify(CURATED_COLLECTIONS, null, 2), 'Collections JSON', 'collections')}
                className="p-2 rounded-lg bg-[#FAF6F0] hover:bg-[#F5EBE1] text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
                title="Copy JSON"
              >
                {copiedKey === 'collections' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Stories */}
          <div className="bg-white p-5 rounded-2xl border border-[#E7E5E4] hover:border-[#C85A32]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[#1B4965]">stories.json</span>
                <span className="text-xs text-[#78716C]">4 Editorial Stories</span>
              </div>
              <h4 className="font-serif font-bold text-[#1C1917] text-lg">Cultural Research Stories</h4>
              <p className="text-xs text-[#57534E] mt-1 mb-4 leading-relaxed">
                In-depth editorial articles covering secret Aranmula metallurgy, Nirona castor oil alchemy, Korvai, and Kadhwa.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-[#F5F5F4]">
              <button
                onClick={() => downloadJson('stories.json')}
                className="flex-1 py-2 px-3 rounded-lg bg-[#FAF6F0] hover:bg-[#F5EBE1] text-[#1C1917] font-medium text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Download
              </button>
              <button
                onClick={() => copyToClipboard(JSON.stringify(EDITORIAL_STORIES, null, 2), 'Stories JSON', 'stories')}
                className="p-2 rounded-lg bg-[#FAF6F0] hover:bg-[#F5EBE1] text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
                title="Copy JSON"
              >
                {copiedKey === 'stories' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Verification */}
          <div className="bg-white p-5 rounded-2xl border border-[#E7E5E4] hover:border-[#C85A32]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[#8B263E]">verification.json</span>
                <span className="text-xs text-[#78716C]">Provenance Records</span>
              </div>
              <h4 className="font-serif font-bold text-[#1C1917] text-lg">NFC & Cryptographic Provenance</h4>
              <p className="text-xs text-[#57534E] mt-1 mb-4 leading-relaxed">
                NFC NTAG424 DNA UIDs, SHA-256 hashes, immutable blockchain block numbers, and raw material provenance stages.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-[#F5F5F4]">
              <button
                onClick={() => downloadJson('verification.json')}
                className="flex-1 py-2 px-3 rounded-lg bg-[#FAF6F0] hover:bg-[#F5EBE1] text-[#1C1917] font-medium text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Download
              </button>
              <button
                onClick={() => copyToClipboard(JSON.stringify(VERIFICATION_REGISTRY, null, 2), 'Verification JSON', 'verification')}
                className="p-2 rounded-lg bg-[#FAF6F0] hover:bg-[#F5EBE1] text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
                title="Copy JSON"
              >
                {copiedKey === 'verification' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Convex Snapshot */}
          <div className="bg-white p-5 rounded-2xl border border-[#C59B27]/40 hover:border-[#6E2A38] shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[#6E2A38]">demo_dataset.convex.json</span>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">11 Tables</span>
              </div>
              <h4 className="font-serif font-bold text-[#1C1917] text-lg">Convex Database Snapshot</h4>
              <p className="text-xs text-[#57534E] mt-1 mb-4 leading-relaxed">
                Exported snapshot containing Convex Auth OTP accounts, verified users, sessions, refresh tokens, craft likes, reviews, and multilingual translations.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-3 border-t border-[#F5F5F4]">
              <button
                onClick={downloadConvexSnapshot}
                className="flex-1 py-2 px-3 rounded-lg bg-[#6E2A38] hover:bg-[#541E2A] text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Download JSON
              </button>
              <button
                onClick={() => copyToClipboard(JSON.stringify(CONVEX_SNAPSHOT_TABLES, null, 2), 'Convex Snapshot JSON', 'convex-all')}
                className="p-2 rounded-lg bg-[#FAF6F0] hover:bg-[#F5EBE1] text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
                title="Copy JSON"
              >
                {copiedKey === 'convex-all' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>

        {/* Interactive Data Explorer */}
        <div className="bg-white rounded-3xl border border-[#E7E5E4] shadow-md overflow-hidden mb-12">
          <div className="p-6 border-b border-[#E7E5E4] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#1C1917] flex items-center gap-2">
                <Code2 className="w-6 h-6 text-[#C85A32]" />
                Live Interactive Dataset Explorer
              </h3>
              <p className="text-xs text-[#78716C] mt-0.5">
                Inspect JSON schemas, search entities, and copy structured records in real-time.
              </p>
            </div>

            {/* Tab selection */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#FAF6F0] rounded-xl border border-[#E7E5E4]">
              {(['overview', 'states', 'crafts', 'artisans', 'collections', 'stories', 'verification', 'convex'] as DatasetTab[]).map(tab => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setSearchQuery(''); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                    activeTab === tab 
                      ? 'bg-[#C85A32] text-white shadow-xs' 
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {tab === 'convex' ? '⚡ Convex Live Snapshot' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Search bar & copy bar */}
          {activeTab !== 'overview' && (
            <div className="px-6 py-3 bg-[#FAF6F0]/60 border-b border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#A8A29E]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${activeTab}...`}
                  className="w-full pl-9 pr-4 py-1.5 rounded-lg border border-[#D6D3D1] bg-white text-xs text-[#1C1917] focus:outline-hidden focus:ring-2 focus:ring-[#C85A32]"
                />
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <span className="text-xs text-[#78716C]">
                  {Array.isArray(activeData) ? `${activeData.length} records found` : 'Structured JSON Object'}
                </span>
                <button
                  onClick={() => copyToClipboard(activeDataString, `${activeTab} JSON`, 'active-view')}
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#D6D3D1] hover:bg-[#FAF6F0] text-xs font-medium text-[#1C1917] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedKey === 'active-view' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                  Copy View JSON
                </button>
              </div>
            </div>
          )}

          {/* Tab Content Display */}
          <div className="p-6">
            {activeTab === 'overview' ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#FAF6F0] p-5 rounded-2xl border border-[#E7E5E4]">
                    <h4 className="font-serif text-lg font-bold text-[#1C1917] mb-2">Schema Architecture</h4>
                    <ul className="text-xs text-[#57534E] space-y-2 leading-relaxed">
                      <li>• <strong className="text-[#1C1917]">StateData:</strong> Geo-cultural metadata, historical narrative, signature crafts mapping, primary & secondary hex palettes, SVG motif paths.</li>
                      <li>• <strong className="text-[#1C1917]">Craft:</strong> Varnam Digital ID (e.g. VRN-TN-000428), GI registration number, vernacular name, 4-step creation process with tool inventories, materials array, pricing, and master artisan relationship.</li>
                      <li>• <strong className="text-[#1C1917]">Artisan:</strong> Living legend bio, generation lineage (3rd to 7th gen), 5-milestone journey timelines, presidential awards, contact, and apprentices count.</li>
                      <li>• <strong className="text-[#1C1917]">VerificationRecord:</strong> NFC NTAG424 DNA tag chip UIDs, SHA-256 hashes, immutable ledger block heights, and multi-stage provenance inspection events.</li>
                    </ul>
                  </div>

                  <div className="bg-[#FAF6F0] p-5 rounded-2xl border border-[#E7E5E4]">
                    <h4 className="font-serif text-lg font-bold text-[#1C1917] mb-2">Integration & Licensing</h4>
                    <p className="text-xs text-[#57534E] leading-relaxed mb-3">
                      This dataset is provided under the <strong className="text-[#1C1917]">Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)</strong> license for cultural researchers, museum curators, and academic software applications.
                    </p>
                    <div className="p-3 bg-white rounded-xl border border-[#D6D3D1] font-mono text-[11px] text-[#44403C]">
                      <code>GET /dataset/varnam_complete_dataset.json</code>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1C1917] rounded-2xl p-4 overflow-x-auto text-emerald-400 font-mono text-xs max-h-96">
                  <pre>{JSON.stringify({
                    metadata: {
                      platform: 'VARNAM — AI Digital Identity & Discovery for Indian Handicrafts',
                      version: '2.0.0',
                      statesCount: 12,
                      craftsCount: 47,
                      artisansCount: 21,
                      curatedCollectionsCount: 4,
                      editorialStoriesCount: 4,
                      giVerifiedPercentage: '100%'
                    },
                    sampleState: INDIAN_STATES[0],
                    sampleCraft: ALL_CRAFTS[0],
                    sampleArtisan: ALL_ARTISANS[0]
                  }, null, 2)}</pre>
                </div>
              </div>
            ) : activeTab === 'convex' ? (
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-2 p-3 bg-[#FAF6F0] rounded-2xl border border-[#E7E5E4]">
                  <span className="text-xs font-bold text-[#6E2A38] uppercase tracking-wider pl-1">
                    Select Convex Table:
                  </span>
                  {Object.keys(CONVEX_SNAPSHOT_TABLES).map(tbl => (
                    <button
                      key={tbl}
                      onClick={() => { setSelectedConvexTable(tbl); setSearchQuery(''); }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition flex items-center gap-1.5 cursor-pointer ${
                        selectedConvexTable === tbl
                          ? 'bg-[#6E2A38] text-white shadow-sm'
                          : 'bg-white text-stone-700 hover:bg-[#F2E8DC] border border-[#D9C4A5]/60'
                      }`}
                    >
                      <span>{tbl}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        selectedConvexTable === tbl ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-600'
                      }`}>
                        {CONVEX_SNAPSHOT_TABLES[tbl].length}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="text-xs text-amber-950">
                    Showing <strong className="font-mono text-amber-900">{selectedConvexTable}</strong> ({CONVEX_SNAPSHOT_TABLES[selectedConvexTable]?.length || 0} documents) exported from Convex snapshot & synced to Varnam backend.
                  </div>
                  <button
                    onClick={() => copyToClipboard(JSON.stringify(CONVEX_SNAPSHOT_TABLES[selectedConvexTable], null, 2), `${selectedConvexTable} JSON`, 'convex-tbl')}
                    className="px-3 py-1.5 bg-white hover:bg-amber-100 text-amber-900 text-xs font-bold rounded-lg border border-amber-300 transition shrink-0"
                  >
                    Copy Table Records
                  </button>
                </div>

                <div className="bg-[#1C1917] rounded-2xl p-4 overflow-x-auto text-emerald-400 font-mono text-xs max-h-[500px]">
                  <pre>{JSON.stringify(activeData, null, 2)}</pre>
                </div>
              </div>
            ) : (
              <div className="bg-[#1C1917] rounded-2xl p-4 overflow-x-auto text-emerald-400 font-mono text-xs max-h-[500px]">
                <pre>{activeDataString}</pre>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
