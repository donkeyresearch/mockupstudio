import { diagrams } from './diagrams'

export default function ShotCard({ shot, selected, onClick }) {
  const diagram = diagrams[shot.id] ?? diagrams[shot.diagramKey] ?? null

  return (
    <article
      className={`shot-card${selected ? ' selected' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      aria-pressed={selected}
      aria-label={`${shot.device}, ${shot.angle}, ${shot.lighting}${selected ? ', selected' : ''}`}
    >
      <div className="card-diagram" aria-hidden="true">
        {diagram}
      </div>
      <div className="card-meta">
        <div className="card-title">{shot.device} · {shot.angle}</div>
        <div className="card-sub">{shot.surface} surface</div>
        <span className="card-lighting-tag">{shot.lighting}</span>
      </div>
    </article>
  )
}
