import { DEVICES, ANGLES, LIGHTINGS, SURFACES } from '../data/filters'

function FilterGroup({ label, options, value, onChange, id }) {
  return (
    <div className="filter-group" role="group" aria-labelledby={id}>
      <div className="filter-label" id={id}>{label}</div>
      <div className="pill-group">
        {options.map((opt) => (
          <button
            key={opt}
            className={`pill${value === opt ? ' active' : ''}`}
            onClick={() => onChange(opt)}
            aria-pressed={value === opt}
            type="button"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

export function FilterContent({ filters, onChange, onReset }) {
  const { device, angle, lighting, surface } = filters
  const isFiltered = device !== 'All' || angle !== 'All' || lighting !== 'All' || surface !== 'All'

  return (
    <>
      <FilterGroup
        id="filter-device"
        label="Device"
        options={DEVICES}
        value={device}
        onChange={(v) => onChange('device', v)}
      />
      <FilterGroup
        id="filter-angle"
        label="Angle"
        options={ANGLES}
        value={angle}
        onChange={(v) => onChange('angle', v)}
      />
      <FilterGroup
        id="filter-lighting"
        label="Lighting"
        options={LIGHTINGS}
        value={lighting}
        onChange={(v) => onChange('lighting', v)}
      />

      <div className="filter-group" role="group" aria-labelledby="filter-surface">
        <div className="filter-label" id="filter-surface">Product Surface</div>
        <div className="surface-toggle" role="group" aria-label="Surface tone">
          {SURFACES.map((s) => (
            <button
              key={s}
              className={`surface-btn${surface === s ? ' active' : ''}`}
              onClick={() => onChange('surface', s)}
              aria-pressed={surface === s}
              type="button"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {isFiltered && (
        <button className="reset-btn" onClick={onReset} type="button" aria-label="Reset all filters">
          ↺ Reset filters
        </button>
      )}
    </>
  )
}

export default function LeftPanel({ filters, onChange, onReset }) {
  return (
    <aside className="left-panel" aria-label="Filters">
      <FilterContent filters={filters} onChange={onChange} onReset={onReset} />
    </aside>
  )
}
