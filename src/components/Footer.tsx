import Link from 'next/link'
import Wordmark from './Wordmark'
import { EMAIL } from '@/lib/content'

const sections = [
  { href: '/clients', label: 'Clients' },
  { href: '/services', label: 'Services' },
  { href: '/alumni', label: 'Alumni' },
  { href: '/team', label: 'Team' },
]

export default function Footer() {
  return (
    <footer>
      <div className="grid border-b border-line md:grid-cols-[minmax(0,42%)_1fr_1fr]">
        <div className="cell py-10 md:border-r md:border-line md:py-12">
          <Wordmark />
          <p className="mt-6 text-sm text-paper/60">Alpha Epsilon Zeta &bull; UC Berkeley</p>
        </div>
        <div className="cell border-t border-line py-10 md:border-r md:border-t-0 md:py-12">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/50">Sections</p>
          <ul className="mt-5 space-y-3">
            {sections.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="link-underline text-sm text-paper/80 hover:text-paper">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="cell border-t border-line py-10 md:border-t-0 md:py-12">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-paper/50">Contact</p>
          <a href={`mailto:${EMAIL}`} className="link-underline mt-5 inline-block text-sm text-paper/80 hover:text-paper">
            {EMAIL}
          </a>
          <p className="mt-3 text-sm text-paper/60">Berkeley, California</p>
        </div>
      </div>

      <p aria-hidden className="cell overflow-hidden border-b border-line py-8 font-serif text-[13vw] italic leading-[0.9] text-paper/90 md:text-[7.5vw]">
        Built at Berkeley.
      </p>

      <div className="cell flex flex-col gap-3 py-8 text-xs text-paper/55 md:flex-row md:justify-between">
        <p>&copy; {new Date().getFullYear()} Paradigm Consulting. All rights reserved.</p>
        <p className="max-w-xl md:text-right">
          Paradigm Consulting is a student group acting independently of the University of California. We take full
          responsibility for our organization and this website.
        </p>
      </div>
    </footer>
  )
}
