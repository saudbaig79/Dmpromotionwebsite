'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useI18n } from '@/lib/i18n'
import { Check, Users, Zap, Globe, TrendingUp, Award } from 'lucide-react'

export default function SponsorshipPage() {
  const { t } = useI18n()

  const packages = [
    {
      name: 'Bronze Package',
      price: '€39,000',
      description: 'Perfect for building brand awareness at our premier events',
      color: 'from-amber-600 to-amber-700',
      features: [
        'Branding presence on event printed materials and press wall',
        'Live hyperlink on digital event materials with website traffic',
        'Video coverage of your brand presence',
        'Downloadable photographic format for social media',
        'Series of posts on DM Promotions social media with tagging',
      ],
      highlights: ['Branding', 'Digital Presence', 'Social Media Coverage'],
    },
    {
      name: 'Silver Package',
      price: '€79,000',
      description: 'Enhanced visibility with mainstream media and celebrity influencer reach',
      color: 'from-gray-400 to-gray-500',
      popular: true,
      features: [
        'All Bronze Package benefits',
        'Guaranteed TV feature on Apple TV (25M+ viewership)',
        'TV show segment: 8-10 minutes with final credits',
        'Mainstream media coverage in top-tier publications',
        'World-renowned art director post on Instagram (3M+ followers)',
        'Story and series of posts on DM Promotions feed',
      ],
      highlights: ['TV Coverage', 'Media Features', 'Influencer Partnership'],
    },
    {
      name: 'Gold Package',
      price: '€129,000',
      description: 'Ultimate prestige with comprehensive media coverage and exclusive benefits',
      color: 'from-yellow-400 to-yellow-500',
      features: [
        'All Silver Package benefits',
        'Premium placement in global events',
        'Extended TV exposure across multiple platforms',
        'Exclusive behind-the-scenes content',
        'VIP access to all company events for one year',
        'Dedicated PR and marketing support',
        'Custom content creation and distribution',
        'International media placement guarantee',
      ],
      highlights: ['Premium Placement', 'Global Reach', 'Dedicated Support'],
    },
  ]

  const services = [
    {
      icon: Globe,
      title: 'Branding Presence',
      description: 'Your brand featured on all printed materials, press walls, and digital platforms with live hyperlinks driving traffic to your website',
    },
    {
      icon: TrendingUp,
      title: 'Media Coverage',
      description: 'Our copywriters craft your narrative. Top-tier publications guaranteed with hyperlinked mentions pointing to your chosen platform',
    },
    {
      icon: Users,
      title: 'Social Media',
      description: 'Featured on our art director\'s Instagram (3M+ followers) and comprehensive tagging across DM Promotions social channels',
    },
    {
      icon: Award,
      title: 'TV Features',
      description: 'Guaranteed TV show segments on Apple TV with 25M+ viewership and your company logo in final credits',
    },
    {
      icon: Zap,
      title: 'Digital Content',
      description: 'Downloadable video and photo coverage to use on your website, social media, and marketing materials',
    },
    {
      icon: Users,
      title: 'Past Client Network',
      description: 'Access to our extensive database of blue-chip companies ready to collaborate and invest in campaigns',
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
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <FadeIn delay={100}>
            <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm font-medium mb-6">
              CORPORATE PARTNERSHIPS
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-8 text-balance">
              Sponsorship Opportunities
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Connect your brand with elite clientele through our premium sponsorship packages designed for maximum impact and visibility
            </p>
          </FadeIn>
        </div>
      </section>

      {/* About Sponsorship */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
                Helping Our Clients Achieve Their Goals
              </h2>
              <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
                DM Promotions is a leading company in corporate sponsorship and marketing. We connect high-end brands with blue-chip companies ready to invest in impactful campaigns. Whether you need brand awareness, product promotion, or financial backing, we have the perfect solution.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <FadeIn key={i} delay={i * 100} direction="up">
                  <div className="p-8 bg-[#1a1a1a] border border-white/10 rounded-lg hover:border-[#c9a55a]/50 transition-all duration-500">
                    <Icon className="text-[#c9a55a] mb-4" size={32} />
                    <h3 className="text-xl font-serif font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
                Our Sponsorship Packages
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Choose the package that best fits your brand goals and marketing strategy
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <FadeIn key={i} delay={i * 100} direction="up">
                <div className={`relative h-full rounded-lg border-2 ${pkg.popular ? 'border-[#c9a55a] bg-[#1a1a1a]/80' : 'border-white/10 bg-[#1a1a1a]'} p-8 flex flex-col transition-all duration-500 hover:shadow-lg hover:shadow-[#c9a55a]/20`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-[#c9a55a] text-black text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">
                      {pkg.name}
                    </h3>
                    <div className="text-4xl font-bold text-[#c9a55a] mb-4">
                      {pkg.price}
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="mb-8 flex-grow">
                    <p className="text-white/60 text-sm font-medium mb-4">Key Benefits:</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <Check size={20} className="text-[#c9a55a] flex-shrink-0 mt-0.5" />
                          <span className="text-white/70 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {pkg.highlights.map((highlight, j) => (
                        <span key={j} className="px-3 py-1 text-xs bg-white/5 border border-[#c9a55a]/30 text-white/80 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full py-3 rounded font-semibold transition-all duration-300 uppercase tracking-wider text-sm text-center ${
                      pkg.popular
                        ? 'bg-[#c9a55a] text-black hover:bg-[#d4b76a]'
                        : 'border-2 border-[#c9a55a] text-[#c9a55a] hover:bg-[#c9a55a] hover:text-black'
                    }`}
                  >
                    Inquire Now
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Why Partner With DM Promotions?
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: '25+ Years Experience',
                description: 'Trusted by the world\'s most prestigious brands and blue-chip companies',
              },
              {
                title: 'Global Reach',
                description: 'Access to international media, celebrities, and high-net-worth individuals',
              },
              {
                title: 'Proven Results',
                description: 'Track record of delivering measurable ROI and brand impact',
              },
              {
                title: 'Exclusive Network',
                description: 'Connections with top-tier publications, TV networks, and influencers',
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored packages designed specifically for your brand objectives',
              },
              {
                title: 'Professional Team',
                description: 'Expert strategists, creative directors, and PR specialists at your service',
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100} direction="up">
                <div className="p-6 bg-[#1a1a1a] border border-white/10 rounded-lg hover:border-[#c9a55a]/50 transition-all duration-500">
                  <h3 className="text-lg font-semibold text-[#c9a55a] mb-2">
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
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-white/60 mb-10 text-lg">
              Get in touch with our sponsorship team to discuss how we can help achieve your marketing goals
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Contact Our Team
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
