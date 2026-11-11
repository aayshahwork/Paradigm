import Reveal from './Reveal'
import { services } from '@/lib/content'

export default function Services() {
  return (
    <section id="services" className="bg-ink py-24 text-paper md:py-36">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow mb-6 flex items-center gap-3 text-gold-light">
            <span aria-hidden className="h-px w-10 bg-gold-light" />
            What We Do
          </p>
          <div className="grid gap-8 md:grid-cols-12">
            <h2 className="font-serif text-4xl leading-[1.08] md:col-span-7 md:text-[56px]">
              Our Services
            </h2>
            <p className="max-w-md leading-relaxed text-paper/65 md:col-span-4 md:col-start-9 md:self-end">
              Below are examples of our capabilities and services that we have provided for clients in the past.
              Paradigm prides itself on its multidisciplinary approach that allows us to meet the unique needs of our
              clients.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px bg-white/15 md:mt-24 md:grid-cols-2">
          {[services.strategy, services.technology].map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className="bg-ink">
              <div className={`h-full pb-12 pt-10 md:py-12 ${i === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <h3 className="font-serif text-4xl">{s.title}</h3>
                <ul className="mt-10">
                  {s.items.map((item) => (
                    <li key={item} className="border-t border-white/15 py-4 text-[15px] last:border-b">
                      {item}
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
