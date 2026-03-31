'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { Mail, Instagram } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <main className="bg-[#0d0d0d] text-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-center">
              Get in Touch Today
            </h1>
            <p className="text-white/60 text-lg text-center max-w-2xl mx-auto">
              {"Let's"} discuss how we can bring your vision to life. Our team is ready to create an unforgettable experience for you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <FadeIn direction="left">
              <div className="bg-[#1a1a1a] border border-white/10 rounded-sm p-8 md:p-12">
                <h2 className="text-2xl font-serif font-bold mb-8 text-[#c9a55a]">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-white/70 mb-2">First name</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded-sm text-white placeholder-white/30 focus:border-[#c9a55a] focus:outline-none transition-colors"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/70 mb-2">Last name</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded-sm text-white placeholder-white/30 focus:border-[#c9a55a] focus:outline-none transition-colors"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/70 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded-sm text-white placeholder-white/30 focus:border-[#c9a55a] focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/70 mb-2">Company name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded-sm text-white placeholder-white/30 focus:border-[#c9a55a] focus:outline-none transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/70 mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded-sm text-white placeholder-white/30 focus:border-[#c9a55a] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your event..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#c9a55a] text-[#0d0d0d] font-semibold hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn direction="right" delay={200}>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-8 text-[#c9a55a]">
                    Contact Information
                  </h2>

                  <div className="space-y-8 mb-12">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-[#c9a55a] mt-1" />
                      <div>
                        <p className="text-white font-medium mb-1">Email</p>
                        <p className="text-white/60">info@dmmediagroup.co</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Instagram className="w-6 h-6 text-[#c9a55a] mt-1" />
                      <div>
                        <p className="text-white font-medium mb-1">Social Media</p>
                        <a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-[#c9a55a] transition-colors"
                        >
                          Follow us on Instagram
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1a1a1a] border border-white/10 rounded-sm p-8">
                    <h3 className="text-xl font-serif font-bold mb-4">Why Work With Us?</h3>
                    <ul className="space-y-3 text-white/60">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#c9a55a] rounded-full" />
                        <span>25 years of industry experience</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#c9a55a] rounded-full" />
                        <span>A-list celebrity connections</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#c9a55a] rounded-full" />
                        <span>Global media contacts</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#c9a55a] rounded-full" />
                        <span>Complete confidentiality guaranteed</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Logo */}
                <div className="mt-12 flex justify-center">
                  <Image
                    src="/logo.png"
                    alt="DM Promotions"
                    width={200}
                    height={65}
                    className="h-16 w-auto object-contain opacity-60"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
