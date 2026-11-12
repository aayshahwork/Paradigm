import type { Metadata, Viewport } from 'next'
import { EB_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

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

export const metadata: Metadata = {
  title: 'Paradigm Consulting | UC Berkeley',
  description:
    'Paradigm Consulting is the consulting arm of Alpha Epsilon Zeta at UC Berkeley, delivering strategy and technology engagements for companies including eBay, Visa, AWS, Dropbox and Coca-Cola.',
  keywords:
    'Paradigm Consulting, UC Berkeley, student consulting, strategy consulting, technology consulting, Alpha Epsilon Zeta',
}

export const viewport: Viewport = {
  themeColor: '#07142A',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        <a
          href="#main"
          className="sr-only z-[100] bg-paper px-4 py-3 text-sm text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navigation />
        {/* Hairline frame: rail line on the left, gutter line on the right */}
        <div className="md:pl-16">
          <div className="lg:mr-12 lg:border-r lg:border-line">{children}</div>
        </div>
      </body>
    </html>
  )
}
