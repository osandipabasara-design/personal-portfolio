import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, Code2, Brain, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { technicalSkills, softSkills, certificates, education } from '../data/portfolio';

const SkillBar: React.FC<{ name: string; level: number; delay: number }> = ({
  name,
  level,
  delay,
}) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-primary)' }}>
          {name}
        </span>
        <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="page">
      <div className="glow-blob glow-blob-1" />

      {/* Header */}
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container">
          <div className="anim-fade-up-1">
            <span className="section-label">Who I Am</span>
          </div>
          <h1 className="section-title anim-fade-up-2">About Me</h1>
          <p className="section-sub anim-fade-up-3">
            A Computer Science undergraduate with a passion for data, design, and
            building technology that makes a difference.
          </p>
        </div>
      </section>

      {/* Bio + Info */}
      <section style={{ paddingBottom: 60 }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 340px',
              gap: 48,
              alignItems: 'start',
            }}
          >
            {/* Bio */}
            <div className="anim-fade-up-2">
              <div
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: 28,
                  border: '2px solid var(--accent)',
                  padding: 4,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                }}
              >
                <img
                  src="/profile.jpg"
                  alt="Osandi Randeniya"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: '50%',
                    background: 'var(--bg-card2)',
                  }}
                  onError={e => {
                    (e.target as HTMLImageElement).src =
                      'https://ui-avatars.com/api/?name=Osandi+Randeniya&background=ffb950&color=08080f&size=150';
                  }}
                />
              </div>

              <div
                style={{
                  fontSize: 17,
                  lineHeight: 1.85,
                  color: 'var(--text-secondary)',
                  fontWeight: 300,
                }}
              >
                <p style={{ marginBottom: 20 }}>
                  I'm a second-year Computer Science undergraduate at the{' '}
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                    University of Westminster
                  </span>{' '}
                  (via IIT Sri Lanka), with a strong focus on{' '}
                  <span style={{ color: 'var(--accent)' }}>data analytics</span>,
                  problem-solving, and building intuitive data-driven tools.
                </p>
                <p style={{ marginBottom: 20 }}>
                  My work spans from Python-based data systems and interactive web
                  dashboards to responsive full-stack applications. I love working at the
                  intersection of technology and insight — where raw data becomes a
                  compelling story.
                </p>
                <p>
                  I'm actively seeking a{' '}
                  <span style={{ color: 'var(--teal)', fontWeight: 500 }}>
                    Data Analyst Role
                  </span>{' '}
                  where I can apply my analytical skills, contribute to real business
                  insights, and grow in a hands-on, professional environment.
                </p>
              </div>

              {/* Contact info */}
              <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { icon: <Mail size={15} />, text: 'osandipabasara@gmail.com', href: 'mailto:osandipabasara@gmail.com' },
                  { icon: <Phone size={15} />, text: '+94 766 105451', href: 'tel:+94766105451' },
                  { icon: <MapPin size={15} />, text: 'Kandana, Sri Lanka', href: null },
                  { icon: <Github size={15} />, text: 'github.com/osandipabasara-design', href: 'https://github.com/osandipabasara-design' },
                  { icon: <Linkedin size={15} />, text: 'linkedin.com/in/osandi-randeniya', href: 'https://www.linkedin.com/in/osandi-randeniya-a59b61353' },
                ].map(({ icon, text, href }) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}>{icon}</span>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: 14,
                          color: 'var(--text-secondary)',
                          transition: 'var(--transition)',
                        }}
                        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
                        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
                      >
                        {text}
                      </a>
                    ) : (
                      <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education sidebar */}
            <div className="anim-fade-up-3">
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                  <GraduationCap size={18} style={{ color: 'var(--accent)' }} />
                  <h3 style={{ fontSize: 16, fontWeight: 700 }}>Education</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {education.map((edu, i) => (
                    <div key={i} style={{ position: 'relative', paddingLeft: 16 }}>
                      <div
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 6,
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: i === 0 ? 'var(--accent)' : 'var(--border)',
                          border: i === 0 ? 'none' : '1px solid var(--text-muted)',
                        }}
                      />
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 2 }}>
                        {edu.institution}
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 2 }}>
                        {edu.degree}
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{edu.period}</div>
                      {edu.note && (
                        <div style={{ fontSize: 11, color: 'var(--accent)', marginTop: 2 }}>{edu.note}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="card" style={{ marginTop: 20 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 14, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Languages
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  {['Sinhala', 'English'].map(lang => (
                    <span key={lang} className="badge">{lang}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="divider" style={{ margin: '0 0 60px' }} />
      </div>

      {/* Technical Skills */}
      <section style={{ paddingBottom: 60 }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <Code2 size={16} style={{ color: 'var(--accent)' }} />
            <span className="section-label" style={{ margin: 0 }}>Technical Skills</span>
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 40 }}>What I Work With</h2>

          <div className="grid-2" style={{ gap: 48 }}>
            <div>
              <div style={{ marginBottom: 20 }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24 }}>
                  Languages & Frameworks
                </h3>
                {technicalSkills.filter(s => s.category === 'language' || s.category === 'framework').map((skill, i) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 80} />
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24 }}>
                Tools & Technologies
              </h3>
              {technicalSkills.filter(s => s.category === 'tool').map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 80} />
              ))}

              <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '32px 0 24px' }}>
                Soft Skills
              </h3>
              {softSkills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 80} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech chip cloud */}
      <section style={{ paddingBottom: 60 }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'HTML5', 'CSS3', 'React', 'Node.js', 'MySQL', 'Git', 'GitHub', 'Figma', 'Machine Learning', 'Data Visualisation', 'REST APIs'].map(t => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="divider" style={{ margin: '0 0 60px' }} />
      </div>

      {/* Certificates */}
      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <Award size={16} style={{ color: 'var(--accent)' }} />
            <span className="section-label" style={{ margin: 0 }}>Achievements</span>
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 32 }}>Certificates</h2>

          <div className="grid-3">
            {certificates.map((cert, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: 'var(--accent-dim)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                  }}
                >
                  <Award size={20} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.3 }}>{cert.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{cert.issuer}</p>
                <span className="badge" style={{ alignSelf: 'flex-start' }}>{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
