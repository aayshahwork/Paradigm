import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { EMAIL } from '@/lib/content'

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <Image
        src="/ParadigmHome.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_35%] opacity-40"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/40" />
      <div className="relative mx-auto flex min-h-[480px] md:min-h-[560px] w-full max-w-site flex-col justify-center px-6 py-20 md:px-10">
        <p className="text-sm text-gold-light">UC Berkeley &middot; Since 2003</p>
        <h1 id="hero-title" className="mt-4 font-serif text-6xl leading-[0.95] md:text-8xl">
          Paradigm Consulting
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/75">
          Berkeley students delivering strategy and technology engagements for companies including eBay, Visa and AWS.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${EMAIL}?subject=Project%20inquiry`} className="btn-light">
            Work with us <ArrowRight size={16} aria-hidden />
          </a>
          <a href="#services" className="btn-ghost-light">
            Our services
          </a>
        </div>
      </div>
    </section>
  )
}
