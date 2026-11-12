import Hero from '@/components/Hero'
import About from '@/components/About'
import Clients from '@/components/Clients'
import PracticeSwitcher from '@/components/PracticeSwitcher'
import Alumni from '@/components/Alumni'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <About />
        <Clients />
        <PracticeSwitcher />
        <Alumni />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
