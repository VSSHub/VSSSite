import { createClient } from '@supabase/supabase-js'

interface PageProps {
  searchParams: Promise<{ session_id?: string }>
}

export default async function ManualSuccessPage({ searchParams }: PageProps) {
  const params = await searchParams
  const sessionId = params.session_id

  let downloadToken: string | null = null
  let error: string | null = null

  if (!sessionId) {
    error = 'No session found.'
  } else {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { data } = await supabase
      .from('book_purchases')
      .select('download_token, expires_at')
      .eq('stripe_session_id', sessionId)
      .single()

    if (data) {
      downloadToken = data.download_token
    } else {
      // Webhook may still be processing — token not in DB yet
      error = 'processing'
    }
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#050508',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 32px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '700px',
          background:
            'radial-gradient(ellipse at center, rgba(0,255,136,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '560px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {error !== 'processing' && !downloadToken ? (
          /* Error state */
          <>
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(255,80,80,0.1)',
                border: '1px solid rgba(255,80,80,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
              }}
            >
              ✕
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h1
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '36px',
                  fontWeight: 900,
                  color: '#f0f0f5',
                  letterSpacing: '-0.04em',
                }}
              >
                Something went wrong.
              </h1>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(240,240,245,0.5)', lineHeight: 1.6 }}>
                Email us at{' '}
                <a
                  href="mailto:vibesoftwaresolutions@gmail.com"
                  style={{ color: '#00ff88', textDecoration: 'none' }}
                >
                  vibesoftwaresolutions@gmail.com
                </a>{' '}
                and we&apos;ll get your download sorted within the hour.
              </p>
            </div>
          </>
        ) : error === 'processing' ? (
          /* Still processing state */
          <>
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(0,255,136,0.08)',
                border: '1px solid rgba(0,255,136,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
              }}
            >
              ◌
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h1
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '36px',
                  fontWeight: 900,
                  color: '#f0f0f5',
                  letterSpacing: '-0.04em',
                }}
              >
                Payment received.
              </h1>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(240,240,245,0.5)', lineHeight: 1.6 }}>
                Your download link is being prepared — refresh this page in 10 seconds. If it&apos;s still not ready, check your email or contact{' '}
                <a href="mailto:vibesoftwaresolutions@gmail.com" style={{ color: '#00ff88', textDecoration: 'none' }}>
                  vibesoftwaresolutions@gmail.com
                </a>.
              </p>
            </div>
          </>
        ) : (
          /* Success + download state */
          <>
            {/* Check icon */}
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
                fontSize: '28px',
                color: '#00ff88',
              }}
            >
              ✓
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  color: '#00ff88',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
              >
                Payment Confirmed
              </span>
              <h1
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(32px, 5vw, 52px)',
                  fontWeight: 900,
                  color: '#f0f0f5',
                  letterSpacing: '-0.04em',
                  lineHeight: 1.0,
                }}
              >
                You&apos;re Good.
                <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Let&apos;s Build.
                </span>
              </h1>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  color: 'rgba(240,240,245,0.5)',
                  lineHeight: 1.6,
                }}
              >
                The Vibe Coding Manual is yours. Download link is valid for 72 hours — save the PDF somewhere permanent.
              </p>
            </div>

            {/* Download button */}
            <a
              href={`/api/download?token=${downloadToken}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                height: '60px',
                padding: '0 48px',
                borderRadius: '14px',
                background: '#00ff88',
                color: '#050508',
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 800,
                letterSpacing: '0.03em',
                textDecoration: 'none',
                boxShadow: '0 0 60px rgba(0,255,136,0.4)',
              }}
            >
              ↓ Download the Manual
            </a>

            <p
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                color: 'rgba(240,240,245,0.2)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              PDF · expires in 72 hours · re-download anytime during that window
            </p>

            <a
              href="/"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                color: 'rgba(240,240,245,0.35)',
                textDecoration: 'none',
              }}
            >
              ← Back to VSS
            </a>
          </>
        )}
      </div>
    </main>
  )
}
