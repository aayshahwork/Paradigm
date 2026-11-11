/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: '/contact', destination: '/team', permanent: true }]
  },
}

module.exports = nextConfig
