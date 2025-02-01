// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'ar']

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Root path handling
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url))
  }
  
  // Check if pathname has a valid locale
  const pathnameMissingValidLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`
  )
  
  if (pathnameMissingValidLocale) {
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}