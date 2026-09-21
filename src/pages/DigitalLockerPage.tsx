import React from 'react';
import { useVarnam } from '../context/VarnamContext';
import { ALL_CRAFTS } from '../data/crafts';
import { Lock, ShieldCheck, CheckCircle2, Radio, ExternalLink, Printer, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DigitalLockerPage: React.FC = () => {
  const { digitalLocker } = useVarnam();

  return (
    <div className="min-h-screen bg-[#FAF6F0] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="w-12 h-12 rounded-full bg-[#1B2A4A] text-[#D4AF37] flex items-center justify-center mx-auto shadow-md">
            <Lock className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917]">
            Varnam Digital Certificate Locker
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Your encrypted vault of owned Indian Geographical Indication masterpieces. Each certificate is cryptographically bound to its physical NFC hardware chip.
          </p>
        </div>

        {/* Certificates Grid */}
        {digitalLocker.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#C59B27]/30 shadow-xs max-w-md mx-auto p-8 space-y-4">
            <ShieldCheck className="w-12 h-12 text-[#C59B27] mx-auto opacity-50" />
            <h3 className="font-serif text-xl font-bold text-stone-800">
              No Digital Certificates Yet
            </h3>
            <p className="text-xs text-stone-500">
              Certificates are automatically minted into your locker upon acquiring a verified craft or scanning an authentic NFC tag.
            </p>
            <Link
              to="/verify"
              className="inline-block px-6 py-2.5 bg-[#C85A32] text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-md"
            >
              Verify & Add an NFC Chip
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {digitalLocker.map(record => {
              const craft = ALL_CRAFTS.find(c => c.varnamId === record.varnamId);

              return (
                <div
                  key={record.varnamId}
                  className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#C59B27]/50 shadow-xl space-y-6 relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#1B2A4A] text-[#D4AF37] flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-7 h-7 text-[#D4AF37]" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#C85A32] tracking-wider block">
                          Official GI Authenticity Certificate
                        </span>
                        <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                          {record.craftName}
                        </h3>
                        <p className="text-xs text-stone-500 font-mono">
                          Varnam ID: {record.varnamId} • {record.giNumber}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {record.authenticityStatus}
                      </span>
                      <span className="block text-[10px] font-mono text-stone-400 mt-1">
                        NTAG424 UID: {record.nfcUid}
                      </span>
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                    <div>
                      <span className="text-stone-400 font-medium block text-[10px] uppercase">Master Artisan</span>
                      <strong className="text-stone-900">{record.artisanName}</strong>
                    </div>
                    <div>
                      <span className="text-stone-400 font-medium block text-[10px] uppercase">Origin Cluster</span>
                      <strong className="text-stone-900">{record.originVillage}, {record.stateName}</strong>
                    </div>
                    <div>
                      <span className="text-stone-400 font-medium block text-[10px] uppercase">Mint Block</span>
                      <strong className="text-stone-900 font-mono">Block #{record.blockchainBlockNumber}</strong>
                    </div>
                    <div>
                      <span className="text-stone-400 font-medium block text-[10px] uppercase">GI Year</span>
                      <strong className="text-stone-900">{record.giYear}</strong>
                    </div>
                  </div>

                  {/* Audit Event Snippet */}
                  <div className="p-3.5 bg-[#FAF6F0] rounded-2xl border border-[#C59B27]/25 text-xs text-stone-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <div>
                      <span className="font-bold text-[#7A2021] block text-[11px] uppercase">Latest Ledger Event:</span>
                      <p>{record.provenanceEvents[record.provenanceEvents.length - 1].description}</p>
                    </div>
                    <span className="font-mono text-[10px] text-stone-500 bg-white px-2 py-1 rounded border shrink-0">
                      {record.provenanceEvents[record.provenanceEvents.length - 1].transactionHash}
                    </span>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex gap-2">
                      <button
                        onClick={() => window.print()}
                        className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-xl transition flex items-center gap-1.5"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>Print Certificate</span>
                      </button>
                    </div>

                    {craft && (
                      <Link
                        to={`/craft/${craft.id}`}
                        className="text-xs font-bold text-[#C85A32] hover:text-[#7A2021] transition inline-flex items-center gap-1"
                      >
                        <span>View Craft Details</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
