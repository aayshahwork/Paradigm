'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { EMAIL } from '@/lib/content'

const interests = ['Working with Paradigm on a project', 'Partnering with us', 'Other questions'] as const

type Values = { interest: string; name: string; email: string; phone: string; message: string }

const field =
  'mt-2 w-full border border-line bg-ink-800 px-4 py-3 text-paper placeholder:text-paper/35 focus:border-gold-light focus:outline-none'
const label = 'block text-sm font-medium text-paper/80'

// Shared contact section, used at the bottom of every page. There is no
// server, so submitting opens the visitor's mail app with the message filled in.
export default function Contact() {
  const [sent, setSent] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({ defaultValues: { interest: interests[0] } })

  const onSubmit = (v: Values) => {
    const body = [`Name: ${v.name}`, `Email: ${v.email}`, ...(v.phone ? [`Phone: ${v.phone}`] : []), '', v.message]
      .join('\n')
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(v.interest)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line bg-ink-800">
      <div className="mx-auto w-full max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <p className="text-sm text-gold-light">Companies, partners, anyone</p>
        <h2 id="contact-title" className="mt-2 font-serif text-4xl md:text-5xl">
          Contact us
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-10 space-y-6">
          <fieldset>
            <legend className={label}>I am interested in</legend>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:gap-6">
              {interests.map((i) => (
                <label key={i} className="flex items-center gap-2 text-paper/85">
                  <input type="radio" value={i} {...register('interest')} className="h-4 w-4 accent-[#FDB515]" />
                  {i}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="c-name" className={label}>
                Name <span className="text-gold-light">*</span>
              </label>
              <input id="c-name" autoComplete="name" className={field} {...register('name', { required: 'Please enter your name' })} />
              {errors.name && <p className="mt-1 text-sm text-red-300">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="c-email" className={label}>
                Email <span className="text-gold-light">*</span>
              </label>
              <input
                id="c-email"
                type="email"
                autoComplete="email"
                className={field}
                {...register('email', {
                  required: 'Please enter your email',
                  pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address' },
                })}
              />
              {errors.email && <p className="mt-1 text-sm text-red-300">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="c-phone" className={label}>
              Phone <span className="text-paper/45">(optional)</span>
            </label>
            <input id="c-phone" type="tel" autoComplete="tel" className={field} {...register('phone')} />
          </div>

          <div>
            <label htmlFor="c-message" className={label}>
              Message <span className="text-gold-light">*</span>
            </label>
            <textarea
              id="c-message"
              rows={5}
              className={field}
              {...register('message', { required: 'Please enter a message' })}
            />
            {errors.message && <p className="mt-1 text-sm text-red-300">{errors.message.message}</p>}
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <button type="submit" className="btn-light">
              Send message
            </button>
            <a href={`mailto:${EMAIL}`} className="link-underline text-paper/70 hover:text-paper">
              {EMAIL}
            </a>
          </div>
          {sent && (
            <p role="status" className="text-sm text-paper/70">
              Your email app should have opened with your message. If not, write to us at {EMAIL}.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
