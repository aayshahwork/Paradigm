import type { Metadata } from 'next'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Clients',
  description: 'Companies Paradigm Consulting has delivered strategy and technology engagements for, including eBay, Visa and AWS.',
}

export default function ClientsPage() {
  return (
    <>
      <main id="main">
        <div className="mx-auto w-full max-w-site">
          <Clients />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
