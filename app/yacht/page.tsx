import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { ExperiencePackages, type ExperiencePackage } from '@/components/experience-packages'
import { LuxuryAmenitiesGrid, type LuxuryAmenity } from '@/components/luxury-amenities-grid'
import { LuxuryGallery, type LuxuryGalleryItem } from '@/components/luxury-gallery'
import { SeaToSummitExperience } from '@/components/sea-to-summit-experience'

const yachtVideos = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yacht%20%282%29-Qml30qtOy7cc6fLOv3kNeqowkSLA6C.mp4',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yacht%20%281%29-YprEKJ8vaGO0rfq4xLzxSijrXgjeLS.mp4',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yacht%20%283%29-9s8wuYwotdk1XXflgTXM8hgyjLil2e.mp4',
]

const yachtAmenities: LuxuryAmenity[] = [
  {
    title: 'Private Charter & Crew',
    description: 'A dedicated crew and a private route built around your preferred pace, ports, and time on the water.',
    image: '/images/yacht-charter.png',
    alt: 'Luxury motor yacht prepared for a private Mediterranean charter',
    details: ['Private charter', 'Tailored route'],
  },
  {
    title: 'Mediterranean Anchorages',
    description: 'Discover clear-water bays, quieter coves, and marina stops selected for your itinerary.',
    image: '/images/mediterranean-cove.jpeg',
    alt: 'Clear Mediterranean water beside a secluded coastal cove',
    details: ['Coastal cruising', 'Marina access'],
  },
  {
    title: 'Sun Deck & Water Sports',
    description: 'Make time for open-air lounging and water activities, arranged to suit the vessel and conditions.',
    image: '/images/yacht-water-sports.png',
    alt: 'Motor yacht with an extended swim platform on the sea',
    details: ['Swim platform', 'Water activities'],
  },
  {
    title: 'Gourmet Dining',
    description: 'Plan private dining and chef-led menus around the day, the destination, and your guests.',
    image: '/images/alpine-dining.jpg',
    alt: 'Elegant private dining table prepared for a luxury experience',
    details: ['Private chef by request', 'Curated menus'],
  },
  {
    title: 'Considered Hospitality',
    description: 'From arrival coordination to restaurant reservations, the details are handled by your DM Promotions contact.',
    image: '/images/concierge-service.jpg',
    alt: 'Concierge desk in a refined hospitality setting',
    details: ['Personal assistance', 'Reservations'],
  },
  {
    title: 'Sea-to-Summit Access',
    description: 'Continue from the Mediterranean to Sierra Nevada with a coordinated helicopter connection and villa stay.',
    image: '/images/helicopter-transfer.png',
    alt: 'Helicopter crossing a mountain landscape toward Sierra Nevada',
    details: ['Helicopter transfer', 'Sierra Nevada'],
  },
]

const yachtPackages: ExperiencePackage[] = [
  {
    eyebrow: 'MEDITERRANEAN CHARTER',
    title: 'Private Yacht Days',
    price: '€9,673',
    duration: '3–7 days',
    description: 'A multi-day escape aboard a luxury motor yacht, with your route, pace, and shore stops planned around the group.',
    image: '/images/yacht-charter.png',
    imageAlt: 'Luxury motor yacht cruising in the Mediterranean',
    inclusions: [
      'Private charter and tailored coastal route',
      'Crew-led hospitality and spacious deck time',
      'Dining and water activities arranged to suit the itinerary',
    ],
  },
  {
    eyebrow: 'SEA-TO-SUMMIT',
    title: 'Yacht & Alpine Escape',
    price: '€9,673',
    priceLabel: 'Yacht stage from',
    duration: 'Alpine stays from €2,500/day',
    description: 'Pair Mediterranean days with a direct helicopter connection and a private Sierra Nevada villa stay.',
    image: '/images/helicopter-transfer.png',
    imageAlt: 'Helicopter transfer over the Sierra Nevada mountains',
    inclusions: [
      'Customizable yacht and ski-villa days',
      'Helicopter transfer included in the combined itinerary',
      'Villa, guide, chef, and concierge options by arrangement',
    ],
  },
]

const yachtGallery: LuxuryGalleryItem[] = [
  {
    src: '/images/yacht-charter.png',
    alt: 'Luxury motor yacht underway on the Mediterranean',
    category: 'YACHT',
    title: 'The Mediterranean, privately',
    description: 'A considered route, open water, and time at your own pace.',
  },
  {
    src: '/images/mediterranean-cove.jpeg',
    alt: 'A sheltered Mediterranean cove with clear water',
    category: 'DESTINATIONS',
    title: 'Hidden coves',
    description: 'Coastal stops chosen around your preferred itinerary.',
  },
  {
    src: '/images/yacht-water-sports.png',
    alt: 'Yacht swim platform set above the water',
    category: 'ON THE WATER',
    title: 'Days in the sun',
    description: 'Deck time and water activities arranged for the group.',
  },
  {
    src: '/images/chalet-interior.jpg',
    alt: 'Refined chalet interior with a fireplace and mountain outlook',
    category: 'INTERIORS',
    title: 'A private retreat',
    description: 'Extend the journey from the sea to an Alpine residence.',
  },
  {
    src: '/images/alpine-dining.jpg',
    alt: 'A candlelit table set for a private dinner',
    category: 'DINING',
    title: 'Dinner, considered',
    description: 'Private dining and menus shaped around the occasion.',
  },
  {
    src: '/images/helicopter-transfer.png',
    alt: 'Helicopter approaching a mountain destination',
    category: 'AIR TRANSFER',
    title: 'From sea to summit',
    description: 'A scenic connection between the coast and Sierra Nevada.',
  },
  {
    src: '/images/corporate.jpg',
    alt: 'Guests gathered at a polished corporate event',
    category: 'EVENTS',
    title: 'A setting for your guests',
    description: 'Private occasions and corporate moments, curated by DM Promotions.',
  },
]

export default function Yacht() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <Navigation />

      <section className="relative isolate flex min-h-[78vh] items-center overflow-hidden pt-24 sm:min-h-[84vh]">
        <Image
          src="/images/yacht-charter.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-black/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#e2c982]">MEDITERRANEAN / DM PROMOTIONS</p>
              <h1 className="mb-6 font-serif text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                Malex Super Yacht
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                A private charter shaped around your guests, your pace, and the Mediterranean coast.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded bg-[#c9a55a] px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-black transition-colors hover:bg-[#d4b76a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2c982]">
                  Enquire about a charter
                </Link>
                <Link href="/sierra-nevada" className="inline-flex min-h-12 items-center justify-center rounded border border-white/35 px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#c9a55a] hover:text-[#e2c982] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2c982]">
                  Explore sea-to-summit
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#111111] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <FadeIn direction="left">
            <div className="relative aspect-[4/3] overflow-hidden rounded border border-white/10">
              <Image src="/images/yacht-water-sports.png" alt="Motor yacht with a swim platform on open water" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={100}>
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#c9a55a]">A PRIVATE MEDITERRANEAN ESCAPE</p>
              <h2 className="mb-5 font-serif text-3xl font-semibold text-white sm:text-4xl">The ultimate luxury experience</h2>
              <p className="mb-5 text-base leading-relaxed text-white/65 sm:text-lg">
                Step aboard the Malex Super Yacht for an experience defined by elegant surroundings, thoughtful service, and access to some of the Mediterranean&apos;s most beautiful coastlines.
              </p>
              <p className="text-base leading-relaxed text-white/60">
                Plan a private charter, an intimate gathering, or a longer escape. Our team can coordinate the vessel, route, dining, and shore time, with the option to continue your itinerary from the sea to the slopes of Sierra Nevada.
              </p>
              <div className="mt-7 flex flex-wrap gap-2" aria-label="Yacht experience highlights">
                {['Private crew', 'Tailored route', 'Gourmet dining', 'Water activities'].map((highlight) => (
                  <span key={highlight} className="rounded-full border border-[#c9a55a]/30 px-3 py-1.5 text-xs text-[#e2c982]">{highlight}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <LuxuryAmenitiesGrid
        eyebrow="ON BOARD & BEYOND"
        title="A charter, thoughtfully arranged"
        description="Build your days around the details that matter: a private route, considered hospitality, time on the water, and the option to connect the coast with the mountains."
        items={yachtAmenities}
      />

      <ExperiencePackages
        eyebrow="MEDITERRANEAN & ALPINE PACKAGES"
        title="Choose your kind of escape"
        description="Begin with a private yacht charter or extend the journey into Sierra Nevada. Starting figures are shown by itinerary stage; final inclusions are confirmed in your tailored proposal."
        packages={yachtPackages}
      />

      <SeaToSummitExperience compact />

      <LuxuryGallery
        eyebrow="THE DM PROMOTIONS VISUAL JOURNEY"
        title="From open water to Alpine evenings"
        description="A wider view of the experiences around your charter: Mediterranean coastlines, considered interiors, private dining, mountain transfers, and events."
        items={yachtGallery}
      />

      <section className="bg-[#0d0d0d] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-10 max-w-3xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#c9a55a]">EXPERIENCE IN MOTION</p>
              <h2 className="mb-4 font-serif text-3xl font-semibold text-white sm:text-4xl">A closer look at life on board</h2>
              <p className="text-white/60">Explore the vessel and the atmosphere of a private Mediterranean charter.</p>
            </div>
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            {yachtVideos.map((video, index) => (
              <FadeIn key={video} delay={index * 70}>
                <video src={video} controls preload="none" aria-label={`Yacht charter film ${index + 1}`} className="aspect-video w-full rounded border border-white/10 bg-black object-cover" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c9a55a]/10 via-[#c9a55a]/5 to-[#c9a55a]/10" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <FadeIn>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#c9a55a]">A BESPOKE DM PROMOTIONS EXPERIENCE</p>
            <h2 className="mb-6 font-serif text-3xl font-semibold text-white sm:text-4xl">Your Mediterranean journey begins here</h2>
            <p className="mb-9 text-lg leading-relaxed text-white/60">Share your dates, group size, and the experience you have in mind. Our team will shape a tailored proposal.</p>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded bg-[#c9a55a] px-9 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-black transition-colors hover:bg-[#d4b76a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2c982]">
              Enquire now
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
