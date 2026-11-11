// Typeset version of the Paradigm logo (double rule over spaced serif caps),
// so it stays crisp and can switch color on dark and light backgrounds.
export default function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col items-stretch leading-none ${className}`}>
      <span className="double-rule mb-1.5 !h-[5px] !border-t-[1.5px] !border-b-[1.5px]" aria-hidden />
      <span className="font-serif text-[17px] font-medium tracking-[0.32em] pl-[0.32em]">PARADIGM</span>
      <span className="mt-0.5 font-serif text-[9.5px] tracking-[0.42em] pl-[0.42em] text-center opacity-80">
        CONSULTING
      </span>
    </span>
  )
}
