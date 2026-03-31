'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { ChevronDown, CheckCircle, Users, Award, Shield } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const features = [
  { icon: CheckCircle, key: 'feature.satisfaction' },
  { icon: Users, key: 'feature.commitment' },
  { icon: Award, key: 'feature.professional' },
  { icon: Shield, key: 'feature.quality' },
]

export default function Home() {
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
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Luxury Event"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0d0d0d]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
          <FadeIn delay={200}>
            <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm mb-6 font-medium">
              {t('hero.about')}
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight text-balance">
              {t('hero.title')}
            </h1>
          </FadeIn>

          <FadeIn delay={600}>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </FadeIn>

          <FadeIn delay={800}>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#c9a55a] text-[#0d0d0d] font-semibold rounded-sm hover:bg-[#d4b76a] transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a55a]/20 uppercase tracking-wider text-sm"
            >
              {t('cta.button')}
            </Link>
          </FadeIn>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-[#c9a55a]" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <FadeIn key={i} delay={i * 100}>
                  <div className="p-4 md:p-6 bg-[#1a1a1a] border border-white/10 rounded-sm hover:border-[#c9a55a]/50 transition-all duration-500 group text-center">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#c9a55a] mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-xs md:text-sm text-white/70 group-hover:text-white transition-colors">
                      {t(feature.key)}
                    </p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-sm mb-4">{t('about.title')}</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  {t('about.description')}
                </h2>
                <Link
                  href="/about"
                  className="inline-block px-8 py-3 border border-[#c9a55a] text-[#c9a55a] hover:bg-[#c9a55a] hover:text-[#0d0d0d] transition-all duration-300 uppercase tracking-wider text-sm"
                >
                  {t('showcase.learnMore')}
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="relative h-[400px] md:h-[500px] rounded-sm overflow-hidden">
                <Image
                  src="/images/ceo-duncan.jpg"
                  alt="About DM Promotions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-sm mb-4">{t('services.title')}</p>
              <p className="text-white/60 max-w-2xl mx-auto">
                {t('services.subtitle')}
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.key} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-sm bg-[#1a1a1a] border border-white/5 hover:border-[#c9a55a]/30 transition-all duration-500">
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={t(`services.${service.key}`)}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-3 text-[#c9a55a]">
                      {t(`services.${service.key}`)}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed line-clamp-4">
                      {t(`services.${service.key}.desc`)}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] relative overflow-hidden">
        <div className="absolute inset-0 shimmer" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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

      {/* Events Section */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm mb-4">{t('events.title')}</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                {t('events.subtitle')}
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-[#1a1a1a] border border-white/10 rounded-sm p-8 md:p-12 lg:p-16 text-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold mb-4">
                {t('events.cta')}
              </h3>
              <p className="text-white/50 mb-8">
                {t('cta.subtitle')}
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 border border-[#c9a55a] text-[#c9a55a] hover:bg-[#c9a55a] hover:text-[#0d0d0d] transition-all duration-300 uppercase tracking-wider text-sm"
              >
                {t('cta.button')}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm mb-4">{t('showcase.title')}</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">{t('showcase.subtitle')}</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative h-[350px] md:h-[400px] rounded-sm overflow-hidden">
                <Image
                  src="/images/ceo-duncan.jpg"
                  alt="Duncan McHugh CEO"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div>
                <p className="text-[#c9a55a] text-sm uppercase tracking-wider mb-2">{t('showcase.diary')}</p>
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                  {t('showcase.duncan.title')}
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  {t('showcase.duncan.desc')}
                </p>
                <Link
                  href="/about"
                  className="inline-block px-8 py-3 border border-[#c9a55a] text-[#c9a55a] hover:bg-[#c9a55a] hover:text-[#0d0d0d] transition-all duration-300 uppercase tracking-wider text-sm"
                >
                  {t('showcase.learnMore')}
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm mb-4">{t('blog.title')}</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">{t('blog.subtitle')}</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            <FadeIn delay={100}>
              <Link href="/blog/ski-review" className="block group">
                <div className="bg-[#1a1a1a] border border-white/5 rounded-sm overflow-hidden hover:border-[#c9a55a]/30 transition-all duration-500">
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src="/images/sierra-nevada.jpg"
                      alt="Ski Review"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-3 text-[#c9a55a]">{t('blog.ski.title')}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {t('blog.ski.excerpt')}
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={200}>
              <Link href="/blog/ceo-review" className="block group">
                <div className="bg-[#1a1a1a] border border-white/5 rounded-sm overflow-hidden hover:border-[#c9a55a]/30 transition-all duration-500">
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                      src="/images/vip-igloo.jpg"
                      alt="A CEO's Review"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-3 text-[#c9a55a]">{t('blog.ceo.title')}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {t('blog.ceo.excerpt')}
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>

          {/* Sierra Nevada CTA */}
          <FadeIn delay={300}>
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src="/images/vip-igloo.jpg"
                alt="Sierra Nevada"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/95 to-[#0d0d0d]/70" />
              <div className="relative z-10 p-8 md:p-12 lg:p-16 text-center">
                <h3 className="text-2xl md:text-4xl font-serif font-bold mb-3">
                  {t('blog.sierra.title')}
                </h3>
                <p className="text-[#c9a55a] text-lg mb-8">{t('blog.sierra.subtitle')}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-3 bg-[#c9a55a] text-[#0d0d0d] font-semibold hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
                  >
                    {t('nav.contact')}
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-block px-8 py-3 border border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300 uppercase tracking-wider text-sm"
                  >
                    {t('showcase.learnMore')}
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
