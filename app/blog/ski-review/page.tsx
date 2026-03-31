'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { ArrowLeft } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export default function SkiReviewPage() {
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
              {t('blog.skiTitle')}
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
                src="/images/ski.jpg"
                alt="Sierra Nevada"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                At DM Promotions, we are always on the lookout for the best destinations for our elite clientele. That&apos;s why we were thrilled to visit Sierra Nevada, one of the most spectacular ski resorts in Europe.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Located in the heart of Andalusia, Spain, Sierra Nevada offers a unique combination of world-class skiing and Mediterranean climate. With over 100 kilometers of pistes and modern lift infrastructure, it caters to skiers of all levels.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                What sets Sierra Nevada apart is its exclusive VIP experiences. From private chalets to gourmet dining at altitude, the resort understands the needs of discerning travelers who demand nothing but the best.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                The resort&apos;s proximity to Granada means guests can combine skiing with cultural experiences, visiting the famous Alhambra palace or enjoying the vibrant tapas scene in the city.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                For our clients seeking a luxury ski experience with a touch of Spanish flair, Sierra Nevada is our top recommendation.
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
