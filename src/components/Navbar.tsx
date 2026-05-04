import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TreePine } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { name: 'Naslovna', path: '/' },
  { name: 'O nama', path: '/o-nama' },
  { name: 'Proizvodi', path: '/proizvodi' },
  { name: 'Sastojci', path: '/sastojci' },
  { name: 'Recenzije', path: '/recenzije' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Kontakt', path: '/kontakt' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-warm-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <TreePine className="text-forest w-8 h-8 group-hover:scale-110 transition-transform" />
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-forest leading-none">SMOLOVIT</span>
            <span className="text-[10px] uppercase tracking-widest text-forest/70 font-medium">Priroda izliječi</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide transition-colors hover:text-resin px-1 relative',
                location.pathname === link.path ? 'text-forest' : 'text-forest/70'
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-resin"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-forest"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-warm-white"
      >
        <div className="flex flex-col gap-4 py-8 px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                'text-lg font-serif font-medium',
                location.pathname === link.path ? 'text-forest' : 'text-forest/60'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
