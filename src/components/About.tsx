import Image from 'next/image'
import Reveal from './Reveal'
import { aboutStats, features } from '@/lib/content'

export default function About() {
  return (
    <section id="about" className="bg-paper py-24 md:py-36">
      <div className="container-site">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-6">
            <p className="eyebrow mb-6 text-gold">About Paradigm</p>
            <h2 className="font-serif text-4xl leading-[1.08] md:text-[56px]">
              Student-run consulting at UC Berkeley <em>since 2003.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5 md:col-start-8 md:self-end">
            <p className="text-lg leading-relaxed text-ink/80">
              The premier student-run consulting organization at UC Berkeley, combining rigorous analytical frameworks
              with cutting-edge technological expertise to deliver exceptional strategic and technical consulting
              services.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <dl className="mt-16 grid grid-cols-2 border-y border-rule sm:grid-cols-3 md:mt-20 lg:grid-cols-5">
            {aboutStats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col-reverse border-rule py-7 pr-4 ${i > 0 ? 'lg:border-l lg:pl-8' : ''} ${
                  i % 2 === 1 ? 'border-l pl-5 sm:border-l-0 sm:pl-0' : ''
                }`}
              >
                <dt className="eyebrow mt-2 text-muted">{s.label}</dt>
                <dd className="font-serif text-4xl md:text-5xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-20 grid gap-10 md:mt-24 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/whoweare.jpg"
                alt="Paradigm members at Doe Library, UC Berkeley"
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="md:col-span-5">
            {features.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="border-t border-rule py-7">
                  <div className="flex gap-6">
                    <span className="font-serif text-sm text-gold">0{i + 1}</span>
                    <div>
                      <h3 className="font-serif text-2xl">{p.title}</h3>
                      <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
