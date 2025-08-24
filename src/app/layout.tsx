import type { Metadata } from 'next'
import { Nunito, Playfair_Display } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Paradigm Consulting - UC Berkeley Student Consulting',
  description: 'Strategic consulting services by UC Berkeley students. Specializing in strategic analysis, process optimization, and innovation strategy since 2000.',
  keywords: 'consulting, UC Berkeley, strategic analysis, process optimization, innovation strategy, student consulting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.className} ${nunito.variable} ${playfair.variable}`}>{children}</body>
    </html>
  )
}