// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Skip if already on a locale path
  if (pathname.startsWith('/en') || pathname.startsWith('/ar')) {
    return NextResponse.next()
  }
  
  // Get user's preferred language from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  let defaultLocale = 'en'
  
  // Check if Arabic is preferred
  if (acceptLanguage?.toLowerCase().includes('ar')) {
    defaultLocale = 'ar'
  }

  // If accessing the root, redirect to detected language
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}/`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next|api|.*\\.[^/]*$).*)',
  ],
}