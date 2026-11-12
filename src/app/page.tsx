import Hero from '@/components/Hero'
import About from '@/components/About'
import Clients from '@/components/Clients'
import Services from '@/components/Services'
import Alumni from '@/components/Alumni'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <div className="mx-auto w-full max-w-site">
          <About />
          <Clients />
          <Services />
          <Alumni />
          <Team />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
