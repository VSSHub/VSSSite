const projects = [
  {
    name: 'Social Majixx',
    category: 'Human Signal & Interaction Layer',
    value: 'A next-generation social intelligence platform built to capture real human interaction patterns — not just engagement metrics.',
    body: [
      'Social Majixx is designed from the ground up to understand how humans actually communicate, not just what they click. The platform captures behavioral context, communication signals, and interaction patterns across social environments to produce actionable intelligence for organizations that need to understand people at scale.',
      'Unlike conventional social platforms that optimize for engagement, Social Majixx optimizes for signal fidelity — surfacing meaningful patterns while filtering noise. AI-assisted moderation ensures that content and interaction quality remain high without requiring disproportionate human oversight.',
      'The system is built with a privacy-aware architecture. Data handling, consent frameworks, and access controls are foundational — not retrofitted. This makes Social Majixx deployable in compliance-sensitive environments including enterprise, government, and institutional contexts.',
    ],
    role: 'Human interaction and behavioral signal capture — the entry point of the Majixx intelligence pipeline.',
  },
  {
    name: 'Caseline',
    category: 'Structured Intelligence & Reasoning',
    value: 'A structured case-building and investigation platform for legal, compliance, investigative, and analytical workflows.',
    body: [
      'Caseline is a professional-grade platform for building, organizing, and reasoning through complex cases. Designed for investigators, legal teams, compliance officers, and analysts, Caseline transforms raw evidence and documentation into structured, explainable reasoning chains that hold up to scrutiny.',
      'The platform supports multi-domain analysis — pulling from documents, timelines, entities, relationships, and external data sources — and organizes them into coherent case structures. Every conclusion is traceable to its source. Every step in the reasoning process is auditable.',
      'Caseline is deployable in legal proceedings, regulatory investigations, enterprise compliance reviews, and intelligence analysis workflows. It is built for professionals who require not just answers, but defensible, documented paths to those answers.',
    ],
    role: 'Structured reasoning and evidence organization — the analytical core of the pipeline.',
  },
  {
    name: 'Maxxie Offline AI',
    category: 'Local Intelligence Node',
    value: 'A fully portable, air-gapped, local-first AI system that gives users and organizations complete ownership of their intelligence.',
    body: [
      'Maxxie Offline AI operates entirely without cloud dependency. The system runs on local hardware, processes data on-device, and produces AI-grade output in fully disconnected environments. For organizations where data sovereignty, network security, or operational continuity are non-negotiable, Maxxie Offline AI is the answer.',
      'The platform is designed for field deployment, sensitive infrastructure environments, classified workflows, and any context where data cannot leave the premises. It supports document analysis, natural language reasoning, decision support, and knowledge retrieval without a single byte transmitted externally.',
      'Maxxie Offline AI is not a stripped-down cloud product. It is a purpose-built local intelligence node, engineered to perform at full capacity in isolated environments. Users own their data, their models, and their outcomes.',
    ],
    role: 'Local, air-gapped intelligence — enabling autonomous reasoning without network infrastructure.',
  },
  {
    name: 'MaXXie AGI',
    category: 'General Intelligence Framework',
    value: 'An applied general intelligence expansion layer enabling cross-domain reasoning, long-term planning, and adaptive learning across systems.',
    body: [
      'MaXXie AGI is the general intelligence framework that connects and elevates the capabilities of every system in the Majixx pipeline. It is designed for cross-domain reasoning — the ability to take inputs from disparate systems, contexts, and data types and produce coherent, adaptive responses that improve over time.',
      'This is applied AGI. Not a theoretical construct. MaXXie AGI operates across live environments, learns from outcomes, updates its reasoning patterns, and coordinates with other Majixx systems to improve pipeline-wide performance. Long-term planning, context retention, and multi-step execution are core capabilities — not aspirational features.',
      'MaXXie AGI is appropriate for complex enterprise environments, government operations, and large-scale infrastructure deployments where no single narrow AI system is sufficient and where the cost of coordination failures is high.',
    ],
    role: 'General intelligence and adaptive reasoning — the cognitive core of the Majixx pipeline.',
  },
  {
    name: 'Inspection Majixx',
    category: 'Autonomous Physical Intelligence',
    value: 'An AI-driven inspection platform using humanoid robotics to perform building, restaurant, municipal, and safety inspections with consistency and objectivity.',
    body: [
      'Inspection Majixx replaces the variability and risk inherent in manual inspection processes with autonomous, AI-guided physical intelligence. The platform deploys humanoid robotic systems to conduct inspections across building, restaurant, municipal, and safety environments — producing consistent, documented, and objective results every time.',
      'Human inspectors are subject to fatigue, distraction, inconsistency, and personal liability in hazardous environments. Inspection Majixx eliminates these variables. Every inspection follows the same protocol, captures the same data points, and produces the same standard of documentation — regardless of location, time, or environmental conditions.',
      'The system is designed to augment and coordinate with human oversight, not replace the regulatory authority behind inspections. Results are logged, reviewable, and exportable to existing compliance and permitting workflows.',
    ],
    role: 'Autonomous physical execution — translating AI reasoning into real-world inspection and operational outcomes.',
  },
  {
    name: 'Majixx Retail AI — Exclusion Detection System',
    category: 'Retail Security & Loss Prevention Intelligence',
    value: 'An AI-powered exclusion and identity detection platform that integrates with existing retail camera systems to protect employees, reduce theft, and support lawful loss prevention workflows.',
    body: [
      'The Majixx Retail AI Exclusion Detection System is a professional-grade security intelligence platform designed for retail environments. The system integrates with existing camera infrastructure, loss prevention software, and store security workflows to identify trespassed, excluded, or wanted individuals based on lawful, retailer-provided data.',
      'When a match is detected, the system generates real-time alerts to store employees and loss prevention teams. Where legally permitted and operationally configured, the system supports optional escalation to local law enforcement. The result is faster response, better documentation, and a measurable reduction in theft, violence, and repeat offender incidents.',
      'Compliance and legal integrity are foundational to this system. The platform operates strictly within applicable local, state, and federal law. Facial recognition capabilities are not deployed without legal authorization. The system is designed for retailer safety, employee protection, and lawful enforcement cooperation — not surveillance beyond the defined operational scope.',
      'Every action taken by the system is logged. Access controls are strict. Audit trails are complete and reviewable. The platform is built to meet the standards required by legal counsel, compliance officers, and law enforcement partners.',
    ],
    role: 'Real-time visual intelligence and decision support for retail security — connecting physical environments to AI reasoning and response workflows.',
  },
  {
    name: 'MajixxClawd',
    category: 'Regenerative Multi-Agent Intelligence',
    value: 'A supervisory intelligence layer that coordinates tools, agents, and systems across the Majixx ecosystem — learning from outcomes and optimizing pipeline performance over time.',
    body: [
      'MajixxClawd operates as the supervisory layer of the Majixx intelligence pipeline. It coordinates agents, tools, and systems — directing tasks, monitoring outcomes, and redistributing workloads based on real-time performance data. It does not act autonomously without oversight. It acts intelligently within defined boundaries, with human review available at every critical decision point.',
      'The regenerative design means MajixxClawd improves continuously. It learns from the outcomes of previous actions, identifies inefficiencies across the pipeline, and adjusts its coordination strategies accordingly. Over time, the pipeline becomes faster, more accurate, and more resilient — without requiring manual reconfiguration.',
      'For enterprise and government deployments where multiple AI systems, databases, and workflows must operate in coordination, MajixxClawd is the management layer that makes the whole greater than the sum of its parts.',
    ],
    role: 'Supervisory orchestration and regenerative optimization — the management intelligence of the full Majixx pipeline.',
  },
]

const pipeline = [
  { step: '01', label: 'Human Interaction', system: 'Social Majixx' },
  { step: '02', label: 'Structured Intelligence', system: 'Caseline' },
  { step: '03', label: 'Local AI', system: 'Maxxie Offline AI' },
  { step: '04', label: 'General Intelligence', system: 'MaXXie AGI' },
  { step: '05', label: 'Physical & Operational Execution', system: 'Inspection Majixx' },
  { step: '06', label: 'Supervisory Regenerative Intelligence', system: 'MajixxClawd' },
]

export default function ProjectsPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#050508', paddingTop: '120px', paddingBottom: '140px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1000px', height: '700px', background: 'radial-gradient(ellipse at 50% 10%, rgba(0,255,136,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '96px' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Majixx — Active Systems</span>
          <h1 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.04em', lineHeight: 0.95 }}>
            Current Projects<br />
            <span style={{ background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Powering the Pipeline</span>
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px', color: 'rgba(240,240,245,0.65)', lineHeight: 1.6, maxWidth: '720px' }}>
            Deployed, piloted, and production-ready systems bridging AI reasoning, autonomy, and real-world execution.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(240,240,245,0.45)', lineHeight: 1.9, maxWidth: '700px' }}>
            Majixx operates a modular intelligence ecosystem where each project can stand alone as an independent deployment or integrate into a larger autonomous framework. Every system listed below is current — active, in pilot, or ready for production deployment. None of this is roadmap. This is what exists now.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '20px' }}>Active Systems</span>
          {projects.map((project, i) => (
            <div key={project.name} style={{ padding: '44px 40px', background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.018)', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#00ff88', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{project.category}</span>
                <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.03em', lineHeight: 1.1 }}>{project.name}</h2>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(240,240,245,0.7)', lineHeight: 1.5, fontStyle: 'italic' }}>{project.value}</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {project.body.map((para, j) => (
                  <p key={j} style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(240,240,245,0.52)', lineHeight: 1.9 }}>{para}</p>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#00ff88', letterSpacing: '0.15em', textTransform: 'uppercase', flexShrink: 0, marginTop: '2px' }}>Pipeline Role</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(240,240,245,0.45)', lineHeight: 1.6 }}>{project.role}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>How It Connects</span>
            <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.04em', lineHeight: 1.0 }}>
              The Majixx<br /><span style={{ color: 'rgba(240,240,245,0.3)' }}>Intelligence Pipeline</span>
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(240,240,245,0.45)', lineHeight: 1.8, maxWidth: '620px' }}>
              Each system operates as a discrete, deployable unit. Together, they form a sequential intelligence pipeline — from capturing human signals to executing autonomous physical tasks and supervising the entire process from above.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {pipeline.map((item, i) => (
              <div key={item.step} style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '20px 28px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.1em', flexShrink: 0 }}>{item.step}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 700, color: '#f0f0f5' }}>{item.label}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: 'rgba(0,255,136,0.6)', letterSpacing: '0.05em' }}>{item.system}</span>
                </div>
                {i < pipeline.length - 1 && (
                  <span style={{ marginLeft: 'auto', color: 'rgba(0,255,136,0.3)', fontSize: '18px' }}>↓</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '52px 48px', borderRadius: '20px', background: 'rgba(0,255,136,0.04)', border: '1px solid rgba(0,255,136,0.12)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#00ff88', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Deployment Status</span>
          <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 900, color: '#f0f0f5', letterSpacing: '-0.04em', lineHeight: 1.0 }}>
            These are not concepts.<br />
            <span style={{ color: 'rgba(240,240,245,0.35)' }}>These are current, active systems.</span>
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(240,240,245,0.5)', lineHeight: 1.9, maxWidth: '680px' }}>
            Every project on this page is deployable today as a standalone system for government, enterprise, retail, or infrastructure partners. Each has been designed to integrate cleanly with the broader Majixx pipeline when the operational context calls for it. The architecture is modular by design — because every organization's readiness and needs are different.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: 'rgba(240,240,245,0.5)', lineHeight: 1.9, maxWidth: '680px' }}>
            Together, these systems form a scalable intelligence pipeline purpose-built for the challenges of the next decade — where the speed of AI reasoning, the consistency of autonomous execution, and the integrity of human oversight must operate as a single coordinated system.
          </p>
          <div style={{ paddingTop: '8px' }}>
            <a href="/book" style={{ display: 'inline-flex', alignItems: 'center', height: '52px', padding: '0 36px', borderRadius: '12px', background: '#00ff88', color: '#050508', fontFamily: 'Inter, sans-serif', fontSize: '14px', fontWeight: 800, letterSpacing: '0.03em', textDecoration: 'none', boxShadow: '0 0 40px rgba(0,255,136,0.3)' }}>
              Book a Discovery Sprint →
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}
