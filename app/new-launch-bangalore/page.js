'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'

import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'

const Overview = dynamic(() => import('../../components/Overview'), { ssr: true })
const Highlights = dynamic(() => import('../../components/Highlights'), { ssr: true })
const Amenities = dynamic(() => import('../../components/Amenities'), { ssr: true })
const Pricing = dynamic(() => import('../../components/Pricing'), { ssr: true })
const Location = dynamic(() => import('../../components/Location'), { ssr: true })
const MasterPlan = dynamic(() => import('../../components/MasterPlan'), { ssr: true })
// const PaymentPlan = dynamic(() => import('../../components/PaymentPlan'), { ssr: true })
const AboutDeveloper = dynamic(() => import('../../components/AboutDeveloper'), { ssr: true })
const QuickChat = dynamic(() => import('../../components/QuickChat'), { ssr: true })
const Footer = dynamic(() => import('../../components/Footer'), { ssr: true })

const Gallery = dynamic(() => import('../../components/Gallery'), { ssr: false })
// const VirtualTour = dynamic(() => import('../../components/VirtualTour'), { ssr: false })
const CarouselSection = dynamic(() => import('../../components/CarouselSection'), { ssr: false })
// const ExclusiveAmenities = dynamic(() => import('../../components/ExclusiveAmenities'), { ssr: false })
// const Sustainability = dynamic(() => import('../../components/Sustainability'), { ssr: false })
// const JapaneseExcellence = dynamic(() => import('../../components/JapaneseExcellence'), { ssr: false })
const EnquireModal = dynamic(() => import('../../components/EnquireModal'), { ssr: false })
const AosInit = dynamic(() => import('../../components/AosInit'), { ssr: false })

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="relative min-h-screen bg-white">
      <AosInit />
      <Navbar setIsOpen={setIsOpen} />
      <Hero setIsOpen={setIsOpen} />
      <Overview setIsOpen={setIsOpen} />
      <Highlights setIsOpen={setIsOpen} />
      {/* <Gallery setIsOpen={setIsOpen} /> */}
      <CarouselSection setIsOpen={setIsOpen} />
      <Amenities setIsOpen={setIsOpen} />
      {/* <ExclusiveAmenities /> */}
      <Pricing setIsOpen={setIsOpen} />
      <Location />
      {/* <Sustainability /> */}
      {/* <JapaneseExcellence /> */}
      <MasterPlan setIsOpen={setIsOpen} />
      {/* <PaymentPlan setIsOpen={setIsOpen} /> */}
      <AboutDeveloper setIsOpen={setIsOpen} />
      {/* <VirtualTour setIsOpen={setIsOpen} /> */}
      <QuickChat />
      <Footer />
      <EnquireModal isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Floating Vertical Enquire Tab — Desktop only */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden lg:flex btn-floating-tab !py-4 !px-3 shadow-lg items-center justify-center gap-3"
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          letterSpacing: '2px',
        }}
      >
        ENQUIRE NOW
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: 'rotate(90deg)', marginTop: '4px' }}>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>

      {/* Mobile Sticky Bottom Bar */}
      <div className="sticky-bottom-bar">
        <a
          href="tel:+919718344024"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 !py-2 !px-0 text-white transition-all"
          style={{ background: '#111827' }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
          <span style={{ fontSize: '9px', fontWeight: '600', letterSpacing: '0.04em', fontFamily: 'var(--font-jost)' }}>Call Us</span>
        </a>
        <button
          onClick={() => setIsOpen(true)}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 btn-gold !py-2 !px-0 !rounded-none"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span style={{ fontSize: '9px', fontWeight: '600', letterSpacing: '0.04em', fontFamily: 'var(--font-jost)' }}>Enquire</span>
        </button>
      </div>

      <div className="h-10 lg:hidden" />
    </main>
  )
}
