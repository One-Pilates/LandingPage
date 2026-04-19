import Footer from '@/components/landing/Footer';
import { Link } from 'react-router-dom';

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen pt-28">
      <section className="section-shell">
        <div className="max-w-4xl">
          <p className="section-kicker">Termos de Uso</p>
          <h1>Termos de Uso</h1>
          <p className="mt-4 text-base sm:text-lg">
            Ao acessar e utilizar este site, voce concorda com os termos abaixo. Caso nao
            concorde, recomendamos interromper a navegacao.
          </p>

          <div className="mt-8 space-y-8">
            <section>
              <h3>1. Uso do conteudo</h3>
              <p className="mt-3 text-sm sm:text-base">
                O conteudo deste site tem finalidade informativa sobre os servicos da One Pilates
                e nao substitui orientacao profissional individualizada.
              </p>
            </section>

            <section>
              <h3>2. Propriedade intelectual</h3>
              <p className="mt-3 text-sm sm:text-base">
                Textos, imagens, marcas e demais elementos do site sao protegidos por direitos
                aplicaveis. Nao e permitida reproducao sem autorizacao previa.
              </p>
            </section>

            <section>
              <h3>3. Responsabilidades</h3>
              <p className="mt-3 text-sm sm:text-base">
                A One Pilates busca manter as informacoes atualizadas, mas nao garante ausencia
                de erros, indisponibilidades temporarias ou interrupcoes tecnicas.
              </p>
            </section>

            <section>
              <h3>4. Links externos</h3>
              <p className="mt-3 text-sm sm:text-base">
                Este site pode conter links para plataformas de terceiros. Nao nos
                responsabilizamos por politicas, praticas ou conteudos desses ambientes externos.
              </p>
            </section>

            <section>
              <h3>5. Alteracoes dos termos</h3>
              <p className="mt-3 text-sm sm:text-base">
                Estes termos podem ser atualizados a qualquer momento para refletir mudancas
                operacionais, legais ou regulatórias.
              </p>
            </section>

            <section>
              <h3>6. Foro e legislacao</h3>
              <p className="mt-3 text-sm sm:text-base">
                Este documento e regido pela legislacao brasileira, ficando eleito o foro
                competente para resolucao de conflitos.
              </p>
            </section>
          </div>

          <div className="mt-10">
            <Link to="/" className="btn-primary-solid">
              Voltar para Home
            </Link>
          </div>
        </div>
      </section>

      <Footer compact />
    </main>
  );
}
