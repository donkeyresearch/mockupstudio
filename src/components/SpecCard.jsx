import { useState } from 'react'
import LivePreview from './LivePreview'

function CamStat({ label, value }) {
  return (
    <div className="cam-item">
      <div className="cam-item-label">{label}</div>
      <div className="cam-item-value">{value}</div>
    </div>
  )
}

export default function SpecCard({ shot }) {
  const [copied, setCopied] = useState(false)

  if (!shot) {
    return (
      <aside className="right-panel">
        <div className="spec-empty">
          <div className="spec-empty-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="1" y="1" width="18" height="18" rx="4" stroke="#b0b5cc" strokeWidth="1.5" />
              <circle cx="10" cy="10" r="3.5" stroke="#b0b5cc" strokeWidth="1.5" />
            </svg>
          </div>
          <p>Pick a shot to see camera specs and your AI prompt.</p>
        </div>
      </aside>
    )
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shot.prompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <aside className="right-panel">
      <div className="spec-card">

        {/* Live Preview — top of spec card */}
        <LivePreview shot={shot} />

        <div className="spec-shot-name">
          <h2>{shot.shotName}</h2>
          <p>{shot.angle} · {shot.lighting} · {shot.surface} surface</p>
        </div>

        <div className="spec-section">
          <div className="spec-section-label">Camera Settings</div>
          <div className="camera-settings">
            <CamStat label="Focal length" value={shot.camera.focal} />
            <CamStat label="Aperture"     value={shot.camera.aperture} />
            <CamStat label="Light ratio"  value={shot.camera.ratio} />
            <CamStat label="Distance"     value={shot.camera.distance} />
          </div>
        </div>

        <div className="spec-section">
          <div className="spec-section-label">Use Cases</div>
          <div className="use-case-tags">
            {shot.useCases.map((tag) => (
              <span key={tag} className="use-case-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="spec-section">
          <div className="spec-section-label">Shot Direction</div>
          <p className="shot-notes">{shot.notes}</p>
        </div>

        <div className="spec-section">
          <div className="spec-section-label">AI Prompt · Midjourney</div>
          <div className="prompt-block">{shot.prompt}</div>
          <button
            className={`copy-btn${copied ? ' copied' : ''}`}
            onClick={handleCopy}
          >
            {copied ? '✓ Copied to clipboard' : 'Copy prompt'}
          </button>
        </div>

        <div className="spec-section">
          <div className="spec-section-label">Figma / Handoff Note</div>
          <p className="figma-note">{shot.figmaNote}</p>
        </div>

      </div>
    </aside>
  )
}
