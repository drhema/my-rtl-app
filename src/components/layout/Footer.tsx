// src/components/layout/Footer.tsx
export default function Footer({ locale }: { locale: string }) {
    const isArabic = locale === 'ar'
    
    return (
      <footer className="bg-base-200 mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <p>
              {isArabic 
                ? '© 2024 شركتي. جميع الحقوق محفوظة.'
                : '© 2024 My Company. All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    )
  }