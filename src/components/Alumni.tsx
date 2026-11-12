'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import Tabs, { tabId } from './Tabs'
import LogoImage from './LogoImage'
import { alumni, alumniStats } from '@/lib/content'

const ALL = 'All'

export default function Alumni() {
  const [group, setGroup] = useState<string>(ALL)
  const reduce = useReducedMotion()

  const total = alumni.reduce((n, g) => n + g.logos.length, 0)
  const logos =
    group === ALL ? alumni.flatMap((g) => g.logos) : (alumni.find((g) => g.group === group)?.logos ?? [])

  const options = [{ group: ALL, count: total }, ...alumni.map((g) => ({ group: g.group, count: g.logos.length }))].map(
    (o) => ({
      value: o.group,
      label: (
        <>
          {o.group}
          <span className="font-mono text-[11px] tabular-nums opacity-60">{o.count}</span>
        </>
      ),
    }),
  )

  return (
    <section aria-labelledby="alumni-title" className="border-b border-line">
      <div className="grid md:grid-cols-[minmax(0,42%)_1fr]">
        <div className="cell border-b border-line py-10 md:border-b-0 md:border-r md:py-14">
          <Reveal>
            <h1 id="alumni-title" className="mt-8 font-serif text-5xl leading-[0.9] md:text-[5vw]">
              Alumni
            </h1>
          </Reveal>
        </div>
        <dl className="grid sm:grid-cols-3">
          {alumniStats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.06}
              className={`cell flex flex-col-reverse justify-end py-8 md:py-14 ${
                i > 0 ? 'border-t border-line sm:border-l sm:border-t-0' : ''
              }`}
            >
              <dt className="mt-4 text-sm text-paper/65">{s.label}</dt>
              <dd className="font-serif text-[44px] leading-[0.9] text-gold-light md:text-[3.2vw]">{s.value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>

      <div className="cell border-y border-line py-5">
        <Tabs label="Filter alumni by industry" idBase="alumni" value={group} onChange={setGroup} options={options} />
      </div>

      <ul
        id="alumni-panel"
        role="tabpanel"
        aria-labelledby={tabId('alumni', group)}
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6"
      >
        <AnimatePresence initial={false} mode="popLayout">
          {logos.map((logo) => (
            <motion.li
              key={logo.name}
              layout={!reduce}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.25 }}
              className="-mb-px -mr-px flex h-28 items-center justify-center border-b border-r border-line px-4 md:h-32"
            >
              <LogoImage logo={logo} base={30} maxWidth={120} className="logo-mono opacity-70" />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  )
}
