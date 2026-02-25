'use client'

import Image from 'next/image'
import { useState } from 'react'

const chapters = [
  'The Vibe Coding Philosophy — Why speed and clarity beat perfection',
  'Stack Selection — Choosing tools that won\'t betray you mid-build',
  'Sprint Architecture — How to scope, structure, and ship in days',
  'AI as a Co-Builder — Using LLMs as a senior engineer, not a search bar',
  'Design Systems That Work — Dark glass, hierarchy, and visual authority',
  'Deployment Without Drama — Vercel, CI/CD, and zero-config launches',
  'The Handoff — Documentation, maintainability, and client trust',
  'What\'s Next — Building your second product before the first one ships',
]

export default function ManualPage() {
  const [loading, setLoading] = useState(false)

  async function handleBuy() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } catch {
      setLoading(false)
    }
  }

  return (
    <>
      <section style={{ paddingTop: '120px', paddingBottom: '0', background: 'linear-gradient(180deg, #050508 0%, #07070f 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '900px', height: '700px', background: 'radial-gradient(ellipse at 50% 10%, rgba(0,255,136,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 32px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-20px', background: 'radial-gradient(ellipse at 50% 60%, rgba(0,255,136,0.12) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1, borderRadius: '8px', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 60px rgba(0,255,136,0.08)', transform: 'perspective(1000px) rotateY(4deg)', maxWidth: '340px', width: '100%' }}>
              <Image src="/brand/vcm.jpg" alt="Vibe Coding Manual" width={340} height={520} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: 600, color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>New Release</span>
              <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.04em', lineHeight: 1.0 }}>
                Vibe Coding<br />
                <span style={{ background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Manual</span>
              </h1>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(240,240,245,0.45)', letterSpacing: '0.02em' }}>
                Written by <span style={{ color: 'rgba(240,240,245,0.8)', fontWeight: 600 }}>Anthony S. Owens</span>
              </p>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', color: 'rgba(240,240,245,0.6)', lineHeight: 1.7 }}>
              The no-fluff guide to building real software fast. Sprint architecture, AI-assisted development, premium design systems, and shipping without drama.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '28px', borderRadius: '16px', background: 'rgba(0,255,136,0.05)', border: '1px solid rgba(0,255,136,0.18)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '52px', fontWeight: 900, color: '#00ff88', letterSpacing: '-0.04em', lineHeight: 1 }}>$65</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(240,240,245,0.4)' }}>one-time · digital PDF</span>
              </div>
              <button onClick={handleBuy} disabled={loading} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '56px', borderRadius: '12px', background: loading ? 'rgba(0,255,136,0.5)' : '#00ff88', color: '#050508', fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 800, letterSpacing: '0.03em', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', boxShadow: '0 0 40px rgba(0,255,136,0.35)', width: '100%' }}>
                {loading ? 'Redirecting...' : 'Buy Now — $65 →'}
              </button>
              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'rgba(240,240,245,0.3)', textAlign: 'center', letterSpacing: '0.08em' }}>Delivered via download link after payment</p>
            </div>
          </div>
        </div>
        <div style={{ height: '120px', background: 'linear-gradient(to bottom, transparent, #050508)', marginTop: '60px' }} />
      </section>

      <section style={{ padding: '100px 32px', background: '#050508' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '56px' }}>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>What&apos;s Inside</span>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.04em', lineHeight: 1.0 }}>8 Chapters.<br /><span style={{ color: 'rgba(240,240,245,0.35)' }}>Zero Filler.</span></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {chapters.map((chapter, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '20px 24px', background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.1em', flexShrink: 0, marginTop: '2px' }}>{String(i + 1).padStart(2, '0')}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(240,240,245,0.75)', lineHeight: 1.5 }}>{chapter}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 32px 140px', background: 'linear-gradient(180deg, #050508 0%, #070710 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center' }}>
          <button onClick={handleBuy} disabled={loading} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '60px', padding: '0 56px', borderRadius: '14px', background: loading ? 'rgba(0,255,136,0.5)' : '#00ff88', color: '#050508', fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 800, letterSpacing: '0.03em', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', boxShadow: '0 0 60px rgba(0,255,136,0.4)' }}>
            {loading ? 'Redirecting...' : 'Get the Manual — $65 →'}
          </button>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'rgba(240,240,245,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>PDF · Delivered after payment · One-time</p>
        </div>
      </section>
    </>
  )
}
