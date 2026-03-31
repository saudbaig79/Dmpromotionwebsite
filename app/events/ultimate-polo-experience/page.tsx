'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useI18n } from '@/lib/i18n'
import { Trophy, Users, Zap, Sparkles, Target, Crown } from 'lucide-react'
import { useState } from 'react'

export default function PoloExperiencePage() {
  const { t } = useI18n()
  const [activeGallery, setActiveGallery] = useState('all')

  const features = [
    {
      icon: Trophy,
      title: 'Elite Competition',
      description: 'Watch world-class polo players competing at the highest levels of the sport',
    },
    {
      icon: Crown,
      title: 'Luxury Hospitality',
      description: 'Premium VIP experiences with fine dining and exclusive terraces overlooking the field',
    },
    {
      icon: Users,
      title: 'High-Society Networking',
      description: 'Connect with international elite, celebrities, and business leaders',
    },
    {
      icon: Sparkles,
      title: 'Award Ceremonies',
      description: 'Prestigious trophy presentations and victory celebrations',
    },
    {
      icon: Zap,
      title: 'Dynamic Action',
      description: 'Fast-paced, thrilling moments of athletic excellence on a grand scale',
    },
    {
      icon: Target,
      title: 'Championship Events',
      description: 'Experience landmark polo tournaments with global significance',
    },
  ]

  const galleries = [
    {
      id: 'action',
      name: 'Match Action',
      description: 'Thrilling moments of polo competition and athletic excellence',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_58_373637_248d11bb7dd342e18f9e090a742fb2cb~mv2-AiGMt6jTNrsg1ei5UUE0rf5bfNI7HE.jpg', alt: 'Elite Player Action' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_26_373637_a5d107b0a0a84e91b72fd4dfe13e9f26~mv2-mSGvbzR1j0tBLA1DNLkVdazC3RWSpU.jpg', alt: 'Team Dynamics' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_25_373637_baeab64bad504377bcd36b300534443e~mv2-sf5eZXJud517OP9W6cPfAzHuzfTcbj.jpg', alt: 'Competitive Play' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_24_373637_660e71c8dc50410aacbb675db66dcac1~mv2-eTimR2nZXvPPKzmqfoBEGvu12zmM.jpg', alt: 'Fast Action' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_3_373637_a04aebe17b9d46ae8425da72e126a5dc~mv2-doGOzmh5OLLexjmpghJiZ1fjrPU4JG.jpg', alt: 'Professional Play' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_12_373637_5022c791dcfd4770af6d7b3f6627cbac~mv2-TXx4nREVcEGl0z90FDZxq9D5yQOoOD.jpg', alt: 'Strategic Movement' },
      ],
    },
    {
      id: 'spectators',
      name: 'Spectator Experience',
      description: 'Elegant crowds and prime viewing from the field and grandstands',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_30_373637_a6d4736349354cbc85c9ea9b1a3f4b08~mv2-vmSGuZtziESi4L177T3Dd9m8gXHW3A.jpg', alt: 'Grandstand Audience' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_11_373637_b5f3fa65265d4b408be1a2d1602dd80b~mv2-mIX9MK7kBvfosiQl49e8xE4iyMyxvc.jpg', alt: 'Field-Side Spectators' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_40_373637_b5f3fa65265d4b408be1a2d1602dd80b~mv2-myTFQNOm44OaJupymCyGqi0t4xVN0P.jpg', alt: 'Crowd Engagement' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_10_373637_c43325cd32874a43a6a6b9a71dfc7b1f~mv2-FYZFw4DRZ9B8qnH4yK20sb8XvN342Y.jpg', alt: 'Match Viewpoint' },
      ],
    },
    {
      id: 'hospitality',
      name: 'Luxury Hospitality',
      description: 'Premium dining and socializing experiences with elegant venues',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_4_Terrazas-n8TeOni6iZBCxPrayMESjpx9iOabTZ.jpg', alt: 'Wooden Terrace' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_57_373637_8ba320965f334491a95f84c46887658f~mv2-NZnITYDlOWGImyJkSK3utfIlFLpiHT.jpg', alt: 'Hospitality Dining' },
      ],
    },
    {
      id: 'awards',
      name: 'Award Ceremonies',
      description: 'Victory celebrations and trophy presentations',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_31_373637_ccf8ddb845e5435aa55112292cda8d0f~mv2-z4JnFPnyBDhAVWM3HKllv1vunmMIzm.jpg', alt: 'Trophy Ceremony' },
      ],
    },
  ]

  const sections = [
    {
      title: 'The Spirit of Polo',
      description: 'Polo represents the highest expression of equestrian sport—a blend of athletic prowess, strategic brilliance, and unbridled passion. With roots dating back centuries, polo has captivated royalty, celebrities, and elite enthusiasts worldwide. Our Ultimate Polo Experience brings you into this exclusive world where tradition meets modern luxury.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_58_373637_248d11bb7dd342e18f9e090a742fb2cb~mv2-AiGMt6jTNrsg1ei5UUE0rf5bfNI7HE.jpg',
      imagePosition: 'right',
    },
    {
      title: 'Witness Excellence',
      description: 'Watch the world\'s finest polo players showcase their extraordinary skill and horsemanship. Every match is a masterclass in precision, courage, and teamwork. Experience the intensity, strategy, and raw athletic power that define championship-level polo competition.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_26_373637_a5d107b0a0a84e91b72fd4dfe13e9f26~mv2-mSGvbzR1j0tBLA1DNLkVdazC3RWSpU.jpg',
      imagePosition: 'left',
    },
    {
      title: 'Premier Venue & Facilities',
      description: 'Enjoy world-class amenities including premium grandstand seating with perfect sightlines, luxurious hospitality lounges, fine dining restaurants, and exclusive terraces. Every detail is meticulously designed to enhance your experience while you enjoy championship polo at its finest.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_4_Terrazas-n8TeOni6iZBCxPrayMESjpx9iOabTZ.jpg',
      imagePosition: 'right',
    },
    {
      title: 'Elite Networking',
      description: 'Connect with international polo enthusiasts, business titans, and high-society personalities. The polo grounds are where deals are made, friendships are forged, and lasting memories are created among the world\'s most influential individuals.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_30_373637_a6d4736349354cbc85c9ea9b1a3f4b08~mv2-vmSGuZtziESi4L177T3Dd9m8gXHW3A.jpg',
      imagePosition: 'left',
    },
    {
      title: 'Gourmet Experiences',
      description: 'Savor exquisite cuisine prepared by renowned chefs in elegant settings. From champagne receptions to multi-course dinners, every meal celebrates the finer things in life while you enjoy panoramic views of the polo matches.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_57_373637_8ba320965f334491a95f84c46887658f~mv2-NZnITYDlOWGImyJkSK3utfIlFLpiHT.jpg',
      imagePosition: 'right',
    },
    {
      title: 'Trophy & Glory',
      description: 'Be part of the celebration as champions are crowned. Experience the prestige of award ceremonies where victory is honored with all the pageantry and ceremony that reflects the sport\'s rich heritage and tradition.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_31_373637_ccf8ddb845e5435aa55112292cda8d0f~mv2-z4JnFPnyBDhAVWM3HKllv1vunmMIzm.jpg',
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_58_373637_248d11bb7dd342e18f9e090a742fb2cb~mv2-AiGMt6jTNrsg1ei5UUE0rf5bfNI7HE.jpg"
            alt="Ultimate Polo Experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0d0d0d]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <FadeIn delay={100}>
            <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm font-medium mb-6">
              ELITE SPORT EXPERIENCE
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight mb-8">
              The Ultimate Polo Experience
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Where Championship Competition Meets Luxury Hospitality
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <Link
              href="#gallery"
              className="inline-block px-10 py-4 bg-emerald-500 text-white font-semibold rounded hover:bg-emerald-600 transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Explore Gallery
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                Experience the Action
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Watch highlights from our most prestigious polo tournaments
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={100}>
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300 shadow-2xl shadow-emerald-500/10">
              <video
                width="100%"
                height="100%"
                controls
                className="w-full h-full object-cover"
                poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_58_373637_248d11bb7dd342e18f9e090a742fb2cb~mv2-AiGMt6jTNrsg1ei5UUE0rf5bfNI7HE.jpg"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/v%20-%20Trim-ub79E8cSyLai3gk3AybBI0bsR6pj83.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                The Ultimate Experience
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Championship polo combined with world-class hospitality
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <FadeIn key={i} delay={i * 100} direction="up">
                  <div className="p-8 bg-[#1a1a1a] border border-white/10 rounded-lg hover:border-emerald-500/50 transition-all duration-500">
                    <Icon className="text-emerald-500 mb-4" size={32} />
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
                Experience the elegance and excitement of polo
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
                    ? 'bg-emerald-500 text-white'
                    : 'bg-[#1a1a1a] text-white/70 border border-white/10 hover:border-emerald-500/50 hover:text-emerald-500'
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
                      ? 'bg-emerald-500 text-white'
                      : 'bg-[#1a1a1a] text-white/70 border border-white/10 hover:border-emerald-500/50 hover:text-emerald-500'
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
                      <div className="group relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 hover:border-emerald-500/50 transition-all duration-500 cursor-pointer">
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
                        <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition-all duration-300" />
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
