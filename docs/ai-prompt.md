content categorization
keyword frequency
readability metrics
topic modeling
seo copywriting
slio strucure




Next.js application with RTL/LTR support optimized for Cloudflare Pages deployment, based on the specifications from the paste.txt document



create nextjs app based on latest version currently 15.1
techstacks:
1- daisyui
2-TypeScript for type safety
3-ESLint, Prettier, and Husky for code quality


5. Styling
Use daisyui CSS for scoped styles.
Enable CSS-in-JS libraries (e.g., styled-components) with Next plugins.
Optimize fonts with next/font.
- use react icons npm install react-icons
- use the free parts of Framer Motion and GSAP for animation
- use npm install next-themes for dark/light mode 

3. Performance Optimization

Use Static Site Generation (SSG) for static content.
Apply Incremental Static Regeneration (ISR) for revalidation.
Optimize images with next/image (lazy loading, placeholders).
Split code with dynamic imports (next/dynamic).
Analyze bundles with @next/bundle-analyzer.


Security

Sanitize user inputs to prevent XSS/SQLi.
Secure API routes with middleware/auth.
Use .env variables for secrets.
Set security headers via next.config.js and middleware.



Accessibility (a11y)
Ensure that the app is a11y compliance
Use semantic HTML elements. (like <nav>, <header>, <footer>, etc.)
Add ARIA labels for screen readers.
Test with Lighthouse or axe.
Consider color contrast and clear navigation benefit all users



Deployment

Prepare for depoly on cloudflare pages for optimal compatibility.
Configure next.config.js for output optimizations.
Enable caching headers and CDN.



2. Routing

Routing: Use App Router, dynamic routes, and Suspense.
Leverage file-system routing with meaningful folder/file names.
Use loading.js and error.js for Suspense and Error Boundaries.
Prefer next/link over <a> for client-side navigation.
Implement dynamic routes (e.g., app/blog/[slug]/page.tsx).




3.SEO

Metadata & Structured Data
Title & Description
Open Graph & Twitter Cards
best suitable json Schema Markup
Configure trailing slashes in next.config.js:
skipTrailingSlashRedirect: true, // Consistent URL format
and exception pages from public folder like sitemap + robots txt

Implement canonical URLs for all pages
Set up permanent redirects (301) for old URLs
URL normalization (lowercase, hyphen-separated)
Add next-sitemap for auto-generated sitemap.xml
Configure robots.txt
Implement proper HTTP status codes (404, 500 pages)
// next.config.js
compress: true
Implement next/image with optimized formats:
Preconnect to external domains:
ex: <link rel="preconnect" href="https://fonts.gstatic.com" />
Set security headers via middleware:
Remove powered-by header:
// next.config.js poweredByHeader: false
Configure TypeScript/ESLint build overrides:




4. data layer for GTM and analytics

impelemnt GTM Container Installation
Add GTM component to root layout (app/layout.tsx)

Define best standard data layer schema for the project
Implement consistent event naming convention (e.g., event: 'page_view')
Handle client-side navigation tracking:

Create event tracking helper:

Track Core Web Vitals:
Verify dataLayer in browser console
Validation: Use TypeScript for data layer integrity











5.Boundaries please
Core Error Boundary Setup
Create a class-based Error Boundary component
Error Handling Strategies
Differentiate between server/client errors
Handle hydration errors separately
Implement error boundaries at strategic component levels
Use nested error boundaries for critical UI sections
Handle API errors in data fetching methods
Create friendly error fallback UI
for easier dev
Handle SSR errors in getServerSideProps



dev tips:
please return full code of each file with complete file path
always make files and compeoents small in code and split big compeoents into smaller sub compoeets



steps:

1- give the commands and steps that install the project on folder [foldername]
2- npm with ssh command tha install all dependicied and dont proceed to next step until i cofirm u that all depencided installed successfully 
3- a  patch ssh command to create all project empty files and folders and be sure u saved all files in memeory for next step.

4- 