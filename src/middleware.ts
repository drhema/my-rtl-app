// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
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

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // Skip all internal paths (_next, api)
    // Skip all files with extensions (.jpg, .png, etc)
    '/((?!_next|api|.*\\.[^/]*$).*)',
  ],
}