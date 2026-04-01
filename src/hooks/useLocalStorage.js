/**
 * useLocalStorage.js
 * Syncs state to localStorage. Falls back gracefully if storage is unavailable.
 */
import { useState, useEffect } from 'react'

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored !== null ? JSON.parse(stored) : defaultValue
    } catch {
      return defaultValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Storage unavailable — fail silently
    }
  }, [key, value])

  return [value, setValue]
}
