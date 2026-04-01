/**
 * Drawer.jsx
 * Accessible bottom-sheet drawer for mobile filters and spec panel.
 * Closes on overlay click, Escape key, or close button.
 */
import { useEffect, useRef } from 'react'

export default function Drawer({ open, onClose, title, children, bodyClass = '' }) {
  const closeRef = useRef(null)
  const drawerRef = useRef(null)

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  // Focus close button when opened
  useEffect(() => {
    if (open) setTimeout(() => closeRef.current?.focus(), 50)
  }, [open])

  // Trap focus inside drawer
  useEffect(() => {
    if (!open || !drawerRef.current) return
    const focusable = drawerRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last  = focusable[focusable.length - 1]
    const trap  = (e) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus() } }
      else { if (document.activeElement === last)  { e.preventDefault(); first.focus() } }
    }
    document.addEventListener('keydown', trap)
    return () => document.removeEventListener('keydown', trap)
  }, [open])

  return (
    <>
      {/* Overlay */}
      <div
        className={`drawer-overlay${open ? ' open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`drawer${open ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        aria-hidden={!open}
      >
        <div className="drawer-handle" aria-hidden="true">
          <div className="drawer-handle-bar" />
        </div>

        <div className="drawer-header">
          <span className="drawer-title">{title}</span>
          <button
            ref={closeRef}
            className="drawer-close"
            onClick={onClose}
            type="button"
            aria-label={`Close ${title}`}
          >
            ×
          </button>
        </div>

        <div className={`drawer-body${bodyClass ? ` ${bodyClass}` : ''}`}>
          {children}
        </div>
      </div>
    </>
  )
}
