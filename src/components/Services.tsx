import { services } from '@/lib/content'

function Group({ id, title, items }: { id: string; title: string; items: { name: string; description: string }[] }) {
  return (
    <section aria-labelledby={id} className="border-t border-line">
      <div className="mx-auto w-full max-w-site px-6 py-14 md:px-10 md:py-20">
        <h2 id={id} className="font-serif text-4xl md:text-5xl">
          {title}
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <li key={s.name} className="border border-line bg-ink-800 p-6 md:p-7">
              <h3 className="font-serif text-2xl leading-tight">{s.name}</h3>
              <p className="mt-3 leading-relaxed text-paper/70">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <section aria-labelledby="services-title">
        <div className="mx-auto w-full max-w-site px-6 py-14 md:px-10 md:py-20">
          <h1 id="services-title" className="font-serif text-5xl md:text-6xl">
            Services
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/75">
            Two practices. One team that can do both.
          </p>
        </div>
      </section>
      <Group id="strategy" title={services.strategy.title} items={services.strategy.items} />
      <Group id="technology" title={services.technology.title} items={services.technology.items} />
    </>
  )
}
