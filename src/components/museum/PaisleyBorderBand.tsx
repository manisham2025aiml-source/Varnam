import React from 'react';

interface PaisleyBorderBandProps {
  className?: string;
  color?: string;
}

export const PaisleyBorderBand: React.FC<PaisleyBorderBandProps> = ({ 
  className = '',
  color = '#6E2A38' 
}) => {
  return (
    <div 
      className={`w-6 sm:w-8 md:w-9 shrink-0 self-stretch pointer-events-none select-none overflow-hidden ${className}`}
      style={{
        backgroundColor: `${color}15`,
        borderRight: `2px solid ${color}40`
      }}
      aria-hidden="true"
    >
      <svg 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <pattern 
          id="paisleyPattern" 
          width="36" 
          height="72" 
          patternUnits="userSpaceOnUse"
        >
          {/* Traditional Woodblock Paisley / Mango Motif */}
          <g stroke={color} strokeWidth="1.2" fill="none" opacity="0.85">
            {/* Outer border stripes */}
            <line x1="2" y1="0" x2="2" y2="72" strokeWidth="1.5" />
            <line x1="6" y1="0" x2="6" y2="72" strokeDasharray="2,2" strokeWidth="0.8" />
            
            {/* Paisley / Kalka Curvature */}
            <path d="M 18 55 C 10 50 10 38 16 32 C 22 26 26 22 22 14 C 19 8 13 12 14 16 C 15 20 22 24 16 28 C 12 32 12 45 20 48 Z" fill={`${color}25`} />
            
            {/* Inner eye & floral dots */}
            <circle cx="18" cy="38" r="2.5" fill={color} />
            <circle cx="20" cy="24" r="1.5" fill={color} />
            <circle cx="16" cy="18" r="1" fill={color} />
            
            {/* Geometric diamond separators */}
            <polygon points="18,62 23,67 18,72 13,67" fill={color} opacity="0.6" />
            <polygon points="18,0 22,4 18,8 14,4" fill={color} opacity="0.6" />
          </g>
        </pattern>
        <rect width="100%" height="100%" fill="url(#paisleyPattern)" />
      </svg>
    </div>
  );
};
