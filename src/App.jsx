import { useState, useMemo } from 'react'
import { SHOTS } from './data/shots'
import TopBar from './components/TopBar'
import LeftPanel from './components/LeftPanel'
import CenterGrid from './components/CenterGrid'
import SpecCard from './components/SpecCard'
import MobileNav from './components/MobileNav'
import Drawer from './components/Drawer'
import { FilterContent } from './components/LeftPanel'
import { SpecContent } from './components/SpecCard'

const DEFAULT_FILTERS = { device: 'All', angle: 'All', lighting: 'All', surface: 'All' }

export default function App() {
  const [filters, setFilters]       = useState(DEFAULT_FILTERS)
  const [selectedId, setSelectedId] = useState(null)
  const [mobileTab, setMobileTab]   = useState('shots')
  const [filterOpen, setFilterOpen] = useState(false)
  const [specOpen, setSpecOpen]     = useState(false)

  const filtered = useMemo(
    () => SHOTS.filter((s) => {
      if (filters.device   !== 'All' && s.device   !== filters.device)   return false
      if (filters.angle    !== 'All' && s.angle    !== filters.angle)     return false
      if (filters.lighting !== 'All' && s.lighting !== filters.lighting)  return false
      if (filters.surface  !== 'All' && s.surface  !== filters.surface)   return false
      return true
    }),
    [filters]
  )

  const selectedShot = selectedId ? SHOTS.find((s) => s.id === selectedId) ?? null : null

  const activeFilterCount = Object.values(filters).filter((v) => v !== 'All').length

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
    setSelectedId(null)
  }

  const handleReset = () => {
    setFilters(DEFAULT_FILTERS)
    setSelectedId(null)
  }

  // On mobile, selecting a card opens the spec drawer
  const handleSelect = (id) => {
    const isMobile = window.innerWidth <= 900
    if (isMobile) {
      if (id) {
        setSelectedId(id)
        setSpecOpen(true)
      } else {
        setSelectedId(null)
        setSpecOpen(false)
      }
    } else {
      setSelectedId(selectedId === id ? null : id)
    }
  }

  const handleMobileTab = (tab) => {
    setMobileTab(tab)
    if (tab === 'filters') setFilterOpen(true)
    if (tab === 'spec' && selectedShot) setSpecOpen(true)
  }

  return (
    <>
      {/* Skip to content — accessibility */}
      <a className="skip-link" href="#main-content">Skip to content</a>

      <div className="app">
        <TopBar />

        <div className="layout">
          {/* Desktop left panel */}
          <LeftPanel filters={filters} onChange={handleFilterChange} onReset={handleReset} />

          {/* Shot grid — always visible */}
          <CenterGrid
            shots={filtered}
            selectedId={selectedId}
            onSelect={handleSelect}
          />

          {/* Desktop right panel */}
          <SpecCard shot={selectedShot} />
        </div>

        {/* Mobile bottom nav */}
        <MobileNav
          activeTab={mobileTab}
          onTab={handleMobileTab}
          hasSpec={!!selectedShot}
          activeFilterCount={activeFilterCount}
        />
      </div>

      {/* Mobile — Filter drawer */}
      <Drawer
        open={filterOpen}
        onClose={() => { setFilterOpen(false); setMobileTab('shots') }}
        title="Filters"
      >
        <FilterContent
          filters={filters}
          onChange={handleFilterChange}
          onReset={handleReset}
        />
      </Drawer>

      {/* Mobile — Spec drawer */}
      <Drawer
        open={specOpen && !!selectedShot}
        onClose={() => { setSpecOpen(false); setMobileTab('shots') }}
        title={selectedShot?.shotName ?? 'Shot Spec'}
        bodyClass="spec-body"
      >
        {selectedShot && <SpecContent shot={selectedShot} />}
      </Drawer>
    </>
  )
}
