import type { Metadata } from 'next'
import Alumni from '@/components/Alumni'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Alumni',
  description: 'Where Paradigm alumni work: top consulting, finance and technology firms, leading graduate programs and startups.',
}

export default function AlumniPage() {
  return (
    <>
      <main id="main">
        <div className="mx-auto w-full max-w-site">
          <Alumni />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
