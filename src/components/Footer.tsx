export default function Footer() {
  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 10,
        background: 'rgba(5, 5, 8, 0.9)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background:
            'linear-gradient(90deg, transparent 0%, rgba(0,255,136,0.3) 50%, transparent 100%)',
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '60px 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '12px',
            fontWeight: 700,
            color: '#00ff88',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          VSS
        </span>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            color: 'rgba(240,240,245,0.7)',
            letterSpacing: '0.02em',
          }}
        >
          Vibe Software Solutions
        </p>

        <a
          href="mailto:vibesoftwaresolutions@gmail.com"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            color: 'rgba(0,255,136,0.7)',
            textDecoration: 'none',
            letterSpacing: '0.02em',
            transition: 'color 0.2s',
          }}
        >
          vibesoftwaresolutions@gmail.com
        </a>

        <div
          style={{
            width: '40px',
            height: '1px',
            background: 'rgba(255,255,255,0.1)',
            margin: '4px 0',
          }}
        />

        <p
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            color: 'rgba(255,255,255,0.2)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Built by VSS — {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
