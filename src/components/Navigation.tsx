'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { sections } from '@/lib/sections'

// Highlights the section currently crossing a band just below the sticky header.
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null)
  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter((el): el is HTMLElement => !!el)
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
          // Scrolled back above the first section: clear the highlight.
          else if (e.boundingClientRect.top > 0) setActive((a) => (a === e.target.id ? null : a))
        }
      },
      { rootMargin: '-80px 0px -60% 0px' },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return active
}

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const linkClass = (id: string) =>
    `text-sm font-medium tracking-wide transition-colors hover:text-paper ${
      active === id ? 'text-gold-light' : 'text-paper/70'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink-900/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-site items-center justify-between px-6 md:px-10">
        <a href="#top" aria-label="Paradigm Consulting, back to top" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} aria-current={active === s.id ? 'location' : undefined} className={linkClass(s.id)}>
              {s.label}
            </a>
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
            {[...sections, { id: 'contact', label: 'Contact' }].map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === s.id ? 'location' : undefined}
                  className={`block border-b border-line py-4 text-lg ${active === s.id ? 'text-gold-light' : ''}`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
