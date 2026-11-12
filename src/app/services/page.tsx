import type { Metadata } from 'next'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Strategy and technology consulting from UC Berkeley students, from go-to-market to cloud migration.',
}

export default function ServicesPage() {
  return (
    <>
      <main id="main">
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
