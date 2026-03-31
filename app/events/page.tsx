'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'

export default function EventsPage() {
  const events = [
    {
      id: 'murder-mystery-tv-show',
      title: 'Murder Mystery TV Show',
    },
    {
      id: 'secret-service',
      title: 'Secret Service',
    },
    {
      id: 'mountain-mystery',
      title: 'Mountain Mystery',
    },
    {
      id: 'red-carpet',
      title: 'Red Carpet',
    },
    {
      id: 'shine',
      title: 'Shine',
    },
  ]

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#0d0d0d]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c9a55a]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <FadeIn delay={100}>
            <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm font-medium mb-6">
              OUR EVENTS
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-8 text-balance">
              Upcoming Events & Media Launches
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Explore our exclusive collection of premium events and experiences designed for discerning guests.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <FadeIn key={i} delay={i * 100} direction="up">
                <Link href={`/events/${event.id}`} className="group block">
                  <div className="h-full p-8 bg-[#1a1a1a] border border-white/10 rounded hover:border-[#c9a55a]/50 transition-all duration-500 flex flex-col justify-center">
                    <h3 className="text-2xl font-serif font-bold text-white group-hover:text-[#c9a55a] transition-colors">
                      {event.title}
                    </h3>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* All Available Events List */}
          <div className="mt-16 bg-[#1a1a1a] border border-white/10 rounded-lg p-8 sm:p-12">
            <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">
              All Available Events
            </h2>
            <div className="space-y-3">
              {events.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="group flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded transition-colors duration-300"
                >
                  <span className="text-white group-hover:text-[#c9a55a] transition-colors font-medium">
                    {event.title}
                  </span>
                  <span className="text-[#c9a55a] text-sm">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c9a55a]/10 via-[#c9a55a]/5 to-[#c9a55a]/10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Don&apos;t Hesitate to Use Our Services
            </h2>
            <p className="text-white/60 mb-10 text-lg">
              Your Event Will Be Special
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Contact Us
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
