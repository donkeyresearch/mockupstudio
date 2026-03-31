/**
 * diagrams/index.jsx
 *
 * SVG line-art diagrams for each shot type.
 * Each diagram shows: device silhouette, camera position, dashed sightline,
 * and a lighting direction indicator.
 *
 * All coordinates are within a 200×150 viewBox.
 */

export const diagrams = {
  'phone-hero': (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Phone silhouette — 3/4 angle with perspective lines */}
      <rect x="75" y="30" width="52" height="90" rx="6" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.7" />
      <rect x="83" y="38" width="36" height="60" rx="2" stroke="#3b82f6" strokeWidth="0.8" fill="#1a1a1a" opacity="0.5" />
      <circle cx="101" cy="108" r="3" stroke="#3b82f6" strokeWidth="0.8" fill="none" />
      {/* Perspective depth lines */}
      <line x1="75" y1="30" x2="65" y2="22" stroke="#3b3b3b" strokeWidth="0.8" />
      <line x1="127" y1="30" x2="137" y2="22" stroke="#3b3b3b" strokeWidth="0.8" />
      <line x1="65" y1="22" x2="137" y2="22" stroke="#3b3b3b" strokeWidth="0.8" />
      {/* Camera icon */}
      <rect x="18" y="15" width="18" height="13" rx="2" stroke="#666" strokeWidth="1" fill="none" />
      <circle cx="27" cy="21" r="3" stroke="#666" strokeWidth="0.8" fill="none" />
      <rect x="36" y="18" width="5" height="7" rx="1" stroke="#666" strokeWidth="0.8" fill="none" />
      {/* Dashed sightline */}
      <line x1="36" y1="21" x2="72" y2="45" stroke="#444" strokeWidth="0.8" strokeDasharray="4 3" />
      {/* Sun / light position indicator */}
      <circle cx="168" cy="25" r="6" stroke="#fbbf24" strokeWidth="1" fill="none" opacity="0.6" />
      <line x1="168" y1="11" x2="168" y2="16" stroke="#fbbf24" strokeWidth="1" opacity="0.6" />
      <line x1="178" y1="15" x2="174" y2="19" stroke="#fbbf24" strokeWidth="1" opacity="0.6" />
      <line x1="182" y1="25" x2="177" y2="25" stroke="#fbbf24" strokeWidth="1" opacity="0.6" />
    </svg>
  ),

  'phone-topdown': (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Phone from directly above */}
      <rect x="74" y="35" width="52" height="80" rx="6" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.7" />
      <rect x="82" y="43" width="36" height="60" rx="2" stroke="#3b82f6" strokeWidth="0.8" fill="#1a1a1a" opacity="0.5" />
      <circle cx="100" cy="42" r="2" stroke="#3b82f6" strokeWidth="0.8" fill="none" />
      {/* Camera directly above */}
      <rect x="90" y="5" width="18" height="13" rx="2" stroke="#666" strokeWidth="1" fill="none" />
      <circle cx="99" cy="11" r="3" stroke="#666" strokeWidth="0.8" fill="none" />
      {/* Straight downward sightline */}
      <line x1="99" y1="18" x2="99" y2="35" stroke="#444" strokeWidth="0.8" strokeDasharray="4 3" />
      {/* Soft diffused light from left */}
      <circle cx="158" cy="20" r="5" stroke="#fbbf24" strokeWidth="1" fill="none" opacity="0.6" />
      <line x1="158" y1="8" x2="158" y2="13" stroke="#fbbf24" strokeWidth="1" opacity="0.6" />
      <line x1="158" y1="30" x2="100" y2="40" stroke="#fbbf24" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.4" />
    </svg>
  ),

  'laptop-iso': (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Laptop base — isometric */}
      <path d="M50 105 L100 90 L150 105 L100 120 Z" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Laptop screen — left face */}
      <path d="M50 105 L50 68 L100 53 L100 90 Z" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Screen surface fill */}
      <path d="M55 100 L55 70 L97 56 L97 87 Z" stroke="#3b82f6" strokeWidth="0.6" fill="#1a1a1a" opacity="0.4" />
      {/* Right face */}
      <path d="M100 53 L150 68 L150 105 L100 90 Z" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.4" />
      {/* Camera */}
      <rect x="14" y="20" width="18" height="13" rx="2" stroke="#666" strokeWidth="1" fill="none" />
      <circle cx="23" cy="26" r="3" stroke="#666" strokeWidth="0.8" fill="none" />
      <rect x="32" y="23" width="5" height="7" rx="1" stroke="#666" strokeWidth="0.8" fill="none" />
      {/* Sightline */}
      <line x1="32" y1="26" x2="70" y2="75" stroke="#444" strokeWidth="0.8" strokeDasharray="4 3" />
      {/* Hard light upper right */}
      <circle cx="172" cy="18" r="5" stroke="#fbbf24" strokeWidth="1" fill="none" opacity="0.6" />
      <line x1="162" y1="22" x2="130" y2="65" stroke="#fbbf24" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.4" />
    </svg>
  ),

  'tablet-eyelevel': (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tablet portrait */}
      <rect x="68" y="20" width="64" height="110" rx="5" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.7" />
      <rect x="74" y="28" width="52" height="88" rx="2" stroke="#3b82f6" strokeWidth="0.8" fill="#1a1a1a" opacity="0.5" />
      <circle cx="100" cy="137" r="3" stroke="#3b82f6" strokeWidth="0.8" fill="none" />
      {/* Camera at screen-center height — eye level */}
      <rect x="14" y="68" width="18" height="13" rx="2" stroke="#666" strokeWidth="1" fill="none" />
      <circle cx="23" cy="74" r="3" stroke="#666" strokeWidth="0.8" fill="none" />
      <rect x="32" y="71" width="5" height="7" rx="1" stroke="#666" strokeWidth="0.8" fill="none" />
      {/* Horizontal sightline */}
      <line x1="37" y1="74" x2="68" y2="74" stroke="#444" strokeWidth="0.8" strokeDasharray="4 3" />
      {/* Horizon reference line */}
      <line x1="14" y1="74" x2="186" y2="74" stroke="#2a2a2a" strokeWidth="0.6" strokeDasharray="2 4" />
      {/* Window light — right panel */}
      <rect x="160" y="25" width="18" height="60" rx="2" stroke="#fbbf24" strokeWidth="0.8" fill="none" opacity="0.4" />
      <line x1="163" y1="30" x2="163" y2="80" stroke="#fbbf24" strokeWidth="0.4" opacity="0.3" />
      <line x1="168" y1="30" x2="168" y2="80" stroke="#fbbf24" strokeWidth="0.4" opacity="0.3" />
      <line x1="173" y1="30" x2="173" y2="80" stroke="#fbbf24" strokeWidth="0.4" opacity="0.3" />
    </svg>
  ),

  'watch-macro': (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Watch case — large to show detail */}
      <rect x="74" y="40" width="52" height="70" rx="14" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.7" />
      <rect x="80" y="48" width="40" height="54" rx="10" stroke="#3b82f6" strokeWidth="0.8" fill="#1a1a1a" opacity="0.4" />
      {/* Straps */}
      <rect x="82" y="25" width="36" height="18" rx="3" stroke="#444" strokeWidth="1" fill="none" />
      <rect x="82" y="107" width="36" height="18" rx="3" stroke="#444" strokeWidth="1" fill="none" />
      {/* Digital crown */}
      <rect x="126" y="68" width="8" height="14" rx="2" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.5" />
      {/* Watch face clock hands */}
      <circle cx="100" cy="75" r="16" stroke="#3b82f6" strokeWidth="0.5" fill="none" opacity="0.3" />
      <line x1="100" y1="63" x2="100" y2="68" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
      <line x1="100" y1="75" x2="106" y2="72" stroke="#3b82f6" strokeWidth="1" opacity="0.5" />
      {/* Macro camera — very close, large lens */}
      <rect x="155" y="68" width="22" height="14" rx="2" stroke="#666" strokeWidth="1" fill="none" />
      <circle cx="166" cy="75" r="4" stroke="#666" strokeWidth="1" fill="none" />
      <circle cx="166" cy="75" r="1.5" stroke="#666" strokeWidth="0.6" fill="none" />
      {/* Short sightline = close focus distance */}
      <line x1="155" y1="75" x2="134" y2="75" stroke="#444" strokeWidth="0.8" strokeDasharray="3 2" />
      {/* Rim backlight arc */}
      <path d="M68 48 Q55 75 68 102" stroke="#3b82f6" strokeWidth="1" fill="none" strokeDasharray="3 3" opacity="0.4" />
    </svg>
  ),

  'desktop-low': (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Monitor */}
      <rect x="45" y="25" width="110" height="75" rx="4" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.7" />
      <rect x="51" y="31" width="98" height="63" rx="2" stroke="#3b82f6" strokeWidth="0.8" fill="#1a1a1a" opacity="0.5" />
      {/* Stand */}
      <rect x="88" y="100" width="24" height="16" rx="1" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.5" />
      <rect x="72" y="116" width="56" height="5" rx="2" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.5" />
      {/* Camera low — shooting upward */}
      <rect x="14" y="120" width="18" height="13" rx="2" stroke="#666" strokeWidth="1" fill="none" />
      <circle cx="23" cy="126" r="3" stroke="#666" strokeWidth="0.8" fill="none" />
      <rect x="32" y="123" width="5" height="7" rx="1" stroke="#666" strokeWidth="0.8" fill="none" />
      {/* Upward sightline */}
      <line x1="37" y1="124" x2="70" y2="62" stroke="#444" strokeWidth="0.8" strokeDasharray="4 3" />
      {/* Ground plane */}
      <line x1="0" y1="140" x2="200" y2="140" stroke="#2a2a2a" strokeWidth="0.6" />
      {/* Hard directional light */}
      <circle cx="175" cy="18" r="6" stroke="#fbbf24" strokeWidth="1" fill="none" opacity="0.8" />
      <line x1="165" y1="22" x2="120" y2="45" stroke="#fbbf24" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
    </svg>
  ),

  'phone-inhand': (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hand silhouette */}
      <path
        d="M65 130 Q60 110 62 95 Q63 85 70 80 L78 78 L80 95 L84 78 L86 65 Q87 60 92 60 Q97 60 97 65 L97 78 L100 65 Q101 60 106 60 Q111 60 111 65 L111 78 L114 70 Q115 65 120 65 Q125 65 124 72 L122 90 L128 88 Q134 87 135 93 Q136 100 130 103 L118 110 Q114 125 110 132 Z"
        stroke="#444"
        strokeWidth="1.2"
        fill="#1a1a1a"
        opacity="0.6"
      />
      {/* Phone in hand */}
      <rect x="78" y="40" width="44" height="75" rx="5" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.7" />
      <rect x="83" y="47" width="34" height="58" rx="2" stroke="#3b82f6" strokeWidth="0.8" fill="#1a1a1a" opacity="0.5" />
      <circle cx="100" cy="44" r="2" stroke="#3b82f6" strokeWidth="0.7" fill="none" />
      {/* Camera slightly above */}
      <rect x="14" y="22" width="18" height="13" rx="2" stroke="#666" strokeWidth="1" fill="none" />
      <circle cx="23" cy="28" r="3" stroke="#666" strokeWidth="0.8" fill="none" />
      <rect x="32" y="25" width="5" height="7" rx="1" stroke="#666" strokeWidth="0.8" fill="none" />
      {/* Sightline */}
      <line x1="37" y1="28" x2="76" y2="58" stroke="#444" strokeWidth="0.8" strokeDasharray="4 3" />
      {/* Human scale reference bars */}
      <line x1="155" y1="40" x2="155" y2="115" stroke="#333" strokeWidth="0.6" />
      <line x1="150" y1="40" x2="160" y2="40" stroke="#333" strokeWidth="0.6" />
      <line x1="150" y1="115" x2="160" y2="115" stroke="#333" strokeWidth="0.6" />
    </svg>
  ),

  'multi-flatlay': (
    <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Phone */}
      <rect x="30" y="45" width="34" height="60" rx="4" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.7" />
      <rect x="35" y="51" width="24" height="46" rx="1.5" stroke="#3b82f6" strokeWidth="0.7" fill="#1a1a1a" opacity="0.4" />
      {/* Tablet */}
      <rect x="76" y="35" width="50" height="70" rx="4" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.7" />
      <rect x="81" y="41" width="40" height="56" rx="1.5" stroke="#3b82f6" strokeWidth="0.7" fill="#1a1a1a" opacity="0.4" />
      {/* Watch */}
      <rect x="140" y="55" width="28" height="34" rx="7" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.7" />
      <rect x="144" y="60" width="20" height="24" rx="5" stroke="#3b82f6" strokeWidth="0.7" fill="#1a1a1a" opacity="0.4" />
      <rect x="148" y="46" width="12" height="12" rx="2" stroke="#444" strokeWidth="0.8" fill="none" />
      <rect x="148" y="89" width="12" height="12" rx="2" stroke="#444" strokeWidth="0.8" fill="none" />
      {/* Camera directly above — boom */}
      <rect x="90" y="5" width="18" height="13" rx="2" stroke="#666" strokeWidth="1" fill="none" />
      <circle cx="99" cy="11" r="3" stroke="#666" strokeWidth="0.8" fill="none" />
      {/* Sightline straight down */}
      <line x1="99" y1="18" x2="99" y2="35" stroke="#444" strokeWidth="0.8" strokeDasharray="4 3" />
      {/* Surface baseline */}
      <line x1="28" y1="130" x2="172" y2="130" stroke="#2a2a2a" strokeWidth="0.5" />
    </svg>
  ),
}
