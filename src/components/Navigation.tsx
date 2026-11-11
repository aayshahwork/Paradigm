'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Wordmark from './Wordmark'

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#clients', label: 'Clients' },
  { href: '/#alumni', label: 'Alumni' },
  { href: '/team', label: 'Team' },
]

export default function Navigation() {
  const pathname = usePathname()
  const overHero = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || !overHero || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? 'border-b border-rule bg-paper/95 text-ink backdrop-blur' : 'text-white'
      }`}
    >
      <nav className="container-site flex h-[72px] items-center justify-between">
        <Link href="/" aria-label="Paradigm Consulting home" onClick={() => setOpen(false)}>
          <Wordmark />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="link-underline text-[13px] font-medium tracking-wide">
              {l.label}
            </Link>
          ))}
          <Link
            href="/team#contact"
            className={`px-4 py-2 text-[13px] font-medium tracking-wide transition-colors ${
              solid ? 'bg-ink text-paper hover:bg-ink-700' : 'border border-white/50 hover:bg-white hover:text-ink'
            }`}
          >
            Work With Us
          </Link>
        </div>

        <button
          className="md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-rule bg-paper md:hidden">
          <div className="container-site flex flex-col py-4">
            {[...links, { href: '/team#contact', label: 'Work With Us' }].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-rule py-4 font-serif text-2xl last:border-0"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
