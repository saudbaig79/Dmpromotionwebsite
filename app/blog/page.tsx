'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useLanguage } from '@/lib/language-context'

export default function BlogPage() {
  const { t } = useLanguage()

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              {t('blogPage.title')}
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              {t('blogPage.subtitle')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={100}>
              <Link href="/blog/ski-review" className="block group">
                <div className="bg-[#1a1a1a] border border-white/5 rounded-sm overflow-hidden hover:border-[#c9a55a]/30 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/images/sierra-nevada.jpg"
                      alt="Ski Review"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-serif font-bold mb-4 text-[#c9a55a] group-hover:text-white transition-colors">
                      {t('blog.ski.title')}
                    </h2>
                    <p className="text-white/50 leading-relaxed">
                      {t('blog.ski.excerpt')}
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={200}>
              <Link href="/blog/ceo-review" className="block group">
                <div className="bg-[#1a1a1a] border border-white/5 rounded-sm overflow-hidden hover:border-[#c9a55a]/30 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src="/images/vip-igloo.jpg"
                      alt="A CEO's Review"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="text-2xl font-serif font-bold mb-4 text-[#c9a55a] group-hover:text-white transition-colors">
                      {t('blog.ceo.title')}
                    </h2>
                    <p className="text-white/50 leading-relaxed">
                      {t('blog.ceo.excerpt')}
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
