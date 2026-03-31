import { diagrams } from './diagrams'

export default function ShotCard({ shot, selected, onClick }) {
  return (
    <article
      className={`shot-card${selected ? ' selected' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-pressed={selected}
    >
      <div className="card-diagram">
        {diagrams[shot.diagramKey ?? shot.id] ?? null}
      </div>
      <div className="card-meta">
        <div className="card-title">
          {shot.device} · {shot.angle}
        </div>
        <div className="card-sub">{shot.surface} surface</div>
        <span className="card-lighting-tag">{shot.lighting}</span>
      </div>
    </article>
  )
}
