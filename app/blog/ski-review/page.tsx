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
              Ski Review
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={200}>
            <div className="relative aspect-square rounded overflow-hidden mb-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/debbie-FDLdmoSEMI3diF6055yo7zLyPv2sdn.jpg"
                alt="Debbie Wingham at Sierra Nevada"
                fill
                className="object-contain bg-black"
              />
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p className="text-lg">
                At DM Promotions, we are always on the lookout for the best destinations for our elite clientele. That&apos;s why we were thrilled to visit Sierra Nevada ski resort in Spain, the southernmost ski resort in Europe, with the world-renowned multimedia artist Debbie Wingham. We wanted to see for ourselves why this resort is becoming the new ski playground for the rich and famous. We were not disappointed.
              </p>

              <p>
                Sierra Nevada ski resort offers a wide range of winter and summer activities in a privileged environment, with stunning views of the historic city of Granada and the world-famous Alhambra. The resort has 124 ski runs for all levels of skiers, from beginners to experts, as well as snow parks, half-pipes, and cross-country trails.
              </p>

              <p>
                The resort also boasts a lively après-ski scene, with bars, restaurants, shops, and entertainment options for every taste.
              </p>

              <div className="bg-[#1a1a1a] border-l-4 border-[#c9a55a] p-8 my-8">
                <p className="text-white italic mb-4">
                  &quot;Sierra Nevada ski resort is a gem in the heart of Spain. It has everything you need for a perfect ski holiday: quality, comfort, style, and glamour. I loved the resort&apos;s facilities, especially the spa, the heated pool, and the cozy fireplace. I also enjoyed the resort&apos;s art and culture, with exhibitions, concerts, and festivals throughout the year.&quot;
                </p>
                <p className="text-[#c9a55a] font-semibold">
                  — Debbie Wingham, Multimedia Artist &amp; Creative Innovator
                </p>
              </div>

              <p>
                Debbie Wingham, known as the Queen of the World&apos;s Most Expensive, was thoroughly impressed by the resort&apos;s luxury and exclusivity. Her endorsement speaks volumes about the caliber of experience Sierra Nevada provides.
              </p>

              <p>
                We at DM Promotions highly recommend Sierra Nevada ski resort to anyone looking for a unique and unforgettable ski holiday. It&apos;s a resort that has it all: beauty, adventure, culture, and sophistication. It&apos;s a resort that will make you fall in love with skiing and with Spain.
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
