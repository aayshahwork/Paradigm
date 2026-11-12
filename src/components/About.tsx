import Reveal from './Reveal'
import Marker from './Marker'
import { firmStats } from '@/lib/content'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-b border-line">
      <div className="grid md:grid-cols-[minmax(0,28%)_1fr]">
        <div className="cell border-b border-line py-10 md:border-b-0 md:border-r md:py-14">
          <Marker n="02" />
          <Reveal>
            <h2 id="about-title" className="mt-8 font-serif text-5xl leading-[0.9] md:text-[5vw]">
              About
            </h2>
          </Reveal>
        </div>
        <Reveal className="cell flex items-end py-10 md:py-14">
          <p className="max-w-3xl text-xl leading-[1.45] tracking-[-0.01em] text-paper/85 md:text-[1.6vw]">
            Paradigm is UC Berkeley&rsquo;s student-run strategy and technology consulting group. Multidisciplinary
            teams put 1,000+ hours into every 10&ndash;12 week engagement, and hand off work clients can act on.
          </p>
        </Reveal>
      </div>

      <dl className="grid grid-cols-2 border-t border-line lg:grid-cols-4">
        {firmStats.map((s, i) => (
          <Reveal
            key={s.value}
            delay={i * 0.06}
            className={`cell flex flex-col-reverse justify-end py-10 md:py-14 ${i % 2 === 1 ? 'border-l border-line' : ''} ${
              i > 1 ? 'border-t border-line lg:border-t-0' : ''
            } ${i === 2 ? 'lg:border-l' : ''}`}
          >
            <dt className="mt-4 max-w-[22ch] text-sm leading-relaxed text-paper/65">{s.label}</dt>
            <dd className="font-serif text-[44px] leading-[0.9] text-gold-light md:text-[3.6vw]">{s.value}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
