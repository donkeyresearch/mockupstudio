import { useState, useEffect, useRef, useCallback } from 'react'
import LivePreview from './LivePreview'
import Toast from './Toast'
import { useLocalStorage } from '../hooks/useLocalStorage'
import {
  CAMERA_EXPLAINERS,
  FOCAL_STOPS,
  APERTURE_STOPS,
  RATIO_STOPS,
  DISTANCE_STOPS,
} from '../data/cameraExplainers'

// ─── Editable Prompt ─────────────────────────────────────────────
function EditablePrompt({ defaultPrompt, shotId }) {
  const storageKey = `prompt-${shotId}`
  const [value, setValue] = useLocalStorage(storageKey, defaultPrompt)
  const [isDirty, setIsDirty]   = useState(false)
  const [toast, setToast]       = useState(null)
  const [copied, setCopied]     = useState(false)
  const textareaRef             = useRef(null)

  // Sync when shot changes
  useEffect(() => {
    setValue(defaultPrompt)
    setIsDirty(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shotId])

  // Auto-grow textarea
  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = el.scrollHeight + 'px'
  }, [value])

  const handleChange = (e) => {
    setValue(e.target.value)
    setIsDirty(e.target.value !== defaultPrompt)
  }

  const handleReset = () => {
    const prev = value
    setValue(defaultPrompt)
    setIsDirty(false)
    setToast({
      message: 'Prompt restored to default',
      onUndo: () => {
        setValue(prev)
        setIsDirty(prev !== defaultPrompt)
      },
    })
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="spec-section">
      <div className="spec-section-header">
        <span className="spec-section-label" id="prompt-label">AI Prompt · Midjourney</span>
        {isDirty && (
          <button
            className="reset-field-btn"
            onClick={handleReset}
            type="button"
            aria-label="Reset prompt to default"
          >
            ↺ Reset
          </button>
        )}
      </div>

      <div className={`prompt-editor-wrap${isDirty ? ' dirty' : ''}`}>
        <textarea
          ref={textareaRef}
          className="prompt-textarea"
          value={value}
          onChange={handleChange}
          aria-labelledby="prompt-label"
          aria-label="Editable Midjourney prompt"
          spellCheck={false}
          rows={3}
        />
        {isDirty && (
          <span className="prompt-edited-badge" aria-hidden="true">edited</span>
        )}
      </div>

      <button
        className={`copy-btn${copied ? ' copied' : ''}`}
        onClick={handleCopy}
        type="button"
        aria-live="polite"
        aria-label={copied ? 'Prompt copied to clipboard' : 'Copy prompt to clipboard'}
      >
        {copied ? '✓ Copied to clipboard' : 'Copy prompt'}
      </button>

      {toast && (
        <Toast
          message={toast.message}
          onUndo={toast.onUndo}
          onDismiss={() => setToast(null)}
        />
      )}
    </div>
  )
}

// ─── Camera Field Explainer (disclosure row) ─────────────────────
function CameraExplainer({ fieldKey }) {
  const [open, setOpen] = useState(false)
  const info = CAMERA_EXPLAINERS[fieldKey]
  if (!info) return null
  const id = `explainer-${fieldKey.replace(/\s/g, '-')}`

  return (
    <div className="cam-explainer">
      <button
        className="cam-explainer-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        type="button"
        aria-label={`${open ? 'Hide' : 'Show'} explanation for ${fieldKey}`}
      >
        <span className="cam-explainer-icon" aria-hidden="true">
          {open ? '−' : '?'}
        </span>
        <span className="cam-explainer-impact">{info.impact}</span>
      </button>

      <div
        id={id}
        className={`cam-explainer-panel${open ? ' open' : ''}`}
        role="region"
        aria-label={`${fieldKey} explanation`}
      >
        <p className="cam-explainer-headline">{info.headline}</p>
        <p className="cam-explainer-body">{info.body}</p>
      </div>
    </div>
  )
}

// ─── Stepper control ─────────────────────────────────────────────
function Stepper({ value, stops, onChange, label }) {
  const idx = stops.indexOf(value)
  const canDec = idx > 0
  const canInc = idx < stops.length - 1

  return (
    <div className="cam-stepper" role="group" aria-label={`${label} stepper`}>
      <button
        className="stepper-btn"
        onClick={() => canDec && onChange(stops[idx - 1])}
        disabled={!canDec}
        type="button"
        aria-label={`Decrease ${label}`}
      >−</button>
      <span className="stepper-value" aria-live="polite" aria-label={`${label}: ${value}`}>
        {value}
      </span>
      <button
        className="stepper-btn"
        onClick={() => canInc && onChange(stops[idx + 1])}
        disabled={!canInc}
        type="button"
        aria-label={`Increase ${label}`}
      >+</button>
    </div>
  )
}

// ─── Focal length slider ──────────────────────────────────────────
function FocalSlider({ value, onChange }) {
  const idx = FOCAL_STOPS.findIndex((s) => s.value === value)
  const current = idx >= 0 ? idx : 4 // default 85mm

  return (
    <div className="focal-slider-wrap">
      <input
        type="range"
        className="focal-slider"
        min={0}
        max={FOCAL_STOPS.length - 1}
        step={1}
        value={current}
        onChange={(e) => onChange(FOCAL_STOPS[+e.target.value].value)}
        aria-label={`Focal length: ${FOCAL_STOPS[current].label}`}
        aria-valuemin={0}
        aria-valuemax={FOCAL_STOPS.length - 1}
        aria-valuenow={current}
        aria-valuetext={FOCAL_STOPS[current].label}
      />
      <div className="focal-ticks" aria-hidden="true">
        {FOCAL_STOPS.map((s, i) => (
          <span
            key={s.label}
            className={`focal-tick${i === current ? ' active' : ''}`}
          >
            {s.label}
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Editable Camera Settings ─────────────────────────────────────
function EditableCameraSettings({ defaultCamera, shotId, onCameraChange }) {
  const storageKey = `camera-${shotId}`
  const [cam, setCam] = useLocalStorage(storageKey, defaultCamera)
  const [toast, setToast] = useState(null)

  // Sync when shot changes
  useEffect(() => {
    setCam(defaultCamera)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shotId])

  // Notify parent of changes for LivePreview
  useEffect(() => {
    onCameraChange(cam)
  }, [cam, onCameraChange])

  const isDirty = JSON.stringify(cam) !== JSON.stringify(defaultCamera)

  const updateField = (field, val) => {
    setCam((prev) => ({ ...prev, [field]: val }))
  }

  const handleReset = () => {
    const prev = { ...cam }
    setCam(defaultCamera)
    setToast({
      message: 'Camera settings restored',
      onUndo: () => setCam(prev),
    })
  }

  const fields = [
    { key: 'focal',    label: 'Focal length', type: 'slider',  stops: null },
    { key: 'aperture', label: 'Aperture',     type: 'stepper', stops: APERTURE_STOPS },
    { key: 'ratio',    label: 'Light ratio',  type: 'stepper', stops: RATIO_STOPS },
    { key: 'distance', label: 'Distance',     type: 'stepper', stops: DISTANCE_STOPS },
  ]

  return (
    <div className="spec-section" aria-label="Camera settings">
      <div className="spec-section-header">
        <span className="spec-section-label" aria-hidden="true">Camera Settings</span>
        {isDirty && (
          <button
            className="reset-field-btn"
            onClick={handleReset}
            type="button"
            aria-label="Reset all camera settings to default"
          >
            ↺ Reset
          </button>
        )}
      </div>

      <div className="cam-fields">
        {fields.map(({ key, label, type, stops }) => {
          const isModified = cam[key] !== defaultCamera[key]
          return (
            <div key={key} className={`cam-field${isModified ? ' modified' : ''}`}>
              <div className="cam-field-header">
                <span className="cam-item-label">{label}</span>
                {isModified && (
                  <button
                    className="reset-dot-btn"
                    onClick={() => updateField(key, defaultCamera[key])}
                    type="button"
                    aria-label={`Reset ${label} to default (${defaultCamera[key]})`}
                    title={`Reset to default: ${defaultCamera[key]}`}
                  >
                    ↺
                  </button>
                )}
              </div>

              {type === 'slider' ? (
                <FocalSlider
                  value={cam[key]}
                  onChange={(v) => updateField(key, v)}
                />
              ) : (
                <Stepper
                  value={cam[key]}
                  stops={stops}
                  onChange={(v) => updateField(key, v)}
                  label={label}
                />
              )}

              <CameraExplainer fieldKey={label} />
            </div>
          )
        })}
      </div>

      {toast && (
        <Toast
          message={toast.message}
          onUndo={toast.onUndo}
          onDismiss={() => setToast(null)}
        />
      )}
    </div>
  )
}

// ─── Main SpecContent ─────────────────────────────────────────────
export function SpecContent({ shot }) {
  const [copied, setCopied] = useState(false)
  const [liveCamera, setLiveCamera] = useState(shot.camera)

  // Reset live camera when shot changes
  useEffect(() => {
    setLiveCamera(shot.camera)
  }, [shot.id, shot.camera])

  const handleCameraChange = useCallback((cam) => {
    setLiveCamera(cam)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(shot.figmaNote).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="spec-card">

      {/* Live preview reacts to camera edits */}
      <LivePreview shot={shot} camera={liveCamera} />

      <div className="spec-shot-name">
        <h2>{shot.shotName}</h2>
        <p>{shot.angle} · {shot.lighting} · {shot.surface} surface</p>
      </div>

      {/* Editable camera settings */}
      <EditableCameraSettings
        defaultCamera={shot.camera}
        shotId={shot.id}
        onCameraChange={handleCameraChange}
      />

      {/* Use cases */}
      <div className="spec-section" aria-label="Recommended use cases">
        <div className="spec-section-label" aria-hidden="true">Use Cases</div>
        <ul className="use-case-tags" aria-label="Use cases">
          {shot.useCases.map((tag) => (
            <li key={tag} className="use-case-tag">{tag}</li>
          ))}
        </ul>
      </div>

      {/* Shot direction */}
      <div className="spec-section">
        <div className="spec-section-label" id="shot-direction-label">Shot Direction</div>
        <p className="shot-notes" aria-labelledby="shot-direction-label">{shot.notes}</p>
      </div>

      {/* Editable prompt */}
      <EditablePrompt
        defaultPrompt={shot.prompt}
        shotId={shot.id}
      />

      {/* Figma note */}
      <div className="spec-section">
        <div className="spec-section-label" id="figma-label">Figma / Handoff Note</div>
        <p className="figma-note" aria-labelledby="figma-label">{shot.figmaNote}</p>
        <button
          className={`copy-btn copy-btn--sm${copied ? ' copied' : ''}`}
          onClick={handleCopy}
          style={{ marginTop: '10px' }}
          type="button"
          aria-label="Copy Figma note"
        >
          {copied ? '✓ Copied' : 'Copy note'}
        </button>
      </div>

    </div>
  )
}

// ─── Wrapper ──────────────────────────────────────────────────────
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
