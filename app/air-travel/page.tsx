'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useState } from 'react'
import { Play } from 'lucide-react'

export default function AirTravel() {
  const [playingVideos, setPlayingVideos] = useState<Record<string, boolean>>({})

  const jetImages = [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%281%29.webp-sKVR9GJKvs2Oa8m7NyIIchNCCa2fr8.jpeg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%282%29-nQWrQYhPLtshRvQISaygkNn3TlLYjI.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jet-tcbmUGyBuRswxZJ63wbRvU1RnApzm8.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jet%20%281%29-kmivuwq53bMqnwf2R2JGgmrpIpOPBZ.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jet%20%282%29-YbOwoP0Kcyvfj79GRONgtPbwCCSj0K.jpg',
  ]

  const helicopterImages = [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%281%29-Ek0Di6FoFMUhd6k8PBeYcvZbRx6V76.jpg',
  ]

  const jetVideos = [
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%281%29-8zZtvJ8FaHO4GCLJ7M2L3mBKE4zQZ2.mp4',
      poster: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%281%29.webp-sKVR9GJKvs2Oa8m7NyIIchNCCa2fr8.jpeg',
      id: 'jet-1'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%282%29-Fys5ygT7m6Udg7lXgFwuQ9awDm1UwX.mp4',
      poster: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%282%29-nQWrQYhPLtshRvQISaygkNn3TlLYjI.jpg',
      id: 'jet-2'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%283%29-m4ArhtguJ9QWiJbULzgzvjcuWnzY84.mp4',
      poster: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jet%20%281%29-kmivuwq53bMqnwf2R2JGgmrpIpOPBZ.jpg',
      id: 'jet-3'
    },
  ]

  const toggleVideoPlay = (videoId: string) => {
    setPlayingVideos(prev => ({
      ...prev,
      [videoId]: !prev[videoId]
    }))
  }

  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-96 flex items-center justify-center pt-20 bg-gradient-to-b from-black/50 to-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <FadeIn>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              Private Jet & Helicopter Charter
            </h1>
            <p className="text-xl text-white/70">
              Luxury air travel for the discerning traveler
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Private Jet & Helicopter Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Premium Air Charter Experience</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                Whether by private jet or helicopter, experience uncompromising luxury in every flight
              </p>
            </div>
          </FadeIn>
          
          {/* All Images Grid */}
          <FadeIn>
            <h3 className="text-2xl font-bold text-white mb-8">Our Fleet</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[...jetImages, ...helicopterImages].map((image, i) => (
                <FadeIn key={i} delay={i * 50}>
                  <div className="relative aspect-video rounded overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src={image}
                      alt={`Luxury air transport ${i + 1}`}
                      fill
                      className="object-cover object-center hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h3 className="text-2xl font-bold text-white mb-8">Experience in Motion</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {jetVideos.map((video, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="relative aspect-video rounded overflow-hidden bg-black group cursor-pointer" onClick={() => toggleVideoPlay(video.id)}>
                    {!playingVideos[video.id] ? (
                      <>
                        <Image
                          src={video.poster}
                          alt={`Air charter video ${i + 1} thumbnail`}
                          fill
                          className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex items-center justify-center">
                          <Play size={48} className="text-[#c9a55a]" fill="currentColor" />
                        </div>
                      </>
                    ) : (
                      <video
                        src={video.src}
                        controls
                        autoPlay
                        className="w-full h-full"
                      />
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#111111] rounded p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Sky-High Luxury
              </h2>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                Experience the pinnacle of air travel with our exclusive private jet and helicopter charter services. Designed for the discerning traveler who demands uncompromising excellence, our premium aircraft fleet offers the ultimate in comfort, privacy, and sophistication.
              </p>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                Travel on your own schedule with personalized service, dedicated crew attention, and access to exclusive destinations. Whether you&apos;re seeking swift transport to your next engagement or an extraordinary aerial perspective on luxury travel, our air charter solutions deliver world-class service at every altitude.
              </p>
              <p className="text-white/70 leading-relaxed text-lg">
                From intimate transfers to VIP engagements to breathtaking aerial tours, our experienced team ensures every moment of your journey reflects the DM Promotions standard of excellence and attention to detail.
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
              Book Your Air Charter
            </h2>
            <p className="text-white/60 mb-10 text-lg">
              Contact us for exclusive air travel bookings and custom itineraries.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Reserve Now
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
