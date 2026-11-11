import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { EMAIL, team } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Team & Contact | Paradigm Consulting',
  description: 'Meet the Paradigm Consulting team and start a conversation about your project.',
}

export default function TeamPage() {
  return (
    <main id="main">
      <Navigation />

      <section className="border-b border-rule bg-paper pb-16 pt-40 md:pb-24 md:pt-48">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow mb-6 flex items-center gap-3 text-gold">
              <span aria-hidden className="h-px w-10 bg-gold" />
              Leadership
            </p>
            <h1 className="max-w-4xl font-serif text-5xl leading-[1.04] md:text-[80px]">
              Our Team
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              Get in touch with our team members.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="container-site">
          <ul className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-8">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06}>
                <li className="group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-paper-dim">
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <h2 className="mt-5 font-serif text-2xl">{m.name}</h2>
                  {m.email && (
                    <a
                      href={`mailto:${m.email}`}
                      className="link-underline mt-1 inline-block break-all text-sm text-muted hover:text-ink"
                    >
                      {m.email}
                    </a>
                  )}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="bg-ink py-24 text-paper md:py-32">
        <div className="container-site grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <p className="eyebrow mb-6 flex items-center gap-3 text-gold-light">
              <span aria-hidden className="h-px w-10 bg-gold-light" />
              Contact
            </p>
            <h2 className="font-serif text-4xl leading-[1.08] md:text-[56px]">
              Get in Touch
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5 md:col-start-8 md:self-end">
            <p className="leading-relaxed text-paper/65">
              General inquiries
            </p>
            <a
              href={`mailto:${EMAIL}?subject=Project%20inquiry`}
              className="group mt-8 flex items-center justify-between border-y border-white/20 py-6 font-serif text-2xl transition-colors hover:text-gold-light md:text-3xl"
            >
              {EMAIL}
              <ArrowUpRight aria-hidden className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
