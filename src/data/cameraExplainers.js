/**
 * cameraExplainers.js
 * Plain-English explanations for camera settings, written for designers.
 * Each explainer includes: what it is, what it affects in a mockup context,
 * and valid constrained options.
 */

export const FOCAL_STOPS = [
  { label: '24mm', value: '24mm equiv.' },
  { label: '35mm', value: '35mm equiv.' },
  { label: '50mm', value: '50mm equiv.' },
  { label: '70mm', value: '70mm equiv.' },
  { label: '85mm', value: '85mm equiv.' },
  { label: '90mm', value: '90mm equiv.' },
  { label: '100mm', value: '100mm macro' },
  { label: '135mm', value: '135mm equiv.' },
]

export const APERTURE_STOPS = [
  'f/1.4', 'f/2', 'f/2.8', 'f/4', 'f/5.6', 'f/7.1', 'f/8', 'f/9', 'f/11', 'f/16',
]

export const RATIO_STOPS = [
  '1:1', '2:1', '3:1', '4:1', '5:1', '6:1', '8:1', '10:1',
]

export const DISTANCE_STOPS = [
  '~15cm', '~20cm', '~30cm', '~40cm', '~50cm', '~60cm', '~70cm', '~80cm', '~90cm', '~100cm', '~110cm', '~120cm', '~130cm', '~140cm', '~200cm',
]

export const CAMERA_EXPLAINERS = {
  'Focal length': {
    headline: 'Focal length controls perspective distortion.',
    body: 'A shorter focal length (24–35mm) exaggerates depth and makes edges appear to bulge — great for dramatic low-angle shots. A longer focal length (85–135mm) compresses the scene and makes the device look flatter and more "true to life" — ideal for App Store screens and UI showcases. 85mm is the universal product photography sweet spot.',
    impact: 'Affects: how distorted the device edges look, and how much background is visible.',
    type: 'slider',
    stops: FOCAL_STOPS,
  },
  'Aperture': {
    headline: 'Aperture controls background blur (depth of field).',
    body: 'A wide aperture like f/2.8 creates a blurry background (bokeh) — used for in-hand lifestyle shots where the environment is part of the story. A narrow aperture like f/11 keeps everything sharp — essential for flat lays and multi-device shots where every screen needs to be in focus.',
    impact: 'Affects: how blurry the background is behind the device.',
    type: 'stepper',
    stops: APERTURE_STOPS,
  },
  'Light ratio': {
    headline: 'Lighting ratio is the contrast between light and shadow sides.',
    body: '1:1 is flat, even light with no shadows — used in flat lays and editorial work. 3:1 is the standard product ratio: a clear key side and a visible fill side, which gives the device dimension. 6:1 or higher creates dramatic shadows that cover more than half the device — used for premium, cinematic, or dark-theme shoots.',
    impact: 'Affects: how dramatic the shadows on the device look, and the overall mood.',
    type: 'stepper',
    stops: RATIO_STOPS,
  },
  'Distance': {
    headline: 'Subject distance affects how much of the frame the device fills.',
    body: 'Closer distances (15–30cm) fill the frame with the device — used for detail shots and macro work. Mid distances (50–80cm) give natural framing with some breathing room — the standard for phone and tablet shots. Longer distances (100cm+) are needed for larger devices like monitors and TVs to avoid distortion.',
    impact: 'Affects: how much of the frame the device occupies, and whether you can include context.',
    type: 'stepper',
    stops: DISTANCE_STOPS,
  },
}
