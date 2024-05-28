/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/dino-game',
        destination: 'https://gaks3.github.io/dino-game',
        permanent: false,
        basePath: false,
      },
    ]
  },
}

export default nextConfig
