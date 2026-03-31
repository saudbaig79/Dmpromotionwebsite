'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useState } from 'react'

export default function BehindTheScenesPage() {
  const [expandedCategory, setExpandedCategory] = useState('all')

  const galleries = [
    {
      id: 'all',
      name: 'All Events',
      description: 'Complete gallery of our premium events',
    },
    {
      id: 'luxury-gala',
      name: 'Luxury Gala Events',
      description: 'Exclusive high-profile gala dinners with A-list guests and media coverage',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_17_0094d0_cc5084fa97524f8c9c6d92b03798bdf4~mv2-qz8KxQ7VkEPdCNgXipZBCr6Bv81fVR.jpg', alt: 'Formal Gala Dinner with Media Coverage' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_18_0094d0_b05023504f8e48d983f4ca166dae0be6~mv2-oXug2gue17DSw0gtFd3vpLnJYlKkSJ.jpg', alt: 'Professional Gala Production Setup' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_15_0094d0_dc0fd0fa73ed497c959188f58cbcaa7e~mv2-2yw7egWtWd3Hm3jPikN5UPn37SGcpU.jpg', alt: 'Formal Event Reception' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_5_0094d0_96b0bda11fd24ded80186308ccf2be48~mv2-iBYp7eV5xO9dhSj73GqFYkmMLUKHEA.jpg', alt: 'Dessert Service at Formal Dinner' },
      ],
    },
    {
      id: 'professional-services',
      name: 'Professional Services',
      description: 'Hair & makeup styling, professional grooming, and guest preparation services',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_13_0094d0_d49bcd3074f54949b7f1373ace8e24df~mv2-sZzuhgrI2MU10Ylh2hI0JfSMKucqAg.jpg', alt: 'Professional Makeup Application' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_4_0094d0_d49bcd3074f54949b7f1373ace8e24df~mv2-YLG8ICDGAymkupvKjxYJdYDFdS7MeF.jpg', alt: 'Professional Styling Services' },
      ],
    },
    {
      id: 'production-behind-scenes',
      name: 'Production & Behind-the-Scenes',
      description: 'Professional camera operators, production crews, and technical setup',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_7_0094d0_d0fa17632d57472cabc77c736a84663d~mv2-ae5AvLfLPXRow3n8TgbUAknFuvhj3N.jpg', alt: 'Professional Gimbal Camera Operator' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_3_11062b_a87eff2c24544120855cb91285e87567~mv2-CQ4kP1DX2p8nxChDcVmq2wOsOPq3IN.jpg', alt: 'Professional Studio Green Screen Setup' },
      ],
    },
    {
      id: 'outdoor-events',
      name: 'Outdoor Event Production',
      description: 'Large-scale outdoor events with complete production and media coverage',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_19_0094d0_d41e30d39a924374b1b0e169b31131fcf003-eUaLs9XdIR4HOmTJYTzrhSBLoIfyBe.webp', alt: 'Outdoor Event with DM Promotions Setup' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_10_0094d0_d41e30d39a924374b1b0e169b31131fcf003-Yb1DWeOeDGVPdRwIbEGx4HVaLnP6Bx.jpg', alt: 'Outdoor Event Media Coverage' },
      ],
    },
    {
      id: 'winter-events',
      name: 'Winter & Resort Events',
      description: 'Luxury mountain resort experiences and winter event productions',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ceo%20Review-G1gMUFhujZfon30GwpEbhK8jkZR6aT.png', alt: 'Winter Resort Experience' },
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
