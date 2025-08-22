import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
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
      <body className={`${inter.className} ${poppins.variable}`}>{children}</body>
    </html>
  )
}