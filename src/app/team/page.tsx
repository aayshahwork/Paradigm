import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import Marker from '@/components/Marker'
import { EMAIL, team } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Team & Contact | Paradigm Consulting',
  description: 'Meet the Paradigm Consulting team and start a conversation about your project.',
}

export default function TeamPage() {
  return (
    <>
      <main id="main">
        <section aria-labelledby="team-title" className="border-b border-line">
          <div className="cell border-b border-line py-4">
            <Marker n="01" label="Leadership" />
          </div>
          <Reveal className="cell py-14 md:py-20">
            <h1 id="team-title" className="font-serif text-[15vw] leading-[0.88] md:text-[7vw]">
              Our Team
            </h1>
          </Reveal>
        </section>

        <section aria-label="Team members" className="border-b border-line">
          <ul className="grid grid-cols-2 md:grid-cols-4">
            {team.map((m, i) => (
              <li
                key={m.name}
                className={`group border-line ${i % 2 === 1 ? 'border-l' : ''} ${i > 1 ? 'border-t md:border-t-0' : ''} ${
                  i === 2 ? 'md:border-l' : ''
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden border-b border-line">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <p className="font-mono text-xs text-paper/45">0{i + 1}</p>
                  <h2 className="mt-2 font-serif text-2xl leading-tight">{m.name}</h2>
                  {m.email && (
                    <a
                      href={`mailto:${m.email}`}
                      className="link-underline mt-2 inline-block break-all text-sm text-paper/65 hover:text-paper"
                    >
                      {m.email}
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="border-b border-line">
          <div className="cell border-b border-line py-4">
            <Marker n="02" label="Contact" />
          </div>
          <a
            href={`mailto:${EMAIL}?subject=Project%20inquiry`}
            className="group cell flex flex-col gap-8 py-14 transition-colors duration-300 hover:bg-white/[0.03] md:flex-row md:items-end md:justify-between md:py-20"
          >
            <span>
              <span id="contact-title" className="block font-serif text-5xl leading-[0.95] md:text-[4.2vw]">
                Get in touch
              </span>
              <span className="mt-4 block break-all text-paper/70">{EMAIL}</span>
            </span>
            <ArrowUpRight
              aria-hidden
              size={36}
              className="text-gold-light transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}
