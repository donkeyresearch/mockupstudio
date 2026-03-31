/**
 * diagrams/index.jsx — SVG line-art diagrams, light theme.
 * Device silhouette: dark navy. Camera + sightline: mid gray. Light: amber.
 * ViewBox: 200×150.
 */

const DEVICE      = '#1a1f36'
const DEVICE_FILL = '#edeef4'
const DEVICE_FILL2 = '#e2e4ef'
const SCREEN_FILL = '#ffffff'
const CAM         = '#888ea8'
const SIGHT       = '#b0b5cc'
const DEPTH       = '#c8cad8'
const LIGHT       = '#f59e0b'

export const diagrams = {
  // ─── PHONE ──────────────────────────────────────────────────────
  'phone-hero': (
    <svg viewBox="0 0 200 150" fill="none">
      <rect x="75" y="30" width="52" height="90" rx="6" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      <rect x="83" y="38" width="36" height="60" rx="2" stroke={DEVICE} strokeWidth="0.9" fill={SCREEN_FILL} />
      <circle cx="101" cy="108" r="3" stroke={DEVICE} strokeWidth="1" fill="none" />
      <line x1="75" y1="30" x2="65" y2="22" stroke={DEPTH} strokeWidth="1" />
      <line x1="127" y1="30" x2="137" y2="22" stroke={DEPTH} strokeWidth="1" />
      <line x1="65" y1="22" x2="137" y2="22" stroke={DEPTH} strokeWidth="1" />
      <rect x="18" y="15" width="18" height="13" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="27" cy="21" r="3" stroke={CAM} strokeWidth="1" fill="none" />
      <rect x="36" y="18" width="5" height="7" rx="1" stroke={CAM} strokeWidth="1" fill={SCREEN_FILL} />
      <line x1="36" y1="21" x2="72" y2="45" stroke={SIGHT} strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="168" cy="22" r="6" stroke={LIGHT} strokeWidth="1.2" fill="none" />
      <line x1="168" y1="9" x2="168" y2="14" stroke={LIGHT} strokeWidth="1.2" />
      <line x1="179" y1="13" x2="175" y2="17" stroke={LIGHT} strokeWidth="1.2" />
      <line x1="183" y1="22" x2="177" y2="22" stroke={LIGHT} strokeWidth="1.2" />
      <line x1="179" y1="31" x2="175" y2="27" stroke={LIGHT} strokeWidth="1.2" />
    </svg>
  ),

  'phone-hero-rim': (
    <svg viewBox="0 0 200 150" fill="none">
      {/* Phone */}
      <rect x="75" y="30" width="52" height="90" rx="6" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      <rect x="83" y="38" width="36" height="60" rx="2" stroke={DEVICE} strokeWidth="0.9" fill="#1a1a2e" />
      <circle cx="101" cy="108" r="3" stroke={DEVICE} strokeWidth="1" fill="none" />
      <line x1="75" y1="30" x2="65" y2="22" stroke={DEPTH} strokeWidth="1" />
      <line x1="127" y1="30" x2="137" y2="22" stroke={DEPTH} strokeWidth="1" />
      <line x1="65" y1="22" x2="137" y2="22" stroke={DEPTH} strokeWidth="1" />
      {/* Camera */}
      <rect x="18" y="15" width="18" height="13" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="27" cy="21" r="3" stroke={CAM} strokeWidth="1" fill="none" />
      <line x1="36" y1="21" x2="72" y2="45" stroke={SIGHT} strokeWidth="1" strokeDasharray="4 3" />
      {/* Rim / backlight source — behind device */}
      <circle cx="168" cy="75" r="8" stroke={LIGHT} strokeWidth="1.2" fill="none" opacity="0.8" />
      <path d="M75 30 Q55 75 75 120" stroke={LIGHT} strokeWidth="1.5" fill="none" strokeDasharray="3 3" opacity="0.7" />
      <text x="154" y="60" fontSize="7" fill={LIGHT} fontFamily="sans-serif" opacity="0.8">RIM</text>
    </svg>
  ),

  'phone-topdown': (
    <svg viewBox="0 0 200 150" fill="none">
      <rect x="74" y="35" width="52" height="80" rx="6" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      <rect x="82" y="43" width="36" height="60" rx="2" stroke={DEVICE} strokeWidth="0.9" fill={SCREEN_FILL} />
      <circle cx="100" cy="42" r="2.5" stroke={DEVICE} strokeWidth="1" fill="none" />
      <rect x="90" y="5" width="18" height="13" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="99" cy="11" r="3" stroke={CAM} strokeWidth="1" fill="none" />
      <line x1="99" y1="18" x2="99" y2="35" stroke={SIGHT} strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="158" cy="20" r="6" stroke={LIGHT} strokeWidth="1.2" fill="none" />
      <line x1="158" y1="8" x2="158" y2="13" stroke={LIGHT} strokeWidth="1.2" />
      <line x1="169" y1="14" x2="165" y2="17" stroke={LIGHT} strokeWidth="1.2" />
      <line x1="158" y1="30" x2="100" y2="40" stroke={LIGHT} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
    </svg>
  ),

  'phone-lowangle': (
    <svg viewBox="0 0 200 150" fill="none">
      {/* Phone tilted back (low angle view) */}
      <rect x="75" y="35" width="52" height="88" rx="6" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      <rect x="83" y="43" width="36" height="60" rx="2" stroke={DEVICE} strokeWidth="0.9" fill={SCREEN_FILL} />
      {/* Camera very low */}
      <rect x="14" y="128" width="18" height="13" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="23" cy="134" r="3" stroke={CAM} strokeWidth="1" fill="none" />
      <rect x="32" y="131" width="5" height="7" rx="1" stroke={CAM} strokeWidth="1" fill={SCREEN_FILL} />
      {/* Upward sightline — steep */}
      <line x1="37" y1="132" x2="78" y2="55" stroke={SIGHT} strokeWidth="1" strokeDasharray="4 3" />
      {/* Ground line */}
      <line x1="0" y1="145" x2="200" y2="145" stroke={DEPTH} strokeWidth="0.8" />
      {/* Hard light upper right */}
      <circle cx="175" cy="15" r="7" stroke={LIGHT} strokeWidth="1.2" fill="none" />
      <line x1="163" y1="19" x2="130" y2="50" stroke={LIGHT} strokeWidth="0.9" strokeDasharray="3 3" opacity="0.7" />
    </svg>
  ),

  'phone-inhand': (
    <svg viewBox="0 0 200 150" fill="none">
      <path d="M65 130 Q60 110 62 95 Q63 85 70 80 L78 78 L80 95 L84 78 L86 65 Q87 60 92 60 Q97 60 97 65 L97 78 L100 65 Q101 60 106 60 Q111 60 111 65 L111 78 L114 70 Q115 65 120 65 Q125 65 124 72 L122 90 L128 88 Q134 87 135 93 Q136 100 130 103 L118 110 Q114 125 110 132 Z"
        stroke={DEPTH} strokeWidth="1.2" fill={DEVICE_FILL2} />
      <rect x="78" y="40" width="44" height="75" rx="5" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      <rect x="83" y="47" width="34" height="58" rx="2" stroke={DEVICE} strokeWidth="0.9" fill={SCREEN_FILL} />
      <circle cx="100" cy="44" r="2.5" stroke={DEVICE} strokeWidth="1" fill="none" />
      <rect x="14" y="22" width="18" height="13" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="23" cy="28" r="3" stroke={CAM} strokeWidth="1" fill="none" />
      <line x1="37" y1="28" x2="76" y2="58" stroke={SIGHT} strokeWidth="1" strokeDasharray="4 3" />
      <line x1="155" y1="40" x2="155" y2="115" stroke={DEPTH} strokeWidth="0.8" />
      <line x1="150" y1="40" x2="160" y2="40" stroke={DEPTH} strokeWidth="0.8" />
      <line x1="150" y1="115" x2="160" y2="115" stroke={DEPTH} strokeWidth="0.8" />
    </svg>
  ),

  'phone-ambient': (
    <svg viewBox="0 0 200 150" fill="none">
      {/* Dark ambient — phone straight on, screen is light source */}
      <rect x="75" y="25" width="52" height="100" rx="6" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      <rect x="83" y="33" width="36" height="72" rx="2" stroke="#3b82f6" strokeWidth="1" fill="#0f172a" />
      {/* Screen glow lines radiating out */}
      <line x1="101" y1="69" x2="60" y2="69" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
      <line x1="101" y1="69" x2="140" y2="69" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
      <line x1="101" y1="69" x2="101" y2="20" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
      {/* Camera eye-level */}
      <rect x="14" y="62" width="18" height="13" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="23" cy="68" r="3" stroke={CAM} strokeWidth="1" fill="none" />
      <line x1="37" y1="68" x2="75" y2="68" stroke={SIGHT} strokeWidth="1" strokeDasharray="4 3" />
      {/* Ambient dark label */}
      <text x="155" y="78" fontSize="7" fill={DEPTH} fontFamily="sans-serif">DARK</text>
    </svg>
  ),

  'phone-exploded': (
    <svg viewBox="0 0 200 150" fill="none">
      {/* Exploded layers along vertical axis */}
      {/* Top — screen glass */}
      <rect x="80" y="8" width="42" height="18" rx="3" stroke={DEVICE} strokeWidth="1.5" fill={SCREEN_FILL} />
      <text x="88" y="20" fontSize="6" fill={CAM} fontFamily="sans-serif">GLASS</text>
      {/* Dashed axis line */}
      <line x1="101" y1="26" x2="101" y2="34" stroke={DEPTH} strokeWidth="0.8" strokeDasharray="2 2" />
      {/* Frame */}
      <rect x="78" y="34" width="46" height="24" rx="4" stroke={DEVICE} strokeWidth="1.5" fill={DEVICE_FILL} />
      <text x="87" y="49" fontSize="6" fill={CAM} fontFamily="sans-serif">FRAME</text>
      <line x1="101" y1="58" x2="101" y2="66" stroke={DEPTH} strokeWidth="0.8" strokeDasharray="2 2" />
      {/* Camera module */}
      <rect x="84" y="66" width="34" height="18" rx="3" stroke={DEVICE} strokeWidth="1.5" fill={DEVICE_FILL2} />
      <circle cx="94" cy="75" r="4" stroke={DEVICE} strokeWidth="1" fill={SCREEN_FILL} />
      <circle cx="106" cy="75" r="3" stroke={DEVICE} strokeWidth="1" fill={SCREEN_FILL} />
      <line x1="101" y1="84" x2="101" y2="92" stroke={DEPTH} strokeWidth="0.8" strokeDasharray="2 2" />
      {/* Back glass */}
      <rect x="78" y="92" width="46" height="20" rx="4" stroke={DEVICE} strokeWidth="1.5" fill={DEVICE_FILL} />
      <text x="85" y="105" fontSize="6" fill={CAM} fontFamily="sans-serif">BACK GLASS</text>
      {/* Camera overhead */}
      <rect x="90" y="128" width="18" height="13" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="99" cy="134" r="3" stroke={CAM} strokeWidth="1" fill="none" />
      <line x1="99" y1="128" x2="101" y2="112" stroke={SIGHT} strokeWidth="1" strokeDasharray="4 3" />
    </svg>
  ),

  // ─── TABLET ─────────────────────────────────────────────────────
  'tablet-eyelevel': (
    <svg viewBox="0 0 200 150" fill="none">
      <rect x="68" y="20" width="64" height="110" rx="5" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      <rect x="74" y="28" width="52" height="88" rx="2" stroke={DEVICE} strokeWidth="0.9" fill={SCREEN_FILL} />
      <circle cx="100" cy="137" r="3" stroke={DEVICE} strokeWidth="1" fill="none" />
      <rect x="14" y="68" width="18" height="13" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="23" cy="74" r="3" stroke={CAM} strokeWidth="1" fill="none" />
      <rect x="32" y="71" width="5" height="7" rx="1" stroke={CAM} strokeWidth="1" fill={SCREEN_FILL} />
      <line x1="37" y1="74" x2="68" y2="74" stroke={SIGHT} strokeWidth="1" strokeDasharray="4 3" />
      <line x1="14" y1="74" x2="186" y2="74" stroke={DEPTH} strokeWidth="0.7" strokeDasharray="2 5" />
      <rect x="160" y="25" width="18" height="60" rx="2" stroke={LIGHT} strokeWidth="1" fill="none" opacity="0.6" />
      <line x1="163" y1="30" x2="163" y2="80" stroke={LIGHT} strokeWidth="0.5" opacity="0.4" />
      <line x1="168" y1="30" x2="168" y2="80" stroke={LIGHT} strokeWidth="0.5" opacity="0.4" />
      <line x1="173" y1="30" x2="173" y2="80" stroke={LIGHT} strokeWidth="0.5" opacity="0.4" />
    </svg>
  ),

  'tablet-iso': (
    <svg viewBox="0 0 200 150" fill="none">
      {/* Tablet isometric portrait */}
      <path d="M60 115 L100 98 L140 115 L100 132 Z" stroke={DEVICE} strokeWidth="1.4" fill={DEVICE_FILL2} />
      <path d="M60 115 L60 45 L100 28 L100 98 Z" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      <path d="M65 108 L65 48 L97 32 L97 92 Z" stroke={DEVICE} strokeWidth="0.8" fill={SCREEN_FILL} />
      <path d="M100 28 L140 45 L140 115 L100 98 Z" stroke={DEVICE} strokeWidth="1.2" fill={DEVICE_FILL2} />
      <rect x="14" y="20" width="18" height="13" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="23" cy="26" r="3" stroke={CAM} strokeWidth="1" fill="none" />
      <line x1="32" y1="26" x2="72" y2="70" stroke={SIGHT} strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="172" cy="18" r="6" stroke={LIGHT} strokeWidth="1.2" fill="none" />
      <line x1="162" y1="22" x2="128" y2="60" stroke={LIGHT} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
    </svg>
  ),

  'tablet-topdown': (
    <svg viewBox="0 0 200 150" fill="none">
      {/* Tablet landscape from above */}
      <rect x="42" y="42" width="116" height="76" rx="5" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      <rect x="50" y="50" width="100" height="60" rx="2" stroke={DEVICE} strokeWidth="0.9" fill={SCREEN_FILL} />
      <circle cx="158" cy="80" r="3" stroke={DEVICE} strokeWidth="1" fill="none" />
      <rect x="90" y="5" width="18" height="13" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="99" cy="11" r="3" stroke={CAM} strokeWidth="1" fill="none" />
      <line x1="99" y1="18" x2="99" y2="42" stroke={SIGHT} strokeWidth="1" strokeDasharray="4 3" />
      {/* Pencil prop */}
      <rect x="165" y="35" width="6" height="80" rx="2" stroke={DEPTH} strokeWidth="1" fill={DEVICE_FILL} transform="rotate(15 168 75)" />
    </svg>
  ),

  // ─── LAPTOP ─────────────────────────────────────────────────────
  'laptop-iso': (
    <svg viewBox="0 0 200 150" fill="none">
      <path d="M50 105 L100 90 L150 105 L100 120 Z" stroke={DEVICE} strokeWidth="1.4" fill={DEVICE_FILL2} />
      <path d="M50 105 L50 68 L100 53 L100 90 Z" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      <path d="M55 100 L55 70 L97 56 L97 87 Z" stroke={DEVICE} strokeWidth="0.8" fill={SCREEN_FILL} />
      <path d="M100 53 L150 68 L150 105 L100 90 Z" stroke={DEVICE} strokeWidth="1.2" fill={DEVICE_FILL2} />
      <rect x="14" y="20" width="18" height="13" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="23" cy="26" r="3" stroke={CAM} strokeWidth="1" fill="none" />
      <rect x="32" y="23" width="5" height="7" rx="1" stroke={CAM} strokeWidth="1" fill={SCREEN_FILL} />
      <line x1="32" y1="26" x2="70" y2="75" stroke={SIGHT} strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="172" cy="18" r="6" stroke={LIGHT} strokeWidth="1.2" fill="none" />
      <line x1="162" y1="22" x2="130" y2="65" stroke={LIGHT} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
    </svg>
  ),

  'laptop-eyelevel': (
    <svg viewBox="0 0 200 150" fill="none">
      {/* Laptop side view — lid open 105° */}
      {/* Base */}
      <rect x="50" y="100" width="100" height="12" rx="2" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL2} />
      {/* Screen — angled back */}
      <path d="M56 100 L68 30 L132 30 L144 100 Z" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      <path d="M62 96 L73 36 L127 36 L138 96 Z" stroke={DEVICE} strokeWidth="0.8" fill={SCREEN_FILL} />
      {/* Camera eye-level */}
      <rect x="14" y="62" width="18" height="13" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="23" cy="68" r="3" stroke={CAM} strokeWidth="1" fill="none" />
      <line x1="37" y1="68" x2="62" y2="68" stroke={SIGHT} strokeWidth="1" strokeDasharray="4 3" />
      {/* Horizon */}
      <line x1="14" y1="68" x2="186" y2="68" stroke={DEPTH} strokeWidth="0.6" strokeDasharray="2 5" />
      {/* Window light */}
      <rect x="162" y="25" width="16" height="55" rx="2" stroke={LIGHT} strokeWidth="1" fill="none" opacity="0.5" />
      <line x1="165" y1="30" x2="165" y2="76" stroke={LIGHT} strokeWidth="0.5" opacity="0.4" />
      <line x1="170" y1="30" x2="170" y2="76" stroke={LIGHT} strokeWidth="0.5" opacity="0.4" />
    </svg>
  ),

  'laptop-topdown': (
    <svg viewBox="0 0 200 150" fill="none">
      {/* Laptop top-down — closed lid, full chassis visible */}
      <rect x="38" y="30" width="124" height="90" rx="8" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      {/* Apple logo */}
      <circle cx="100" cy="75" r="10" stroke={DEVICE} strokeWidth="0.8" fill={DEVICE_FILL2} />
      {/* Hinge line */}
      <line x1="38" y1="118" x2="162" y2="118" stroke={DEPTH} strokeWidth="1" />
      <rect x="90" y="5" width="18" height="13" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="99" cy="11" r="3" stroke={CAM} strokeWidth="1" fill="none" />
      <line x1="99" y1="18" x2="99" y2="30" stroke={SIGHT} strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="158" cy="20" r="5" stroke={LIGHT} strokeWidth="1.2" fill="none" />
      <line x1="158" y1="8" x2="158" y2="13" stroke={LIGHT} strokeWidth="1.2" />
    </svg>
  ),

  // ─── WATCH ──────────────────────────────────────────────────────
  'watch-macro': (
    <svg viewBox="0 0 200 150" fill="none">
      <rect x="74" y="40" width="52" height="70" rx="14" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      <rect x="80" y="48" width="40" height="54" rx="10" stroke={DEVICE} strokeWidth="0.9" fill={SCREEN_FILL} />
      <rect x="82" y="25" width="36" height="18" rx="3" stroke={DEPTH} strokeWidth="1.2" fill={DEVICE_FILL2} />
      <rect x="82" y="107" width="36" height="18" rx="3" stroke={DEPTH} strokeWidth="1.2" fill={DEVICE_FILL2} />
      <rect x="126" y="68" width="8" height="14" rx="2" stroke={DEVICE} strokeWidth="1.2" fill={DEVICE_FILL} />
      <circle cx="100" cy="75" r="16" stroke={DEVICE} strokeWidth="0.7" fill="none" opacity="0.4" />
      <line x1="100" y1="63" x2="100" y2="68" stroke={DEVICE} strokeWidth="1.2" />
      <line x1="100" y1="75" x2="106" y2="72" stroke={DEVICE} strokeWidth="1.2" />
      <rect x="155" y="68" width="22" height="14" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="166" cy="75" r="4" stroke={CAM} strokeWidth="1.2" fill="none" />
      <circle cx="166" cy="75" r="1.5" stroke={CAM} strokeWidth="0.8" fill="none" />
      <line x1="155" y1="75" x2="134" y2="75" stroke={SIGHT} strokeWidth="1" strokeDasharray="3 2" />
      <path d="M68 48 Q55 75 68 102" stroke={LIGHT} strokeWidth="1.2" fill="none" strokeDasharray="3 3" opacity="0.7" />
    </svg>
  ),

  'watch-hero': (
    <svg viewBox="0 0 200 150" fill="none">
      {/* Watch upright — hero 3/4 */}
      <rect x="80" y="32" width="44" height="58" rx="12" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      <rect x="86" y="39" width="32" height="44" rx="8" stroke={DEVICE} strokeWidth="0.9" fill={SCREEN_FILL} />
      {/* Straps */}
      <rect x="86" y="14" width="32" height="20" rx="4" stroke={DEPTH} strokeWidth="1.2" fill={DEVICE_FILL2} />
      <rect x="86" y="88" width="32" height="20" rx="4" stroke={DEPTH} strokeWidth="1.2" fill={DEVICE_FILL2} />
      {/* Crown */}
      <rect x="124" y="52" width="6" height="12" rx="2" stroke={DEVICE} strokeWidth="1.2" fill={DEVICE_FILL} />
      {/* Perspective depth */}
      <line x1="80" y1="32" x2="72" y2="25" stroke={DEPTH} strokeWidth="0.9" />
      <line x1="124" y1="32" x2="132" y2="25" stroke={DEPTH} strokeWidth="0.9" />
      <line x1="72" y1="25" x2="132" y2="25" stroke={DEPTH} strokeWidth="0.9" />
      {/* Camera */}
      <rect x="18" y="48" width="18" height="13" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="27" cy="54" r="3" stroke={CAM} strokeWidth="1" fill="none" />
      <line x1="36" y1="54" x2="78" y2="54" stroke={SIGHT} strokeWidth="1" strokeDasharray="4 3" />
      {/* Soft light */}
      <circle cx="168" cy="22" r="6" stroke={LIGHT} strokeWidth="1.2" fill="none" />
      <line x1="158" y1="26" x2="124" y2="45" stroke={LIGHT} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
    </svg>
  ),

  // ─── DESKTOP ────────────────────────────────────────────────────
  'desktop-low': (
    <svg viewBox="0 0 200 150" fill="none">
      <rect x="45" y="25" width="110" height="75" rx="4" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      <rect x="51" y="31" width="98" height="63" rx="2" stroke={DEVICE} strokeWidth="0.9" fill={SCREEN_FILL} />
      <rect x="88" y="100" width="24" height="16" rx="1" stroke={DEVICE} strokeWidth="1.2" fill={DEVICE_FILL2} />
      <rect x="72" y="116" width="56" height="5" rx="2" stroke={DEVICE} strokeWidth="1.2" fill={DEVICE_FILL2} />
      <rect x="14" y="120" width="18" height="13" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="23" cy="126" r="3" stroke={CAM} strokeWidth="1" fill="none" />
      <line x1="37" y1="124" x2="70" y2="62" stroke={SIGHT} strokeWidth="1" strokeDasharray="4 3" />
      <line x1="0" y1="140" x2="200" y2="140" stroke={DEPTH} strokeWidth="0.8" />
      <circle cx="175" cy="18" r="6" stroke={LIGHT} strokeWidth="1.2" fill="none" />
      <line x1="165" y1="22" x2="120" y2="45" stroke={LIGHT} strokeWidth="0.9" strokeDasharray="3 3" opacity="0.7" />
    </svg>
  ),

  'desktop-iso': (
    <svg viewBox="0 0 200 150" fill="none">
      {/* Monitor isometric */}
      <path d="M35 110 L100 90 L165 110 L100 130 Z" stroke={DEVICE} strokeWidth="1.3" fill={DEVICE_FILL2} />
      <path d="M35 110 L35 55 L100 35 L100 90 Z" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      <path d="M40 105 L40 58 L97 39 L97 86 Z" stroke={DEVICE} strokeWidth="0.8" fill={SCREEN_FILL} />
      <path d="M100 35 L165 55 L165 110 L100 90 Z" stroke={DEVICE} strokeWidth="1.2" fill={DEVICE_FILL2} />
      {/* Stand hint */}
      <line x1="100" y1="90" x2="100" y2="130" stroke={DEPTH} strokeWidth="1" />
      {/* Camera */}
      <rect x="8" y="20" width="18" height="13" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="17" cy="26" r="3" stroke={CAM} strokeWidth="1" fill="none" />
      <line x1="26" y1="26" x2="55" y2="72" stroke={SIGHT} strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="172" cy="15" r="6" stroke={LIGHT} strokeWidth="1.2" fill="none" />
      <line x1="162" y1="19" x2="125" y2="58" stroke={LIGHT} strokeWidth="0.9" strokeDasharray="3 3" opacity="0.7" />
    </svg>
  ),

  // ─── TV ─────────────────────────────────────────────────────────
  'tv-eyelevel': (
    <svg viewBox="0 0 200 150" fill="none">
      {/* Wide TV straight on */}
      <rect x="20" y="30" width="160" height="90" rx="4" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      <rect x="26" y="36" width="148" height="78" rx="2" stroke={DEVICE} strokeWidth="0.9" fill={SCREEN_FILL} />
      {/* Stand */}
      <rect x="88" y="120" width="24" height="12" rx="1" stroke={DEVICE} strokeWidth="1.2" fill={DEVICE_FILL2} />
      <rect x="76" y="132" width="48" height="4" rx="1" stroke={DEVICE} strokeWidth="1" fill={DEVICE_FILL2} />
      {/* Camera far back — eye-level */}
      <rect x="88" y="65" width="14" height="10" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="95" cy="70" r="2.5" stroke={CAM} strokeWidth="1" fill="none" />
      {/* Horizon */}
      <line x1="0" y1="75" x2="200" y2="75" stroke={DEPTH} strokeWidth="0.6" strokeDasharray="2 5" />
      {/* Ambient floor lamp */}
      <line x1="178" y1="136" x2="178" y2="40" stroke={LIGHT} strokeWidth="1" opacity="0.5" />
      <ellipse cx="178" cy="40" rx="8" ry="5" stroke={LIGHT} strokeWidth="1" fill="none" opacity="0.5" />
      <line x1="170" y1="44" x2="152" y2="75" stroke={LIGHT} strokeWidth="0.7" strokeDasharray="3 3" opacity="0.4" />
    </svg>
  ),

  // ─── MULTI-DEVICE ───────────────────────────────────────────────
  'multi-flatlay': (
    <svg viewBox="0 0 200 150" fill="none">
      <rect x="30" y="45" width="34" height="60" rx="4" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      <rect x="35" y="51" width="24" height="46" rx="1.5" stroke={DEVICE} strokeWidth="0.9" fill={SCREEN_FILL} />
      <rect x="76" y="35" width="50" height="70" rx="4" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      <rect x="81" y="41" width="40" height="56" rx="1.5" stroke={DEVICE} strokeWidth="0.9" fill={SCREEN_FILL} />
      <rect x="140" y="55" width="28" height="34" rx="7" stroke={DEVICE} strokeWidth="1.8" fill={DEVICE_FILL} />
      <rect x="144" y="60" width="20" height="24" rx="5" stroke={DEVICE} strokeWidth="0.9" fill={SCREEN_FILL} />
      <rect x="148" y="46" width="12" height="12" rx="2" stroke={DEPTH} strokeWidth="1" fill={DEVICE_FILL2} />
      <rect x="148" y="89" width="12" height="12" rx="2" stroke={DEPTH} strokeWidth="1" fill={DEVICE_FILL2} />
      <rect x="90" y="5" width="18" height="13" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="99" cy="11" r="3" stroke={CAM} strokeWidth="1" fill="none" />
      <line x1="99" y1="18" x2="99" y2="35" stroke={SIGHT} strokeWidth="1" strokeDasharray="4 3" />
      <line x1="28" y1="130" x2="172" y2="130" stroke={DEPTH} strokeWidth="0.8" />
    </svg>
  ),

  'multi-iso': (
    <svg viewBox="0 0 200 150" fill="none">
      {/* Laptop rear */}
      <path d="M55 95 L95 80 L135 95 L95 110 Z" stroke={DEVICE} strokeWidth="1.2" fill={DEVICE_FILL2} />
      <path d="M55 95 L55 65 L95 50 L95 80 Z" stroke={DEVICE} strokeWidth="1.5" fill={DEVICE_FILL} />
      <path d="M59 90 L59 67 L92 53 L92 76 Z" stroke={DEVICE} strokeWidth="0.7" fill={SCREEN_FILL} />
      <path d="M95 50 L135 65 L135 95 L95 80 Z" stroke={DEVICE} strokeWidth="1.1" fill={DEVICE_FILL2} />
      {/* Tablet mid */}
      <rect x="96" y="62" width="30" height="50" rx="4" stroke={DEVICE} strokeWidth="1.5" fill={DEVICE_FILL} />
      <rect x="100" y="67" width="22" height="38" rx="2" stroke={DEVICE} strokeWidth="0.8" fill={SCREEN_FILL} />
      {/* Phone front */}
      <rect x="128" y="75" width="20" height="38" rx="4" stroke={DEVICE} strokeWidth="1.5" fill={DEVICE_FILL} />
      <rect x="131" y="79" width="14" height="28" rx="2" stroke={DEVICE} strokeWidth="0.8" fill={SCREEN_FILL} />
      {/* Camera */}
      <rect x="12" y="15" width="18" height="13" rx="2" stroke={CAM} strokeWidth="1.2" fill={SCREEN_FILL} />
      <circle cx="21" cy="21" r="3" stroke={CAM} strokeWidth="1" fill="none" />
      <line x1="30" y1="21" x2="65" y2="65" stroke={SIGHT} strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="172" cy="15" r="5" stroke={LIGHT} strokeWidth="1.2" fill="none" />
      <line x1="163" y1="18" x2="130" y2="58" stroke={LIGHT} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
    </svg>
  ),
}
