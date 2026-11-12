/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // The site used to have one page per section; send old links to the anchor.
    return [
      { source: '/contact', destination: '/#contact', permanent: true },
      ...['clients', 'services', 'alumni', 'team'].map((s) => ({
        source: `/${s}`,
        destination: `/#${s}`,
        permanent: true,
      })),
    ]
  },
}

module.exports = nextConfig
