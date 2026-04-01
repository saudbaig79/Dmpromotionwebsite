'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { ArrowLeft } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export default function CeoReviewPage() {
  const { t } = useI18n()

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#c9a55a] hover:text-white transition-colors mb-8">
              <ArrowLeft size={20} />
              {t('blog.title')}
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
              CEO Review
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={200}>
            <div className="relative aspect-video rounded overflow-hidden mb-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Duncan%20CEO-8QCVDEn8SlteD8gZIq8KHZrTVIGjUz.png"
                alt="Duncan McHugh, CEO"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p className="text-lg font-semibold text-white">
                Duncan McHugh, CEO of DM Promotions, shares his vision on creating unforgettable luxury experiences and building meaningful connections with the world&apos;s most influential figures.
              </p>

              <div className="bg-[#1a1a1a] border-l-4 border-[#c9a55a] p-8 my-8">
                <p className="text-white italic mb-4">
                  &quot;Sierra Nevada ski resort has the right blend of people I can work with to satisfy our high-end clients. It has a luxury bubble of 5-star skiing heaven, where you can enjoy the best of both worlds: the snow and the sun, the mountains and the sea, the tradition and the innovation. It&apos;s a place where you can have fun, relax, and be inspired.&quot;
                </p>
                <p className="text-[#c9a55a] font-semibold">— Duncan McHugh, CEO of DM Promotions</p>
              </div>

              <p>
                At DM Promotions, our mission is to curate experiences that transcend ordinary expectations. We work with football stars, singers, Hollywood A-list celebrities, and dignitaries from around the globe who seek more than just a vacation—they seek transformation and inspiration.
              </p>

              <p>
                Our network spans continents and industries. We believe that the best experiences happen when the right people converge in the right environment. Whether it&apos;s a championship polo tournament in Spain, an exclusive ski retreat in the Sierra Nevada, or a bespoke yacht experience in the Mediterranean, we ensure every detail reflects excellence.
              </p>

              <p>
                The future of luxury travel and entertainment lies in personalization, authenticity, and connection. We&apos;re not just creating events—we&apos;re creating memories that will be cherished for a lifetime. From the initial concept to the final toast, every element is designed with precision and care.
              </p>

              <p>
                Our partnerships with the world&apos;s most prestigious venues, resorts, and service providers allow us to deliver experiences that are truly one-of-a-kind. We pride ourselves on understanding the needs and desires of our clientele, often anticipating requests before they&apos;re even made.
              </p>

              <p>
                As we continue to expand our portfolio of exclusive experiences, we remain committed to the principles that have made DM Promotions a leader in the industry: integrity, innovation, and an unwavering dedication to excellence.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="mt-12 pt-8 border-t border-white/10">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-[#c9a55a] text-black font-semibold hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm rounded"
              >
                {t('cta.contact')}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
