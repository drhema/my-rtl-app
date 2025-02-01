// src/app/[locale]/LocalizedContent.tsx
'use client'

import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { DirectionProvider } from '@/components/rtl/DirectionProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function LocalizedContent({
  locale,
  children
}: {
  locale: string
  children: React.ReactNode
}) {
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