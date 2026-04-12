'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { ExternalLink } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

const mediaLinks = [
  { name: 'Mirror.co.uk', url: 'https://mirror.co.uk' },
  { name: 'Metro.co.uk', url: 'https://metro.co.uk' },
  { name: 'Walesonline', url: 'https://walesonline.co.uk' },
  { name: 'The Star', url: 'https://thestar.co.uk' },
  { name: 'Hollywood Unlocked', url: 'https://hollywoodunlocked.com' },
]

export default function AboutPage() {
  const { t } = useI18n()

  const services = [
    { 
      title: t('services.celebrity'),
      description: t('services.celebrityDesc'),
      image: '/images/celebrity.jpg' 
    },
    { 
      title: t('services.corporate'),
      description: t('services.corporateDesc'),
      image: '/images/corporate.jpg' 
    },
    { 
      title: t('services.brand'),
      description: t('services.brandDesc'),
      image: '/images/brand-launch.jpg' 
    },
    { 
      title: t('services.security'),
      description: t('services.securityDesc'),
      image: '/images/security.jpg' 
    },
  ]

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#0d0d0d]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c9a55a]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#c9a55a]/3 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <FadeIn delay={100}>
            <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm font-medium mb-6">
              {t('about.title')}
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-8 text-balance">
              Our Story
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              25 years of excellence in luxury event management and entertainment promotion
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
                Duncan McHugh: The Maverick Maestro
              </h2>
              <p className="text-white/60 text-lg max-w-3xl mx-auto">
                CEO of DM Promotions with 25 years of experience at the highest level of media and entertainment promotion
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn direction="left" delay={100}>
              <div className="space-y-6">
                <p className="text-white/70 text-lg leading-relaxed">
                  Duncan McHugh, CEO of DM Promotions, leads a team with 25 years of experience in media and promotion at the highest level, dealing with the limelight and front page stories.
                </p>
                <p className="text-white/70 text-lg leading-relaxed">
                  Some of our trusted clients include Rolex, Ferrari and Bentley alongside A-list celebrities such as Neil Diamond, Rhianna and Rita Ora. We respect the importance of confidentiality so privacy and exclusivity are guaranteed with every project.
                </p>
                <p className="text-white/70 text-lg leading-relaxed">
                  As experts in event promotion and artist management, with worldwide contacts in the media, our experience and expertise will make your event excel in every aspect. At DM Promotions, perfection is paramount.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link
                    href="/events"
                    className="inline-block px-8 py-4 bg-[#c9a55a] text-black font-semibold hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm text-center rounded"
                  >
                    Explore Events
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-4 border-2 border-[#c9a55a] text-[#c9a55a] hover:bg-[#c9a55a] hover:text-black transition-all duration-300 uppercase tracking-wider text-sm text-center rounded"
                  >
                    Work With Us
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Duncan%20CEO-8QCVDEn8SlteD8gZIq8KHZrTVIGjUz.png"
                  alt="Duncan McHugh, CEO"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-2xl shadow-[#c9a55a]/20 border border-[#c9a55a]/30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={100}>
              <Link href="/events" className="block group">
                <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded hover:border-[#c9a55a]/50 transition-all duration-500 text-center h-full">
                  <h3 className="text-xl font-serif font-bold mb-4 text-[#c9a55a] group-hover:text-white transition-colors">
                    {t('about.murderMystery')}
                  </h3>
                  <p className="text-white/50 text-sm">Immersive and captivating experience</p>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded hover:border-[#c9a55a]/50 transition-all duration-500 text-center h-full">
                <h3 className="text-xl font-serif font-bold mb-4 text-[#c9a55a]">
                  {t('about.experience')}
                </h3>
                <p className="text-white/50 text-sm">25 years in the industry</p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded hover:border-[#c9a55a]/50 transition-all duration-500 text-center h-full">
                <h3 className="text-xl font-serif font-bold mb-4 text-[#c9a55a]">
                  {t('about.upcomingEvents')}
                </h3>
                <p className="text-white/50 text-sm">Stay tuned for announcements</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm font-medium mb-4">
                {t('about.ourServices')}
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="group relative overflow-hidden rounded bg-[#1a1a1a] border border-white/10 hover:border-[#c9a55a]/50 transition-all duration-500">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-3 text-[#c9a55a] group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Media Links Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm font-medium mb-4">
                {t('about.mediaLinks')}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">
                {t('about.mediaSubtitle')}
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              {mediaLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] border border-white/10 text-white/70 hover:text-[#c9a55a] hover:border-[#c9a55a]/50 transition-all duration-300 rounded text-sm"
                >
                  {link.name}
                  <ExternalLink size={14} />
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="text-center mt-12">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#c9a55a] text-black font-semibold hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm rounded"
              >
                {t('about.visitInstagram')}
                <ExternalLink size={16} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Diary of a CEO Section */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Diary of a CEO
              </h2>
              <p className="text-white/60">
                Duncan McHugh&apos;s Journey from Manchester to Global Success
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="space-y-8 text-white/70 leading-relaxed">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#c9a55a] mb-4">
                  Duncan McHugh: The Maverick Maestro of Music and Media
                </h3>
                <p>
                  Born amidst the rain-soaked streets of Manchester, Duncan McHugh emerged as a force to be reckoned with—a symphony of creativity, ambition, and unbridled passion. His journey from the gritty alleys of his hometown to the glitzy stages of global fame reads like a chart-topping hit.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">The Beat Begins: Rise of a Visionary</h4>
                <p>
                  In the early 2000s, Duncan cut his teeth in the world of media and advertising. Armed with a relentless drive and an uncanny ability to spot trends, he transformed mundane campaigns into captivating narratives. But it was music—the pulsating rhythm of old-skool beats—that truly ignited his soul.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">The Birth of a Label</h4>
                <p>
                  In 2005, Duncan founded Timeless Records, a label that would redefine the music landscape. With a nod to the past and an eye on the future, he curated a roster of artists who breathed life into forgotten classics. Their remixes and originals garnered millions of YouTube hits, transcending borders and generations.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">The Old Skool Revolution</h4>
                <p>
                  Duncan&apos;s love affair with old-school music blossomed into a movement. His legendary parties—held in dimly lit warehouses, abandoned factories, and sun-kissed beaches—became the stuff of legend. The thump of bass, the scratch of vinyl, and the roar of the crowd echoed through festivals and nightclubs worldwide.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Crowned No. 1</h4>
                <p>
                  Awards piled up like vinyl records in Duncan&apos;s collection. Three consecutive years as the No. 1 old-skool producer—an accolade etched in gold. His remixes of timeless tracks breathed new life into anthems that once shook dance floors. From Manchester&apos;s Haçienda to Ibiza&apos;s superclubs, Duncan&apos;s beats were the heartbeat of a generation.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Media Mogul and A-List Alchemist</h4>
                <p>
                  Duncan&apos;s empire expanded beyond music. He wove magic through billboards, TV spots, and digital campaigns. His advertising agency became synonymous with innovation. Celebrities sought his counsel, and paparazzi trailed him at red-carpet events. Duncan, always impeccably dressed, moved seamlessly between boardrooms and VIP soirées.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Global Collaborations</h4>
                <p>
                  When Rita Ora embarked on her world tour, Duncan orchestrated a spectacle that left audiences breathless. The stage shimmered, the lights danced, and Rita&apos;s voice soared. Duncan&apos;s collaboration with the elusive Rhianna—the enigmatic artist who defied genres—was shrouded in secrecy. The album launch, held in a candlelit crypt beneath Barcelona&apos;s Gothic Quarter, felt like a séance. As the first notes played, the walls whispered ancient secrets, and the world held its breath.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">From Manchester to Marbella</h4>
                <p>
                  Despite his jet-setting lifestyle, Duncan&apos;s heart remained rooted in Manchester. He championed local talent, mentoring rappers like Aitch and Bugzy Malone. His villa in Marbella overlooks the Mediterranean, but memories of rainy nights at the Haçienda fueled his fire.
                </p>
              </div>

              <div className="bg-[#1a1a1a] border-l-4 border-[#c9a55a] p-8 mt-12">
                <p className="text-white mb-4">
                  Forward to the present day. Where Duncan spends most of his time between a Superyacht in Marbella and a ski chalet in Sierra Nevada where he runs his media empire consisting of his American-based advertising agency or his Marbella-based promotions company and with plenty of other irons in the fire, the entrepreneur never seems to stay still. His phone is constantly ringing or pinging while he controls numerous projects at once. He is without doubt one of the most motivational and inspiring business minds of the modern era.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
