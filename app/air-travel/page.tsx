import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { ExperiencePackages, type ExperiencePackage } from '@/components/experience-packages'
import { LuxuryAmenitiesGrid, type LuxuryAmenity } from '@/components/luxury-amenities-grid'
import { LuxuryGallery, type LuxuryGalleryItem } from '@/components/luxury-gallery'
import { SeaToSummitExperience } from '@/components/sea-to-summit-experience'

const airVideos = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%281%29-8zZtvJ8FaHO4GCLJ7M2L3mBKE4zQZ2.mp4',
    poster: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%281%29.webp-sKVR9GJKvs2Oa8m7NyIIchNCCa2fr8.jpeg',
    title: 'Private jet charter',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%282%29-Fys5ygT7m6Udg7lXgFwuQ9awDm1UwX.mp4',
    poster: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%282%29-nQWrQYhPLtshRvQISaygkNn3TlLYjI.jpg',
    title: 'Private aircraft interiors',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%283%29-m4ArhtguJ9QWiJbULzgzvjcuWnzY84.mp4',
    poster: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jet%20%281%29-kmivuwq53bMqnwf2R2JGgmrpIpOPBZ.jpg',
    title: 'Air travel in motion',
  },
]

const airAmenities: LuxuryAmenity[] = [
  {
    title: 'Private Jet Charter',
    description: 'A private flight planned around your schedule, preferred route, and the needs of your group.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%281%29.webp-sKVR9GJKvs2Oa8m7NyIIchNCCa2fr8.jpeg',
    alt: 'Private jet ready for a bespoke charter journey',
    details: ['Flexible itinerary', 'Private cabin'],
  },
  {
    title: 'Helicopter Transfers',
    description: 'A direct aerial connection between the Mediterranean coast and Sierra Nevada, with scenic mountain views en route.',
    image: '/images/helicopter-transfer.png',
    alt: 'Helicopter crossing the mountains toward Sierra Nevada',
    details: ['Approx. one hour', 'Direct route'],
  },
  {
    title: 'Yacht-to-Slopes Connection',
    description: 'Connect private Mediterranean yacht days with a coordinated helicopter transfer and a Sierra Nevada stay.',
    image: '/images/yacht-charter.png',
    alt: 'Luxury yacht on the Mediterranean as part of a sea-to-summit itinerary',
    details: ['Sea-to-summit', 'Custom duration'],
  },
  {
    title: 'Mountain Arrival',
    description: 'Coordinate your arrival with villa access, ski days, and the services arranged for your time on the mountain.',
    image: '/images/alpine-slopes.jpg',
    alt: 'Sierra Nevada ski resort and mountain slopes',
    details: ['Sierra Nevada', 'Villa stays'],
  },
  {
    title: 'Flight & Ground Coordination',
    description: 'Bring travel timing, arrival details, and the next part of your itinerary together through one DM Promotions contact.',
    image: '/images/concierge-service.jpg',
    alt: 'Concierge desk ready to coordinate guest arrivals',
    details: ['One point of contact', 'Planned handoffs'],
  },
  {
    title: 'Private Cabin Comfort',
    description: 'Choose a flight experience that balances privacy, comfort, and a seamless transition to your destination.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%282%29-nQWrQYhPLtshRvQISaygkNn3TlLYjI.jpg',
    alt: 'Private aircraft cabin prepared for guests',
    details: ['Dedicated crew', 'Guest-focused service'],
  },
]

const airPackages: ExperiencePackage[] = [
  {
    eyebrow: 'PRIVATE AVIATION',
    title: 'Private Jet Charter',
    price: 'Tailored quote',
    priceLabel: 'Pricing',
    duration: 'By itinerary',
    description: 'Arrange private air travel around your schedule, with an itinerary and aircraft selected to fit the journey.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%281%29.webp-sKVR9GJKvs2Oa8m7NyIIchNCCa2fr8.jpeg',
    imageAlt: 'Private jet on the runway for a charter flight',
    inclusions: [
      'Flexible departure planning and private cabin',
      'Dedicated crew and personalized service',
      'Arrival timing coordinated with your wider itinerary',
    ],
  },
  {
    eyebrow: 'SEA-TO-SUMMIT CONNECTION',
    title: 'Helicopter Transfer',
    price: 'Included',
    priceLabel: 'Combined itinerary',
    duration: 'Approx. 1 hour',
    description: 'A direct helicopter connection from Puerto Banús / Marbella to Sierra Nevada, linking yacht days with the slopes.',
    image: '/images/helicopter-transfer.png',
    imageAlt: 'Helicopter transfer over a mountain range',
    inclusions: [
      'Scenic direct flight between coast and mountains',
      'Coordinated transition from yacht to ski villa',
      'Available as part of a combined sea-to-summit itinerary',
    ],
  },
]

const airGallery: LuxuryGalleryItem[] = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%281%29.webp-sKVR9GJKvs2Oa8m7NyIIchNCCa2fr8.jpeg',
    alt: 'Private jet prepared for a charter departure',
    category: 'PRIVATE AVIATION',
    title: 'Travel on your schedule',
    description: 'Private jet itineraries arranged around your dates and destination.',
  },
  {
    src: '/images/helicopter-transfer.png',
    alt: 'Helicopter approaching the Sierra Nevada mountains',
    category: 'HELICOPTER',
    title: 'A direct mountain connection',
    description: 'A scenic transfer linking the Mediterranean with the ski resort.',
  },
  {
    src: '/images/yacht-charter.png',
    alt: 'Luxury yacht charter on the Mediterranean',
    category: 'YACHT',
    title: 'Begin at sea',
    description: 'Add private yacht days to your wider itinerary.',
  },
  {
    src: '/images/alpine-slopes.jpg',
    alt: 'Snow-covered Sierra Nevada ski slopes',
    category: 'SLOPES',
    title: 'Arrive in Sierra Nevada',
    description: 'Move from the coast directly into a private mountain stay.',
  },
  {
    src: '/images/chalet-interior.jpg',
    alt: 'Warm chalet interior with a fireplace',
    category: 'INTERIORS',
    title: 'A quieter landing',
    description: 'Settle into a private villa after a day of travel or skiing.',
  },
  {
    src: '/images/alpine-dining.jpg',
    alt: 'Private dining table set for an Alpine evening',
    category: 'DINING',
    title: 'The details after arrival',
    description: 'Private dining and hospitality arranged around your stay.',
  },
  {
    src: '/images/corporate.jpg',
    alt: 'Guests at a refined corporate event',
    category: 'EVENTS',
    title: 'Travel for the occasion',
    description: 'Bring guests together with a coordinated arrival and event plan.',
  },
]

export default function AirTravel() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <Navigation />

      <section className="relative isolate flex min-h-[76vh] items-center overflow-hidden pt-24 sm:min-h-[82vh]">
        <Image src="/images/helicopter-transfer.png" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-black/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#e2c982]">PRIVATE AVIATION / DM PROMOTIONS</p>
              <h1 className="mb-6 font-serif text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                Private Jet &amp; Helicopter Charter
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                Thoughtful air travel for private journeys, event arrivals, and the coast-to-mountain connection.
              </p>
              <Link href="/contact" className="mt-9 inline-flex min-h-12 items-center justify-center rounded bg-[#c9a55a] px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-black transition-colors hover:bg-[#d4b76a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2c982]">
                Discuss your itinerary
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#111111] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <FadeIn direction="left">
            <div className="relative aspect-[4/3] overflow-hidden rounded border border-white/10">
              <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%282%29-nQWrQYhPLtshRvQISaygkNn3TlLYjI.jpg" alt="Private aircraft cabin prepared for a comfortable charter flight" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={100}>
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#c9a55a]">A JOURNEY, CONNECTED</p>
              <h2 className="mb-5 font-serif text-3xl font-semibold text-white sm:text-4xl">Sky-high luxury, thoughtfully planned</h2>
              <p className="mb-5 text-base leading-relaxed text-white/65 sm:text-lg">
                Travel on your own schedule with private jet and helicopter charter options, personalized service, and an itinerary shaped around your destination.
              </p>
              <p className="text-base leading-relaxed text-white/60">
                For a distinctive coast-to-mountain journey, connect Mediterranean yacht days with a helicopter transfer to Sierra Nevada. From flight timing to the next arrival, DM Promotions coordinates the transitions that make the trip feel seamless.
              </p>
              <div className="mt-7 flex flex-wrap gap-2" aria-label="Air travel highlights">
                {['Private jet itineraries', 'Helicopter transfer', 'Yacht-to-slopes connection', 'Marbella to Sierra in 1 hour'].map((highlight) => (
                  <span key={highlight} className="rounded-full border border-[#c9a55a]/30 px-3 py-1.5 text-xs text-[#e2c982]">{highlight}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <LuxuryGallery
        eyebrow="AIR, SEA & MOUNTAIN"
        title="The journey is part of the experience"
        description="Move between private aviation, Mediterranean yacht days, mountain landscapes, and the interiors and events that make each arrival memorable."
        items={airGallery}
      />

      <LuxuryAmenitiesGrid
        eyebrow="PRIVATE AIR TRAVEL"
        title="A seamless arrival, from departure to destination"
        description="Every charter is discussed around your timing, route, guests, and the experience waiting at the other end."
        items={airAmenities}
      />

      <ExperiencePackages
        eyebrow="CHARTER OPTIONS"
        title="Choose the right way to travel"
        description="Private jet charter is quoted to your itinerary. The helicopter transfer is available within the combined Sea-to-Summit experience; its final inclusions are confirmed with your proposal."
        packages={airPackages}
        note="The helicopter transfer is shown as included only when arranged as part of the combined itinerary. Private aviation availability and pricing are confirmed directly with DM Promotions."
      />

      <SeaToSummitExperience compact />

      <section className="bg-[#0d0d0d] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-10 max-w-3xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#c9a55a]">EXPERIENCE IN MOTION</p>
              <h2 className="mb-4 font-serif text-3xl font-semibold text-white sm:text-4xl">A closer look at private aviation</h2>
              <p className="text-white/60">A selection of private jet and air charter films.</p>
            </div>
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            {airVideos.map((video, index) => (
              <FadeIn key={video.src} delay={index * 70}>
                <video src={video.src} poster={video.poster} controls preload="none" aria-label={video.title} className="aspect-video w-full rounded border border-white/10 bg-black object-cover" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c9a55a]/10 via-[#c9a55a]/5 to-[#c9a55a]/10" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <FadeIn>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#c9a55a]">PERSONALIZED AIR TRAVEL</p>
            <h2 className="mb-6 font-serif text-3xl font-semibold text-white sm:text-4xl">Plan a better way to arrive</h2>
            <p className="mb-9 text-lg leading-relaxed text-white/60">Tell us where you are going, when you need to travel, and what the journey should include.</p>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded bg-[#c9a55a] px-9 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-black transition-colors hover:bg-[#d4b76a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2c982]">
              Request a tailored quote
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
