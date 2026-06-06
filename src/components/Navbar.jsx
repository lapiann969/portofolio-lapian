import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const links = [
    { to: '/', label: 'Beranda' },
    { to: '/project', label: 'Proyek' },
    { to: '/experience', label: 'Pengalaman' },
    { to: '/about', label: 'Tentang Saya' },
  ];

  const navStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 32px',
    background: scrolled ? '#fff' : '#fff',
    borderBottom: `1px solid ${scrolled ? '#d0d0d0' : '#e0e0e0'}`,
    boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.08)' : 'none',
    transition: 'box-shadow 0.3s, border-color 0.3s',
  };

  return (
    <>
      <nav style={navStyle}>
        {/* Logo / nama */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px', height: '36px',
            background: 'var(--biru)',
            borderRadius: '6px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: '700', fontSize: '1rem',
          }}>
            P
          </div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--hitam)', lineHeight: 1.2 }}>
              Portofolio Saya
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--abu-tua)', lineHeight: 1.2 }}>
              SMK Negeri 1 Purbalingga
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          {links.map(link => {
            const aktif = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  padding: '6px 16px',
                  borderRadius: '5px',
                  fontSize: '0.9rem',
                  fontWeight: aktif ? '600' : '400',
                  color: aktif ? 'var(--biru)' : 'var(--hitam-soft)',
                  background: aktif ? 'var(--biru-bg)' : 'transparent',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => {
                  if (!aktif) {
                    e.currentTarget.style.background = 'var(--abu-terang)';
                    e.currentTarget.style.color = 'var(--hitam)';
                  }
                }}
                onMouseLeave={e => {
                  if (!aktif) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--hitam-soft)';
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Status kecil */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          fontSize: '0.8rem', color: 'var(--hijau)',
          fontWeight: '500',
        }}>
          <div style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: 'var(--hijau)',
            animation: 'blink 2.5s infinite',
          }} />
          Open to Work
        </div>
      </nav>

      {/* Mobile menu button (simpel aja) */}
    </>
  );
}

export default Navbar;
