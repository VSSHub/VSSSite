'use client'

const pillars = [
  {
    number: '01',
    title: 'Micro-Tax Every AI Transaction',
    body: 'A fractional tax applied to every machine-executed transaction: algorithmic trades, AI-processed payments, automated logistics settlements, and every crypto transaction regardless of size or origin. Not a burden on any individual. A collective contribution from the systems replacing human labor.',
  },
  {
    number: '02',
    title: 'A Dedicated National AI Fund',
    body: 'All collected revenue flows into a federally managed, independently audited AI Prosperity Fund — separate from the general budget, protected from political reallocation. Managed with full public transparency. Every dollar tracked, every disbursement public record.',
  },
  {
    number: '03',
    title: 'Direct Monthly Stipend to Every American',
    body: 'Every adult citizen receives a monthly AI Stipend — no means testing, no bureaucracy, no applications. Deposited directly. As AI systems process more transactions and displace more labor, the fund grows automatically. The stipend grows with it.',
  },
  {
    number: '04',
    title: 'Self-Reinforcing by Design',
    body: 'The more AI replaces human workers, the more transactions occur, the more tax is collected, the larger the stipend becomes. The system is engineered so that economic disruption from automation automatically funds the people it displaces. The math works in our favor.',
  },
]

const timeline = [
  { year: '2026', label: 'Legislation introduced. AI Prosperity Fund established.' },
  { year: '2027', label: 'Micro-tax framework operational. Initial fund capitalization begins.' },
  { year: '2028', label: 'First stipends distributed to American citizens.' },
  { year: '2030', label: 'Stipend reaches meaningful living support threshold.' },
  { year: '2032', label: 'Fund growth outpaces inflation. Homelessness rates in measurable decline.' },
  { year: '2035', label: 'Homelessness and food insecurity functionally eliminated in the United States.' },
]

const shareLinks = [
  {
    label: 'Share on X',
    icon: 'X',
    url: 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('Every AI transaction should fund every American. The AI Stipend Act micro-taxes machine-driven transactions and pays a universal income to every citizen. As AI grows, so does the stipend. By 2035 — no homelessness, no starvation.') + '&url=' + encodeURIComponent('https://vibesoftwaresolutions.com/ubi'),
  },
  {
    label: 'Share on LinkedIn',
    icon: 'in',
    url: 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent('https://vibesoftwaresolutions.com/ubi'),
  },
  {
    label: 'Share on Facebook',
    icon: 'f',
    url: 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent('https://vibesoftwaresolutions.com/ubi'),
  },
]

export default function UBIPage() {
  function handleShare(url: string) {
    window.open(url, '_blank', 'width=600,height=500')
  }

  function handleCopyLink() {
    navigator.clipboard.writeText('https://vibesoftwaresolutions.com/ubi')
    alert('Link copied to clipboard.')
  }

  return (
    <main style={{ minHeight: '100vh', background: '#050508', paddingTop: '120px', paddingBottom: '140px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1000px', height: '700px', background: 'radial-gradient(ellipse at 50% 10%, rgba(0,255,136,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '96px' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>A Proposal by Anthony S. Owens</span>
          <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
            The AI Stipend<br />
            <span style={{ background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Act</span>
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '22px', color: 'rgba(240,240,245,0.75)', lineHeight: 1.6, maxWidth: '700px', fontWeight: 400 }}>
            Artificial intelligence is the most powerful wealth-generation engine in human history. It should pay for the people it replaces.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '17px', color: 'rgba(240,240,245,0.5)', lineHeight: 1.8, maxWidth: '680px' }}>
            Every day, billions of machine-executed transactions generate enormous value without a single human hand involved. A micro-tax on those transactions, invisible to any individual, would accumulate into a fund large enough to pay every American citizen a monthly stipend. As AI gets more powerful and displaces more workers, the fund grows automatically. The math is not speculative. The infrastructure already exists. What is missing is the political will to build it.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2px' }}>
          {[
            { value: '$6.6T+', label: 'Daily global financial transaction volume' },
            { value: '0.001%', label: 'Proposed micro-tax rate per transaction' },
            { value: '$330M+', label: 'Potential daily fund contribution' },
            { value: '2035', label: 'Target year to eliminate US homelessness' },
          ].map(stat => (
            <div key={stat.label} style={{ padding: '32px 24px', background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.12)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '36px', fontWeight: 900, color: '#00ff88', letterSpacing: '-0.04em', lineHeight: 1 }}>{stat.value}</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(240,240,245,0.45)', lineHeight: 1.5 }}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>The Plan</span>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.04em', lineHeight: 1.0 }}>
              Four pillars.<br /><span style={{ color: 'rgba(240,240,245,0.3)' }}>One simple system.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {pillars.map(pillar => (
              <div key={pillar.number} style={{ padding: '36px 32px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '28px' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#00ff88', letterSpacing: '0.1em', flexShrink: 0, marginTop: '4px' }}>{pillar.number}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 800, color: '#f0f0f5', letterSpacing: '-0.02em' }}>{pillar.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(240,240,245,0.55)', lineHeight: 1.8 }}>{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '48px 40px', borderRadius: '20px', background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.12)' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Why Now</span>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.04em', lineHeight: 1.0 }}>The displacement is already happening.</h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(240,240,245,0.55)', lineHeight: 1.9 }}>
            AI is not a future problem. Truck drivers, customer service agents, paralegals, radiologists, coders, accountants — entire industries are being reshaped right now. The standard political response has been retraining programs and safety nets designed for a different era. Those tools are too slow and too small for what is coming.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(240,240,245,0.55)', lineHeight: 1.9 }}>
            The AI Stipend Act does not fight automation. It does not try to slow it down. It funds the people it affects — automatically, permanently, and at scale — using the very transactions automation generates. The more the machines work, the more Americans get paid. That is the correct alignment of incentives.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(240,240,245,0.55)', lineHeight: 1.9 }}>
            Homelessness in America is not a resource problem. The United States produces enough wealth to house and feed every citizen several times over. It is a distribution problem. The AI Stipend Act solves the distribution problem at the source — by taxing the engine of wealth creation before it leaves the system entirely.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Roadmap</span>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.04em', lineHeight: 1.0 }}>
              Zero homelessness<br /><span style={{ color: 'rgba(240,240,245,0.3)' }}>by 2035.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {timeline.map((item, i) => (
              <div key={item.year} style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', padding: '20px 24px', background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '14px', fontWeight: 700, color: '#00ff88', flexShrink: 0, minWidth: '48px' }}>{item.year}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(240,240,245,0.7)', lineHeight: 1.6 }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Spread the idea</span>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.04em', lineHeight: 1.0 }}>Ideas move when people share them.</h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(240,240,245,0.4)', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>This plan does not require a billion-dollar lobby. It requires enough people to demand it.</p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {shareLinks.map(link => (
              <button key={link.label} onClick={() => handleShare(link.url)} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', height: '48px', padding: '0 24px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#f0f0f5', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
                <span style={{ fontWeight: 900, fontSize: '13px' }}>{link.icon}</span>
                {link.label}
              </button>
            ))}
            <button onClick={handleCopyLink} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', height: '48px', padding: '0 24px', borderRadius: '10px', background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.25)', color: '#00ff88', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
              Copy Link
            </button>
          </div>
        </div>

        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(240,240,245,0.2)', lineHeight: 1.8, textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          This proposal represents the independent views of Anthony S. Owens. It is intended to advance public discourse on AI policy, automation economics, and wealth distribution. All figures cited are estimates based on publicly available financial transaction data.
        </p>

      </div>
    </main>
  )
}
