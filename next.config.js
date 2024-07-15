


// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/',
      },
      {
        source: '/skills',
        destination: '/#skills',
      },
      {
        source: '/experience',
        destination: '/#experience',
      },
      {
        source: '/education',
        destination: '/#education',
      },
      {
        source: '/projects',
        destination: '/#projects',
      },
      {
        source: '/contact',
        destination: '/#contact',
      },
    ]
  },
}

module.exports = nextConfig

