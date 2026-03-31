'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useI18n } from '@/lib/i18n'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function BehindTheScenesPage() {
  const { t } = useI18n()
  const [expandedCategory, setExpandedCategory] = useState('all')

  const galleries = [
    {
      id: 'all',
      name: 'All Events',
      description: 'Complete gallery of our premium events',
    },
    {
      id: 'polo',
      name: 'Polo Club Events',
      description: 'Exclusive polo club gatherings and VIP experiences',
      images: [
        { src: '/images/showcase.jpg', alt: 'Polo Event 1' },
        { src: '/images/celebrity.jpg', alt: 'Polo Event 2' },
        { src: '/images/corporate.jpg', alt: 'Polo Event 3' },
      ],
    },
    {
      id: 'sierra-nevada',
      name: 'Sierra Nevada Resort',
      description: 'Luxury mountain resort experiences and winter events',
      images: [
        { src: '/images/ski.jpg', alt: 'Sierra Nevada 1' },
        { src: '/images/showcase.jpg', alt: 'Sierra Nevada 2' },
        { src: '/images/corporate.jpg', alt: 'Sierra Nevada 3' },
      ],
    },
    {
      id: 'gala-charity',
      name: 'Gala & Charity Events',
      description: 'High-profile charity galas and exclusive fundraising events',
      images: [
        { src: '/images/brand-launch.jpg', alt: 'Gala Event 1' },
        { src: '/images/showcase.jpg', alt: 'Gala Event 2' },
        { src: '/images/celebrity.jpg', alt: 'Gala Event 3' },
      ],
    },
    {
      id: 'celebrity',
      name: 'Celebrity Appearances',
      description: 'A-list celebrities at our premium events',
      images: [
        { src: '/images/celebrity.jpg', alt: 'Celebrity 1' },
        { src: '/images/showcase.jpg', alt: 'Celebrity 2' },
        { src: '/images/festival.jpg', alt: 'Celebrity 3' },
      ],
    },
    {
      id: 'corporate',
      name: 'Corporate Events',
      description: 'Large-scale corporate gatherings and brand launches',
      images: [
        { src: '/images/corporate.jpg', alt: 'Corporate 1' },
        { src: '/images/brand-launch.jpg', alt: 'Corporate 2' },
        { src: '/images/showcase.jpg', alt: 'Corporate 3' },
      ],
    },
  ]

  const allImages = galleries
    .filter(g => g.id !== 'all')
    .flatMap(g => g.images || [])

  const displayGalleries = expandedCategory === 'all' 
    ? galleries.filter(g => g.id !== 'all')
    : galleries.filter(g => g.id === expandedCategory)

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
              GALLERY
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-8 text-balance">
              Behind the Scenes
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Explore unforgettable moments from our most exclusive events and premium experiences
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Navigation */}
      <section className="py-16 bg-[#111111] sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <button
                onClick={() => setExpandedCategory('all')}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 uppercase tracking-wider text-sm ${
                  expandedCategory === 'all'
                    ? 'bg-[#c9a55a] text-black'
                    : 'bg-[#1a1a1a] text-white/70 border border-white/10 hover:border-[#c9a55a]/50 hover:text-[#c9a55a]'
                }`}
              >
                View All
              </button>
              {galleries
                .filter(g => g.id !== 'all')
                .map(gallery => (
                  <button
                    key={gallery.id}
                    onClick={() => setExpandedCategory(gallery.id)}
                    className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 uppercase tracking-wider text-sm whitespace-nowrap ${
                      expandedCategory === gallery.id
                        ? 'bg-[#c9a55a] text-black'
                        : 'bg-[#1a1a1a] text-white/70 border border-white/10 hover:border-[#c9a55a]/50 hover:text-[#c9a55a]'
                    }`}
                  >
                    {gallery.name}
                  </button>
                ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {expandedCategory === 'all' && (
            <FadeIn>
              <div className="mb-16">
                <h2 className="text-3xl font-serif font-bold text-white mb-2">
                  Featured Collections
                </h2>
                <p className="text-white/60">
                  Explore our complete gallery of premium events and experiences
                </p>
              </div>
            </FadeIn>
          )}

          {displayGalleries.map((gallery, idx) => (
            <div key={gallery.id} className="mb-24">
              <FadeIn delay={idx * 100}>
                <div className="mb-12">
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-3">
                    {gallery.name}
                  </h2>
                  <p className="text-white/60 text-lg">
                    {gallery.description}
                  </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gallery.images?.map((image, i) => (
                    <FadeIn key={i} delay={i * 100} direction="up">
                      <div className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 hover:border-[#c9a55a]/50 transition-all duration-500 cursor-pointer">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-6 w-full">
                            <p className="text-white font-medium text-sm">
                              {image.alt}
                            </p>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-[#c9a55a]/0 group-hover:bg-[#c9a55a]/10 transition-all duration-300" />
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </FadeIn>
            </div>
          ))}

          {/* All Images Masonry View (when viewing all) */}
          {expandedCategory === 'all' && (
            <FadeIn delay={300}>
              <div className="mt-24 pt-24 border-t border-white/10">
                <h3 className="text-2xl font-serif font-bold text-white mb-12">
                  Complete Gallery
                </h3>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                  {allImages.map((image, i) => (
                    <FadeIn key={i} delay={i * 50} direction="up">
                      <div className="group relative mb-6 break-inside-avoid rounded-lg overflow-hidden border border-white/10 hover:border-[#c9a55a]/50 transition-all duration-500 cursor-pointer">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={400}
                          height={300}
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 w-full">
                            <p className="text-white font-medium text-sm">
                              {image.alt}
                            </p>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Photography Services */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                Professional Photography & Videography
              </h2>
              <p className="text-white/60 text-lg">
                Every moment captured with cinematic quality
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Professional Photography',
                description: 'High-resolution professional photography coverage of all your events with expert lighting and composition.',
              },
              {
                title: 'Cinematic Videography',
                description: 'Broadcast-quality video production with multiple cameras, drones, and professional editing.',
              },
              {
                title: 'Live Streaming',
                description: 'Real-time broadcast to global audiences on multiple platforms including YouTube, Facebook, and Instagram.',
              },
              {
                title: 'Media Packages',
                description: 'Downloadable content in multiple formats for social media, websites, and promotional materials.',
              },
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 100} direction="up">
                <div className="p-8 bg-[#1a1a1a] border border-white/10 rounded-lg hover:border-[#c9a55a]/50 transition-all duration-500">
                  <h3 className="text-xl font-serif font-bold text-[#c9a55a] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {service.description}
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
              Create Memorable Moments
            </h2>
            <p className="text-white/60 mb-10 text-lg">
              Let our team capture and produce your next exclusive event
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Schedule Your Event
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
