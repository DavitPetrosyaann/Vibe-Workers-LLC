import React, { useState, useEffect } from 'react';
import { COMPANY_NAME, NAV_LINKS } from '../constants';
import { Icons } from './Icons';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center text-white shadow-lg">
            <Icons.BrainCircuit size={24} />
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-brand-950' : 'text-white'}`}>
            {COMPANY_NAME}
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-500 ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-brand-600 hover:bg-brand-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow-md"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </nav>
  );
};
