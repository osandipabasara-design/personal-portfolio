import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ContactForm } from '../types';
const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          // Replace this key with the one sent to you by Web3Forms
          access_key: '25ae753d-63c9-4ce6-81ca-63596fe0050d',
          name: form.name,
          email: form.email,
          subject: form.subject || 'New message from Portfolio',
          message: form.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div className="page">
      <div className="glow-blob glow-blob-1" />

      {/* Header */}
      <section className="section" style={{ paddingBottom: 48 }}>
        <div className="container">
          <span className="section-label anim-fade-up-1">Let's Connect</span>
          <h1 className="section-title anim-fade-up-2">Get in Touch</h1>
          <p className="section-sub anim-fade-up-3">
            Open to general opportunities, collaborations, and conversations. Reach
            out — I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          <div className="page-grid">
            {/* Form */}
            <div className="card anim-fade-up-2 contact-card">
              <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 32 }}>
                Send a Message
              </h2>

              <div className="grid-2" style={{ gap: 16, marginBottom: 0 }}>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    className="form-input"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  className="form-input"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Career opportunity, collaboration..."
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  className="form-textarea"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity or what you'd like to discuss..."
                  rows={6}
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '14px 18px',
                    borderRadius: 10,
                    background: 'rgba(78, 205, 196, 0.1)',
                    border: '1px solid rgba(78, 205, 196, 0.25)',
                    color: 'var(--teal)',
                    fontSize: 14,
                    marginBottom: 20,
                  }}
                >
                  <CheckCircle size={16} />
                  Message sent! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '14px 18px',
                    borderRadius: 10,
                    background: 'rgba(255, 80, 80, 0.1)',
                    border: '1px solid rgba(255, 80, 80, 0.25)',
                    color: '#ff6b6b',
                    fontSize: 14,
                    marginBottom: 20,
                  }}
                >
                  <AlertCircle size={16} />
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                className="btn btn-primary"
                onClick={handleSubmit}
                disabled={status === 'sending'}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  opacity: status === 'sending' ? 0.7 : 1,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                }}
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <Send size={15} />
                  </>
                )}
              </button>
            </div>

            {/* Sidebar info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* Direct contacts */}
              <div className="card anim-fade-up-3">
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 24 }}>
                  Direct Contact
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {[
                    {
                      icon: <Mail size={18} />,
                      label: 'Email',
                      value: 'osandipabasara@gmail.com',
                      href: 'mailto:osandipabasara@gmail.com',
                    },
                    {
                      icon: <Phone size={18} />,
                      label: 'Phone',
                      value: '+94 766 105451',
                      href: 'tel:+94766105451',
                    },
                    {
                      icon: <MapPin size={18} />,
                      label: 'Location',
                      value: 'Kandana, Sri Lanka',
                      href: null,
                    },
                  ].map(({ icon, label, value, href }) => (
                    <div key={label} style={{ display: 'flex', gap: 14 }}>
                      <div
                        style={{
                          width: 38,
                          height: 38,
                          borderRadius: 10,
                          background: 'var(--accent-dim)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent)',
                          flexShrink: 0,
                        }}
                      >
                        {icon}
                      </div>
                      <div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 3, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                          {label}
                        </div>
                        {href ? (
                          <a
                            href={href}
                            style={{ fontSize: 14, color: 'var(--text-secondary)', transition: 'var(--transition)' }}
                            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--accent)')}
                            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
                          >
                            {value}
                          </a>
                        ) : (
                          <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="card anim-fade-up-4">
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20 }}>
                  Connect Online
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    {
                      icon: <Github size={16} />,
                      label: 'GitHub',
                      value: 'https://github.com/osandipabasara-design',
                      href: 'https://github.com/osandipabasara-design',
                    },
                    {
                      icon: <Linkedin size={16} />,
                      label: 'LinkedIn',
                      value: 'https://www.linkedin.com/in/osandi-randeniya-a59b61353',
                      href: 'https://www.linkedin.com/in/osandi-randeniya-a59b61353',
                    },
                  ].map(({ icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: '12px 14px',
                        borderRadius: 10,
                        background: 'var(--bg-card2)',
                        border: '1px solid var(--border)',
                        transition: 'var(--transition)',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                        (e.currentTarget as HTMLElement).style.background = 'var(--accent-dim)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                        (e.currentTarget as HTMLElement).style.background = 'var(--bg-card2)';
                      }}
                    >
                      <span style={{ color: 'var(--accent)' }}>{icon}</span>
                      <div>
                        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 1 }}>{label}</div>
                        <div style={{ fontSize: 13, color: 'var(--text-primary)', fontWeight: 500, wordBreak: 'break-all' }}>{value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
