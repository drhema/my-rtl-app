// src/app/[locale]/layout.tsx
import { Noto_Sans_Arabic } from 'next/font/google'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { DirectionProvider } from '@/components/rtl/DirectionProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import '@/styles/globals.css'

// Font configuration
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
})

const arabicFont = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
})

export const dynamicParams = false

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' }
  ]
}

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`min-h-screen flex flex-col ${inter.variable} ${arabicFont.variable}`}>
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
      </body>
    </html>
  )
}