'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent('Olá, consegui o contato através do site e gostaria de mais informações.');
    const phone = '551130514139';
    const url = `https://api.whatsapp.com/send/?phone=${phone}&text=${message}&type=phone_number&app_absent=0`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      className={`whatsapp-button ${isVisible ? 'visible' : ''}`}
      onClick={handleClick}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp size={32} />
    </button>
  );
}
