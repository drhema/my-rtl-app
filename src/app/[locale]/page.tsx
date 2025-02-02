// src/app/[locale]/page.tsx
export const runtime = 'edge'
export const dynamicParams = false

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Only import what's needed
const MainContent = dynamic(() => import('./MainContent'), {
  loading: () => (
    <div className="animate-pulse">
      <div className="h-24 bg-gray-200 rounded w-3/4 mx-auto mb-4" />
      <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto" />
    </div>
  )
})

export default function Page({ params }: { params: { locale: string } }) {
  return (
    <Suspense fallback={
      <div className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse">
            <div className="h-24 bg-gray-200 rounded w-3/4 mx-auto mb-4" />
            <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto" />
          </div>
        </div>
      </div>
    }>
      <MainContent locale={params.locale} />
    </Suspense>
  )
}