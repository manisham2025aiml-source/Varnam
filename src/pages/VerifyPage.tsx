import React, { useState } from 'react';
import { VERIFICATION_REGISTRY } from '../data/verification';
import { ALL_CRAFTS } from '../data/crafts';
import { VerificationRecord } from '../types';
import { useVarnam } from '../context/VarnamContext';
import { 
  ShieldCheck, 
  Radio, 
  QrCode, 
  Search, 
  CheckCircle2, 
  Download, 
  Share2, 
  Sparkles, 
  Lock, 
  ExternalLink,
  MapPin,
  Clock,
  ArrowRight,
  Printer,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SmartStationVisualizer } from '../components/hardware/SmartStationVisualizer';
import { InStoreNfcExperience } from '../components/verify/InStoreNfcExperience';
import { LiveRfidScanner } from '../components/hardware/LiveRfidScanner';

export const VerifyPage: React.FC = () => {
  const { addToDigitalLocker, showToast } = useVarnam();
  const [activeTab, setActiveTab] = useState<'rfid' | 'instore' | 'station' | 'nfc' | 'qr' | 'manual'>('rfid');
  
  // Scanning state
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [manualInput, setManualInput] = useState('VRN-TN-000428');
  
  // Verified certificate result
  const [verifiedRecord, setVerifiedRecord] = useState<VerificationRecord | null>(
    VERIFICATION_REGISTRY['VRN-TN-000428']
  );

  const startNfcScan = (targetId = 'VRN-TN-000428') => {
    setIsScanning(true);
    setScanProgress(0);

    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          const found = VERIFICATION_REGISTRY[targetId] || VERIFICATION_REGISTRY['VRN-TN-000428'];
          setVerifiedRecord(found);
          showToast('NFC Chip Decrypted', `Authentic record for ${found.craftName} verified on ledger.`, 'gold');
          return 100;
        }
        return prev + 25;
      });
    }, 250);
  };

  const handleManualSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = manualInput.trim().toUpperCase();
    const found = VERIFICATION_REGISTRY[query];
    if (found) {
      setVerifiedRecord(found);
      showToast('Certificate Retrieved', `Loaded verified digital provenance for ${found.varnamId}`, 'gold');
    } else {
      showToast('Record Not Found', `No registered GI craft found for ID "${query}". Try sample "VRN-TN-000428".`, 'info');
    }
  };

  const matchingCraft = verifiedRecord 
    ? ALL_CRAFTS.find(c => c.varnamId === verifiedRecord.varnamId)
    : null;

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C59B27]/40 text-[#1B2A4A] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Radio className="w-3.5 h-3.5 text-[#C85A32] animate-pulse" />
            NFC NTAG424 DNA & QR Authenticity Protocol
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#1C1917]">
            Tap. Verify. <span className="text-[#C85A32] italic">Discover.</span>
          </h1>

          <p className="text-sm text-stone-600 leading-relaxed">
            Verify the physical authenticity, GI tag authority registration, and master artisan provenance of any Varnam piece using near-field communication or optical scanning.
          </p>
        </div>

        {/* Verification Interaction Hub */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#C59B27]/30 shadow-xl space-y-8">
          
          {/* Method Selector Tabs */}
          <div className="flex flex-wrap justify-center border-b border-stone-200 gap-2 sm:gap-6 pb-3">
            <button
              onClick={() => setActiveTab('rfid')}
              className={`pb-3 px-4 text-xs sm:text-sm font-bold tracking-wide transition flex items-center gap-2 border-b-2 ${
                activeTab === 'rfid'
                  ? 'border-[#C85A32] text-[#C85A32]'
                  : 'border-transparent text-stone-500 hover:text-stone-900'
              }`}
            >
              <Cpu className="w-4 h-4 text-[#C85A32] animate-pulse" />
              <span>ESP32 + RC522 RFID</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-100 text-emerald-800 font-bold flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                LIVE HARDWARE
              </span>
            </button>

            <button
              onClick={() => setActiveTab('instore')}
              className={`pb-3 px-4 text-xs sm:text-sm font-bold tracking-wide transition flex items-center gap-2 border-b-2 ${
                activeTab === 'instore'
                  ? 'border-[#C85A32] text-[#C85A32]'
                  : 'border-transparent text-stone-500 hover:text-stone-900'
              }`}
            >
              <Radio className="w-4 h-4" />
              <span>In-Store Buyer Tap</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-100 text-emerald-800 font-bold">PROMPT FLOW</span>
            </button>

            <button
              onClick={() => setActiveTab('station')}
              className={`pb-3 px-4 text-xs sm:text-sm font-bold tracking-wide transition flex items-center gap-2 border-b-2 ${
                activeTab === 'station'
                  ? 'border-[#C85A32] text-[#C85A32]'
                  : 'border-transparent text-stone-500 hover:text-stone-900'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>ESP32 Smart Station</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#C85A32]/10 text-[#C85A32] font-bold">IoT LAB</span>
            </button>

            <button
              onClick={() => setActiveTab('nfc')}
              className={`pb-3 px-4 text-xs sm:text-sm font-bold tracking-wide transition flex items-center gap-2 border-b-2 ${
                activeTab === 'nfc'
                  ? 'border-[#C85A32] text-[#C85A32]'
                  : 'border-transparent text-stone-500 hover:text-stone-900'
              }`}
            >
              <Radio className="w-4 h-4" />
              <span>Phone NFC Tap</span>
            </button>

            <button
              onClick={() => setActiveTab('qr')}
              className={`pb-3 px-4 text-xs sm:text-sm font-bold tracking-wide transition flex items-center gap-2 border-b-2 ${
                activeTab === 'qr'
                  ? 'border-[#C85A32] text-[#C85A32]'
                  : 'border-transparent text-stone-500 hover:text-stone-900'
              }`}
            >
              <QrCode className="w-4 h-4" />
              <span>QR Viewfinder</span>
            </button>

            <button
              onClick={() => setActiveTab('manual')}
              className={`pb-3 px-4 text-xs sm:text-sm font-bold tracking-wide transition flex items-center gap-2 border-b-2 ${
                activeTab === 'manual'
                  ? 'border-[#C85A32] text-[#C85A32]'
                  : 'border-transparent text-stone-500 hover:text-stone-900'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Varnam ID Search</span>
            </button>
          </div>

          {/* Mode: ESP32 + RC522 Real-time RFID Hardware Bridge */}
          {activeTab === 'rfid' && (
            <div className="animate-in fade-in duration-300">
              <LiveRfidScanner />
            </div>
          )}

          {/* Mode 0: In-Store Buyer NFC Tap & Multilingual Story Panel */}
          {activeTab === 'instore' && (
            <div className="animate-in fade-in duration-300">
              <InStoreNfcExperience />
            </div>
          )}

          {/* Mode 1: ESP32 Smart Station IoT Hardware Visualizer */}
          {activeTab === 'station' && (
            <div className="animate-in fade-in duration-300">
              <SmartStationVisualizer />
            </div>
          )}

          {/* Mode 1: Simulated NFC Tap */}
          {activeTab === 'nfc' && (
            <div className="max-w-xl mx-auto text-center space-y-6 py-6 animate-in fade-in duration-300">
              <p className="text-xs sm:text-sm text-stone-600">
                In real life, bring your NFC-enabled phone within 2cm of the craft's embedded seal. Click the sensor below to simulate an instantaneous hardware read:
              </p>

              {/* Interactive Phone Tapper Simulation */}
              <div 
                onClick={() => !isScanning && startNfcScan()}
                className={`relative w-48 h-48 rounded-full mx-auto flex flex-col items-center justify-center cursor-pointer transition-all duration-300 border-4 ${
                  isScanning
                    ? 'border-[#C85A32] bg-[#FAF6F0] animate-nfc-pulse'
                    : 'border-[#C59B27]/40 bg-[#FAF6F0] hover:scale-105 hover:border-[#C85A32] hover:shadow-2xl'
                }`}
              >
                <Radio className={`w-14 h-14 ${isScanning ? 'text-[#C85A32] animate-spin' : 'text-[#C59B27]'}`} />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1C1917] mt-2 block">
                  {isScanning ? `Decrypting (${scanProgress}%)` : 'Tap to Scan'}
                </span>
                <span className="text-[10px] text-stone-400">
                  NTAG424 DNA Simulation
                </span>
              </div>

              {/* Quick Sample Selector */}
              <div className="pt-2">
                <span className="text-[11px] text-stone-400 block mb-2">Or test sample registered crafts:</span>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    { id: 'VRN-TN-000428', label: 'Swamimalai Bronze (#428)' },
                    { id: 'VRN-TN-000429', label: 'Tanjore Gold Painting (#429)' },
                    { id: 'VRN-GJ-000210', label: 'Roghan Tree of Life (#210)' },
                    { id: 'VRN-KL-000801', label: 'Aranmula Metal Mirror (#801)' }
                  ].map(sample => (
                    <button
                      key={sample.id}
                      onClick={() => startNfcScan(sample.id)}
                      className="px-3 py-1 bg-stone-100 hover:bg-[#FAF6F0] hover:border-[#C85A32] border border-stone-200 rounded-lg text-xs font-medium text-stone-700 transition"
                    >
                      {sample.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Mode 2: Simulated QR Scanner */}
          {activeTab === 'qr' && (
            <div className="max-w-md mx-auto text-center space-y-6 py-6 animate-in fade-in duration-300">
              <div className="relative aspect-square max-w-[280px] mx-auto rounded-3xl overflow-hidden border-4 border-[#1B2A4A] bg-stone-900 flex items-center justify-center shadow-2xl">
                {/* Simulated Live Viewfinder Reticle */}
                <div className="absolute inset-6 border-2 border-[#D4AF37] border-dashed rounded-2xl animate-pulse" />
                <div className="absolute top-1/2 inset-x-8 h-0.5 bg-red-500/80 shadow-[0_0_12px_red]" />
                <QrCode className="w-32 h-32 text-white/30" />
                <span className="absolute bottom-4 text-[10px] uppercase font-bold text-white/70 bg-black/60 px-3 py-1 rounded-full">
                  Align Varnam QR Tag in Frame
                </span>
              </div>

              <button
                onClick={() => startNfcScan('VRN-TN-000428')}
                className="px-6 py-2.5 bg-[#1B2A4A] hover:bg-[#131E35] text-[#D4AF37] text-xs font-bold uppercase tracking-wider rounded-xl transition shadow-md"
              >
                Simulate Camera Optical Scan
              </button>
            </div>
          )}

          {/* Mode 3: Manual Search */}
          {activeTab === 'manual' && (
            <div className="max-w-lg mx-auto py-6 animate-in fade-in duration-300">
              <form onSubmit={handleManualSearch} className="space-y-4">
                <div className="space-y-1 text-xs">
                  <label className="font-bold text-stone-700">Enter Varnam Digital ID</label>
                  <div className="relative flex">
                    <input
                      type="text"
                      placeholder="e.g. VRN-TN-000428"
                      value={manualInput}
                      onChange={e => setManualInput(e.target.value)}
                      className="w-full px-4 py-3 bg-[#FAF6F0] border border-[#C59B27]/40 rounded-xl font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
                    />
                    <button
                      type="submit"
                      className="ml-2 px-6 py-3 bg-[#C85A32] hover:bg-[#B34724] text-white rounded-xl text-xs font-bold uppercase transition"
                    >
                      Verify
                    </button>
                  </div>
                  <p className="text-[11px] text-stone-500">
                    Try valid test IDs: <code>VRN-TN-000428</code>, <code>VRN-TN-000429</code>, <code>VRN-GJ-000210</code>, <code>VRN-KL-000801</code>
                  </p>
                </div>
              </form>
            </div>
          )}

        </div>

        {/* ============================================================ */}
        {/* RESULT: OFFICIAL DIGITAL CERTIFICATE OF AUTHENTICITY */}
        {/* ============================================================ */}
        {verifiedRecord && (
          <div className="bg-gradient-to-br from-white via-[#FAF6F0] to-white rounded-3xl p-8 sm:p-12 border-2 border-[#C59B27] shadow-2xl relative overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-400">
            
            {/* Holographic / Metallic Top Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b-2 border-[#C59B27]/30">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1B2A4A] to-[#131E35] text-[#D4AF37] flex items-center justify-center ring-4 ring-[#C59B27]/30 shadow-md">
                  <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C85A32] block">
                    National Geographical Indication Authenticity Certificate
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                    VARNAM DIGITAL AUTHENTICITY SEAL
                  </h3>
                </div>
              </div>

              <div className="text-right">
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 border border-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {verifiedRecord.authenticityStatus}
                </span>
                <span className="block text-[11px] font-mono text-stone-500 mt-1">
                  Block #{verifiedRecord.blockchainBlockNumber}
                </span>
              </div>
            </div>

            {/* Certificate Core Metadata Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-b border-[#C59B27]/20 text-xs">
              
              <div className="space-y-1">
                <span className="font-bold uppercase tracking-wider text-stone-400 block text-[10px]">
                  Craft Masterpiece
                </span>
                <h4 className="font-serif text-base font-bold text-[#1C1917]">
                  {verifiedRecord.craftName}
                </h4>
                <p className="text-stone-500">GI Registration: {verifiedRecord.giNumber} ({verifiedRecord.giYear})</p>
              </div>

              <div className="space-y-1">
                <span className="font-bold uppercase tracking-wider text-stone-400 block text-[10px]">
                  Master Artisan & Origin
                </span>
                <h4 className="font-serif text-base font-bold text-[#1C1917]">
                  {verifiedRecord.artisanName}
                </h4>
                <p className="text-stone-500">{verifiedRecord.originVillage}, {verifiedRecord.stateName}</p>
              </div>

              <div className="space-y-1">
                <span className="font-bold uppercase tracking-wider text-stone-400 block text-[10px]">
                  Hardware NFC & SHA-256 Ledger
                </span>
                <p className="font-mono text-stone-900 font-bold">
                  {verifiedRecord.varnamId}
                </p>
                <p className="font-mono text-[11px] text-stone-500 truncate" title={verifiedRecord.cryptographicSignature}>
                  Sig: {verifiedRecord.cryptographicSignature.slice(0, 24)}...
                </p>
              </div>

            </div>

            {/* Provenance Audit Chain Timeline */}
            <div className="py-8 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#7A2021] block">
                  Immutable Custody & Provenance Chain
                </span>
                <h4 className="font-serif text-xl font-bold text-[#1C1917] mt-0.5">
                  Verified Audit History
                </h4>
              </div>

              <div className="space-y-4">
                {verifiedRecord.provenanceEvents.map((evt, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-2xl border border-stone-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#1B2A4A] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#C85A32] tracking-wider block">
                          {evt.stage}
                        </span>
                        <p className="text-xs font-semibold text-[#1C1917]">
                          {evt.description}
                        </p>
                        <span className="text-[11px] text-stone-500">
                          Verified by {evt.verifiedBy} • {evt.location}
                        </span>
                      </div>
                    </div>

                    <div className="sm:text-right shrink-0">
                      <span className="text-[11px] font-mono text-stone-400 block">
                        {new Date(evt.timestamp).toLocaleDateString('en-IN', { dateStyle: 'medium' })}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {evt.transactionHash}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t-2 border-[#C59B27]/30 flex flex-wrap items-center justify-between gap-4">
              
              <div className="flex gap-2">
                <button
                  onClick={() => addToDigitalLocker(verifiedRecord)}
                  className="px-5 py-2.5 bg-[#1B2A4A] hover:bg-[#131E35] text-[#D4AF37] font-bold rounded-xl text-xs uppercase tracking-wider transition shadow-sm flex items-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  <span>Save to My Digital Locker</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="px-4 py-2.5 bg-white hover:bg-stone-100 border border-stone-300 rounded-xl text-xs font-semibold text-stone-700 transition flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Certificate</span>
                </button>
              </div>

              {matchingCraft && (
                <Link
                  to={`/craft/${matchingCraft.id}`}
                  className="text-xs font-bold text-[#C85A32] hover:text-[#7A2021] transition inline-flex items-center gap-1"
                >
                  <span>View Marketplace Listing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
