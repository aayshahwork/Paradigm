'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  { href: '/clients', label: 'Clients' },
  { href: '/services', label: 'Services' },
  { href: '/alumni', label: 'Alumni' },
  { href: '/team', label: 'Team' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink-900/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-site items-center justify-between px-6 md:px-10">
        <Link href="/" aria-label="Paradigm Consulting home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? 'page' : undefined}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-paper ${
                isActive(l.href) ? 'text-gold-light' : 'text-paper/70'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href="#contact" className="btn-light !px-4 !py-2">
            Contact
          </a>
        </nav>

        <button
          className="-mr-2 p-2 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-line md:hidden">
          <ul className="mx-auto w-full max-w-site px-6 py-2">
            {[...links, { href: '#contact', label: 'Contact' }].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(l.href) ? 'page' : undefined}
                  className={`block border-b border-line py-4 text-lg ${isActive(l.href) ? 'text-gold-light' : ''}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
