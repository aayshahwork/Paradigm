'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { heroStats } from '@/lib/content'

export default function Hero() {
  const reduce = useReducedMotion()
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink text-white">
      <Image
        src="/ParadigmHome.jpg"
        alt="Paradigm Consulting members at Sather Gate, UC Berkeley"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_35%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/25 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/20 to-transparent" />

      <div className="container-site relative flex flex-1 flex-col justify-end pb-14 pt-32 md:pb-20">
        <motion.p {...fade(0.1)} className="eyebrow mb-6 flex items-center gap-3 text-gold-light">
          <span aria-hidden className="h-px w-10 bg-gold-light" />
          A branch of Alpha Epsilon Zeta
        </motion.p>

        <motion.h1
          {...fade(0.2)}
          className="max-w-4xl font-serif text-[44px] font-normal leading-[1.02] tracking-[-0.01em] sm:text-6xl md:text-[84px]"
        >
          Paradigm Consulting
        </motion.h1>

        <motion.p {...fade(0.35)} className="mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
          The premier consulting organization at UC Berkeley, providing top-tier strategic and technical consulting
          services since 2003.
        </motion.p>

        <motion.div {...fade(0.5)} className="mt-10 flex flex-wrap gap-3">
          <Link href="/team#contact" className="btn-light">
            Work With Us <ArrowRight size={16} aria-hidden />
          </Link>
          <Link href="/#services" className="btn-ghost-light">
            Our Services
          </Link>
        </motion.div>

        <motion.dl
          {...fade(0.7)}
          className="mt-16 grid grid-cols-3 border-t border-white/20 md:mt-24 md:grid-cols-3"
        >
          {heroStats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse py-6 pr-3 md:py-8 ${i > 0 ? 'border-l border-white/20 pl-4 md:pl-8' : ''}`}
            >
              <dt className="eyebrow mt-2 text-white/55">{s.label}</dt>
              <dd className="font-serif text-[32px] md:text-5xl">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
