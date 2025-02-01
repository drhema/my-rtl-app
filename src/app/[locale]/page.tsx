// src/app/[locale]/page.tsx
interface PageProps {
  params: Promise<{ locale: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  const locales = ['en', 'ar']
  return locales.map((locale) => ({ locale }))
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params
  const isArabic = locale === 'ar'
  
  return (
    <main className="flex-1">
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            {isArabic ? 'مرحباً بكم في موقعنا' : 'Welcome to Our Website'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {isArabic 
              ? 'نحن نقدم حلولاً مبتكرة لمستقبل رقمي أفضل'
              : 'We provide innovative solutions for a better digital future'}
          </p>
        </div>
      </section>
    </main>
  )
}