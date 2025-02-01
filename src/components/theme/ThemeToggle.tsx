// src/components/theme/ThemeToggle.tsx
'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <button className="btn btn-ghost btn-circle w-10 h-10" /> // Placeholder with same dimensions
  }

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="btn btn-ghost btn-circle"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  )
}