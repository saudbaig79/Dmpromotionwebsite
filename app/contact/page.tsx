'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { Mail, Instagram } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export default function ContactPage() {
  const { t } = useI18n()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitStatus, setSubmitStatus] = useState('')

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
        setFormData({ firstName: '', lastName: '', email: '', company: '', message: '' })
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
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold mb-6 text-center text-white">
              {t('contact.title')}
            </h1>
            <p className="text-white/60 text-lg text-center max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <FadeIn direction="left">
              <div className="bg-[#1a1a1a] border border-white/10 rounded p-8 md:p-12">
                <h2 className="text-2xl font-serif font-bold mb-8 text-[#c9a55a]">
                  {t('contact.sendMessage')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-white/70 mb-3">{t('contact.firstName')}</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded text-white placeholder-white/30 focus:border-[#c9a55a] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/70 mb-3">{t('contact.lastName')}</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded text-white placeholder-white/30 focus:border-[#c9a55a] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/70 mb-3">{t('contact.email')}</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded text-white placeholder-white/30 focus:border-[#c9a55a] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/70 mb-3">{t('contact.company')}</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded text-white placeholder-white/30 focus:border-[#c9a55a] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/70 mb-3">{t('contact.message')}</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#0d0d0d] border border-white/10 rounded text-white placeholder-white/30 focus:border-[#c9a55a] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-500/20 border border-green-500/50 rounded text-green-400 text-sm">
                      Message sent successfully! We&apos;ll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/20 border border-red-500/50 rounded text-red-400 text-sm">
                      Error sending message. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#c9a55a] hover:bg-[#d4b76a] text-black font-semibold rounded transition-colors duration-300 uppercase tracking-wider text-sm"
                  >
                    {t('contact.send')}
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn direction="right" delay={200}>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-8 text-[#c9a55a]">
                    {t('contact.getInTouch')}
                  </h2>

                  <div className="space-y-8 mb-12">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-[#c9a55a] mt-1" />
                      <div>
                        <p className="text-white font-medium mb-1">{t('contact.email')}</p>
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
                          {t('about.visitInstagram')}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1a1a1a] border border-white/10 rounded p-8">
                    <h3 className="text-xl font-serif font-bold mb-4">{t('contact.whyChoose')}</h3>
                    <ul className="space-y-3 text-white/60">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#c9a55a] rounded-full" />
                        <span>{t('hero.satisfaction')}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#c9a55a] rounded-full" />
                        <span>{t('hero.commitment')}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#c9a55a] rounded-full" />
                        <span>{t('hero.professional')}</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#c9a55a] rounded-full" />
                        <span>{t('hero.quality')}</span>
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
