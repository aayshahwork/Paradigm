import Image from 'next/image'
import Reveal from './Reveal'
import { strategyClients, technologyClients, type Logo } from '@/lib/content'

function Practice({ title, logos, divider }: { title: string; logos: Logo[]; divider?: boolean }) {
  return (
    <div className={`border-line ${divider ? 'border-t md:border-l md:border-t-0' : ''}`}>
      <h2 className="cell border-b border-line py-4 text-sm font-medium text-paper/70">{title}</h2>
      <ul className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 md:p-6">
        {logos.map((logo) => (
          <li key={logo.name} className="flex h-28 items-center justify-center rounded-sm bg-white p-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo.src} alt={logo.name} className="max-h-12 w-full max-w-[140px] object-contain" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Clients() {
  return (
    <section aria-labelledby="clients-title" className="border-b border-line">
      <div className="grid md:grid-cols-[minmax(0,42%)_1fr]">
        <div className="cell flex flex-col border-b border-line py-10 md:border-b-0 md:border-r md:py-14">
          <Reveal>
            <h1 id="clients-title" className="mt-8 font-serif text-5xl leading-[0.9] md:text-[5vw]">
              Our Clients
            </h1>
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

      <div className="grid border-t border-line md:grid-cols-2">
        <Practice title="Strategy" logos={strategyClients} />
        <Practice title="Technology" logos={technologyClients} divider />
      </div>
    </section>
  )
}
