import type { Metadata } from 'next'
import Alumni from '@/components/Alumni'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Alumni | Paradigm Consulting',
  description: 'Where Paradigm alumni work: top consulting, finance and technology firms, leading graduate programs and startups.',
}

export default function AlumniPage() {
  return (
    <>
      <main id="main">
        <Alumni />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
