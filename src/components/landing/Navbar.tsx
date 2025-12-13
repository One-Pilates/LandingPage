'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import type { NavbarProps } from '@/lib/types';

export default function Navbar({ transparent = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Serviços' },
    { href: '#about', label: 'Sobre' },
    { href: '#equipment', label: 'Equipamentos' },
    { href: '#testimonials', label: 'Depoimentos' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${transparent ? 'navbar-transparent' : ''}`}>
      <div className="navbar-container">
        {/* LOGO */}
        <div className="navbar-logo">
          <Image
            src="/logoBranca.png"
            alt="One Pilates"
            width={150}
            height={50}
            priority
            quality={90}
          />
        </div>

        {/* MENU DESKTOP */}
        <ul className="navbar-menu">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* BOTÃO MOBILE */}
        <div className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FiX size={28} color="#fff" /> : <FiMenu size={28} color="#fff" />}
        </div>
      </div>

      {/* MENU MOBILE */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
