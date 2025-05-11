import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Aidomus Logo" className="h-8 w-8 object-contain" />
          <span className="text-white text-xl font-bold tracking-wide">AIDOMUS</span>
        </div>

        <div className="hidden md:flex space-x-8 text-white text-sm font-medium">
          <a href="#about" className="hover:text-[var(--highlight-color)]-400 transition">About</a>
          <a href="#services" className="hover:text-[var(--highlight-color)]-400 transition">Services</a>
          <a href="#contact" className="hover:text-[var(--highlight-color)]-400 transition">Contact</a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-black/90 px-6 py-4 space-y-4 text-white text-center">
          <a href="#about" onClick={toggleMenu} className="block hover:text-[var(--highlight-color)]-400">About</a>
          <a href="#services" onClick={toggleMenu} className="block hover:text-[var(--highlight-color)]-400">Services</a>
          <a href="#contact" onClick={toggleMenu} className="block hover:text-[var(--highlight-color)]-400">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;