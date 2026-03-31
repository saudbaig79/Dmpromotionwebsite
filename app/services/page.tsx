'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useLanguage } from '@/lib/language-context'

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    { key: 'festivals', image: '/images/festival.jpg' },
    { key: 'celebrity', image: '/images/celebrity.jpg' },
    { key: 'corporate', image: '/images/corporate.jpg' },
    { key: 'brand', image: '/images/brand-launch.jpg' },
    { key: 'security', image: '/images/security.jpg' },
  ]

  return (
    <main className="bg-[#0d0d0d] text-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-center">
              {t('services.title')}
            </h1>
            <p className="text-white/60 text-lg text-center max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, i) => (
              <FadeIn key={service.key} delay={100}>
                <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="relative h-[400px] rounded-sm overflow-hidden group">
                      <Image
                        src={service.image}
                        alt={t(`services.${service.key}`)}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#c9a55a]">
                      {t(`services.${service.key}`)}
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                      {t(`services.${service.key}.desc`)}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-block px-8 py-3 border border-[#c9a55a] text-[#c9a55a] hover:bg-[#c9a55a] hover:text-[#0d0d0d] transition-all duration-300 uppercase tracking-wider text-sm"
                    >
                      {t('cta.button')}
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 shimmer" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-white/60 text-lg mb-10">
              {t('cta.subtitle')}
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#c9a55a] text-[#0d0d0d] font-semibold rounded-sm hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
            >
              {t('cta.button')}
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
