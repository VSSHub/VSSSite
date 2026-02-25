export interface ServiceCardProps {
  eyebrow?: string
  title: string
  price: string
  duration: string
  description: string
  features: string[]
  accent?: boolean
  cta?: string
  ctaHref?: string
}

export function ServiceCard({
  eyebrow,
  title,
  price,
  duration,
  description,
  features,
  accent = false,
  cta = 'Book This Sprint',
  ctaHref = '/book',
}: ServiceCardProps) {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '16px',
        padding: '40px',
        background: accent
          ? 'rgba(0, 255, 136, 0.05)'
          : 'rgba(255, 255, 255, 0.04)',
        border: accent
          ? '1px solid rgba(0, 255, 136, 0.25)'
          : '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: accent
          ? '0 20px 60px rgba(0,0,0,0.6), 0 0 60px rgba(0,255,136,0.08)'
          : '0 20px 60px rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        backdropFilter: 'blur(20px)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
    >
      {/* Glow top edge on accent */}
      {accent && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '20%',
            right: '20%',
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, rgba(0,255,136,0.8), transparent)',
          }}
        />
      )}

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {eyebrow && (
          <span
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              fontWeight: 600,
              color: accent ? '#00ff88' : 'rgba(255,255,255,0.4)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            {eyebrow}
          </span>
        )}
        <h3
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '24px',
            fontWeight: 800,
            color: '#f0f0f5',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
          }}
        >
          {title}
        </h3>
      </div>

      {/* Price */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '42px',
            fontWeight: 900,
            color: accent ? '#00ff88' : '#f0f0f5',
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          {price}
        </span>
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '13px',
            color: 'rgba(240,240,245,0.4)',
            letterSpacing: '0.02em',
          }}
        >
          / {duration}
        </span>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '15px',
          lineHeight: 1.6,
          color: 'rgba(240,240,245,0.6)',
          letterSpacing: '0.01em',
        }}
      >
        {description}
      </p>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          background: accent
            ? 'rgba(0,255,136,0.12)'
            : 'rgba(255,255,255,0.06)',
        }}
      />

      {/* Features */}
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
        {features.map((feature, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              color: 'rgba(240,240,245,0.75)',
              lineHeight: 1.5,
            }}
          >
            <span
              style={{
                color: '#00ff88',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: 1,
                marginTop: '2px',
                flexShrink: 0,
              }}
            >
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={ctaHref}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '48px',
          borderRadius: '10px',
          background: accent ? '#00ff88' : 'rgba(255,255,255,0.08)',
          color: accent ? '#050508' : '#f0f0f5',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '0.03em',
          textDecoration: 'none',
          border: accent ? 'none' : '1px solid rgba(255,255,255,0.12)',
          boxShadow: accent ? '0 0 30px rgba(0,255,136,0.3)' : 'none',
          marginTop: 'auto',
          transition: 'opacity 0.2s',
        }}
      >
        {cta}
      </a>
    </div>
  )
}
