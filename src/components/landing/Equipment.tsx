'use client';

import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { asset } from '@/utils/asset';

export default function Equipment() {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f4f7f3_100%)] py-24 sm:py-28 md:py-32 lg:py-36"
      id="equipment"
    >
      <div className="pointer-events-none absolute right-0 top-4 h-56 w-56 rounded-full bg-[rgba(241,114,45,0.15)] blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 flex items-center justify-center lg:order-1">
            <div className="relative w-full max-w-lg">
              <div className="absolute left-1/2 top-1/2 -z-10 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,_rgba(247,116,51,0.28)_0%,_transparent_72%)] blur-[62px]" />

              <div className="overflow-hidden rounded-3xl border border-[#e2e8e3] bg-[#f6f8f5] shadow-[0_12px_30px_rgba(9,20,30,0.1)]">
                <img
                  src={asset('/1.jpg')}
                  alt="Equipamentos do Studio One Pilates"
                  className="h-auto w-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="order-1 flex flex-col gap-6 text-center lg:order-2 lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c75a21] sm:text-sm">
              Estrutura premium
            </p>

            <h2 className="text-3xl font-semibold text-[#12202a] sm:text-4xl md:text-5xl">
              Nossos Equipamentos
            </h2>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-[#596771] sm:text-lg lg:mx-0">
              Na One Pilates, sua saude e seguranca estao em primeiro lugar.
              Trabalhamos exclusivamente com equipamentos da marca Physio Pilates,
              referencia em qualidade, ergonomia e inovacao no mercado.
            </p>

            <div className="flex items-center justify-center gap-2 text-sm font-medium text-[#596771] lg:justify-start">
              <span className="inline-block h-2 w-2 rounded-full bg-[#f59a42]" />
              Equipamentos selecionados para desempenho e conforto
            </div>

            <Link
              to="/equipamentos"
              className="button self-center bg-[#F77433] shadow-[0_10px_24px_rgba(241,114,45,0.28)] lg:self-start"
              aria-label="Mais Detalhes dos Equipamentos"
            >
              <FaPlus size={20} className="button-icon" />
              <span>Mais Detalhes</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
