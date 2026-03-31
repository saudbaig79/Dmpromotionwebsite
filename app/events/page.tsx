'use client'

import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useI18n } from '@/lib/i18n'

export default function EventsPage() {
  const { t } = useI18n()

  const sections = [
    {
      title: t('murder.plot'),
      description: t('murder.plotDesc'),
      image: '/images/murder-dining.jpg',
    },
    {
      title: t('murder.friend'),
      description: t('murder.friendDesc'),
      image: '/images/celebrity.jpg',
    },
    {
      title: t('murder.cinema'),
      description: t('murder.cinemaDesc'),
      image: '/images/murder-mystery-hero.jpg',
    },
    {
      title: t('murder.location'),
      description: t('murder.locationDesc'),
      image: '/images/murder-location.jpg',
    },
    {
      title: t('murder.props'),
      description: t('murder.propsDesc'),
      image: '/images/murder-props.jpg',
    },
    {
      title: t('murder.screen'),
      description: t('murder.screenDesc'),
      image: '/images/corporate.jpg',
    },
    {
      title: t('murder.host'),
      description: t('murder.hostDesc'),
      image: '/images/murder-host.jpg',
    },
    {
      title: t('murder.treatment'),
      description: t('murder.treatmentDesc'),
      image: '/images/brand-launch.jpg',
    },
  ]

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/murder-mystery-hero.jpg"
            alt="Murder Mystery Experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0d0d0d]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <FadeIn delay={100}>
            <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm font-medium mb-6">
              {t('murder.subtitle')}
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight mb-8">
              {t('murder.title')}
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {t('murder.intro')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#c9a55a]">
              {t('murder.innovation')}
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {sections.map((section, i) => (
              <FadeIn key={i} delay={100}>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative aspect-[4/3] rounded overflow-hidden group">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/60 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#c9a55a]">
                      {section.title}
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Building Section */}
      <section className="py-20 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              {t('murder.team')}
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-[#1a1a1a] border border-white/10 rounded p-8 sm:p-12">
              <h3 className="text-xl font-serif font-bold text-white mb-4 text-center">
                {t('murder.register')}
              </h3>
              <p className="text-white/50 text-sm text-center mb-8">
                {t('murder.disclaimer')}
              </p>

              <form className="space-y-6">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded text-white placeholder-white/30 focus:border-[#c9a55a] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded text-white placeholder-white/30 focus:border-[#c9a55a] focus:outline-none transition-colors"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">Company Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded text-white placeholder-white/30 focus:border-[#c9a55a] focus:outline-none transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded text-white placeholder-white/30 focus:border-[#c9a55a] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded text-white placeholder-white/30 focus:border-[#c9a55a] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your interest..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
                >
                  Submit
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
