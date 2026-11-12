'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Marker from './Marker'
import { EMAIL } from '@/lib/content'

export default function Hero() {
  const reduce = useReducedMotion()
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  })

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden border-b border-line">
      <Image
        src="/ParadigmHome.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_35%] opacity-40"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/85 to-ink-900/30" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-ink-900/60" />

      <div className="relative grid min-h-[calc(100svh-4rem)] md:min-h-[100svh] md:grid-cols-[minmax(0,46%)_1fr]">
        <div className="flex flex-col justify-end md:border-r md:border-line">
          <div className="cell border-b border-line py-4">
            <Marker n="01" label="UC Berkeley · Since 2003" />
          </div>

          <h1 id="hero-title" className="cell py-10 md:py-14">
            <motion.span
              {...fade(0.1)}
              className="block font-sans text-[16vw] font-medium leading-[0.86] tracking-[-0.045em] md:text-[6.4vw]"
            >
              Paradigm
            </motion.span>
            <motion.span
              {...fade(0.2)}
              className="mt-[0.06em] block font-serif text-[17vw] italic leading-[0.86] tracking-[-0.02em] md:text-[6.9vw]"
            >
              Consulting
            </motion.span>
          </h1>

          <motion.div {...fade(0.32)} className="cell border-t border-line py-8 md:py-10">
            <p className="max-w-md text-[17px] leading-relaxed text-paper/75 md:text-lg">
              Berkeley students delivering strategy and technology engagements for companies including eBay, Visa and
              AWS.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${EMAIL}?subject=Project%20inquiry`} className="btn-light">
                Work with us <ArrowRight size={16} aria-hidden />
              </a>
              <Link href="/services" className="btn-ghost-light">
                Our services
              </Link>
            </div>
          </motion.div>
        </div>
        <div aria-hidden className="hidden md:block" />
      </div>
    </section>
  )
}
