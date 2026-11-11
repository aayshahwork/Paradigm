import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { EMAIL } from '@/lib/content'

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <Image src="/aboutus.jpg" alt="" fill sizes="100vw" className="object-cover object-[50%_30%] opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
      <div className="container-site relative grid gap-px py-0 md:grid-cols-2">
        <div className="border-b border-white/15 py-20 md:border-b-0 md:border-r md:py-28 md:pr-14">
          <p className="eyebrow text-gold-light">For companies</p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.1] md:text-5xl">Have a problem worth solving?</h2>
          <p className="mt-5 max-w-md leading-relaxed text-paper/65">
            Tell us what you are working on and our team will be in touch.
          </p>
          <Link href="/team#contact" className="btn-light mt-9">
            Start a project <ArrowRight size={16} />
          </Link>
        </div>
        <div className="py-20 md:py-28 md:pl-14">
          <p className="eyebrow text-gold-light">For Berkeley students</p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.1] md:text-5xl">Build the work, not just the deck.</h2>
          <p className="mt-5 max-w-md leading-relaxed text-paper/65">
            Interested in joining Paradigm? Reach out to hear about our next recruitment cycle.
          </p>
          <a href={`mailto:${EMAIL}?subject=Recruitment`} className="btn-ghost-light mt-9">
            Ask about recruitment
          </a>
        </div>
      </div>
    </section>
  )
}
