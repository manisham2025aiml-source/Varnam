import React from 'react';

interface TempleBellsDecorProps {
  className?: string;
}

export const TempleBellsDecor: React.FC<TempleBellsDecorProps> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg 
        viewBox="0 0 160 260" 
        className="w-24 sm:w-32 md:w-36 h-auto drop-shadow-md"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="brassGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5D77F" />
            <stop offset="40%" stopColor="#C59B27" />
            <stop offset="70%" stopColor="#8F6B14" />
            <stop offset="100%" stopColor="#5E4407" />
          </linearGradient>
          <linearGradient id="chainMetal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A6B1A" />
          </linearGradient>
        </defs>

        {/* Chain 1 (Left, Longer) */}
        <g opacity="0.95">
          <line x1="45" y1="0" x2="45" y2="105" stroke="url(#chainMetal)" strokeWidth="2.5" strokeDasharray="3,3" />
          {/* Hanging ring */}
          <circle cx="45" cy="108" r="4" fill="none" stroke="url(#brassGold)" strokeWidth="2" />
          {/* Bell Top Cap */}
          <path d="M41 112 H49 L47 116 H43 Z" fill="url(#brassGold)" />
          {/* Bell Body */}
          <path 
            d="M45 116 C38 120 34 135 32 150 C31 158 29 162 25 166 H65 C61 162 59 158 58 150 C56 135 52 120 45 116 Z" 
            fill="url(#brassGold)" 
            stroke="#4A3403" 
            strokeWidth="0.8" 
          />
          {/* Bell Bottom Rim */}
          <ellipse cx="45" cy="166" rx="20" ry="3.5" fill="url(#brassGold)" stroke="#3A2800" strokeWidth="0.8" />
          {/* Clapper (Tongue) */}
          <circle cx="45" cy="173" r="3.5" fill="url(#brassGold)" stroke="#3A2800" strokeWidth="0.8" />
          <line x1="45" y1="166" x2="45" y2="173" stroke="#5E4407" strokeWidth="1.5" />
        </g>

        {/* Chain 2 (Right, Shorter) */}
        <g opacity="0.9">
          <line x1="115" y1="0" x2="115" y2="65" stroke="url(#chainMetal)" strokeWidth="2" strokeDasharray="3,3" />
          <circle cx="115" cy="68" r="3.5" fill="none" stroke="url(#brassGold)" strokeWidth="1.8" />
          <path d="M112 71 H118 L116 75 H114 Z" fill="url(#brassGold)" />
          <path 
            d="M115 75 C109 79 106 90 104 102 C103 108 101 112 98 115 H132 C129 112 127 108 126 102 C124 90 121 79 115 75 Z" 
            fill="url(#brassGold)" 
            stroke="#4A3403" 
            strokeWidth="0.8" 
          />
          <ellipse cx="115" cy="115" rx="17" ry="3" fill="url(#brassGold)" stroke="#3A2800" strokeWidth="0.8" />
          <circle cx="115" cy="121" r="3" fill="url(#brassGold)" stroke="#3A2800" strokeWidth="0.8" />
          <line x1="115" y1="115" x2="115" y2="121" stroke="#5E4407" strokeWidth="1.2" />
        </g>

        {/* Chain 3 (Far Right, Lowest) */}
        <g opacity="0.85">
          <line x1="145" y1="0" x2="145" y2="135" stroke="url(#chainMetal)" strokeWidth="1.8" strokeDasharray="3,3" />
          <circle cx="145" cy="138" r="3" fill="none" stroke="url(#brassGold)" strokeWidth="1.5" />
          <path d="M145 142 C140 145 137 155 135 165 C134 170 132 173 130 176 H160 C158 173 156 170 155 165 C153 155 150 145 145 142 Z" fill="url(#brassGold)" stroke="#4A3403" strokeWidth="0.6" />
          <ellipse cx="145" cy="176" rx="15" ry="2.5" fill="url(#brassGold)" stroke="#3A2800" strokeWidth="0.6" />
          <circle cx="145" cy="181" r="2.5" fill="url(#brassGold)" />
        </g>
      </svg>
    </div>
  );
};
