import { ServiceCard } from '@/components/ServiceCard'

export const metadata = {
  title: 'Book a Sprint — Vibe Software Solutions',
  description:
    'Book a sprint with VSS. Fixed-price, fixed-scope software delivered in days, not months.',
}

const featuredSprints = [
  {
    eyebrow: 'Best for MVPs',
    title: 'Product Sprint',
    price: '$12,000',
    duration: '2 weeks',
    description:
      'The complete product loop. Design, build, and ship a full feature surface for your SaaS product — everything a paying user needs to activate and retain.',
    features: [
      'Full-stack Next.js + Supabase build',
      'Stripe billing integration',
      'User dashboard + onboarding flow',
      'Mobile-responsive UI across all views',
      'Deployment to production on Vercel',
    ],
    accent: true,
    cta: 'Book This Sprint',
  },
  {
    eyebrow: 'Best for Scaling',
    title: 'Scale Sprint',
    price: '$24,000',
    duration: '4 weeks',
    description:
      'For founders past MVP. Advanced feature engineering, performance optimization, admin tooling, and a full handoff package.',
    features: [
      'Everything in Product Sprint',
      'Advanced features + integrations',
      'Analytics + error monitoring',
      'Admin panel + reporting',
      'Full technical documentation',
    ],
    accent: false,
    cta: 'Book This Sprint',
  },
]

export default function BookPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: '160px',
          paddingBottom: '100px',
          paddingLeft: '32px',
          paddingRight: '32px',
          background:
            'linear-gradient(180deg, #050508 0%, #070710 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow backdrop */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '900px',
            height: '600px',
            background:
              'radial-gradient(ellipse at 50% 20%, rgba(0,255,136,0.06) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
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
            Book a Sprint
          </span>

          <h1
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900,
              color: '#f0f0f5',
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              textTransform: 'uppercase',
            }}
          >
            Let&apos;s Build
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Something Real.
            </span>
          </h1>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              color: 'rgba(240,240,245,0.55)',
              lineHeight: 1.65,
              maxWidth: '560px',
            }}
          >
            Choose a sprint tier below or reach out directly. We respond within
            24 hours with a scoped proposal and timeline.
          </p>

          {/* How it works */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0',
              marginTop: '16px',
              borderRadius: '14px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.07)',
              width: '100%',
            }}
          >
            {[
              { step: '01', label: 'You email us' },
              { step: '02', label: 'We scope & quote' },
              { step: '03', label: 'Sprint kicks off' },
              { step: '04', label: 'You ship' },
            ].map((item, i) => (
              <div
                key={item.step}
                style={{
                  flex: '1 1 120px',
                  padding: '28px 20px',
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.02)',
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    color: '#00ff88',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.step}
                </span>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'rgba(240,240,245,0.8)',
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ─────────────────────────────────── */}
      <section
        style={{
          padding: '80px 32px 120px',
          background: '#050508',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {featuredSprints.map((sprint) => (
            <ServiceCard
              key={sprint.title}
              {...sprint}
              ctaHref={`mailto:vibesoftwaresolutions@gmail.com?subject=Booking: ${sprint.title}`}
            />
          ))}
        </div>
      </section>

      {/* ── EMAIL CTA ─────────────────────────────────────── */}
      <section
        style={{
          padding: '100px 32px 140px',
          background: 'linear-gradient(180deg, #050508 0%, #080810 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '600px',
            height: '400px',
            background:
              'radial-gradient(ellipse, rgba(0,255,136,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '640px',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '28px',
          }}
        >
          <div
            style={{
              padding: '32px 40px',
              borderRadius: '20px',
              background: 'rgba(0,255,136,0.05)',
              border: '1px solid rgba(0,255,136,0.18)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                color: '#00ff88',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              Skip the form
            </span>

            <h2
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 900,
                color: '#f0f0f5',
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
              }}
            >
              Just Send an Email.
            </h2>

            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                color: 'rgba(240,240,245,0.55)',
                lineHeight: 1.65,
              }}
            >
              Tell us what you&apos;re building, your timeline, and your budget.
              We&apos;ll come back with a scoped sprint proposal within one business day.
            </p>

            <a
              href="mailto:vibesoftwaresolutions@gmail.com?subject=Sprint Inquiry"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '54px',
                padding: '0 40px',
                background: '#00ff88',
                color: '#050508',
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 800,
                letterSpacing: '0.03em',
                textDecoration: 'none',
                borderRadius: '12px',
                boxShadow: '0 0 40px rgba(0,255,136,0.35)',
              }}
            >
              vibesoftwaresolutions@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
