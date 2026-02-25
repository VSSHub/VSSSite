export default function DatasetSuccessPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#050508', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 32px 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '700px', background: 'radial-gradient(ellipse at center, rgba(0,255,136,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '580px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', color: '#00ff88' }}>✓</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Order Confirmed</span>
          <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.04em', lineHeight: 1.0 }}>
            {"Your Drive is"}<br />
            <span style={{ background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Being Built.</span>
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(240,240,245,0.5)', lineHeight: 1.7 }}>Payment received. Your SSD is being loaded with your selected dataset and will ship within the stated timeframe. Tracking info will be sent to your email.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '24px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(240,240,245,0.4)' }}>Standard build</span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'rgba(240,240,245,0.6)' }}>7 business days</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(240,240,245,0.4)' }}>Custom build</span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: 'rgba(240,240,245,0.6)' }}>10 business days</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(240,240,245,0.4)' }}>Shipping</span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#00ff88' }}>Free</span>
            </div>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(240,240,245,0.35)' }}>Questions? <a href="mailto:vibesoftwaresolutions@gmail.com" style={{ color: '#00ff88', textDecoration: 'none' }}>vibesoftwaresolutions@gmail.com</a></p>
        </div>
        <a href="/" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(240,240,245,0.35)', textDecoration: 'none' }}>← Back to VSS</a>
      </div>
    </main>
  )
}
