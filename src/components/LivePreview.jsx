/**
 * LivePreview.jsx
 *
 * CSS 3D rendered device frame preview — shows how the actual shot will look.
 * Uses CSS perspective transforms matched to each angle, and gradient overlays
 * matched to each lighting preset. No images — pure CSS/SVG render.
 */

// ─── Angle → CSS 3D transform ──────────────────────────────────────
const ANGLE_STYLE = {
  'Hero 3/4':    { transform: 'perspective(600px) rotateY(-32deg) rotateX(10deg)', },
  'Top-down':    { transform: 'perspective(500px) rotateX(72deg) rotateY(0deg)', },
  'Eye-level':   { transform: 'perspective(1200px) rotateY(0deg) rotateX(0deg)', },
  'Low angle':   { transform: 'perspective(500px) rotateX(-22deg) rotateY(5deg)', },
  'Isometric':   { transform: 'perspective(900px) rotateX(28deg) rotateY(-42deg)', },
  'Detail/Macro':{ transform: 'scale(1.28) perspective(1200px) rotateY(-8deg)', },
  'In-hand':     { transform: 'perspective(700px) rotateY(-20deg) rotateX(18deg) rotate(4deg)', },
  'Exploded':    { transform: 'perspective(700px) rotateX(22deg) rotateY(-30deg)', },
}

// ─── Lighting → gradient overlay + bg ─────────────────────────────
const LIGHTING_CONFIG = {
  'Studio White': {
    bg: '#f0f0f0',
    screenBg: '#e8f4fd',
    overlay: 'radial-gradient(ellipse at 28% 28%, rgba(255,255,255,0.92) 0%, rgba(220,228,242,0.3) 55%, rgba(160,170,195,0.45) 100%)',
    shadow: '12px 18px 40px rgba(0,0,0,0.18)',
  },
  'Soft Window': {
    bg: '#f5f0e8',
    screenBg: '#d4eaf7',
    overlay: 'linear-gradient(118deg, rgba(255,245,210,0.75) 0%, rgba(255,255,255,0.2) 45%, rgba(180,195,215,0.45) 100%)',
    shadow: '10px 16px 36px rgba(0,0,0,0.15)',
  },
  'Hard Directional': {
    bg: '#1a1a1a',
    screenBg: '#1e3a5f',
    overlay: 'linear-gradient(130deg, rgba(255,255,255,0.95) 0%, rgba(255,252,230,0.2) 28%, rgba(15,15,30,0.75) 100%)',
    shadow: '16px 20px 50px rgba(0,0,0,0.6)',
  },
  'Rim/Backlight': {
    bg: '#080808',
    screenBg: '#0f1629',
    overlay: 'radial-gradient(ellipse at 50% 110%, rgba(80,140,255,0.55) 0%, rgba(10,10,30,0.92) 55%, rgba(5,5,20,0.98) 100%)',
    shadow: '0 0 60px rgba(60,100,255,0.25)',
    rimGlow: true,
  },
  'Ambient Dark': {
    bg: '#05050f',
    screenBg: '#0a1628',
    overlay: 'radial-gradient(ellipse at 48% 35%, rgba(60,110,255,0.28) 0%, rgba(8,8,25,0.96) 65%)',
    shadow: '0 0 80px rgba(40,80,200,0.2)',
    screenGlow: true,
  },
  'Overcast Flat': {
    bg: '#eaedf2',
    screenBg: '#e0edf8',
    overlay: 'linear-gradient(175deg, rgba(245,248,255,0.65) 0%, rgba(215,222,238,0.45) 100%)',
    shadow: '8px 12px 28px rgba(0,0,0,0.10)',
  },
}

// ─── Device dimensions ──────────────────────────────────────────────
const DEVICE_DIMS = {
  Phone:        { w: 72,  h: 148, rx: 12, screenInset: [8, 8], label: 'PHONE' },
  Tablet:       { w: 112, h: 148, rx: 10, screenInset: [10, 10], label: 'TABLET' },
  Laptop:       { w: 158, h: 100, rx: 8,  screenInset: [10, 10], label: 'LAPTOP', hasBase: true },
  Desktop:      { w: 168, h: 106, rx: 6,  screenInset: [8, 8], label: 'DISPLAY', hasStand: true },
  Watch:        { w: 78,  h: 96,  rx: 20, screenInset: [10, 10], label: 'WATCH', hasBands: true },
  TV:           { w: 200, h: 114, rx: 5,  screenInset: [6, 6], label: 'TV', hasStand: true },
  'Multi-device': { w: 158, h: 106, rx: 0, screenInset: [0, 0], label: 'MULTI', isMulti: true },
}

function DeviceShell({ device, lighting, angle, surface }) {
  const dims = DEVICE_DIMS[device] || DEVICE_DIMS.Phone
  const lc = LIGHTING_CONFIG[lighting] || LIGHTING_CONFIG['Studio White']
  const isDark = surface === 'Dark' || ['Hard Directional','Rim/Backlight','Ambient Dark'].includes(lighting)

  const deviceColor = isDark ? '#1c1c1e' : '#f2f2f7'
  const frameColor  = isDark ? '#2c2c2e' : '#e5e5ea'
  const screenColor = lc.screenBg

  if (dims.isMulti) {
    return (
      <div style={{ position: 'relative', width: 200, height: 130 }}>
        {/* Phone */}
        <div style={{
          position: 'absolute', left: 8, top: 20,
          width: 52, height: 100, borderRadius: 10,
          background: deviceColor, border: `2px solid ${frameColor}`,
          boxShadow: lc.shadow,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ width: 38, height: 72, borderRadius: 4, background: screenColor, opacity: 0.9 }} />
        </div>
        {/* Tablet */}
        <div style={{
          position: 'absolute', left: 68, top: 8,
          width: 80, height: 110, borderRadius: 8,
          background: deviceColor, border: `2px solid ${frameColor}`,
          boxShadow: lc.shadow,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ width: 64, height: 88, borderRadius: 3, background: screenColor, opacity: 0.9 }} />
        </div>
        {/* Watch */}
        <div style={{
          position: 'absolute', right: 8, top: 35,
          width: 46, height: 56, borderRadius: 14,
          background: deviceColor, border: `2px solid ${frameColor}`,
          boxShadow: lc.shadow,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ width: 34, height: 40, borderRadius: 10, background: screenColor, opacity: 0.9 }} />
        </div>
      </div>
    )
  }

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
      {/* Watch bands top */}
      {dims.hasBands && (
        <div style={{ width: dims.w * 0.55, height: 18, background: isDark ? '#2c2c2e' : '#d1d1d6', borderRadius: '4px 4px 0 0', marginBottom: 0 }} />
      )}

      {/* Main shell */}
      <div style={{
        width: dims.w,
        height: dims.h,
        borderRadius: dims.rx,
        background: deviceColor,
        border: `2px solid ${frameColor}`,
        boxShadow: lc.shadow,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        {/* Screen */}
        <div style={{
          position: 'absolute',
          top: dims.screenInset[1],
          left: dims.screenInset[0],
          right: dims.screenInset[0],
          bottom: dims.screenInset[1],
          borderRadius: Math.max(0, dims.rx - 6),
          background: screenColor,
          overflow: 'hidden',
        }}>
          {/* Fake UI lines on screen */}
          <div style={{ padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 5, opacity: 0.6 }}>
            <div style={{ height: 6, borderRadius: 3, background: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(30,60,120,0.25)', width: '70%' }} />
            <div style={{ height: 4, borderRadius: 2, background: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(30,60,120,0.15)', width: '50%' }} />
            <div style={{ height: 4, borderRadius: 2, background: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(30,60,120,0.15)', width: '85%' }} />
            <div style={{ height: 28, borderRadius: 4, background: isDark ? 'rgba(59,130,246,0.3)' : 'rgba(59,130,246,0.2)', marginTop: 4, width: '100%' }} />
            <div style={{ display: 'flex', gap: 4, marginTop: 2 }}>
              <div style={{ height: 18, borderRadius: 3, background: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(30,60,120,0.1)', flex: 1 }} />
              <div style={{ height: 18, borderRadius: 3, background: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(30,60,120,0.1)', flex: 1 }} />
            </div>
          </div>
          {/* Screen glow for ambient/rim */}
          {lc.screenGlow && (
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(ellipse at 50% 40%, rgba(59,130,246,0.35) 0%, transparent 70%)',
            }} />
          )}
        </div>

        {/* Lighting overlay */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: dims.rx,
          background: lc.overlay,
          pointerEvents: 'none',
        }} />

        {/* Rim glow */}
        {lc.rimGlow && (
          <div style={{
            position: 'absolute', inset: -1, borderRadius: dims.rx,
            boxShadow: 'inset -3px 0 12px rgba(80,140,255,0.5), inset 0 -3px 12px rgba(80,140,255,0.3)',
            pointerEvents: 'none',
          }} />
        )}

        {/* Home indicator or notch for phone */}
        {device === 'Phone' && (
          <div style={{
            position: 'absolute', bottom: 6, left: '50%', transform: 'translateX(-50%)',
            width: 36, height: 4, borderRadius: 2,
            background: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)',
          }} />
        )}

        {/* Watch clock hands */}
        {device === 'Watch' && (
          <div style={{ position: 'absolute', inset: dims.screenInset[0], borderRadius: dims.rx - 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 4, height: 20, background: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)', borderRadius: 2, position: 'absolute', top: '18%', left: '50%', transform: 'translateX(-50%)' }} />
            <div style={{ width: 3, height: 14, background: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)', borderRadius: 2, position: 'absolute', top: '28%', right: '25%', transform: 'rotate(60deg)' }} />
          </div>
        )}
      </div>

      {/* Watch bands bottom */}
      {dims.hasBands && (
        <div style={{ width: dims.w * 0.55, height: 18, background: isDark ? '#2c2c2e' : '#d1d1d6', borderRadius: '0 0 4px 4px', marginTop: 0 }} />
      )}

      {/* Laptop base */}
      {dims.hasBase && (
        <div style={{
          width: dims.w + 20, height: 14, marginTop: 1,
          background: isDark ? '#252527' : '#e0e0e5',
          borderRadius: '0 0 8px 8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }} />
      )}

      {/* Monitor stand */}
      {dims.hasStand && device === 'Desktop' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
          <div style={{ width: 20, height: 16, background: isDark ? '#252527' : '#d8d8de' }} />
          <div style={{ width: 60, height: 6, borderRadius: 3, background: isDark ? '#2c2c2e' : '#e0e0e5' }} />
        </div>
      )}
      {dims.hasStand && device === 'TV' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: 24, height: 10, background: isDark ? '#252527' : '#d8d8de' }} />
          <div style={{ width: 70, height: 5, borderRadius: 2, background: isDark ? '#2c2c2e' : '#e0e0e5' }} />
        </div>
      )}
    </div>
  )
}

export default function LivePreview({ shot }) {
  const lc = LIGHTING_CONFIG[shot.lighting] || LIGHTING_CONFIG['Studio White']
  const angleStyle = ANGLE_STYLE[shot.angle] || ANGLE_STYLE['Hero 3/4']

  return (
    <div className="live-preview-wrapper">
      <div className="live-preview-label">Live Preview</div>

      <div className="live-preview-stage" style={{ background: lc.bg }}>
        {/* Background atmosphere */}
        <div className="live-preview-atmos" style={{
          background: shot.lighting === 'Studio White' || shot.lighting === 'Overcast Flat'
            ? 'radial-gradient(ellipse at 40% 40%, rgba(255,255,255,0.6) 0%, transparent 70%)'
            : shot.lighting === 'Soft Window'
            ? 'linear-gradient(110deg, rgba(255,245,200,0.3) 0%, transparent 60%)'
            : 'radial-gradient(ellipse at 50% 0%, rgba(60,100,255,0.08) 0%, transparent 60%)',
        }} />

        {/* 3D transformed device */}
        <div className="live-preview-device" style={angleStyle}>
          <DeviceShell
            device={shot.device}
            lighting={shot.lighting}
            angle={shot.angle}
            surface={shot.surface}
          />
        </div>

        {/* Lighting label badge */}
        <div className="live-preview-badge">
          <span className="live-preview-badge-dot" style={{
            background: shot.lighting === 'Studio White' ? '#f59e0b'
              : shot.lighting === 'Soft Window' ? '#fde68a'
              : shot.lighting === 'Hard Directional' ? '#ef4444'
              : shot.lighting === 'Rim/Backlight' ? '#3b82f6'
              : shot.lighting === 'Ambient Dark' ? '#6366f1'
              : '#a3e635',
          }} />
          {shot.lighting}
        </div>

        {/* Ground shadow */}
        <div className="live-preview-shadow" />
      </div>
    </div>
  )
}
