import Footer from '@/components/landing/Footer';
import { servicesData } from '@/data/services';
import { Link, useParams } from 'react-router-dom';

export default function ServicePage() {
  const { slug } = useParams();
  const service = servicesData.find((item) => item.slug === slug);
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER ?? '551130514139';
  const whatsappMessage = encodeURIComponent(
    import.meta.env.VITE_WHATSAPP_MESSAGE ??
      'Ola, consegui o contato atraves do site e gostaria de agendar uma aula experimental.'
  );
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${whatsappMessage}&type=phone_number&app_absent=0`;

  if (!service) {
    return (
      <main className="service-page min-h-screen pt-32">
        <section className="section-shell">
          <div className="section-header">
            <p className="section-kicker">Servico nao encontrado</p>
            <h1>Essa pagina nao existe.</h1>
            <p>Verifique o link ou volte para a pagina principal.</p>
            <Link to="/" className="btn-primary-solid mt-6 inline-flex">
              Voltar para Home
            </Link>
          </div>
        </section>
        <Footer compact />
      </main>
    );
  }

  return (
    <main className="service-page min-h-screen pt-28">
      <section className="section-shell">
        <div className="service-hero-grid">
          <div>
            <p className="section-kicker">Especialidade One Pilates</p>
            <h1 className="mb-4">{service.title}</h1>
            <p className="service-intro">{service.shortDescription}</p>
            <p className="service-description">{service.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/" className="btn-primary-solid">
                Voltar para Home
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-soft">
                Agendar Atendimento
              </a>
            </div>
          </div>

          <div className="service-visual-card">
            <img src={service.image} alt={service.title} className="service-visual-image" />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-header left">
          <p className="section-kicker">Beneficios para sua saude</p>
          <h2>Por que escolher {service.title}?</h2>
        </div>

        <div className="benefits-grid">
          {service.benefits.map((benefit) => (
            <article key={benefit} className="benefit-card">
              <span className="benefit-dot" aria-hidden="true" />
              <p>{benefit}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer compact />
    </main>
  );
}
