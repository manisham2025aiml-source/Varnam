import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_ARTISANS } from '../data/artisans';
import { ALL_CRAFTS } from '../data/crafts';
import { CraftCard } from '../components/craft/CraftCard';
import { QuickViewModal } from '../components/craft/QuickViewModal';
import { Craft } from '../types';
import { useVarnam } from '../context/VarnamContext';
import { 
  Award, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Send, 
  Users, 
  Sparkles, 
  BookOpen, 
  Hammer, 
  Layers, 
  Quote, 
  CheckCircle2, 
  X 
} from 'lucide-react';

export const ArtisanDetailPage: React.FC = () => {
  const { artisanId } = useParams<{ artisanId: string }>();
  const { showToast } = useVarnam();

  const artisan = ALL_ARTISANS.find(a => a.id === artisanId);

  if (!artisan) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-stone-900">
          Artisan Profile Not Found
        </h2>
        <Link
          to="/artisans"
          className="px-6 py-2.5 bg-[#C85A32] text-white rounded-full text-xs font-bold uppercase tracking-wider"
        >
          Return to Artisans Directory
        </Link>
      </div>
    );
  }

  const [activeTab, setActiveTab] = useState<'story' | 'craft' | 'process' | 'collection' | 'words'>('story');
  const [quickViewCraft, setQuickViewCraft] = useState<Craft | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState('Bespoke Heritage Commission');
  const [enquiryMessage, setEnquiryMessage] = useState('');
  const [enquirySent, setEnquirySent] = useState(false);

  const artisanCrafts = ALL_CRAFTS.filter(c => c.artisanId === artisan.id || artisan.craftIds.includes(c.id));

  const handleSendEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySent(true);
    showToast('Enquiry Sent to Guild', `Your commission enquiry was delivered to ${artisan.name}'s studio.`, 'gold');
    setTimeout(() => {
      setEnquirySent(false);
      setEnquiryModalOpen(false);
      setEnquiryMessage('');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-medium text-stone-500">
          <Link to="/" className="hover:text-stone-900 transition">Home</Link>
          <span>/</span>
          <Link to="/artisans" className="hover:text-stone-900 transition">Artisans</Link>
          <span>/</span>
          <span className="text-stone-900 font-semibold">{artisan.name}</span>
        </nav>

        {/* Hero Banner with Artisan Portrait */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#C59B27]/30 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#C59B27]/40 ring-4 ring-[#FAF6F0]">
                <img
                  src={artisan.avatar}
                  alt={artisan.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#1B2A4A] text-[#D4AF37] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  {artisan.verifiedStatus}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#FAF6F0] text-[#7A2021] border border-[#C59B27]/30">
                  {artisan.generation}
                </span>
                <span className="text-xs font-semibold text-stone-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
                  {artisan.village}, {artisan.stateName}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917] leading-tight">
                {artisan.name}
              </h1>

              <p className="text-sm font-semibold text-[#C85A32]">
                {artisan.title}
              </p>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans max-w-2xl">
                {artisan.bio}
              </p>

              {/* Awards Row */}
              <div className="space-y-1 pt-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">
                  National Honors & Seals:
                </span>
                <div className="flex flex-wrap gap-2">
                  {artisan.awards.map((award, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-[#FAF6F0] text-[#1B2A4A] border border-[#C59B27]/30"
                    >
                      <Award className="w-3.5 h-3.5 text-[#C59B27]" />
                      {award}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Action */}
              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => setEnquiryModalOpen(true)}
                  className="px-6 py-3 bg-[#C85A32] hover:bg-[#B34724] text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Commission Custom Heritage Piece</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Interactive Tabs: My Story / My Craft / My Process / My Collection / Words */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#C59B27]/30 shadow-xl space-y-10">
          
          <div className="flex border-b border-stone-200 overflow-x-auto justify-center gap-3 sm:gap-8 pb-3">
            {[
              { id: 'story', label: 'My Story & Journey', icon: BookOpen },
              { id: 'craft', label: 'My Craft Heritage', icon: Hammer },
              { id: 'process', label: 'My Traditional Process', icon: Layers },
              { id: 'collection', label: `My Collection (${artisanCrafts.length})`, icon: Sparkles },
              { id: 'words', label: 'Words from the Artisan', icon: Quote },
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-3 px-2 text-xs sm:text-sm font-semibold tracking-wide transition flex items-center gap-2 border-b-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-[#C85A32] text-[#C85A32]'
                      : 'border-transparent text-stone-500 hover:text-stone-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab 1: Story & Journey Timeline */}
          {activeTab === 'story' && (
            <div className="space-y-10 max-w-4xl mx-auto animate-in fade-in duration-300">
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                  Ancestral Lineage & Early Memory
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">
                  {artisan.bio}
                </p>
              </div>

              {/* Visual Journey Timeline */}
              <div className="space-y-6 pt-4 border-t border-stone-100">
                <h4 className="font-serif text-xl font-bold text-[#7A2021] flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#C85A32]" />
                  Visual Journey Timeline
                </h4>

                <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#C59B27]/40">
                  {artisan.journeyTimeline.map((item, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-[#FAF6F0] border-2 border-[#C85A32] flex items-center justify-center ring-4 ring-white">
                        <div className="w-2 h-2 rounded-full bg-[#C85A32]" />
                      </div>
                      <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#C59B27]/25 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#C85A32]">
                            {item.year}
                          </span>
                          <span className="text-[10px] font-semibold text-stone-400">
                            Milestone
                          </span>
                        </div>
                        <h5 className="font-serif text-sm font-bold text-[#1C1917]">
                          {item.milestone}
                        </h5>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Craft Heritage */}
          {activeTab === 'craft' && (
            <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-300 text-sm text-stone-700 leading-relaxed">
              <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                Mastery of {artisan.craftSpecialty}
              </h3>
              <p>
                {artisan.techniqueOverview}
              </p>
              <div className="p-6 bg-[#FAF6F0] rounded-2xl border border-[#C59B27]/25 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A2021] block">
                  Studio Apprenticeship:
                </span>
                <p className="text-xs text-stone-600 leading-relaxed">
                  The studio currently mentors <strong>{artisan.apprenticesCount} young apprentices</strong> from rural villages, providing stipend support, master casting instruction, and Sanskrit Agamic grammar training.
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Process */}
          {activeTab === 'process' && (
            <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-300 text-sm text-stone-700 leading-relaxed">
              <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                Technique Overview & Raw Sourcing
              </h3>
              <p>{artisan.techniqueOverview}</p>
            </div>
          )}

          {/* Tab 4: Collection */}
          {activeTab === 'collection' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center max-w-lg mx-auto">
                <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                  Available Masterpieces
                </h3>
                <p className="text-xs text-stone-500">
                  Each craft is signed, verified, and embedded with a unique cryptographic NFC tag.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {artisanCrafts.map(craft => (
                  <CraftCard
                    key={craft.id}
                    craft={craft}
                    onQuickView={(c) => setQuickViewCraft(c)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Tab 5: Words from Artisan */}
          {activeTab === 'words' && (
            <div className="max-w-2xl mx-auto text-center space-y-6 animate-in fade-in duration-300 py-8">
              <Quote className="w-12 h-12 text-[#C59B27] mx-auto opacity-40" />
              <p className="font-serif text-xl sm:text-2xl italic text-[#1C1917] leading-relaxed">
                "{artisan.quote}"
              </p>
              <div className="pt-2">
                <span className="font-serif font-bold text-base text-[#7A2021] block">
                  {artisan.name}
                </span>
                <span className="text-xs text-stone-500">
                  {artisan.title} • {artisan.village}
                </span>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Commission Enquiry Modal */}
      {enquiryModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 flex items-center justify-center">
          <div 
            onClick={() => setEnquiryModalOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#C59B27]/40 z-10 space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <Send className="w-5 h-5 text-[#C85A32]" />
                <h4 className="font-serif text-lg font-bold text-[#1C1917]">
                  Direct Studio Commission
                </h4>
              </div>
              <button
                onClick={() => setEnquiryModalOpen(false)}
                className="text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {enquirySent ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h5 className="font-serif text-lg font-bold text-[#1C1917]">
                  Enquiry Transmitted
                </h5>
                <p className="text-xs text-stone-600">
                  {artisan.name}'s workshop coordinator will respond within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendEnquiry} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-stone-700">Artisan</label>
                  <input
                    type="text"
                    disabled
                    value={`${artisan.name} (${artisan.village})`}
                    className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-xl text-stone-500 font-semibold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-stone-700">Commission Type</label>
                  <select
                    value={enquirySubject}
                    onChange={e => setEnquirySubject(e.target.value)}
                    className="w-full p-2.5 bg-white border border-stone-200 rounded-xl"
                  >
                    <option value="Bespoke Heritage Commission">Bespoke Heritage Commission</option>
                    <option value="Temple / Shrine Installation">Temple / Shrine Installation</option>
                    <option value="Bridal Heirloom Piece">Bridal Heirloom Piece</option>
                    <option value="Corporate Cultural Gift">Corporate Cultural Gift</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-stone-700">Describe Your Requirements</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Mention preferred dimensions, motifs, timeline, or spiritual requirements..."
                    value={enquiryMessage}
                    onChange={e => setEnquiryMessage(e.target.value)}
                    className="w-full p-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#C85A32] hover:bg-[#B34724] text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md transition"
                >
                  Send Direct to Workshop
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Quick View Modal */}
      <QuickViewModal
        craft={quickViewCraft}
        onClose={() => setQuickViewCraft(null)}
      />

    </div>
  );
};
