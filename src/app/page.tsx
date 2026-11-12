import Hero from '@/components/Hero'
import About from '@/components/About'
import Explore from '@/components/Explore'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <div className="mx-auto w-full max-w-site">
          <About />
          <Explore />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
