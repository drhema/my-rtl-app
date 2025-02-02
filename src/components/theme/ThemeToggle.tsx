// src/components/theme/ThemeToggle.tsx
'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import icons
const Sun = dynamic(() => import('lucide-react').then(mod => mod.Sun), {
  ssr: false,
  loading: () => <div className="w-5 h-5" />
})

const Moon = dynamic(() => import('lucide-react').then(mod => mod.Moon), {
  ssr: false,
  loading: () => <div className="w-5 h-5" />
})

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <button className="btn btn-ghost btn-circle w-10 h-10" />
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