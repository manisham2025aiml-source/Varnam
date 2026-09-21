import React from 'react';

interface FrangipaniBlossomsProps {
  className?: string;
  position?: 'top-left' | 'bottom-right' | 'top-right' | 'bottom-left';
}

export const FrangipaniBlossoms: React.FC<FrangipaniBlossomsProps> = ({ 
  className = '',
  position = 'top-left'
}) => {
  const transform = {
    'top-left': '',
    'bottom-right': 'rotate-180',
    'top-right': 'scale-x-[-1]',
    'bottom-left': 'scale-y-[-1]'
  }[position];

  return (
    <div className={`pointer-events-none select-none ${transform} ${className}`} aria-hidden="true">
      <svg 
        viewBox="0 0 120 120" 
        className="w-20 sm:w-24 md:w-28 h-auto drop-shadow-sm"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#436842" />
            <stop offset="100%" stopColor="#253E26" />
          </linearGradient>
          <linearGradient id="petalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#FFF9E6" />
            <stop offset="100%" stopColor="#F9E274" />
          </linearGradient>
          <radialGradient id="flowerCenter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F5B324" />
            <stop offset="60%" stopColor="#E59914" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Leaves Behind */}
        <path d="M40 30 C20 20 10 40 15 65 C25 60 38 45 40 30 Z" fill="url(#leafGrad)" />
        <path d="M15 65 C8 75 18 92 38 90 C36 78 28 68 15 65 Z" fill="url(#leafGrad)" opacity="0.9" />
        <path d="M60 20 C70 5 90 10 95 30 C85 32 72 30 60 20 Z" fill="url(#leafGrad)" />

        {/* Main 5-Petal Temple Frangipani Blossom */}
        <g transform="translate(48, 55)">
          {/* Petal 1 (Top) */}
          <path d="M0 0 C-10 -22 10 -24 16 -12 C18 -2 8 0 0 0 Z" fill="url(#petalGrad)" stroke="#E8DFCE" strokeWidth="0.5" />
          {/* Petal 2 (Top-Right) */}
          <path d="M0 0 C12 -18 26 -2 18 10 C10 16 2 8 0 0 Z" fill="url(#petalGrad)" stroke="#E8DFCE" strokeWidth="0.5" />
          {/* Petal 3 (Bottom-Right) */}
          <path d="M0 0 C22 -4 20 18 8 20 C-2 20 0 10 0 0 Z" fill="url(#petalGrad)" stroke="#E8DFCE" strokeWidth="0.5" />
          {/* Petal 4 (Bottom-Left) */}
          <path d="M0 0 C4 22 -16 20 -18 8 C-18 -2 -8 0 0 0 Z" fill="url(#petalGrad)" stroke="#E8DFCE" strokeWidth="0.5" />
          {/* Petal 5 (Top-Left) */}
          <path d="M0 0 C-20 6 -22 -14 -8 -18 C0 -20 0 -8 0 0 Z" fill="url(#petalGrad)" stroke="#E8DFCE" strokeWidth="0.5" />
          
          {/* Golden Center Glow */}
          <circle cx="0" cy="0" r="10" fill="url(#flowerCenter)" />
          <circle cx="0" cy="0" r="3" fill="#D98207" />
        </g>

        {/* Smaller Secondary Bud */}
        <g transform="translate(85, 45) scale(0.65)">
          <path d="M0 0 C-10 -20 10 -20 14 -10 C16 -2 8 0 0 0 Z" fill="url(#petalGrad)" />
          <path d="M0 0 C12 -16 22 0 14 10 C8 14 2 8 0 0 Z" fill="url(#petalGrad)" />
          <path d="M0 0 C20 -4 18 16 6 18 C-2 18 0 8 0 0 Z" fill="url(#petalGrad)" />
          <path d="M0 0 C4 20 -14 18 -16 6 C-16 -2 -8 0 0 0 Z" fill="url(#petalGrad)" />
          <path d="M0 0 C-18 6 -20 -12 -6 -16 C0 -18 0 -6 0 0 Z" fill="url(#petalGrad)" />
          <circle cx="0" cy="0" r="8" fill="url(#flowerCenter)" />
        </g>
      </svg>
    </div>
  );
};
