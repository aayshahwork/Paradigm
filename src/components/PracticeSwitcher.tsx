'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  BarChart3,
  Brain,
  Cloud,
  Code2,
  Lightbulb,
  PenTool,
  RefreshCw,
  Rocket,
  Search,
  Target,
  TrendingDown,
  Users,
  type LucideIcon,
} from 'lucide-react'
import Reveal from './Reveal'
import Marker from './Marker'
import Tabs, { tabId } from './Tabs'
import { services, strategyClients, technologyClients } from '@/lib/content'

type Practice = 'strategy' | 'technology'

const icons: Record<string, LucideIcon> = {
  'Go-To-Market Strategy': Rocket,
  'Business Model Innovation': Lightbulb,
  'Customer Segmentation': Users,
  'Cost Reduction': TrendingDown,
  'Market Research': Search,
  'Competitive Analysis': Target,
  'Custom Software Development': Code2,
  'Legacy System Modernization': RefreshCw,
  'UI/UX Design': PenTool,
  'AI/ML Integration': Brain,
  'Cloud Architecture/Migration': Cloud,
  'Alternative Analytics': BarChart3,
}

const practices: Record<Practice, { label: string; items: string[]; clients: string[] }> = {
  strategy: {
    label: services.strategy.title,
    items: services.strategy.items,
    clients: strategyClients.map((c) => c.name),
  },
  technology: {
    label: services.technology.title,
    items: services.technology.items,
    clients: technologyClients.map((c) => c.name),
  },
}

export default function PracticeSwitcher() {
  const [practice, setPractice] = useState<Practice>('strategy')
  const reduce = useReducedMotion()
  const { items, clients } = practices[practice]

  const list = { hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.04 } } }
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section aria-labelledby="services-title" className="border-b border-line">
      <div className="grid border-b border-line md:grid-cols-[minmax(0,42%)_1fr]">
        <div className="cell py-10 md:border-r md:border-line md:py-14">
          <Marker n="01" />
          <Reveal>
            <h1 id="services-title" className="mt-8 font-serif text-5xl leading-[0.9] md:text-[5vw]">
              Services
            </h1>
          </Reveal>
        </div>
        <div className="cell flex flex-col justify-end gap-6 pb-10 md:py-14">
          <p className="max-w-md text-lg leading-relaxed text-paper/75">Two practices. One team that can do both.</p>
          <Tabs
            label="Practice"
            idBase="services"
            value={practice}
            onChange={setPractice}
            options={(Object.keys(practices) as Practice[]).map((k) => ({ value: k, label: practices[k].label }))}
          />
        </div>
      </div>

      <div id="services-panel" role="tabpanel" aria-labelledby={tabId('services', practice)}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={practice}
            exit={{ opacity: 0, transition: { duration: reduce ? 0 : 0.12 } }}
            className="grid lg:grid-cols-[1fr_minmax(0,28%)]"
          >
            <motion.ul
              variants={list}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 gap-px bg-line md:grid-cols-3"
            >
              {items.map((name, i) => {
                const Icon = icons[name] ?? Target
                return (
                  <motion.li
                    key={name}
                    variants={item}
                    className="group flex min-h-[170px] flex-col justify-between gap-6 bg-ink-900 p-6 transition-colors duration-300 hover:bg-ink-800 md:min-h-[220px] md:px-10 md:py-8"
                  >
                    <span className="flex items-start justify-between">
                      <Icon size={24} strokeWidth={1.4} aria-hidden className="text-gold-light" />
                      <span className="font-mono text-xs text-paper/40">0{i + 1}</span>
                    </span>
                    <span className="font-serif text-2xl leading-tight md:text-[28px]">{name}</span>
                  </motion.li>
                )
              })}
            </motion.ul>

            <div className="cell border-t border-line py-8 lg:border-l lg:border-t-0 lg:py-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/50">Past clients</p>
              <motion.ul variants={list} initial="hidden" animate="show" className="mt-6">
                {clients.map((c) => (
                  <motion.li
                    key={c}
                    variants={item}
                    className="border-b border-line py-3 font-serif text-xl last:border-0"
                  >
                    {c}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
