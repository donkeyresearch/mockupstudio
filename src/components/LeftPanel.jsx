import { DEVICES, ANGLES, LIGHTINGS, SURFACES } from '../data/filters'

function FilterGroup({ label, options, value, onChange }) {
  return (
    <div className="filter-group">
      <div className="filter-label">{label}</div>
      <div className="pill-group">
        {options.map((opt) => (
          <button
            key={opt}
            className={`pill${value === opt ? ' active' : ''}`}
            onClick={() => onChange(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function LeftPanel({ filters, onChange, onReset }) {
  const { device, angle, lighting, surface } = filters

  return (
    <aside className="left-panel">
      <FilterGroup
        label="Device"
        options={DEVICES}
        value={device}
        onChange={(v) => onChange('device', v)}
      />
      <FilterGroup
        label="Angle"
        options={ANGLES}
        value={angle}
        onChange={(v) => onChange('angle', v)}
      />
      <FilterGroup
        label="Lighting"
        options={LIGHTINGS}
        value={lighting}
        onChange={(v) => onChange('lighting', v)}
      />

      <div className="filter-group">
        <div className="filter-label">Product Surface</div>
        <div className="surface-toggle">
          {SURFACES.map((s) => (
            <button
              key={s}
              className={`surface-btn${surface === s ? ' active' : ''}`}
              onClick={() => onChange('surface', s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <button className="reset-btn" onClick={onReset}>
        ↺ Reset filters
      </button>
    </aside>
  )
}
