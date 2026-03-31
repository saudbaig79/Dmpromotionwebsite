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

  const sections = [
    {
      title: 'The Plot Thickens',
      description: 'Our dining experience adds to the whole murder mystery, embodying contemporary theatrical gastronomy prepared by award-winning chefs. Each course is crafted to enhance the narrative and create unforgettable culinary moments.',
      image: '/images/showcase.jpg',
      imagePosition: 'right',
    },
    {
      title: 'Friend, Confidant or Arch Enemy?',
      description: 'Cameo appearances from personalities from the Music, TV and Social Media Industries. These A-list appearances create intrigue and add authenticity to the mystery experience.',
      image: '/images/showcase.jpg',
      imagePosition: 'left',
    },
    {
      title: 'Cinema Quality Production',
      description: 'Every element of the narrative is engaging. Our sets are designed by Hollywood\'s finest. Our scripts are created with intelligence, humor and clever dialogue that keeps participants guessing and engages them emotionally.',
      image: '/images/showcase.jpg',
      imagePosition: 'right',
    },
    {
      title: 'Great for Team Building',
      description: 'Ideal for corporate events, networking opportunities, and creating lasting connections among participants while solving the mystery together.',
      image: '/images/showcase.jpg',
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
            src="/images/showcase.jpg"
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
              href="#register"
              className="inline-block px-10 py-4 bg-[#c9a55a] text-black font-semibold rounded hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Learn More
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

      {/* Experience Sections */}
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

      {/* Location & Details */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-8">
                  The Location
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  Our murder mystery experiences take place in Spain in a location easy to reach from Malaga airport but remote enough to elevate the murder mystery with all the characteristics of a macabre yet beautiful mansion.
                </p>
                <p className="text-white/60 text-lg leading-relaxed">
                  Where select guests can stay over and have the full homicidal experience in an environment which offers so many murderous settings.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-8">
                  Meet the Host
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  World renowned artist Debbie Wingham, recognized globally for her unique diamond creations, will be the host of our murder mystery experience.
                </p>
                <p className="text-white/60 text-lg leading-relaxed">
                  A social media influencer with over 3 million followers, Debbie brings a combination of set design, theatrical gastronomy and hidden luxurious clues including an array of haute couture murder weapons.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Props & Rewards */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-8">
                  The Props
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  Custom props will add to the experience making it more memorable. Each set and scenario will be reminiscent of a homicidal Hollywood silver screen moment.
                </p>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  The promise of a valuable art piece worth over €20,000 created by Debbie Wingham herself will be the reward for the ultimate detective that solves the case of who infact is the murderer.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-8">
                  The Silver Screen
                </h2>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  All participants will get the chance to be featured on leading global TV platforms and the chance to go viral on social media. Our venue includes countless social media backdrops which make killer photo opportunities.
                </p>
                <p className="text-white/60 text-lg leading-relaxed">
                  TV coverage is not mandatory but for those who opt in, you will be televised in over 150 million homes throughout the world on Apple TV, Roku, and Amazon.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* A-List Treatment */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-8 text-center">
              A-List Treatment
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8 text-center">
              Our guests are treated to an exclusive experience where they have the opportunity to wear haute couture looks provided by our team of celebrity stylists, as well as receive professional hair and makeup services.
            </p>
            <p className="text-white/60 text-lg leading-relaxed text-center">
              This unique offering not only helps our guests get into character for the murder mystery event, but also ensures an elite experience from beginning to end. By providing this level of luxury and attention to detail, we aim to elevate the entire experience and leave a lasting impression on our guests, making their participation in the event truly unforgettable.
            </p>
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
