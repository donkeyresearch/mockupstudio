import { SHOTS } from '../data/shots'

export default function TopBar() {
  return (
    <header className="topbar" role="banner">
      <span className="topbar-dot" aria-hidden="true" />
      <span className="topbar-logo">Mockup Studio</span>
      <span className="topbar-sub" aria-hidden="true">Photography reference &amp; prompt generator</span>
      <span className="topbar-spacer" />
      <span className="topbar-badge" aria-label={`${SHOTS.length} shots available`}>
        {SHOTS.length} shots
      </span>
    </header>
  )
}
