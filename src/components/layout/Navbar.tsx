import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navLinks = [
  { path: '/', label: 'Главная' },
  { path: '/stories', label: 'Рассказы' },
  { path: '/categories', label: 'Категории' },
  { path: '/recommendations', label: 'Рекомендации' },
  { path: '/about', label: 'Об авторе' },
  { path: '/guestbook', label: 'Гостевая книга' },
  { path: '/contacts', label: 'Контакты' },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--parchment)] shadow-sm border-b border-[var(--divider)]'
            : 'bg-[var(--parchment)]/95 border-b border-[var(--divider)]'
        }`}
      >
        {/* Top decorative line */}
        <div className="h-[3px] bg-gradient-to-r from-transparent via-[var(--sepia)] to-transparent" />

        <div className="max-w-5xl mx-auto px-6 py-4">
          {/* Site title */}
          <div className="text-center mb-3">
            <Link to="/" className="inline-block">
              <h1 className="font-literary text-3xl tracking-widest text-[var(--sepia-dark)] uppercase" style={{ letterSpacing: '0.2em' }}>
                Литературный Мир
              </h1>
              <p className="font-ui text-[10px] tracking-[0.35em] text-[var(--warm-gray)] uppercase mt-0.5">
                Рассказы и Проза
              </p>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center justify-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-ui text-[11px] tracking-[0.2em] uppercase transition-colors hover-underline ${
                  location.pathname === link.path
                    ? 'text-[var(--sepia)] font-normal'
                    : 'text-[var(--warm-gray)] hover:text-[var(--sepia)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[var(--warm-gray)] hover:text-[var(--sepia)] transition-colors"
            >
              <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
            </button>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--divider)] to-transparent" />

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[var(--parchment)] border-t border-[var(--divider)] px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2.5 font-ui text-[11px] tracking-[0.2em] uppercase border-b border-[var(--divider)]/40 last:border-0 ${
                  location.pathname === link.path
                    ? 'text-[var(--sepia)]'
                    : 'text-[var(--warm-gray)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-[130px] md:h-[140px]" />
    </>
  );
}
