// src/components/theme/ThemeProvider.tsx
'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

type Theme = 'light' | 'dark' | 'system'
type Attribute = 'class' | 'data-theme' | 'data-mode'

interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: Attribute
  defaultTheme?: Theme
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
  storageKey?: string
  themes?: string[]
}

export function ThemeProvider({
  children,
  attribute = 'data-theme',
  defaultTheme = 'system',
  enableSystem = true,
  disableTransitionOnChange = false,
  storageKey = 'theme',
  themes = ['light', 'dark']
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      storageKey={storageKey}
      themes={themes}
    >
      {children}
    </NextThemesProvider>
  )
}