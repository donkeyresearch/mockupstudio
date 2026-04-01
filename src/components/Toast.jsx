/**
 * Toast.jsx
 * Lightweight undo-toast notification.
 * Auto-dismisses after `duration` ms. Optional undo action.
 */
import { useEffect, useRef } from 'react'

export default function Toast({ message, onUndo, onDismiss, duration = 3000 }) {
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setTimeout(onDismiss, duration)
    return () => clearTimeout(timerRef.current)
  }, [duration, onDismiss])

  const handleUndo = () => {
    clearTimeout(timerRef.current)
    onUndo()
    onDismiss()
  }

  return (
    <div className="toast" role="status" aria-live="polite" aria-atomic="true">
      <span className="toast-msg">{message}</span>
      {onUndo && (
        <button
          className="toast-undo"
          onClick={handleUndo}
          type="button"
          aria-label="Undo last action"
        >
          Undo
        </button>
      )}
    </div>
  )
}
