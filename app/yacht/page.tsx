'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'

export default function Yacht() {
  const images = [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yacht%20%281%29-Rg7hexYJu02BGGZJm68C4L0tGQ5NHt.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yacht%20%282%29-glX03Agx4DKyWLAHsTCCkmVsiZqQBz.jpg',
  ]

  const videos = [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yacht%20%282%29-Qml30qtOy7cc6fLOv3kNeqowkSLA6C.mp4',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yacht%20%281%29-YprEKJ8vaGO0rfq4xLzxSijrXgjeLS.mp4',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yacht%20%283%29-9s8wuYwotdk1XXflgTXM8hgyjLil2e.mp4',
  ]

  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-96 flex items-center justify-center pt-20 bg-gradient-to-b from-black/50 to-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <FadeIn>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              Malex Super Yacht
            </h1>
            <p className="text-xl text-white/70">
              Luxury at sea on Europe's most magnificent vessel
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-12">Gallery</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {images.map((image, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="relative aspect-video rounded overflow-hidden">
                  <Image
                    src={image}
                    alt={`Yacht image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Videos */}
          <FadeIn delay={200}>
            <h3 className="text-2xl font-bold text-white mb-6">Experience in Motion</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {videos.map((video, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <video
                    src={video}
                    controls
                    className="w-full aspect-video rounded overflow-hidden"
                  />
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
                The Ultimate Luxury Experience
              </h2>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                Experience the pinnacle of nautical luxury aboard the magnificent Malex Super Yacht. Designed for those with refined taste and discerning standards, this exclusive vessel offers unparalleled elegance, world-class service, and unforgettable Mediterranean adventures.
              </p>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                With stunning accommodations, state-of-the-art amenities, and a professional crew dedicated to your every need, the Malex Super Yacht is the perfect setting for exclusive events, intimate gatherings, or leisurely escapes to the world's most beautiful coastlines.
              </p>
              <p className="text-white/70 leading-relaxed text-lg">
                Whether you're seeking a private charter, corporate retreat, or once-in-a-lifetime celebration, this vessel provides the ultimate backdrop for creating memories that will last a lifetime.
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
              Charter Your Luxury Experience
            </h2>
            <p className="text-white/60 mb-10 text-lg">
              Contact us for exclusive yacht charter inquiries and availability.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Inquire Now
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
