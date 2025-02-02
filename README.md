
```markdown
# Next.js RTL/LTR Application with Cloudflare Pages Deployment

This is a multilingual Next.js project with RTL/LTR support, theme switching, and Cloudflare Pages deployment configuration.

## Features

- 🌐 Multilingual Support (English/Arabic)
- 🔄 RTL/LTR Layout Management
- 🌓 Dark/Light Theme Switching
- ⚡ Cloudflare Pages Deployment
- 🎨 DaisyUI + Tailwind CSS
- 📱 Responsive Design

## Prerequisites

- Node.js 18.18.0 or higher
- npm 9.8.0 or higher
- A Cloudflare account for deployment

## Tech Stack

- Next.js 15.1.6
- React 18
- TypeScript
- Tailwind CSS
- DaisyUI
- next-themes
- tailwindcss-rtl

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd [your-project-name]
```

2. Install dependencies:
```bash
# Clean existing files (if any)
rm -rf .next
rm -rf node_modules
rm -rf .vercel
rm package-lock.json

# Fresh install
npm install
```

## Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

Local build:
```bash
# Clean and rebuild
rm -rf .next
npm run build
```

## Cloudflare Pages Deployment

1. Install Cloudflare dependencies:
```bash
npm install --save-dev @cloudflare/next-on-pages
```

2. Deploy to Cloudflare Pages:
```bash
npm run deploy
```

### Cloudflare Pages Configuration

Required settings in Cloudflare dashboard:

1. Build Settings:
- Production branch: `main`
- Framework preset: `Next.js`
- Build command: `npm run pages:build`
- Build output directory: `.vercel/output/static`
- Root directory: `/`

2. Environment Variables:
```
NODE_VERSION: 18.18.0
NPM_VERSION: 9.8.0
```

3. Compatibility Settings:
- Add flag: `nodejs_compat`
- Compatibility date: "2024-02-02"

## Project Structure

```
project-root/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── rtl/
│   │   └── theme/
│   └── styles/
├── public/
├── wrangler.toml
├── next.config.js
├── package.json
└── _routes.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run pages:build` - Build for Cloudflare Pages
- `npm run deploy` - Deploy to Cloudflare Pages

## Environment Variables

Create a `.env.local` file:
```env
# Add your environment variables here
```

## Troubleshooting

1. Node.js Version Issues:
```bash
# Check your Node.js version
node -v

# Should be 18.18.0 or higher
```

2. Build Issues:
```bash
# Clean everything and reinstall
rm -rf .next
rm -rf node_modules
rm package-lock.json
npm install
```

3. Deployment Issues:
- Verify Cloudflare Pages settings
- Check compatibility flags
- Review deployment logs

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Cloudflare Pages](https://pages.cloudflare.com)
- [DaisyUI](https://daisyui.com)
- [Tailwind CSS](https://tailwindcss.com)
```
npm run build



rm -rf .next
rm -rf node_modules
rm package-lock.json
npm install
npm run deploy