/**
 * MobileNav.jsx
 * Bottom navigation bar for mobile — Shots / Filters / Spec
 */

const IconShots = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <rect x="2" y="4" width="7" height="9" rx="1.5" />
    <rect x="11" y="4" width="7" height="9" rx="1.5" />
    <line x1="2" y1="16" x2="18" y2="16" strokeLinecap="round" />
  </svg>
)

const IconFilters = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <line x1="3" y1="5" x2="17" y2="5" strokeLinecap="round" />
    <line x1="5" y1="10" x2="15" y2="10" strokeLinecap="round" />
    <line x1="7" y1="15" x2="13" y2="15" strokeLinecap="round" />
  </svg>
)

const IconSpec = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <rect x="3" y="2" width="14" height="16" rx="2" />
    <line x1="6" y1="7" x2="14" y2="7" strokeLinecap="round" />
    <line x1="6" y1="10.5" x2="14" y2="10.5" strokeLinecap="round" />
    <line x1="6" y1="14" x2="10" y2="14" strokeLinecap="round" />
  </svg>
)

export default function MobileNav({ activeTab, onTab, hasSpec, activeFilterCount }) {
  return (
    <nav className="mobile-nav" aria-label="Main navigation">
      <div className="mobile-nav-inner">
        <button
          className={`mobile-nav-btn${activeTab === 'shots' ? ' active' : ''}`}
          onClick={() => onTab('shots')}
          aria-current={activeTab === 'shots' ? 'page' : undefined}
          type="button"
        >
          <IconShots />
          Shots
        </button>

        <button
          className={`mobile-nav-btn${activeTab === 'filters' ? ' active' : ''}`}
          onClick={() => onTab('filters')}
          aria-current={activeTab === 'filters' ? 'page' : undefined}
          type="button"
          aria-label={`Filters${activeFilterCount > 0 ? `, ${activeFilterCount} active` : ''}`}
        >
          <IconFilters />
          {activeFilterCount > 0 && (
            <span className="mobile-nav-badge" aria-hidden="true">{activeFilterCount}</span>
          )}
          Filters
        </button>

        <button
          className={`mobile-nav-btn${activeTab === 'spec' ? ' active' : ''}`}
          onClick={() => onTab('spec')}
          aria-current={activeTab === 'spec' ? 'page' : undefined}
          type="button"
          aria-label={`Spec${!hasSpec ? ', no shot selected' : ''}`}
          disabled={!hasSpec}
          style={{ opacity: hasSpec ? 1 : 0.4 }}
        >
          <IconSpec />
          Spec
        </button>
      </div>
    </nav>
  )
}
