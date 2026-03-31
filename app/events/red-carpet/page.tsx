'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useI18n } from '@/lib/i18n'
import { Sparkles, Star, Camera, Heart, Users, Trophy } from 'lucide-react'
import { useState } from 'react'

export default function RedCarpetPage() {
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
      icon: Sparkles,
      title: 'Star Treatment',
      description: 'Experience VIP red carpet privileges reserved for A-list celebrities',
    },
    {
      icon: Camera,
      title: 'Media Coverage',
      description: 'Professional photography and social media amplification',
    },
    {
      icon: Heart,
      title: 'Luxury Fashion',
      description: 'Haute couture styling and designer wardrobe selection',
    },
    {
      icon: Users,
      title: 'Exclusive Networks',
      description: 'Mingle with influential personalities and industry leaders',
    },
    {
      icon: Star,
      title: 'Prestige Event',
      description: 'Access to glamorous venues and high-end entertainment',
    },
    {
      icon: Trophy,
      title: 'Recognition',
      description: 'Featured in exclusive publications and social platforms',
    },
  ]

  const galleries = [
    {
      id: 'entrances',
      name: 'Grand Entrances',
      description: 'Iconic red carpet moments and elegant arrivals',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_4_7708-hpvfz0CvysdO0W37VjS0R052gFv5Vf.jpg', alt: 'Red Carpet Installation' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_3_0094d0_ff704cdf37c84799909ff3673d152eb0~mv2-9QC2ds3BNCC4mrOZCAMoGhxlJPyi3j.jpg', alt: 'Luxury Venue' },
      ],
    },
    {
      id: 'glamour',
      name: 'Glamour & Style',
      description: 'Fashion, elegance, and red carpet sophistication',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_6_20356-89yO7R04M12NI2dMGvet0tuSDH1W0U.jpg', alt: 'Gown Moment' },
      ],
    },
    {
      id: 'community',
      name: 'Networking Events',
      description: 'Diverse attendees and community engagement',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_5_Group%20of%20Activists-a5GsYOiMsR5Sssfb5nZ16zzySObHOI.jpg', alt: 'Diverse Group' },
      ],
    },
    {
      id: 'digital',
      name: 'Social Media Star',
      description: 'Digital presence and influencer amplification',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_7_2150208255-g45mnZ4Cwgc5TkR01u3iAuIVpWIs9r.jpg', alt: 'Social Media Moment' },
      ],
    },
    {
      id: 'branding',
      name: 'Brand Partnerships',
      description: 'Luxury branding and exclusive collaborations',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_6_11925-W6P3SpNRYMmyC9LH6wPpaFaOO5hMQ9.jpg', alt: 'Branding' },
      ],
    },
  ]

  const sections = [
    {
      title: 'Red Carpet Prestige',
      description: 'Walk the most exclusive red carpets in the world. Our events attract media attention and industry leaders. Experience the glamour and exclusivity that defines high-society entertaining.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_4_7708-hpvfz0CvysdO0W37VjS0R052gFv5Vf.jpg',
      imagePosition: 'right',
    },
    {
      title: 'Fashion & Beauty',
      description: 'Dress in haute couture selections curated by industry experts. Professional styling, hair, and makeup services ensure you look absolutely stunning on the red carpet.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_6_20356-89yO7R04M12NI2dMGvet0tuSDH1W0U.jpg',
      imagePosition: 'left',
    },
    {
      title: 'Media & Spotlight',
      description: 'Get featured in luxury publications and gain social media exposure. Professional photographers and media coverage ensure your moment shines on every platform.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_7_2150208255-g45mnZ4Cwgc5TkR01u3iAuIVpWIs9r.jpg',
      imagePosition: 'right',
    },
    {
      title: 'Luxury Venues',
      description: 'Celebrate in world-class venues designed for sophistication and elegance. From illuminated gardens to poolside galas, every setting is meticulously curated for an unforgettable evening.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_3_0094d0_ff704cdf37c84799909ff3673d152eb0~mv2-9QC2ds3BNCC4mrOZCAMoGhxlJPyi3j.jpg',
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_4_7708-hpvfz0CvysdO0W37VjS0R052gFv5Vf.jpg"
            alt="Red Carpet Experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0d0d0d]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <FadeIn delay={100}>
            <p className="text-red-400 uppercase tracking-[0.3em] text-sm font-medium mb-6">
              EXCLUSIVE PREMIERE
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight mb-8">
              Red Carpet Experience
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Glamour, Prestige & Celebrity Entertainment
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <Link
              href="#gallery"
              className="inline-block px-10 py-4 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition-all duration-300 uppercase tracking-wider text-sm"
            >
              View Gallery
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white text-center mb-16">
              Premium Features
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <FadeIn key={i} delay={i * 100} direction="up">
                  <div className="p-8 bg-[#1a1a1a] border border-red-500/20 rounded-lg hover:border-red-500/50 transition-all duration-500">
                    <Icon className="text-red-400 mb-4" size={32} />
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
                Glamour Gallery
              </h2>
              <p className="text-white/60">
                Behind-the-scenes access to exclusive red carpet moments
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
                    ? 'bg-red-500 text-white'
                    : 'bg-[#1a1a1a] text-white/70 border border-white/10 hover:border-red-500/50 hover:text-red-400'
                }`}
              >
                All Events
              </button>
              {galleries.map(gallery => (
                <button
                  key={gallery.id}
                  onClick={() => setActiveGallery(gallery.id)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 uppercase tracking-wider text-sm whitespace-nowrap ${
                    activeGallery === gallery.id
                      ? 'bg-red-500 text-white'
                      : 'bg-[#1a1a1a] text-white/70 border border-white/10 hover:border-red-500/50 hover:text-red-400'
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
                      <div className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-500 cursor-pointer">
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
                        <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/10 transition-all duration-300" />
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
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-red-500/20">
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
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-red-500/20">
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
