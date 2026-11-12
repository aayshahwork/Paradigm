import { ArrowUpRight } from 'lucide-react'
import Marker from './Marker'
import { EMAIL } from '@/lib/content'

const paths = [
  {
    who: 'For companies',
    title: 'Work with us',
    body: 'Tell us what you are working on.',
    href: `mailto:${EMAIL}?subject=Project%20inquiry`,
  },
  {
    who: 'For Berkeley students',
    title: 'Join Paradigm',
    body: 'Hear about the next recruiting cycle.',
    href: `mailto:${EMAIL}?subject=Recruitment`,
  },
]

export default function CallToAction() {
  return (
    <section aria-label="Get in touch" className="border-b border-line">
      <div className="cell border-b border-line py-4">
        <Marker n="06" label="Get in touch" />
      </div>
      <div className="grid md:grid-cols-2">
        {paths.map((p, i) => (
          <a
            key={p.title}
            href={p.href}
            className={`group cell flex min-h-[260px] flex-col justify-between py-10 transition-colors duration-300 hover:bg-white/[0.03] md:min-h-[340px] md:py-14 ${
              i > 0 ? 'border-t border-line md:border-l md:border-t-0' : ''
            }`}
          >
            <span className="flex items-start justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-paper/55">{p.who}</span>
              <ArrowUpRight
                aria-hidden
                className="text-gold-light transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </span>
            <span>
              <span className="block font-serif text-5xl leading-[0.95] md:text-[4.2vw]">{p.title}</span>
              <span className="mt-4 block text-paper/65">{p.body}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
