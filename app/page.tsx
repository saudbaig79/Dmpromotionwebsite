'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Menu, X, Mail, Phone, MapPin } from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2 group cursor-pointer hover:opacity-80 transition-opacity">
              <Image
                src="/logo.png"
                alt="DM Promotions"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-lg font-bold font-serif">DM PROMOTIONS</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Services', 'Events', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 animate-fade-in">
              {['About', 'Services', 'Events', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 hover:bg-card rounded transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo.png"
              alt="DM Promotions"
              width={80}
              height={80}
              className="w-20 h-20 opacity-80"
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 leading-tight text-pretty">
            Your Partner for Exclusive <span className="text-primary">Luxury Events</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 font-light">
            Whether it&apos;s a festival, celebrity appearance, corporate event, brand launches or just a high end VIP event Duncan McHugh CEO and his team can bring your vision to life.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 font-medium"
          >
            Get In Touch
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Us</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With 25 years experience our team are experts in media and promotion at the highest level. A comprehensive solution for a seamless celebration. Our experienced team brings creativity and precision to the table, ensuring your festival is a well-orchestrated spectacle.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a focus on safety, efficiency, and a flair for the extraordinary, we pride ourselves on delivering unforgettable experiences that exceed expectations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {[
                { title: '100% Satisfaction Guarantee', icon: '✓' },
                { title: 'Commitment to Customers', icon: '★' },
                { title: 'Highly Professional Team', icon: '◆' },
                { title: 'Quality Control System', icon: '◈' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-background/50 border border-border rounded hover:border-primary transition-colors hover:bg-background/80 group"
                >
                  <div className="text-3xl text-primary mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-medium text-sm">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Explore some of the services available at DM Promotions, however we cater to every event so if you have something unique in mind get in touch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Festivals',
                description: 'A comprehensive solution for a seamless celebration. Our experienced team brings creativity and precision to the table, ensuring your festival is a well-orchestrated spectacle.',
              },
              {
                title: 'Celebrity Appearances',
                description: 'Elevate your event with an appearance from a well known celebrity guest. Our team have connections with numerous celebrities including Bruno Mars, Rhianna, Katy Perry, Mike Tyson to name a few.',
              },
              {
                title: 'Corporate Events',
                description: 'Our service is tailored to meet your specific needs. We pride ourselves on our attention to detail, ensuring that every element of your event is customised to suit your brand.',
              },
              {
                title: 'Brand Launches',
                description: 'A successful brand launch is all about making a memorable impression. That&apos;s why we&apos;re here to help you create an unforgettable event your guests will remember for years.',
              },
              {
                title: 'Personal Security',
                description: 'A successful event requires careful preparation, and ensuring the safety of everyone involved is key. Our personal security service complete with a driver provides peace of mind.',
              },
              {
                title: 'VIP Services',
                description: 'From exclusive access to premium experiences, we handle every detail of your VIP event with discretion and professionalism.',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group p-8 bg-card/50 border border-border rounded hover:border-primary transition-all hover:bg-card hover:shadow-lg hover:shadow-primary/10 animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Providing a Premium Service for Your Event
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let a member of our team discuss how we can bring your event to the next level
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 font-medium"
          >
            Contact Us Today
          </button>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Events</h2>
            <p className="text-lg text-muted-foreground">Upcoming Events & Media Launches</p>
          </div>

          <div className="bg-card/30 border border-border rounded-lg p-12 text-center animate-slide-up">
            <div className="mb-6 flex justify-center">
              <Image
                src="/logo.png"
                alt="DM Promotions"
                width={60}
                height={60}
                className="w-16 h-16 opacity-60"
              />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Don&apos;t Hesitate to Use Our Services</h3>
            <p className="text-muted-foreground text-lg">
              Your Event Will Be Special. Discover our latest showcase of recent events and media launches that showcase our expertise in luxury event management.
            </p>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-24 bg-card/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Showcase</h2>
            <p className="text-lg text-muted-foreground">Recent Events</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center animate-slide-up">
            <div>
              <h3 className="text-3xl font-serif font-bold mb-4">Diary of a CEO</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Duncan McHugh CEO of DM Promotions has a team around him with 25 years experience in media and promotion at the highest level, dealing with the limelight and front page stories.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Some of our trusted clients include Rolex, Ferrari and Bentley alongside A list celebrities such as Neil Diamond, Rhianna and Rita Ora.
              </p>
              <button className="mt-8 px-6 py-3 border border-primary text-primary hover:bg-primary/10 transition-all rounded">
                Learn More
              </button>
            </div>
            <div className="h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center border border-primary/20">
              <Image
                src="/logo.png"
                alt="DM Promotions"
                width={120}
                height={120}
                className="w-32 h-32 opacity-40"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Blog</h2>
            <p className="text-lg text-muted-foreground">Latest Reviews</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Ski Review',
                description: 'At DM Promotions, we are always on the lookout for the best destinations for our elite clientele. That&apos;s why we were thrilled to visit...',
              },
              {
                title: 'A CEO\'s Review',
                description: 'As a ski expert, I have visited resorts all around the world, but none of them impressed me as much as Sierra Nevada passion and rapidly...',
              },
            ].map((article, i) => (
              <div
                key={i}
                className="group p-8 bg-card/50 border border-border rounded hover:border-primary transition-all hover:bg-card animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{article.description}</p>
                <button className="text-primary font-medium hover:opacity-80 transition-opacity">
                  Read More →
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-12 text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">Exclusive Sierra Nevada Sponsorship Packages</h3>
            <p className="text-muted-foreground mb-6">VIP Igloos Now Available</p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-card/30 relative overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Don&apos;t hesitate to reach out. Our team is here to help bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-serif font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: 'Phone', value: 'Available upon request' },
                  { icon: Mail, label: 'Email', value: 'info@dmmediagroup.co' },
                  { icon: MapPin, label: 'Location', value: 'Global events management' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex gap-4">
                      <Icon className="text-primary flex-shrink-0" size={24} />
                      <div>
                        <p className="font-medium text-primary">{item.label}</p>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <form className="animate-slide-up space-y-4" style={{ animationDelay: '0.1s' }}>
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-background border border-border rounded focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-background border border-border rounded focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-border rounded focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>
              <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-all font-medium">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="DM Promotions"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <p className="font-serif font-bold">DM Promotions</p>
                <p className="text-sm text-muted-foreground">Luxury Events & Media</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © 2026 DM Media Group. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground border-t border-border pt-8">
            {['Privacy Policy', 'Terms of Service', 'Contact', 'Social Media'].map((link) => (
              <button key={link} className="hover:text-primary transition-colors">
                {link}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
