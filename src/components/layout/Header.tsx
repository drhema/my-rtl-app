// src/components/layout/Header.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'

// Dynamically import theme toggle
const ThemeToggle = dynamic(() => import('@/components/theme/ThemeToggle'), {
  ssr: false,
  loading: () => <div className="w-10 h-10" /> // Placeholder
})

export default function Header({ locale }: { locale: string }) {
  const pathname = usePathname()
  const isArabic = locale === 'ar'
  
  const switchLocale = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '')
    return `/${newLocale}${currentPath}`
  }
  
  return (
    <header className="bg-base-200">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            {isArabic ? 'شركتي' : 'My Company'}
          </div>
          <div className="flex items-center gap-6">
            <ThemeToggle />
            <Link href={switchLocale('en')} className={locale === 'en' ? 'underline' : ''}>
              English
            </Link>
            <Link href={switchLocale('ar')} className={locale === 'ar' ? 'underline' : ''}>
              العربية
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}