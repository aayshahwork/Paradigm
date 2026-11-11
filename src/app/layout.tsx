import type { Metadata } from 'next'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>{children}</body>
    </html>
  )
}
