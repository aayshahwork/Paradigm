import Image from 'next/image'
import Reveal from './Reveal'
import Marker from './Marker'
import LogoImage from './LogoImage'
import { strategyClients, technologyClients } from '@/lib/content'

export default function Clients() {
  const logos = [...strategyClients, ...technologyClients]
  return (
    <section id="clients" aria-labelledby="clients-title" className="border-b border-line">
      <div className="grid md:grid-cols-[minmax(0,42%)_1fr]">
        <div className="cell flex flex-col border-b border-line py-10 md:border-b-0 md:border-r md:py-14">
          <Marker n="03" />
          <Reveal>
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

      {/* Logo strip: hairline cells, slow loop, pauses on hover */}
      <div className="overflow-hidden border-t border-line">
        <ul
          aria-label="Previous clients"
          className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:flex-wrap"
        >
          {[...logos, ...logos].map((logo, i) => (
            <li
              key={i}
              aria-hidden={i >= logos.length || undefined}
              className={`flex h-28 w-[46vw] shrink-0 items-center justify-center border-r border-line sm:w-[30vw] md:h-36 lg:w-[18vw] ${
                i >= logos.length ? 'motion-reduce:hidden' : ''
              }`}
            >
              <LogoImage logo={logo} base={30} maxWidth={130} className="logo-mono opacity-75" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
