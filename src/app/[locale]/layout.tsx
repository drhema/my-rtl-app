// src/app/[locale]/layout.tsx
import { Noto_Sans_Arabic } from 'next/font/google'
import { Inter } from 'next/font/google'
import LocalizedContent from './LocalizedContent'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-primary',
})

const arabicFont = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
})

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' },
  ]
}

interface LayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export default async function Layout({ children, params }: LayoutProps) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={`min-h-screen flex flex-col ${inter.variable} ${arabicFont.variable}`}>
        <LocalizedContent locale={params.locale}>
          {children}
        </LocalizedContent>
      </body>
    </html>
  )
}