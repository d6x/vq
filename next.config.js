/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['vq-s3.s3.amazonaws.com'],
    remotePatterns: [
      {
        hostname: '*.googleusercontent.com'
      },
      {
        hostname: 'linklist-files.s3.amazonaws.com',
      },
    ],
  }
}

module.exports = nextConfig
