// src/app/[locale]/LocalizedContent.tsx
'use client'

import dynamic from 'next/dynamic'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { DirectionProvider } from '@/components/rtl/DirectionProvider'

// Dynamically import components that aren't needed for initial render
const Header = dynamic(() => import('@/components/layout/Header'), {
  ssr: true, // We want SSR for SEO
  loading: () => (
    <header className="bg-base-200">
      <div className="container mx-auto px-4 py-6">
        <div className="h-10" /> {/* Placeholder height */}
      </div>
    </header>
  )
})

const Footer = dynamic(() => import('@/components/layout/Footer'), {
  ssr: false, // Footer can load client-side
  loading: () => (
    <footer className="bg-base-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="h-8" /> {/* Placeholder height */}
      </div>
    </footer>
  )
})

interface LocalizedContentProps {
  children: React.ReactNode
  locale: string
}

export function LocalizedContent({ children, locale }: LocalizedContentProps) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="app-theme"
    >
      <DirectionProvider locale={locale}>
        <Header locale={locale} />
        {children}
        <Footer locale={locale} />
      </DirectionProvider>
    </ThemeProvider>
  )
}