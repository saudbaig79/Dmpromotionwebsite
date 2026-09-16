'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { ShakiraVipSection } from '@/components/shakira-vip-section'
import { useI18n } from '@/lib/i18n'
import { Check, Users, Award, Shield, ChevronDown } from 'lucide-react'

export default function Home() {
  const { t } = useI18n()

  const services = [
    {
      title: t('services.celebrity'),
      description: t('services.celebrityDesc'),
      image: '/images/celebrity.jpg',
    },
    {
      title: t('services.corporate'),
      description: t('services.corporateDesc'),
      image: '/images/corporate.jpg',
    },
    {
      title: t('services.brand'),
      description: t('services.brandDesc'),
      image: '/images/brand-launch.jpg',
    },
    {
      title: t('services.security'),
      description: t('services.securityDesc'),
      image: '/images/security.jpg',
    },
  ]

  const features = [
    { icon: Check, text: t('hero.satisfaction') },
    { icon: Users, text: t('hero.commitment') },
    { icon: Award, text: t('hero.professional') },
    { icon: Shield, text: t('hero.quality') },
  ]

  return (
    <main className="bg-[#0d0d0d] min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Luxury Event"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0d0d0d]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <FadeIn delay={100}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-4">
              DM Promotions
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#c9a55a] leading-tight mb-8">
              Where Luxury Meets Influence
            </h2>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
              {t('hero.description')}
            </p>
          </FadeIn>

          {/* Feature Grid */}
          <FadeIn delay={400}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded border border-white/10 hover:border-[#c9a55a]/50 transition-all duration-300"
                  >
                    <Icon className="text-[#c9a55a]" size={24} />
                    <span className="text-white/80 text-xs sm:text-sm font-medium text-center">{feature.text}</span>
                  </div>
                )
              })}
            </div>
          </FadeIn>

          <FadeIn delay={500}>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
            >
              {t('cta.contact')}
            </Link>
          </FadeIn>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-[#c9a55a]" />
        </div>
      </section>

      {/* Shakira Madrid - Featured VIP Experience */}
      <ShakiraVipSection />

      {/* Exclusive Services Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm font-medium mb-4">
                {t('services.title')}
              </p>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                {t('services.subtitle')}
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FadeIn key={i} delay={i * 100} direction="up">
                <div className="group relative overflow-hidden rounded bg-[#1a1a1a] border border-white/10 hover:border-[#c9a55a]/50 transition-all duration-500">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#c9a55a] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Boss Section - Restored */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm font-medium mb-4">
                {t('events.title')}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Diary of a CEO
              </h2>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Duncan%20CEO-VrP89pCMuv5Jpe6pCTVsqxMAoDfoWV.png"
                    alt="Duncan McHugh CEO"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div>
                <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-sm font-medium mb-4">
                  {t('showcase.diary')}
                </p>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Duncan McHugh: The Maverick Maestro of Music and Media
                </h3>
                <p className="text-white/60 leading-relaxed mb-6 text-lg">
                  Duncan McHugh, CEO of DM Promotions, has a team around him with 25 years of experience in media and promotion at the highest level, dealing with the limelight and front page stories. Trusted partners include Rolex, Ferrari, and Bentley, alongside A-list celebrities such as Neil Diamond, Rihanna, and Rita Ora.
                </p>
                <p className="text-white/60 leading-relaxed mb-8 text-lg">
                  From intimate luxury gatherings to grand-scale productions, Duncan brings unparalleled expertise in orchestrating unforgettable moments. His passion for excellence and meticulous attention to detail ensures every event exceeds expectations. Browse our gallery to explore the extraordinary experiences we&apos;ve created.
                </p>
                <Link
                  href="/the-boss"
                  className="inline-block px-8 py-3 border-2 border-[#c9a55a] text-[#c9a55a] font-semibold rounded hover:bg-[#c9a55a] hover:text-black transition-all duration-300 uppercase tracking-wider text-sm"
                >
                  View Gallery
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Yacht Section - Preview */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <FadeIn direction="left">
                <div>
                  <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-sm font-medium mb-4">
                    {t('luxury.yacht')}
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    Malex Super Yacht
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-8 text-lg">
                    {t('luxury.yachtDesc')}
                  </p>
                  <Link
                    href="/yacht"
                    className="inline-block px-8 py-3 border-2 border-[#c9a55a] text-[#c9a55a] font-semibold rounded hover:bg-[#c9a55a] hover:text-black transition-all duration-300 uppercase tracking-wider text-sm"
                  >
                    {t('showcase.learnMore')}
                  </Link>
                </div>
              </FadeIn>

              {/* Image */}
              <FadeIn direction="right" delay={200}>
                <div className="relative">
                  <div className="relative aspect-video rounded overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yacht%20%282%29-glX03Agx4DKyWLAHsTCCkmVsiZqQBz.jpg"
                      alt="Malex Super Yacht"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Jet & Helicopter Section - Preview */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <FadeIn direction="left">
                <div className="relative">
                  <div className="relative aspect-video rounded overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%281%29.webp-sKVR9GJKvs2Oa8m7NyIIchNCCa2fr8.jpeg"
                      alt="Private Jet & Helicopter"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </FadeIn>

              {/* Content */}
              <FadeIn direction="right" delay={200}>
                <div>
                  <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-sm font-medium mb-4">
                    Luxury Air Travel
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    Private Jet & Helicopter
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-8 text-lg">
                    Experience exclusive air travel with our premium private jet and helicopter charter services. Designed for those who demand the finest in luxury transportation and unforgettable journeys.
                  </p>
                  <Link
                    href="/air-travel"
                    className="inline-block px-8 py-3 border-2 border-[#c9a55a] text-[#c9a55a] font-semibold rounded hover:bg-[#c9a55a] hover:text-black transition-all duration-300 uppercase tracking-wider text-sm"
                  >
                    {t('showcase.learnMore')}
                  </Link>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sierra Nevada Section - Preview */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <FadeIn direction="left">
                <div>
                  <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-sm font-medium mb-4">
                    Alpine Luxury
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                    Sierra Nevada
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-8 text-lg">
                    Experience Europe's premier alpine destination. Discover breathtaking mountain vistas, world-class skiing, and exclusive luxury accommodations in the heart of Sierra Nevada. A destination for those seeking the finest mountain experiences.
                  </p>
                  <Link
                    href="/sierra-nevada"
                    className="inline-block px-8 py-3 border-2 border-[#c9a55a] text-[#c9a55a] font-semibold rounded hover:bg-[#c9a55a] hover:text-black transition-all duration-300 uppercase tracking-wider text-sm"
                  >
                    {t('showcase.learnMore')}
                  </Link>
                </div>
              </FadeIn>

              {/* Image */}
              <FadeIn direction="right" delay={200}>
                <div className="relative">
                  <div className="relative aspect-video rounded overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%20Picture%20for%20sierra%20nevada%20display-AfwShJD1JTNOdTpZElOTyojAKWwYbp.jpg"
                      alt="Sierra Nevada Mountains"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c9a55a]/10 via-[#c9a55a]/5 to-[#c9a55a]/10" />
        <div className="absolute inset-0 shimmer" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-white/60 mb-10 text-lg">
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
