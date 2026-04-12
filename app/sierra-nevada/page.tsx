'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'

export default function SierraNevada() {
  const images = [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%20Picture%20for%20sierra%20nevada%20display-AfwShJD1JTNOdTpZElOTyojAKWwYbp.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sierra%20nevada-KXl6eVPgjRzo0cBQ0i63rH35HH1HaM.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sierra%20nevada%20%285%29-LRHL01G4p903ZYTit5T91QhbcJMrHq.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sierra%20nevada%20%281%29-5W8SsTDfre0qP3e8R0Hkx0sEwPIQjF.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sierra%20nevada%20%284%29-44F2EHyUvhA8fiucbERTNeox0w1SfT.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sierra%20nevada%20%283%29-uLtYXeGfev2cLrAGVzzGU6oCNaYqDt.jpg',
  ]

  const videos = [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sierra%20nevada%20%283%29-I8hXe7TKq6i8buujbPLkXVsUFOCe81.mp4',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sierra%20nevada%20%284%29-Ezoxod5t9vjedSLlQTlh7wEsGL3Fj2.mp4',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sierra%20nevada%20%286%29-yxYqxkSnd2h2vNdvgdlnD6jzSe0hnW.mp4',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sierra%20nevada%20%281%29-hGAXHHw0RDOt5e3Kzjq8iUFYcXYje5.mp4',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sierra%20nevada%20%282%29-au8dofJ3g6KuTMLFXUjCFeHMDweZ2U.mp4',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sierra%20nevada%20%285%29-Mk3jq4E99BtsRJ2Li6Ljf8RRObVA33.mp4',
  ]

  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-96 flex items-center justify-center pt-20 bg-gradient-to-b from-black/50 to-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <FadeIn>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
              Sierra Nevada
            </h1>
            <p className="text-xl text-white/70">
              Europe's premier alpine destination
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-12">Mountain Beauty</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {images.map((image, i) => (
              <FadeIn key={i} delay={i * 50}>
                <div className="relative aspect-video rounded overflow-hidden">
                  <Image
                    src={image}
                    alt={`Sierra Nevada image ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Videos */}
          <FadeIn delay={200}>
            <h3 className="text-2xl font-bold text-white mb-6">Experience the Slopes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, i) => (
                <FadeIn key={i} delay={i * 50}>
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
                Alpine Luxury
              </h2>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                Experience Europe's premier alpine destination. Sierra Nevada offers breathtaking mountain vistas, world-class skiing, and exclusive luxury accommodations in the heart of Spain's most magnificent mountains. A destination for those seeking the finest mountain experiences.
              </p>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                With pristine slopes, contemporary ski facilities, and sophisticated après-ski culture, Sierra Nevada combines the thrill of adventure with the comfort of elite hospitality. Whether you're seeking exhilarating runs, serene mountain retreats, or exclusive mountain events, Sierra Nevada delivers an unforgettable alpine experience.
              </p>
              <p className="text-white/70 leading-relaxed text-lg">
                From championship-caliber skiing to gourmet dining, luxury spa facilities, and stunning natural beauty, Sierra Nevada is where luxury meets mountains. We can arrange exclusive access, private guides, luxury accommodations, and curated experiences to make your alpine journey truly exceptional.
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
              Plan Your Alpine Adventure
            </h2>
            <p className="text-white/60 mb-10 text-lg">
              Contact us to arrange your exclusive Sierra Nevada experience.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Book Now
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
