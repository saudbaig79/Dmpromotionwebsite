'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export default function AboutPage() {
  const { t } = useI18n()

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen">
      <Navigation />

      {/* Hero Section - Bold & Striking */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#c9a55a]/10 via-transparent to-[#0d0d0d]" />
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#c9a55a]/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-[#c9a55a]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left" delay={100}>
              <div>
                <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-xs font-bold mb-8 leading-loose">
                  Premium Event Management & Entertainment
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight text-balance">
                  Where Excellence Meets Experience
                </h1>
                <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed max-w-2xl">
                  Curating unforgettable moments for the world's most discerning clientele. 25 years of innovation, luxury, and uncompromising standards.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link
                    href="/events"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a55a] text-black font-bold hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm rounded group"
                  >
                    Explore Events
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#c9a55a] text-[#c9a55a] hover:bg-[#c9a55a] hover:text-black transition-all duration-300 uppercase tracking-wider text-sm rounded group"
                  >
                    Get In Touch
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={300}>
              <div className="relative h-[500px] lg:h-[600px]">
                <div className="absolute -inset-8 bg-gradient-to-r from-[#c9a55a]/20 to-transparent rounded-2xl blur-2xl" />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Duncan%20CEO-8QCVDEn8SlteD8gZIq8KHZrTVIGjUz.png"
                  alt="Duncan McHugh, CEO"
                  fill
                  className="object-contain relative z-10 rounded-xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#c9a55a]/10 via-transparent to-[#c9a55a]/5 border-y border-[#c9a55a]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <FadeIn delay={100}>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#c9a55a] mb-2">25+</div>
                <p className="text-white/60 uppercase tracking-wider text-sm">Years Experience</p>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#c9a55a] mb-2">500+</div>
                <p className="text-white/60 uppercase tracking-wider text-sm">Events Produced</p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#c9a55a] mb-2">1000+</div>
                <p className="text-white/60 uppercase tracking-wider text-sm">Global Contacts</p>
              </div>
            </FadeIn>
            <FadeIn delay={250}>
              <div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#c9a55a] mb-2">100%</div>
                <p className="text-white/60 uppercase tracking-wider text-sm">Satisfaction Rate</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Duncan - Split Layout */}
      <section className="py-32 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="left" delay={100}>
              <div className="space-y-8">
                <div>
                  <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-xs font-bold mb-4">Our Founder</p>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                    Duncan McHugh
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    CEO of DM Promotions. A visionary entrepreneur who transformed his passion for events and entertainment into a global phenomenon. With roots in Manchester and presence in Marbella, Duncan built an empire spanning music, media, and luxury experiences.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-1 bg-[#c9a55a] rounded-full flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Timeless Records Founder</h3>
                      <p className="text-white/60 text-sm">3-time No. 1 Old Skool Producer with global recognition</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1 bg-[#c9a55a] rounded-full flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Celebrity Collaborator</h3>
                      <p className="text-white/60 text-sm">Worked with Rita Ora, Rihanna, Neil Diamond & more</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1 bg-[#c9a55a] rounded-full flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">Luxury Lifestyle Expert</h3>
                      <p className="text-white/60 text-sm">Superyacht & Sierra Nevada ski chalet owner</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#c9a55a] hover:text-[#d4b76a] transition-colors font-semibold uppercase tracking-wider text-sm pt-4 group"
                >
                  Schedule a Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={300}>
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-[#c9a55a]/30 to-transparent rounded-2xl blur-2xl" />
                <div className="relative bg-[#1a1a1a] border border-[#c9a55a]/30 rounded-2xl p-1 overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Duncan%20CEO-8QCVDEn8SlteD8gZIq8KHZrTVIGjUz.png"
                    alt="Duncan McHugh"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-32 bg-gradient-to-b from-transparent via-[#c9a55a]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-xs font-bold mb-4">What We Deliver</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                Signature Experiences
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Murder Mystery Experience',
                description: 'Immersive theatrical events with Hollywood production value, celebrity hosts, and unforgettable moments.',
                icon: '🎭'
              },
              {
                title: 'The Polo Experience',
                description: 'Championship polo tournaments combined with luxury hospitality, gourmet dining, and elite networking.',
                icon: '🐴'
              },
              {
                title: 'Celebrity Management',
                description: 'Direct access to A-list talent, bespoke appearances, and curated collaborations.',
                icon: '⭐'
              },
              {
                title: 'Luxury Yacht Events',
                description: 'Superyacht experiences on pristine Mediterranean waters with white-glove service.',
                icon: '⛵'
              },
              {
                title: 'Ski Resort Experiences',
                description: 'Exclusive Sierra Nevada retreats with private chalets and gourmet mountain dining.',
                icon: '⛷️'
              },
              {
                title: 'Media & Promotion',
                description: 'Global media placement, celebrity PR, and brand amplification across 1000+ outlets.',
                icon: '📺'
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="group relative bg-[#1a1a1a] border border-white/10 hover:border-[#c9a55a]/50 rounded-xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-[#c9a55a]/10">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-[#c9a55a] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-24 bg-[#111111] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-xs font-bold mb-4">Trusted Partners</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Preferred by the World's Elite
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Rolex, Ferrari, Bentley, and A-list celebrities worldwide choose DM Promotions for their most exclusive events
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {['Rolex', 'Ferrari', 'Bentley', 'Hollywood Elite'].map((brand, i) => (
                <div key={i} className="bg-[#1a1a1a] border border-white/10 rounded-lg py-8 px-4 hover:border-[#c9a55a]/30 transition-colors">
                  <p className="text-white/60 font-semibold uppercase tracking-wider text-sm">{brand}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Diary of a CEO - Enhanced */}
      <section className="py-32 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-16">
              <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-xs font-bold mb-4">The Journey</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Diary of a CEO
              </h2>
              <p className="text-white/60 text-lg">
                From Manchester's rain-soaked streets to the glamorous stages of global success
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="space-y-12 text-white/70 leading-relaxed">
              <div className="bg-[#1a1a1a] border-l-4 border-[#c9a55a] p-8 rounded">
                <h3 className="text-2xl font-serif font-bold text-white mb-4">The Maverick Maestro of Music and Media</h3>
                <p className="mb-4">
                  Born amidst the rain-soaked streets of Manchester, Duncan McHugh emerged as a force to be reckoned with—a symphony of creativity, ambition, and unbridled passion. His journey from the gritty alleys of his hometown to the glitzy stages of global fame reads like a chart-topping hit.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-xl">
                  <h4 className="text-lg font-semibold text-[#c9a55a] mb-3">The Beat Begins</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    In the early 2000s, Duncan cut his teeth in media and advertising. Armed with relentless drive and an uncanny ability to spot trends, he transformed mundane campaigns into captivating narratives.
                  </p>
                </div>
                <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-xl">
                  <h4 className="text-lg font-semibold text-[#c9a55a] mb-3">Timeless Records Founded</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    In 2005, Duncan founded Timeless Records—a label that would redefine the music landscape. With a nod to the past and an eye on the future, he curated a revolutionary roster.
                  </p>
                </div>
                <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-xl">
                  <h4 className="text-lg font-semibold text-[#c9a55a] mb-3">Old Skool Revolution</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Duncan's legendary parties in warehouses, factories, and beaches became the stuff of legend. Three consecutive years as No. 1 Old Skool Producer cemented his legacy.
                  </p>
                </div>
                <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-xl">
                  <h4 className="text-lg font-semibold text-[#c9a55a] mb-3">Global Expansion</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    From collaborating with Rita Ora to working with Rihanna, Duncan's reach expanded across continents. His media empire now spans advertising, promotions, and exclusive events.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#c9a55a]/20 to-transparent border border-[#c9a55a]/30 rounded-xl p-8">
                <p className="text-lg italic text-white mb-4">
                  &quot;Today, Duncan divides his time between a superyacht in Marbella and a ski chalet in Sierra Nevada, running a global media empire while mentoring the next generation of entrepreneurs. His phone never stops ringing. His projects never stop evolving. He remains one of the most motivational and inspiring business minds of the modern era.&quot;
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#c9a55a]/10 to-transparent border-t border-[#c9a55a]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Create Something Extraordinary?
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have experienced DM Promotions' unparalleled event management and entertainment services.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#c9a55a] text-black font-bold hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider rounded text-lg group shadow-lg shadow-[#c9a55a]/30"
            >
              Get In Touch Today
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
