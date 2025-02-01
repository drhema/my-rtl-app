// src/app/[locale]/layout.tsx
import { Noto_Sans_Arabic } from 'next/font/google'
import { Inter } from 'next/font/google'
import { LocalizedContent } from './LocalizedContent'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-primary',
})

const arabicFont = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
})

export const dynamicParams = false

export async function generateStaticParams() {
  const locales = ['en', 'ar']
  return locales.map((locale) => ({ locale }))
}

interface LayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function Layout({ children, params }: LayoutProps) {
  const { locale } = await params

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`min-h-screen flex flex-col ${inter.variable} ${arabicFont.variable}`}>
        <LocalizedContent locale={locale}>
          {children}
        </LocalizedContent>
      </body>
    </html>
  )
}