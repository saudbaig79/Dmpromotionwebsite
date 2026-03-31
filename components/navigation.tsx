'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useI18n } from '@/lib/i18n'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useI18n()

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/whats-on', label: "What's On" },
    { href: '/events', label: t('nav.events') },
    { href: '/sponsorship', label: 'Sponsorship' },
    { href: '/behind-the-scenes', label: 'Behind the Scenes' },
    { href: '/blog', label: t('nav.blog') },
    { href: '/contact', label: t('nav.contact') },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed w-full top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#0d0d0d]/95 backdrop-blur-md py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - just the image, properly sized with object-contain */}
          <Link href="/" className="relative group flex-shrink-0">
            <Image
              src="/dm-logo.png"
              alt="DM Promotions"
              width={220}
              height={60}
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-[#c9a55a] transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 ml-4 border-l border-white/20 pl-6">
              <Globe size={16} className="text-[#c9a55a]" />
              <button
                onClick={() => setLanguage('en')}
                className={cn(
                  'text-sm font-medium transition-colors duration-300',
                  language === 'en' ? 'text-[#c9a55a]' : 'text-white/60 hover:text-white'
                )}
              >
                EN
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => setLanguage('es')}
                className={cn(
                  'text-sm font-medium transition-colors duration-300',
                  language === 'es' ? 'text-[#c9a55a]' : 'text-white/60 hover:text-white'
                )}
              >
                ES
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-[#c9a55a] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-500 ease-in-out',
            mobileMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          )}
        >
          <div className="flex flex-col gap-1 bg-[#1a1a1a]/95 backdrop-blur-md rounded-xl p-4 border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-white/80 hover:text-[#c9a55a] hover:bg-white/5 rounded-lg transition-all duration-300 text-sm uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-3 px-4 py-3 mt-2 border-t border-white/10">
              <Globe size={16} className="text-[#c9a55a]" />
              <button
                onClick={() => setLanguage('en')}
                className={cn(
                  'text-sm font-medium transition-colors duration-300',
                  language === 'en' ? 'text-[#c9a55a]' : 'text-white/60'
                )}
              >
                English
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => setLanguage('es')}
                className={cn(
                  'text-sm font-medium transition-colors duration-300',
                  language === 'es' ? 'text-[#c9a55a]' : 'text-white/60'
                )}
              >
                Español
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
