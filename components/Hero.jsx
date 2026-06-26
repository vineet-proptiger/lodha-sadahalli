'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { heroImages } from '../lib/images'

const slides = [
  { img: heroImages.banner },
  { img: heroImages.banner2 }
]

const Hero = ({ setIsOpen }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero-container">
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-container {
          position: relative;
          margin-top: 80px;
          height: auto;
          overflow: hidden;
          background: #111;
          display: block;
        }

        /* Dark gradient overlay — bottom heavy so text is legible */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.45) 55%,
            rgba(0,0,0,0.10) 100%
          );
          z-index: 2;
          pointer-events: none;
        }

        /* Content block — sits over the image */
        .hero-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10;
          padding: 0 44px 72px;
        }

        /* Main title */
        .hero-title {
          font-family: var(--font-jost), Montserrat, sans-serif;
          font-size: clamp(20px, 3vw, 40px);
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          line-height: 1.08;
          margin: 0 0 6px;
          text-shadow: 0 2px 16px rgba(0,0,0,0.5);
        }

        /* Subtitle */
        .hero-subtitle {
          font-family: var(--font-jost), Montserrat, sans-serif;
          font-size: clamp(11px, 1.4vw, 18px);
          font-weight: 600;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 0 0 12px;
          opacity: 0.92;
          text-shadow: 0 1px 8px rgba(0,0,0,0.4);
        }

        /* Price line */
        .hero-price-line {
          font-family: var(--font-sans), Open Sans, sans-serif;
          font-size: clamp(13px, 1.5vw, 18px);
          color: rgba(255,255,255,0.88);
          margin: 0 0 22px;
          line-height: 1.4;
        }

        @keyframes livepulse {
          0%  { box-shadow:0 0 0 0 rgba(212,175,55,0.6); }
          70% { box-shadow:0 0 0 6px rgba(212,175,55,0); }
          100%{ box-shadow:0 0 0 0 rgba(212,175,55,0); }
        }
        @keyframes textBling {
          0% { opacity: 0.7; text-shadow: 0 0 4px rgba(212,175,55,0.5); }
          50% { opacity: 1; text-shadow: 0 0 14px rgba(212,175,55,1); }
          100% { opacity: 0.7; text-shadow: 0 0 4px rgba(212,175,55,0.5); }
        }

        @keyframes heroPriceBlink {
          0%, 75% { 
            opacity: 1; 
            text-shadow: 0 0 8px rgba(255,255,255,0.6); 
          }
          76%, 100% { 
            opacity: 0; 
            text-shadow: none; 
          }
        }

        .hero-price-amt {
          font-family: var(--font-jost), Montserrat, sans-serif;
          font-size: clamp(20px, 3vw, 36px);
          font-weight: 800;
          color: #fff;
          animation: heroPriceBlink 1.4s infinite;
          display: inline-block;
        }

        /* CTA Row */
        .hero-cta-row {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* Hero buttons use global btn-brand / btn-gold-outline classes */

        /* First button — white text + white border on dark hero bg */
        .hero-btn-one {
          color: #fff !important;
          border-color: rgba(255,255,255,0.9) !important;
          background: transparent !important;
        }
        .hero-btn-one:hover {
          background: var(--color-brand) !important;
          color: #fff !important;
          border-color: var(--color-brand) !important;
        }

        /* RERA text */
        .hero-rera {
          font-family: var(--font-sans), Open Sans, sans-serif;
          font-size: 11.5px;
          color: rgba(255,255,255,0.75);
          white-space: nowrap;
        }

        .hero-slider-wrapper {
          width: 100%;
          height: 100%;
        }
        .slide-layer {
          position: relative;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1.2s ease-in-out;
          pointer-events: none;
        }
        .slide-layer.active {
          opacity: 1;
          pointer-events: auto;
        }

        .hero-image {
          width: 100%;
          height: auto;
          display: block;
        }

        /* ─── Desktop ─── */
        @media (min-width: 1024px) {
          .hero-container {
            aspect-ratio: 21/9;
          }
          .slide-layer {
            position: absolute;
            height: 100%;
          }
          .hero-image {
            height: 100%;
            object-fit: cover;
            object-position: center 80%;
          }
        }

        .carousel-dots {
          position: absolute;
          bottom: 24px;
          right: 44px;
          display: flex;
          gap: 8px;
          z-index: 20;
        }
        .carousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: background 0.3s;
        }
        .carousel-dot.active {
          background: #fff;
        }

          .desktop-carousel { display: block; }
          .mobile-hero-image { display: none; }

          /* ─── Tablet ─── */
          @media (min-width: 768px) and (max-width: 1023px) {
            .hero-container {
              aspect-ratio: 16/7;
            }
            .slide-layer {
              position: absolute;
              height: 100%;
            }
            .hero-image {
              height: 100%;
              object-fit: cover;
              object-position: center 80%;
            }
            .hero-content {
              padding: 0 28px 56px !important;
            }
          }

          /* ─── Mobile ─── */
          @media (max-width: 767px) {
            .desktop-carousel { display: none !important; }
            .mobile-hero-image { display: block !important; width: 100%; height: auto; }

            .hero-container {
              margin-top: 0px !important;
              padding-top: 80px !important;
              height: auto !important;
              display: flex !important;
              flex-direction: column !important;
              background: #FFF9E6 !important;
            }

            .hero-overlay {
              display: none !important;
            }

          .hero-content {
            position: relative !important;
            background: #FFF9E6 url('/images/hero/leaf-bg.png') no-repeat center center !important;
            background-size: contain !important;
            padding: 24px 20px 28px !important;
          }

          .hero-title, .hero-subtitle, .hero-price-line, .hero-price-amt, .hero-bullet-text {
            color: #111827 !important;
            text-shadow: none !important;
          }

          .hero-subtitle {
            font-size: 16px !important;
          }

          .hero-price-line {
            font-size: 17px !important;
          }
          
          .hero-subtitle span {
            color: #374151 !important;
          }

          .hero-bullet-item svg {
            background-color: #111827 !important;
            stroke: #FCE3A1 !important;
          }

          .hero-cta-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
            width: 100%;
          }

          .hero-cta-row > button,
          .hero-cta-row > a {
            width: 260px !important;
            justify-content: center !important;
            text-align: center;
            padding: 12px 10px !important;
            font-size: 11px !important;
            white-space: normal !important;
            box-shadow: none !important;
          }
          
          .hero-cta-row > div {
            width: 260px !important;
            justify-content: center !important;
            text-align: center;
            white-space: normal !important;
          }
          
          .hero-cta-row > a.btn-brand {
            background: linear-gradient(90deg, #D4AF37 0%, #F9E08A 100%) !important;
            color: #111827 !important;
            border-color: transparent !important;
            font-weight: 800 !important;
          }

          .hero-btn-one {
            color: #111827 !important;
            border-color: #111827 !important;
          }

          .hero-rera {
            font-size: 10px !important;
          }

          .carousel-dots {
            bottom: unset;
            top: 90px;
            right: 12px;
          }
        }
      `}} />

      {/* ── Video Wrapper ── */}
      <div className="hero-slider-wrapper desktop-carousel" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroImages.banner}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/images/hero/video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Mobile Static Image ── */}
      <div className="mobile-hero-image">
        <Image
          src={heroImages.smDevice}
          alt="Banner Mobile"
          width={768}
          height={800}
          className="hero-image"
          priority
          sizes="100vw"
        />
      </div>

      {/* ── Dark overlay for text legibility ── */}
      <div className="hero-overlay" />

      {/* ── Content overlay ── */}
      <div className="hero-content">

        {/* Main Heading */}
        <h1 className="hero-title">
         Lodha Sadahalli
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          <span style={{ fontSize: '0.85em', fontWeight: 500, textTransform: 'none' }}>At Sadahalli, North Bangalore</span>
        </p>
        {/* Bullet Points */}
          <div className="hero-bullets" style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              '70 Acre Ultra Luxury Township',
              'North Bengaluru Fastest Growing Corridor',
              // '10 Mins From Airport',
              '85% Open & Green Spaces',
              'Near Kempegowda International Airport',
              'Neo-Classical European Architecture'
            ].map((text, i) => (
            <div key={i} className="hero-bullet-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand, #C9A96E)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, backgroundColor: '#fff', borderRadius: '50%', padding: '2px' }}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="hero-bullet-text" style={{ color: '#fff', fontFamily: 'var(--font-sans), Open Sans, sans-serif', fontSize: 'clamp(13px, 1.5vw, 18px)', fontWeight: '500', letterSpacing: '0.02em', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* Restored Subtitle */}
        {/* Restored Subtitle */}
        <p className="hero-price-line" style={{ marginBottom: '0px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          Premium 3, 3.5 &amp; 4 BHK Luxury Residences
          <span style={{ fontWeight: '700', whiteSpace: 'nowrap', display: 'flex', gap: '4px', alignItems: 'center' }}>
            - Starts 
            <span style={{
              color: '#ffffff',
              animation: 'heroPriceBlink 1.4s infinite',
              display: 'inline-block'
            }}>
              ₹ 3.1 Cr*
            </span>
          </span>
        </p>

        {/* CTA Row */}
        <div className="hero-cta-row" style={{ marginTop: '16px' }}>

          {/* Button 1 — EOI Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="btn-gold-outline hero-btn-one"
            style={{ fontSize: '14px', padding: '11px 22px', fontWeight: '700', textTransform: 'none', cursor: 'pointer', display: 'inline-block' }}
          >
            Book @ ₹5L EOI
          </button>

          {/* Button 2 — Popup Trigger (global btn-brand) */}
          <button
            onClick={() => setIsOpen(true)}
            className="btn-brand"
            style={{ fontSize: '12px', padding: '11px 22px' }}
          >
            {/* Calendar icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Schedule Site Visit
          </button>

        </div>

      </div>
    </section>
  )
}

export default Hero

