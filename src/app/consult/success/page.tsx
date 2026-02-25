export default function ConsultSuccessPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#050508', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 32px 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '700px', background: 'radial-gradient(ellipse at center, rgba(0,255,136,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '560px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', color: '#00ff88' }}>✓</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Payment Confirmed</span>
          <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.04em', lineHeight: 1.0 }}>
            {"You're Booked."}<br />
            <span style={{ background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{"Let's Work."}</span>
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(240,240,245,0.5)', lineHeight: 1.7 }}>
            Payment received. Anthony will reach out within 48 hours to confirm your date, time, and session details.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(240,240,245,0.4)', lineHeight: 1.6 }}>
            Questions? <a href="mailto:vibesoftwaresolutions@gmail.com" style={{ color: '#00ff88', textDecoration: 'none' }}>vibesoftwaresolutions@gmail.com</a>
          </p>
        </div>
        <a href="/" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(240,240,245,0.35)', textDecoration: 'none' }}>← Back to VSS</a>
      </div>
    </main>
  )
}
