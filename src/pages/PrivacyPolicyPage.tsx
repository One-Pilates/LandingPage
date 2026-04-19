import Footer from '@/components/landing/Footer';
import { Link } from 'react-router-dom';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-28">
      <section className="section-shell">
        <div className="max-w-4xl">
          <p className="section-kicker">Politica de Privacidade</p>
          <h1>Politica de Privacidade</h1>
          <p className="mt-4 text-base sm:text-lg">
            Esta politica explica como os dados pessoais coletados pela One Pilates sao tratados
            ao utilizar este site e seus canais de contato.
          </p>

          <div className="mt-8 space-y-8">
            <section>
              <h3>1. Dados coletados</h3>
              <p className="mt-3 text-sm sm:text-base">
                Podemos coletar nome, e-mail, telefone e informacoes fornecidas voluntariamente
                por voce em formularios e atendimentos.
              </p>
            </section>

            <section>
              <h3>2. Finalidade de uso</h3>
              <p className="mt-3 text-sm sm:text-base">
                Os dados sao usados para responder solicitacoes, realizar contato sobre servicos,
                agendamentos e melhorar a experiencia de navegacao.
              </p>
            </section>

            <section>
              <h3>3. Compartilhamento</h3>
              <p className="mt-3 text-sm sm:text-base">
                Nao comercializamos dados pessoais. O compartilhamento ocorre apenas quando
                necessario para a execucao dos servicos ou por obrigacao legal.
              </p>
            </section>

            <section>
              <h3>4. Armazenamento e seguranca</h3>
              <p className="mt-3 text-sm sm:text-base">
                Adotamos medidas tecnicas e organizacionais para proteger os dados contra acesso
                nao autorizado, alteracao, divulgacao ou destruicao indevida.
              </p>
            </section>

            <section>
              <h3>5. Direitos do titular</h3>
              <p className="mt-3 text-sm sm:text-base">
                Voce pode solicitar confirmacao de tratamento, acesso, correcao, exclusao e
                demais direitos previstos na legislacao aplicavel de protecao de dados.
              </p>
            </section>

            <section>
              <h3>6. Contato</h3>
              <p className="mt-3 text-sm sm:text-base">
                Para assuntos relacionados a privacidade, entre em contato pelo e-mail
                contato@onepilates.com.br.
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
