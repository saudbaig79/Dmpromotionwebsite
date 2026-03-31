'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useI18n } from '@/lib/i18n'
import { Sparkles, Users, Briefcase, Rocket, Shield, Star } from 'lucide-react'

export default function ServicesPage() {
  const { t } = useI18n()

  const services = [
    {
      icon: Sparkles,
      title: 'Festivals',
      description: 'Elevate your festival with our comprehensive planning and management. A comprehensive solution for a seamless celebration. Our experienced team brings creativity and precision to the table, ensuring your festival is a well-orchestrated spectacle with focus on safety, efficiency, and extraordinary execution.',
      image: '/images/festival.jpg',
      features: ['Event Planning', 'Artist Coordination', 'Safety Management', 'VIP Experiences'],
    },
    {
      icon: Star,
      title: 'Celebrity Appearances',
      description: 'Elevate your event with an appearance from well-known celebrity guests. Our team has connections with numerous celebrities including Bruno Mars, Rhianna, Katy Perry, Mike Tyson and more. We provide access to a full list of celebrities available for your event to create unforgettable moments.',
      image: '/images/celebrity.jpg',
      features: ['A-List Talent', 'Appearance Coordination', 'Media Coverage', 'Professional Logistics'],
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Our service is tailored to meet your specific needs. We pride ourselves on our attention to detail, ensuring that every element of your event is customized to suit your brand and company values. We guarantee that your attendees will have an unforgettable experience that leaves a lasting impression.',
      image: '/images/corporate.jpg',
      features: ['Custom Planning', 'Brand Integration', 'Team Building', 'Professional Execution'],
    },
    {
      icon: Rocket,
      title: 'Brand Launches',
      description: 'A successful brand launch is all about making a memorable impression. That\'s why we\'re here to help you create an unforgettable event that your guests and customers will remember for years to come. Our team is committed to helping your brand make a big impact.',
      image: '/images/brand-launch.jpg',
      features: ['Media Relations', 'Launch Strategy', 'Promotional Content', 'Post-Event Coverage'],
    },
    {
      icon: Shield,
      title: 'Personal Security',
      description: 'A successful event requires careful preparation, and ensuring the safety of everyone involved is key. Our personal security service complete with a driver provides you with peace of mind, knowing that a discreet and experienced team is watching over the event. You can trust us to prioritize your safety above all else.',
      image: '/images/security.jpg',
      features: ['VIP Protection', 'Crowd Management', 'Professional Staff', 'Discrete Operations'],
    },
  ]

  const whyChoose = [
    {
      title: '25+ Years Experience',
      description: 'Decades of expertise in media, promotion, and event management at the highest level',
    },
    {
      title: 'Trusted by Elite Brands',
      description: 'Worked with Rolex, Ferrari, Bentley and A-list celebrities including Rhianna and Rita Ora',
    },
    {
      title: 'Confidentiality Guaranteed',
      description: 'Complete privacy and exclusivity with every project, respecting the importance of discretion',
    },
    {
      title: 'Global Connections',
      description: 'Worldwide contacts in media and entertainment for international reach and impact',
    },
    {
      title: 'Bespoke Solutions',
      description: 'Custom-tailored services designed specifically for your unique event needs',
    },
    {
      title: 'Perfection Focused',
      description: 'At DM Promotions, perfection is paramount in every aspect of our work',
    },
  ]

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#0d0d0d]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c9a55a]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#c9a55a]/3 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <FadeIn delay={100}>
            <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm font-medium mb-6">
              {t('services.title')}
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-8 text-balance">
              Premium Event Solutions
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {t('services.subtitle')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, i) => {
              const Icon = service.icon
              return (
                <FadeIn key={i} delay={i * 100} direction="up">
                  <div className="group bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden hover:border-[#c9a55a]/50 transition-all duration-500 h-full flex flex-col">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <Icon className="text-[#c9a55a] mb-3" size={32} />
                      <h3 className="text-2xl font-serif font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
                        {service.description}
                      </p>
                      <Link
                        href="/contact"
                        className="inline-block px-6 py-2 text-[#c9a55a] text-sm font-medium hover:text-[#d4b76a] transition-colors"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <FadeIn key={i} delay={100}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden group border border-white/10">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="text-[#c9a55a]" size={28} />
                      <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-sm font-medium">
                        {service.title}
                      </p>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
                      {service.title} Excellence
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      <p className="text-white/60 text-sm font-medium">Key Features:</p>
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((feature, j) => (
                          <div key={j} className="flex items-center gap-2 text-white/70 text-sm">
                            <div className="w-2 h-2 bg-[#c9a55a] rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-block px-10 py-4 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Why Choose DM Promotions
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <FadeIn key={i} delay={i * 100} direction="up">
                <div className="p-6 bg-[#1a1a1a] border border-white/10 rounded-lg hover:border-[#c9a55a]/50 transition-all duration-500">
                  <h3 className="text-lg font-serif font-bold text-[#c9a55a] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c9a55a]/10 via-[#c9a55a]/5 to-[#c9a55a]/10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Ready to Create Your Perfect Event?
            </h2>
            <p className="text-white/60 mb-10 text-lg">
              Let our team of experts bring your vision to life with our premium services
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Contact Us Today
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
