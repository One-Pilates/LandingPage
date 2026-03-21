'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER ?? '551130514139';
  const whatsappMessage = encodeURIComponent(
    import.meta.env.VITE_WHATSAPP_MESSAGE ??
      'Ola, consegui o contato atraves do site e gostaria de agendar uma aula experimental.'
  );

  return (
    <section id="home" className="hero-shell">
      <div
        className="hero-bg"
        style={{ backgroundImage: "url('/background.png')" }}
        aria-hidden="true"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <div className="max-w-3xl">
          <p className="hero-kicker">Porque seu corpo e unico</p>
          <h1>Transforme seu corpo com cuidado tecnico e atendimento humano.</h1>
          <p className="hero-subtitle">
            Uma jornada personalizada para mais mobilidade, forca e qualidade de vida.
            Porque seu corpo e unico e merece atencao exclusiva.
          </p>

          <div className="hero-actions">
            <button
              onClick={() =>
                window.open(
                  `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${whatsappMessage}&type=phone_number&app_absent=0`,
                  '_blank'
                )
              }
              className="btn-primary-solid"
              aria-label="Agende sua aula experimental"
            >
              <FaWhatsapp size={18} />
              <span>Agende sua aula experimental</span>
            </button>

            <a href="/#services" className="btn-outline-soft">
              Explorar Servicos
            </a>
          </div>

          <div className="hero-proof">
            <strong>+20 anos</strong>
            <span>de experiencia em movimento e reabilitacao.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
