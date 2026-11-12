import type { Metadata } from 'next'
import Clients from '@/components/Clients'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Clients | Paradigm Consulting',
  description: 'Companies Paradigm Consulting has delivered strategy and technology engagements for, including eBay, Visa and AWS.',
}

export default function ClientsPage() {
  return (
    <>
      <main id="main">
        <Clients />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
