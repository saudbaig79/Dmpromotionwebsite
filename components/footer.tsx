import Image from 'next/image'
import Link from 'next/link'
import { Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <Image
              src="/logo.png"
              alt="DM Promotions"
              width={140}
              height={45}
              className="h-10 w-auto object-contain mb-6"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              Your partner for exclusive luxury events. With 25 years experience in media and promotion at the highest level.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#c9a55a] font-semibold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <Link
                  key={link}
                  href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="text-white/50 hover:text-[#c9a55a] transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-[#c9a55a] font-semibold mb-6 text-sm uppercase tracking-wider">Connect</h4>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/50 hover:text-[#c9a55a] transition-colors text-sm"
            >
              <Instagram size={18} />
              <span>Visit our Instagram</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} DM Media Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
