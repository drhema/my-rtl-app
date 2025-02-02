# Next.js Project Creation Prompt Guide

Use this guide as a prompt template when asking AI to help create a Next.js project.

## Core Requirements

"Please help me create a Next.js application with the following specifications:

### Base Configuration
- Multilingual support (English + Arabic)
- RTL/LTR layout management
- Internationalization (i18n) setup

- Next.js version: 15.1 (or latest stable version)
- TypeScript for type safety
- App Router architecture
- Source directory (`src/`) structure
- ESLint + Prettier + Husky integration
- DaisyUI integration with Tailwind CSS

### Required Dependencies
- next-intl for internationalization
- tailwindcss-rtl for RTL support
- date-fns and date-fns-tz for date localization
- Noto Sans Arabic font for Arabic text

- DaisyUI
- React Icons
- Framer Motion (free version)
- GSAP (free version)
- next-themes for dark/light mode
- @next/bundle-analyzer

### Directory Structure Requirements
- Localization structure:
  ```
  public/
    locales/
      en/
        common.json
        home.json
      ar/
        common.json
        home.json
  ```
- RTL/LTR utilities:
  ```
  src/
    lib/
      i18n/
        direction.ts
        config.ts
        hooks.ts
    components/
      rtl/
        RTLWrapper.tsx
        DirectionProvider.tsx
  ```

Please create:
- Route groups for authentication and marketing: (auth), (marketing)
- Components structure: ui, layout, shared
- Utility folders: lib/utils, lib/hooks, lib/constants
- Type definitions folder
- Public assets structure

### Core Features

#### Styling System
- DaisyUI integration with Tailwind
- CSS-in-JS support
- Font optimization with next/font
- Dark/light mode support with next-themes

#### Performance Requirements
- Static Site Generation (SSG) for static content
- Incremental Static Regeneration (ISR) where needed
- Image optimization with next/image
- Code splitting with next/dynamic
- Bundle analysis setup

#### Security Features
- Input sanitization
- API route protection
- Environment variable management
- Security headers configuration

#### Accessibility Requirements
- Semantic HTML structure
- ARIA labels implementation
- Color contrast considerations
- Screen reader compatibility

#### SEO Configuration
- Metadata setup (title, description)
- Open Graph & Twitter Cards
- JSON-LD Schema Markup
- Sitemap & robots.txt
- Canonical URL implementation
- URL normalization
- Status code handling (404, 500)

#### GTM & Analytics
- GTM container setup
- Data layer implementation
- Event tracking configuration
- Core Web Vitals tracking
- Client-side navigation handling

#### Error Handling
- Global Error Boundary
- API error handling
- Hydration error management
- Fallback UI components

### Development Guidelines
- Component-first architecture
- Small, focused components
- Proper type definitions
- Consistent naming conventions
- Code splitting best practices

### File Structure Pattern
Please provide complete file paths and full code for:
- Configuration files (next.config.js, tsconfig.json, etc.)
- Core components
- Layout files
- Utility functions
- Type definitions
- Provider components

### Deployment Considerations
- Cloudflare Pages optimization
- Cache control headers
- CDN configuration
- Environment variable management

### RTL/LTR Implementation Requirements

#### Core RTL Setup
1. Direction Management
   ```typescript
   // lib/i18n/direction.ts
   export const getTextDirection = (locale: string) => locale === 'ar' ? 'rtl' : 'ltr';
   ```

2. HTML Direction Setup
   ```typescript
   // app/[locale]/layout.tsx
   import { getTextDirection } from '@/lib/i18n/direction';
   
   export default function RootLayout({
     children,
     params: { locale }
   }: {
     children: React.ReactNode;
     params: { locale: string };
   }) {
     const direction = getTextDirection(locale);
     return (
       <html lang={locale} dir={direction}>
         <body>{children}</body>
       </html>
     );
   }
   ```

3. Font Configuration
   ```typescript
   // app/[locale]/layout.tsx
   import { Noto_Sans_Arabic } from 'next/font/google';
   
   const arabicFont = Noto_Sans_Arabic({
     subsets: ['arabic'],
     variable: '--font-arabic'
   });
   ```

#### Styling Requirements
1. Tailwind RTL Configuration
   ```javascript
   // tailwind.config.js
   module.exports = {
     plugins: [require('tailwindcss-rtl')],
   }
   ```

2. Global CSS Setup
   ```css
   /* globals.css */
   :root {
     --font-primary: 'Inter', sans-serif;
     --font-arabic: 'Noto Sans Arabic', sans-serif;
   }
   
   [dir="rtl"] {
     font-family: var(--font-arabic);
   }
   ```

#### Component Requirements
1. RTL Wrapper Component
2. Direction-aware components
3. Icon flipping utilities
4. Layout direction hooks

#### Localization Features
1. Translation management
2. Date/time formatting
3. Number formatting
4. Currency handling

#### Testing Requirements for RTL
- Direction switching validation
- Font loading verification
- Layout integrity checks
- Form validation messages
- Media queries testing
- PDF/email template verification

## Additional Requirements

### Code Quality
- Implement strict TypeScript checks
- ESLint rules configuration
- Prettier formatting rules
- Git hooks with Husky
- Code review guidelines

### Performance Metrics
- Core Web Vitals optimization
- Bundle size monitoring
- Loading performance
- Runtime performance

### Documentation Needs
- Component documentation
- API documentation
- Setup instructions
- Deployment guide

## Request Format

When requesting implementation of specific features, use this format:

1. First, confirm the project structure creation
2. Wait for dependency installation confirmation
3. Request file creation with complete paths
4. For each major feature, request specific implementation details

Example request:
"Please implement the [feature name] according to the specifications above. Provide the complete code with file paths and any necessary configuration changes."

## Response Requirements

Ask the AI to:
1. Provide complete file paths for all code
2. Show full configuration files
3. Include implementation details
4. Explain any necessary environment variables
5. Highlight potential security considerations
6. Note any performance implications

## Tips for Better Results

1. Request implementations in logical groups
2. Ask for specific error handling approaches
3. Request security best practices for each feature
4. Ask about testing strategies
5. Request deployment considerations
6. Ask for performance optimization suggestions

## Validation Steps

Ask the AI to include:
1. Type checking confirmations
2. Security validation steps
3. Performance testing approaches
4. Accessibility testing methods
5. SEO validation processes

### RTL-Specific Component Checklist
- [ ] Navigation components (consider direction)
- [ ] Form layouts and input fields
- [ ] Tables and data grids
- [ ] Modals and popups
- [ ] Carousels and sliders
- [ ] Charts and data visualization
- [ ] Icon components with direction awareness
- [ ] Typography components with font switching
- [ ] Date pickers with localization
- [ ] Number inputs with format handling

### RTL Testing and Validation Checklist
- [ ] Layout integrity in both directions
- [ ] Font loading and switching
- [ ] Number and date formatting
- [ ] Icon orientations
- [ ] Navigation flow
- [ ] Form submissions
- [ ] Animation directions
- [ ] Scroll behavior
- [ ] PDF generation
- [ ] Email templates

## Common Gotchas to Address

Ask about:
6. RTL-specific issues:
   - Text alignment in mixed content
   - Input field direction
   - Icon flipping logic
   - Font loading performance
   - Bidirectional text handling
   - Layout shifts during language switch
   - Number/date format conflicts
   - CSS logical properties support
1. Hydration errors
2. Type conflicts
3. Build optimization
4. Security vulnerabilities
5. Performance bottlenecks

Use this guide as a template when requesting AI assistance with Next.js project creation. Modify the requirements based on your specific needs while maintaining the structured approach to ensure comprehensive implementation.