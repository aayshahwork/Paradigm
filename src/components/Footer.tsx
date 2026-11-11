import Link from 'next/link'
import Wordmark from './Wordmark'
import { EMAIL, footerStats } from '@/lib/content'

const cols = [
  {
    title: 'Firm',
    links: [
      { href: '/#about', label: 'About' },
      { href: '/#services', label: 'Services' },
      { href: '/#clients', label: 'Clients' },
      { href: '/#alumni', label: 'Alumni' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { href: '/team', label: 'Team' },
      { href: '/team#contact', label: 'Work with us' },
      { href: `mailto:${EMAIL}?subject=Recruitment`, label: 'Recruitment' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-paper">
      <div className="container-site py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/55">Alpha Epsilon Zeta &bull; UC Berkeley</p>
            <dl className="mt-8 grid max-w-sm grid-cols-4 gap-4">
              {footerStats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse">
                  <dt className="eyebrow mt-1 !text-[9px] text-paper/40">{s.label}</dt>
                  <dd className="font-serif text-2xl text-paper">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <p className="eyebrow text-paper/40">{c.title}</p>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="link-underline text-sm text-paper/80 hover:text-paper">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-3">
            <p className="eyebrow text-paper/40">Contact</p>
            <a href={`mailto:${EMAIL}`} className="link-underline mt-5 inline-block text-sm text-paper/80 hover:text-paper">
              {EMAIL}
            </a>
            <p className="mt-3 text-sm text-paper/55">Berkeley, California</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-paper/40 md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} Paradigm Consulting. All rights reserved.</p>
          <p className="max-w-xl md:text-right">
            Paradigm Consulting is a student group acting independently of the University of California. We take full
            responsibility for our organization and this website.
          </p>
        </div>
      </div>
    </footer>
  )
}
