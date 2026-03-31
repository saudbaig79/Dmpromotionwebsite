'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useI18n } from '@/lib/i18n'

export default function EventsPage() {
  const { t } = useI18n()

  const events = [
    {
      id: 'murder-mystery-tv-show',
      title: 'Murder Mystery TV Show',
      image: '/images/gala-dinner.jpg',
    },
    {
      id: 'secret-service',
      title: 'Secret Service',
      image: '/images/formal-gala.jpg',
    },
    {
      id: 'mountain-mystery',
      title: 'Mountain Mystery',
      image: '/images/sierra-woman-mountain.jpg',
    },
    {
      id: 'red-carpet',
      title: 'Red Carpet',
      image: '/images/event-street.jpg',
    },
    {
      id: 'shine',
      title: 'Shine',
      image: '/images/cake-ceremony.jpg',
    },
  ]

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gala-dinner.jpg"
            alt="DM Promotions Events"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0d0d0d]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <FadeIn delay={100}>
            <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm font-medium mb-6">
              OUR EVENTS
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight mb-8">
              Exclusive Events & Experiences
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Discover our curated collection of luxury events designed to create unforgettable experiences for discerning clientele worldwide.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm font-medium mb-4">
                FEATURED EVENTS
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                Our Event Portfolio
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {events.map((event, i) => (
              <FadeIn key={event.id} delay={i * 100} direction="up">
                <Link href={`/events/${event.id}`} className="group block h-full">
                  <div className="relative aspect-[4/5] rounded overflow-hidden bg-[#1a1a1a] border border-white/10 hover:border-[#c9a55a] transition-all duration-500">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-white mb-2">
                          {event.title}
                        </h3>
                        <p className="text-[#c9a55a] text-sm font-medium uppercase tracking-wider">
                          Discover More →
                        </p>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-transparent transition-colors duration-300">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* Events List Section */}
          <FadeIn delay={500}>
            <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                Looking for a Specific Experience?
              </h2>
              <p className="text-white/60 mb-8 text-lg">
                Each of our events is carefully curated to deliver luxury, elegance, and unforgettable memories.
              </p>
              
              <div className="bg-[#0d0d0d] rounded-lg p-8 mb-8">
                <h3 className="text-lg font-semibold text-white mb-6">All Available Events:</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                  {events.map((event) => (
                    <Link
                      key={event.id}
                      href={`/events/${event.id}`}
                      className="group flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded transition-colors duration-300"
                    >
                      <span className="w-2 h-2 bg-[#c9a55a] rounded-full group-hover:scale-150 transition-transform" />
                      <span className="text-white group-hover:text-[#c9a55a] transition-colors">
                        {event.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-block px-10 py-4 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
              >
                Inquire About Events
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded overflow-hidden">
                <Image
                  src="/images/formal-gala.jpg"
                  alt="Luxury Event Experience"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div>
                <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-sm font-medium mb-4">
                  WHY CHOOSE DM PROMOTIONS
                </p>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
                  Luxury Events Redefined
                </h2>
                <div className="space-y-4">
                  <p className="text-white/70 leading-relaxed">
                    With 25 years of experience in premium event management, we understand the nuances of luxury entertainment.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    Our team delivers impeccable execution, from intimate gatherings to grand celebrations, ensuring every detail exceeds expectations.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    Global connections, local expertise, and an unwavering commitment to excellence define our approach to every event.
                  </p>
                </div>

                <Link
                  href="/about"
                  className="inline-block mt-8 px-8 py-3 border-2 border-[#c9a55a] text-[#c9a55a] font-semibold rounded hover:bg-[#c9a55a] hover:text-black transition-all duration-300 uppercase tracking-wider text-sm"
                >
                  Learn Our Story
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c9a55a]/10 via-[#c9a55a]/5 to-[#c9a55a]/10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Ready to Create Your Experience?
            </h2>
            <p className="text-white/60 mb-10 text-lg">
              Contact us today to discuss your event needs and let us bring your vision to life.
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
