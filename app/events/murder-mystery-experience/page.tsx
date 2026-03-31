'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { useI18n } from '@/lib/i18n'
import { Star, Sparkles, Users, Trophy, Tv, PenTool } from 'lucide-react'
import { useState } from 'react'

export default function MurderMysteryPage() {
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
      icon: Star,
      title: 'Immersive Experience',
      description: 'Captivating atmosphere with theatrical production elements designed by Hollywood\'s finest',
    },
    {
      icon: Users,
      title: 'Celebrity Host',
      description: 'World-renowned artists and personalities as hosts and cast members',
    },
    {
      icon: PenTool,
      title: 'Cinema Quality Scripts',
      description: 'Professionally written with 15+ years experience from Channel 4 and BBC',
    },
    {
      icon: Sparkles,
      title: 'Haute Couture',
      description: 'Professional styling and haute couture looks provided for all guests',
    },
    {
      icon: Tv,
      title: 'TV Coverage',
      description: 'Featured on Apple TV, Roku, and Amazon with 150M+ home viewership',
    },
    {
      icon: Trophy,
      title: 'Luxury Rewards',
      description: 'Prize package including exclusive art pieces worth €20,000+',
    },
  ]

  const galleries = [
    {
      id: 'dining',
      name: 'Theatrical Dining',
      description: 'Exquisite culinary experiences with gourmet presentation',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_20_0094d0_9758ce55521c436492b799e65985e60b~mv2-EDTzr6GU6dLoWhGHc1GU1kLtvU8j0Q.jpg', alt: 'Fine Dining Setup' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_34_dinner-8rU4xjzX0gBf9yE0tVZc1yVNaFQ81S.jpg', alt: 'Gourmet Presentation' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_4_dinner-CLcvo6b3iZ9C2k0FcUbZQ4z8VTII8y.jpg', alt: 'Theatrical Flatware' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_50_0094d0_2a3a25d72ab7458ead998a63db570cd6~mv2-3viLX5DqTyHo1cHjomBPQYwVOBK1OY.jpg', alt: 'Beaded Props & Table Settings' },
      ],
    },
    {
      id: 'characters',
      name: 'Character Casting',
      description: 'Professional actors and mysterious personas',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_5_mystery%20man-NMLkcn6uLr68ZZIPLR7YvEtUkwQGNN.jpg', alt: 'Mysterious Man' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_7_woman%20with%20gun-NRemHLhsC1AaLjCqMB7eRmiZySKrTd.jpg', alt: 'Femme Fatale' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_35_woman%20with%20gun-8ZJ7Ai1Ce1WcTh4hVY18emgTd5ymnZ.jpg', alt: 'Noir Detective' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_11_debbie%20red-Wf5TnQnTWN1rkBeI8NXOepXSJOgvZc.jpg', alt: 'Glamorous Host' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_14_0094d0_c47a1adb46614b628d0e866b4727df6e~mv2-FUpZErLMtdiVdn4FMjpVnPrbk2wPED.jpg', alt: 'Masquerade Character' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_44_0094d0_9c61c1cd2e834639b46949dae11028c6~mv2-ZlKDevkEd4vKHcdxtlyZyPugeKctPD.jpg', alt: 'Costumed Guest' },
      ],
    },
    {
      id: 'venues',
      name: 'Luxury Venues',
      description: 'Dramatic mansions and elegant estates',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_8_haunted%20casa-wj4SE7NH1TL1suo23RjPi38AW80Qvy.jpg', alt: 'Haunted Mansion' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_38_0094d0_114634db66c643fe938114b9a580be71~mv2-WaeXue8ADVfGmEMd8QIN81ra38w6Vq.jpg', alt: 'Grand Staircase' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_14_0094d0_c47a1adb46614b628d0e866b4727df6e~mv2-FUpZErLMtdiVdn4FMjpVnPrbk2wPED.jpg', alt: 'Elegant Manor' },
      ],
    },
    {
      id: 'props',
      name: 'Murder Mystery Props',
      description: 'Haute couture weapons and theatrical props',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_9_LV%20hatchet-87yLBKnoYuqxceaSANRkNfEvqwnnh9.jpg', alt: 'Luxury Hatchet Prop' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_36_0094d0_3c9644cafbbe4eb0a3f833da2fa4e6be~mv2-Vk5clJ38FxdQ72wwgPBmlCk9obTxpW.jpg', alt: 'Ornate Dining Mask' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_10_vintage-set-tv-U1iWs43KZw6V7ToSVgQDVCk2fVH82s.jpg', alt: 'Vintage Set' },
      ],
    },
    {
      id: 'guests',
      name: 'Guest Experience',
      description: 'Sophisticated attendees and networking moments',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_30_0094d0_267036d5941e4b3cac2ef458e1825757~mv2-2uh4mgZqlOFW5ZKxL4KIB2dJOfv0Vc.jpg', alt: 'Garden Photography' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_29_0094d0_d2bab4e1c2d9491baa5dfc420ca8371e~mv2-7mMTuANuRNdBHpkruapDwaPpH800qL.jpg', alt: 'Formal Dinner Guest' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_28_0094d0_3339bb8732b44ed692d8c548ab9eb269~mv2-cxdm7x5xa7G8Tsk5zIOTKACVPJFiGf.jpg', alt: 'Elegant Guest Moment' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_22_0094d0_817154a6533d4b18a5b90dab8941dd85~mv2-QK1jYaOJj7xajprGNwNb5HqmyWA7wI.jpg', alt: 'Yellow Gown Moment' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_26_0094d0_7b739c61112c48768c779d00534d667b~mv2-rVzlOOJh5DgF8PVbKJ5DbEt5Q5etdK.jpg', alt: 'Formal Event Attendee' },
      ],
    },
    {
      id: 'production',
      name: 'Production Details',
      description: 'Behind-the-scenes and professional elements',
      images: [
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_6_DW%20Bates-083-b4ndXZPqbaF24UMucokNbNpJ0MhT2m.jpg', alt: 'Professional Portrait' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_12_DW%20Bates-116%20%281%29-T3gqKBIj6sxQeDi0B81PE783cZ6aQ0.jpg', alt: 'Host Portrait' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_15_0094d0_114634db66c643fe938114b9a580be71~mv2-AmH4qebeSGt7gc2PHBD0COuDRIB2Qe.jpg', alt: 'Event Documentation' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_16_0094d0_e3271e67559349ca9246835db30bb221~mv2-Eym84Jeb5rUYRamiFu4qKX635zDQsU.jpg', alt: 'Production Setup' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_17_0094d0_caa033043b5d4b98b5dac91885cda0ea~mv2-YvtLIkFzVyA6fsYa5wHfewshQ4ENDz.jpg', alt: 'Event Coverage' },
        { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_18_0094d0_7436cdb8012b45818b9285e901d992e5~mv2-raED8OFQpGRyZBYiqkSaNTzgYpdeyV.jpg', alt: 'Professional Shoot' },
      ],
    },
  ]

  const sections = [
    {
      title: 'The Plot Thickens',
      description: 'Our dining experience adds to the whole murder mystery, embodying contemporary theatrical gastronomy prepared by award-winning chefs. Each course is crafted to enhance the narrative and create unforgettable culinary moments.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_20_0094d0_9758ce55521c436492b799e65985e60b~mv2-EDTzr6GU6dLoWhGHc1GU1kLtvU8j0Q.jpg',
      imagePosition: 'right',
    },
    {
      title: 'Friend, Confidant or Arch Enemy?',
      description: 'Cameo appearances from personalities from the Music, TV and Social Media Industries. These A-list appearances create intrigue and add authenticity to the mystery experience.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_5_mystery%20man-NMLkcn6uLr68ZZIPLR7YvEtUkwQGNN.jpg',
      imagePosition: 'left',
    },
    {
      title: 'Cinema Quality Production',
      description: 'Every element of the narrative is engaging. Our sets are designed by Hollywood\'s finest. Our scripts are created with intelligence, humor and clever dialogue that keeps participants guessing and engages them emotionally.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_8_haunted%20casa-wj4SE7NH1TL1suo23RjPi38AW80Qvy.jpg',
      imagePosition: 'right',
    },
    {
      title: 'Great for Team Building',
      description: 'Ideal for corporate events, networking opportunities, and creating lasting connections among participants while solving the mystery together.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_38_0094d0_114634db66c643fe938114b9a580be71~mv2-WaeXue8ADVfGmEMd8QIN81ra38w6Vq.jpg',
      imagePosition: 'left',
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_8_haunted%20casa-wj4SE7NH1TL1suo23RjPi38AW80Qvy.jpg"
            alt="Murder Mystery Experience"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0d0d0d]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <FadeIn delay={100}>
            <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm font-medium mb-6">
              IMMERSIVE EXPERIENCE
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight mb-8">
              Murder Mystery Experience
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Bringing Innovation to the Murder Mystery Sector
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <Link
              href="#gallery"
              className="inline-block px-10 py-4 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Explore Gallery
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Unforgettable Experience Features
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <FadeIn key={i} delay={i * 100} direction="up">
                  <div className="p-8 bg-[#1a1a1a] border border-white/10 rounded-lg hover:border-[#c9a55a]/50 transition-all duration-500">
                    <Icon className="text-[#c9a55a] mb-4" size={32} />
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
                Gallery of Experiences
              </h2>
              <p className="text-white/60">
                Explore the theatrical, luxurious world of our Murder Mystery productions
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
                    ? 'bg-[#c9a55a] text-black'
                    : 'bg-[#1a1a1a] text-white/70 border border-white/10 hover:border-[#c9a55a]/50 hover:text-[#c9a55a]'
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
                      ? 'bg-[#c9a55a] text-black'
                      : 'bg-[#1a1a1a] text-white/70 border border-white/10 hover:border-[#c9a55a]/50 hover:text-[#c9a55a]'
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
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      {sections.map((section, i) => (
        <section key={i} className={`py-24 ${i % 2 === 0 ? 'bg-[#0d0d0d]' : 'bg-[#111111]'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${section.imagePosition === 'left' ? 'lg:grid-flow-dense' : ''}`}>
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

                <div className={section.imagePosition === 'left' ? 'lg:col-start-2' : ''}>
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
          </div>
        </section>
      ))}

      {/* Host Profile */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn direction="left" delay={100}>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_11_debbie%20red-Wf5TnQnTWN1rkBeI8NXOepXSJOgvZc.jpg"
                    alt="Debbie Wingham, Host"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={200}>
                <div>
                  <h2 className="text-3xl font-serif font-bold text-white mb-8">
                    Meet the Host
                  </h2>
                  <p className="text-white/60 text-lg leading-relaxed mb-6">
                    World renowned artist Debbie Wingham, recognized globally for her unique diamond creations, will be the host of our murder mystery experience.
                  </p>
                  <p className="text-white/60 text-lg leading-relaxed mb-6">
                    A social media influencer with over 3 million followers, Debbie brings a combination of set design, theatrical gastronomy and hidden luxurious clues including an array of haute couture murder weapons.
                  </p>
                  <p className="text-white/60 text-lg leading-relaxed">
                    With 15+ years experience in cinema and television production from Channel 4 and BBC, every detail is crafted to perfection.
                  </p>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Props & Rewards */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12">
              <FadeIn direction="left" delay={100}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_9_LV%20hatchet-87yLBKnoYuqxceaSANRkNfEvqwnnh9.jpg"
                    alt="Luxury Props"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={200}>
                <div>
                  <h2 className="text-3xl font-serif font-bold text-white mb-8">
                    The Props
                  </h2>
                  <p className="text-white/60 text-lg leading-relaxed mb-6">
                    Custom haute couture props will add to the experience making it more memorable. Each weapon and scenario is reminiscent of a homicidal Hollywood silver screen moment.
                  </p>
                  <p className="text-white/60 text-lg leading-relaxed mb-6">
                    The promise of a valuable art piece worth over €20,000 created by Debbie Wingham herself will be the reward for the ultimate detective that solves the case and identifies the murderer.
                  </p>
                  <div className="p-6 bg-[#0d0d0d] border border-[#c9a55a]/30 rounded-lg">
                    <p className="text-[#c9a55a] font-semibold">Exclusive Prize Package Includes:</p>
                    <ul className="text-white/60 text-sm mt-3 space-y-2">
                      <li>✦ Custom art piece by Debbie Wingham</li>
                      <li>✦ Luxury dining experience (€5,000 value)</li>
                      <li>✦ Designer merchandise package</li>
                      <li>✦ VIP social media feature</li>
                    </ul>
                  </div>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TV Coverage & Media */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center lg:grid-flow-dense">
              <FadeIn direction="right" delay={100}>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_10_vintage-set-tv-U1iWs43KZw6V7ToSVgQDVCk2fVH82s.jpg"
                    alt="TV Production"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={200} className="lg:col-start-1">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-white mb-8">
                    The Silver Screen
                  </h2>
                  <p className="text-white/60 text-lg leading-relaxed mb-6">
                    All participants get the chance to be featured on leading global TV platforms and go viral on social media. Our venue includes countless Instagram-worthy backdrops.
                  </p>
                  <p className="text-white/60 text-lg leading-relaxed mb-8">
                    TV coverage is optional, but for those who participate, you&apos;ll be televised in over 150 million homes on Apple TV, Roku, and Amazon.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="text-[#c9a55a] text-2xl">▸</div>
                      <div>
                        <p className="text-white font-semibold">Professional Production</p>
                        <p className="text-white/60 text-sm">Broadcast-quality video and photography</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-[#c9a55a] text-2xl">▸</div>
                      <div>
                        <p className="text-white font-semibold">Global Distribution</p>
                        <p className="text-white/60 text-sm">Reach 150M+ viewers worldwide</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-[#c9a55a] text-2xl">▸</div>
                      <div>
                        <p className="text-white font-semibold">Social Media Amplification</p>
                        <p className="text-white/60 text-sm">Featured on DM Promotions&apos; platforms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-3 gap-8">
              <FadeIn direction="up" delay={100}>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_7_woman%20with%20gun-NRemHLhsC1AaLjCqMB7eRmiZySKrTd.jpg"
                    alt="Professional Styling"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={200}>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_30_0094d0_267036d5941e4b3cac2ef458e1825757~mv2-2uh4mgZqlOFW5ZKxL4KIB2dJOfv0Vc.jpg"
                    alt="Garden Photography"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={300}>
                <div className="flex flex-col justify-center">
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
                    A-List Treatment
                  </h2>
                  <p className="text-white/60 text-lg leading-relaxed mb-6">
                    Our guests are treated to an exclusive experience where they have the opportunity to wear haute couture looks provided by our team of celebrity stylists, as well as receive professional hair and makeup services.
                  </p>
                  <p className="text-white/60 text-lg leading-relaxed mb-8">
                    This unique offering helps our guests get into character while ensuring an elite experience from beginning to end. By providing this level of luxury and attention to detail, we elevate the entire experience and leave a lasting impression.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#c9a55a] rounded-full" />
                      <p className="text-white/80">Professional Hair & Makeup</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#c9a55a] rounded-full" />
                      <p className="text-white/80">Haute Couture Selection</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#c9a55a] rounded-full" />
                      <p className="text-white/80">Personal Styling Consultation</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#c9a55a] rounded-full" />
                      <p className="text-white/80">Luxury Accessory Package</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-24 bg-[#111111]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                Register Your Interest
              </h2>
              <p className="text-white/60 text-lg">
                Complete the form below to inquire about the Murder Mystery Experience
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-[#1a1a1a] p-8 rounded-lg border border-white/10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded focus:border-[#c9a55a] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded focus:border-[#c9a55a] focus:outline-none transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded focus:border-[#c9a55a] focus:outline-none transition-colors"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded focus:border-[#c9a55a] focus:outline-none transition-colors"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded focus:border-[#c9a55a] focus:outline-none transition-colors"
                  placeholder="Tell us about your interest..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
              >
                Submit Interest
              </button>

              <p className="text-white/60 text-xs text-center">
                All applicants must be 18 and over in good health. We will be in touch soon to discuss your participation.
              </p>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0d0d0d] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c9a55a]/10 via-[#c9a55a]/5 to-[#c9a55a]/10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Ready for an Unforgettable Experience?
            </h2>
            <p className="text-white/60 mb-10 text-lg">
              Contact our team to discuss your participation in this exclusive event
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
