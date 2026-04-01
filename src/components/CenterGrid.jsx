import ShotCard from './ShotCard'

export default function CenterGrid({ shots, selectedId, onSelect }) {
  return (
    <main className="center-panel" id="main-content" aria-label="Shot reference grid">
      <div className="grid-header">
        <h1 className="grid-title">Shots</h1>
        <span className="grid-count" aria-live="polite" aria-atomic="true">
          {shots.length} {shots.length !== 1 ? 'results' : 'result'}
        </span>
      </div>

      <div
        className="card-grid"
        role="list"
        aria-label="Photography shot cards"
      >
        {shots.length === 0 && (
          <p className="empty-state" role="status">
            No shots match these filters.
            <br />
            Try adjusting your selection.
          </p>
        )}
        {shots.map((shot) => (
          <div role="listitem" key={shot.id}>
            <ShotCard
              shot={shot}
              selected={selectedId === shot.id}
              onClick={() => onSelect(selectedId === shot.id ? null : shot.id)}
            />
          </div>
        ))}
      </div>
    </main>
  )
}
