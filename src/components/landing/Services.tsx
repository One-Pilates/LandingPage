import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="section-header">
        <p className="section-kicker">Atendimento especializado</p>
        <h2>Nossos servicos com foco total no seu objetivo</h2>
        <p>
          Clique em cada area para ver detalhes, beneficios e entender qual abordagem faz
          mais sentido para voce neste momento.
        </p>
      </div>

      <div className="service-grid">
        {servicesData.map((service) => (
          <article key={service.slug} className="service-card">
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.shortDescription}</p>

            <Link to={`/servicos/${service.slug}`} className="service-link">
              Ver detalhes
            </Link>
          </article>
          ))}
      </div>
    </section>
  );
}
