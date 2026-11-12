import Image from 'next/image'

// Real Paradigm logo (light version for the navy page) beside the P mark.
export default function Logo({ height = 34 }: { height?: number }) {
  return (
    <span className="inline-flex items-center gap-3">
      <Image src="/icon-96.png" alt="" width={height} height={height} aria-hidden unoptimized />
      <Image
        src="/brand/logo-light.png"
        alt="Paradigm Consulting"
        width={Math.round((height * 1691) / 494)}
        height={height}
        unoptimized
      />
    </span>
  )
}
