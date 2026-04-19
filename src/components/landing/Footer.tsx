import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { asset } from '@/utils/asset';

interface FooterProps {
  compact?: boolean;
}

export default function Footer({ compact = false }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[#d6ddd8] bg-[linear-gradient(180deg,#eef2ed_0%,#f6f7f4_100%)] text-[#1a2328]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(241,114,45,0.12),transparent_34%),radial-gradient(circle_at_88%_82%,rgba(52,108,75,0.12),transparent_36%)]" />

      <div
        className={`relative mx-auto max-w-7xl px-4 sm:px-6 ${compact ? 'py-8 sm:py-10 lg:py-12' : 'py-14 sm:py-16 lg:py-20'}`}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1.1fr] ${compact ? 'mb-6 gap-6' : 'mb-10 gap-8 lg:gap-10'}`}
        >
          <div className="text-center lg:text-left">
            <img
              src={asset('/logoOriginal.png')}
              alt="One Pilates"
              className={`mx-auto h-auto rounded-xl lg:mx-0 ${compact ? 'mb-3 w-24 sm:w-28' : 'mb-4 w-32'}`}
            />
            <h3 className={`m-0 font-semibold text-[#13212b] ${compact ? 'text-xl sm:text-2xl' : 'text-2xl'}`}>
              One Pilates
            </h3>
            <p className={`uppercase tracking-[0.18em] text-[#c75a21] ${compact ? 'mt-1 text-xs' : 'mt-2 text-sm'}`}>
              Movimento com prop&oacute;sito
            </p>
            <p
              className={`max-w-md leading-relaxed text-[#586670] ${compact ? 'mt-2 text-sm' : 'mt-4 text-sm lg:text-base'}`}
            >
              Est&uacute;dio de pilates com atendimento personalizado para evolu&ccedil;&atilde;o real,
              seguran&ccedil;a nos treinos e mais qualidade de vida no seu dia a dia.
            </p>

            <div className={`flex flex-wrap justify-center gap-3 lg:justify-start ${compact ? 'mt-4' : 'mt-6'}`}>
              <a
                href="https://www.instagram.com/one_pilates/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da One Pilates"
                className={`inline-flex items-center justify-center rounded-full border border-[#d6ddd8] bg-transparent text-[#455560] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f59a42] hover:bg-[#f59a42]/10 hover:text-[#c75a21] ${compact ? 'h-9 w-9 text-base' : 'h-11 w-11 text-lg'}`}
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/onepilates31"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da One Pilates"
                className={`inline-flex items-center justify-center rounded-full border border-[#d6ddd8] bg-transparent text-[#455560] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f59a42] hover:bg-[#f59a42]/10 hover:text-[#c75a21] ${compact ? 'h-9 w-9 text-base' : 'h-11 w-11 text-lg'}`}
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h4 className={`font-semibold uppercase tracking-[0.1em] text-[#1f2e39] ${compact ? 'mb-3 text-sm' : 'mb-4 text-base'}`}>
              Navega&ccedil;&atilde;o
            </h4>

            <nav className={`grid grid-cols-2 gap-x-4 sm:grid-cols-1 ${compact ? 'gap-y-2' : 'gap-y-3'}`}>
              <a
                href={`${import.meta.env.BASE_URL}#home`}
                className="text-sm text-[#596771] transition-colors duration-300 hover:text-[#c75a21]"
              >
                In&iacute;cio
              </a>
              <a
                href={`${import.meta.env.BASE_URL}#services`}
                className="text-sm text-[#596771] transition-colors duration-300 hover:text-[#c75a21]"
              >
                Servi&ccedil;os
              </a>
              <a
                href={`${import.meta.env.BASE_URL}#about`}
                className="text-sm text-[#596771] transition-colors duration-300 hover:text-[#c75a21]"
              >
                Sobre n&oacute;s
              </a>
              <a
                href={`${import.meta.env.BASE_URL}#equipment`}
                className="text-sm text-[#596771] transition-colors duration-300 hover:text-[#c75a21]"
              >
                Equipamentos
              </a>
              <a
                href={`${import.meta.env.BASE_URL}#testimonials`}
                className="text-sm text-[#596771] transition-colors duration-300 hover:text-[#c75a21]"
              >
                Depoimentos
              </a>
              <a
                href={`${import.meta.env.BASE_URL}#contact`}
                className="text-sm text-[#596771] transition-colors duration-300 hover:text-[#c75a21]"
              >
                Contato
              </a>
            </nav>
          </div>

          <div className="text-center lg:text-left">
            <h4 className={`font-semibold uppercase tracking-[0.1em] text-[#1f2e39] ${compact ? 'mb-3 text-sm' : 'mb-4 text-base'}`}>
              Contato
            </h4>

            <div className={`text-sm text-[#586670] ${compact ? 'space-y-2' : 'space-y-3'}`}>
              <p className="flex items-start justify-center gap-3 lg:justify-start">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-[#c75a21]" />
                <span>R. Ab&iacute;lio Soares, 233 - Para&iacute;so, S&atilde;o Paulo - SP</span>
              </p>
              <p className="flex items-center justify-center gap-3 lg:justify-start">
                <FaPhoneAlt className="shrink-0 text-[#c75a21]" />
                <a href="tel:+5511972157232" className="transition-colors duration-300 hover:text-[#c75a21]">
                  (11) 97215-7232
                </a>
              </p>
              <p className="flex items-center justify-center gap-3 lg:justify-start">
                <FaEnvelope className="shrink-0 text-[#c75a21]" />
                <a
                  href="mailto:contato@onepilates.com.br"
                  className="transition-colors duration-300 hover:text-[#c75a21]"
                >
                  contato@onepilates.com.br
                </a>
              </p>
            </div>

            {!compact && (
              <a
                href={`${import.meta.env.BASE_URL}#contact`}
                className="mt-6 inline-flex items-center justify-center rounded-full border border-[#f59a42] bg-[#f59a42]/10 px-5 py-2.5 text-sm font-semibold text-[#a74a1b] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f59a42]/18 hover:text-[#8a3e15]"
              >
                Agendar avalia&ccedil;&atilde;o
              </a>
            )}
          </div>
        </div>

        <div className={`flex flex-col items-center justify-between border-t border-[#d6ddd8] text-center text-xs text-[#64727c] sm:flex-row sm:text-sm ${compact ? 'gap-2 pt-4' : 'gap-4 pt-6'}`}>
          <p>
            &copy; {currentYear}{' '}
            <a
              href="https://onepilates.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#51616c] transition-colors duration-300 hover:text-[#c75a21]"
            >
              One Pilates
            </a>
            . Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-[#6f7d87] sm:gap-5">
            <a
              href={`${import.meta.env.BASE_URL}politica-de-privacidade`}
              className="transition-colors duration-300 hover:text-[#c75a21]"
            >
              Politica de Privacidade
            </a>
            <a
              href={`${import.meta.env.BASE_URL}termos-de-uso`}
              className="transition-colors duration-300 hover:text-[#c75a21]"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
