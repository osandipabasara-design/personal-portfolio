import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        background: 'rgba(8, 8, 15, 0.8)',
        backdropFilter: 'blur(10px)',
        padding: '40px 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 20,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 18,
              fontWeight: 800,
              marginBottom: 6,
              letterSpacing: '-0.02em',
            }}
          >
            Osandi<span style={{ color: 'var(--accent)' }}>.</span>
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Osandi Randeniya · Built with React & TypeScript
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {[
            { icon: <Github size={17} />, href: 'https://github.com/osandipabasara-design' },
            { icon: <Linkedin size={17} />, href: 'https://www.linkedin.com/in/osandi-randeniya-a59b61353' },
            { icon: <Mail size={17} />, href: 'mailto:osandipabasara@gmail.com' },
          ].map(({ icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-muted)',
                transition: 'var(--transition)',
                display: 'flex',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
            >
              {icon}
            </a>
          ))}
        </div>

        <nav style={{ display: 'flex', gap: 20 }}>
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/projects', label: 'Projects' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                fontSize: 13,
                color: 'var(--text-muted)',
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
