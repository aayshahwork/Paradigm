import type { Metadata, Viewport } from 'next'
import { EB_Garamond, Inter } from 'next/font/google'
import './globals.css'

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
  themeColor: '#0B1B33',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        <a
          href="#main"
          className="sr-only z-[100] bg-ink px-4 py-3 text-sm text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
