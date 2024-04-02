import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ade Bagas | Portfolio',
    short_name: 'Portfolio',
    description: 'Coffee, code, and creativity - building the future.',
    display: 'standalone',
    start_url: '/',
    theme_color: '#232123',
    background_color: '#232123',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
