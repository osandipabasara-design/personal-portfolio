import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="page" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Ambient blobs */}
      <div className="glow-blob glow-blob-1" />
      <div className="glow-blob glow-blob-2" />

      {/* Dot grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Hero */}
      <section
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: 720 }}>
            {/* Status badge */}
            <div className="anim-fade-up-1" style={{ marginBottom: 32 }}>
              <span
                className="badge"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 16px',
                  fontSize: 13,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#4ecdc4',
                    animation: 'pulse-glow 2s infinite',
                    flexShrink: 0,
                  }}
                />
                Open to Internship Opportunities
              </span>
            </div>

            {/* Name */}
            <h1
              className="anim-fade-up-2"
              style={{
                fontSize: 'clamp(48px, 8vw, 88px)',
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
                marginBottom: 24,
                color: 'var(--text-primary)',
              }}
            >
              Osandi
              <br />
              <span style={{ color: 'var(--accent)' }}>Randeniya</span>
            </h1>

            {/* Role */}
            <p
              className="anim-fade-up-3"
              style={{
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                color: 'var(--text-secondary)',
                marginBottom: 16,
                fontWeight: 300,
                letterSpacing: '0.01em',
              }}
            >
              Data Analyst Intern &nbsp;·&nbsp; BSc Computer Science Undergraduate
              <br />
              <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>
                University of Westminster via IIT Sri Lanka
              </span>
            </p>

            {/* Bio excerpt */}
            <p
              className="anim-fade-up-3"
              style={{
                fontSize: 16,
                color: 'var(--text-secondary)',
                maxWidth: 540,
                lineHeight: 1.75,
                marginBottom: 40,
                fontWeight: 300,
              }}
            >
              I turn data into insight. Passionate about analytics, visualisation, and
              building tools that make information meaningful — one clean dataset at a time.
            </p>

            {/* CTA buttons */}
            <div
              className="anim-fade-up-4"
              style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}
            >
              <Link to="/projects" className="btn btn-primary">
                View Projects <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Get in Touch
              </Link>
            </div>

            {/* Social links */}
            <div
              className="anim-fade-up-4"
              style={{ display: 'flex', gap: 20, alignItems: 'center' }}
            >
              {[
                {
                  icon: <Github size={18} />,
                  href: 'https://github.com/osandipabasara-design',
                  label: 'GitHub',
                },
                {
                  icon: <Linkedin size={18} />,
                  href: 'https://www.linkedin.com/in/osandi-randeniya-a59b61353',
                  label: 'LinkedIn',
                },
                {
                  icon: <Mail size={18} />,
                  href: 'mailto:osandipabasara@gmail.com',
                  label: 'Email',
                },
              ].map(({ icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 7,
                    color: 'var(--text-muted)',
                    fontSize: 13,
                    fontWeight: 500,
                    transition: 'var(--transition)',
                    letterSpacing: '0.02em',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      'var(--text-muted)';
                  }}
                >
                  {icon} {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scroll hint */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          color: 'var(--text-muted)',
          fontSize: 11,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          animation: 'fadeIn 1s 1s ease both',
          zIndex: 1,
        }}
      >
        <span>Scroll</span>
        <ChevronDown size={16} style={{ animation: 'fadeUp 1s 1s ease infinite alternate' }} />
      </div>

      {/* Stats strip */}
      <section
        style={{
          position: 'relative',
          zIndex: 1,
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          padding: '40px 0',
          background: 'rgba(15,15,26,0.6)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: 32,
              textAlign: 'center',
            }}
          >
            {[
              { num: '4+', label: 'Projects Built' },
              { num: '6+', label: 'Tech Skills' },
              { num: '3', label: 'Certificates' },
              { num: '2nd', label: 'Year CS Student' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 38,
                    fontWeight: 800,
                    color: 'var(--accent)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 500,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
