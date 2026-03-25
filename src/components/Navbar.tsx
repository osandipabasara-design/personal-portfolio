import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none' }}>
      <span className="nav-logo">
        OR<span>.</span>
      </span>

      <ul className={`nav-links${open ? ' open' : ''}`}>
        {[
          { to: '/', label: 'Home' },
          { to: '/about', label: 'About' },
          { to: '/projects', label: 'Projects' },
          { to: '/contact', label: 'Contact' },
        ].map(({ to, label }) => (
          <li key={to}>
            <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </nav>
  );
};

export default Navbar;
