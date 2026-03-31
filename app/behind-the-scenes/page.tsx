'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'

export default function BehindTheScenesPage() {
  const galleries = [
    {
      title: 'Santa Maria Polo Club',
      description: 'Exclusive polo events featuring world-class players and prestigious matches',
      images: [
        '/images/polo-match.jpg',
        '/images/santa-maria-polo.jpg',
        '/images/award-ceremony.jpg',
        '/images/polo-trophy-ceremony.jpg',
        '/images/polo-player-action.jpg',
        '/images/polo-crowd.jpg',
        '/images/polo-vip-tent.jpg',
        '/images/santa-maria-terrace.jpg',
      ],
    },
    {
      title: 'Sierra Nevada Luxury Resort',
      description: 'Premium alpine experiences and elegant mountain gatherings',
      images: [
        '/images/sierra-woman-mountain.jpg',
        '/images/sierra-balcony.jpg',
        '/images/sierra-luxury-chalet.jpg',
        '/images/sierra-nevada-terrace.jpg',
        '/images/ski-fashion.jpg',
      ],
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
              Behind the Scenes
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-8 text-balance">
              Glimpses of Our Exclusive Events
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Experience the luxury, elegance, and unforgettable moments from our most prestigious events and collaborations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Sections */}
      {galleries.map((gallery, galleryIndex) => (
        <section key={galleryIndex} className={galleryIndex % 2 === 0 ? 'bg-[#111111]' : 'bg-[#0d0d0d]'}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <FadeIn>
              <div className="mb-16">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                  {gallery.title}
                </h2>
                <p className="text-white/60 text-lg">
                  {gallery.description}
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {gallery.images.map((image, imgIndex) => (
                <FadeIn
                  key={imgIndex}
                  delay={imgIndex * 50}
                  direction="up"
                >
                  <div className="group relative aspect-square rounded overflow-hidden bg-[#1a1a1a] border border-white/10 hover:border-[#c9a55a]/50 transition-all duration-500 cursor-pointer">
                    <Image
                      src={image}
                      alt={`${gallery.title} - Image ${imgIndex + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Gala Events Section */}
      <section className="bg-[#111111] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                Gala & Charity Events
              </h2>
              <p className="text-white/60 text-lg">
                Elegant celebrations supporting global causes and bringing together influential leaders
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn direction="left" delay={100}>
              <div className="relative aspect-video rounded overflow-hidden bg-[#1a1a1a] border border-white/10 hover:border-[#c9a55a]/50 transition-all duration-500 group">
                <Image
                  src="/images/gala-dinner.jpg"
                  alt="Global Gift Gala Dinner"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="relative aspect-video rounded overflow-hidden bg-[#1a1a1a] border border-white/10 hover:border-[#c9a55a]/50 transition-all duration-500 group">
                <Image
                  src="/images/cake-ceremony.jpg"
                  alt="Celebration Ceremony"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={300}>
              <div className="relative aspect-video rounded overflow-hidden bg-[#1a1a1a] border border-white/10 hover:border-[#c9a55a]/50 transition-all duration-500 group">
                <Image
                  src="/images/formal-gala.jpg"
                  alt="Formal Gala Event"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={400}>
              <div className="relative aspect-video rounded overflow-hidden bg-[#1a1a1a] border border-white/10 hover:border-[#c9a55a]/50 transition-all duration-500 group">
                <Image
                  src="/images/event-street.jpg"
                  alt="DM Promotions Event"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c9a55a]/10 via-[#c9a55a]/5 to-[#c9a55a]/10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Inspired by What You&apos;ve Seen?
            </h2>
            <p className="text-white/60 mb-10 text-lg">
              Let&apos;s create your unforgettable event experience
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
