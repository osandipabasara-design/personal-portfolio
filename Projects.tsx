import React, { useState } from 'react';
import { ExternalLink, Github, Users, User, Star } from 'lucide-react';
import { projects } from '../data/portfolio';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <div
      className="card"
      style={{
        animationDelay: `${index * 0.1}s`,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        position: 'relative',
      }}
    >
      {/* Highlight star */}
      {project.highlight && (
        <div
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            color: 'var(--accent)',
          }}
        >
          <Star size={16} fill="currentColor" />
        </div>
      )}

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: project.type === 'group' ? 'var(--teal-dim)' : 'var(--accent-dim)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: project.type === 'group' ? 'var(--teal)' : 'var(--accent)',
            flexShrink: 0,
          }}
        >
          {project.type === 'group' ? <Users size={20} /> : <User size={20} />}
        </div>
        <div>
          <h3 style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.3, marginBottom: 4 }}>
            {project.title}
          </h3>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <span className={`badge ${project.type === 'group' ? 'badge-teal' : ''}`}>
              {project.type === 'group' ? 'Group' : 'Individual'}
            </span>
            <span style={{ fontSize: 12, color: 'var(--text-muted)', alignSelf: 'center' }}>
              {project.period}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 300 }}>
        {project.description}
      </p>

      {/* Features */}
      {project.features && (
        <ul style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingLeft: 0, listStyle: 'none' }}>
          {project.features.map(f => (
            <li key={f} style={{ fontSize: 13, color: 'var(--text-muted)', display: 'flex', gap: 8 }}>
              <span style={{ color: 'var(--accent)', marginTop: 1 }}>→</span>
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
        {project.technologies.map(tech => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>

      {/* Links */}
      {(project.github || project.live) && (
        <div style={{ display: 'flex', gap: 12, paddingTop: 8, borderTop: '1px solid var(--border)' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 13,
                color: 'var(--text-muted)',
                transition: 'var(--transition)',
                fontWeight: 500,
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
            >
              <Github size={14} /> GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 13,
                color: 'var(--accent)',
                transition: 'var(--transition)',
                fontWeight: 500,
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#ffc870')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'individual' | 'group'>('all');

  const filtered =
    filter === 'all' ? projects : projects.filter(p => p.type === filter);

  return (
    <div className="page">
      <div className="glow-blob glow-blob-2" />

      {/* Header */}
      <section className="section" style={{ paddingBottom: 48 }}>
        <div className="container">
          <span className="section-label anim-fade-up-1">Portfolio</span>
          <h1 className="section-title anim-fade-up-2">Projects</h1>
          <p className="section-sub anim-fade-up-3">
            A collection of projects built across data analytics, web development, and
            software engineering — each one a new problem solved.
          </p>

          {/* Filter tabs */}
          <div
            className="anim-fade-up-4"
            style={{
              display: 'inline-flex',
              gap: 4,
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: 4,
              marginTop: 32,
            }}
          >
            {(['all', 'individual', 'group'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '8px 20px',
                  borderRadius: 9,
                  border: 'none',
                  fontSize: 13,
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  fontFamily: 'var(--font-body)',
                  textTransform: 'capitalize',
                  background: filter === f ? 'var(--accent)' : 'transparent',
                  color: filter === f ? '#08080f' : 'var(--text-secondary)',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          <div className="grid-2">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
              No projects found.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
