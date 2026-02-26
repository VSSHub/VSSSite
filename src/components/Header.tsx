'use client'

import { useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '/#sprints', label: 'Sprints' },
  { href: '/maxxie', label: 'MaXXiE AI' },
  { href: '/manual', label: 'Manual' },
  { href: '/consult', label: 'Speaking' },
  { href: '/datasets', label: 'Datasets' },
  { href: '/ubi', label: 'AI Stipend' },
  { href: '/projects', label: 'Projects' },
  { href: '/webdesign', label: 'Web Design' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(5, 5, 8, 0.75)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(0,255,136,0.6) 50%, transparent 100%)' }} />
      <nav style={{ height: '64px', maxWidth: '1280px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <img src="/brand/vss-logo-v3.png" alt="Vibe Software Solutions" style={{ height: '200px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 0 12px rgba(0,255,136,0.35))' }} />
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }} className="vss-desktop-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgba(240,240,245,0.6)', textDecoration: 'none', letterSpacing: '0.02em' }}>{l.label}</Link>
          ))}
          <Link href="/book" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '40px', padding: '0 20px', background: '#00ff88', color: '#050508', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.03em', textDecoration: 'none', borderRadius: '8px', boxShadow: '0 0 20px rgba(0,255,136,0.25)', whiteSpace: 'nowrap' }}>Book a Sprint</Link>
        </div>

        {/* Mobile right side */}
        <div style={{ display: 'none', alignItems: 'center', gap: '12px' }} className="vss-mobile-nav">
          <Link href="/book" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '36px', padding: '0 16px', background: '#00ff88', color: '#050508', fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '0.03em', textDecoration: 'none', borderRadius: '8px', whiteSpace: 'nowrap' }}>Book</Link>
          <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#f0f0f5', fontSize: '20px', lineHeight: 1 }}>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ display: 'none', flexDirection: 'column', padding: '16px 32px 24px', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(5,5,8,0.97)' }} className="vss-mobile-menu">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500, color: 'rgba(240,240,245,0.7)', textDecoration: 'none', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{l.label}</Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .vss-desktop-nav { display: none !important; }
          .vss-mobile-nav { display: flex !important; }
          .vss-mobile-menu { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
