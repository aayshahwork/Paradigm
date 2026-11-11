import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ClientMarquee from '@/components/ClientMarquee'
import About from '@/components/About'
import Services from '@/components/Services'
import Clients from '@/components/Clients'
import Alumni from '@/components/Alumni'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ClientMarquee />
      <About />
      <Services />
      <Clients />
      <Alumni />
      <CallToAction />
      <Footer />
    </main>
  )
}
