'use client'

import { useState } from 'react'

const tiers = [
  {
    eyebrow: 'Tier 01',
    title: 'Launch Page',
    price: '$2,500',
    deposit: '$1,250',
    duration: '1 week',
    description:
      'A single high-converting landing page built to impress. Perfect for product launches, waitlists, or establishing your digital presence fast.',
    features: [
      'Single-page responsive design',
      'Mobile-first layout',
      'Custom branding integration',
      'Contact or lead capture form',
      'Deployed and production-ready',
    ],
    accent: false,
  },
  {
    eyebrow: 'Tier 02',
    title: 'Business Site',
    price: '$5,000',
    deposit: '$2,500',
    duration: '2 weeks',
    description:
      'A complete multi-page website that communicates your brand, services, and value with clarity and authority.',
    features: [
      'Up to 5 pages',
      'Full responsive design system',
      'SEO-ready structure',
      'CMS integration (optional)',
      'Analytics setup',
    ],
    accent: false,
  },
  {
    eyebrow: 'Tier 03 — Most Popular',
    title: 'Premium Build',
    price: '$10,000',
    deposit: '$5,000',
    duration: '30 days',
    description:
      'A premium, fully custom web experience with advanced interactions, animations, and a design that makes competitors feel behind.',
    features: [
      'Up to 12 pages',
      'Custom motion & micro-interactions',
      'Advanced component library',
      'Full CMS integration',
      'Performance optimized',
      'Brand identity alignment',
    ],
    accent: true,
  },
  {
    eyebrow: 'Tier 04',
    title: 'Enterprise Presence',
    price: '$15,000',
    deposit: '$7,500',
    duration: '90 days',
    description:
      'A full-scale digital presence built for enterprise. Deep strategy, refined execution, and a final product that commands respect.',
    features: [
      'Unlimited pages',
      'Full UX/UI strategy & wireframing',
      'Custom design system',
      'E-commerce or platform integration',
      'Multi-language support (optional)',
      'Post-launch support included',
    ],
    accent: false,
  },
]

const steps = [
  { step: '01', title: 'Reach Out', desc: 'Email us with your project details and chosen tier.' },
  { step: '02', title: 'Pay Deposit', desc: '50% of the project total is due before work begins.' },
  { step: '03', title: 'We Build', desc: 'Work starts immediately. You get updates throughout.' },
  { step: '04', title: 'Deliver & Close', desc: 'Final 50% due on delivery. Site goes live.' },
]

export default function WebDesignPage() {
  const [selectedTier, setSelectedTier] = useState<number | null>(null)

  return (
    <main style={{ minHeight: '100vh', background: '#050508', paddingTop: '120px', paddingBottom: '120px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at 50% 10%, rgba(0,255,136,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '100px' }}>

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '720px' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>VSS Web Design</span>
          <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.04em', lineHeight: 1.0 }}>
            Websites That
            <br />
            <span style={{ background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Command Attention.</span>
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: 'rgba(240,240,245,0.55)', lineHeight: 1.7, maxWidth: '580px' }}>
            From rapid launch pages to full enterprise presences — we design and build websites that look funded, convert visitors, and make you proud to hand out your URL.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 20px', borderRadius: '10px', background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.15)', width: 'fit-content' }}>
            <span style={{ color: '#00ff88', fontSize: '12px' }}>◈</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(240,240,245,0.7)', lineHeight: 1.5 }}>
              <strong style={{ color: '#f0f0f5' }}>50% deposit</strong> required before work begins. Remaining 50% due upon delivery.
            </span>
          </div>
        </div>

        {/* Tier Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Pricing Tiers</span>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.04em', lineHeight: 1.0 }}>
              Pick Your Tier.
              <br />
              <span style={{ background: 'linear-gradient(135deg, rgba(240,240,245,0.5), rgba(240,240,245,0.25))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>We Handle the Rest.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2px' }}>
            {tiers.map((tier, i) => (
              <div
                key={tier.title}
                onClick={() => setSelectedTier(selectedTier === i ? null : i)}
                style={{
                  padding: '36px 32px',
                  background: tier.accent ? 'rgba(0,255,136,0.06)' : selectedTier === i ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
                  border: tier.accent ? '1px solid rgba(0,255,136,0.2)' : '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  position: 'relative',
                }}
              >
                {tier.accent && (
                  <div style={{ position: 'absolute', top: '16px', right: '16px', padding: '4px 10px', borderRadius: '999px', background: 'rgba(0,255,136,0.15)', border: '1px solid rgba(0,255,136,0.3)' }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#00ff88', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Popular</span>
                  </div>
                )}
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: tier.accent ? '#00ff88' : 'rgba(240,240,245,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{tier.eyebrow}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '22px', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.03em' }}>{tier.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '40px', fontWeight: 900, color: tier.accent ? '#00ff88' : '#f0f0f5', letterSpacing: '-0.04em', lineHeight: 1 }}>{tier.price}</span>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'rgba(240,240,245,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>/ {tier.duration}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(240,240,245,0.5)' }}>Deposit:</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, color: 'rgba(240,240,245,0.8)' }}>{tier.deposit}</span>
                  </div>
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(240,240,245,0.5)', lineHeight: 1.65 }}>{tier.description}</p>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {tier.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ color: '#00ff88', fontSize: '10px', marginTop: '3px', flexShrink: 0 }}>&#9658;</span>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(240,240,245,0.65)', lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="mailto:vibesoftwaresolutions@gmail.com"
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '48px',
                    borderRadius: '10px',
                    background: tier.accent ? '#00ff88' : 'rgba(255,255,255,0.07)',
                    color: tier.accent ? '#050508' : 'rgba(240,240,245,0.85)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    textDecoration: 'none',
                    border: tier.accent ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    marginTop: '8px',
                    boxShadow: tier.accent ? '0 0 30px rgba(0,255,136,0.3)' : 'none',
                  }}
                >
                  Get Started &#8594; {tier.price}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div style={{ padding: '48px', background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.12)', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>How It Works</span>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.03em' }}>Simple. Transparent. No Surprises.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2px' }}>
            {steps.map((item) => (
              <div key={item.step} style={{ padding: '28px 24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '20px', fontWeight: 700, color: '#00ff88', opacity: 0.4 }}>{item.step}</span>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#f0f0f5' }}>{item.title}</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(240,240,245,0.5)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.04em', lineHeight: 1.0 }}>
            Ready for a Site
            <br />
            <span style={{ background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Worth Sharing?</span>
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', color: 'rgba(240,240,245,0.5)', maxWidth: '480px', lineHeight: 1.6 }}>
            Email us your vision and we&apos;ll get back to you within 24 hours with a plan.
          </p>
          <a
            href="mailto:vibesoftwaresolutions@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '60px',
              padding: '0 48px',
              background: '#00ff88',
              color: '#050508',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 800,
              letterSpacing: '0.03em',
              textDecoration: 'none',
              borderRadius: '14px',
              boxShadow: '0 0 60px rgba(0,255,136,0.4), 0 8px 32px rgba(0,0,0,0.5)',
            }}
          >
            Start Your Project &#8594;
          </a>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'rgba(240,240,245,0.2)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>50% deposit required &middot; Work begins within 48 hours of payment</p>
        </div>

      </div>
    </main>
  )
}
