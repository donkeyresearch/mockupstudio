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
  {
    id: 'phone-hero',
    device: 'Phone',
    angle: 'Hero 3/4',
    lighting: 'Studio White',
    surface: 'Dark',
    shotName: 'iPhone · Hero 3/4 · Studio White',
    camera: {
      focal: '85mm equiv.',
      aperture: 'f/8',
      ratio: '3:1',
      distance: '~60cm',
    },
    useCases: ['App Store', 'Landing page hero', 'Social ad', 'Press kit'],
    notes:
      'Position the phone at 35–40° rotation from lens axis with a 15° elevation. This reveals the screen, left edge, and top surface simultaneously — the classic commerce angle that reads clearly at any size.',
    prompt:
      'Product photography, iPhone 15 Pro Titanium Natural, hero three-quarter angle 35° rotation 15° elevation, 85mm equivalent lens f/8, soft studio strobe key light 3:1 ratio from upper left, large white seamless background, subtle shadow falloff, sharp focus on screen face, product centered with negative space left, --ar 4:5 --style raw --q 2',
    figmaNote:
      'Frame: 1200×1500px · Safe zone: 80px all sides · Screen area: 52% of frame height',
  },
  {
    id: 'phone-topdown',
    device: 'Phone',
    angle: 'Top-down',
    lighting: 'Soft Window',
    surface: 'Light',
    shotName: 'iPhone · Flat Lay · Soft Window',
    camera: {
      focal: '50mm equiv.',
      aperture: 'f/11',
      ratio: '2:1',
      distance: '~90cm',
    },
    useCases: ['Editorial', 'Lifestyle blog', 'Product catalog', 'Pinterest'],
    notes:
      'Camera directly overhead at 90°. Use a copy stand or boom arm. Diffused north-facing window light eliminates harsh shadows on the glass surface. Add props at screen periphery for editorial context.',
    prompt:
      'Flat lay product photography, iPhone 15 Pro White Titanium, directly overhead 90° angle, 50mm equivalent lens f/11, soft diffused north window light from left, white linen textured surface, subtle hand-picked props — dried florals and a notebook — product at center, editorial composition, --ar 1:1 --style raw --q 2',
    figmaNote:
      'Frame: 1500×1500px · Product centered · Crop to 4:3 for feed, 1:1 for grid',
  },
  {
    id: 'laptop-iso',
    device: 'Laptop',
    angle: 'Isometric',
    lighting: 'Hard Directional',
    surface: 'Dark',
    shotName: 'MacBook · Isometric · Hard Light',
    camera: {
      focal: '70mm equiv.',
      aperture: 'f/9',
      ratio: '5:1',
      distance: '~80cm',
    },
    useCases: ['SaaS landing page', 'Tech editorial', 'Dark mode showcase', 'Banner ad'],
    notes:
      'True isometric means camera at 35.26° elevation, 45° yaw from front face. This removes all perspective distortion — ideal for UI showcase. Hard light defines the aluminum edges sharply and creates bold shadow geometry.',
    prompt:
      'Technical product photography, MacBook Pro 14 Space Black, true isometric angle 35° elevation 45° rotation, 70mm equivalent lens f/9, single hard strobe upper right 5:1 ratio, dark slate seamless background, crisp edge definition on aluminum chassis, screen showing clean UI, dramatic shadow left side, --ar 16:9 --style raw --q 2',
    figmaNote:
      'Frame: 1920×1080px · Laptop occupies 70% width · UI on screen must be legible at 1× scale',
  },
  {
    id: 'tablet-eyelevel',
    device: 'Tablet',
    angle: 'Eye-level',
    lighting: 'Soft Window',
    surface: 'Light',
    shotName: 'iPad · Eye-level · Window Light',
    camera: {
      focal: '85mm equiv.',
      aperture: 'f/7.1',
      ratio: '2:1',
      distance: '~70cm',
    },
    useCases: ['App Store iPad screenshot', 'Product page', 'Keynote asset'],
    notes:
      'Shoot at exact screen center height so the horizon bisects the middle of the device. The screen appears undistorted and fully readable. Window light from camera-left gives a natural, editorial feel without harsh gradients.',
    prompt:
      'Product photography, iPad Pro 13-inch Silver, straight-on eye-level angle, 85mm equivalent lens f/7.1, soft diffused window light from left 2:1 ratio, light grey seamless background, horizon bisects device center, screen showing dashboard UI in full detail, shallow depth of field on background, --ar 3:4 --style raw --q 2',
    figmaNote:
      'Frame: 1200×1600px · Screen content must hit 72dpi minimum at final render size',
  },
  {
    id: 'watch-macro',
    device: 'Watch',
    angle: 'Detail/Macro',
    lighting: 'Rim/Backlight',
    surface: 'Dark',
    shotName: 'Apple Watch · Macro Detail · Rim Light',
    camera: {
      focal: '100mm macro',
      aperture: 'f/5.6',
      ratio: '4:1',
      distance: '~20cm',
    },
    useCases: ['Premium feature callout', 'Material quality', 'Luxury editorial', 'Close-up banner'],
    notes:
      'Use a 100mm macro lens at 1:2 reproduction ratio. Rim light from behind defines the case edge and watch crown with a thin light line. This communicates material quality better than any other angle — every scratch and grain of titanium reads.',
    prompt:
      'Macro product photography, Apple Watch Ultra 2 Titanium Natural, extreme detail angle focusing on crown and case edge, 100mm macro lens f/5.6, rim backlight from behind creating titanium edge definition, dark charcoal surface with subtle reflection, shallow focus on crown detail, specular highlights on metal edges, luxury editorial mood, --ar 4:3 --style raw --q 2',
    figmaNote:
      'Frame: 1600×1200px · Focus zone: crown and bezel edge · BG: 95% black #0d0d0d',
  },
  {
    id: 'desktop-low',
    device: 'Desktop',
    angle: 'Low angle',
    lighting: 'Hard Directional',
    surface: 'Dark',
    shotName: 'Monitor · Low Angle · Hard Light',
    camera: {
      focal: '35mm equiv.',
      aperture: 'f/8',
      ratio: '6:1',
      distance: '~100cm',
    },
    useCases: ['Power/authority brand', 'Gaming product', 'Tech hero image', 'Trade show display'],
    notes:
      'Camera set at desk level — approximately 60–80cm off ground — shooting up at 15–25° elevation. This dramatizes the monitor height and creates a commanding presence. Hard side light accentuates bezel depth and stand geometry.',
    prompt:
      "Product photography, Apple Studio Display 27-inch, low angle worm's eye view 20° elevation, 35mm equivalent lens f/8, single hard strobe right side 6:1 ratio, dark industrial concrete surface, dramatic upward perspective, screen glowing with blue gradient UI, deep shadow under stand, high contrast noir mood, --ar 16:9 --style raw --q 2",
    figmaNote:
      'Frame: 1920×1080px · Keep 120px padding bottom for base shadow · Screen glow: add in comp',
  },
  {
    id: 'phone-inhand',
    device: 'Phone',
    angle: 'In-hand',
    lighting: 'Soft Window',
    surface: 'Light',
    shotName: 'iPhone · In-hand · Window Light',
    camera: {
      focal: '85mm equiv.',
      aperture: 'f/4',
      ratio: '2:1',
      distance: '~50cm',
    },
    useCases: ['Lifestyle hero', 'Onboarding screenshot', 'Social proof', 'App feature'],
    notes:
      "Model's hand enters from bottom-left, thumb visible on screen edge. Shoot at slight elevation above hand level. Soft window light keeps skin tones warm and screen detail legible. Background should be out of focus at f/4.",
    prompt:
      'Lifestyle product photography, iPhone 15 Pro held in hand, female hand entering from bottom left, slight overhead angle 20° elevation, 85mm equivalent lens f/4, soft window light from left 2:1 ratio, blurred warm interior background bokeh, screen showing app UI, natural relaxed grip, authentic candid mood, --ar 4:5 --style raw --q 2',
    figmaNote:
      'Frame: 1200×1500px · Hand occupies bottom 35% · Screen UI: 320×693px crop at 3× scale',
  },
  {
    id: 'multi-flatlay',
    device: 'Multi-device',
    angle: 'Top-down',
    lighting: 'Overcast Flat',
    surface: 'Light',
    shotName: 'Multi-device · Flat Lay · Overcast',
    camera: {
      focal: '35mm equiv.',
      aperture: 'f/11',
      ratio: '1:1',
      distance: '~130cm',
    },
    useCases: ['Responsive showcase', 'Brand ecosystem', 'Product family', 'Annual report'],
    notes:
      'Position camera directly overhead via boom. Use an overcast sky or large overhead softbox for completely even, shadow-free illumination — critical when showing multiple devices simultaneously. Compose on a golden ratio grid with the largest device as anchor.',
    prompt:
      'Flat lay product photography, Apple ecosystem iPhone 15 Pro + iPad Pro 13 + Apple Watch Ultra 2, overhead 90° angle, 35mm equivalent lens f/11, large overhead softbox even flat illumination, pure white seamless background, devices arranged on golden ratio grid, all screens showing unified UI system in same color palette, precise geometric spacing, --ar 3:2 --style raw --q 2',
    figmaNote:
      'Frame: 2400×1600px · Golden ratio grid: main device at 61.8% mark · Screens at 1× pixel ratio',
  },
]
