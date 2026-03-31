'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useI18n } from '@/lib/i18n'
import { useState } from 'react'

export default function EventsPage() {
  const { t } = useI18n()
  const [activeEvent, setActiveEvent] = useState('murder-mystery')

  const events = [
    {
      id: 'murder-mystery-experience',
      slug: 'murder-mystery',
      title: 'Murder Mystery Experience',
      description: 'Immersive theatrical experience with Hollywood-quality production, celebrity hosts, and exclusive rewards.',
      category: 'Immersive Experience',
    },
    {
      id: 'secret-service',
      slug: 'secret-service',
      title: 'Secret Service',
      description: 'Exclusive black-tie gala with VIP networking, celebrity appearances, and elite entertainment.',
      category: 'Luxury Gala',
    },
    {
      id: 'mountain-mystery',
      slug: 'mountain-mystery',
      title: 'Mountain Mystery',
      description: 'Luxury mountain retreat in Sierra Nevada with mystery experience and exclusive activities.',
      category: 'Resort Experience',
    },
    {
      id: 'red-carpet',
      slug: 'red-carpet',
      title: 'Red Carpet',
      description: 'Premium brand launch with red carpet premiere, media coverage, and global streaming.',
      category: 'Brand Launch',
    },
    {
      id: 'shine',
      slug: 'shine',
      title: 'Shine Awards Ceremony',
      description: 'Prestigious awards ceremony celebrating excellence with TV coverage and A-list celebrities.',
      category: 'Awards Ceremony',
    },
    {
      id: 'ultimate-polo-experience',
      slug: 'ultimate-polo-experience',
      title: 'The Ultimate Polo Experience',
      description: 'Championship polo combined with luxury hospitality, world-class venues, and elite networking.',
      category: 'Elite Sport Experience',
    },
  ]

  const activeEventData = events.find(e => e.slug === activeEvent) || events[0]

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
              {t('nav.events')}
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-8 text-balance">
              Exclusive Event Experiences
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of premium events, each crafted to deliver unforgettable memories for the most discerning guests.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Events Navigation & Details */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Event Tabs */}
          <FadeIn>
            <div className="mb-16 overflow-x-auto">
              <div className="flex gap-3 pb-4 min-w-max lg:min-w-full lg:flex-wrap justify-center lg:justify-start">
                {events.map((event) => (
                  <button
                    key={event.slug}
                    onClick={() => setActiveEvent(event.slug)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 uppercase tracking-wider text-sm whitespace-nowrap ${
                      activeEvent === event.slug
                        ? 'bg-[#c9a55a] text-black shadow-lg shadow-[#c9a55a]/30'
                        : 'bg-[#1a1a1a] text-white/70 border border-white/10 hover:border-[#c9a55a]/50 hover:text-[#c9a55a]'
                    }`}
                  >
                    {event.title}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Active Event Details */}
          <FadeIn key={activeEvent} delay={100}>
            <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-8 sm:p-12">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-[#c9a55a]/20 text-[#c9a55a] rounded-full text-sm font-medium mb-4">
                  {activeEventData.category}
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                  {activeEventData.title}
                </h2>
              </div>

              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {activeEventData.description}
              </p>

              {activeEvent === 'murder-mystery' && (
                <div className="space-y-4 mb-8">
                  <p className="text-white/60">
                    Experience our flagship immersive event featuring:
                  </p>
                  <ul className="space-y-2 text-white/60">
                    <li>- Hollywood-quality theatrical production</li>
                    <li>- World-renowned celebrity host</li>
                    <li>- Award-winning culinary experience</li>
                    <li>- TV coverage on Apple TV, Roku, and Amazon (150M+ homes)</li>
                    <li>- Luxury art prizes worth €20,000+</li>
                    <li>- Professional styling and hair/makeup services</li>
                  </ul>
                </div>
              )}

              <Link
                href={`/events/${activeEventData.id}`}
                className="inline-block px-10 py-4 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
              >
                Explore Full Experience
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* All Events Grid */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                Our Event Portfolio
              </h2>
              <p className="text-white/60 text-lg">
                Each event is meticulously designed and executed to exceed expectations
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <FadeIn key={event.id} delay={i * 100} direction="up">
                <Link href={`/events/${event.id}`} className="group block h-full">
                  <div className="h-full p-8 bg-[#1a1a1a] border border-white/10 rounded-lg hover:border-[#c9a55a]/50 transition-all duration-500 flex flex-col">
                    <span className="inline-block px-3 py-1 bg-[#c9a55a]/20 text-[#c9a55a] rounded text-xs font-medium mb-4 w-fit">
                      {event.category}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-[#c9a55a] transition-colors flex-grow">
                      {event.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                      {event.description}
                    </p>
                    <div className="text-[#c9a55a] text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Learn More →
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DM Promotions */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                Why Choose DM Promotions
              </h2>
              <p className="text-white/60 text-lg">
                25+ years of experience delivering world-class events
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Luxury Excellence',
                description: 'Every detail meticulously planned and executed to perfection for an elite experience',
              },
              {
                title: 'Celebrity Connections',
                description: 'Access to A-list celebrities including Bruno Mars, Rihanna, Katy Perry, and more',
              },
              {
                title: 'Global Reach',
                description: 'TV coverage and media presence across international platforms and publications',
              },
              {
                title: 'Bespoke Service',
                description: 'Customized events tailored to your specific vision and requirements',
              },
              {
                title: 'Proven Track Record',
                description: 'Trusted by Rolex, Ferrari, Bentley, and leading international brands',
              },
              {
                title: 'Professional Team',
                description: 'Expert event managers, creatives, and coordinators with decades of combined experience',
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100} direction="up">
                <div className="p-6 bg-[#1a1a1a] border border-white/10 rounded-lg hover:border-[#c9a55a]/50 transition-all duration-500">
                  <h3 className="text-lg font-serif font-bold text-[#c9a55a] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c9a55a]/10 via-[#c9a55a]/5 to-[#c9a55a]/10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Ready to Experience Excellence?
            </h2>
            <p className="text-white/60 mb-10 text-lg">
              Contact our team to discuss your perfect event
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
