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
          <p className="eyebrow flex items-center gap-3 text-gold-light"><span aria-hidden className="h-px w-10 bg-gold-light" />For Companies</p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.1] md:text-5xl">Work With Paradigm</h2>
          <p className="mt-5 max-w-md leading-relaxed text-paper/65">
            Tell us what you are working on and our team will be in touch.
          </p>
          <Link href="/team#contact" className="btn-light mt-9">
            Start a Project <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
        <div className="py-20 md:py-28 md:pl-14">
          <p className="eyebrow flex items-center gap-3 text-gold-light"><span aria-hidden className="h-px w-10 bg-gold-light" />For Berkeley Students</p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.1] md:text-5xl">Join Paradigm</h2>
          <p className="mt-5 max-w-md leading-relaxed text-paper/65">
            Interested in joining Paradigm? Reach out to hear about our next recruitment cycle.
          </p>
          <a href={`mailto:${EMAIL}?subject=Recruitment`} className="btn-ghost-light mt-9">
            Ask About Recruitment
          </a>
        </div>
      </div>
    </section>
  )
}
