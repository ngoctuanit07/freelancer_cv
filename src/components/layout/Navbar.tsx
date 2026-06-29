import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-darkCard py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2" aria-label="Tuan Nguyen - Full Stack Developer">
          {/* New modern logo - SVG for crisp scaling + perfect brand colors */}
          <svg xmlns="http://www.w3.org/2000/svg" width="168" height="36" viewBox="0 0 180 40" fill="none" className="h-9 w-auto">
            <defs>
              <linearGradient id="tnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0BCEAF"/>
                <stop offset="100%" stopColor="#1C93E5"/>
              </linearGradient>
            </defs>
            
            {/* Icon background */}
            <rect x="2" y="4" width="30" height="30" rx="5" fill="url(#tnGradient)" opacity="0.12"/>
            <rect x="2" y="4" width="30" height="30" rx="5" stroke="url(#tnGradient)" strokeWidth="2"/>
            
            {/* Full-stack layers */}
            <rect x="8" y="9" width="18" height="3.5" rx="1" fill="#0BCEAF"/>
            <rect x="8" y="15.5" width="18" height="3.5" rx="1" fill="#1C93E5"/>
            <rect x="8" y="22" width="18" height="3.5" rx="1" fill="#0BCEAF"/>
            
            {/* TN monogram accent */}
            <text x="17" y="24.5" fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle" dominantBaseline="middle">TN</text>
            
            {/* Name + title */}
            <text x="42" y="17" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontSize="16" fontWeight="600" fill="#fff" letterSpacing="-0.3">Tuan Nguyen</text>
            <text x="42" y="29.5" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" fontSize="8" fontWeight="500" fill="#0BCEAF" letterSpacing="1.5">FULL STACK DEVELOPER</text>
          </svg>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="text-white hover:text-primary transition-colors font-medium">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Trigger */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-darkCard border-t border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-white hover:text-primary text-lg">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
