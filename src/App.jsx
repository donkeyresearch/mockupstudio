import { useState, useMemo } from 'react'
import { SHOTS } from './data/shots'
import TopBar from './components/TopBar'
import LeftPanel from './components/LeftPanel'
import CenterGrid from './components/CenterGrid'
import SpecCard from './components/SpecCard'

const DEFAULT_FILTERS = { device: 'All', angle: 'All', lighting: 'All', surface: 'All' }

export default function App() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS)
  const [selectedId, setSelectedId] = useState(null)

  const filtered = useMemo(
    () =>
      SHOTS.filter((s) => {
        if (filters.device   !== 'All' && s.device   !== filters.device)   return false
        if (filters.angle    !== 'All' && s.angle    !== filters.angle)     return false
        if (filters.lighting !== 'All' && s.lighting !== filters.lighting)  return false
        if (filters.surface  !== 'All' && s.surface  !== filters.surface)   return false
        return true
      }),
    [filters]
  )

  const selectedShot = selectedId ? SHOTS.find((s) => s.id === selectedId) ?? null : null

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
    // Clear selection if it no longer matches updated filters
    setSelectedId(null)
  }

  const handleReset = () => {
    setFilters(DEFAULT_FILTERS)
    setSelectedId(null)
  }

  return (
    <div className="app">
      <TopBar />
      <div className="layout">
        <LeftPanel filters={filters} onChange={handleFilterChange} onReset={handleReset} />
        <CenterGrid shots={filtered} selectedId={selectedId} onSelect={setSelectedId} />
        <SpecCard shot={selectedShot} />
      </div>
    </div>
  )
}
