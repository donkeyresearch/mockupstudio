# Mockup Studio

A product photography reference tool for UI/UX designers. Browse angles, select lighting presets, and get camera specs + ready-to-paste AI prompts for every shot type.

## What it does

- **Reference grid** — Visual SVG diagrams showing camera position, sightline, and lighting direction for each shot
- **Spec card** — Focal length, aperture, lighting ratio, distance, and use case tags per shot
- **AI prompt generator** — Midjourney-formatted prompt with `--ar`, `--style`, `--q` flags, one-click copy
- **Figma handoff note** — Frame dimensions and safe zone specs per shot type
- **Filters** — Device, angle, lighting preset, and surface tone

## Stack

- [Vite](https://vitejs.dev/) — build tool
- [React 18](https://react.dev/) — UI
- CSS custom properties — design tokens
- [Geist](https://vercel.com/font) — typography

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
mockup-studio/
├── src/
│   ├── data/
│   │   ├── shots.js        # All shot definitions (angle, lighting, prompts, specs)
│   │   └── filters.js      # Filter option constants
│   ├── components/
│   │   ├── TopBar.jsx
│   │   ├── LeftPanel.jsx   # Filter sidebar
│   │   ├── CenterGrid.jsx  # Shot card grid
│   │   ├── ShotCard.jsx    # Individual card with SVG diagram
│   │   ├── SpecCard.jsx    # Right panel with full shot spec
│   │   └── diagrams/
│   │       └── index.jsx   # SVG line-art diagrams per shot
│   ├── App.jsx             # Root component, filter state
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles and design tokens
├── index.html
├── vite.config.js
└── package.json
```

## Adding shots

Add a new entry to `src/data/shots.js` following the existing schema, then add its SVG diagram to `src/components/diagrams/index.jsx` using the same key as the shot `id`.

## License

MIT
