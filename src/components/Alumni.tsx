import Reveal from './Reveal'
import LogoImage from './LogoImage'
import { alumni, alumniStats } from '@/lib/content'

export default function Alumni() {
  return (
    <section id="alumni" className="border-t border-rule bg-paper-dim py-24 md:py-36">
      <div className="container-site">
        <div className="grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <p className="eyebrow mb-6 text-gold">Alumni Destinations</p>
            <h2 className="font-serif text-4xl leading-[1.08] md:text-[56px]">
              Where our alumni <em>have ended up.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-4 leading-relaxed text-muted md:col-span-5 md:col-start-8 md:self-end">
            <p>
              With a 100% full-time job placement rate, our alumni have consistently secured roles at major companies in
              big tech, high finance, investment banking, and consulting.
            </p>
            <p>Our graduates have also been accepted into the most prestigious Master&rsquo;s/PhD programs in the world.</p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <dl className="mt-14 grid border-y border-rule sm:grid-cols-3">
            {alumniStats.map((o, i) => (
              <div
                key={o.label}
                className={`flex flex-col-reverse py-8 ${i > 0 ? 'border-t border-rule sm:border-l sm:border-t-0 sm:pl-8' : ''}`}
              >
                <dt className="eyebrow mt-3 text-muted">{o.label}</dt>
                <dd className="font-serif text-5xl md:text-6xl">{o.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-16 space-y-12 md:mt-20">
          {alumni.map((g) => (
            <Reveal key={g.group}>
              <div className="grid gap-6 md:grid-cols-12">
                <h3 className="eyebrow pt-2 text-ink md:col-span-2">{g.group}</h3>
                <ul className="grid grid-cols-3 border-l border-t border-rule sm:grid-cols-4 md:col-span-10 lg:grid-cols-6">
                  {g.logos.map((logo) => (
                    <li
                      key={logo.name}
                      className="group flex h-24 items-center justify-center border-b border-r border-rule bg-white/60 px-3 md:h-28"
                    >
                      <LogoImage
                        logo={logo}
                        base={34}
                        maxWidth={124}
                        className="transition duration-300 group-hover:scale-105"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
