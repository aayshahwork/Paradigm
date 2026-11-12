// Numbered section marker ("01 / About"), shown above each section title.
export default function SectionLabel({ n, label }: { n: number; label: string }) {
  return (
    <p aria-hidden className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-paper/55">
      <span className="text-gold-light">{String(n).padStart(2, '0')}</span>
      <span className="h-px w-8 bg-line" />
      {label}
    </p>
  )
}
