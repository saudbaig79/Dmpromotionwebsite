'use client'

import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useLanguage } from '@/lib/language-context'

export default function EventsPage() {
  const { t } = useLanguage()

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm mb-4 block">
                {t('eventsPage.immersive')}
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold">
                {t('eventsPage.title')}
              </h1>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="relative h-[500px] rounded-sm overflow-hidden mb-12">
              <Image
                src="/images/murder-mystery.jpg"
                alt="Murder Mystery Experience"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-white/70 text-lg max-w-4xl mx-auto text-center leading-relaxed">
              {t('eventsPage.intro')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Innovation */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#c9a55a] mb-16">
              {t('eventsPage.innovation')}
            </h2>
          </FadeIn>

          {/* The Plot Thickens */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn direction="left">
              <div className="relative h-[400px] rounded-sm overflow-hidden">
                <Image
                  src="/images/dining.jpg"
                  alt="The Plot Thickens"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={200}>
              <div>
                <h3 className="text-3xl font-serif font-bold mb-6">{t('eventsPage.plot')}</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  {t('eventsPage.plotDesc')}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Friend, Confidant or Arch Enemy */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn direction="left" className="lg:order-2">
              <div className="relative h-[400px] rounded-sm overflow-hidden">
                <Image
                  src="/images/celebrity.jpg"
                  alt="Friend, Confidant or Arch Enemy"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={200} className="lg:order-1">
              <div>
                <h3 className="text-3xl font-serif font-bold mb-6">{t('eventsPage.friend')}</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  {t('eventsPage.friendDesc')}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Cinema Quality */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative h-[400px] rounded-sm overflow-hidden">
                <Image
                  src="/images/props.jpg"
                  alt="Cinema Quality"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={200}>
              <div>
                <h3 className="text-3xl font-serif font-bold mb-6">{t('eventsPage.cinema')}</h3>
                <p className="text-white/70 leading-relaxed">
                  {t('eventsPage.cinemaDesc')}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Building */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
              {t('eventsPage.teamBuilding')}
            </h2>
          </FadeIn>

          {/* Location */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn direction="left">
              <div className="relative h-[400px] rounded-sm overflow-hidden">
                <Image
                  src="/images/mansion.jpg"
                  alt="The Location"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={200}>
              <div>
                <h3 className="text-3xl font-serif font-bold text-[#c9a55a] mb-6">{t('eventsPage.location')}</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  {t('eventsPage.locationDesc')}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* The Props */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn direction="left" className="lg:order-2">
              <div className="relative h-[400px] rounded-sm overflow-hidden">
                <Image
                  src="/images/props.jpg"
                  alt="The Props"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={200} className="lg:order-1">
              <div>
                <h3 className="text-3xl font-serif font-bold text-[#c9a55a] mb-6">{t('eventsPage.props')}</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  {t('eventsPage.propsDesc')}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Meet the Host */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn direction="left">
              <div className="relative h-[400px] rounded-sm overflow-hidden">
                <Image
                  src="/images/ceo-duncan.jpg"
                  alt="Meet the Host"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={200}>
              <div>
                <h3 className="text-3xl font-serif font-bold text-[#c9a55a] mb-6">{t('eventsPage.host')}</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  {t('eventsPage.hostDesc')}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* The Silver Screen */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <FadeIn direction="left" className="lg:order-2">
              <div className="relative h-[400px] rounded-sm overflow-hidden">
                <Image
                  src="/images/events-hero.jpg"
                  alt="The Silver Screen"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={200} className="lg:order-1">
              <div>
                <h3 className="text-3xl font-serif font-bold text-[#c9a55a] mb-6">{t('eventsPage.silverScreen')}</h3>
                <p className="text-white/70 leading-relaxed">
                  {t('eventsPage.silverScreenDesc')}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* A-List Treatment */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative h-[400px] rounded-sm overflow-hidden">
                <Image
                  src="/images/corporate.jpg"
                  alt="A-List Treatment"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={200}>
              <div>
                <h3 className="text-3xl font-serif font-bold text-[#c9a55a] mb-6">{t('eventsPage.alist')}</h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  {t('eventsPage.alistDesc')}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-white/70 text-lg mb-4">
                {t('eventsPage.register')}
              </p>
              <p className="text-white/50 text-sm">
                {t('eventsPage.disclaimer')}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white/60 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-sm focus:border-[#c9a55a] focus:outline-none transition-colors text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-sm focus:border-[#c9a55a] focus:outline-none transition-colors text-white"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-white/60 mb-2">Company name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-sm focus:border-[#c9a55a] focus:outline-none transition-colors text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-sm focus:border-[#c9a55a] focus:outline-none transition-colors text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-sm focus:border-[#c9a55a] focus:outline-none transition-colors text-white resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#c9a55a] text-[#0d0d0d] font-semibold hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
              >
                Submit
              </button>
            </form>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
