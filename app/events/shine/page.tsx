'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useI18n } from '@/lib/i18n'
import { Star, Sparkles, Users, Trophy, Tv, Award } from 'lucide-react'
import { useState } from 'react'

export default function ShineAwardsPage() {
  const { t } = useI18n()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    message: '',
  })
  const [activeGallery, setActiveGallery] = useState('all')

  const features = [
    {
      icon: Trophy,
      title: 'Elite Recognition',
      description: 'Celebrate exceptional talent and achievement in an unforgettable awards ceremony',
    },
    {
      icon: Star,
      title: 'A-List Celebrities',
      description: 'World-renowned personalities as hosts and award presenters',
    },
    {
      icon: Tv,
      title: 'Global TV Coverage',
      description: 'Broadcast to millions of viewers worldwide on major streaming platforms',
    },
    {
      icon: Sparkles,
      title: 'Luxury Production',
      description: 'Oscar-caliber production design and entertainment',
    },
    {
      icon: Users,
      title: 'Exclusive Networking',
      description: 'Connect with industry leaders and influential personalities',
    },
    {
      icon: Award,
      title: 'Memorable Moments',
      description: 'Create iconic moments that define careers and legacies',
    },
  ]

  const galleries = [
    {
      id: 'ceremonies',
      name: 'Awards Ceremonies',
      description: 'Prestigious award presentations and acceptance moments',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_3_0094d0_ff704cdf37c84799909ff3673d152eb0~mv2-9QC2ds3BNCC4mrOZCAMoGhxlJPyi3j.jpg', alt: 'Red Carpet Entrance' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_6_11925-W6P3SpNRYMmyC9LH6wPpaFaOO5hMQ9.jpg', alt: 'Elegant Award Presentation' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_4_7708-hpvfz0CvysdO0W37VjS0R052gFv5Vf.jpg', alt: 'Community Gathering' },
      ],
    },
    {
      id: 'ambiance',
      name: 'Event Ambiance',
      description: 'Luxurious venue design and atmospheric elements',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_3_0094d0_ff704cdf37c84799909ff3673d152eb0~mv2-9QC2ds3BNCC4mrOZCAMoGhxlJPyi3j.jpg', alt: 'Luxury Venue' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_7_2150208255-g45mnZ4Cwgc5TkR01u3iAuIVpWIs9r.jpg', alt: 'Digital Age Celebration' },
      ],
    },
    {
      id: 'guests',
      name: 'Celebrity Guests',
      description: 'A-list personalities and industry luminaries',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_5_Group%20of%20Activists-a5GsYOiMsR5Sssfb5nZ16zzySObHOI.jpg', alt: 'VIP Guests' },
      ],
    },
  ]

  const sections = [
    {
      title: 'Celebrate Excellence',
      description: 'The Shine Awards Ceremony honors outstanding achievement across entertainment, business, philanthropy, and culture. Our prestigious event brings together the world\'s most influential personalities to recognize and celebrate exceptional talent.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_3_0094d0_ff704cdf37c84799909ff3673d152eb0~mv2-9QC2ds3BNCC4mrOZCAMoGhxlJPyi3j.jpg',
      imagePosition: 'right',
    },
    {
      title: 'Premium Production Quality',
      description: 'Every detail is meticulously crafted with Oscar-level production values. From cutting-edge stage design to world-class entertainment, we create an unforgettable spectacle that captivates audiences worldwide.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_6_11925-W6P3SpNRYMmyC9LH6wPpaFaOO5hMQ9.jpg',
      imagePosition: 'left',
    },
    {
      title: 'Global Broadcasting',
      description: 'Your achievement reaches millions. The Shine Awards are broadcast live on major networks and streaming platforms, ensuring global recognition and unprecedented visibility for nominees and winners.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_7_2150208255-g45mnZ4Cwgc5TkR01u3iAuIVpWIs9r.jpg',
      imagePosition: 'right',
    },
    {
      title: 'Exclusive Networking',
      description: 'Connect with industry titans, celebrities, and influential leaders in an intimate setting. The Shine Awards creates unique opportunities for collaboration and partnership among the world\'s most successful individuals.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_5_Group%20of%20Activists-a5GsYOiMsR5Sssfb5nZ16zzySObHOI.jpg',
      imagePosition: 'left',
    },
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_3_0094d0_ff704cdf37c84799909ff3673d152eb0~mv2-9QC2ds3BNCC4mrOZCAMoGhxlJPyi3j.jpg"
            alt="Shine Awards Ceremony"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0d0d0d]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <FadeIn delay={100}>
            <p className="text-amber-400 uppercase tracking-[0.3em] text-sm font-medium mb-6">
              PRESTIGIOUS AWARDS
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight mb-8">
              Shine Awards Ceremony
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Celebrating Excellence Across the Globe
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <Link
              href="#gallery"
              className="inline-block px-10 py-4 bg-amber-400 text-black font-semibold rounded hover:bg-amber-500 transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Explore Gallery
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                Why Shine
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Experience the pinnacle of recognition and celebration
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <FadeIn key={i} delay={i * 100} direction="up">
                  <div className="p-8 bg-[#1a1a1a] border border-white/10 rounded-lg hover:border-amber-400/50 transition-all duration-500">
                    <Icon className="text-amber-400 mb-4" size={32} />
                    <h3 className="text-xl font-serif font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                Gallery of Moments
              </h2>
              <p className="text-white/60">
                Iconic moments from the Shine Awards
              </p>
            </div>
          </FadeIn>

          {/* Gallery Filters */}
          <FadeIn delay={100}>
            <div className="flex flex-wrap gap-3 justify-center mb-16">
              <button
                onClick={() => setActiveGallery('all')}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 uppercase tracking-wider text-sm ${
                  activeGallery === 'all'
                    ? 'bg-amber-400 text-black'
                    : 'bg-[#1a1a1a] text-white/70 border border-white/10 hover:border-amber-400/50 hover:text-amber-400'
                }`}
              >
                View All
              </button>
              {galleries.map(gallery => (
                <button
                  key={gallery.id}
                  onClick={() => setActiveGallery(gallery.id)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 uppercase tracking-wider text-sm whitespace-nowrap ${
                    activeGallery === gallery.id
                      ? 'bg-amber-400 text-black'
                      : 'bg-[#1a1a1a] text-white/70 border border-white/10 hover:border-amber-400/50 hover:text-amber-400'
                  }`}
                >
                  {gallery.name}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Gallery Grid */}
          {(activeGallery === 'all' ? galleries : galleries.filter(g => g.id === activeGallery)).map((gallery, idx) => (
            <FadeIn key={gallery.id} delay={idx * 100} direction="up">
              <div className="mb-20">
                <div className="mb-10">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                    {gallery.name}
                  </h3>
                  <p className="text-white/60">
                    {gallery.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gallery.images.map((image, i) => (
                    <FadeIn key={i} delay={i * 50} direction="up">
                      <div className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 hover:border-amber-400/50 transition-all duration-500 cursor-pointer">
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
                        <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/10 transition-all duration-300" />
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Experience Sections */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((section, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 last:mb-0">
                {section.imagePosition === 'left' && (
                  <FadeIn direction="left" delay={100}>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </FadeIn>
                )}

                <div>
                  <FadeIn direction={section.imagePosition === 'left' ? 'right' : 'left'} delay={200}>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
                      {section.title}
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                      {section.description}
                    </p>
                  </FadeIn>
                </div>

                {section.imagePosition === 'right' && (
                  <FadeIn direction="right" delay={100}>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </FadeIn>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
