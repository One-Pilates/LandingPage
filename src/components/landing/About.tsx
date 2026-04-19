'use client';

import { asset } from '@/utils/asset';

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f6f8f5_100%)] px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute left-0 top-6 h-48 w-48 rounded-full bg-[rgba(241,114,45,0.14)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-52 w-52 rounded-full bg-[rgba(20,85,60,0.12)] blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c75a21] sm:text-sm">
              Mais de 20 anos de historia
            </p>

            <h2 className="text-3xl font-semibold text-[#12202a] sm:text-4xl md:text-5xl">
              Cuidado individual para evolucao continua
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#5a6873] sm:text-lg lg:mx-0">
              Somos um studio de pilates em Sao Paulo com atendimento personalizado,
              profissionais experientes e estrutura completa para quem busca mais movimento,
              postura e qualidade de vida.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:max-w-xl">
              <div className="rounded-2xl border border-[#d6ddd8] bg-white p-4 text-left shadow-[0_8px_18px_rgba(12,24,36,0.06)]">
                <p className="text-2xl font-semibold text-[#12202a]">20+</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-[#5a6873]">Anos de experiencia</p>
              </div>
              <div className="rounded-2xl border border-[#d6ddd8] bg-white p-4 text-left shadow-[0_8px_18px_rgba(12,24,36,0.06)]">
                <p className="text-2xl font-semibold text-[#12202a]">100%</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-[#5a6873]">Atendimento humano</p>
              </div>
              <div className="rounded-2xl border border-[#d6ddd8] bg-white p-4 text-left shadow-[0_8px_18px_rgba(12,24,36,0.06)]">
                <p className="text-2xl font-semibold text-[#12202a]">SP</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-[#5a6873]">Proximo ao Paraiso</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center relative">
            <div className="absolute left-1/2 top-1/2 -z-10 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,_rgba(247,116,51,0.35)_0%,_transparent_70%)] blur-[60px]" />

            <img
              src={asset('/about.png')}
              alt="Studio de Pilates"
              className="h-auto w-[82%] max-w-md rounded-3xl border border-white bg-gray-100 shadow-[0_12px_32px_rgba(8,18,28,0.12)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(8,18,28,0.16)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
