'use client'

import { useState } from 'react'

const topics = [
  'AI Systems & Offline-First Architecture',
  'Lean Startup & Zero-Capital Launch Strategy',
  'Emergency Response & Disaster Systems',
  'Hemp Industry & Regulatory Navigation',
  'Autonomous Technology & Defense Innovation',
  'Building Resilient Businesses Under Pressure',
  'AI Business Automation',
  'AI in Disaster Recovery',
  'AGI Robotics',
]

const perks = [
  { icon: '◈', title: '2-Hour Deep Dive', desc: 'Focused, uninterrupted session on your exact problem or opportunity' },
  { icon: '◈', title: 'Systems Audit', desc: 'Identify fragility, bottlenecks, and highest-leverage next moves' },
  { icon: '◈', title: 'Actionable Output', desc: 'Leave with a clear path forward, not a deck full of buzzwords' },
  { icon: '◈', title: '48hr Follow-Up Access', desc: 'Email window post-session for clarifying questions' },
]

export default function ConsultPage() {
  const [travel, setTravel] = useState(false)
  const [loading, setLoading] = useState(false)

  const total = travel ? 30000 : 25000

  async function handleBook() {
    setLoading(true)
    try {
      const res = await fetch('/api/consult-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ includeTravel: travel }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } catch {
      setLoading(false)
    }
  }

  return (
    <main style={{ minHeight: '100vh', background: '#050508', paddingTop: '120px', paddingBottom: '120px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '900px', height: '600px', background: 'radial-gradient(ellipse at 50% 10%, rgba(0,255,136,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '80px' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Book Anthony S. Owens</span>
          <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.04em', lineHeight: 1.0 }}>
            Business Consulting<br />
            <span style={{ background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>&amp; Speaking</span>
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: 'rgba(240,240,245,0.55)', lineHeight: 1.7, maxWidth: '600px' }}>
            Systems thinking, AI strategy, emergency response architecture, entrepreneurship, and technology leadership. Two hours with Anthony moves faster than most teams move in a quarter.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2px' }}>
          {perks.map((item) => (
            <div key={item.title} style={{ padding: '28px 24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ color: '#00ff88', fontSize: '16px' }}>{item.icon}</span>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 700, color: '#f0f0f5' }}>{item.title}</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(240,240,245,0.5)', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ padding: '40px', borderRadius: '20px', background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.15)', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'rgba(240,240,245,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Base Rate</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '56px', fontWeight: 900, color: '#00ff88', letterSpacing: '-0.04em', lineHeight: 1 }}>$25,000</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(240,240,245,0.4)' }}>/ 2 hours</span>
            </div>
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 700, color: '#f0f0f5' }}>Travel Required?</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(240,240,245,0.45)', lineHeight: 1.5 }}>
                  Engagements outside 65 miles of Wilson, NC require a $5,000 travel fee paid 1 month in advance.
                </span>
              </div>
              <button onClick={() => setTravel(!travel)} style={{ flexShrink: 0, width: '52px', height: '28px', borderRadius: '14px', background: travel ? '#00ff88' : 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer', position: 'relative', transition: 'background 0.2s' }}>
                <span style={{ position: 'absolute', top: '3px', left: travel ? '27px' : '3px', width: '22px', height: '22px', borderRadius: '50%', background: travel ? '#050508' : 'rgba(255,255,255,0.6)', transition: 'left 0.2s', display: 'block' }} />
              </button>
            </div>
            {travel && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 18px', borderRadius: '10px', background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)' }}>
                <span style={{ color: '#00ff88', fontSize: '14px' }}>+</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(240,240,245,0.8)' }}>$5,000 travel fee added — due 1 month before engagement</span>
              </div>
            )}
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'rgba(240,240,245,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Total Due Today</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '32px', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.03em' }}>${total.toLocaleString()}</span>
            </div>
            <button onClick={handleBook} disabled={loading} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '60px', borderRadius: '14px', background: loading ? 'rgba(0,255,136,0.5)' : '#00ff88', color: '#050508', fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 800, letterSpacing: '0.03em', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', boxShadow: '0 0 50px rgba(0,255,136,0.35)', width: '100%' }}>
              {loading ? 'Redirecting...' : `Book Now — $${total.toLocaleString()} →`}
            </button>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'rgba(240,240,245,0.2)', textAlign: 'center', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Secure checkout via Stripe · Scheduling confirmed within 48 hours</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Topics</span>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.04em', lineHeight: 1.0 }}>What Anthony speaks on</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2px' }}>
            {topics.map((topic) => (
              <div key={topic} style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ color: '#00ff88', fontSize: '10px', flexShrink: 0 }}>▸</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(240,240,245,0.7)', lineHeight: 1.5 }}>{topic}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  )
}
