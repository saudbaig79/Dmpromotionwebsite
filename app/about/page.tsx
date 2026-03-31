import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'

const services = [
  {
    title: 'Festivals',
    description: 'A comprehensive solution for a seamless celebration. Our experienced team brings creativity and precision to the table, ensuring your festival is a well-orchestrated spectacle. With a focus on safety, efficiency, and a flair for the extraordinary,',
    image: '/images/festival.jpg',
  },
  {
    title: 'Celebrity Appearances',
    description: 'Elevate your event with an appearance from a well known celebrity guest. Our team have connections with numerous celebrities including Bruno Mars, Rhianna, Katy Perry, Mike Tyson to name a few. For a full list of celebrities available enquire today.',
    image: '/images/celebrity.jpg',
  },
  {
    title: 'Corporate Events',
    description: 'Our service is tailored to meet your specific needs. We pride ourselves on our attention to detail, ensuring that every element of your event is customised to suit your brand and company values. We guarantee that your attendees will have an unforgettable experience that will leave a lasting impression.',
    image: '/images/corporate.jpg',
  },
  {
    title: 'Brand Launches',
    description: "A successful brand launch is all about making a memorable impression. That's why we're here to help you create an unforgettable event that your guests and customers will remember for years to come. Our team is committed to helping your brand make a big impact.",
    image: '/images/brand-launch.jpg',
  },
  {
    title: 'Personal Security',
    description: 'A successful event requires careful preparation, and ensuring the safety of everyone involved is key. Our personal security service complete with a driver provides you with peace of mind, knowing that a discreet and experienced team is watching over the event. You can trust us to prioritise your safety above all else.',
    image: '/images/security.jpg',
  },
]

const mediaLinks = [
  { name: 'Mirror.co.uk', url: '#' },
  { name: 'Metro.co.uk', url: '#' },
  { name: 'Walesonline', url: '#' },
  { name: 'The Star', url: '#' },
  { name: 'Hollywood Unlocked', url: '#' },
]

export default function AboutPage() {
  return (
    <main className="bg-[#0d0d0d] text-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-center">
              About
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-sm mb-4">Our Story</p>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Duncan McHugh CEO of DM Promotions has a team around him with 25 years experience in media and promotion at the highest level, dealing with the limelight and front page stories. Some of our trusted clients include Rolex, Ferrari and Bentley alongside A list celebrities such as Rhianna and Rita Ora.
                </p>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  We respect the importance of confidentiality so privacy and exclusivity are guaranteed with every project. We are experts in event promotion and artist management, with worldwide contacts in the media our experience and expertise will make your event excel in every aspect.
                </p>
                <p className="text-[#c9a55a] text-xl font-serif italic mb-8">
                  At DM Promotions, perfection is paramount.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-3 bg-[#c9a55a] text-[#0d0d0d] font-semibold hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm text-center"
                  >
                    More on Duncan
                  </Link>
                  <Link
                    href="/services"
                    className="inline-block px-8 py-3 border border-[#c9a55a] text-[#c9a55a] hover:bg-[#c9a55a] hover:text-[#0d0d0d] transition-all duration-300 uppercase tracking-wider text-sm text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="relative h-[500px] rounded-sm overflow-hidden">
                <Image
                  src="/images/showcase.jpg"
                  alt="Duncan McHugh"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={100}>
              <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-sm hover:border-[#c9a55a]/50 transition-all duration-500 text-center group">
                <h3 className="text-xl font-serif font-bold mb-4 text-[#c9a55a]">Murder Mystery</h3>
                <p className="text-white/50 text-sm">Exclusive entertainment experiences</p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-sm hover:border-[#c9a55a]/50 transition-all duration-500 text-center group">
                <h3 className="text-xl font-serif font-bold mb-4 text-[#c9a55a]">Experience</h3>
                <p className="text-white/50 text-sm">25 years in the industry</p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-[#1a1a1a] border border-white/10 p-8 rounded-sm hover:border-[#c9a55a]/50 transition-all duration-500 text-center group">
                <h3 className="text-xl font-serif font-bold mb-4 text-[#c9a55a]">Upcoming Events</h3>
                <p className="text-white/50 text-sm">Stay tuned for announcements</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm mb-4">Our Services</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-sm bg-[#1a1a1a] border border-white/5 hover:border-[#c9a55a]/30 transition-all duration-500">
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
                    <h3 className="text-xl font-serif font-bold mb-3 text-[#c9a55a]">
                      {service.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed line-clamp-4">
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
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm mb-4">Media Links</p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold">
                Check out what the media has to say about our latest event
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              {mediaLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="px-6 py-3 bg-[#1a1a1a] border border-white/10 text-white/70 hover:text-[#c9a55a] hover:border-[#c9a55a]/50 transition-all duration-300 rounded-sm text-sm"
                >
                  {link.name}
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
                className="inline-block px-8 py-3 bg-[#c9a55a] text-[#0d0d0d] font-semibold hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
              >
                Visit our Instagram
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
