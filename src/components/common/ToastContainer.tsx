import React from 'react';
import { useVarnam } from '../../context/VarnamContext';
import { CheckCircle2, Info, Sparkles, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useVarnam();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`pointer-events-auto p-4 rounded-xl shadow-xl border flex items-start gap-3 transform transition-all duration-300 animate-in fade-in slide-in-from-bottom-3 ${
            toast.type === 'gold'
              ? 'bg-[#FAF6F0] border-[#C59B27] text-[#1C1917]'
              : toast.type === 'info'
              ? 'bg-[#1B2A4A] border-white/20 text-white'
              : 'bg-white border-emerald-500/30 text-stone-900'
          }`}
        >
          <div className="shrink-0 mt-0.5">
            {toast.type === 'gold' && <Sparkles className="w-5 h-5 text-[#C59B27]" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-[#D4AF37]" />}
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
          </div>

          <div className="flex-1 min-w-0">
            <h5 className="font-serif text-xs font-bold leading-tight">
              {toast.title}
            </h5>
            <p className="text-xs mt-1 leading-relaxed opacity-90">
              {toast.message}
            </p>
          </div>

          <button
            onClick={() => removeToast(toast.id)}
            className="shrink-0 text-stone-400 hover:text-stone-700 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
