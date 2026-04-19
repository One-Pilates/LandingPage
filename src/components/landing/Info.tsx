import { FaPhoneAlt, FaRegBuilding } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Info() {
  return (
    <section className="w-full bg-[#f8faf7] px-4 py-20 sm:px-6 sm:py-24 md:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c75a21] sm:text-sm">
            Informacoes essenciais
          </p>
          <h2 className="text-3xl font-semibold text-[#12202a] sm:text-4xl md:text-5xl">
            Atendimento rapido e personalizado
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          <article className="p-5 text-center transition-all duration-300 hover:-translate-y-1 sm:p-6">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#f59a42,#f1722d)] shadow-[0_7px_16px_rgba(241,114,45,0.28)] sm:mb-6 sm:h-[4.5rem] sm:w-[4.5rem]">
              <FaPhoneAlt className="text-2xl text-white sm:text-3xl" />
            </div>

            <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#12202a] sm:text-2xl">Telefone</h3>

            <a
              href="tel:+551130514139"
              className="mb-3 inline-block text-base font-semibold text-[#c75a21] transition-colors duration-300 hover:text-[#a84917] sm:text-lg"
            >
              +55 (11) 3051-4139
            </a>

            <p className="text-sm leading-relaxed text-[#5b6973] sm:text-base">
              Ligue para falar com nossa equipe e agendar sua visita ao estudio.
            </p>
          </article>

          <article className="p-5 text-center transition-all duration-300 hover:-translate-y-1 sm:p-6">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#f59a42,#f1722d)] shadow-[0_7px_16px_rgba(241,114,45,0.28)] sm:mb-6 sm:h-[4.5rem] sm:w-[4.5rem]">
              <MdEmail className="text-2xl text-white sm:text-3xl" />
            </div>

            <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#12202a] sm:text-2xl">E-mail</h3>

            <a
              href="mailto:atendimento@onepilates.com.br"
              className="mb-3 inline-block break-words text-base font-semibold text-[#c75a21] transition-colors duration-300 hover:text-[#a84917] sm:text-lg"
            >
              atendimento@onepilates.com.br
            </a>

            <p className="text-sm leading-relaxed text-[#5b6973] sm:text-base">
              Ficou com alguma duvida ou sugestao? Escreva para a nossa equipe.
            </p>
          </article>

          <article className="p-5 text-center transition-all duration-300 hover:-translate-y-1 sm:p-6 md:col-span-2 lg:col-span-1">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#f59a42,#f1722d)] shadow-[0_7px_16px_rgba(241,114,45,0.28)] sm:mb-6 sm:h-[4.5rem] sm:w-[4.5rem]">
              <FaRegBuilding className="text-2xl text-white sm:text-3xl" />
            </div>

            <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#12202a] sm:text-2xl">
              Horario de atendimento
            </h3>

            <p className="mb-3 text-base font-semibold text-[#c75a21] sm:text-lg">Seg a Qui: 7h as 22h</p>

            <p className="text-sm leading-relaxed text-[#5b6973] sm:text-base">
              Sexta-feira: 7h as 19h. Entre em contato para confirmar disponibilidade de horarios.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
