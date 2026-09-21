import React from 'react';

interface LandmarkWatermarkProps {
  stateSlug: string;
  color?: string;
  className?: string;
}

export const LandmarkWatermark: React.FC<LandmarkWatermarkProps> = ({
  stateSlug,
  color = '#C59B27',
  className = ''
}) => {
  // Render state-specific architectural line drawing sketch and authentic corner cultural illustrations
  const renderLandmarkSketch = () => {
    switch (stateSlug) {
      case 'kerala':
        return (
          <g stroke={color} strokeWidth="1.2" fill="none" opacity="0.32">
            {/* Centerpiece: Traditional Kettuvallam Houseboat on Backwaters Watermark */}
            <g transform="translate(250, 60) scale(1.15)">
              {/* Houseboat Curved Thatched Roof (Anjili & bamboo structure) */}
              <path d="M40 140 Q175 60 310 140" strokeWidth="2" />
              <path d="M45 130 Q175 70 305 130" strokeDasharray="4,2" />
              <path d="M55 120 Q175 80 295 120" strokeDasharray="3,3" />
              {/* Wooden Hull */}
              <path d="M20 155 Q175 185 330 155 Q310 195 175 198 Q40 195 20 155 Z" strokeWidth="2.2" fill={`${color}10`} />
              {/* Windows and Bamboo Railing */}
              <rect x="80" y="125" width="22" height="18" rx="2" strokeWidth="1.2" />
              <rect x="115" y="125" width="22" height="18" rx="2" strokeWidth="1.2" />
              <rect x="150" y="125" width="22" height="18" rx="2" strokeWidth="1.2" />
              <rect x="185" y="125" width="22" height="18" rx="2" strokeWidth="1.2" />
              <rect x="220" y="125" width="22" height="18" rx="2" strokeWidth="1.2" />
              {/* Water Ripples */}
              <path d="M10 205 Q90 198 170 205 T330 205 T420 205" strokeDasharray="4,4" />
              <path d="M30 215 Q110 208 190 215 T350 215" strokeDasharray="4,4" opacity="0.6" />
              {/* Distant Coconut Palms */}
              <g transform="translate(40, 20) scale(0.7)" opacity="0.5">
                <path d="M20 100 Q25 40 40 10" strokeWidth="1.8" />
                <path d="M40 10 Q20 5 0 15 M40 10 Q30 -10 15 -5 M40 10 Q50 -15 65 -5 M40 10 Q60 5 80 15 M40 10 Q55 25 70 35" strokeWidth="1.4" />
              </g>
              <g transform="translate(280, 15) scale(0.65)" opacity="0.5">
                <path d="M30 100 Q20 45 10 10" strokeWidth="1.8" />
                <path d="M10 10 Q-10 5 -30 15 M10 10 Q0 -10 -15 -5 M10 10 Q20 -15 35 -5 M10 10 Q30 5 50 15" strokeWidth="1.4" />
              </g>
            </g>

            {/* Bottom-Left Corner: Snake Boat (Chundan Vallam) Line Sketch */}
            <g transform="translate(15, 360) scale(0.65)" opacity="0.55">
              <path d="M0 60 Q80 90 200 55 Q190 70 100 75 Q20 72 0 60 Z" strokeWidth="1.6" fill={`${color}15`} />
              <path d="M0 60 C-10 40 -15 15 -10 0 C-5 15 5 45 10 60" strokeWidth="2" />
              {/* Rowers oars */}
              <line x1="30" y1="62" x2="25" y2="85" strokeWidth="1.2" />
              <line x1="50" y1="63" x2="45" y2="86" strokeWidth="1.2" />
              <line x1="70" y1="64" x2="65" y2="87" strokeWidth="1.2" />
              <line x1="90" y1="64" x2="85" y2="87" strokeWidth="1.2" />
              <line x1="110" y1="63" x2="105" y2="86" strokeWidth="1.2" />
              <line x1="130" y1="62" x2="125" y2="85" strokeWidth="1.2" />
              <line x1="150" y1="60" x2="145" y2="83" strokeWidth="1.2" />
            </g>

            {/* Bottom-Right Corner: Kerala Temple Gopuram / Nalukettu Pavilion */}
            <g transform="translate(730, 340) scale(0.6)" opacity="0.55">
              <polygon points="60,10 10,45 110,45" strokeWidth="1.6" />
              <polygon points="60,35 20,65 100,65" strokeWidth="1.4" strokeDasharray="3,2" />
              <rect x="25" y="65" width="70" height="55" strokeWidth="1.5" />
              <path d="M45 120 V85 Q60 75 75 85 V120 Z" strokeWidth="1.2" fill={`${color}15`} />
              <line x1="5" y1="120" x2="115" y2="120" strokeWidth="2" />
            </g>
          </g>
        );

      case 'gujarat':
        return (
          <g stroke={color} strokeWidth="1.2" fill="none" opacity="0.32">
            {/* Centerpiece: Somnath Temple Grand Shikhara Watermark */}
            <g transform="translate(280, 50) scale(1.1)">
              {/* Temple Apex Kalash & Flag */}
              <line x1="140" y1="10" x2="140" y2="30" strokeWidth="1.5" />
              <path d="M140 10 L160 18 L140 26 Z" fill={`${color}30`} />
              <circle cx="140" cy="32" r="5" fill={`${color}20`} />
              {/* Stepped Shikhara Spire */}
              <polygon points="140,38 158,70 122,70" strokeWidth="1.4" />
              <polygon points="140,65 172,110 108,110" strokeWidth="1.4" strokeDasharray="3,2" />
              <polygon points="140,105 188,155 92,155" strokeWidth="1.6" />
              <polygon points="140,150 205,200 75,200" strokeWidth="1.8" />
              {/* Main Mandapa Columned Base */}
              <rect x="65" y="200" width="150" height="65" strokeWidth="2" />
              <line x1="85" y1="200" x2="85" y2="265" strokeWidth="1.4" />
              <line x1="115" y1="200" x2="115" y2="265" strokeWidth="1.4" />
              <line x1="140" y1="200" x2="140" y2="265" strokeWidth="1.6" />
              <line x1="165" y1="200" x2="165" y2="265" strokeWidth="1.4" />
              <line x1="195" y1="200" x2="195" y2="265" strokeWidth="1.4" />
              <line x1="45" y1="265" x2="235" y2="265" strokeWidth="2.5" />
            </g>

            {/* Bottom-Left Corner: Garba Dancers in Ring */}
            <g transform="translate(20, 360) scale(0.65)" opacity="0.55">
              {/* Dancer 1 */}
              <circle cx="30" cy="20" r="7" />
              <path d="M30 27 V55 L15 85 M30 55 L45 85" strokeWidth="1.4" />
              <path d="M15 40 L30 35 L50 30" strokeWidth="1.4" />
              {/* Flare Ghagra */}
              <polygon points="30,45 10,80 50,80" strokeWidth="1.2" strokeDasharray="3,2" />
              {/* Dancer 2 */}
              <circle cx="75" cy="18" r="7" />
              <path d="M75 25 V55 L60 85 M75 55 L90 85" strokeWidth="1.4" />
              <path d="M60 30 L75 35 L95 40" strokeWidth="1.4" />
              <polygon points="75,45 55,80 95,80" strokeWidth="1.2" strokeDasharray="3,2" />
            </g>

            {/* Bottom-Right Corner: Decorated Camel & Cart Pavilion */}
            <g transform="translate(720, 340) scale(0.65)" opacity="0.55">
              {/* Desert Pavilion Canopy */}
              <path d="M40 25 Q70 5 100 25 V50 H40 Z" strokeWidth="1.5" />
              <line x1="45" y1="50" x2="45" y2="90" strokeWidth="1.5" />
              <line x1="95" y1="50" x2="95" y2="90" strokeWidth="1.5" />
              {/* Sitting Camel Silhouette */}
              <path d="M15 90 C10 80 15 65 25 65 C30 65 30 75 38 75 C45 70 55 60 70 70 C80 80 85 90 85 95 H5 Z" strokeWidth="1.6" fill={`${color}12`} />
              <circle cx="12" cy="62" r="5" />
            </g>
          </g>
        );

      case 'rajasthan':
        return (
          <g stroke={color} strokeWidth="1.2" fill="none" opacity="0.32">
            {/* Centerpiece: Mehrangarh Fort Towering Bastions Watermark */}
            <g transform="translate(240, 50) scale(1.15)">
              {/* Natural Rock Cliff Escarpment */}
              <path d="M20 220 Q100 180 180 200 T360 190" strokeWidth="1.5" strokeDasharray="4,2" />
              {/* High Fortress Walls and Battlements */}
              <rect x="60" y="100" width="240" height="90" strokeWidth="2" fill={`${color}08`} />
              {/* Crenels on ramparts */}
              <path d="M60 100 H70 V92 H80 V100 H90 V92 H100 V100 H110 V92 H120 V100 H130 V92 H140 V100 H150 V92 H160 V100 H170 V92 H180 V100 H190 V92 H200 V100 H210 V92 H220 V100 H230 V92 H240 V100 H250 V92 H260 V100 H270 V92 H280 V100 H290 V92 H300 V100" strokeWidth="1.5" />
              {/* Palace Jharokhas on upper bastion */}
              <rect x="100" y="55" width="160" height="45" strokeWidth="1.8" />
              {/* Chhatri Domes */}
              <path d="M110 55 Q125 35 140 55" strokeWidth="1.5" />
              <path d="M170 55 Q185 35 200 55" strokeWidth="1.5" />
              <path d="M230 55 Q245 35 260 55" strokeWidth="1.5" />
              {/* Arched windows */}
              <path d="M120 75 Q125 68 130 75 V85 H120 Z" />
              <path d="M150 75 Q155 68 160 75 V85 H150 Z" />
              <path d="M180 75 Q185 68 190 75 V85 H180 Z" />
              <path d="M210 75 Q215 68 220 75 V85 H210 Z" />
              <path d="M240 75 Q245 68 250 75 V85 H240 Z" />
            </g>

            {/* Bottom-Left Corner: Desert Camel Caravan Sketch */}
            <g transform="translate(15, 360) scale(0.65)" opacity="0.55">
              {/* Camel 1 */}
              <path d="M25 20 C20 15 25 5 35 10 C45 15 40 30 45 40 C55 45 75 40 85 55 C90 65 95 85 95 90 M70 45 C75 35 85 35 90 45 M50 50 L45 90 M60 50 L58 90 M80 55 L78 90 M90 55 L88 90" strokeWidth="1.5" fill={`${color}12`} />
              {/* Reins & Saddle */}
              <path d="M35 15 L10 50" strokeWidth="1" strokeDasharray="3,2" />
            </g>

            {/* Bottom-Right Corner: Ghoomar Dancer under Palace Jharokha */}
            <g transform="translate(730, 335) scale(0.65)" opacity="0.55">
              {/* Arched Jharokha Window Frame */}
              <path d="M30 40 Q60 10 90 40 V100 H30 Z" strokeWidth="1.5" />
              {/* Swirling Ghoomar Skirt */}
              <circle cx="60" cy="45" r="7" />
              <path d="M60 52 V65 M50 55 L60 58 L70 55" strokeWidth="1.4" />
              <path d="M60 65 Q25 90 35 100 Q60 105 85 100 Q95 90 60 65 Z" strokeWidth="1.5" strokeDasharray="3,2" fill={`${color}15`} />
            </g>
          </g>
        );

      case 'assam':
        return (
          <g stroke={color} strokeWidth="1.2" fill="none" opacity="0.32">
            {/* Centerpiece: Rang Ghar Royal Pavilion & Brahmaputra Waterway */}
            <g transform="translate(270, 50) scale(1.15)">
              {/* Rang Ghar Two-Tiered Oval Roof (Ahom Royal Architecture) */}
              <path d="M60 70 Q150 20 240 70 Z" strokeWidth="2" fill={`${color}10`} />
              <path d="M75 60 Q150 28 225 60" strokeDasharray="4,2" />
              {/* Miniature Crocodile Finials at Roof ends */}
              <path d="M55 70 C45 65 40 75 50 80" strokeWidth="1.5" />
              <path d="M245 70 C255 65 260 75 250 80" strokeWidth="1.5" />
              {/* Middle Tier */}
              <rect x="70" y="70" width="160" height="40" strokeWidth="1.6" />
              <path d="M85 90 Q95 80 105 90 V110 H85 Z" />
              <path d="M120 90 Q130 80 140 90 V110 H120 Z" />
              <path d="M160 90 Q170 80 180 90 V110 H160 Z" />
              <path d="M195 90 Q205 80 215 90 V110 H195 Z" />
              {/* Lower Oval Base */}
              <rect x="50" y="110" width="200" height="60" strokeWidth="2" />
              <line x1="35" y1="170" x2="265" y2="170" strokeWidth="2.5" />
              {/* Brahmaputra River Boat */}
              <g transform="translate(80, 190) scale(0.8)">
                <path d="M10 30 Q80 48 160 28 Q150 48 80 50 Q20 48 10 30 Z" strokeWidth="1.6" fill={`${color}15`} />
                <line x1="60" y1="10" x2="60" y2="35" strokeWidth="1.5" />
                <polygon points="60,10 95,20 60,30" strokeWidth="1.2" fill={`${color}20`} />
              </g>
            </g>

            {/* Bottom-Left Corner: Great Indian One-Horned Rhinoceros (Kaziranga) */}
            <g transform="translate(15, 350) scale(0.65)" opacity="0.6">
              {/* Rhino Body & Armoured Plates */}
              <path d="M20 70 C30 50 50 45 70 45 C90 45 110 50 120 70 C125 85 125 100 115 105 C110 105 105 85 100 85 C95 85 90 105 80 105 C75 105 70 85 60 85 C55 85 50 105 40 105 C30 105 25 85 20 70 Z" strokeWidth="1.8" fill={`${color}15`} />
              {/* Snout & Single Horn */}
              <path d="M15 70 C10 65 0 68 0 75 C0 80 10 82 20 80" strokeWidth="1.6" />
              <path d="M5 68 L2 52 L12 66" strokeWidth="2" fill={color} />
              {/* Skin fold plates */}
              <path d="M45 47 Q50 75 45 85" strokeWidth="1.4" strokeDasharray="3,2" />
              <path d="M85 47 Q90 75 85 85" strokeWidth="1.4" strokeDasharray="3,2" />
            </g>

            {/* Bottom-Right Corner: Assam Tea Garden Plucker with Cane Basket */}
            <g transform="translate(730, 335) scale(0.65)" opacity="0.6">
              {/* Woman silhouette */}
              <circle cx="50" cy="25" r="7" />
              <path d="M50 32 V60 M40 40 L50 35 L65 45" strokeWidth="1.4" />
              <path d="M50 60 L35 95 M50 60 L65 95" strokeWidth="1.4" />
              {/* Traditional Woven Cane Basket strapped to head/back */}
              <polygon points="65,30 85,25 80,75 55,70" strokeWidth="1.5" strokeDasharray="3,2" fill={`${color}18`} />
              <line x1="50" y1="28" x2="70" y2="35" strokeWidth="1.2" />
              {/* Tea bush sprigs */}
              <path d="M10 95 Q25 80 40 95 Q55 80 70 95 Q85 80 100 95" strokeWidth="1.6" />
            </g>
          </g>
        );

      case 'west-bengal':
        return (
          <g stroke={color} strokeWidth="1.2" fill="none" opacity="0.32">
            {/* Centerpiece: Howrah Bridge Cantilever Truss & Hooghly Waterway */}
            <g transform="translate(230, 50) scale(1.15)">
              {/* Howrah Bridge Main Towers */}
              <line x1="70" y1="60" x2="70" y2="180" strokeWidth="2.2" />
              <line x1="85" y1="60" x2="85" y2="180" strokeWidth="1.8" />
              <line x1="265" y1="60" x2="265" y2="180" strokeWidth="1.8" />
              <line x1="280" y1="60" x2="280" y2="180" strokeWidth="2.2" />
              {/* Diagonal Cantilever Bracing */}
              <polyline points="70,60 175,120 280,60" strokeWidth="2" />
              <polyline points="85,60 175,130 265,60" strokeWidth="1.5" strokeDasharray="4,2" />
              <polyline points="70,180 175,120 280,180" strokeWidth="1.8" />
              <line x1="175" y1="120" x2="175" y2="180" strokeWidth="2" />
              {/* Roadway Span */}
              <line x1="30" y1="180" x2="320" y2="180" strokeWidth="2.5" />
              {/* Hooghly Water Ripples and Country Dinghy Boat */}
              <path d="M20 210 Q90 200 175 210 T330 210" strokeDasharray="4,4" />
              <g transform="translate(140, 190) scale(0.8)">
                <path d="M10 30 Q50 45 90 30 Q80 45 50 46 Q20 45 10 30 Z" strokeWidth="1.6" fill={`${color}15`} />
                <circle cx="50" cy="20" r="5" />
                <line x1="50" y1="25" x2="50" y2="38" strokeWidth="1.4" />
                <line x1="50" y1="30" x2="35" y2="48" strokeWidth="1.4" />
              </g>
            </g>

            {/* Bottom-Left Corner: Hooghly Wooden Country Dinghy Boat */}
            <g transform="translate(20, 360) scale(0.65)" opacity="0.6">
              <path d="M5 45 Q50 65 110 40 Q95 65 50 68 Q15 65 5 45 Z" strokeWidth="1.8" fill={`${color}15`} />
              <circle cx="60" cy="30" r="6" />
              <line x1="60" y1="36" x2="60" y2="52" strokeWidth="1.5" />
              <line x1="60" y1="42" x2="40" y2="68" strokeWidth="1.6" />
            </g>

            {/* Bottom-Right Corner: Victoria Memorial Palace Facade */}
            <g transform="translate(720, 335) scale(0.65)" opacity="0.6">
              {/* Central Dome */}
              <path d="M50 35 C50 15 80 15 80 35 Z" strokeWidth="1.6" fill={`${color}15`} />
              <line x1="65" y1="10" x2="65" y2="20" strokeWidth="1.5" />
              {/* Palace Columns and Pediment */}
              <polygon points="65,38 35,50 95,50" strokeWidth="1.4" />
              <rect x="35" y="50" width="60" height="40" strokeWidth="1.6" />
              <line x1="45" y1="50" x2="45" y2="90" strokeWidth="1.2" />
              <line x1="55" y1="50" x2="55" y2="90" strokeWidth="1.2" />
              <line x1="75" y1="50" x2="75" y2="90" strokeWidth="1.2" />
              <line x1="85" y1="50" x2="85" y2="90" strokeWidth="1.2" />
              <line x1="20" y1="90" x2="110" y2="90" strokeWidth="2" />
            </g>
          </g>
        );

      case 'kashmir':
      case 'jammu-and-kashmir':
        return (
          <g stroke={color} strokeWidth="1.2" fill="none" opacity="0.32">
            {/* Centerpiece: Pir Panjal Mountain Peaks & Dal Lake Shikara */}
            <g transform="translate(240, 40) scale(1.15)">
              <polyline points="20,120 70,60 120,110 180,40 240,115 300,55 350,120" strokeDasharray="4,2" />
              <polyline points="50,90 70,60 90,90" strokeWidth="1.5" />
              <polyline points="150,80 180,40 210,80" strokeWidth="1.5" />
              <polyline points="270,90 300,55 330,90" strokeWidth="1.5" />

              {/* Dal Lake Water Ripples */}
              <path d="M40 160 Q100 150 160 160 T280 160 T380 160" strokeDasharray="3,3" opacity="0.6" />

              {/* Traditional Kashmiri Shikara Boat */}
              <g transform="translate(70, 140) scale(0.95)">
                <path d="M10 55 Q110 85 240 50 Q230 75 140 78 Q50 78 10 55 Z" strokeWidth="1.8" fill={`${color}15`} />
                <path d="M65 40 H185 L180 15 H70 Z" strokeWidth="1.4" />
                <line x1="68" y1="40" x2="68" y2="60" strokeWidth="1.5" />
                <line x1="182" y1="40" x2="182" y2="60" strokeWidth="1.5" />
                <g transform="translate(205, 30) rotate(25)">
                  <line x1="0" y1="0" x2="0" y2="60" strokeWidth="1.5" />
                  <path d="M0 60 C-8 52 -12 40 0 35 C12 40 8 52 0 60 Z" fill={`${color}20`} strokeWidth="1.2" />
                </g>
              </g>
            </g>

            {/* Bottom-Left Corner: Chinar Leaf Silhouette */}
            <g transform="translate(30, 360) scale(0.55)" opacity="0.6">
              <path d="M50 10 C55 35 70 30 85 20 C75 40 95 50 105 45 C85 65 95 80 100 95 C80 90 70 105 60 120 C55 95 45 95 40 120 C30 105 20 90 0 95 C5 80 15 65 -5 45 C5 50 25 40 15 20 C30 30 45 35 50 10 Z" strokeWidth="1.6" fill={`${color}15`} />
            </g>

            {/* Bottom-Right Corner: Pine Tree Grove & Cedar Lodge */}
            <g transform="translate(740, 340) scale(0.65)" opacity="0.6">
              <polygon points="40,20 20,50 60,50" strokeWidth="1.5" />
              <polygon points="40,40 15,70 65,70" strokeWidth="1.5" />
              <polygon points="40,60 10,95 70,95" strokeWidth="1.5" />
              <rect x="35" y="95" width="10" height="20" fill={color} />
            </g>
          </g>
        );

      case 'maharashtra':
        return (
          <g stroke={color} strokeWidth="1.2" fill="none" opacity="0.32">
            {/* Centerpiece: Multi-Tiered Hill Fort Citadel (Raigad / Daulatabad / Sinhagad) */}
            <g transform="translate(260, 45) scale(1.1)">
              {/* Mountain Cliff Base Escarpment */}
              <path d="M10 230 Q90 195 170 215 T330 200" strokeWidth="1.6" strokeDasharray="5,2" />
              {/* Grand Arched Fort Gate (Maha Darwaza) */}
              <rect x="120" y="150" width="100" height="75" strokeWidth="1.8" fill={`${color}08`} />
              <path d="M145 225 V180 Q170 162 195 180 V225 Z" strokeWidth="1.8" fill={`${color}18`} />
              {/* Flanking Circular Bastions */}
              <path d="M90 225 V140 Q105 130 120 140 V225" strokeWidth="1.8" />
              <path d="M220 225 V140 Q235 130 250 225" strokeWidth="1.8" />
              {/* Lower Tier Ramparts with Crenels */}
              <line x1="60" y1="150" x2="280" y2="150" strokeWidth="2" />
              <path d="M60 150 H70 V142 H80 V150 H90 V142 H100 V150 H110 V142 H120 V150 H220 V142 H230 V150 H240 V142 H250 V150 H260 V142 H270 V150 H280" strokeWidth="1.4" />
              {/* Mid Tier Stepped Fortress Citadel */}
              <rect x="100" y="95" width="140" height="55" strokeWidth="1.6" />
              <path d="M125 115 Q135 105 145 115 V135 H125 Z" />
              <path d="M160 115 Q170 105 180 115 V135 H160 Z" />
              <path d="M195 115 Q205 105 215 115 V135 H195 Z" />
              {/* Top Apex Watchtower & Maratha Flag */}
              <rect x="135" y="55" width="70" height="40" strokeWidth="1.8" fill={`${color}12`} />
              <polygon points="170,30 135,55 205,55" strokeWidth="1.6" />
              <line x1="170" y1="5" x2="170" y2="30" strokeWidth="1.8" />
              <polygon points="170,5 200,15 170,25" strokeWidth="1.4" fill={`${color}35`} />
            </g>

            {/* Bottom-Left Corner: Maharashtrian Lezim / Dhol Tasha Folk Dancers */}
            <g transform="translate(15, 345) scale(0.65)" opacity="0.6">
              {/* Dhol Tasha Drummer 1 */}
              <circle cx="35" cy="25" r="7" />
              <path d="M35 18 L45 12" strokeWidth="2" /> {/* Pheta feather */}
              <path d="M35 32 V60 M20 40 L35 38 L48 42" strokeWidth="1.4" />
              <path d="M35 60 L20 95 M35 60 L45 95" strokeWidth="1.5" />
              {/* Big Dhol Drum hanging across torso */}
              <ellipse cx="32" cy="55" rx="14" ry="10" transform="rotate(-15 32 55)" strokeWidth="1.6" fill={`${color}18`} />
              {/* Lezim Dancer 2 */}
              <circle cx="80" cy="22" r="7" />
              <path d="M80 15 L90 10" strokeWidth="2" />
              <path d="M80 29 V58 L68 95 M80 58 L92 95" strokeWidth="1.5" />
              <path d="M60 25 L80 34 L100 28" strokeWidth="1.4" />
              {/* Curved Lezim with jingling cymbals */}
              <path d="M55 20 Q75 10 95 20" strokeWidth="1.8" strokeDasharray="3,2" />
            </g>

            {/* Bottom-Right Corner: Fort Ramparts & Coastal Sea Boat */}
            <g transform="translate(710, 335) scale(0.65)" opacity="0.6">
              {/* Sea Fort Rampart & Bastion */}
              <rect x="60" y="45" width="65" height="55" strokeWidth="1.8" fill={`${color}12`} />
              <path d="M60 45 H70 V38 H80 V45 H90 V38 H100 V45 H110 V38 H120 V45" strokeWidth="1.4" />
              <line x1="95" y1="15" x2="95" y2="38" strokeWidth="1.6" />
              <polygon points="95,15 120,24 95,33" strokeWidth="1.4" fill={`${color}30`} />
              {/* Coastal Boat on Waves */}
              <path d="M10 80 Q35 95 60 80 Q55 92 35 94 Q15 92 10 80 Z" strokeWidth="1.6" fill={`${color}15`} />
              <line x1="35" y1="60" x2="35" y2="82" strokeWidth="1.4" />
              <polygon points="35,60 52,70 35,78" strokeWidth="1.2" fill={`${color}20`} />
              {/* Ocean Waves */}
              <path d="M5 98 Q25 94 45 98 T85 98 T125 98" strokeWidth="1.2" strokeDasharray="3,2" />
            </g>
          </g>
        );

      case 'odisha':
        return (
          <g stroke={color} strokeWidth="1.2" fill="none" opacity="0.32">
            {/* Centerpiece: Konark Sun Temple Vimana & Colossal 24-Spoke Stone Wheel */}
            <g transform="translate(250, 45) scale(1.1)">
              {/* Massive 24-Spoke Stone Chariot Wheel */}
              <circle cx="170" cy="155" r="55" strokeWidth="2.2" />
              <circle cx="170" cy="155" r="46" strokeWidth="1.4" strokeDasharray="4,2" />
              <circle cx="170" cy="155" r="14" strokeWidth="1.8" fill={`${color}20`} />
              {/* Radial Chariot Spokes */}
              <line x1="170" y1="100" x2="170" y2="210" strokeWidth="1.6" />
              <line x1="115" y1="155" x2="225" y2="155" strokeWidth="1.6" />
              <line x1="131" y1="116" x2="209" y2="194" strokeWidth="1.4" />
              <line x1="131" y1="194" x2="209" y2="116" strokeWidth="1.4" />
              <line x1="148" y1="103" x2="192" y2="207" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="192" y1="103" x2="148" y2="207" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="118" y1="177" x2="222" y2="133" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="118" y1="133" x2="222" y2="177" strokeWidth="1" strokeDasharray="2,2" />
              {/* Stepped Kalinga Pidha Deula Temple Pyramid Behind Wheel */}
              <polygon points="170,10 145,35 195,35" strokeWidth="1.5" />
              <polygon points="170,30 135,55 205,55" strokeWidth="1.5" strokeDasharray="3,2" />
              <polygon points="170,50 120,78 220,78" strokeWidth="1.6" />
              <polygon points="170,72 105,105 235,105" strokeWidth="1.8" />
              <circle cx="170" cy="8" r="4" fill={`${color}30`} />
              {/* Temple Plinth & Sculpted Base */}
              <line x1="50" y1="215" x2="290" y2="215" strokeWidth="2.5" />
              <path d="M60 215 Q75 195 90 215" strokeWidth="1.2" />
              <path d="M250 215 Q265 195 280 215" strokeWidth="1.2" />
            </g>

            {/* Bottom-Left Corner: Odissi Classical Dancers in Tribhangi Posture */}
            <g transform="translate(15, 345) scale(0.65)" opacity="0.6">
              {/* Dancer 1 in Tribhangi S-curve */}
              <circle cx="35" cy="22" r="7" />
              <circle cx="35" cy="14" r="5" strokeWidth="1.2" strokeDasharray="2,1" /> {/* Mukut headpiece */}
              <path d="M35 29 C28 40 42 50 35 65" strokeWidth="1.8" />
              <path d="M35 65 L22 95 M35 65 L48 95" strokeWidth="1.5" />
              <path d="M20 30 L35 34 L52 28" strokeWidth="1.4" />
              {/* Traditional Sambalpuri Pleated Fan Saree */}
              <polygon points="35,52 18,80 52,80" strokeWidth="1.4" strokeDasharray="3,2" fill={`${color}15`} />
              {/* Traditional Mardala Drummer 2 */}
              <circle cx="80" cy="26" r="6" />
              <path d="M80 32 V58 L70 95 M80 58 L90 95" strokeWidth="1.4" />
              <ellipse cx="80" cy="48" rx="12" ry="7" strokeWidth="1.5" fill={`${color}20`} />
            </g>

            {/* Bottom-Right Corner: Traditional Boat & Jagannath Puri Temple Spire */}
            <g transform="translate(715, 330) scale(0.65)" opacity="0.6">
              {/* Traditional Coastal Boat with Triangular Sail */}
              <path d="M15 75 Q40 90 65 75 Q60 88 40 90 Q20 88 15 75 Z" strokeWidth="1.6" fill={`${color}15`} />
              <line x1="40" y1="40" x2="40" y2="76" strokeWidth="1.5" />
              <polygon points="40,40 18,68 40,70" strokeWidth="1.3" fill={`${color}25`} />
              {/* Jagannath Temple Shikhara Spire */}
              <path d="M95 10 C85 30 75 60 72 90 H118 C115 60 105 30 95 10 Z" strokeWidth="1.8" fill={`${color}10`} />
              <circle cx="95" cy="8" r="4" fill={`${color}30`} />
              <line x1="95" y1="0" x2="95" y2="8" strokeWidth="1.5" />
              <polygon points="95,0 112,5 95,10" strokeWidth="1.2" fill={`${color}30`} />
              {/* Stepped bands on Vimana */}
              <line x1="82" y1="35" x2="108" y2="35" strokeWidth="1.2" />
              <line x1="77" y1="55" x2="113" y2="55" strokeWidth="1.2" />
              <line x1="74" y1="75" x2="116" y2="75" strokeWidth="1.2" />
            </g>
          </g>
        );

      case 'karnataka':
        return (
          <g stroke={color} strokeWidth="1.2" fill="none" opacity="0.32">
            {/* Centerpiece: Hampi Stone Chariot (Vittala Temple) & Virupaksha Gopuram */}
            <g transform="translate(250, 40) scale(1.1)">
              {/* Background Virupaksha Stepped Gopuram */}
              <g opacity="0.5" transform="translate(30, -5)">
                <polygon points="120,15 105,40 135,40" strokeWidth="1.2" />
                <polygon points="120,38 95,65 145,65" strokeWidth="1.2" strokeDasharray="3,1" />
                <polygon points="120,62 85,90 155,90" strokeWidth="1.4" />
                <polygon points="120,88 75,120 165,120" strokeWidth="1.4" />
              </g>
              {/* Vittala Stone Chariot Central Shrine */}
              <rect x="90" y="90" width="120" height="70" strokeWidth="1.8" fill={`${color}10`} />
              {/* Domed Lotus Finial Roof */}
              <path d="M100 90 Q150 40 200 90 Z" strokeWidth="1.8" fill={`${color}15`} />
              <circle cx="150" cy="40" r="4.5" fill={`${color}30`} />
              <line x1="150" y1="30" x2="150" y2="40" strokeWidth="1.5" />
              {/* Pillar Columns */}
              <line x1="105" y1="90" x2="105" y2="160" strokeWidth="1.4" />
              <line x1="130" y1="90" x2="130" y2="160" strokeWidth="1.4" />
              <line x1="170" y1="90" x2="170" y2="160" strokeWidth="1.4" />
              <line x1="195" y1="90" x2="195" y2="160" strokeWidth="1.4" />
              {/* Monolithic Carved Wheels */}
              <circle cx="105" cy="185" r="24" strokeWidth="2" fill={`${color}12`} />
              <circle cx="105" cy="185" r="6" strokeWidth="1.5" />
              <circle cx="195" cy="185" r="24" strokeWidth="2" fill={`${color}12`} />
              <circle cx="195" cy="185" r="6" strokeWidth="1.5" />
              {/* Stone Elephant Guards at front of chariot */}
              <path d="M65 190 C65 175 75 165 85 165 C95 165 95 185 95 200 H55 C55 195 65 195 65 190 Z" strokeWidth="1.6" fill={`${color}15`} />
              <path d="M65 175 Q55 185 60 195" strokeWidth="1.4" /> {/* Trunk */}
              {/* Chariot Base Platform */}
              <line x1="45" y1="210" x2="245" y2="210" strokeWidth="2.5" />
            </g>

            {/* Bottom-Left Corner: Tungabhadra Coracle (Harigolu) & Boulder Hills */}
            <g transform="translate(15, 350) scale(0.65)" opacity="0.6">
              {/* Tungabhadra River Palm & Boulders */}
              <path d="M10 85 Q20 50 35 25" strokeWidth="1.8" />
              <path d="M35 25 Q15 20 0 30 M35 25 Q30 5 15 10 M35 25 Q45 5 60 15 M35 25 Q55 20 70 30" strokeWidth="1.4" />
              {/* Round Woven Coracle Boat (Harigolu) */}
              <ellipse cx="65" cy="75" rx="28" ry="14" strokeWidth="2" fill={`${color}15`} />
              <ellipse cx="65" cy="75" rx="20" ry="9" strokeWidth="1.2" strokeDasharray="3,2" />
              {/* Boatman with oar */}
              <circle cx="65" cy="52" r="5" />
              <line x1="65" y1="57" x2="65" y2="72" strokeWidth="1.4" />
              <line x1="65" y1="62" x2="88" y2="80" strokeWidth="1.5" />
            </g>

            {/* Bottom-Right Corner: Mysore Amba Vilas Palace & Royal Dasara Elephant */}
            <g transform="translate(710, 335) scale(0.65)" opacity="0.6">
              {/* Mysore Palace Arches & Onion Dome */}
              <path d="M80 35 C80 15 110 15 110 35 Z" strokeWidth="1.6" fill={`${color}15`} />
              <line x1="95" y1="10" x2="95" y2="20" strokeWidth="1.4" />
              <rect x="65" y="35" width="60" height="35" strokeWidth="1.5" />
              <path d="M75 55 Q85 45 95 55 V70 H75 Z" strokeWidth="1.2" />
              <path d="M98 55 Q108 45 118 55 V70 H98 Z" strokeWidth="1.2" />
              {/* Royal Caparisoned Dasara Elephant */}
              <path d="M20 70 C30 50 50 48 65 52 C75 55 80 70 78 85 C75 95 70 95 65 85 C60 85 55 95 48 95 C45 85 40 85 35 95 C30 95 25 85 20 70 Z" strokeWidth="1.8" fill={`${color}20`} />
              <path d="M15 65 Q5 75 10 90" strokeWidth="1.5" /> {/* Trunk */}
              <path d="M18 68 L22 66" strokeWidth="2" /> {/* Tusk */}
              {/* Golden Ambari / Howdah on elephant back */}
              <rect x="35" y="40" width="18" height="12" strokeWidth="1.4" fill={`${color}30`} />
              <path d="M35 40 Q44 32 53 40" strokeWidth="1.4" />
            </g>
          </g>
        );

      case 'uttar-pradesh':
        return (
          <g stroke={color} strokeWidth="1.2" fill="none" opacity="0.32">
            {/* Centerpiece: Varanasi Sacred River Ganga Ghats Skyline */}
            <g transform="translate(230, 45) scale(1.15)">
              {/* Kashi Vishwanath / Manikarnika Temple Spire (Center) */}
              <polygon points="160,10 145,55 175,55" strokeWidth="1.8" fill={`${color}15`} />
              <circle cx="160" cy="8" r="3.5" fill={`${color}30`} />
              <line x1="160" y1="0" x2="160" y2="8" strokeWidth="1.5" />
              {/* Stepped Shikhara ribs */}
              <line x1="152" y1="28" x2="168" y2="28" strokeWidth="1.2" />
              <line x1="148" y1="42" x2="172" y2="42" strokeWidth="1.2" />
              {/* Left Temple Shikhara */}
              <polygon points="105,35 95,75 115,75" strokeWidth="1.5" />
              <circle cx="105" cy="33" r="3" fill={`${color}25`} />
              {/* Right Temple Shikhara */}
              <polygon points="215,35 205,75 225,75" strokeWidth="1.5" />
              <circle cx="215" cy="33" r="3" fill={`${color}25`} />
              {/* Riverfront Palace Havelis & Ghat Mansions */}
              <rect x="75" y="75" width="170" height="70" strokeWidth="1.8" fill={`${color}08`} />
              {/* Arched jharokhas and windows */}
              <path d="M90 95 Q100 85 110 95 V115 H90 Z" />
              <path d="M125 95 Q135 85 145 95 V115 H125 Z" />
              <path d="M175 95 Q185 85 195 95 V115 H175 Z" />
              <path d="M210 95 Q220 85 230 95 V115 H210 Z" />
              {/* Monumental Stepped Ghat Stairs (Pauris) */}
              <line x1="50" y1="145" x2="270" y2="145" strokeWidth="2" />
              <line x1="40" y1="155" x2="280" y2="155" strokeWidth="1.8" />
              <line x1="30" y1="165" x2="290" y2="165" strokeWidth="1.8" />
              <line x1="20" y1="175" x2="300" y2="175" strokeWidth="2.2" />
              {/* River Ganga Water Ripples & Moored Wooden Rowboat */}
              <path d="M10 195 Q80 188 160 195 T310 195" strokeDasharray="5,3" opacity="0.6" />
              <g transform="translate(180, 175) scale(0.85)">
                <path d="M10 25 Q50 38 90 25 Q80 38 50 39 Q20 38 10 25 Z" strokeWidth="1.6" fill={`${color}15`} />
                <line x1="50" y1="12" x2="50" y2="28" strokeWidth="1.4" />
                <line x1="35" y1="20" x2="65" y2="35" strokeWidth="1.3" />
              </g>
            </g>

            {/* Bottom-Left Corner: Classical Kathak Dancer & Awadhi Floral Sprig */}
            <g transform="translate(15, 345) scale(0.65)" opacity="0.6">
              {/* Kathak Dancer in Mudra */}
              <circle cx="35" cy="22" r="7" />
              <path d="M35 29 V55" strokeWidth="1.5" />
              <path d="M20 25 L35 32 L48 20" strokeWidth="1.5" /> {/* Graceful arms */}
              <circle cx="18" cy="24" r="2.5" />
              <circle cx="50" cy="19" r="2.5" />
              {/* Swirling pleated Anarkali flared skirt */}
              <path d="M35 55 Q10 85 20 95 Q35 98 50 95 Q60 85 35 55 Z" strokeWidth="1.5" fill={`${color}15`} />
              {/* Awadhi Floral Spray */}
              <path d="M75 95 Q80 60 70 35" strokeWidth="1.4" />
              <circle cx="70" cy="35" r="5" strokeWidth="1.2" fill={`${color}20`} />
              <path d="M65 55 Q60 50 65 45 M78 65 Q85 60 80 55" strokeWidth="1.2" />
            </g>

            {/* Bottom-Right Corner: Lucknow Rumi Darwaza & Bara Imambara Gateway */}
            <g transform="translate(710, 335) scale(0.65)" opacity="0.6">
              {/* Monumental Rumi Darwaza Grand Arch */}
              <path d="M40 90 V50 Q80 10 120 50 V90 Z" strokeWidth="2" fill={`${color}10`} />
              <path d="M55 90 V55 Q80 28 105 55 V90 Z" strokeWidth="1.6" strokeDasharray="3,2" />
              {/* Arched Kiosks (Chhatris) atop Gateway */}
              <path d="M70 15 Q80 5 90 15 Z" strokeWidth="1.4" fill={`${color}25`} />
              {/* Flanking Minarets */}
              <rect x="30" y="30" width="10" height="60" strokeWidth="1.5" />
              <polygon points="35,18 28,30 42,30" strokeWidth="1.4" />
              <rect x="120" y="30" width="10" height="60" strokeWidth="1.5" />
              <polygon points="125,18 118,30 132,30" strokeWidth="1.4" />
              <line x1="20" y1="90" x2="140" y2="90" strokeWidth="2.5" />
            </g>
          </g>
        );

      case 'tamil-nadu':
      default:
        return (
          <g stroke={color} strokeWidth="1.2" fill="none" opacity="0.32">
            {/* Brihadeeswarar Temple Vimana / Tower Centerpiece */}
            <g transform="translate(300, 40) scale(1.1)">
              <circle cx="100" cy="15" r="4.5" fill={`${color}30`} />
              <path d="M96 20 H104 L101 25 H99 Z" />
              <line x1="100" y1="5" x2="100" y2="15" strokeWidth="1.5" />
              
              <path d="M85 32 H115 L118 42 H82 Z" strokeDasharray="3,1.5" />
              <rect x="94" y="34" width="12" height="7" rx="1" />
              <path d="M78 44 H122 L125 56 H75 Z" />
              <rect x="86" y="47" width="10" height="8" />
              <rect x="104" y="47" width="10" height="8" />
              <path d="M70 58 H130 L134 72 H66 Z" strokeDasharray="4,2" />
              <rect x="76" y="61" width="12" height="9" />
              <rect x="94" y="61" width="12" height="9" />
              <rect x="112" y="61" width="12" height="9" />
              <path d="M62 74 H138 L142 90 H58 Z" />
              <rect x="68" y="78" width="14" height="10" />
              <rect x="86" y="78" width="12" height="10" />
              <rect x="102" y="78" width="12" height="10" />
              <rect x="118" y="78" width="14" height="10" />
              <path d="M52 92 H148 L152 110 H48 Z" strokeDasharray="5,2" />
              <path d="M42 112 H158 L162 134 H38 Z" />
              <path d="M32 136 H168 L172 160 H28 Z" strokeDasharray="4,2" />
              <path d="M22 162 H178 L182 190 H18 Z" />
              <rect x="15" y="192" width="170" height="90" strokeWidth="1.6" />
              <rect x="35" y="210" width="26" height="50" rx="3" strokeWidth="1.2" />
              <path d="M40 230 C40 220 56 220 56 230 V255 H40 Z" fill={`${color}15`} />
              <rect x="87" y="205" width="26" height="60" rx="3" strokeWidth="1.4" />
              <path d="M92 225 C92 215 108 215 108 225 V260 H92 Z" fill={`${color}20`} />
              <rect x="139" y="210" width="26" height="50" rx="3" strokeWidth="1.2" />
              <path d="M144 230 C144 220 160 220 160 230 V255 H144 Z" fill={`${color}15`} />
              <line x1="5" y1="282" x2="195" y2="282" strokeWidth="2" />
              <line x1="0" y1="290" x2="200" y2="290" strokeWidth="2.5" />
            </g>

            {/* Sacred Floor Kolam Mandala at the base */}
            <g transform="translate(400, 390)" opacity="0.35">
              <circle cx="0" cy="0" r="85" strokeWidth="1.2" strokeDasharray="6,4" />
              <circle cx="0" cy="0" r="55" strokeWidth="1" />
              <polygon points="0,-85 60,-60 85,0 60,60 0,85 -60,60 -85,0 -60,-60" strokeWidth="1" />
              <polygon points="-60,-60 0,-85 60,-60 85,0 60,60 0,85 -60,60 -85,0" transform="rotate(45)" strokeWidth="0.8" strokeDasharray="3,3" />
            </g>

            {/* Sacred Kamadhenu Cow & Calf Sketch in Bottom Right */}
            <g transform="translate(680, 320) scale(0.7)" opacity="0.45">
              <path d="M40 70 C50 40 70 35 90 40 C105 45 110 35 115 30 C120 25 125 35 125 45 C125 55 120 60 115 65 C125 70 145 75 160 85 C175 95 185 115 185 135 C185 155 180 160 170 165 C170 185 165 210 160 215 C155 215 150 180 150 165 C135 165 115 165 105 165 C100 180 95 210 90 215 C85 215 85 170 85 160 C70 155 55 140 45 120 C35 100 35 85 40 70 Z" strokeWidth="1.3" />
              <path d="M110 32 C115 15 125 10 130 18" strokeWidth="1.5" />
              <path d="M102 36 C105 20 112 15 116 22" strokeWidth="1.2" />
            </g>
          </g>
        );
    }
  };

  return (
    <div 
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 850 480" 
        className="w-full h-full object-contain mx-auto"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {renderLandmarkSketch()}
      </svg>
    </div>
  );
};
