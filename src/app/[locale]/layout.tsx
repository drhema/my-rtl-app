// src/app/[locale]/layout.tsx
import { Noto_Sans_Arabic } from 'next/font/google'
import { Inter } from 'next/font/google'
import { LocalizedContent } from './LocalizedContent'
import Script from 'next/script'
import { GTM_ID, initDataLayer } from '@/lib/gtm'
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

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' }
  ]
}

export default function Layout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {GTM_ID && (
          <>
            <Script
              id="gtm-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${GTM_ID}');
                `,
              }}
            />
            <Script
              id="gtm-data-layer"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: initDataLayer(),
              }}
            />
          </>
        )}
      </head>
      <body className={`min-h-screen flex flex-col ${inter.variable} ${arabicFont.variable}`}>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <LocalizedContent locale={locale}>
          {children}
        </LocalizedContent>
      </body>
    </html>
  )
}