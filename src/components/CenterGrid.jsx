import ShotCard from './ShotCard'

export default function CenterGrid({ shots, selectedId, onSelect }) {
  return (
    <main className="center-panel">
      <div className="grid-header">
        <span className="grid-count">
          {shots.length} shot{shots.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="card-grid">
        {shots.length === 0 && (
          <p className="empty-state">
            No shots match these filters.
            <br />
            Try adjusting your selection.
          </p>
        )}
        {shots.map((shot) => (
          <ShotCard
            key={shot.id}
            shot={shot}
            selected={selectedId === shot.id}
            onClick={() => onSelect(selectedId === shot.id ? null : shot.id)}
          />
        ))}
      </div>
    </main>
  )
}
