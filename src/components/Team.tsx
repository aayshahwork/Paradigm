import Image from 'next/image'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { team } from '@/lib/content'
import { sectionNumber } from '@/lib/sections'

export default function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="border-b border-line">
      <div className="cell border-b border-line py-10 md:py-14">
        <Reveal>
          <SectionLabel n={sectionNumber('team')} label="Leadership" />
          <h2 id="team-title" className="mt-8 font-serif text-5xl leading-[0.9] md:text-[5vw]">
            Our Team
          </h2>
        </Reveal>
      </div>

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
                className="object-cover"
              />
            </div>
            <div className="p-5 md:p-6">
              <h3 className="font-serif text-2xl leading-tight">{m.name}</h3>
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
  )
}
