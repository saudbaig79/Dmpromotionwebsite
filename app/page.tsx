'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useI18n } from '@/lib/i18n'
import { Check, Users, Award, Shield, ChevronDown, Play } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const { t } = useI18n()
  const [currentBossImageIndex, setCurrentBossImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<'boss' | 'yacht' | 'jet'>('boss')

  const bossImages = [
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boss%20%282%29-fuzv2qzVWAU0MD3V2hlWLqWNNkRWdS.jpg',
      alt: 'Duncan & Partner - Luxury Event'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boss%20%286%29-XPaK3JA7edxNwStwtrqWI7reP7vhhU.jpg',
      alt: 'Duncan & Partner - Garden Event'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boss%20%283%29-N34qEK01Ch1ejVQD4d1jubFoMbGxyu.jpg',
      alt: 'Duncan Speaking at Event'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boss%20%281%29-IYofP1kaFiAkFY87a2HHQTr7aMyH74.jpg',
      alt: 'Duncan in Luxury Setting'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boss%20%285%29-IsI86m1pm01IACyyPHG3ehkpcT9Xsn.jpg',
      alt: 'Duncan at Waterside Venue'
    },
    {
      src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boss%20%284%29-Yc1WoDafl2SlksJISnhVngIwETdoHb.jpg',
      alt: 'Duncan & Partner - Formal Event'
    }
  ]

  const nextBossImage = () => {
    setCurrentBossImageIndex((prev) => (prev + 1) % bossImages.length)
  }

  const prevBossImage = () => {
    setCurrentBossImageIndex((prev) => (prev - 1 + bossImages.length) % bossImages.length)
  }

  const services = [
    {
      title: t('services.festivals'),
      description: t('services.festivalsDesc'),
      image: '/images/festival.jpg',
    },
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
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold text-[#c9a55a] leading-tight mb-6 text-balance">
              {t('hero.about')}
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight mb-4 text-balance">
              {t('hero.title')}
            </h1>
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

      {/* The Boss Gallery Section */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm font-medium mb-4">
                {t('events.title')}
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                {t('events.subtitle')}
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="relative">
                <div className="relative aspect-[4/5] rounded overflow-hidden">
                  <Image
                    src={bossImages[currentBossImageIndex].src}
                    alt={bossImages[currentBossImageIndex].alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevBossImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#c9a55a]/80 hover:bg-[#c9a55a] text-black flex items-center justify-center transition-all"
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  onClick={nextBossImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#c9a55a]/80 hover:bg-[#c9a55a] text-black flex items-center justify-center transition-all"
                  aria-label="Next image"
                >
                  →
                </button>

                {/* Indicator Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {bossImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentBossImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentBossImageIndex ? 'bg-[#c9a55a] w-8' : 'bg-white/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Thumbnail Gallery */}
            <FadeIn delay={200}>
              <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-2">
                {bossImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBossImageIndex(index)}
                    className={`relative aspect-square rounded overflow-hidden border-2 transition-all ${
                      index === currentBossImageIndex
                        ? 'border-[#c9a55a]'
                        : 'border-white/20 hover:border-white/50'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Luxury Assets Section - Yacht */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Yacht Content */}
              <FadeIn direction="left">
                <div>
                  <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-sm font-medium mb-4">
                    {t('luxury.yacht')}
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
                    Malex Super Yacht
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-8 text-lg">
                    {t('luxury.yachtDesc')}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-3 border-2 border-[#c9a55a] text-[#c9a55a] font-semibold rounded hover:bg-[#c9a55a] hover:text-black transition-all duration-300 uppercase tracking-wider text-sm"
                  >
                    {t('showcase.learnMore')}
                  </Link>
                </div>
              </FadeIn>

              {/* Yacht Media */}
              <FadeIn direction="right" delay={200}>
                <div className="relative">
                  <div className="aspect-video rounded overflow-hidden relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yacht%20%281%29-Rg7hexYJu02BGGZJm68C4L0tGQ5NHt.jpg"
                      alt="Malex Super Yacht"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="mt-4 flex gap-3">
                    <video
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yacht%20%282%29-Qml30qtOy7cc6fLOv3kNeqowkSLA6C.mp4"
                      poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yacht%20%281%29-Rg7hexYJu02BGGZJm68C4L0tGQ5NHt.jpg"
                      className="w-full h-24 object-cover rounded"
                      controls
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Luxury Assets Section - Jet */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Jet Media */}
              <FadeIn direction="left">
                <div className="relative">
                  <div className="aspect-video rounded overflow-hidden relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%281%29.webp-sKVR9GJKvs2Oa8m7NyIIchNCCa2fr8.jpeg"
                      alt="Private Jet"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="mt-4">
                    <video
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%281%29-8zZtvJ8FaHO4GCLJ7M2L3mBKE4zQZ2.mp4"
                      poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%281%29.webp-sKVR9GJKvs2Oa8m7NyIIchNCCa2fr8.jpeg"
                      className="w-full h-24 object-cover rounded"
                      controls
                    />
                  </div>
                </div>
              </FadeIn>

              {/* Jet Content */}
              <FadeIn direction="right" delay={200}>
                <div>
                  <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-sm font-medium mb-4">
                    {t('luxury.jet')}
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
                    Private Jet Charter
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-8 text-lg">
                    {t('luxury.jetDesc')}
                  </p>
                  <Link
                    href="/contact"
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

      {/* Luxury Assets Section - Helicopter */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Helicopter Content */}
              <FadeIn direction="left">
                <div>
                  <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-sm font-medium mb-4">
                    {t('luxury.helicopter')}
                  </p>
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
                    Helicopter Tours & Transfers
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-8 text-lg">
                    {t('luxury.helicopterDesc')}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-3 border-2 border-[#c9a55a] text-[#c9a55a] font-semibold rounded hover:bg-[#c9a55a] hover:text-black transition-all duration-300 uppercase tracking-wider text-sm"
                  >
                    {t('showcase.learnMore')}
                  </Link>
                </div>
              </FadeIn>

              {/* Helicopter Media */}
              <FadeIn direction="right" delay={200}>
                <div className="relative">
                  <div className="aspect-video rounded overflow-hidden relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jet%20%281%29-Ek0Di6FoFMUhd6k8PBeYcvZbRx6V76.jpg"
                      alt="Private Jet"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
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

      {/* Blog Section */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm font-medium mb-4">
                {t('blog.title')}
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                {t('blog.subtitle')}
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <FadeIn delay={100} direction="up">
              <Link href="/blog/ski-review" className="group block">
                <div className="bg-[#1a1a1a] border border-white/10 rounded overflow-hidden hover:border-[#c9a55a]/50 transition-all duration-500">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src="/sierra-nevada.jpg"
                      alt="Ski Review"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#c9a55a] transition-colors">
                      Ski Review
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Sierra Nevada with Debbie Wingham - Europe&apos;s premier alpine destination
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={200} direction="up">
              <Link href="/blog/ceo-review" className="group block">
                <div className="bg-[#1a1a1a] border border-white/10 rounded overflow-hidden hover:border-[#c9a55a]/50 transition-all duration-500">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Duncan%20CEO-8QCVDEn8SlteD8gZIq8KHZrTVIGjUz.png"
                      alt="CEO Review"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#c9a55a] transition-colors">
                      CEO Review
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Duncan McHugh on creating unforgettable luxury experiences worldwide
                    </p>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>

          {/* Sponsorship CTA */}
          <FadeIn delay={300}>
            <div className="relative rounded overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/images/ski.jpg"
                  alt="Sierra Nevada"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
              </div>
              <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
                  {t('blog.sponsorship')}
                </h3>
                <p className="text-[#c9a55a] text-lg mb-8 font-medium">
                  {t('blog.vip')}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
                  >
                    {t('nav.contact')}
                  </Link>
                  <Link
                    href="/blog"
                    className="px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider text-sm"
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
