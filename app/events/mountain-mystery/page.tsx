'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useI18n } from '@/lib/i18n'
import { Mountain, Compass, Wind, Heart, Map, Zap } from 'lucide-react'
import { useState } from 'react'

export default function MountainMysteryPage() {
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
      icon: Mountain,
      title: 'Alpine Adventure',
      description: 'Challenging expeditions across dramatic mountain terrain and peaks',
    },
    {
      icon: Compass,
      title: 'Navigation Mastery',
      description: 'Expert guidance through treacherous routes and hidden pathways',
    },
    {
      icon: Wind,
      title: 'Weather Challenge',
      description: 'Test your resilience against unpredictable alpine conditions',
    },
    {
      icon: Heart,
      title: 'Survival Skills',
      description: 'Learn essential techniques for high-altitude environments',
    },
    {
      icon: Map,
      title: 'Hidden Secrets',
      description: 'Discover mystery elements hidden within mountain landscapes',
    },
    {
      icon: Zap,
      title: 'Peak Experience',
      description: 'Summit achievements and unforgettable mountain moments',
    },
  ]

  const galleries = [
    {
      id: 'peaks',
      name: 'Mountain Peaks',
      description: 'Majestic summits and dramatic alpine scenery',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_4_4395-rCiXDc1lPNH0DpqYW0TgQYMAB12oy0.jpg', alt: 'Starlit Peak' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_3_mountain-mystery-4BxJnc33B7ORtUajejAgvwET2Sa9BM.jpg', alt: 'Misty Mountains' },
      ],
    },
    {
      id: 'adventurers',
      name: 'Expedition Guides',
      description: 'Professional mountaineers and expedition leaders',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_5_skiier-4T2449SIEXZz3U4tS2e2SyBeDQvZWB.jpg', alt: 'Mountain Climber' },
      ],
    },
    {
      id: 'slopes',
      name: 'Alpine Slopes',
      description: 'Pristine ski runs and mountainous terrain',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_6_ski%20slopes-P4sSEaAtbBhwIwletEOEHBGg7kGm9A.jpg', alt: 'Ski Infrastructure' },
      ],
    },
  ]

  const sections = [
    {
      title: 'Summit Challenges',
      description: 'Navigate through challenging alpine terrain where nature tests your courage and determination. Our mountain mysteries combine physical adventure with intriguing puzzles to solve at various elevations.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_4_4395-rCiXDc1lPNH0DpqYW0TgQYMAB12oy0.jpg',
      imagePosition: 'right',
    },
    {
      title: 'High-Altitude Mystery',
      description: 'Uncover secrets hidden among misty peaks and dramatic valleys. Each location tells a story, and you&apos;ll need to solve the mountain mystery to complete your expedition successfully.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_3_mountain-mystery-4BxJnc33B7ORtUajejAgvwET2Sa9BM.jpg',
      imagePosition: 'left',
    },
    {
      title: 'Professional Guidance',
      description: 'Expert mountaineers lead you through exhilarating terrain with world-class safety protocols. Learn survival skills while experiencing the raw beauty and mystery of alpine environments.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_5_skiier-4T2449SIEXZz3U4tS2e2SyBeDQvZWB.jpg',
      imagePosition: 'right',
    },
    {
      title: 'Breathtaking Scenery',
      description: 'Experience the majesty of mountain landscapes where every turn reveals new mystery elements. From dramatic peaks to hidden valleys, nature becomes your adventure playground.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_6_ski%20slopes-P4sSEaAtbBhwIwletEOEHBGg7kGm9A.jpg',
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_3_mountain-mystery-4BxJnc33B7ORtUajejAgvwET2Sa9BM.jpg"
            alt="Mountain Mystery Experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0d0d0d]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <FadeIn delay={100}>
            <p className="text-amber-400 uppercase tracking-[0.3em] text-sm font-medium mb-6">
              ALPINE EXPEDITION
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight mb-8">
              Mountain Mystery
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Adventure, Mystery & Alpine Exploration
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <Link
              href="#gallery"
              className="inline-block px-10 py-4 bg-amber-500 text-black font-semibold rounded hover:bg-amber-600 transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Explore Expeditions
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white text-center mb-16">
              Expedition Features
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <FadeIn key={i} delay={i * 100} direction="up">
                  <div className="p-8 bg-[#1a1a1a] border border-amber-500/20 rounded-lg hover:border-amber-500/50 transition-all duration-500">
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
                Expedition Gallery
              </h2>
              <p className="text-white/60">
                Stunning alpine landscapes and mountain mystery experiences
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
                    ? 'bg-amber-500 text-black'
                    : 'bg-[#1a1a1a] text-white/70 border border-white/10 hover:border-amber-500/50 hover:text-amber-400'
                }`}
              >
                All Expeditions
              </button>
              {galleries.map(gallery => (
                <button
                  key={gallery.id}
                  onClick={() => setActiveGallery(gallery.id)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 uppercase tracking-wider text-sm whitespace-nowrap ${
                    activeGallery === gallery.id
                      ? 'bg-amber-500 text-black'
                      : 'bg-[#1a1a1a] text-white/70 border border-white/10 hover:border-amber-500/50 hover:text-amber-400'
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
                      <div className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 hover:border-amber-500/50 transition-all duration-500 cursor-pointer">
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
                        <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-all duration-300" />
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
      <section className="py-24 bg-[#111111] space-y-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((section, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="grid lg:grid-cols-2 gap-12 items-center" style={{
                gridAutoFlow: section.imagePosition === 'left' ? 'dense' : 'normal'
              }}>
                {section.imagePosition === 'left' && (
                  <FadeIn direction="left" delay={100}>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-amber-500/20">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </FadeIn>
                )}

                <div className={section.imagePosition === 'left' ? 'lg:col-start-2' : ''}>
                  <FadeIn direction={section.imagePosition === 'left' ? 'right' : 'left'} delay={200}>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
                      {section.title}
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed">
                      {section.description}
                    </p>
                  </FadeIn>
                </div>

                {section.imagePosition === 'right' && (
                  <FadeIn direction="right" delay={100}>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-amber-500/20">
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
