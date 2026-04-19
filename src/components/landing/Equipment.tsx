'use client';

import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { asset } from '@/utils/asset';

export default function Equipment() {
  return (
    <section className="py-20 sm:py-24 md:py-32 lg:py-40 bg-white relative overflow-hidden" id="equipment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Image Side */}
          <div className="flex justify-center items-center relative order-2 lg:order-1">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 w-[75%] h-[75%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,_rgba(247,116,51,0.35)_0%,_transparent_70%)] blur-[60px] transition-all duration-400 hover:blur-[80px] hover:bg-[radial-gradient(circle,_rgba(247,116,51,0.5)_0%,_transparent_75%)]" />

            {/* Image */}
            <img
              src={asset('/1.jpg')}
              alt="Equipamentos do Studio One Pilates"
              className="w-full max-w-md h-auto rounded-3xl bg-gray-100 shadow-[0_0_25px_rgba(247,116,51,0.25),_0_6px_20px_rgba(0,0,0,0.08)] transition-all duration-400 hover:scale-105 hover:shadow-[0_0_35px_rgba(247,116,51,0.4),_0_8px_28px_rgba(0,0,0,0.1)] z-10 relative"
            />
          </div>

          {/* Content Side */}
          <div className="flex flex-col gap-5 sm:gap-6 text-center lg:text-left order-1 lg:order-2">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black relative pb-3 sm:pb-4">
              Nossos Equipamentos
              <span className="block w-16 sm:w-20 h-1 bg-[#F77433] mt-3 sm:mt-4 rounded-sm mx-auto lg:mx-0" />
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 max-w-lg mx-auto lg:mx-0">
              Na One Pilates, sua saúde e segurança estão em primeiro lugar. 
              Trabalhamos exclusivamente com equipamentos da marca Physio Pilates, 
              referência em qualidade, ergonomia e inovação no mercado.
            </p>

            {/* Button */}
            <Link
              to="/equipamentos"
              className="button bg-[#F77433] self-center lg:self-start"
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
