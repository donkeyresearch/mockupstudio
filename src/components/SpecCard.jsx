import { useState } from 'react'
import LivePreview from './LivePreview'

function CamStat({ label, value }) {
  return (
    <div className="cam-item">
      <div className="cam-item-label" id={`cam-${label.replace(/\s/g, '-')}`}>{label}</div>
      <div
        className="cam-item-value"
        aria-labelledby={`cam-${label.replace(/\s/g, '-')}`}
      >
        {value}
      </div>
    </div>
  )
}

export function SpecContent({ shot }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(shot.prompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="spec-card">
      <LivePreview shot={shot} />

      <div className="spec-shot-name">
        <h2>{shot.shotName}</h2>
        <p>{shot.angle} · {shot.lighting} · {shot.surface} surface</p>
      </div>

      <div className="spec-section" aria-label="Camera settings">
        <div className="spec-section-label" aria-hidden="true">Camera Settings</div>
        <div className="camera-settings">
          <CamStat label="Focal length" value={shot.camera.focal} />
          <CamStat label="Aperture"     value={shot.camera.aperture} />
          <CamStat label="Light ratio"  value={shot.camera.ratio} />
          <CamStat label="Distance"     value={shot.camera.distance} />
        </div>
      </div>

      <div className="spec-section" aria-label="Recommended use cases">
        <div className="spec-section-label" aria-hidden="true">Use Cases</div>
        <ul className="use-case-tags" aria-label="Use cases">
          {shot.useCases.map((tag) => (
            <li key={tag} className="use-case-tag">{tag}</li>
          ))}
        </ul>
      </div>

      <div className="spec-section">
        <div className="spec-section-label" id="shot-direction-label">Shot Direction</div>
        <p className="shot-notes" aria-labelledby="shot-direction-label">{shot.notes}</p>
      </div>

      <div className="spec-section">
        <div className="spec-section-label" id="prompt-label">AI Prompt · Midjourney</div>
        <div
          className="prompt-block"
          aria-labelledby="prompt-label"
          role="textbox"
          aria-readonly="true"
          aria-multiline="true"
        >
          {shot.prompt}
        </div>
        <button
          className={`copy-btn${copied ? ' copied' : ''}`}
          onClick={handleCopy}
          type="button"
          aria-live="polite"
          aria-label={copied ? 'Prompt copied to clipboard' : 'Copy Midjourney prompt to clipboard'}
        >
          {copied ? '✓ Copied to clipboard' : 'Copy prompt'}
        </button>
      </div>

      <div className="spec-section">
        <div className="spec-section-label" id="figma-label">Figma / Handoff Note</div>
        <p className="figma-note" aria-labelledby="figma-label">{shot.figmaNote}</p>
      </div>
    </div>
  )
}

export default function SpecCard({ shot }) {
  if (!shot) {
    return (
      <aside className="right-panel" aria-label="Shot specifications">
        <div className="spec-empty" role="status">
          <div className="spec-empty-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="18" height="18" rx="4" stroke="#9ca3af" strokeWidth="1.5" />
              <circle cx="10" cy="10" r="3.5" stroke="#9ca3af" strokeWidth="1.5" />
            </svg>
          </div>
          <p>Pick a shot to see camera specs and your AI prompt.</p>
        </div>
      </aside>
    )
  }

  return (
    <aside className="right-panel" aria-label="Shot specifications">
      <SpecContent shot={shot} />
    </aside>
  )
}
