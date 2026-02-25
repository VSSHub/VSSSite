import { ServiceCard } from '@/components/ServiceCard'

const sprints = [
  {
    eyebrow: 'Tier 01',
    title: 'Foundation Sprint',
    price: '$4,500',
    duration: '1 week',
    description:
      'Rapid deployment of your core product scaffold. Architecture, auth, database schema, and deployment pipeline — production-ready from day one.',
    features: [
      'Full-stack Next.js + Supabase scaffold',
      'Authentication system (email + OAuth)',
      'Database schema + migrations',
      'CI/CD pipeline on Vercel',
      'Design system foundation',
    ],
    accent: false,
    cta: 'Start Here',
  },
  {
    eyebrow: 'Tier 02 — Most Popular',
    title: 'Product Sprint',
    price: '$12,000',
    duration: '2 weeks',
    description:
      'The full product loop. We design, build, and ship a complete feature surface for your SaaS — everything a paying user needs to activate.',
    features: [
      'Everything in Foundation',
      'Full product UI across 8–12 views',
      'Billing integration (Stripe)',
      'User dashboard + onboarding',
      'API routes + data layer',
      'Mobile-responsive — zero compromise',
    ],
    accent: true,
    cta: 'Book Product Sprint',
  },
  {
    eyebrow: 'Tier 03',
    title: 'Scale Sprint',
    price: '$24,000',
    duration: '4 weeks',
    description:
      'For founders scaling past MVP. We optimize, extend, and fortify — advanced features, performance engineering, and team handoff.',
    features: [
      'Everything in Product',
      'Advanced feature development',
      'Performance optimization',
      'Analytics + telemetry integration',
      'Admin panel + internal tooling',
      'Full technical documentation',
    ],
    accent: false,
    cta: 'Book Scale Sprint',
  },
  {
    eyebrow: 'Tier 04',
    title: 'Studio Retainer',
    price: '$8,000',
    duration: 'month',
    description:
      'Your engineering team on demand. We become an embedded part of your operation — shipping continuously, maintaining velocity, building with intention.',
    features: [
      'Dedicated sprint allocation each month',
      'Async daily updates',
      'Priority response time',
      'Architecture advisory',
      'Unlimited revision cycles',
      'Cancel any time',
    ],
    accent: false,
    cta: 'Inquire About Retainer',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src="/brand/vvs-bgvid.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay layers */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background:
              'linear-gradient(to bottom, rgba(5,5,8,0.5) 0%, rgba(5,5,8,0.7) 60%, rgba(5,5,8,1) 100%)',
          }}
        />

        {/* Radial green glow depth */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            background:
              'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,255,136,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            maxWidth: '1100px',
            padding: '0 32px',
            paddingTop: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 18px',
              borderRadius: '999px',
              background: 'rgba(0,255,136,0.08)',
              border: '1px solid rgba(0,255,136,0.2)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#00ff88',
                boxShadow: '0 0 8px rgba(0,255,136,1)',
              }}
            />
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                fontWeight: 600,
                color: '#00ff88',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              Elite Software Engineering
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(52px, 9vw, 108px)',
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              color: '#f0f0f5',
              textTransform: 'uppercase',
              textShadow: '0 0 80px rgba(0,255,136,0.1)',
            }}
          >
            We Build
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Serious
            </span>
            <br />
            Software.
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(16px, 2vw, 22px)',
              fontWeight: 400,
              color: 'rgba(240,240,245,0.6)',
              lineHeight: 1.55,
              maxWidth: '600px',
              letterSpacing: '0.01em',
            }}
          >
            Sprint-based product engineering for founders who can&apos;t afford to ship average.
            We move fast, build right, and deliver products that look funded.
          </p>

          {/* CTA row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              marginTop: '8px',
            }}
          >
            <a
              href="/book"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '56px',
                padding: '0 36px',
                background: '#00ff88',
                color: '#050508',
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 800,
                letterSpacing: '0.03em',
                textDecoration: 'none',
                borderRadius: '12px',
                boxShadow: '0 0 40px rgba(0,255,136,0.4), 0 8px 20px rgba(0,0,0,0.4)',
              }}
            >
              Book a Sprint →
            </a>
            <a
              href="#sprints"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '56px',
                padding: '0 36px',
                background: 'rgba(255,255,255,0.06)',
                color: 'rgba(240,240,245,0.85)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '15px',
                fontWeight: 600,
                letterSpacing: '0.02em',
                textDecoration: 'none',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              View Sprint Tiers
            </a>
          </div>

          {/* Metrics row */}
          <div
            style={{
              display: 'flex',
              gap: '48px',
              marginTop: '24px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {[
              { value: '48h', label: 'First commit' },
              { value: '100%', label: 'Remote' },
              { value: '7d', label: 'Average delivery' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '4px' }}
              >
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '28px',
                    fontWeight: 900,
                    color: '#00ff88',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px',
                    color: 'rgba(240,240,245,0.4)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '200px',
            background: 'linear-gradient(to bottom, transparent, #050508)',
            zIndex: 3,
          }}
        />
      </section>

      {/* ── SPRINT CARDS ──────────────────────────────────────── */}
      <section
        id="sprints"
        style={{
          position: 'relative',
          padding: '120px 32px',
          background: '#050508',
        }}
      >
        {/* Section radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '400px',
            background: 'radial-gradient(ellipse at 50% 0%, rgba(0,255,136,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '80px',
          }}
        >
          {/* Section header */}
          <div
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxWidth: '640px',
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
              Sprint Tiers
            </span>
            <h2
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 900,
                color: '#f0f0f5',
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
              }}
            >
              Pick Your Tier.
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, rgba(240,240,245,0.5), rgba(240,240,245,0.25))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                We Handle the Rest.
              </span>
            </h2>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '17px',
                color: 'rgba(240,240,245,0.5)',
                lineHeight: 1.6,
              }}
            >
              Every sprint is fixed-scope, fixed-price, and built to ship.
              No agency padding. No billable hour games.
            </p>
          </div>

          {/* Cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              width: '100%',
            }}
          >
            {sprints.map((sprint) => (
              <ServiceCard key={sprint.title} {...sprint} ctaHref="/book" />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY VSS ───────────────────────────────────────────── */}
      <section
        style={{
          padding: '120px 32px',
          background: 'linear-gradient(180deg, #050508 0%, #080810 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '80px',
          }}
        >
          {/* Headline */}
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                color: '#00ff88',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              The VSS Standard
            </span>
            <h2
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(34px, 5vw, 56px)',
                fontWeight: 900,
                color: '#f0f0f5',
                letterSpacing: '-0.04em',
                lineHeight: 1.0,
              }}
            >
              Built to Look Funded.
              <br />
              Engineered to Scale.
            </h2>
          </div>

          {/* Grid of principles */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2px',
              width: '100%',
            }}
          >
            {[
              {
                icon: '◈',
                title: 'No Bloated Agencies',
                body: 'You work directly with the builder. No account manager, no overhead, no excuses.',
              },
              {
                icon: '◈',
                title: 'Deterministic Delivery',
                body: 'Fixed scope, fixed timeline, fixed price. You know what ships before we start.',
              },
              {
                icon: '◈',
                title: 'Premium Engineering',
                body: 'TypeScript, tested, documented. The kind of codebase that doesn\'t embarrass you in due diligence.',
              },
              {
                icon: '◈',
                title: 'Design That Converts',
                body: 'Dark glass, cinematic motion, strong hierarchy. Built to make competitors feel behind.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: '40px 32px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '20px',
                    color: '#00ff88',
                  }}
                >
                  {item.icon}
                </span>
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    fontWeight: 800,
                    color: '#f0f0f5',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(240,240,245,0.55)',
                    lineHeight: 1.65,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section
        style={{
          padding: '160px 32px',
          position: 'relative',
          overflow: 'hidden',
          background: '#050508',
        }}
      >
        {/* Radial glow bg */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '700px',
            height: '500px',
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(0,255,136,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
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
            Ready to Build?
          </span>
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(42px, 7vw, 80px)',
              fontWeight: 900,
              color: '#f0f0f5',
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              textTransform: 'uppercase',
            }}
          >
            Your Product
            <br />
            Starts Now.
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              color: 'rgba(240,240,245,0.5)',
              lineHeight: 1.6,
              maxWidth: '520px',
            }}
          >
            One email. One sprint. One product that ships.
            Book your discovery call and we&apos;ll have a plan back to you within 24 hours.
          </p>
          <a
            href="/book"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '60px',
              padding: '0 48px',
              background: '#00ff88',
              color: '#050508',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 800,
              letterSpacing: '0.03em',
              textDecoration: 'none',
              borderRadius: '14px',
              boxShadow:
                '0 0 60px rgba(0,255,136,0.4), 0 8px 32px rgba(0,0,0,0.5)',
              marginTop: '8px',
            }}
          >
            Book a Sprint →
          </a>
        </div>
      </section>
    </>
  )
}
