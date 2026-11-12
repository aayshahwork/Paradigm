import type { Metadata } from 'next'
import PracticeSwitcher from '@/components/PracticeSwitcher'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services | Paradigm Consulting',
  description: 'Strategy and technology consulting from UC Berkeley students, from go-to-market to cloud migration.',
}

export default function ServicesPage() {
  return (
    <>
      <main id="main">
        <PracticeSwitcher />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
