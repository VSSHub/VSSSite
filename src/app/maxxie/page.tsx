'use client'

import { useState } from 'react'
import Link from 'next/link'

const drives = [
  { size: '128GB', price: 499, priceId: 'price_1T4sNRBeUECy8XwJSxGxc5WR', tag: 'Entry Intelligence' },
  { size: '256GB', price: 525, priceId: 'price_1T4sNbBeUECy8XwJsN8GWfmQ', tag: 'Enhanced Capacity' },
  { size: '500GB', price: 580, priceId: 'price_1T4sNjBeUECy8XwJ0cHQJfoq', tag: 'Most Popular', popular: true },
  { size: '1TB',   price: 650, priceId: 'price_1T4sNpBeUECy8XwJnHJTD7oV', tag: 'Maximum Power' },
]

export default function MaXXiEPage() {
  const [selected, setSelected] = useState(2)
  const [loading, setLoading] = useState(false)

  async function handleCheckout() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: drives[selected].priceId, quantity: 1 }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } catch {
      setLoading(false)
    }
  }

  return (
    <main style={{ minHeight: '100vh', background: '#050508', color: '#f0f0f5', paddingTop: '80px', fontFamily: 'Inter, sans-serif' }}>
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 32px 60px', textAlign: 'center' }}>
        <img src="/brand/MaXXiE_Logo.png" alt="MaXXiE Offline AI" style={{ height: '160px', width: 'auto', margin: '0 auto 40px', display: 'block', filter: 'drop-shadow(0 0 40px rgba(0,180,255,0.5))' }} />
        <div style={{ display: 'inline-block', padding: '4px 14px', background: 'rgba(0,180,255,0.1)', border: '1px solid rgba(0,180,255,0.3)', borderRadius: '100px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', color: '#00b4ff', textTransform: 'uppercase' as const, marginBottom: '24px' }}>
          Perpetual Offline Intelligence
        </div>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '24px' }}>
          AI That Works<br />
          <span style={{ background: 'linear-gradient(135deg, #00b4ff 0%, #0066ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            When It Should Not
          </span>
        </h1>
        <p style={{ fontSize: '18px', color: 'rgba(240,240,245,0.6)', maxWidth: '600px', margin: '0 auto 16px', lineHeight: 1.7 }}>
          MaXXiE is a fully offline AI brain shipped directly to you on a high-speed SSD. No internet required. No subscriptions. No compromises. Your intelligence, forever.
        </p>
        <p style={{ fontSize: '14px', color: 'rgba(0,180,255,0.8)', fontWeight: 500 }}>
          Every MaXXiE includes 5GB basic training dataset access free.
        </p>
      </section>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px 80px' }}>
        <h2 style={{ textAlign: 'center' as const, fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'rgba(240,240,245,0.4)', marginBottom: '32px' }}>Choose Your Drive Size</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          {drives.map((d, i) => (
            <button key={d.size} onClick={() => setSelected(i)} style={{ position: 'relative' as const, background: selected === i ? 'rgba(0,180,255,0.1)' : 'rgba(255,255,255,0.03)', border: selected === i ? '1px solid rgba(0,180,255,0.5)' : '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '24px 20px', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'center' as const, boxShadow: selected === i ? '0 0 30px rgba(0,180,255,0.15)' : 'none' }}>
              {d.popular && (
                <div style={{ position: 'absolute' as const, top: '-10px', left: '50%', transform: 'translateX(-50%)', background: '#00b4ff', color: '#050508', fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', padding: '3px 10px', borderRadius: '100px', whiteSpace: 'nowrap' as const }}>MOST POPULAR</div>
              )}
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#f0f0f5', letterSpacing: '-0.02em' }}>{d.size}</div>
              <div style={{ fontSize: '12px', color: 'rgba(240,240,245,0.4)', marginBottom: '12px' }}>{d.tag}</div>
              <div style={{ fontSize: '24px', fontWeight: 700, color: selected === i ? '#00b4ff' : '#f0f0f5' }}>${d.price}</div>
            </button>
          ))}
        </div>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '32px', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '16px' }}>
          <div style={{ textAlign: 'center' as const }}>
            <div style={{ fontSize: '14px', color: 'rgba(240,240,245,0.5)', marginBottom: '4px' }}>Selected: MaXXiE on {drives[selected].size} SSD</div>
            <div style={{ fontSize: '36px', fontWeight: 800, letterSpacing: '-0.02em' }}>${drives[selected].price}<span style={{ fontSize: '16px', fontWeight: 400, color: 'rgba(240,240,245,0.4)' }}> one-time</span></div>
          </div>
          <button onClick={handleCheckout} disabled={loading} style={{ width: '100%', maxWidth: '360px', height: '56px', background: loading ? 'rgba(0,180,255,0.4)' : 'linear-gradient(135deg, #00b4ff 0%, #0066ff 100%)', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '15px', fontWeight: 700, letterSpacing: '0.04em', cursor: loading ? 'not-allowed' : 'pointer', boxShadow: '0 0 30px rgba(0,180,255,0.3)', transition: 'all 0.2s' }}>
            {loading ? 'Redirecting...' : `Order MaXXiE ${drives[selected].size} $${drives[selected].price}`}
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'rgba(240,240,245,0.4)' }}>
            <span>📦</span> Allow 7 days for standard delivery
          </div>
        </div>
      </section>

      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {[
            { icon: '🔌', title: 'Fully Offline', body: 'MaXXiE runs entirely on your hardware. No cloud, no internet dependency, no data leaving your hands.' },
            { icon: '🧠', title: 'Specializable Intelligence', body: 'Train MaXXiE to your exact needs using our PDF datapacks. The more you feed it, the sharper it gets.' },
            { icon: '♾️', title: 'Perpetual License', body: 'One purchase. No subscriptions, no renewals, no expiration. MaXXiE is yours for life.' },
            { icon: '💾', title: 'Ships on SSD', body: 'Arrives pre-loaded on a high-speed solid state drive, ready to plug in and run immediately.' },
            { icon: '🎁', title: '5GB Dataset Included', body: 'Every MaXXiE ships with 5GB of basic training data to get you started right out of the box.' },
            { icon: '🛡️', title: 'AI Where AI Should Not Be', body: 'Remote locations. Secure facilities. Off-grid environments. MaXXiE works when nothing else can.' },
          ].map(f => (
            <div key={f.title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{f.icon}</div>
              <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>{f.title}</div>
              <div style={{ fontSize: '14px', color: 'rgba(240,240,245,0.55)', lineHeight: 1.6 }}>{f.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px 80px' }}>
        <div style={{ background: 'rgba(0,180,255,0.05)', border: '1px solid rgba(0,180,255,0.2)', borderRadius: '20px', padding: '40px', textAlign: 'center' as const }}>
          <div style={{ fontSize: '32px', marginBottom: '16px' }}>📚</div>
          <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '12px' }}>Expand MaXXiE With PDF Datapacks</h2>
          <p style={{ fontSize: '15px', color: 'rgba(240,240,245,0.6)', maxWidth: '500px', margin: '0 auto 28px', lineHeight: 1.7 }}>
            Train MaXXiE on specialized knowledge with our curated PDF dataset collections. The more you train, the more powerful your offline AI becomes.
          </p>
          <Link href="/datasets" style={{ display: 'inline-flex', alignItems: 'center', height: '48px', padding: '0 28px', background: 'rgba(0,180,255,0.15)', border: '1px solid rgba(0,180,255,0.4)', color: '#00b4ff', fontWeight: 700, fontSize: '14px', textDecoration: 'none', borderRadius: '10px', letterSpacing: '0.03em' }}>
            Browse Datapacks
          </Link>
        </div>
      </section>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px 100px' }}>
        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '48px', textAlign: 'center' as const }}>
          <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '12px' }}>Need MaXXiE Built Just for You?</h2>
          <p style={{ fontSize: '15px', color: 'rgba(240,240,245,0.6)', maxWidth: '520px', margin: '0 auto 28px', lineHeight: 1.7 }}>
            We can specialize MaXXiE for your industry, workflow, or organization. Medical. Legal. Defense. Agriculture. Whatever your domain we will build an offline AI brain tuned specifically for it.
          </p>
          <a href="mailto:vibesoftwaresolutions@gmail.com?subject=MaXXiE Specialization Inquiry" style={{ display: 'inline-flex', alignItems: 'center', height: '52px', padding: '0 32px', background: '#00ff88', color: '#050508', fontWeight: 700, fontSize: '14px', textDecoration: 'none', borderRadius: '10px', letterSpacing: '0.03em', boxShadow: '0 0 20px rgba(0,255,136,0.25)' }}>
            Ask About Specialization
          </a>
        </div>
      </section>
    </main>
  )
}
