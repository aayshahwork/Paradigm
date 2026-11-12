import Image from 'next/image'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { strategyClients, technologyClients, type Logo } from '@/lib/content'
import { sectionNumber } from '@/lib/sections'

// Infinite logo strip. The list is rendered twice and slid by half its width;
// the copy is hidden from assistive tech so each client is announced once.
function Marquee({ title, logos, reverse }: { title: string; logos: Logo[]; reverse?: boolean }) {
  const row = (copy: boolean) => (
    <ul aria-hidden={copy || undefined} className="flex shrink-0 gap-3 pr-3">
      {logos.map((logo) => (
        <li key={logo.name} className="flex h-24 w-48 shrink-0 items-center justify-center p-5 md:h-28 md:w-56">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo.src} alt={copy ? '' : logo.name} className="logo-mono max-h-12 w-full max-w-[140px] object-contain opacity-80" />
        </li>
      ))}
    </ul>
  )
  // Repeat enough times that a short list still overflows wide screens.
  return (
    <div className="border-t border-line">
      <h3 className="cell py-4 font-mono text-xs uppercase tracking-[0.18em] text-paper/55">{title}</h3>
      <div className="group overflow-hidden pb-6 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
        <div
          className={`flex w-max animate-marquee group-hover:[animation-play-state:paused] ${
            reverse ? '[animation-direction:reverse]' : ''
          }`}
        >
          {row(false)}
          {row(true)}
          {row(true)}
          {row(true)}
        </div>
      </div>
    </div>
  )
}

export default function Clients() {
  return (
    <section id="clients" aria-labelledby="clients-title" className="border-b border-line">
      <div className="grid md:grid-cols-[minmax(0,42%)_1fr]">
        <div className="cell flex flex-col border-b border-line py-10 md:border-b-0 md:border-r md:py-14">
          <Reveal>
            <SectionLabel n={sectionNumber('clients')} label="Who we work with" />
            <h2 id="clients-title" className="mt-8 font-serif text-5xl leading-[0.9] md:text-[5vw]">
              Our Clients
            </h2>
            <p className="mt-8 max-w-sm text-lg leading-relaxed text-paper/75">
              Fortune 500 teams and fast-growing companies, across both practices.
            </p>
          </Reveal>
        </div>
        <div className="relative min-h-[260px] md:min-h-[420px]">
          <Image
            src="/whoweare.jpg"
            alt="Paradigm members at Doe Library, UC Berkeley"
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover opacity-80"
          />
          <div aria-hidden className="absolute inset-0 bg-ink-900/25" />
        </div>
      </div>

      <Marquee title="Strategy" logos={strategyClients} />
      <Marquee title="Technology" logos={technologyClients} reverse />
    </section>
  )
}
