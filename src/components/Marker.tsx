// Numbered section marker. The two short bars echo the double rule in the
// Paradigm wordmark.
export default function Marker({ n, label }: { n: string; label?: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs text-paper/55">
      <span aria-hidden className="flex w-3 flex-col gap-[3px]">
        <span className="h-[2px] w-full bg-gold-light" />
        <span className="h-[2px] w-2/3 bg-gold" />
      </span>
      <span>{n}</span>
      {label && <span className="uppercase tracking-[0.18em]">{label}</span>}
    </div>
  )
}
