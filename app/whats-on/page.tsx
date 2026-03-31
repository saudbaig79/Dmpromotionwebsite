'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useI18n } from '@/lib/i18n'
import { Calendar, MapPin, Users, Sparkles } from 'lucide-react'

export default function WhatsOnPage() {
  const { t } = useI18n()

  const upcomingEvents = [
    {
      id: 1,
      title: 'Murder Mystery Experience',
      date: 'March 2026',
      location: 'Spain',
      guests: '50-200',
      description: 'Immersive theatrical experience with Hollywood-quality production and celebrity appearances',
      highlights: ['Celebrity Host', 'Haute Couture', 'TV Coverage', 'Gourmet Dining'],
      featured: true,
    },
    {
      id: 2,
      title: 'Secret Service Gala',
      date: 'April 2026',
      location: 'International',
      guests: '100-300',
      description: 'Exclusive black-tie event with VIP networking and elite entertainment',
      highlights: ['Private Venue', 'Celebrity Appearances', 'Live Entertainment', 'Luxury Catering'],
      featured: false,
    },
    {
      id: 3,
      title: 'Mountain Mystery',
      date: 'May 2026',
      location: 'Sierra Nevada',
      guests: '75-150',
      description: 'Luxury mountain retreat with mystery experience and exclusive activities',
      highlights: ['Mountain Venue', 'Exclusive Experience', 'Adventure Activities', 'Fine Dining'],
      featured: false,
    },
    {
      id: 4,
      title: 'Red Carpet Experience',
      date: 'June 2026',
      location: 'Global',
      guests: '200-500',
      description: 'Premium brand launch with red carpet premiere and media coverage',
      highlights: ['Media Coverage', 'Celebrity Guests', 'Brand Presence', 'Live Streaming'],
      featured: false,
    },
    {
      id: 5,
      title: 'Shine Awards Ceremony',
      date: 'July 2026',
      location: 'International',
      guests: '300-1000',
      description: 'Prestigious awards ceremony celebrating excellence and achievement',
      highlights: ['Live TV Coverage', 'A-List Celebrities', 'Global Broadcast', 'Exclusive Dinner'],
      featured: false,
    },
  ]

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#0d0d0d]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c9a55a]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#c9a55a]/3 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <FadeIn delay={100}>
            <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm font-medium mb-6">
              UPCOMING EVENTS
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-8 text-balance">
              What&apos;s On This Season
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Discover our curated selection of exclusive events and experiences designed for the most discerning clientele.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Event */}
      {upcomingEvents[0] && (
        <section className="py-24 bg-[#111111] relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#c9a55a]/20 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <FadeIn>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-[#c9a55a]/20 text-[#c9a55a] rounded-full text-sm font-medium">
                  Featured Experience
                </span>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left" delay={100}>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
                      {upcomingEvents[0].title}
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      {upcomingEvents[0].description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="text-[#c9a55a] mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-white/60 text-sm">When</p>
                        <p className="text-white font-medium">{upcomingEvents[0].date}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="text-[#c9a55a] mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-white/60 text-sm">Where</p>
                        <p className="text-white font-medium">{upcomingEvents[0].location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="text-[#c9a55a] mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-white/60 text-sm">Capacity</p>
                        <p className="text-white font-medium">{upcomingEvents[0].guests} guests</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sparkles className="text-[#c9a55a] mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-white/60 text-sm">Type</p>
                        <p className="text-white font-medium">Luxury Experience</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-white/60 text-sm mb-3 font-medium">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      {upcomingEvents[0].highlights.map((highlight, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-[#c9a55a]/30 text-white text-sm rounded-full hover:border-[#c9a55a]/60 transition-colors">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/events/murder-mystery-experience"
                    className="inline-block px-10 py-4 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={200}>
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c9a55a]/20 to-transparent z-10" />
                  <Image
                    src="/images/showcase.jpg"
                    alt={upcomingEvents[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      {/* Other Events Grid */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                More Exciting Experiences
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {upcomingEvents.slice(1).map((event, i) => (
              <FadeIn key={event.id} delay={i * 100} direction="up">
                <Link href={`/events/${event.id}`} className="group block h-full">
                  <div className="h-full bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden hover:border-[#c9a55a]/50 transition-all duration-500 flex flex-col">
                    <div className="aspect-video relative overflow-hidden bg-white/5">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#c9a55a]/20 to-transparent z-10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="text-[#c9a55a]/20" size={48} />
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-[#c9a55a] transition-colors">
                        {event.title}
                      </h3>

                      <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {event.location}
                        </div>
                      </div>

                      <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
                        {event.description}
                      </p>

                      <div className="flex flex-wrap gap-1">
                        {event.highlights.slice(0, 2).map((highlight, j) => (
                          <span key={j} className="px-2 py-1 text-xs bg-white/5 text-white/70 rounded">
                            {highlight}
                          </span>
                        ))}
                        {event.highlights.length > 2 && (
                          <span className="px-2 py-1 text-xs bg-white/5 text-white/70 rounded">
                            +{event.highlights.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c9a55a]/10 via-[#c9a55a]/5 to-[#c9a55a]/10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-white/60 mb-10 text-lg">
              Inquire about our exclusive events and secure your place among the elite
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
