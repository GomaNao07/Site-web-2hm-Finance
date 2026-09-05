import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
// import logoImg from '../assets/logo.jpg';
import logoImg from '../assets/Translucent_logo.png';

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Le cabinet', path: '/le-cabinet' },
    { name: 'Expertises', path: '/nos-expertises' },
    { name: 'Méthode', path: '/notre-methode' },
    { name: 'Formation', path: '/formation' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[#2A0B2C] backdrop-blur-3xl text-[#F3E6F3] shadow-md font-mono text-[11px] tracking-[0.1em] uppercase">
      <div className="max-w-[1100px] mx-auto px-7 flex items-center justify-between">

        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 text-white text-sm font-display font-extrabold tracking-wide hover:opacity-90 transition-opacity">
          <img src={logoImg} alt="2HM Finance Logo" className="h-10 w-auto object-contain " />
          <span className="text-[#E8A33D] font-extrabold text-base">2HM FINANCE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center ">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors duration-150 py-4 px-2.5 ${isActive(link.path)
                ? 'text-white font-bold border-b-2 border-[#E8A33D]'
                : 'text-[#E7C8E7] hover:text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/contact"
            className="font-display font-semibold text-xs tracking-normal normal-case px-4 py-2 bg-[#E8A33D] text-[#2A0B2C] rounded-[2px] hover:bg-[#F4B85C] transition-colors"
          >
            Diagnostic 5 jours
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 text-[#E7C8E7] hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2A0B2C] border-t border-white/10 px-7 py-4 flex flex-col gap-3 font-mono">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 text-xs border-b border-white/5 ${isActive(link.path) ? 'text-[#E8A33D] font-bold' : 'text-[#E7C8E7]'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center font-display font-semibold text-xs tracking-normal normal-case px-4 py-2.5 bg-[#E8A33D] text-[#2A0B2C] rounded-[2px]"
          >
            Demander un diagnostic
          </Link>
        </div>
      )}
    </header>
  );
}
