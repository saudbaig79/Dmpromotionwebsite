import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { ExperiencePackages, type ExperiencePackage } from '@/components/experience-packages'
import { LuxuryAmenitiesGrid, type LuxuryAmenity } from '@/components/luxury-amenities-grid'
import { LuxuryGallery, type LuxuryGalleryItem } from '@/components/luxury-gallery'
import { SeaToSummitExperience } from '@/components/sea-to-summit-experience'

const sierraVideos = [
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sierra%20nevada%20%283%29-I8hXe7TKq6i8buujbPLkXVsUFOCe81.mp4',
    poster: '/images/alpine-slopes.jpg',
    title: 'Sierra Nevada ski resort',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sierra%20nevada%20%284%29-Ezoxod5t9vjedSLlQTlh7wEsGL3Fj2.mp4',
    poster: '/images/ski-guide.jpg',
    title: 'Skiing with a private guide',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sierra%20nevada%20%286%29-yxYqxkSnd2h2vNdvgdlnD6jzSe0hnW.mp4',
    poster: '/images/ski-villa-sunset.jpg',
    title: 'Mountain villa arrival',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sierra%20nevada%20%281%29-hGAXHHw0RDOt5e3Kzjq8iUFYcXYje5.mp4',
    poster: '/images/chalet-interior.jpg',
    title: 'Private chalet interiors',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sierra%20nevada%20%282%29-au8dofJ3g6KuTMLFXUjCFeHMDweZ2U.mp4',
    poster: '/images/alpine-dining.jpg',
    title: 'Alpine dining',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sierra%20nevada%20%285%29-Mk3jq4E99BtsRJ2Li6Ljf8RRObVA33.mp4',
    poster: '/images/alpine-spa.jpg',
    title: 'Mountain wellness',
  },
]

const alpineAmenities: LuxuryAmenity[] = [
  {
    title: 'Ski-in / Ski-out Chalets',
    description: 'Settle into a private mountain residence with direct resort access, panoramic views, and space to unwind after the slopes.',
    image: '/images/alpine-chalet.jpg',
    alt: 'Luxury ski chalet set in a snowy Alpine landscape',
    details: ['Slope-side access', 'Mountain views'],
  },
  {
    title: 'Hot Tub & Spa',
    description: 'Recharge with an outdoor hot tub, spa time, and restorative wellness arranged around the day on the mountain.',
    image: '/images/alpine-spa.jpg',
    alt: 'Outdoor hot tub steaming in a snow-covered mountain setting',
    details: ['Heated jacuzzi', 'Spa options'],
  },
  {
    title: 'Expert Guides',
    description: 'Discover the resort with experienced ski instructors and mountain guides, with support matched to your group.',
    image: '/images/ski-guide.jpg',
    alt: 'Ski instructor guiding guests on a snowy mountain slope',
    details: ['Private guides', 'All ability levels'],
  },
  {
    title: 'Premium Equipment',
    description: 'Arrange professionally fitted ski and snowboard equipment selected for comfort, conditions, and your time on the slopes.',
    image: '/images/ski-equipment.jpg',
    alt: 'Premium ski equipment ready for a day on the slopes',
    details: ['Professional fitting', 'Premium models'],
  },
  {
    title: 'Alpine Dining & Private Chef',
    description: 'Enjoy mountain-inspired menus, local ingredients, wine pairings, and private chef service by arrangement.',
    image: '/images/alpine-dining.jpg',
    alt: 'Elegant Alpine dinner table prepared for a private meal',
    details: ['Private chef', 'Local cuisine'],
  },
  {
    title: 'Fireplaces & Après-Ski',
    description: 'Return to a warm chalet atmosphere, with a fireplace and a slower evening after an active day outdoors.',
    image: '/images/chalet-fireplace.jpg',
    alt: 'Stone fireplace burning in a luxury ski chalet',
    details: ['Wood-burning', 'Après-ski comfort'],
  },
  {
    title: 'Entertainment Lounge',
    description: 'A comfortable shared space for relaxed evenings, with entertainment options suited to your group.',
    image: '/images/alpine-lounge.jpg',
    alt: 'Modern entertainment lounge inside a mountain chalet',
    details: ['Private lounge', 'Evening downtime'],
  },
  {
    title: 'High-Speed WiFi',
    description: 'Stay connected throughout your stay with reliable chalet-wide connectivity and a quiet place to work if needed.',
    image: '/images/alpine-workspace.jpg',
    alt: 'Workspace in a modern luxury mountain chalet',
    details: ['Chalet-wide access', 'Work-ready spaces'],
  },
  {
    title: 'VIP Lift Passes',
    description: 'Arrange priority lift access and resort passes to make more of your time on the mountain.',
    image: '/images/vip-lift.jpg',
    alt: 'Chairlift rising over a snowy mountain ski resort',
    details: ['Priority access', 'Resort lifts'],
  },
  {
    title: 'Climate Control',
    description: 'Enjoy a comfortable return from the cold with modern heating and room-by-room temperature control.',
    image: '/images/climate-control.jpg',
    alt: 'Modern climate-control system in a luxury chalet',
    details: ['Underfloor heating', 'Room controls'],
  },
  {
    title: '24/7 Concierge',
    description: 'A dedicated point of contact for ski arrangements, restaurant reservations, equipment, and personalized requests.',
    image: '/images/concierge-service.jpg',
    alt: 'Concierge desk in a refined hospitality setting',
    details: ['Personal assistance', 'Reservations'],
  },
]

const alpinePackages: ExperiencePackage[] = [
  {
    eyebrow: 'SIERRA NEVADA / MOUNTAIN STAY',
    title: 'Private Ski Villa',
    price: '€2,500/day',
    duration: '3–10 days',
    description: 'Stay close to the slopes in a private villa and shape each day around skiing, dining, wellness, and time together.',
    image: '/images/ski-villa-sunset.jpg',
    imageAlt: 'Luxury Sierra Nevada villa with mountain views at sunset',
    inclusions: [
      'Villa options for groups of up to 8 guests',
      'Private guide, chef, and concierge options by arrangement',
      'Access to world-class Sierra Nevada skiing',
    ],
  },
  {
    eyebrow: 'SEA-TO-SUMMIT / CUSTOM JOURNEY',
    title: 'Yacht, Helicopter & Ski',
    price: '€9,673',
    priceLabel: 'Yacht stage from',
    duration: 'Alpine stay from €2,500/day',
    description: 'Combine flexible Mediterranean yacht days with a helicopter transfer and a private Sierra Nevada villa stay.',
    image: '/images/helicopter-transfer.png',
    imageAlt: 'Helicopter transfer joining the Mediterranean and Sierra Nevada',
    inclusions: [
      'Yacht charter stage from €9,673 for 3–7 days',
      'Helicopter transfer included in the combined itinerary',
      'Sierra Nevada villa days from €2,500/day',
    ],
  },
]

const alpineGallery: LuxuryGalleryItem[] = [
  {
    src: '/images/yacht-charter.png',
    alt: 'Luxury yacht charter on Mediterranean water',
    category: 'YACHT',
    title: 'Mediterranean days',
    description: 'Begin with a private charter along the coast.',
  },
  {
    src: '/images/alpine-slopes.jpg',
    alt: 'Snowy Sierra Nevada ski slopes and chairlifts',
    category: 'SLOPES',
    title: 'Sierra Nevada',
    description: 'World-class skiing in the south of Spain.',
  },
  {
    src: '/images/chalet-interior.jpg',
    alt: 'Luxury mountain chalet interior with a fireplace',
    category: 'INTERIORS',
    title: 'A private mountain retreat',
    description: 'Contemporary comfort with a sense of Alpine character.',
  },
  {
    src: '/images/alpine-dining.jpg',
    alt: 'Private Alpine dining setup with fine tableware',
    category: 'DINING',
    title: 'Alpine dining',
    description: 'A private table and chef-led menus by arrangement.',
  },
  {
    src: '/images/helicopter-transfer.png',
    alt: 'Helicopter transfer flying through a mountain landscape',
    category: 'HELICOPTER',
    title: 'Yacht to slopes',
    description: 'A scenic one-hour connection from the coast to Sierra Nevada.',
  },
  {
    src: '/images/alpine-spa.jpg',
    alt: 'Outdoor hot tub overlooking a snowy mountain setting',
    category: 'WELLNESS',
    title: 'Time to reset',
    description: 'A warm-water pause after the day on the mountain.',
  },
  {
    src: '/images/corporate.jpg',
    alt: 'Guests attending a polished corporate event',
    category: 'EVENTS',
    title: 'Gather in good company',
    description: 'Private celebrations and corporate moments curated by DM Promotions.',
  },
]

export default function SierraNevada() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <Navigation />

      <section className="relative isolate flex min-h-[76vh] items-center overflow-hidden pt-24 sm:min-h-[82vh]">
        <Image src="/images/alpine-slopes.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-black/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#e2c982]">ALPINE LUXURY / SIERRA NEVADA</p>
              <h1 className="mb-6 font-serif text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">Sierra Nevada</h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                A private mountain escape shaped around great skiing, considered hospitality, and the option to arrive from the Mediterranean by helicopter.
              </p>
              <Link href="/contact" className="mt-9 inline-flex min-h-12 items-center justify-center rounded bg-[#c9a55a] px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-black transition-colors hover:bg-[#d4b76a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2c982]">
                Plan your alpine stay
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#111111] py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <FadeIn direction="left">
            <div className="relative aspect-[4/3] overflow-hidden rounded border border-white/10">
              <Image src="/images/alpine-chalet.jpg" alt="Sierra Nevada chalet set in a snowy mountain landscape" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={100}>
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#c9a55a]">THE MOUNTAIN, YOUR WAY</p>
              <h2 className="mb-5 font-serif text-3xl font-semibold text-white sm:text-4xl">Alpine luxury, with room to breathe</h2>
              <p className="mb-5 text-base leading-relaxed text-white/65 sm:text-lg">
                Sierra Nevada brings together high-altitude skiing, modern resort facilities, and the easy rhythm of southern Spain. Stay close to the slopes in a private villa, then tailor each day with experienced guides, premium equipment, and the hospitality that suits your group.
              </p>
              <p className="text-base leading-relaxed text-white/60">
                For a more distinctive arrival, connect the mountains with customizable yacht days on the Mediterranean and a direct helicopter transfer from the Marbella coast.
              </p>
              <div className="mt-7 flex flex-wrap gap-2" aria-label="Sierra Nevada highlights">
                {['Ski-in / ski-out stays', 'Private guides', 'Alpine dining', 'VIP lift access'].map((highlight) => (
                  <span key={highlight} className="rounded-full border border-[#c9a55a]/30 px-3 py-1.5 text-xs text-[#e2c982]">{highlight}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <SeaToSummitExperience />

      <LuxuryAmenitiesGrid
        eyebrow="PREMIUM AMENITIES"
        title="Alpine luxury amenities"
        description="A considered collection of mountain comforts and services—from slope-side accommodation to après-ski evenings. Select the details that matter to your group and we will confirm them in your proposal."
        items={alpineAmenities}
        note="Availability and inclusions vary by property, resort, season, and itinerary. All services are confirmed directly with DM Promotions before booking."
      />

      <ExperiencePackages
        eyebrow="SIERRA NEVADA / BESPOKE PACKAGES"
        title="Make the mountains your own"
        description="Choose a private villa stay or connect the slopes with Mediterranean yacht days. Build your experience around the number of days you want to spend at sea and in the mountains."
        packages={alpinePackages}
      />

      <LuxuryGallery
        eyebrow="A VISUAL EXPERIENCE"
        title="Sea, slopes, and the spaces between"
        description="A look across the full itinerary: yacht days, Sierra Nevada skiing, private interiors, dining, helicopter transfers, and the events that bring people together."
        items={alpineGallery}
      />

      <section className="bg-[#0d0d0d] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-10 max-w-3xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#c9a55a]">EXPERIENCE IN MOTION</p>
              <h2 className="mb-4 font-serif text-3xl font-semibold text-white sm:text-4xl">A closer look at Sierra Nevada</h2>
              <p className="text-white/60">Explore the slopes, villa settings, and mountain experiences that shape a stay.</p>
            </div>
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {sierraVideos.map((video, index) => (
              <FadeIn key={video.src} delay={(index % 3) * 70}>
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
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#c9a55a]">YOUR SIERRA NEVADA EXPERIENCE</p>
            <h2 className="mb-6 font-serif text-3xl font-semibold text-white sm:text-4xl">Plan your alpine escape</h2>
            <p className="mb-9 text-lg leading-relaxed text-white/60">Tell us when you want to travel, who is coming, and whether your journey starts at sea or in the mountains.</p>
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
