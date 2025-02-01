// src/components/rtl/DirectionProvider.tsx
import { ReactNode } from 'react'
import { getTextDirection } from '@/lib/i18n/direction'

interface DirectionProviderProps {
  locale: string
  children: ReactNode
}

export function DirectionProvider({ locale, children }: DirectionProviderProps) {
  const direction = getTextDirection(locale)
  
  return (
    <div dir={direction} className={direction === 'rtl' ? 'font-arabic' : 'font-primary'}>
      {children}
    </div>
  )
}