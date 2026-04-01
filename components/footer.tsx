'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export function Footer() {
  const { t } = useI18n()

  const links = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/events', label: t('nav.events') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/contact', label: t('nav.contact') },
  ]

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <Image
              src="/dm-logo.png"
              alt="DM Promotions"
              width={220}
              height={60}
              className="h-12 w-auto object-contain mb-6"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Your partner for exclusive luxury events. 25 years of experience in media and promotion at the highest level.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#c9a55a] font-semibold mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/50 hover:text-[#c9a55a] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-[#c9a55a] font-semibold mb-6 text-sm uppercase tracking-wider">
              Connect
            </h4>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/50 hover:text-[#c9a55a] transition-colors text-sm"
            >
              <Instagram size={18} />
              <span>{t('about.visitInstagram')}</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/30 text-sm">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}
