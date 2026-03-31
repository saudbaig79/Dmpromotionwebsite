'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { ExternalLink } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const mediaLinks = [
  { name: 'Mirror.co.uk', url: 'https://mirror.co.uk' },
  { name: 'Metro.co.uk', url: 'https://metro.co.uk' },
  { name: 'Walesonline', url: 'https://walesonline.co.uk' },
  { name: 'The Star', url: 'https://thestar.co.uk' },
  { name: 'Hollywood Unlocked', url: 'https://hollywoodunlocked.com' },
]

export default function AboutPage() {
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
              {t('aboutPage.title')}
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-sm mb-4">{t('aboutPage.story')}</p>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  {t('aboutPage.story.p1')}
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  {t('aboutPage.story.p2')}
                </p>
                <p className="text-[#c9a55a] text-xl font-serif italic mb-8">
                  {t('aboutPage.story.p3')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-3 bg-[#c9a55a] text-[#0d0d0d] font-semibold hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm text-center"
                  >
                    {t('aboutPage.moreDuncan')}
                  </Link>
                  <Link
                    href="/services"
                    className="inline-block px-8 py-3 border border-[#c9a55a] text-[#c9a55a] hover:bg-[#c9a55a] hover:text-[#0d0d0d] transition-all duration-300 uppercase tracking-wider text-sm text-center"
                  >
                    {t('showcase.learnMore')}
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="relative h-[500px] rounded-sm overflow-hidden">
                <Image
                  src="/images/ceo-duncan.jpg"
                  alt="Duncan McHugh"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={100}>
              <Link href="/events" className="block group">
                <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-sm hover:border-[#c9a55a]/50 transition-all duration-500 text-center">
                  <h3 className="text-xl font-serif font-bold mb-4 text-[#c9a55a] group-hover:text-white transition-colors">{t('aboutPage.murderMystery')}</h3>
                  <p className="text-white/50 text-sm">{t('eventsPage.immersive')}</p>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-sm hover:border-[#c9a55a]/50 transition-all duration-500 text-center group">
                <h3 className="text-xl font-serif font-bold mb-4 text-[#c9a55a]">{t('aboutPage.experience')}</h3>
                <p className="text-white/50 text-sm">25 years in the industry</p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-sm hover:border-[#c9a55a]/50 transition-all duration-500 text-center group">
                <h3 className="text-xl font-serif font-bold mb-4 text-[#c9a55a]">{t('aboutPage.upcoming')}</h3>
                <p className="text-white/50 text-sm">Stay tuned for announcements</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm mb-4">{t('aboutPage.services')}</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <FadeIn key={service.key} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-sm bg-[#1a1a1a] border border-white/5 hover:border-[#c9a55a]/30 transition-all duration-500">
                  <div className="relative h-56 overflow-hidden">
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

      {/* Media Links Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm mb-4">{t('aboutPage.media')}</p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">
                {t('aboutPage.mediaDesc')}
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              {mediaLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] border border-white/10 text-white/70 hover:text-[#c9a55a] hover:border-[#c9a55a]/50 transition-all duration-300 rounded-sm text-sm"
                >
                  {link.name}
                  <ExternalLink size={14} />
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="text-center mt-12">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#c9a55a] text-[#0d0d0d] font-semibold hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
              >
                {t('aboutPage.instagram')}
                <ExternalLink size={16} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
