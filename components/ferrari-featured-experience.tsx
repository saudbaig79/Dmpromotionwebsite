import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CalendarDays, Check, MapPin, Sparkles } from 'lucide-react'
import { FadeIn } from '@/components/fade-in'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

const galleryImages = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2507190264-scaled.jpg-hC0HEHjOPDiE0yTzRCK4876jfbtfnh.jpeg',
    alt: 'Ferrari Challenge cars racing in formation on a circuit.',
    caption: 'Ferrari Challenge · On track',
    className: 'aspect-[16/10]',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/finali-mondiali-barcelona-desk-VNdxLSfWU8s8eM19WKwDnfzk8EqkjK.webp',
    alt: 'The pit straight at Circuit de Barcelona-Catalunya.',
    caption: 'The circuit',
    className: 'aspect-[16/9]',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fm-2026-preview-land-xm2QslTibJx5hnMKW1LQirocc1hlLM.jpeg',
    alt: 'Aerial view of Circuit de Barcelona-Catalunya.',
    caption: 'Barcelona from above',
    className: 'aspect-[16/9]',
  },
] as const

const packages = [
  {
    id: 'tickets',
    title: 'Finali Mondiali Tickets',
    features: [
      'Casa Ferrari Weekend on Saturday 21 and Sunday 22 November',
    ],
    prices: [{ label: 'Price per person', amount: '€793' }],
    featured: false,
  },
  {
    id: 'full-weekend',
    title: 'Finali Mondiali Full Weekend',
    features: [
      'Exclusive preview of the new model',
      'Group Dinner on Friday 20 and Saturday 21 November',
      'Casa Ferrari Weekend on Saturday 21 and Sunday 22 November',
      'Accommodation at Hotel Torre Melina Gran Meliá***** on Friday 20 and Saturday 21 November',
    ],
    prices: [
      { label: 'Price per person', amount: '€2,300' },
      { label: 'Price per couple', amount: '€3,600' },
    ],
    featured: true,
  },
  {
    id: 'vehicle-transport',
    title: 'Finali Mondiali Full Weekend + Vehicle Transport',
    features: [
      'Exclusive preview of the new model',
      'Group Dinner on Friday 20 and Saturday 21 November',
      'Casa Ferrari Weekend on Saturday 21 and Sunday 22 November',
      'Accommodation at Hotel Torre Melina Gran Meliá***** on Friday 20 and Saturday 21 November',
      'Vehicle transport by car transporter from Málaga to Barcelona',
    ],
    prices: [
      { label: 'Price per person', amount: '€4,700' },
      { label: 'Price per couple', amount: '€6,000' },
    ],
    featured: false,
  },
] as const

const extras = [
  {
    id: 'paddock-restaurant',
    title: 'Paddock Restaurant Voucher',
    description:
      'Please note that this voucher is not included in the above packages. The restaurant is open from Wednesday to Sunday inclusive, from 11:30 to 15:00. Children under 12 are admitted free of charge when accompanied by a paying adult.',
    priceLabel: 'Price per person, per meal',
    price: '€75 + VAT',
  },
  {
    id: 'parking-pass',
    title: 'Parking Pass',
    description:
      'One pass per car, non-transferable. Each pass is valid from Wednesday to Sunday.',
    priceLabel: 'Price per car',
    price: '€20 + VAT',
  },
] as const

type PackageOffer = (typeof packages)[number]
type ExtraOffer = (typeof extras)[number]

function PackageCard({ offer }: { offer: PackageOffer }) {
  const headingId = `ferrari-package-${offer.id}`

  return (
    <article className="h-full" aria-labelledby={headingId}>
      <Card
        className={cn(
          'h-full gap-0 rounded-xl border bg-gradient-to-b p-0 text-white transition-all duration-300',
          offer.featured
            ? 'border-[#c9a55a]/65 from-[#c9a55a]/[0.11] via-[#191712] to-[#111111] shadow-[0_0_40px_rgba(201,165,90,0.14)]'
            : 'border-white/10 from-white/[0.055] to-white/[0.015] hover:border-[#c9a55a]/40',
        )}
      >
        <CardHeader className="gap-3 px-5 pt-5 pb-0">
          <CardTitle className="font-normal leading-tight">
            <h4
              id={headingId}
              className="font-serif text-xl font-semibold tracking-tight text-white sm:text-2xl"
            >
              {offer.title}
            </h4>
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col px-5 pt-5 pb-5">
          <ul className="flex flex-col gap-3">
            {offer.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-white/70">
                <Check
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#c9a55a]"
                  size={16}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="w-full flex-col items-stretch gap-3 border-t border-[#c9a55a]/20 px-5 pt-4 pb-5">
          {offer.prices.map((price) => (
            <p
              key={price.label}
              className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1"
            >
              <span className="text-sm text-white/60">{price.label}: </span>
              <span className="font-serif text-2xl font-semibold text-[#e4cc91]">
                {price.amount}
              </span>
            </p>
          ))}
        </CardFooter>
      </Card>
    </article>
  )
}

function ExtraCard({ offer }: { offer: ExtraOffer }) {
  const headingId = `ferrari-extra-${offer.id}`

  return (
    <article aria-labelledby={headingId}>
      <Card className="h-full gap-0 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.055] to-white/[0.015] p-0 text-white transition-colors duration-300 hover:border-[#c9a55a]/40">
        <CardHeader className="px-5 pt-5 pb-0">
          <CardTitle className="font-normal leading-tight">
            <h4 id={headingId} className="font-serif text-xl font-semibold text-white">
              {offer.title}
            </h4>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 px-5 pt-4 pb-5">
          <p className="text-sm leading-relaxed text-white/65">{offer.description}</p>
        </CardContent>
        <CardFooter className="w-full border-t border-[#c9a55a]/20 px-5 pt-4 pb-5">
          <p className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <span className="text-sm text-white/60">{offer.priceLabel}: </span>
            <span className="font-serif text-2xl font-semibold text-[#e4cc91]">
              {offer.price}
            </span>
          </p>
        </CardFooter>
      </Card>
    </article>
  )
}

export function FerrariFeaturedExperience() {
  return (
    <section
      id="featured-experience"
      aria-labelledby="ferrari-featured-title"
      className="relative isolate overflow-hidden bg-[#0a0a0a] py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 size-[28rem] rounded-full bg-[#c9a55a]/[0.08] blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-0 size-[24rem] rounded-full bg-[#c9a55a]/[0.05] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#c9a55a]/40 bg-[#c9a55a]/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.3em] text-[#d8bb75]">
              <Sparkles aria-hidden="true" size={14} />
              FEATURED EXPERIENCE
            </span>
          </div>
        </FadeIn>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <FadeIn direction="left">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl border border-[#c9a55a]/15" />
              <div className="relative overflow-hidden rounded-xl border border-[#c9a55a]/30 shadow-[0_0_70px_rgba(201,165,90,0.16)]">
                <figure className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={galleryImages[0].src}
                    alt={galleryImages[0].alt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/15" />
                  <figcaption className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-12 text-xs font-medium uppercase tracking-[0.22em] text-[#f2dfa8] sm:px-6 sm:pb-6">
                    {galleryImages[0].caption}
                  </figcaption>
                </figure>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                {galleryImages.slice(1).map((image) => (
                  <figure
                    key={image.src}
                    className={cn(
                      'group relative overflow-hidden rounded-lg border border-[#c9a55a]/20 bg-[#111111]',
                      image.className,
                    )}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 639px) 50vw, (max-width: 1023px) 45vw, 24vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 px-3 pb-3 pt-8 text-[10px] font-medium uppercase tracking-[0.18em] text-white/90 sm:px-4 sm:pb-4 sm:text-xs">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="flex flex-col">
            <FadeIn delay={100}>
              <h2
                id="ferrari-featured-title"
                className="font-serif text-4xl font-bold leading-[0.98] tracking-tight text-[#e4cc91] drop-shadow-[0_0_30px_rgba(201,165,90,0.2)] sm:text-5xl lg:text-6xl"
              >
                FERRARI FINALI MONDIALI 2026
              </h2>
            </FadeIn>

            <FadeIn delay={150}>
              <p className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#d8bb75] sm:text-base">
                <CalendarDays aria-hidden="true" className="shrink-0" size={18} />
                <span>20–22 NOVEMBER, BARCELONA</span>
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a55a] sm:text-sm">
                AN EXCLUSIVE EXPERIENCE BY DM PROMOTIONS
              </p>
            </FadeIn>

            <FadeIn delay={250}>
              <div className="mt-7 flex flex-col gap-4 text-sm leading-7 text-white/70 sm:text-base">
                <p>
                  At DM PROMOTIONS, we are delighted to invite you to experience something truly exceptional in Barcelona: the Ferrari Finali Mondiali 2026.
                </p>
                <p>
                  Designed as a complete immersion in the world of Ferrari, this unique weekend is centred around competition, passion for motorsport and the exclusivity of the brand.
                </p>
                <p>
                  The programme takes place over three days, from 20 to 22 November, combining gastronomy, hospitality and access to the activities of the Finali Mondiali.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <address className="mt-6 flex items-start gap-3 border-l border-[#c9a55a]/40 pl-4 text-sm not-italic leading-relaxed text-white/65">
                <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-[#c9a55a]" size={17} />
                <span>
                  Venue: Circuit de Barcelona-Catalunya, Mas La Moreneta s/n, 08160 Montmeló, Barcelona (Spain).
                </span>
              </address>
            </FadeIn>
          </div>
        </div>

        <section aria-labelledby="ferrari-packages-title" className="mt-16 sm:mt-20">
          <FadeIn>
            <h3
              id="ferrari-packages-title"
              className="mb-7 font-serif text-2xl font-semibold text-white sm:text-3xl"
            >
              EXPERIENCE PACKAGES
            </h3>
          </FadeIn>
          <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((offer, index) => (
              <FadeIn key={offer.id} delay={index * 100} className="h-full">
                <PackageCard offer={offer} />
              </FadeIn>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/50">
            Any minibar consumption and additional expenses must be paid by the client.
          </p>
        </section>

        <section aria-labelledby="ferrari-extras-title" className="mt-14 sm:mt-16">
          <FadeIn>
            <h3
              id="ferrari-extras-title"
              className="mb-7 font-serif text-2xl font-semibold text-white sm:text-3xl"
            >
              EXTRAS
            </h3>
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-2">
            {extras.map((offer, index) => (
              <FadeIn key={offer.id} delay={index * 100} className="h-full">
                <ExtraCard offer={offer} />
              </FadeIn>
            ))}
          </div>
        </section>

        <FadeIn delay={100}>
          <div className="mt-14 flex justify-center sm:mt-16">
            <Link
              href="/contact"
              className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-md bg-[#c9a55a] px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.16em] text-black shadow-[0_0_30px_rgba(201,165,90,0.28)] transition-all duration-300 hover:bg-[#d4b76a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2dfa8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] sm:w-auto sm:min-w-80 sm:px-10"
            >
              CONTACT US FOR AVAILABILITY
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
