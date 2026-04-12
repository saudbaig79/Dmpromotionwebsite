'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useState } from 'react'

export default function TheBoss() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Duncan%20CEO-VrP89pCMuv5Jpe6pCTVsqxMAoDfoWV.png',
      alt: 'Duncan McHugh CEO'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boss%20%282%29-fuzv2qzVWAU0MD3V2hlWLqWNNkRWdS.jpg',
      alt: 'Duncan & Partner - Luxury Event'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boss%20%286%29-XPaK3JA7edxNwStwtrqWI7reP7vhhU.jpg',
      alt: 'Duncan & Partner - Garden Event'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boss%20%283%29-N34qEK01Ch1ejVQD4d1jubFoMbGxyu.jpg',
      alt: 'Duncan Speaking at Event'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boss%20%281%29-IYofP1kaFiAkFY87a2HHQTr7aMyH74.jpg',
      alt: 'Duncan in Luxury Setting'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boss%20%285%29-IsI86m1pm01IACyyPHG3ehkpcT9Xsn.jpg',
      alt: 'Duncan at Waterside Venue'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boss%20%284%29-Yc1WoDafl2SlksJISnhVngIwETdoHb.jpg',
      alt: 'Duncan & Partner - Formal Event'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boss%20%281%29-q8a18IPJgfqktNK90UfAe5n8lqKMDK.png',
      alt: 'Duncan at Event with Candles'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Boss%20%285%29-bhTcdwzXmpUAO8JqloVM7FKeDYePjk.jpg',
      alt: 'Luxury Dining Event with Duncan'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Boss%20%284%29-Q4Yl1cZguLxVfXP5OPJmshvDuBriUc.jpg',
      alt: 'Media Coverage at Luxury Event'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Boss%20%286%29-VZHU34my6RvdtbNKnYJtFopdayYD92.jpg',
      alt: 'Formal Event with Guests'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boss-UOShs0gqzWskuj43iY2C2yWJ1HHPIq.jpg',
      alt: 'VIP Guests at Exclusive Event'
    }
  ]

  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-96 flex items-center justify-center pt-20 bg-gradient-to-b from-black/50 to-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <FadeIn>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              The Boss
            </h1>
            <p className="text-xl text-white/70">
              A collection of unforgettable luxury moments and experiences
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Image */}
            <FadeIn className="lg:col-span-2">
              <div className="relative aspect-[4/5] rounded overflow-hidden">
                <Image
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </FadeIn>

            {/* Thumbnails */}
            <FadeIn>
              <div className="grid grid-cols-2 gap-3 h-full">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative aspect-square rounded overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-[#c9a55a]'
                        : 'border-white/20 hover:border-white/50'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#111111] rounded p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Moments of Excellence
              </h2>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                Welcome to The Boss Gallery—a curated collection showcasing the pinnacle of luxury events and unforgettable experiences orchestrated by Duncan McHugh and his elite team at DM Promotions.
              </p>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                With over 25 years of expertise in media and high-end promotions, each photograph tells a story of meticulous planning, attention to detail, and extraordinary execution. From intimate luxury gatherings to grand celebrations, these moments represent the caliber of excellence we bring to every event.
              </p>
              <p className="text-white/70 leading-relaxed text-lg">
                Whether hosting celebrities, business titans, or curating exclusive VIP experiences, our commitment to perfection is evident in every frame. This gallery is a testament to what happens when luxury meets influence.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c9a55a]/10 via-[#c9a55a]/5 to-[#c9a55a]/10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Create Your Moment?
            </h2>
            <p className="text-white/60 mb-10 text-lg">
              Get in touch to discuss your vision for an unforgettable luxury event.
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
