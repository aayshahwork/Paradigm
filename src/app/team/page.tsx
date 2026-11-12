import type { Metadata } from 'next'
import Image from 'next/image'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { team } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the Paradigm Consulting team and start a conversation about your project.',
}

export default function TeamPage() {
  return (
    <>
      <main id="main">
        <div className="mx-auto w-full max-w-site">
        <section aria-labelledby="team-title" className="border-b border-line">
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
                  <h2 className="font-serif text-2xl leading-tight">{m.name}</h2>
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

        </div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
