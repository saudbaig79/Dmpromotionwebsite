'use client'

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FadeIn } from '@/components/fade-in'
import { ArrowLeft } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export default function PolicyPage() {
  const { t } = useI18n()

  return (
    <main className="bg-[#0d0d0d] text-white min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link href="/" className="inline-flex items-center gap-2 text-[#c9a55a] hover:text-white transition-colors mb-8">
              <ArrowLeft size={20} />
              Back
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white">
              Cancellation & Refund Policy
            </h1>
            <p className="text-white/60 mt-4">DM Media Group</p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={200}>
            <div className="space-y-8 text-white/70 leading-relaxed">
              <div>
                <p className="text-lg mb-6">
                  At DM Media Group, we are committed to delivering high-quality outdoor media and advertising services. We understand that circumstances may require cancellations or refunds, and we aim to handle such requests fairly and transparently. Please review our policy below before making a purchase.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-[#c9a55a] mb-6">1. Cancellation Policy</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">1.1 Campaign & Media Placement Cancellations</h3>
                    <ul className="list-disc list-inside space-y-2 text-white/70">
                      <li>Clients may request a cancellation within 48 hours of booking a service or placing an order.</li>
                      <li>Cancellations after 48 hours may be subject to fees, depending on the stage of campaign execution.</li>
                      <li>Once a campaign has been scheduled, produced, or published, it cannot be cancelled and will be billed in full.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">1.2 Subscription Services</h3>
                    <ul className="list-disc list-inside space-y-2 text-white/70">
                      <li>Subscription-based services (e.g., recurring advertising plans) can be cancelled at any time.</li>
                      <li>Cancellations will take effect in the next billing cycle, and no refunds will be issued for the current period.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">1.3 Event & Production Services</h3>
                    <ul className="list-disc list-inside space-y-2 text-white/70">
                      <li>Event-related services require at least 7 days&apos; notice for cancellations.</li>
                      <li>Deposits for event bookings and large-scale productions are non-refundable once work has commenced.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-[#c9a55a] mb-6">2. Refund Policy</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">2.1 General Refund Eligibility</h3>
                    <p className="mb-3">Refunds will be issued only under the following conditions:</p>
                    <ul className="list-disc list-inside space-y-2 text-white/70">
                      <li>The cancellation request was made within the allowed timeframe.</li>
                      <li>DM Media Group failed to deliver the agreed-upon services.</li>
                      <li>A technical error or system failure caused an issue with the order.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">2.2 Non-Refundable Items & Services</h3>
                    <ul className="list-disc list-inside space-y-2 text-white/70">
                      <li>Custom advertising campaigns and media placements</li>
                      <li>Digital marketing services that have already commenced</li>
                      <li>Third-party advertising costs (e.g., billboard space, print media)</li>
                      <li>Consultation fees and strategy planning sessions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">2.3 Refund Processing</h3>
                    <ul className="list-disc list-inside space-y-2 text-white/70">
                      <li>Approved refunds will be processed within 7-10 business days.</li>
                      <li>Refunds will be credited to the original payment method used for purchase.</li>
                      <li>Clients are responsible for any transaction fees incurred during the refund process.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-[#c9a55a] mb-6">3. Exceptions & Special Cases</h2>
                <p className="mb-4">
                  Refunds or credits may be considered on a case-by-case basis for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Campaigns significantly disrupted due to issues caused by DM Media Group</li>
                  <li>Errors in media placements or incorrect advertisements (with valid proof)</li>
                  <li>Force Majeure events (e.g., natural disasters, unforeseen government restrictions)</li>
                </ul>
              </div>

              <div className="bg-[#1a1a1a] border-l-4 border-[#c9a55a] p-8 mt-12">
                <h2 className="text-xl font-semibold text-white mb-4">Legal Disclaimer</h2>
                <p>
                  DM Media Group reserves the right to modify this policy at any time without prior notice. By engaging with our services, clients agree to abide by this policy and understand that certain services are non-refundable.
                </p>
              </div>

              <FadeIn delay={300}>
                <div className="mt-12 pt-8 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-3 bg-[#c9a55a] text-black font-semibold hover:bg-[#d4b76a] transition-all duration-300 uppercase tracking-wider text-sm rounded"
                  >
                    Contact Us
                  </Link>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  )
}
