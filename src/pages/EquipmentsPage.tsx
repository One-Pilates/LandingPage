import Footer from '@/components/landing/Footer';
import { equipmentsData } from '@/data/equipments';
import { Link } from 'react-router-dom';

export default function EquipmentsPage() {
  return (
    <main className="min-h-screen pt-28">
      <section className="section-shell">
        <div className="section-header left max-w-5xl">
          <p className="section-kicker">Equipamentos</p>
          <h1>Equipamentos</h1>
          <p>
            Trabalhamos com equipamentos e acessorios selecionados para oferecer seguranca,
            eficiencia e evolucao consistente em cada sessao.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {equipmentsData.map((equipment) => (
            <article key={equipment.slug} className="surface-card p-6 sm:p-7">
              <h3 className="mb-4">{equipment.title.toUpperCase()}</h3>
              <div className="space-y-3">
                {equipment.description.map((paragraph, index) => (
                  <p key={`${equipment.slug}-${index}`} className="text-sm sm:text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/" className="btn-primary-solid">
            Voltar para Home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
