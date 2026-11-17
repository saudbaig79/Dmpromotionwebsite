import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'

export type ExperiencePackage = {
  title: string
  eyebrow: string
  price: string
  priceLabel?: string
  duration: string
  description: string
  image: string
  imageAlt: string
  inclusions: string[]
}

type ExperiencePackagesProps = {
  eyebrow?: string
  title: string
  description: string
  packages: ExperiencePackage[]
  note?: string
}

export function ExperiencePackages({
  eyebrow = 'BESPOKE EXPERIENCES',
  title,
  description,
  packages,
  note = 'Starting prices are indicative and subject to dates, availability, and final itinerary. Every proposal is confirmed directly with DM Promotions.',
}: ExperiencePackagesProps) {
  return (
    <section className="bg-[#111111] py-20 sm:py-24" aria-labelledby="experience-packages-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <header className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#c9a55a]">{eyebrow}</p>
            <h2 id="experience-packages-title" className="mb-5 font-serif text-3xl font-semibold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="text-base leading-relaxed text-white/60 sm:text-lg">{description}</p>
          </header>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-2">
          {packages.map((item, index) => (
            <FadeIn key={item.title} delay={index * 100}>
              <article className="grid h-full overflow-hidden rounded border border-white/10 bg-[#171717] md:grid-cols-[0.85fr_1.15fr]">
                <div className="relative min-h-56 md:min-h-full">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent md:bg-gradient-to-r" />
                </div>
                <div className="flex flex-col p-6 sm:p-8">
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#c9a55a]">{item.eyebrow}</p>
                  <h3 className="mb-3 font-serif text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-white/60">{item.description}</p>
                  <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-y border-white/10 py-4">
                    <div>
                      <p className="mb-1 text-[10px] uppercase tracking-[0.18em] text-white/40">{item.priceLabel ?? 'From'}</p>
                      <p className="font-serif text-2xl text-[#e2c982]">{item.price}</p>
                    </div>
                    <p className="text-sm text-white/55">{item.duration}</p>
                  </div>
                  <ul className="mb-7 flex flex-col gap-3" aria-label={`${item.title} inclusions`}>
                    {item.inclusions.map((inclusion) => (
                      <li key={inclusion} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/65">
                        <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[#c9a55a]" />
                        <span>{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded bg-[#c9a55a] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-black transition-colors hover:bg-[#d4b76a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2c982]"
                  >
                    Enquire about this experience
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </Link>
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
