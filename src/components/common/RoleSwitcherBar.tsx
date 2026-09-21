import React from 'react';
import { useAuth, UserRole } from '../../context/AuthContext';
import { Sparkles, ShieldCheck, Hammer, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export const RoleSwitcherBar: React.FC = () => {
  const { currentRole, setRole, currentUser, availableRoles } = useAuth();

  return (
    <div className="bg-[#1B2A4A] text-white/90 text-xs py-1.5 px-4 border-b border-[#C59B27]/30 transition-all">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 font-medium text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Demo Perspectives:</span>
          </span>
          <span className="hidden sm:inline text-white/60">
            Switch between personas to test different dashboards and experiences.
          </span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          {availableRoles.map(item => {
            const isActive = currentRole === item.role;
            return (
              <button
                key={item.role}
                onClick={() => setRole(item.role)}
                title={item.description}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#C85A32] text-white shadow-sm ring-1 ring-white/20'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                {item.role === 'customer' && <User className="w-3 h-3" />}
                {item.role === 'artisan' && <Hammer className="w-3 h-3" />}
                {item.role === 'admin' && <ShieldCheck className="w-3 h-3" />}
                <span>{item.label}</span>
              </button>
            );
          })}

          {currentRole === 'artisan' && (
            <Link
              to="/dashboard/artisan"
              className="ml-2 px-2.5 py-0.5 bg-[#C59B27] text-[#1C1917] font-semibold rounded hover:bg-[#D4AF37] transition text-[11px]"
            >
              Open Studio →
            </Link>
          )}

          {currentRole === 'admin' && (
            <Link
              to="/dashboard/admin"
              className="ml-2 px-2.5 py-0.5 bg-[#C59B27] text-[#1C1917] font-semibold rounded hover:bg-[#D4AF37] transition text-[11px]"
            >
              Open GI Queue →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
