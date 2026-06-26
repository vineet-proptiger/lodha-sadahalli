'use client'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

/* Curved concave notch at each corner of the info box */
const CurvedCorners = ({ bg = '#fff' }) => {
  const corners = [
    { top: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderBottom: '1px solid #D5C2A8', borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: '1px solid #D5C2A8', borderTop: '1px solid #D5C2A8', borderTopLeftRadius: '18px' },
  ]

  return corners.map((c, i) => (
    <span key={i} style={{
      position: 'absolute', ...c,
      width: '22px', height: '22px',
      background: bg,
      display: 'block',
    }} />
  ))
}

const infoItems = [
  { label: 'PROJECT AREA', value: '80 Acre Ultra Luxury Township' },
  { label: 'OPEN SPACES',  value: '85% Open & Green Spaces' },
]

const Overview = ({ setIsOpen }) => (
  <section
    id="overview"
    style={{ background: '#fff', padding: '72px 0 80px', borderBottom: '1px solid #f0ede6' }}
  >
    <div className="container mx-auto px-4 sm:px-8 max-w-[1200px]">
      
      {/* ── Section Heading ── */}
      <div style={{ marginBottom: '40px', textAlign: 'center' }} data-aos="fade-up">
        <h2 style={{
          fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
          color: '#3A2A0E', letterSpacing: '0.1em',
          textTransform: 'uppercase', margin: '0 0 10px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          WELCOME TO LODHA SADAHALLI
        </h2>
        {/* <h3 style={{
          fontFamily: F_JOST, fontWeight: '600', fontSize: '16px',
          color: '#C9A96E', letterSpacing: '0.05em',
          textTransform: 'capitalize', margin: 0,
        }}>
          Premium Residences at Sadahalli, North Bangalore
        </h3> */}
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
        
        {/* ── Left Side: Text Content ── */}
        <div className="w-full lg:w-1/2" data-aos="fade-right">
          
          <p style={{
            fontFamily: F_SANS, fontSize: '14.5px', color: '#4A4540',
            lineHeight: 1.9,
            marginTop: 0, marginBottom: '20px',
            textAlign: 'justify',
          }}>
            Welcome to Lodha Sadahalli at Devanahalli, North Bengaluru—an iconic Scottish Castle-inspired luxury township crafted for those who aspire to live exceptionally. Spread across 70 acres, this landmark development draws inspiration from the timeless grandeur of Scotland's Balmoral Castle, blending neo-classical architecture with modern luxury. Discover spacious 3 & 4 BHK residences set amidst 85% open green spaces, landscaped gardens, and curated lifestyle experiences. Enjoy world-class amenities, a grand clubhouse, Saint Amand-managed hospitality services, and seamless connectivity to Kempegowda International Airport. Located in North Bengaluru's thriving growth corridor, Lodha Sadahalli offers the perfect balance of exclusivity, elegance, and future-ready living.
          </p>
          <p style={{
            fontFamily: F_SANS, fontSize: '14.5px', color: '#4A4540',
            lineHeight: 1.9,
            marginTop: 0, marginBottom: '32px',
            textAlign: 'justify',
            fontWeight: 'bold',
          }}>
            Register Your Interest Today to Access Pre-Launch Pricing, Exclusive Offers &amp; Priority Unit Selection.
          </p>

          {/* Info Box */}
          <div
            style={{
              position: 'relative',
              border: '1px solid #D5C2A8',
              overflow: 'hidden',
            }}
          >
            <CurvedCorners />

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-[1px]" style={{ background: '#D5C2A8' }}>
            {infoItems.map((item, i) => (
              <div key={i} className="bg-white flex flex-col justify-center" style={{
                padding: '20px 16px',
                textAlign: 'left',
              }}>
                <p style={{
                  fontFamily: F_JOST, fontSize: '10px', fontWeight: '500',
                  color: '#b5a99a', letterSpacing: '0.18em',
                  textTransform: 'uppercase', margin: '0 0 8px',
                }}>
                  {item.label}:
                </p>
                <p className="whitespace-normal break-words" style={{
                  fontFamily: F_JOST, fontSize: '12px', fontWeight: '700',
                  color: '#3A2A0E', letterSpacing: '0.05em',
                  textTransform: 'uppercase', margin: 0,
                  wordBreak: 'break-word', overflowWrap: 'break-word'
                }}>
                  {item.value}
                </p>
              </div>
            ))}
            </div>
          </div>

        </div>

        {/* ── Right Side: Image ── */}
        <div className="hidden lg:block lg:w-1/2" data-aos="fade-left">
          <div className="relative w-full flex justify-center items-center">
            <Image 
              src={overviewImage} 
              alt="Lodha Sadahalli Overview" 
              width={1000}
              height={1200}
              className="rounded-lg shadow-lg"
              style={{ width: '75%', height: 'auto', objectFit: 'contain', margin: '0 auto' }}
            />
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default Overview
