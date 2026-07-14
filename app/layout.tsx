import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter, Poppins } from 'next/font/google'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Mayadevi Resort | Experience Paradise',
  description: 'Escape into luxury with our world-class resort. Experience breathtaking views, premium accommodations, award-winning hospitality, and unforgettable moments.',
  generator: 'v0.app',
  keywords: 'mayadevi resort, vacation, beach resort, mountain resort, wellness retreat, hospitality',
  openGraph: {
    title: 'Mayadevi Resort | Experience Paradise',
    description: 'Escape into luxury with our world-class resort.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mayadevi Resort | Experience Paradise',
    description: 'Escape into luxury with our world-class resort.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable} ${poppins.variable}`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
