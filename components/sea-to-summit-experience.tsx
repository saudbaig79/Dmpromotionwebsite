import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'

const stages = [
  {
    label: 'STAGE 01',
    title: 'Cruise the Mediterranean',
    subtitle: 'Private yacht days',
    price: '€9,673',
    priceLabel: 'From',
    duration: '3–7 days',
    image: '/images/yacht-charter.png',
    alt: 'Luxury motor yacht cruising the Mediterranean',
    description: 'Set out along the Mediterranean coastline with a private charter, tailored route, spacious decks, and attentive crew.',
    details: ['Private yacht charter', 'Crew and tailored route', 'Gourmet dining by arrangement'],
  },
  {
    label: 'THE CONNECTION',
    title: 'Yacht to Slopes in One Hour',
    subtitle: 'Helicopter transfer',
    price: 'Included',
    priceLabel: 'Transfer',
    duration: 'Approx. 1 hour',
    image: '/images/helicopter-transfer.png',
    alt: 'Helicopter transfer over the mountains toward Sierra Nevada',
    description: 'Connect Puerto Banús and Marbella with Sierra Nevada by helicopter, turning the journey into part of the experience.',
    details: ['Direct scenic transfer', 'Marbella to Sierra Nevada', 'Coordinated itinerary'],
  },
  {
    label: 'STAGE 02',
    title: 'Ski the Slopes of Sierra Nevada',
    subtitle: 'Five-star mountain stay',
    price: '€2,500/day',
    priceLabel: 'From',
    duration: '3–10 days',
    image: '/images/ski-villa-sunset.jpg',
    alt: 'Luxury Sierra Nevada ski villa overlooking the mountains at sunset',
    description: 'Settle into a slope-side villa and build each day around skiing, private guiding, Alpine dining, and restorative downtime.',
    details: ['Luxury villa for up to 8 guests', 'Private concierge by arrangement', 'World-class resort access'],
  },
]

type SeaToSummitExperienceProps = {
  compact?: boolean
}

export function SeaToSummitExperience({ compact = false }: SeaToSummitExperienceProps) {
  return (
    <section className={`bg-[#0d0d0d] ${compact ? 'py-16 sm:py-20' : 'py-20 sm:py-24'}`} aria-labelledby="sea-to-summit-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <header className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#c9a55a]">THE SIGNATURE ITINERARY</p>
            <h2 id="sea-to-summit-title" className="mb-5 font-serif text-3xl font-semibold text-white sm:text-4xl">
              Yacht to Slopes. Sea to Summit.
            </h2>
            <p className="text-base leading-relaxed text-white/60 sm:text-lg">
              Combine customizable Mediterranean yacht days with a helicopter transfer and private Sierra Nevada villa days. Choose the rhythm of your stay; DM Promotions will shape the itinerary around it.
            </p>
          </header>
        </FadeIn>

        <div className="grid gap-5 lg:grid-cols-3">
          {stages.map((stage, index) => (
            <FadeIn key={stage.label} delay={index * 90}>
              <article className="h-full overflow-hidden rounded border border-white/10 bg-[#151515]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={stage.image}
                    alt={stage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                    {stage.label}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#c9a55a]">{stage.subtitle}</p>
                  <h3 className="mb-4 font-serif text-xl font-semibold text-white">{stage.title}</h3>
                  <div className="mb-4 flex items-end justify-between gap-3 border-y border-white/10 py-4">
                    <div>
                      <p className="mb-1 text-[10px] uppercase tracking-[0.18em] text-white/40">{stage.priceLabel}</p>
                      <p className="font-serif text-xl text-[#e2c982]">{stage.price}</p>
                    </div>
                    <p className="text-sm text-white/50">{stage.duration}</p>
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-white/60">{stage.description}</p>
                  {!compact && (
                    <ul className="flex flex-col gap-2.5" aria-label={`${stage.title} details`}>
                      {stage.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2.5 text-sm text-white/65">
                          <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#c9a55a]" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="max-w-3xl text-xs leading-relaxed text-white/40">
            Starting figures apply to separate itinerary stages, not a combined total. Final route, dates, inclusions, and availability are confirmed in a tailored DM Promotions proposal.
          </p>
          <Link
            href="/contact"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded border border-[#c9a55a] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#e2c982] transition-colors hover:bg-[#c9a55a] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2c982]"
          >
            Plan your itinerary
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
