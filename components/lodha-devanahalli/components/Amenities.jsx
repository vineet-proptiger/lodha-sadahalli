'use client'
import React, { useState } from 'react'
import {
  Smile, Home, Activity, Landmark,
  Leaf, Shield, Dumbbell, Waves
} from 'lucide-react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const amenities = [
  { icon: Smile,        title: 'KID PLAY AREA',         desc: 'A safe and vibrant play zone designed specifically for your children’s entertainment and growth.' },
  { icon: Home,         title: 'CLUBHOUSE',             desc: 'An exclusive, world-class clubhouse offering premium recreational and social spaces.' },
  { icon: Activity,     title: 'SPORT COURTS',          desc: 'Multiple outdoor and indoor courts for basketball, tennis, and more to keep you active.' },
  { icon: Landmark,     title: 'MULTIPURPOSE HALL',     desc: 'A grand space beautifully designed for hosting events, community gatherings, and celebrations.' },
  { icon: Leaf,         title: 'GARDEN',                desc: 'Expansive landscaped gardens providing a serene and green environment for relaxation.' },
  { icon: Shield,       title: '3 TIER SECURITY',       desc: 'Advanced 24/7 security systems ensuring a completely safe and secure living environment.' },
  { icon: Dumbbell,     title: 'GYM',                   desc: 'A state-of-the-art fully equipped gymnasium for a premium workout experience.' },
  { icon: Waves,        title: 'SWIMMING POOL',         desc: 'A stunning pool offering breathtaking views and a refreshing escape.' },
]

const AmenityCard = ({ item, idx }) => {
  const [hovered, setHovered] = useState(false)
  const Icon = item.icon
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-aos="fade-up"
      data-aos-delay={idx * 60}
      style={{
        background: '#fff',
        border: '1px solid var(--color-gold-light)',
        borderTop: '5px solid var(--color-gold)',
        borderRadius: '14px',
        padding: '36px 20px 28px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'default',
        transition: 'all 0.28s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: hovered
          ? '0 10px 32px var(--color-shadow-inner)'
          : '0 4px 15px rgba(0,0,0,0.05)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
      }}
    >
      {/* top accent bar */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '60px', height: '5px',
        background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))',
        borderRadius: '0 0 10px 10px',
      }} />

      {/* Icon circle */}
      <div style={{
        width: '62px', height: '62px', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '18px',
        background: hovered ? 'var(--color-gold)' : 'var(--color-gold-bg)',
        border: `2px solid ${hovered ? 'var(--color-gold)' : 'var(--color-gold-light)'}`,
        color: hovered ? '#fff' : 'var(--color-gold)',
        transition: 'all 0.3s ease',
        boxShadow: hovered ? '0 0 20px var(--color-shadow-inner)' : 'none',
      }}>
        <Icon size={28} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: F_JOST,
        fontSize: '15px',
        fontWeight: '700',
        color: '#111827',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        margin: '0 0 10px',
      }}>
        {item.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: F_SANS,
        fontSize: '13px',
        lineHeight: 1.6,
        color: '#4b5563',
        margin: 0,
        textAlign: 'center',
      }}>
        {item.desc}
      </p>
    </div>
  )
}

const Amenities = ({ setIsOpen }) => {
  return (
    <section id="amenities" style={{
      padding: '56px 0',
      background: '#ffffff',
      borderBottom: '1px solid #f0f0f0',
    }}>
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div style={{ marginBottom: '36px', textAlign: 'center' }} data-aos="fade-up">
          <span style={{
            display: 'inline-block', padding: '4px 16px',
            background: 'var(--color-gold-bg)', borderRadius: '50px',
            fontSize: '11px', fontWeight: '700', color: 'var(--color-gold)',
            fontFamily: F_JOST, letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '1px solid var(--color-gold-light)', marginBottom: '10px',
          }}>Sadahalli, North Bangalore — World-Class Amenities</span>
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '800', fontSize: '26px',
            color: '#111827', margin: '0 0 6px', letterSpacing: '-0.01em',
          }}>
            Lifestyle &amp;{' '}
            <span style={{ color: 'var(--color-gold)' }}>Wellness Amenities</span>
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--color-gold), var(--color-gold-light))', borderRadius: '2px', margin: '8px auto 12px' }} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {amenities.map((item, idx) => (
            <AmenityCard key={idx} item={item} idx={idx} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '36px' }} data-aos="fade-up">
          <button onClick={() => setIsOpen(true)} className="btn-gold"
            style={{ padding: '13px 44px', letterSpacing: '0.08em' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Amenities
