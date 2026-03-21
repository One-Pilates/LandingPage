import React from 'react';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0f171d] text-white py-16 sm:py-20 px-4 sm:px-6 border-t border-white/10 mt-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-start mb-10 sm:mb-12 md:mb-14 text-center lg:text-left">
          <div className="flex flex-col gap-3 sm:gap-4 items-center lg:items-start">
            <img 
              src="/logoOriginal.png" 
              alt="One Pilates" 
              className="w-32 sm:w-36 md:w-40 h-auto mb-2 sm:mb-3 rounded-xl"
            />
            
            <h3 className="text-xl sm:text-2xl font-bold m-0">
              One Pilates
            </h3>
            
            <span className="text-base sm:text-lg text-[#f59a42] font-medium mb-1">
              Porque seu corpo e unico
            </span>

            <div className="mt-4 sm:mt-6 text-sm sm:text-base text-white">
              <p className="flex items-center justify-center lg:justify-start gap-3 my-2 sm:my-3">
                <FaMapMarkerAlt className="text-[#f59a42] text-base sm:text-lg flex-shrink-0" />
                <span>R. Abílio Soares, 233 - Paraíso, São Paulo - SP</span>
              </p>
              <p className="flex items-center justify-center lg:justify-start gap-3 my-2 sm:my-3">
                <FaPhoneAlt className="text-[#f59a42] text-base sm:text-lg flex-shrink-0" />
                <span>(11) 97215-7232</span>
              </p>
              <p className="flex items-center justify-center lg:justify-start gap-3 my-2 sm:my-3">
                <FaEnvelope className="text-[#f59a42] text-base sm:text-lg flex-shrink-0" />
                <span>contato@onepilates.com.br</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 text-white">
              Navegacao
            </h4>
            
            <nav className="flex flex-col gap-2 sm:gap-3">
              <a 
                href="/#home" 
                className="text-white/75 no-underline text-sm sm:text-base transition-colors duration-300 hover:text-[#f59a42]"
              >
                Home
              </a>
              <a 
                href="/#services" 
                className="text-white/75 no-underline text-sm sm:text-base transition-colors duration-300 hover:text-[#f59a42]"
              >
                Servicos
              </a>
              <a 
                href="/#about" 
                className="text-white/75 no-underline text-sm sm:text-base transition-colors duration-300 hover:text-[#f59a42]"
              >
                Sobre
              </a>
              <a 
                href="/#equipment" 
                className="text-white/75 no-underline text-sm sm:text-base transition-colors duration-300 hover:text-[#f59a42]"
              >
                Equipamentos
              </a>
              <a 
                href="/#testimonials" 
                className="text-white/75 no-underline text-sm sm:text-base transition-colors duration-300 hover:text-[#f59a42]"
              >
                Depoimentos
              </a>
              <a 
                href="/#contact" 
                className="text-white/75 no-underline text-sm sm:text-base transition-colors duration-300 hover:text-[#f59a42]"
              >
                Contato
              </a>
            </nav>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-5 text-white">
              Redes Sociais
            </h4>
            
            <div className="flex gap-4 sm:gap-5">
              <a
                href="https://www.facebook.com/onepilates31"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-2xl sm:text-3xl text-white/75 transition-all duration-300 hover:text-[#f59a42] hover:scale-125"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/one_pilates/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-2xl sm:text-3xl text-white/75 transition-all duration-300 hover:text-[#f59a42] hover:scale-125"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 sm:pt-10 border-t border-white/10 text-center text-xs sm:text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} One Pilates - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
