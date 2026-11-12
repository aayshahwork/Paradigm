import type { Metadata, Viewport } from 'next'
import { EB_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { SITE_URL } from '@/lib/content'

const serif = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const description =
  'Paradigm Consulting is the consulting arm of Alpha Epsilon Zeta at UC Berkeley, delivering strategy and technology engagements for companies including eBay, Visa, AWS, Dropbox and Coca-Cola.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Paradigm Consulting | UC Berkeley', template: '%s | Paradigm Consulting' },
  description,
  keywords:
    'Paradigm Consulting, UC Berkeley, student consulting, strategy consulting, technology consulting, Alpha Epsilon Zeta',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-48.png', type: 'image/png', sizes: '48x48' },
      { url: '/icon-96.png', type: 'image/png', sizes: '96x96' },
      { url: '/icon-144.png', type: 'image/png', sizes: '144x144' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    siteName: 'Paradigm Consulting',
    title: 'Paradigm Consulting | UC Berkeley',
    description,
    url: SITE_URL,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Paradigm Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paradigm Consulting | UC Berkeley',
    description,
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#07142A',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Paradigm Consulting',
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  email: 'aezberkeley@gmail.com',
  parentOrganization: { '@type': 'Organization', name: 'Alpha Epsilon Zeta' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <a
          href="#main"
          className="sr-only z-[100] bg-paper px-4 py-3 text-sm text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
