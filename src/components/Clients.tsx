import Reveal from './Reveal'
import LogoImage from './LogoImage'
import { strategyClients, technologyClients, type Logo } from '@/lib/content'

function Practice({ title, logos }: { title: string; logos: Logo[] }) {
  return (
    <div>
      <h3 className="border-b border-ink pb-3 font-serif text-2xl">{title}</h3>
      <ul className="grid grid-cols-2 sm:grid-cols-3">
        {logos.map((logo) => (
          <li
            key={logo.name}
            className="group flex h-32 items-center justify-center border-b border-rule px-4 md:h-36"
          >
            <LogoImage
              logo={logo}
              base={44}
              maxWidth={150}
              className="transition duration-300 group-hover:scale-105"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Clients() {
  return (
    <section id="clients" className="bg-paper py-24 md:py-36">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow mb-6 text-gold">Clients</p>
          <h2 className="font-serif text-4xl leading-[1.08] md:text-[56px]">
            Previous clients &amp; <em>project scopes.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-14 md:mt-20 md:grid-cols-2 md:gap-16">
          <Reveal>
            <Practice title="Strategic Consulting" logos={strategyClients} />
          </Reveal>
          <Reveal delay={0.1}>
            <Practice title="Technical Consulting" logos={technologyClients} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
