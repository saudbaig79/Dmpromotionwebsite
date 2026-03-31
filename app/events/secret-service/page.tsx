'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useI18n } from '@/lib/i18n'
import { Lock, Briefcase, Shield, Users, Eye, Trophy } from 'lucide-react'
import { useState } from 'react'

export default function SecretServicePage() {
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
      icon: Lock,
      title: 'Classified Intelligence',
      description: 'Top-secret operations designed with authentic espionage narratives',
    },
    {
      icon: Briefcase,
      title: 'Strategic Planning',
      description: 'Elite team coordination and tactical decision-making challenges',
    },
    {
      icon: Shield,
      title: 'VIP Protection',
      description: 'High-security protocols and executive-level safety procedures',
    },
    {
      icon: Eye,
      title: 'Surveillance Expertise',
      description: 'Advanced reconnaissance and intelligence-gathering techniques',
    },
    {
      icon: Users,
      title: 'Agent Training',
      description: 'Professional-grade scenarios for elite team development',
    },
    {
      icon: Trophy,
      title: 'Mission Success',
      description: 'Complete objectives and earn recognition as top operatives',
    },
  ]

  const galleries = [
    {
      id: 'operatives',
      name: 'Elite Operatives',
      description: 'Highly trained secret service professionals',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_5_269-L0omtwSTTvr50ORRHvYE0mm3Ui0aGI.jpg', alt: 'Masked Agent' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_7_2150844701-zpjtyYr6fz3oEzHxTq8Ui34nfZ1Pvg.jpg', alt: 'Field Operative' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_6_2150844701-aaixVpBZe7bk8dcKl2f2zbtTW0GDSL.jpg', alt: 'Professional Agent' },
      ],
    },
    {
      id: 'venues',
      name: 'Secure Locations',
      description: 'Prestigious venues and operational headquarters',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_5_269-L0omtwSTTvr50ORRHvYE0mm3Ui0aGI.jpg', alt: 'Underground Base' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_9_london%20inspired-LKTtNGkRY238dc1sUAc2peEhYg1kbm.jpg', alt: 'London Operations' },
      ],
    },
    {
      id: 'briefings',
      name: 'Strategy & Intel',
      description: 'Mission briefings and strategic planning sessions',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_15_10687-xhXgBFNScqURmOXDrWA8KgYKt8WPjb.jpg', alt: 'Intelligence Briefing' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_4_dinner-jf6lrW24RhRT7IyYwLKFOrDQUeertS.jpg', alt: 'Covert Dinner' },
      ],
    },
    {
      id: 'assets',
      name: 'Mission Assets',
      description: 'Luxury vehicles and high-tech equipment',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_10_aston%20martin%20car-egauJhJPzv3Unzhfnpj0IDcf6XchpB.jpg', alt: 'Tactical Vehicle' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_11_tv-CdBzvLR8fXSmbR7vKnu5gZ3e8FVAjD.jpg', alt: 'Control Center' },
      ],
    },
    {
      id: 'entrance',
      name: 'VIP Treatment',
      description: 'Exclusive access and security protocols',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_5_269-L0omtwSTTvr50ORRHvYE0mm3Ui0aGI.jpg', alt: 'Secure Entrance' },
      ],
    },
  ]

  const sections = [
    {
      title: 'International Operations',
      description: 'Experience classified missions across global locations. Our secret service experiences blend authentic espionage elements with luxury hospitality, creating an unforgettable adventure where you become the operative.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_9_london%20inspired-LKTtNGkRY238dc1sUAc2peEhYg1kbm.jpg',
      imagePosition: 'right',
    },
    {
      title: 'Elite Team Coordination',
      description: 'Work alongside professional operatives in challenging scenarios that require strategy, intelligence, and tactical expertise. Build unbreakable bonds with your team while executing high-stakes missions.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_7_2150844701-zpjtyYr6fz3oEzHxTq8Ui34nfZ1Pvg.jpg',
      imagePosition: 'left',
    },
    {
      title: 'Luxury Protection Package',
      description: 'Travel in style with access to premium vehicles, secure facilities, and gourmet dining experiences designed to mirror the lifestyle of top-tier security personnel. Every detail reflects professional excellence.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_10_aston%20martin%20car-egauJhJPzv3Unzhfnpj0IDcf6XchpB.jpg',
      imagePosition: 'right',
    },
    {
      title: 'Strategic Briefings',
      description: 'Receive intelligence updates in sophisticated settings where your analytical skills will be tested. Uncover conspiracies, identify threats, and make critical decisions that affect your mission success.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_15_10687-xhXgBFNScqURmOXDrWA8KgYKt8WPjb.jpg',
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_5_269-L0omtwSTTvr50ORRHvYE0mm3Ui0aGI.jpg"
            alt="Secret Service Experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0d0d0d]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <FadeIn delay={100}>
            <p className="text-blue-400 uppercase tracking-[0.3em] text-sm font-medium mb-6">
              CLASSIFIED OPERATIONS
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight mb-8">
              Secret Service Experience
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Elite Operations & Espionage Entertainment
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <Link
              href="#gallery"
              className="inline-block px-10 py-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-all duration-300 uppercase tracking-wider text-sm"
            >
              View Missions
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white text-center mb-16">
              Mission Capabilities
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <FadeIn key={i} delay={i * 100} direction="up">
                  <div className="p-8 bg-[#1a1a1a] border border-blue-500/20 rounded-lg hover:border-blue-500/50 transition-all duration-500">
                    <Icon className="text-blue-400 mb-4" size={32} />
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
                Mission Gallery
              </h2>
              <p className="text-white/60">
                Behind-the-scenes access to elite secret service operations
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
                    ? 'bg-blue-500 text-white'
                    : 'bg-[#1a1a1a] text-white/70 border border-white/10 hover:border-blue-500/50 hover:text-blue-400'
                }`}
              >
                All Missions
              </button>
              {galleries.map(gallery => (
                <button
                  key={gallery.id}
                  onClick={() => setActiveGallery(gallery.id)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 uppercase tracking-wider text-sm whitespace-nowrap ${
                    activeGallery === gallery.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-[#1a1a1a] text-white/70 border border-white/10 hover:border-blue-500/50 hover:text-blue-400'
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
                      <div className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 cursor-pointer">
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
                        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-300" />
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
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-blue-500/20">
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
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-blue-500/20">
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
