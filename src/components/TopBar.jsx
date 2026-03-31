import { SHOTS } from '../data/shots'

export default function TopBar() {
  return (
    <header className="topbar">
      <span className="topbar-dot" />
      <span className="topbar-logo">Mockup Studio</span>
      <span className="topbar-sub">Photography reference &amp; prompt generator</span>
      <span className="topbar-spacer" />
      <span className="topbar-badge">v1.0 · {SHOTS.length} shots</span>
    </header>
  )
}
