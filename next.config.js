// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  // Image configuration
  images: {
    unoptimized: true,
  },

  // Trailing slash handling
  skipTrailingSlashRedirect: true,

  // Build configurations
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  // Headers for security
  headers: function() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ]
  },

  // Redirects for trailing slashes
  redirects: function() {
    return [
      {
        source: '/:path((?!_next|api|robots.txt|sitemap.xml|.well-known).*[^/]$)',
        destination: '/:path/',
        permanent: true
      }
    ]
  }
};

module.exports = nextConfig;