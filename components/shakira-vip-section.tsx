'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '@/components/fade-in'
import { MapPin, Calendar, BedDouble, Sparkles } from 'lucide-react'

export function ShakiraVipSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24">
      {/* Ambient gold glow accents */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-[#c9a55a]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[#c9a55a]/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <FadeIn>
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#c9a55a]/40 bg-[#c9a55a]/10 text-[#c9a55a] text-xs font-medium uppercase tracking-[0.3em]">
              <Sparkles size={14} />
              Featured Experience
            </span>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <FadeIn delay={100}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-xl border border-[#c9a55a]/15" />
              <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-lg overflow-hidden border border-[#c9a55a]/25 shadow-[0_0_70px_rgba(201,165,90,0.18)]">
                <Image
                  src="/images/shakira-madrid-tour.jpg"
                  alt="Shakira, Las Mujeres Ya No Lloran World Tour artwork"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg" />
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <div>
            <FadeIn delay={150}>
              <h2 className="font-serif font-bold leading-[0.9] tracking-tight mb-4">
                <span className="block text-center text-6xl sm:text-7xl lg:text-8xl bg-gradient-to-b from-[#f2dfa8] via-[#c9a55a] to-[#8a6f34] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(201,165,90,0.35)]">
                  SHAKIRA
                </span>
                <span className="flex items-center gap-3 mt-4">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9a55a]/60" />
                  <span className="flex items-center gap-2 text-lg sm:text-xl lg:text-2xl font-sans font-medium text-white/90 tracking-[0.4em]">
                    <MapPin size={18} className="text-[#c9a55a] shrink-0" />
                    MADRID
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c9a55a]/60" />
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="flex items-center gap-2 text-[#c9a55a] uppercase tracking-[0.25em] text-sm font-semibold mb-8">
                <Sparkles size={14} className="shrink-0" />
                An Exclusive VIP Experience by DM Promotions
              </p>
            </FadeIn>

            {/* Primary sales message */}
            <FadeIn delay={250}>
              <div className="mb-8">
                <p className="text-white/70 uppercase tracking-[0.15em] text-sm font-medium mb-3">
                  DM Promotions Has VIP Tickets Available
                </p>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-balance leading-tight">
                  Reserve Your Place in the VIP Experience
                </h3>
              </div>
            </FadeIn>

            {/* Price + Accommodation highlight cards */}
            <FadeIn delay={300}>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex flex-col items-start justify-center gap-1 p-6 rounded-lg bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm border border-[#c9a55a]/25 transition-colors duration-300 hover:border-[#c9a55a]/50">
                  <p className="text-white/50 uppercase tracking-[0.2em] text-xs font-medium">
                    Starting Price
                  </p>
                  <p className="text-3xl sm:text-4xl font-bold text-[#c9a55a] leading-none">
                    &euro;1,000
                  </p>
                  <p className="text-white/50 text-sm">per person</p>
                </div>
                <div className="flex flex-col items-start justify-center gap-1 p-6 rounded-lg bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm border border-[#c9a55a]/25 transition-colors duration-300 hover:border-[#c9a55a]/50">
                  <BedDouble className="text-[#c9a55a] mb-1" size={22} />
                  <p className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    Accommodation
                  </p>
                  <p className="text-[#c9a55a] uppercase tracking-[0.15em] text-sm font-semibold">
                    Included
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Dates */}
            <FadeIn delay={350}>
              <div className="flex items-center gap-2 mb-6 text-white/60">
                <Calendar size={16} className="text-[#c9a55a]" />
                <p className="text-sm uppercase tracking-[0.2em]">
                  18 September &ndash; 11 October 2026
                </p>
              </div>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={400}>
              <p className="text-white/70 text-base leading-relaxed mb-10 max-w-xl">
                Experience Shakira in Madrid with an exclusive VIP package from DM
                Promotions, including accommodation.
              </p>
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={450}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-block px-12 py-4 bg-[#c9a55a] text-black font-bold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm text-center shadow-[0_0_30px_rgba(201,165,90,0.35)]"
                >
                  Enquire Now
                </Link>
                <p className="text-white/50 text-sm">
                  DM for tickets &amp; information
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
