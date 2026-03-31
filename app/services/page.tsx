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
    features: ['Stage Production', 'Artist Management', 'Crowd Safety', 'VIP Areas'],
  },
  {
    title: 'Celebrity Appearances',
    description: 'Elevate your event with an appearance from a well known celebrity guest. Our team have connections with numerous celebrities including Bruno Mars, Rhianna, Katy Perry, Mike Tyson to name a few. For a full list of celebrities available enquire today.',
    image: '/images/celebrity.jpg',
    features: ['A-List Connections', 'Contract Negotiation', 'Travel Arrangements', 'Security Detail'],
  },
  {
    title: 'Corporate Events',
    description: 'Our service is tailored to meet your specific needs. We pride ourselves on our attention to detail, ensuring that every element of your event is customised to suit your brand and company values. We guarantee that your attendees will have an unforgettable experience that will leave a lasting impression.',
    image: '/images/corporate.jpg',
    features: ['Brand Alignment', 'Guest Management', 'Venue Selection', 'Catering'],
  },
  {
    title: 'Brand Launches',
    description: "A successful brand launch is all about making a memorable impression. That's why we're here to help you create an unforgettable event that your guests and customers will remember for years to come. Our team is committed to helping your brand make a big impact.",
    image: '/images/brand-launch.jpg',
    features: ['Media Coverage', 'Influencer Outreach', 'Product Reveal', 'Press Relations'],
  },
  {
    title: 'Personal Security',
    description: 'A successful event requires careful preparation, and ensuring the safety of everyone involved is key. Our personal security service complete with a driver provides you with peace of mind, knowing that a discreet and experienced team is watching over the event. You can trust us to prioritise your safety above all else.',
    image: '/images/security.jpg',
    features: ['Close Protection', 'Driver Service', 'Venue Security', 'Risk Assessment'],
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-[#0d0d0d] text-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-center">
              Our Services
            </h1>
            <p className="text-white/60 text-lg text-center max-w-2xl mx-auto">
              Explore some of the services available at DM Promotions, however we cater to every event so if you have something unique in mind get in touch.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, i) => (
              <FadeIn key={i} delay={100}>
                <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="relative h-[400px] rounded-sm overflow-hidden group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-transparent to-transparent" />
                    </div>
                  </div>

                  <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#c9a55a]">
                      {service.title}
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#c9a55a] rounded-full" />
                          <span className="text-white/70 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="inline-block px-8 py-3 border border-[#c9a55a] text-[#c9a55a] hover:bg-[#c9a55a] hover:text-[#0d0d0d] transition-all duration-300 uppercase tracking-wider text-sm"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 shimmer" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
              Have Something Unique in Mind?
            </h2>
            <p className="text-white/60 text-lg mb-10">
              We cater to every event. Get in touch to discuss your bespoke requirements.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-[#c9a55a] text-[#0d0d0d] font-semibold rounded-sm hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Contact Us Today
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
