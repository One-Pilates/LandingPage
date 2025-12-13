'use client';

import { FaWhatsapp } from 'react-icons/fa';
import Button from '@/components/shared/Button';
import type { HeroProps } from '@/lib/types';

export default function Hero({ 
  title = 'Transforme seu corpo, descubra sua melhor versão.',
  subtitle = 'Porque seu corpo é único e merece cuidado exclusivo.',
  ctaText = 'Agende sua aula experimental'
}: HeroProps) {
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá, consegui o contato através do site e gostaria de agendar uma aula experimental.');
    const phone = '551130514139';
    const url = `https://api.whatsapp.com/send/?phone=${phone}&text=${message}&type=phone_number&app_absent=0`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />

      <div className="hero-container">
        <div className="hero-content">
          <h1>{title}</h1>
          <p>{subtitle}</p>

          <div className="hero-buttons">
            <Button 
              texto={ctaText}
              cor="bg-main"
              icone={FaWhatsapp}
              onClick={handleWhatsAppClick}
            />

            <div className="whatsapp-info">
              <div className="whatsapp-texts">
                <span className="whatsapp-text">+20 anos cuidando de você</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
