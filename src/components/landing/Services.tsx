import { Link } from 'react-router-dom';
import { servicesData } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="section-header mb-12 sm:mb-14">
        <p className="section-kicker">Atendimento especializado</p>
        <h2>Programas pensados para o seu momento</h2>
        <p>
          Cada modalidade une tecnica, seguranca e progressao inteligente para voce
          conquistar resultados com consistencia.
        </p>
      </div>

      <div className="service-grid">
        {servicesData.map((service) => (
          <article
            key={service.slug}
            className="group relative overflow-hidden rounded-3xl border border-[var(--line)] bg-white p-6 shadow-[0_16px_34px_rgba(9,20,31,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(9,20,31,0.12)] sm:p-7"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[rgba(241,114,45,0.12)] blur-2xl transition-all duration-300 group-hover:scale-125" />

            <img src={service.icon} alt={service.title} className="relative mb-5 h-14 w-14 object-contain" />

            <h3 className="relative text-xl text-[#0f1c25]">{service.title}</h3>
            <p className="relative mt-3 text-sm leading-relaxed text-[#5a6873] sm:text-base">
              {service.shortDescription}
            </p>

            <Link
              to={`/servicos/${service.slug}`}
              className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-strong)] transition-colors duration-300 hover:text-[var(--brand)]"
            >
              Ver detalhes
              <span aria-hidden="true">→</span>
            </Link>
          </article>
          ))}
      </div>
    </section>
  );
}
