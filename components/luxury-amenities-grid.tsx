import Image from 'next/image'
import { FadeIn } from '@/components/fade-in'

export type LuxuryAmenity = {
  title: string
  description: string
  image: string
  alt: string
  details: string[]
}

type LuxuryAmenitiesGridProps = {
  eyebrow?: string
  title: string
  description: string
  items: LuxuryAmenity[]
  note?: string
}

export function LuxuryAmenitiesGrid({
  eyebrow = 'THE DETAILS, CONSIDERED',
  title,
  description,
  items,
  note = 'Services and amenities are arranged to suit your itinerary and confirmed in your DM Promotions proposal.',
}: LuxuryAmenitiesGridProps) {
  return (
    <section className="bg-[#0d0d0d] py-20 sm:py-24" aria-labelledby="luxury-amenities-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <header className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#c9a55a]">
              {eyebrow}
            </p>
            <h2 id="luxury-amenities-title" className="mb-5 font-serif text-3xl font-semibold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="text-base leading-relaxed text-white/60 sm:text-lg">{description}</p>
          </header>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={(index % 3) * 70}>
              <article className="group h-full overflow-hidden rounded border border-white/10 bg-[#151515] transition-colors duration-300 hover:border-[#c9a55a]/45">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-black/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
                    Available by arrangement
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="mb-3 font-serif text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-white/60">{item.description}</p>
                  <ul className="flex flex-wrap gap-2" aria-label={`${item.title} details`}>
                    {item.details.map((detail) => (
                      <li key={detail} className="rounded-full border border-[#c9a55a]/25 px-2.5 py-1 text-[11px] text-[#e2c982]">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-white/40">{note}</p>
      </div>
    </section>
  )
}
