import Link from 'next/link'
import Logo from './Logo'
import { EMAIL } from '@/lib/content'

const sections = [
  { href: '/clients', label: 'Clients' },
  { href: '/services', label: 'Services' },
  { href: '/alumni', label: 'Alumni' },
  { href: '/team', label: 'Team' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-site px-6 py-12 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo height={40} />
            <p className="mt-4 text-sm text-paper/60">Alpha Epsilon Zeta &bull; UC Berkeley</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {sections.map((l) => (
              <Link key={l.href} href={l.href} className="link-underline text-sm text-paper/80 hover:text-paper">
                {l.label}
              </Link>
            ))}
            <a href={`mailto:${EMAIL}`} className="link-underline text-sm text-paper/80 hover:text-paper">
              {EMAIL}
            </a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-xs text-paper/55 md:flex-row md:justify-between">
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
