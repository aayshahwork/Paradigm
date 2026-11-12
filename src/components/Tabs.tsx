'use client'

import { useRef, type KeyboardEvent, type ReactNode } from 'react'

// Valid, space-free id for a tab, so panels can reference it.
export const tabId = (idBase: string, value: string) =>
  `${idBase}-tab-${value.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

// WAI-ARIA tablist with roving tabindex: Left/Right move and select,
// Home/End jump to the ends. The panel should use id `${idBase}-panel`.
export default function Tabs<T extends string>({
  options,
  value,
  onChange,
  label,
  idBase,
  className = '',
}: {
  options: { value: T; label: ReactNode }[]
  value: T
  onChange: (v: T) => void
  label: string
  idBase: string
  className?: string
}) {
  const refs = useRef<(HTMLButtonElement | null)[]>([])

  const onKeyDown = (e: KeyboardEvent, i: number) => {
    const n = options.length
    const keys: Record<string, number> = {
      ArrowRight: (i + 1) % n,
      ArrowDown: (i + 1) % n,
      ArrowLeft: (i - 1 + n) % n,
      ArrowUp: (i - 1 + n) % n,
      Home: 0,
      End: n - 1,
    }
    const next = keys[e.key]
    if (next === undefined) return
    e.preventDefault()
    onChange(options[next].value)
    refs.current[next]?.focus()
  }

  return (
    <div role="tablist" aria-label={label} className={`flex flex-wrap gap-2 ${className}`}>
      {options.map((o, i) => {
        const selected = o.value === value
        return (
          <button
            key={o.value}
            ref={(el) => {
              refs.current[i] = el
            }}
            role="tab"
            id={tabId(idBase, o.value)}
            aria-selected={selected}
            aria-controls={`${idBase}-panel`}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(o.value)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={`inline-flex items-center gap-2 border px-4 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200 ${
              selected ? 'border-paper bg-paper text-ink-900' : 'border-line text-paper/70 hover:border-paper/40 hover:text-paper'
            }`}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}
