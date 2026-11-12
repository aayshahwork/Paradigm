import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Marker from './Marker'
import { alumni, services, strategyClients, team, technologyClients } from '@/lib/content'

// Counts come from the same data the pages render, so they can't drift.
const cells = [
  {
    href: '/clients',
    title: 'Clients',
    meta: `${strategyClients.length + technologyClients.length} companies`,
  },
  {
    href: '/services',
    title: 'Services',
    meta: `${services.strategy.items.length + services.technology.items.length} services, 2 practices`,
  },
  {
    href: '/alumni',
    title: 'Alumni',
    meta: `${alumni.reduce((n, g) => n + g.logos.length, 0)} destinations`,
  },
  { href: '/team', title: 'Team', meta: `${team.length} leads` },
]

export default function Explore() {
  return (
    <section id="explore" aria-labelledby="explore-title" className="border-b border-line">
      <div className="cell border-b border-line py-4">
        <Marker n="03" label="Explore" />
        <h2 id="explore-title" className="sr-only">
          Explore the site
        </h2>
      </div>
      <ul className="grid sm:grid-cols-2">
        {cells.map((c, i) => (
          <li
            key={c.href}
            className={`border-line ${i > 0 ? 'border-t' : ''} ${i === 1 ? 'sm:border-l sm:border-t-0' : ''} ${
              i === 2 ? 'sm:border-t' : ''
            } ${i === 3 ? 'sm:border-l' : ''}`}
          >
            <Link
              href={c.href}
              className="group cell flex min-h-[200px] flex-col justify-between py-8 transition-colors duration-300 hover:bg-white/[0.03] md:min-h-[260px] md:py-10"
            >
              <span className="flex items-start justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-paper/55">{c.meta}</span>
                <ArrowUpRight
                  aria-hidden
                  className="text-gold-light transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </span>
              <span className="block font-serif text-5xl leading-[0.95] md:text-[4.2vw]">{c.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
