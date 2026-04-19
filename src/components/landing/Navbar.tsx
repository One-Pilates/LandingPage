"use client";

import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { asset } from '@/utils/asset';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 30);
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

  const navItems = [
    { label: 'Home', href: `${import.meta.env.BASE_URL}#home` },
    { label: 'Servicos', href: `${import.meta.env.BASE_URL}#services` },
    { label: 'Sobre', href: `${import.meta.env.BASE_URL}#about` },
    { label: 'Equipamentos', href: `${import.meta.env.BASE_URL}#equipment` },
    { label: 'Depoimentos', href: `${import.meta.env.BASE_URL}#testimonials` },
    { label: 'Contato', href: `${import.meta.env.BASE_URL}#contact` },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-in-out border-b
        ${isScrolled || !isHome
          ? 'bg-[rgba(15,20,24,0.92)] border-white/10 backdrop-blur-xl shadow-[0_14px_45px_rgba(8,12,20,0.35)]'
          : 'bg-transparent border-transparent'
        }
        py-4
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 transition-all duration-300 ease-in-out" onClick={closeMenu}>
            <img
              src={asset('/logoBranca.png')}
              alt="One Pilates"
              className="h-9 sm:h-10 md:h-11 w-auto object-contain"
            />
          </Link>

          <ul className="hidden md:flex items-center gap-6 lg:gap-8 list-none">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-white/90 font-medium text-sm lg:text-base tracking-wide transition-colors duration-300 hover:text-[#f59a42] cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-[#f59a42] rounded-lg p-1 transition-all"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? (
                <FiX size={28} className="sm:w-8 sm:h-8" />
              ) : (
                <FiMenu size={28} className="sm:w-8 sm:h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`
          md:hidden
          absolute top-full left-0 w-full
          bg-[rgba(15,20,24,0.96)] backdrop-blur-xl
          transition-all duration-300 ease-in-out
          ${isMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-5 pointer-events-none'
          }
          shadow-2xl border-b border-white/10
        `}
      >
        <ul className="flex flex-col items-center list-none py-6 px-4 space-y-4">
          {navItems.map((item) => (
            <li className="w-full text-center" key={item.label}>
              <a
                href={item.href}
                onClick={closeMenu}
                className="block text-white text-lg sm:text-xl font-medium py-3 transition-colors duration-300 hover:text-[#f59a42] active:text-[#f59a42]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
