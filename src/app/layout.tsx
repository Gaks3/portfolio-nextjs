import type { Metadata } from 'next'
import { Oxanium } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { cn } from '@/lib/utils'
import { TracingBeam } from '@/components/ui/tracing-beam'
import Footer from '@/components/Footer'

const oxanium = Oxanium({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ade Bagas | Portfolio',
  description: 'Coffee, code, and creativity - building the future.',
  keywords: [
    'Ade Bagas',
    'Ade Bagas Wicaksono',
    'Portfolio',
    'Portfolio Fullstack Web Developer',
    'Portfolio Web Developer',
  ],
  applicationName: 'Portfolio',
  authors: { name: 'Ade Bagas Wicaksono' },
  creator: 'Ade Bagas Wicaksono',
  generator: 'Next.js',
  openGraph: {
    type: 'profile',
    countryName: 'indonesia',
    title: 'Ade Bagas | Portfolio',
    description: 'Coffee, code, and creativity - building the future.',
    emails: 'dwi66116@gmail.com',
    url: 'https://adebagas.vercel.app',
    siteName: 'Ade Bagas | Portfolio',
    images: [
      {
        url: 'https://adebagas.vercel.app/opengraph-image.png',
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    title: 'Ade Bagas | Portfolio',
    description: 'Coffee, code, and creativity - building the future.',
    card: 'summary_large_image',
    creator: '@gaks_3',
    site: 'https://adebagas.vercel.app',
    images: [
      {
        url: 'https://adebagas.vercel.app/twitter-image.png',
        width: 800,
        height: 600,
      },
    ],
  },
  verification: {
    google: '_-X36VnEIWAWaq6cTM8oxBtvycZTDqRUnIvbaAuCdB4',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className={cn('bg-background-second text-text', oxanium.className)}>
        <TracingBeam>
          <Navbar />
          {children}
        </TracingBeam>
        <Footer />
      </body>
    </html>
  )
}
