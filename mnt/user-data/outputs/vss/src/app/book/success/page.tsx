import Link from 'next/link'

export const metadata = {
  title: 'Booking Confirmed — Vibe Software Solutions',
  description: 'Your sprint inquiry has been received. We\'ll be in touch within 24 hours.',
}

export default function BookSuccessPage() {
  return (
    <section
      style={{
        minHeight: '100vh',
        paddingTop: '160px',
        paddingBottom: '120px',
        paddingLeft: '32px',
        paddingRight: '32px',
        background: '#050508',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '700px',
          height: '700px',
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(0,255,136,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Ring decoration */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          border: '1px solid rgba(0,255,136,0.06)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          border: '1px solid rgba(0,255,136,0.03)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '640px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            background: 'rgba(0,255,136,0.1)',
            border: '1px solid rgba(0,255,136,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '30px',
            boxShadow: '0 0 40px rgba(0,255,136,0.2)',
          }}
        >
          ✓
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              fontWeight: 600,
              color: '#00ff88',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            Message Received
          </span>

          <h1
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(40px, 6vw, 68px)',
              fontWeight: 900,
              color: '#f0f0f5',
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              textTransform: 'uppercase',
            }}
          >
            We&apos;re On It.
          </h1>
        </div>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            color: 'rgba(240,240,245,0.55)',
            lineHeight: 1.65,
          }}
        >
          Your sprint inquiry is in our inbox. We&apos;ll review your project and respond with
          a scoped proposal within{' '}
          <span style={{ color: '#00ff88', fontWeight: 600 }}>one business day</span>.
        </p>

        {/* Info block */}
        <div
          style={{
            width: '100%',
            padding: '32px',
            borderRadius: '16px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            textAlign: 'left',
          }}
        >
          {[
            { label: 'Next step', value: 'We review and scope your request' },
            { label: 'Timeline', value: 'Response within 1 business day' },
            { label: 'Questions?', value: 'vibesoftwaresolutions@gmail.com' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.3)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  flexShrink: 0,
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: 'rgba(240,240,245,0.75)',
                  textAlign: 'right',
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href="mailto:vibesoftwaresolutions@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '48px',
              padding: '0 28px',
              background: '#00ff88',
              color: '#050508',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 700,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              borderRadius: '10px',
              boxShadow: '0 0 30px rgba(0,255,136,0.3)',
            }}
          >
            Send an Email
          </a>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '48px',
              padding: '0 28px',
              background: 'rgba(255,255,255,0.06)',
              color: 'rgba(240,240,245,0.8)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            ← Back Home
          </Link>
        </div>
      </div>
    </section>
  )
}
