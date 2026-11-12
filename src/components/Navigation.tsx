'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Briefcase, GraduationCap, Layers, Mail, Menu, Users, X, type LucideIcon } from 'lucide-react'
import Wordmark from './Wordmark'
import { EMAIL } from '@/lib/content'

const links: { href: string; label: string; icon: LucideIcon }[] = [
  { href: '/clients', label: 'Clients', icon: Briefcase },
  { href: '/services', label: 'Services', icon: Layers },
  { href: '/alumni', label: 'Alumni', icon: GraduationCap },
  { href: '/team', label: 'Team', icon: Users },
]

const contactHref = `mailto:${EMAIL}?subject=Project%20inquiry`

function RailLink({
  href,
  label,
  icon: Icon,
  accent = false,
  active = false,
}: {
  href: string
  label: string
  icon: LucideIcon
  accent?: boolean
  active?: boolean
}) {
  const cls = `group relative flex h-10 w-10 items-center justify-center transition-colors duration-200 ${
    accent || active ? 'text-gold-light hover:text-paper' : 'text-paper/60 hover:text-paper'
  }`
  const inner = (
    <>
      {active && <span aria-hidden className="absolute -left-3 top-2 h-6 w-[2px] bg-gold-light" />}
      <Icon size={18} strokeWidth={1.5} aria-hidden />
      <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap border border-line bg-ink-900 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-paper/85 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
        {label}
      </span>
    </>
  )
  return href.startsWith('mailto:') ? (
    <a href={href} aria-label={label} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} aria-label={label} aria-current={active ? 'page' : undefined} className={cls}>
      {inner}
    </Link>
  )
}

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
    <>
      {/* Desktop: fixed icon rail */}
      <header className="fixed inset-y-0 left-0 z-40 hidden w-16 flex-col items-center border-r border-line bg-ink-900 py-6 md:flex">
        <Link href="/" aria-label="Paradigm Consulting home" className="flex flex-col items-center gap-1.5">
          <span aria-hidden className="double-rule !h-[5px] !w-7 !border-b-[1.5px] !border-t-[1.5px] text-paper" />
          <span className="font-serif text-xl leading-none">P</span>
        </Link>
        <nav aria-label="Main" className="flex flex-1 flex-col items-center justify-center gap-5">
          {links.map((l) => (
            <RailLink key={l.href} {...l} active={isActive(l.href)} />
          ))}
          <RailLink href={`mailto:${EMAIL}`} label="Email" icon={Mail} />
        </nav>
        <RailLink href={contactHref} label="Work with us" icon={ArrowUpRight} accent />
      </header>

      {/* Mobile: top bar */}
      <header className="sticky top-0 z-40 border-b border-line bg-ink-900/95 backdrop-blur md:hidden">
        <div className="cell flex h-16 items-center justify-between">
          <Link href="/" aria-label="Paradigm Consulting home" onClick={() => setOpen(false)}>
            <Wordmark />
          </Link>
          <button
            className="-mr-2 p-2"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>
        {open && (
          <nav id="mobile-menu" aria-label="Main" className="border-t border-line">
            <ul className="cell py-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(l.href) ? 'page' : undefined}
                    className={`flex items-center justify-between border-b border-line py-4 font-serif text-2xl ${
                      isActive(l.href) ? 'text-gold-light' : ''
                    }`}
                  >
                    {l.label}
                    <l.icon size={18} strokeWidth={1.5} aria-hidden className="text-paper/50" />
                  </Link>
                </li>
              ))}
              <li>
                <a href={contactHref} className="flex items-center justify-between py-4 font-serif text-2xl text-gold-light">
                  Work with us <ArrowUpRight size={18} aria-hidden />
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  )
}
