'use client'

import Image from 'next/image'
import { useState } from 'react'

const DRIVES = [
  { size: '128GB', price: 129.99, label: '128 GB' },
  { size: '256GB', price: 250,    label: '256 GB' },
  { size: '500GB', price: 475,    label: '500 GB' },
  { size: '1TB',   price: 775,    label: '1 TB'   },
]

const CATEGORIES = [
  'Market Research & Consumer Trends',
  'Financial & Economic Data',
  'Legal & Regulatory Compliance',
  'Real Estate & Property Records',
  'Government & Public Records',
  'Logistics & Supply Chain',
  'Retail & E-Commerce Analytics',
  'HR & Workforce Data',
  'Energy & Utilities',
  'Agriculture & Environmental',
  'Defense & Aerospace',
  'Manufacturing & Industrial',
  'Education & Training Data',
  'Cybersecurity & Threat Intelligence',
  'Marketing & Advertising Analytics',
  'Transportation & Infrastructure',
  'Tax & Accounting Records',
  'Insurance & Risk Data',
  'Construction & Engineering',
  'Technology & Patent Data',
]

export default function DatasetsPage() {
  const [selectedDrive, setSelectedDrive] = useState<string | null>(null)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const customBuild = selectedCategories.length > 1
  const turnaround = customBuild ? '10 business days' : '7 business days'
  const driveData = DRIVES.find(d => d.size === selectedDrive)
  const canCheckout = selectedDrive && selectedCategories.length > 0

  function toggleCategory(cat: string) {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  async function handleOrder() {
    if (!canCheckout) return
    setLoading(true)
    try {
      const res = await fetch('/api/dataset-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ driveSize: selectedDrive, categories: selectedCategories, customBuild }),
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
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '72px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Vibe Software Solutions</span>
            <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.04em', lineHeight: 1.0 }}>
              Industry<br />
              <span style={{ background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Datasets</span>
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', color: 'rgba(240,240,245,0.55)', lineHeight: 1.7 }}>
              Pre-loaded SSDs shipped directly to you. Pick your drive size, select your industry categories, and receive your data ready to use out of the box.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['Free Shipping', '7-Day Turnaround', 'Custom Builds Available', 'US Shipping Only'].map(label => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#00ff88', fontSize: '10px' }}>◈</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(240,240,245,0.5)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-20px', background: 'radial-gradient(ellipse at 50% 60%, rgba(0,255,136,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,255,136,0.08)', maxWidth: '300px', width: '100%' }}>
              <Image src="/brand/ssd.jpg" alt="SSD Data Drive" width={300} height={300} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Step 1</span>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: 800, color: '#f0f0f5', letterSpacing: '-0.03em' }}>Choose your drive size</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2px' }}>
            {DRIVES.map(drive => {
              const active = selectedDrive === drive.size
              return (
                <button key={drive.size} onClick={() => setSelectedDrive(drive.size)} style={{ padding: '28px 20px', background: active ? 'rgba(0,255,136,0.1)' : 'rgba(255,255,255,0.03)', border: active ? '1px solid rgba(0,255,136,0.5)' : '1px solid rgba(255,255,255,0.06)', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left', transition: 'all 0.15s' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '22px', fontWeight: 900, color: active ? '#00ff88' : '#f0f0f5', letterSpacing: '-0.03em' }}>{drive.label}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 700, color: active ? 'rgba(0,255,136,0.8)' : 'rgba(240,240,245,0.5)' }}>${drive.price.toLocaleString()}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Step 2</span>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: 800, color: '#f0f0f5', letterSpacing: '-0.03em' }}>Select your data categories</h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(240,240,245,0.4)', lineHeight: 1.6 }}>Pick one for a standard build (7 days). Pick multiple for a custom build (+3 days).</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2px' }}>
            {CATEGORIES.map(cat => {
              const active = selectedCategories.includes(cat)
              return (
                <button key={cat} onClick={() => toggleCategory(cat)} style={{ padding: '16px 20px', background: active ? 'rgba(0,255,136,0.08)' : 'rgba(255,255,255,0.03)', border: active ? '1px solid rgba(0,255,136,0.4)' : '1px solid rgba(255,255,255,0.05)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left', transition: 'all 0.15s' }}>
                  <span style={{ width: '16px', height: '16px', borderRadius: '4px', border: active ? '1px solid #00ff88' : '1px solid rgba(255,255,255,0.2)', background: active ? '#00ff88' : 'transparent', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#050508', fontWeight: 900 }}>{active ? '✓' : ''}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: active ? 'rgba(240,240,245,0.9)' : 'rgba(240,240,245,0.55)', lineHeight: 1.4 }}>{cat}</span>
                </button>
              )
            })}
          </div>
        </div>

        {canCheckout && (
          <div style={{ padding: '40px', borderRadius: '20px', background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.15)', display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Order Summary</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(240,240,245,0.7)' }}>{driveData?.label} Data SSD</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 700, color: '#f0f0f5' }}>${driveData?.price.toLocaleString()}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(240,240,245,0.7)' }}>Shipping</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 700, color: '#00ff88' }}>Free</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(240,240,245,0.7)' }}>{customBuild ? 'Custom Build' : 'Standard Build'}</span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: customBuild ? '#00ff88' : 'rgba(240,240,245,0.4)' }}>{turnaround}</span>
              </div>
              {customBuild && (
                <div style={{ padding: '12px 16px', borderRadius: '8px', background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.15)' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(240,240,245,0.5)', lineHeight: 1.6 }}>Custom build — {selectedCategories.length} categories selected. Extra 3 business days for curation and loading.</span>
                </div>
              )}
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'rgba(240,240,245,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Total</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '36px', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.03em' }}>${driveData?.price.toLocaleString()}</span>
              </div>
            </div>
            <button onClick={handleOrder} disabled={loading} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '60px', borderRadius: '14px', background: loading ? 'rgba(0,255,136,0.5)' : '#00ff88', color: '#050508', fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 800, letterSpacing: '0.03em', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', boxShadow: '0 0 50px rgba(0,255,136,0.35)', width: '100%' }}>
              {loading ? 'Redirecting...' : `Order Now — $${driveData?.price.toLocaleString()} →`}
            </button>
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'rgba(240,240,245,0.2)', textAlign: 'center', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Secure checkout via Stripe · Shipping address collected at checkout</p>
          </div>
        )}

      </div>
    </main>
  )
}
