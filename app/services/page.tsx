'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useI18n } from '@/lib/i18n'

export default function ServicesPage() {
  const { t } = useI18n()

  const services = [
    { 
      title: t('services.festivals'),
      description: t('services.festivalsDesc'),
      image: '/images/festival.jpg' 
    },
    { 
      title: t('services.celebrity'),
      description: t('services.celebrityDesc'),
      image: '/images/celebrity.jpg' 
    },
    { 
      title: t('services.corporate'),
      description: t('services.corporateDesc'),
      image: '/images/corporate.jpg' 
    },
    { 
      title: t('services.brand'),
      description: t('services.brandDesc'),
      image: '/images/brand-launch.jpg' 
    },
    { 
      title: t('services.security'),
      description: t('services.securityDesc'),
      image: '/images/security.jpg' 
    },
  ]

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold mb-6 text-center text-white">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, i) => (
              <FadeIn key={i} delay={100}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[4/3] rounded overflow-hidden group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#c9a55a]">
                      {service.title}
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-block px-8 py-3 border-2 border-[#c9a55a] text-[#c9a55a] hover:bg-[#c9a55a] hover:text-black transition-all duration-300 uppercase tracking-wider text-sm rounded"
                    >
                      {t('cta.contact')}
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
              {t('cta.title')}
            </h2>
            <p className="text-white/60 text-lg mb-10">
              {t('cta.subtitle')}
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
            >
              {t('cta.contact')}
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
