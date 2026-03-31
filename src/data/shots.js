/**
 * shots.js — Master data for all photography reference cards.
 *
 * Each shot defines:
 *   - Metadata (device, angle, lighting, surface)
 *   - Camera settings (focal length, aperture, light ratio, subject distance)
 *   - Use case tags
 *   - Shot direction notes (expert photography copy)
 *   - AI prompt (Midjourney-formatted, ready to paste)
 *   - Figma/handoff note
 */

export const SHOTS = [
  // ─── PHONE ────────────────────────────────────────────────────────
  {
    id: 'phone-hero',
    device: 'Phone',
    angle: 'Hero 3/4',
    lighting: 'Studio White',
    surface: 'Dark',
    shotName: 'iPhone · Hero 3/4 · Studio White',
    camera: { focal: '85mm equiv.', aperture: 'f/8', ratio: '3:1', distance: '~60cm' },
    useCases: ['App Store', 'Landing page hero', 'Social ad', 'Press kit'],
    notes:
      'Position the phone at 35–40° rotation from lens axis with a 15° elevation. This reveals the screen, left edge, and top surface simultaneously — the classic commerce angle that reads clearly at any size.',
    prompt:
      'Product photography, iPhone 15 Pro Titanium Natural, hero three-quarter angle 35° rotation 15° elevation, 85mm equivalent lens f/8, soft studio strobe key light 3:1 ratio from upper left, large white seamless background, subtle shadow falloff, sharp focus on screen face, product centered with negative space left, --ar 4:5 --style raw --q 2',
    figmaNote: 'Frame: 1200×1500px · Safe zone: 80px all sides · Screen area: 52% of frame height',
  },
  {
    id: 'phone-hero-rim',
    device: 'Phone',
    angle: 'Hero 3/4',
    lighting: 'Rim/Backlight',
    surface: 'Dark',
    shotName: 'iPhone · Hero 3/4 · Rim Light',
    camera: { focal: '85mm equiv.', aperture: 'f/6.3', ratio: '8:1', distance: '~55cm' },
    useCases: ['Premium launch', 'Dark mode showcase', 'Cinematic ad', 'OLED feature'],
    notes:
      'Kill the key light. One narrow strip softbox behind and slightly above the phone creates a rim edge along the titanium frame. The screen becomes the primary light source in-frame — this is the "midnight launch" aesthetic.',
    prompt:
      'Premium product photography, iPhone 15 Pro Black Titanium, hero three-quarter angle, 85mm equivalent lens f/6.3, single rim backlight strip softbox behind device 8:1 ratio, pure black seamless background, titanium edge glowing with thin white rim, screen emitting soft blue light, cinematic luxury mood, long shadows, --ar 4:5 --style raw --q 2',
    figmaNote: 'Frame: 1200×1500px · BG: #000000 · Screen glow: add multiply layer in Figma',
  },
  {
    id: 'phone-topdown',
    device: 'Phone',
    angle: 'Top-down',
    lighting: 'Soft Window',
    surface: 'Light',
    shotName: 'iPhone · Flat Lay · Soft Window',
    camera: { focal: '50mm equiv.', aperture: 'f/11', ratio: '2:1', distance: '~90cm' },
    useCases: ['Editorial', 'Lifestyle blog', 'Product catalog', 'Pinterest'],
    notes:
      'Camera directly overhead at 90°. Use a copy stand or boom arm. Diffused north-facing window light eliminates harsh shadows on the glass surface. Add props at screen periphery for editorial context.',
    prompt:
      'Flat lay product photography, iPhone 15 Pro White Titanium, directly overhead 90° angle, 50mm equivalent lens f/11, soft diffused north window light from left, white linen textured surface, subtle hand-picked props — dried florals and a notebook — product at center, editorial composition, --ar 1:1 --style raw --q 2',
    figmaNote: 'Frame: 1500×1500px · Product centered · Crop to 4:3 for feed, 1:1 for grid',
  },
  {
    id: 'phone-lowangle',
    device: 'Phone',
    angle: 'Low angle',
    lighting: 'Hard Directional',
    surface: 'Dark',
    shotName: 'iPhone · Low Angle · Hard Light',
    camera: { focal: '35mm equiv.', aperture: 'f/8', ratio: '6:1', distance: '~40cm' },
    useCases: ['Power brand', 'Gaming app', 'Performance feature', 'Dramatic hero'],
    notes:
      'Camera at surface level shooting up at 20–30° elevation. A wide 35mm equivalent adds controlled barrel distortion that makes the phone feel monumental. One hard strobe from the right cuts a sharp shadow line across the front face.',
    prompt:
      'Product photography, iPhone 15 Pro Black Titanium, extreme low angle worm\'s eye view 25° elevation from surface level, 35mm equivalent lens f/8, single hard strobe from right 6:1 ratio, dark textured concrete surface, dramatic upward foreshortening, deep shadow on left face, screen facing camera with UI glow, --ar 9:16 --style raw --q 2',
    figmaNote: 'Frame: 1080×1920px · Distortion intentional — do not correct in post',
  },
  {
    id: 'phone-inhand',
    device: 'Phone',
    angle: 'In-hand',
    lighting: 'Soft Window',
    surface: 'Light',
    shotName: 'iPhone · In-hand · Window Light',
    camera: { focal: '85mm equiv.', aperture: 'f/4', ratio: '2:1', distance: '~50cm' },
    useCases: ['Lifestyle hero', 'Onboarding screenshot', 'Social proof', 'App feature'],
    notes:
      "Model's hand enters from bottom-left, thumb visible on screen edge. Shoot at slight elevation above hand level. Soft window light keeps skin tones warm and screen detail legible. Background should be out of focus at f/4.",
    prompt:
      'Lifestyle product photography, iPhone 15 Pro held in hand, female hand entering from bottom left, slight overhead angle 20° elevation, 85mm equivalent lens f/4, soft window light from left 2:1 ratio, blurred warm interior background bokeh, screen showing app UI, natural relaxed grip, authentic candid mood, --ar 4:5 --style raw --q 2',
    figmaNote: 'Frame: 1200×1500px · Hand occupies bottom 35% · Screen UI: 320×693px crop at 3× scale',
  },
  {
    id: 'phone-ambient',
    device: 'Phone',
    angle: 'Eye-level',
    lighting: 'Ambient Dark',
    surface: 'Dark',
    shotName: 'iPhone · Eye-level · Ambient Dark',
    camera: { focal: '85mm equiv.', aperture: 'f/2.8', ratio: '10:1', distance: '~50cm' },
    useCases: ['Dark mode UI', 'Luxury brand', 'Nighttime feature', 'AMOLED showcase'],
    notes:
      'Near-total darkness. The screen is the key light source, casting a soft glow on the front face. Use a very distant, heavily flagged softbox at 1/10 of normal power to give edge separation from background. Long exposure technique can enhance screen luminance.',
    prompt:
      'Atmospheric product photography, iPhone 15 Pro Black Titanium, straight-on eye-level angle, 85mm equivalent lens f/2.8, near total darkness ambient environment, phone screen emitting only light source casting blue glow on front bezel, pure black background, moody cinematic luxury, screen showing dark-mode dashboard, --ar 4:5 --style raw --q 2',
    figmaNote: 'Frame: 1200×1500px · Ensure screen UI has max brightness for photography — reduce in comp',
  },
  {
    id: 'phone-exploded',
    device: 'Phone',
    angle: 'Exploded',
    lighting: 'Studio White',
    surface: 'Light',
    shotName: 'iPhone · Exploded View · Studio White',
    camera: { focal: '90mm equiv.', aperture: 'f/11', ratio: '2:1', distance: '~70cm' },
    useCases: ['Feature breakdown', 'Tech spec page', 'Engineering editorial', 'Component showcase'],
    notes:
      'Physically separate the phone components along the vertical axis — or achieve in post by shooting elements individually against the same background with consistent lighting. Each layer should float with a subtle drop shadow. Axis must be perfectly vertical.',
    prompt:
      'Technical exploded view product photography, iPhone 15 Pro components separated on vertical axis — screen glass, titanium frame, camera module, back glass panel, each floating with 40px gap, 90mm equivalent lens f/11, flat even studio lighting 2:1 ratio, clean white seamless, perfect top alignment, industrial technical editorial mood, --ar 9:16 --style raw --q 2',
    figmaNote: 'Frame: 1080×1920px · Axis: center-aligned · Layer gap: 40px per component at 1× scale',
  },

  // ─── TABLET ───────────────────────────────────────────────────────
  {
    id: 'tablet-eyelevel',
    device: 'Tablet',
    angle: 'Eye-level',
    lighting: 'Soft Window',
    surface: 'Light',
    shotName: 'iPad · Eye-level · Window Light',
    camera: { focal: '85mm equiv.', aperture: 'f/7.1', ratio: '2:1', distance: '~70cm' },
    useCases: ['App Store iPad screenshot', 'Product page', 'Keynote asset'],
    notes:
      'Shoot at exact screen center height so the horizon bisects the middle of the device. The screen appears undistorted and fully readable. Window light from camera-left gives a natural, editorial feel without harsh gradients.',
    prompt:
      'Product photography, iPad Pro 13-inch Silver, straight-on eye-level angle, 85mm equivalent lens f/7.1, soft diffused window light from left 2:1 ratio, light grey seamless background, horizon bisects device center, screen showing dashboard UI in full detail, shallow depth of field on background, --ar 3:4 --style raw --q 2',
    figmaNote: 'Frame: 1200×1600px · Screen content must hit 72dpi minimum at final render size',
  },
  {
    id: 'tablet-iso',
    device: 'Tablet',
    angle: 'Isometric',
    lighting: 'Studio White',
    surface: 'Light',
    shotName: 'iPad · Isometric · Studio White',
    camera: { focal: '70mm equiv.', aperture: 'f/9', ratio: '3:1', distance: '~80cm' },
    useCases: ['SaaS app promo', 'Dashboard showcase', 'Product Hunt asset', 'Feature grid'],
    notes:
      'True isometric at 35.26° elevation, 45° yaw. The iPad\'s large screen real estate makes this the strongest angle for UI legibility — more screen is visible than any other angle. Use a large white V-flat to fill shadows on the right face.',
    prompt:
      'Technical product photography, iPad Pro 13-inch Silver, true isometric angle 35° elevation 45° rotation, 70mm equivalent lens f/9, large softbox key light upper left 3:1 ratio, white V-flat fill right side, pure white seamless background, screen showing data dashboard UI with charts, clean precise shadows, --ar 4:3 --style raw --q 2',
    figmaNote: 'Frame: 1600×1200px · Screen occupies 68% of visible area · No perspective correction needed',
  },
  {
    id: 'tablet-topdown',
    device: 'Tablet',
    angle: 'Top-down',
    lighting: 'Overcast Flat',
    surface: 'Light',
    shotName: 'iPad · Flat Lay · Overcast',
    camera: { focal: '35mm equiv.', aperture: 'f/11', ratio: '1:1', distance: '~110cm' },
    useCases: ['Lifestyle flat lay', 'Education app', 'Creative app promo', 'Desk setup editorial'],
    notes:
      'Overhead boom shot with completely even overcast lighting — no hot spots on the glass. Style with pencil, notebook, or coffee for context. The iPad\'s wide format makes it the dominant element; props should not break the screen edge plane.',
    prompt:
      'Flat lay product photography, iPad Pro 13-inch Silver with Apple Pencil, overhead 90° angle, 35mm equivalent lens f/11, large overhead diffused softbox even flat lighting, light cream desk surface with subtle texture, apple pencil placed diagonally across corner, minimal props — small plant and coffee cup — editorial lifestyle composition, --ar 4:3 --style raw --q 2',
    figmaNote: 'Frame: 1600×1200px · Props must not overlap screen area · Safe margins: 60px',
  },

  // ─── LAPTOP ───────────────────────────────────────────────────────
  {
    id: 'laptop-iso',
    device: 'Laptop',
    angle: 'Isometric',
    lighting: 'Hard Directional',
    surface: 'Dark',
    shotName: 'MacBook · Isometric · Hard Light',
    camera: { focal: '70mm equiv.', aperture: 'f/9', ratio: '5:1', distance: '~80cm' },
    useCases: ['SaaS landing page', 'Tech editorial', 'Dark mode showcase', 'Banner ad'],
    notes:
      'True isometric means camera at 35.26° elevation, 45° yaw from front face. This removes all perspective distortion — ideal for UI showcase. Hard light defines the aluminum edges sharply and creates bold shadow geometry.',
    prompt:
      'Technical product photography, MacBook Pro 14 Space Black, true isometric angle 35° elevation 45° rotation, 70mm equivalent lens f/9, single hard strobe upper right 5:1 ratio, dark slate seamless background, crisp edge definition on aluminum chassis, screen showing clean UI, dramatic shadow left side, --ar 16:9 --style raw --q 2',
    figmaNote: 'Frame: 1920×1080px · Laptop occupies 70% width · UI on screen must be legible at 1× scale',
  },
  {
    id: 'laptop-eyelevel',
    device: 'Laptop',
    angle: 'Eye-level',
    lighting: 'Soft Window',
    surface: 'Light',
    shotName: 'MacBook · Eye-level · Window Light',
    camera: { focal: '85mm equiv.', aperture: 'f/7.1', ratio: '2:1', distance: '~90cm' },
    useCases: ['Remote work lifestyle', 'Productivity app', 'B2B SaaS', 'Press release'],
    notes:
      'Lid open at 100–110°. Camera at screen center height — this ensures the screen appears perfectly undistorted with no keystone. Shoot from a slight angle (10–15° lateral) to show the keyboard depth without losing screen readability.',
    prompt:
      'Lifestyle product photography, MacBook Pro 14 Silver, eye-level angle lid open 105°, 85mm equivalent lens f/7.1, soft window light from left 2:1 ratio, warm natural wood desk surface, screen showing productivity UI, minimal desk items in soft bokeh background, natural work environment, --ar 16:9 --style raw --q 2',
    figmaNote: 'Frame: 1920×1080px · Screen content at 1× pixel density · Keep top 15% clear for overlay text',
  },
  {
    id: 'laptop-topdown',
    device: 'Laptop',
    angle: 'Top-down',
    lighting: 'Studio White',
    surface: 'Dark',
    shotName: 'MacBook · Top-down · Studio White',
    camera: { focal: '50mm equiv.', aperture: 'f/11', ratio: '2:1', distance: '~120cm' },
    useCases: ['Keyboard feature', 'Hardware detail', 'Tech flat lay', 'Design portfolio'],
    notes:
      'Lid fully closed or open to 180° flat. Shooting overhead shows the full trackpad, keyboard layout, and logo. With lid closed, the apple logo and material finish become the subject. Flat even lighting is essential to eliminate glare on the aluminum.',
    prompt:
      'Top-down flat lay product photography, MacBook Pro 14 Space Black lid closed, overhead 90° boom angle, 50mm equivalent lens f/11, large overhead softbox even flat illumination, black slate surface with subtle texture, centered composition, apple logo catching soft specular highlight, clean minimal aesthetic, --ar 4:3 --style raw --q 2',
    figmaNote: 'Frame: 1600×1200px · Logo centered · Trackpad detail visible at 2× zoom',
  },

  // ─── WATCH ────────────────────────────────────────────────────────
  {
    id: 'watch-macro',
    device: 'Watch',
    angle: 'Detail/Macro',
    lighting: 'Rim/Backlight',
    surface: 'Dark',
    shotName: 'Apple Watch · Macro Detail · Rim Light',
    camera: { focal: '100mm macro', aperture: 'f/5.6', ratio: '4:1', distance: '~20cm' },
    useCases: ['Premium feature callout', 'Material quality', 'Luxury editorial', 'Close-up banner'],
    notes:
      'Use a 100mm macro lens at 1:2 reproduction ratio. Rim light from behind defines the case edge and watch crown with a thin light line. This communicates material quality better than any other angle — every scratch and grain of titanium reads.',
    prompt:
      'Macro product photography, Apple Watch Ultra 2 Titanium Natural, extreme detail angle focusing on crown and case edge, 100mm macro lens f/5.6, rim backlight from behind creating titanium edge definition, dark charcoal surface with subtle reflection, shallow focus on crown detail, specular highlights on metal edges, luxury editorial mood, --ar 4:3 --style raw --q 2',
    figmaNote: 'Frame: 1600×1200px · Focus zone: crown and bezel edge · BG: 95% black #0d0d0d',
  },
  {
    id: 'watch-hero',
    device: 'Watch',
    angle: 'Hero 3/4',
    lighting: 'Soft Window',
    surface: 'Light',
    shotName: 'Apple Watch · Hero 3/4 · Window Light',
    camera: { focal: '90mm equiv.', aperture: 'f/8', ratio: '2:1', distance: '~40cm' },
    useCases: ['Product page hero', 'App Store asset', 'Lifestyle editorial', 'Retail display'],
    notes:
      'Stand the watch upright on its band using a small invisible acrylic stand. Rotate 35° from lens axis. The face, digital crown, and side button should all be visible simultaneously. Soft window light from upper left keeps the face legible without glare.',
    prompt:
      'Product photography, Apple Watch Series 9 Starlight Aluminum with white sport band, hero three-quarter angle 35° rotation, 90mm equivalent lens f/8, large softbox window light from upper left 2:1 ratio, off-white seamless background, watch face clearly visible showing time and complications, subtle cast shadow, clean elegant composition, --ar 4:5 --style raw --q 2',
    figmaNote: 'Frame: 1200×1500px · Face occupies top 60% · Crown visible on right edge',
  },

  // ─── DESKTOP ──────────────────────────────────────────────────────
  {
    id: 'desktop-low',
    device: 'Desktop',
    angle: 'Low angle',
    lighting: 'Hard Directional',
    surface: 'Dark',
    shotName: 'Monitor · Low Angle · Hard Light',
    camera: { focal: '35mm equiv.', aperture: 'f/8', ratio: '6:1', distance: '~100cm' },
    useCases: ['Power/authority brand', 'Gaming product', 'Tech hero image', 'Trade show display'],
    notes:
      'Camera set at desk level — approximately 60–80cm off ground — shooting up at 15–25° elevation. This dramatizes the monitor height and creates a commanding presence. Hard side light accentuates the bezel depth and stand geometry.',
    prompt:
      "Product photography, Apple Studio Display 27-inch, low angle worm's eye view 20° elevation, 35mm equivalent lens f/8, single hard strobe right side 6:1 ratio, dark industrial concrete surface, dramatic upward perspective, screen glowing with blue gradient UI, deep shadow under stand, high contrast noir mood, --ar 16:9 --style raw --q 2",
    figmaNote: 'Frame: 1920×1080px · Keep 120px padding bottom for base shadow · Screen glow: add in comp',
  },
  {
    id: 'desktop-iso',
    device: 'Desktop',
    angle: 'Isometric',
    lighting: 'Hard Directional',
    surface: 'Dark',
    shotName: 'Monitor · Isometric · Hard Light',
    camera: { focal: '70mm equiv.', aperture: 'f/9', ratio: '5:1', distance: '~120cm' },
    useCases: ['Workstation setup', 'SaaS hero', 'Tech stack showcase', 'Developer tool'],
    notes:
      'Camera at 35° elevation, 45° yaw. Include the full desk context — keyboard, mouse — to give the setup shot a complete workstation feel. The monitor\'s screen at isometric angle shows more UI real estate than any straight-on shot.',
    prompt:
      'Technical product photography, Apple Studio Display 27-inch with Mac mini, true isometric angle 35° elevation, 70mm equivalent lens f/9, hard strobe from upper right 5:1 ratio, dark minimal desk surface, keyboard and mouse included in composition, screen showing development UI with code, dramatic directional shadows, --ar 16:9 --style raw --q 2',
    figmaNote: 'Frame: 1920×1080px · Include desk at 20% of frame bottom · UI legible at 1× scale',
  },

  // ─── TV ───────────────────────────────────────────────────────────
  {
    id: 'tv-eyelevel',
    device: 'TV',
    angle: 'Eye-level',
    lighting: 'Ambient Dark',
    surface: 'Dark',
    shotName: 'Apple TV · Eye-level · Ambient Dark',
    camera: { focal: '35mm equiv.', aperture: 'f/8', ratio: '8:1', distance: '~200cm' },
    useCases: ['TV app launch', 'Streaming platform', 'Living room UI', 'Entertainment hero'],
    notes:
      'Back the camera up to at least 2m to minimize distortion on the large screen plane. Camera at exact screen center height. The room itself becomes the set — use practicals (floor lamps, ambient light) as motivated sources. Screen content is the hero.',
    prompt:
      'Environmental product photography, Samsung 65-inch QLED TV mounted on living room wall, straight-on eye-level angle, 35mm equivalent lens f/8, ambient room lighting with floor lamp practical at left, dark moody living room environment, screen displaying streaming UI with cinematic content, subtle room reflections on screen edge, --ar 16:9 --style raw --q 2',
    figmaNote: 'Frame: 1920×1080px · Screen UI must be designed at 1920×1080 native · Room in frame: 30% border',
  },

  // ─── MULTI-DEVICE ─────────────────────────────────────────────────
  {
    id: 'multi-flatlay',
    device: 'Multi-device',
    angle: 'Top-down',
    lighting: 'Overcast Flat',
    surface: 'Light',
    shotName: 'Multi-device · Flat Lay · Overcast',
    camera: { focal: '35mm equiv.', aperture: 'f/11', ratio: '1:1', distance: '~130cm' },
    useCases: ['Responsive showcase', 'Brand ecosystem', 'Product family', 'Annual report'],
    notes:
      'Position camera directly overhead via boom. Use an overcast sky or large overhead softbox for completely even, shadow-free illumination — critical when showing multiple devices simultaneously. Compose on a golden ratio grid with the largest device as anchor.',
    prompt:
      'Flat lay product photography, Apple ecosystem iPhone 15 Pro + iPad Pro 13 + Apple Watch Ultra 2, overhead 90° angle, 35mm equivalent lens f/11, large overhead softbox even flat illumination, pure white seamless background, devices arranged on golden ratio grid, all screens showing unified UI system in same color palette, precise geometric spacing, --ar 3:2 --style raw --q 2',
    figmaNote: 'Frame: 2400×1600px · Golden ratio grid: main device at 61.8% mark · Screens at 1× pixel ratio',
  },
  {
    id: 'multi-iso',
    device: 'Multi-device',
    angle: 'Isometric',
    lighting: 'Studio White',
    surface: 'Light',
    shotName: 'Multi-device · Isometric · Studio White',
    camera: { focal: '70mm equiv.', aperture: 'f/10', ratio: '2:1', distance: '~140cm' },
    useCases: ['Responsive design promo', 'Cross-platform app', 'Product ecosystem', 'Marketing hero'],
    notes:
      'Arrange devices on a stepped isometric grid — phone front left, tablet center, laptop rear right — each at the same 35° elevation. This creates a sense of depth and scale hierarchy without shooting perspective. All screens must show the same UI at native scale.',
    prompt:
      'Technical product photography, Apple device ecosystem MacBook Pro 14 + iPad Pro 13 + iPhone 15 Pro arranged in stepped isometric grid, 70mm equivalent lens f/10, large softbox key light upper left 2:1 ratio, white V-flat fill, pure white seamless background, all devices showing unified UI design system, staggered depth composition, professional clean aesthetic, --ar 16:9 --style raw --q 2',
    figmaNote: 'Frame: 1920×1080px · Depth hierarchy: laptop rear, tablet mid, phone front · All screens at 1×',
  },
]
