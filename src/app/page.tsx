import Hero from '@/components/Hero'
import About from '@/components/About'
import Explore from '@/components/Explore'
import CallToAction from '@/components/CallToAction'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <About />
        <Explore />
        <CallToAction n="04" />
      </main>
      <Footer />
    </>
  )
}
