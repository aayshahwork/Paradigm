import LogoImage from './LogoImage'
import { strategyClients, technologyClients } from '@/lib/content'

export default function ClientMarquee() {
  const logos = [...strategyClients, ...technologyClients]
  const loop = [...logos, ...logos]
  return (
    <section aria-label="Previous clients" className="border-b border-rule bg-paper py-9">
      <div className="container-site flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-12">
        <p className="eyebrow shrink-0 text-muted">Previous clients</p>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <ul className="flex w-max animate-marquee items-center gap-16 hover:[animation-play-state:paused]">
            {loop.map((logo, i) => (
              <li key={i} aria-hidden={i >= logos.length} className="shrink-0">
                <LogoImage
                  logo={logo}
                  base={30}
                  maxWidth={130}
                  className="opacity-80 transition duration-300 hover:opacity-100"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
