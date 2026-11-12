import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { services } from '@/lib/content'
import { sectionNumber } from '@/lib/sections'

const practices = [
  { key: 'strategy', blurb: 'Decisions on markets, customers and cost, backed by research.' },
  { key: 'technology', blurb: 'Software, data and AI work, built and handed off.' },
] as const

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="border-b border-line">
      <div className="grid md:grid-cols-[minmax(0,28%)_1fr]">
        <div className="cell border-b border-line py-10 md:border-b-0 md:border-r md:py-14">
          <Reveal>
            <SectionLabel n={sectionNumber('services')} label="Practices" />
            <h2 id="services-title" className="mt-8 font-serif text-5xl leading-[0.9] md:text-[5vw]">
              Services
            </h2>
          </Reveal>
        </div>
        <Reveal className="cell flex items-end py-10 md:py-14">
          <p className="max-w-2xl text-xl leading-[1.45] text-paper/85 md:text-[1.6vw]">
            Two practices. One team that can do both.
          </p>
        </Reveal>
      </div>

      <div className="grid border-t border-line md:grid-cols-2">
        {practices.map((p, pi) => {
          const { title, items } = services[p.key]
          return (
            <div key={p.key} className={`border-line ${pi === 1 ? 'border-t md:border-l md:border-t-0' : ''}`}>
              <div className="cell border-b border-line py-8">
                <h3 className="font-mono text-sm uppercase tracking-[0.18em] text-gold-light">{title}</h3>
                <p className="mt-3 text-paper/65">{p.blurb}</p>
              </div>
              <ul>
                {items.map((s, i) => (
                  <li
                    key={s.name}
                    className={`cell grid grid-cols-[2.5rem_1fr] py-6 transition-colors hover:bg-white/[0.03] ${
                      i > 0 ? 'border-t border-line' : ''
                    }`}
                  >
                    <span className="pt-1 font-mono text-xs tabular-nums text-paper/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="font-serif text-2xl leading-tight">{s.name}</h4>
                      <p className="mt-2 leading-relaxed text-paper/65">{s.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
