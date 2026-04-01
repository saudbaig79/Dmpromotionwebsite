'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useI18n } from '@/lib/i18n'
import { Calendar, User, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const { t } = useI18n()

  const reviews = [
    {
      id: 'ski-review',
      slug: '/blog/ski-review',
      title: 'Ski Review: Alpine Excellence',
      author: 'Duncan McHugh',
      date: 'March 2026',
      excerpt: 'At DM Promotions, we are always on the lookout for the best destinations for our elite clientele. That\'s why we were thrilled to visit the most exclusive ski resorts in the world.',
      image: '/sierra-nevada.jpg',
      category: 'Travel & Destinations',
    },
    {
      id: 'ceo-review',
      slug: '/blog/ceo-review',
      title: 'A CEO\'s Review: Sierra Nevada',
      author: 'Duncan McHugh',
      date: 'March 2026',
      excerpt: 'As a ski expert, I have visited resorts all around the world, but none of them impressed me as much as Sierra Nevada passion and rapidly growing reputation as a world-class destination.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Duncan%20CEO-8QCVDEn8SlteD8gZIq8KHZrTVIGjUz.png',
      category: 'Expert Reviews',
    },
    {
      id: 'sponsorship-insights',
      slug: '#',
      title: 'Corporate Sponsorship Insights',
      author: 'DM Promotions Team',
      date: 'March 2026',
      excerpt: 'Discover how strategic sponsorship of premium events can elevate your brand, connect you with elite audiences, and generate unprecedented ROI through exclusive partnerships.',
      image: '/images/brand-launch.jpg',
      category: 'Corporate Tips',
      comingSoon: true,
    },
  ]

  const destinationGuides = [
    {
      title: 'Sierra Nevada',
      description: 'Luxury mountain resort destination in Spain with world-class facilities and exclusive experiences',
      highlights: ['Mountain Views', 'Luxury Accommodations', 'Premium Dining'],
    },
    {
      title: 'International Venues',
      description: 'Our global network of exclusive venues and destinations for premium events',
      highlights: ['Global Reach', 'Premium Venues', 'Expert Coordination'],
    },
    {
      title: 'Luxury Resorts',
      description: 'Partnerships with the world\'s most exclusive resort destinations',
      highlights: ['5-Star Service', 'Bespoke Experiences', 'VIP Access'],
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
              {t('blog.title')}
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-8 text-balance">
              Insights & Reviews
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {t('blog.subtitle')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                Latest Reviews
              </h2>
              <p className="text-white/60 text-lg">
                Expert insights and destination reviews from our team
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <FadeIn key={review.id} delay={i * 100} direction="up">
                <Link href={review.slug} className={`group block h-full ${review.comingSoon ? 'pointer-events-none' : ''}`}>
                  <div className="h-full bg-[#1a1a1a] border border-white/10 rounded-lg overflow-hidden hover:border-[#c9a55a]/50 transition-all duration-500 flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden bg-white/5">
                      <Image
                        src={review.image}
                        alt={review.title}
                        fill
                        className={`object-cover ${review.comingSoon ? 'opacity-40' : 'group-hover:scale-110 transition-transform duration-700'}`}
                      />
                      {review.comingSoon && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                          <span className="px-4 py-2 bg-[#c9a55a] text-black font-semibold rounded text-sm">
                            Coming Soon
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="inline-block px-3 py-1 bg-[#c9a55a]/20 text-[#c9a55a] rounded text-xs font-medium mb-3 w-fit">
                        {review.category}
                      </span>

                      <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#c9a55a] transition-colors">
                        {review.title}
                      </h3>

                      <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
                        {review.excerpt}
                      </p>

                      <div className="flex items-center gap-4 text-white/50 text-xs mb-4 pt-4 border-t border-white/10">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          {review.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {review.date}
                        </div>
                      </div>

                      {!review.comingSoon && (
                        <div className="text-[#c9a55a] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                          Read More <ArrowRight size={16} />
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Guides */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                Destination Guides
              </h2>
              <p className="text-white/60 text-lg">
                Explore our curated selection of premium destinations
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {destinationGuides.map((guide, i) => (
              <FadeIn key={i} delay={i * 100} direction="up">
                <div className="p-8 bg-[#1a1a1a] border border-white/10 rounded-lg hover:border-[#c9a55a]/50 transition-all duration-500 h-full flex flex-col">
                  <h3 className="text-2xl font-serif font-bold text-[#c9a55a] mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                    {guide.description}
                  </p>
                  <div className="space-y-2">
                    {guide.highlights.map((highlight, j) => (
                      <div key={j} className="flex items-center gap-2 text-white/70 text-sm">
                        <div className="w-2 h-2 bg-[#c9a55a] rounded-full" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Content Hub */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Content Hub
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Event Planning Tips',
                description: 'Expert advice on organizing and executing premium events',
              },
              {
                title: 'Luxury Travel Guide',
                description: 'Recommendations for the world\'s most exclusive destinations',
              },
              {
                title: 'Celebrity Insights',
                description: 'Behind-the-scenes stories from our A-list events and appearances',
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100} direction="up">
                <div className="p-6 bg-[#1a1a1a] border border-white/10 rounded-lg hover:border-[#c9a55a]/50 transition-all duration-500 cursor-pointer text-center">
                  <h3 className="text-lg font-serif font-bold text-white mb-2">
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
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/60 mb-10 text-lg">
              Get the latest event updates, destination guides, and insider tips delivered to your inbox
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
