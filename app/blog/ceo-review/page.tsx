'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export default function CeoReviewPage() {
  const { t } = useLanguage()

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              {t('blog.ceo.title')}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={200}>
            <div className="relative h-[400px] rounded-sm overflow-hidden mb-12">
              <Image
                src="/images/vip-igloo.jpg"
                alt="VIP Igloo Experience"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                As a ski expert, I have visited resorts all around the world, but none of them impressed me as much as Sierra Nevada. The passion and rapidly evolving infrastructure make it a standout destination for luxury travelers.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                The VIP Igloo experience is something truly unique. Imagine enjoying a gourmet meal in a private, heated igloo with panoramic views of the snow-capped peaks. It&apos;s an experience that combines exclusivity with the raw beauty of nature.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                The resort&apos;s commitment to excellence is evident in every detail - from the expertly groomed slopes to the attentive service at every touchpoint. The ski instructors are world-class, many having competed at international levels.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                What particularly impressed me was the attention to privacy. For high-profile guests, the resort offers discreet access and dedicated facilities that ensure a peaceful, exclusive experience.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                I wholeheartedly recommend Sierra Nevada to anyone seeking a premium ski experience with unmatched service and stunning scenery.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="mt-12 pt-8 border-t border-white/10">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-[#c9a55a] text-[#0d0d0d] font-semibold hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
              >
                {t('cta.button')}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
