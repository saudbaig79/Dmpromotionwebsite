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

      {/* Private Jet Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-12">Private Jet Charter</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {jetImages.map((image, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="relative aspect-video rounded overflow-hidden">
                  <Image
                    src={image}
                    alt={`Jet image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <h3 className="text-2xl font-bold text-white mb-6">Experience in Motion</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {jetVideos.map((video, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div className="relative aspect-video rounded overflow-hidden bg-black group cursor-pointer" onClick={() => toggleVideoPlay(video.id)}>
                    {!playingVideos[video.id] ? (
                      <>
                        <Image
                          src={video.poster}
                          alt={`Jet video ${i + 1} thumbnail`}
                          fill
                          className="object-cover"
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

      {/* Helicopter Section */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-12">Helicopter Tours & Transfers</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-6">
            {helicopterImages.map((image, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="relative aspect-video rounded overflow-hidden">
                  <Image
                    src={image}
                    alt={`Helicopter image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#0d0d0d] rounded p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Sky-High Luxury
              </h2>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                Travel in ultimate comfort and style with our private jet charter service. Enjoy exclusive access to premium aircraft, personalized service, and the freedom to travel on your own schedule. Perfect for VIPs and those accustomed to the finest things in life.
              </p>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                Rise above the ordinary with our helicopter charter service. Experience breathtaking aerial views, convenient transfers to exclusive destinations, and an unforgettable perspective on luxury travel.
              </p>
              <p className="text-white/70 leading-relaxed text-lg">
                Whether you need swift transport to your next engagement or seek an extraordinary aerial experience, our air travel solutions deliver uncompromising excellence and sophistication at every altitude.
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
