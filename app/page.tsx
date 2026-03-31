import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { ChevronDown, CheckCircle, Users, Award, Shield } from 'lucide-react'

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

const features = [
  { icon: CheckCircle, title: '100% Satisfaction Guarantee' },
  { icon: Users, title: 'Commitment to Customers' },
  { icon: Award, title: 'Highly Professional Team' },
  { icon: Shield, title: 'Quality Control System' },
]

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] text-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Luxury Event"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0d0d0d]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
          <FadeIn delay={200}>
            <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm mb-6 font-medium">
              About Us
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight text-balance">
              Your partner for exclusive{' '}
              <span className="text-gold-gradient">luxury events</span>
            </h1>
          </FadeIn>

          <FadeIn delay={600}>
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
              Whether its a festival, celebrity appearance, corporate event, brand launches or just a high end VIP event Duncan McHugh CEO and his team can bring your vision to life. With 25 years experience our team are experts in media and promotion at the highest level
            </p>
          </FadeIn>

          <FadeIn delay={800}>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#c9a55a] text-[#0d0d0d] font-semibold rounded-sm hover:bg-[#d4b76a] transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a55a]/20 uppercase tracking-wider text-sm"
            >
              Get In Touch
            </Link>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-[#c9a55a]" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon
              return (
                <FadeIn key={i} delay={i * 100}>
                  <div className="p-6 bg-[#1a1a1a] border border-white/10 rounded-sm hover:border-[#c9a55a]/50 transition-all duration-500 group text-center">
                    <Icon className="w-8 h-8 text-[#c9a55a] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-sm text-white/70 group-hover:text-white transition-colors">
                      {feature.title}
                    </p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div>
                <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-sm mb-4">About Us</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  A comprehensive solution for a seamless celebration
                </h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  Our experienced team brings creativity and precision to the table, ensuring your festival is a well-orchestrated spectacle. With a focus on safety, efficiency, and a flair for the extraordinary,
                </p>
                <Link
                  href="/about"
                  className="inline-block px-8 py-3 border border-[#c9a55a] text-[#c9a55a] hover:bg-[#c9a55a] hover:text-[#0d0d0d] transition-all duration-300 uppercase tracking-wider text-sm"
                >
                  Learn More
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="relative h-[500px] rounded-sm overflow-hidden">
                <Image
                  src="/images/showcase.jpg"
                  alt="About DM Promotions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
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
              <p className="text-[#c9a55a] uppercase tracking-[0.2em] text-sm mb-4">Our Services</p>
              <p className="text-white/60 max-w-2xl mx-auto">
                Explore some of the services available at DM Promotions, however we cater to every event so if you have something unique in mind get in touch.
              </p>
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] relative overflow-hidden">
        <div className="absolute inset-0 shimmer" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Providing a premium service for your event
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Let a member of our team discuss how we can bring your event to the next level
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#c9a55a] text-[#0d0d0d] font-semibold rounded-sm hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Contact Us
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm mb-4">Our Events</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Upcoming Events & Media Launches
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-[#1a1a1a] border border-white/10 rounded-sm p-12 md:p-16 text-center">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                {"Don't Hesitate to Use Our Services. Your Event Will Be Special."}
              </h3>
              <p className="text-white/50 mb-8">
                Let a member of our team discuss how we can bring your event to the next level
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 border border-[#c9a55a] text-[#c9a55a] hover:bg-[#c9a55a] hover:text-[#0d0d0d] transition-all duration-300 uppercase tracking-wider text-sm"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm mb-4">Showcase</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Recent Events</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="relative h-[400px] rounded-sm overflow-hidden">
                <Image
                  src="/images/showcase.jpg"
                  alt="Diary of a CEO"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div>
                <p className="text-[#c9a55a] text-sm uppercase tracking-wider mb-2">Diary of a CEO</p>
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                  Duncan McHugh: The Maverick Maestro of Music and Media
                </h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  Duncan McHugh CEO of DM Promotions has a team around him with 25 years experience in media and promotion at the highest level, dealing with the limelight and front page stories. Some of our trusted clients include Rolex, Ferrari and Bentley alongside A list celebrities such as Neil Diamond, Rhianna and Rita Ora.
                </p>
                <Link
                  href="/about"
                  className="inline-block px-8 py-3 border border-[#c9a55a] text-[#c9a55a] hover:bg-[#c9a55a] hover:text-[#0d0d0d] transition-all duration-300 uppercase tracking-wider text-sm"
                >
                  Learn More
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#c9a55a] uppercase tracking-[0.3em] text-sm mb-4">Our Blog</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">Latest Reviews</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <FadeIn delay={100}>
              <div className="group bg-[#1a1a1a] border border-white/5 rounded-sm overflow-hidden hover:border-[#c9a55a]/30 transition-all duration-500">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/images/ski.jpg"
                    alt="Ski Review"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-3 text-[#c9a55a]">Ski Review</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    At DM Promotions, we are always on the lookout for the best destinations for our elite clientele. {"That's"} why we were thrilled to visit...
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="group bg-[#1a1a1a] border border-white/5 rounded-sm overflow-hidden hover:border-[#c9a55a]/30 transition-all duration-500">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/images/showcase.jpg"
                    alt="A CEO's Review"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-3 text-[#c9a55a]">{"A CEO's Review"}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    As a ski expert, I have visited resorts all around the world, but none of them impressed me as much as Sierra Nevada passion and rapidly...
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Sierra Nevada CTA */}
          <FadeIn delay={300}>
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src="/images/ski.jpg"
                alt="Sierra Nevada"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/95 to-[#0d0d0d]/70" />
              <div className="relative z-10 p-12 md:p-16 text-center">
                <h3 className="text-2xl md:text-4xl font-serif font-bold mb-3">
                  Exclusive Sierra Nevada Sponsorship Packages
                </h3>
                <p className="text-[#c9a55a] text-lg mb-8">VIP Igloos Now Available</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-3 bg-[#c9a55a] text-[#0d0d0d] font-semibold hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/about"
                    className="inline-block px-8 py-3 border border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300 uppercase tracking-wider text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
