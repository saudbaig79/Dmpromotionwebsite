'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { Mail, Phone, Trophy, Users, Utensils, Waves } from 'lucide-react'
import { useState } from 'react'

export default function PoloExperiencePage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  })
  const [activeGallery, setActiveGallery] = useState('all')
  const [submitStatus, setSubmitStatus] = useState('')

  const poloImages = [
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_58_373637_248d11bb7dd342e18f9e090a742fb2cb~mv2-AiGMt6jTNrsg1ei5UUE0rf5bfNI7HE.jpg',
      category: 'match',
      title: 'Elite Player Action'
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_26_373637_a5d107b0a0a84e91b72fd4dfe13e9f26~mv2-mSGvbzR1j0tBLA1DNLkVdazC3RWSpU.jpg',
      category: 'match',
      title: 'Team Championship'
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_30_373637_a6d4736349354cbc85c9ea9b1a3f4b08~mv2-vmSGuZtziESi4L177T3Dd9m8gXHW3A.jpg',
      category: 'spectators',
      title: 'Spectator Experience'
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_31_373637_ccf8ddb845e5435aa55112292cda8d0f~mv2-z4JnFPnyBDhAVWM3HKllv1vunmMIzm.jpg',
      category: 'awards',
      title: 'Trophy Presentation'
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_11_373637_b5f3fa65265d4b408be1a2d1602dd80b~mv2-mIX9MK7kBvfosiQl49e8xE4iyMyxvc.jpg',
      category: 'spectators',
      title: 'VIP Viewing Area'
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_25_373637_baeab64bad504377bcd36b300534443e~mv2-sf5eZXJud517OP9W6cPfAzHuzfTcbj.jpg',
      category: 'match',
      title: 'Competitive Play'
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_40_373637_b5f3fa65265d4b408be1a2d1602dd80b~mv2-myTFQNOm44OaJupymCyGqi0t4xVN0P.jpg',
      category: 'spectators',
      title: 'Sideline Atmosphere'
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_24_373637_660e71c8dc50410aacbb675db66dcac1~mv2-eTimR2nKbZXvPPKzmqfoBEGvu12zmM.jpg',
      category: 'match',
      title: 'Five Players Action'
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_3_373637_a04aebe17b9d46ae8425da72e126a5dc~mv2-doGOzmh5OLLexjmpghJiZ1fjrPU4JG.jpg',
      category: 'match',
      title: 'Match Intensity'
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_4_Terrazas-n8TeOni6iZBCxPrayMESjpx9iOabTZ.jpg',
      category: 'hospitality',
      title: 'Luxury Terrace'
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_57_373637_8ba320965f334491a95f84c46887658f~mv2-NZnITYDlOWGImyJkSK3utfIlFLpiHT.jpg',
      category: 'hospitality',
      title: 'Fine Dining'
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_10_373637_c43325cd32874a43a6a6b9a71dfc7b1f~mv2-FYZFw4DRZ9B8qnH4yK20sb8XvN342Y.jpg',
      category: 'spectators',
      title: 'Crowded Grandstand'
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_12_373637_5022c791dcfd4770af6d7b3f6627cbac~mv2-TXx4nREVcEGl0z90FDZxq9D5yQOoOD.jpg',
      category: 'match',
      title: 'Solo Player Shot'
    },
    {
      url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_5_Q80_3169-2E4ai8bkdY2hwxNzmIYCG9EV44P3MI.jpg',
      category: 'match',
      title: 'White Horse Action'
    },
  ]

  const filteredImages = activeGallery === 'all' 
    ? poloImages 
    : poloImages.filter(img => img.category === activeGallery)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          to: 'dmpromotions@europe.com'
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', company: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus(''), 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }
  }

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_58_373637_248d11bb7dd342e18f9e090a742fb2cb~mv2-AiGMt6jTNrsg1ei5UUE0rf5bfNI7HE.jpg"
            alt="Polo Experience"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#0d0d0d]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <FadeIn delay={100}>
            <p className="text-emerald-400 uppercase tracking-[0.3em] text-sm font-medium mb-6">
              Elite Experience
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 text-balance">
              The Ultimate Polo Experience
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <h2 className="text-xl sm:text-2xl text-emerald-300 font-serif mb-6">
              With Spain&apos;s Top Polo Players & Iconic Clubs
            </h2>
          </FadeIn>

          <FadeIn delay={400}>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
              Advertising And Sponsorship Opportunities Available
            </p>
          </FadeIn>

          <FadeIn delay={500}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 inline-block">
                Get Involved
              </a>
              <a href="#gallery" className="px-8 py-3 border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 font-semibold rounded-lg transition-all duration-300 inline-block">
                View Experience
              </a>
            </div>
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
                Why Partner With Us
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                The premier sponsorship opportunity in elite polo
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Trophy,
                title: 'Championship Caliber',
                description: 'Spain\'s finest polo clubs and top-ranked international players'
              },
              {
                icon: Users,
                title: 'Elite Audience',
                description: 'Global high-net-worth individuals, celebrities, and dignitaries'
              },
              {
                icon: Utensils,
                title: 'Luxury Hospitality',
                description: 'Michelin-star dining, premium beverages, and world-class service'
              },
              {
                icon: Waves,
                title: 'Yacht Transfers',
                description: 'Exclusive Malex Superyacht arrivals and sea-to-shore luxury'
              },
              {
                icon: Mail,
                title: 'Brand Visibility',
                description: 'Maximum exposure through media, streaming, and global networks'
              },
              {
                icon: Phone,
                title: 'VIP Packages',
                description: 'Custom sponsorship tiers with hospitality and networking opportunities'
              },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <FadeIn key={i} delay={i * 100} direction="up">
                  <div className="p-8 bg-[#1a1a1a] border border-emerald-500/20 rounded-lg hover:border-emerald-500/50 transition-all duration-500">
                    <Icon className="text-emerald-400 mb-4" size={32} />
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
      <section id="gallery" className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                Gallery
              </h2>
              <p className="text-white/60 mb-8">
                Explore the elegance and excitement of polo
              </p>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-3">
                {['all', 'match', 'spectators', 'hospitality', 'awards'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveGallery(cat)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${
                      activeGallery === cat
                        ? 'bg-emerald-500 text-white'
                        : 'bg-white/10 text-white/60 hover:bg-white/20'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, i) => (
              <FadeIn key={i} delay={i * 50} direction="up">
                <div className="group relative overflow-hidden rounded-lg border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-500">
                  <Image
                    src={image.url}
                    alt={image.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold">{image.title}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Section */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cooking-I0lqCX9XOgHG37CXITL62Y8IVjiaU0.png"
                alt="Culinary Delights"
                width={500}
                height={400}
                className="w-full rounded-lg border border-emerald-500/30"
              />
            </FadeIn>

            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
                  Culinary Delights
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  After an exhilarating day at the polo grounds, indulge in culinary experiences crafted for royalty. From elegant fine dining to intimate garden soirées, each bite and sip is a tribute to Spain&apos;s rich gastronomic heritage and DM Promotions&apos; commitment to excellence.
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Contact us today to book your own Michelin Star–quality private chef experience, featuring the favourite chefs of the Saudi royal family and global A-listers. Whether you&apos;re dining at the racecourse or aboard the majestic Malex Superyacht in port, our team can curate a personalized menu just for you.
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  We also offer award-winning mixologists to craft bespoke beverages tailored to your tastes.
                </p>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Connect With Our Chefs:</p>
                  <a href="mailto:info@cookingforyousotogrande.com" className="text-white hover:text-emerald-400 transition-colors">
                    info@cookingforyousotogrande.com
                  </a>
                  <p className="text-white/60 text-sm mt-2">Mention DM Promotions to ensure availability</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Yacht Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left" order={2}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yacht-mdCiAPuT7fWFFFJIqoHPTetazkZchn.png"
                alt="Malex Superyacht"
                width={500}
                height={400}
                className="w-full rounded-lg border border-emerald-500/30"
              />
            </FadeIn>

            <FadeIn direction="right" order={1}>
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
                  Arrive in Style
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Make an unforgettable entrance aboard the Malex Superyacht, offering exclusive pick-up and drop-off services from Sotogrande Port. Whether you&apos;re arriving for a day of exhilarating polo or an evening of luxury dining, the Malex ensures your journey begins in pure opulence.
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Relax on deck with fine champagne, enjoy sea-to-shore luxury transfers, and step onto the polo grounds in true VIP fashion.
                </p>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">For Private Yacht Transfers:</p>
                  <a href="mailto:dmpromotions@europe.com" className="text-white hover:text-emerald-400 transition-colors block mb-2">
                    dmpromotions@europe.com
                  </a>
                  <a href="mailto:info@dmmediagroup.co" className="text-white hover:text-emerald-400 transition-colors">
                    info@dmmediagroup.co
                  </a>
                  <p className="text-white/60 text-sm mt-2">Bespoke bookings and onboard experiences available</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                Sponsorship Opportunities
              </h2>
              <p className="text-white/60">
                Join us in creating unforgettable moments. Contact us today.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-emerald-500/50 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-semibold mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-emerald-500/50 transition-all duration-300"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-emerald-500/50 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-emerald-500/50 transition-all duration-300 resize-none"
                  placeholder="Tell us about your sponsorship interests..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-500/20 border border-emerald-500/50 rounded-lg text-emerald-400">
                  Thank you! We&apos;ll be in touch soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Get in Touch
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-white/10 grid sm:grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-white/60 text-sm mb-2">Primary Contact</p>
                <a href="mailto:dmpromotions@europe.com" className="text-emerald-400 hover:text-emerald-300 font-semibold">
                  dmpromotions@europe.com
                </a>
              </div>
              <div>
                <p className="text-white/60 text-sm mb-2">Alternative Contact</p>
                <a href="mailto:info@dmmediagroup.co" className="text-emerald-400 hover:text-emerald-300 font-semibold">
                  info@dmmediagroup.co
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
