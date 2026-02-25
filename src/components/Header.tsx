'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(5, 5, 8, 0.75)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent 0%, rgba(0,255,136,0.6) 50%, transparent 100%)' }} />
      <nav style={{ height: '64px', maxWidth: '1280px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <img 
  src="/brand/vss-logo-v2.png" 
  alt="Vibe Software Solutions" 
  style={{ height: '375px', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 0 12px rgba(0,255,136,0.35))' }} 
/></Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Link href="/#sprints" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgba(240,240,245,0.6)', textDecoration: 'none', letterSpacing: '0.02em' }}>Sprints</Link>
          <Link href="/manual" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgba(240,240,245,0.6)', textDecoration: 'none', letterSpacing: '0.02em' }}>Manual</Link>
          <Link href="/consult" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgba(240,240,245,0.6)', textDecoration: 'none', letterSpacing: '0.02em' }}>Speaking</Link>
          <Link href="/datasets" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgba(240,240,245,0.6)', textDecoration: 'none', letterSpacing: '0.02em' }}>Datasets</Link>
          <Link href="/ubi" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgba(240,240,245,0.6)', textDecoration: 'none', letterSpacing: '0.02em' }}>AI Stipend</Link>
          <Link href="/projects" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgba(240,240,245,0.6)', textDecoration: 'none', letterSpacing: '0.02em' }}>Projects</Link>
          <Link href="/webdesign" style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500, color: 'rgba(240,240,245,0.6)', textDecoration: 'none', letterSpacing: '0.02em' }}>Web Design</Link>
          <Link href="/book" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '40px', padding: '0 20px', background: '#00ff88', color: '#050508', fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '0.03em', textDecoration: 'none', borderRadius: '8px', boxShadow: '0 0 20px rgba(0,255,136,0.25)', whiteSpace: 'nowrap' }}>Book a Sprint</Link>
        </div>
      </nav>
    </header>
  )
}
