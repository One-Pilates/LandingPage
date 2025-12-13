'use client';

import Image from 'next/image';
import type { Service, ServicesProps } from '@/lib/types';

const defaultServices: Service[] = [
  { icon: '/services/1.png', title: 'Acupuntura' },
  { icon: '/services/2.png', title: 'Osteopatia' },
  { icon: '/services/3.png', title: 'RPG (Reeducação Postural Global)' },
  { icon: '/services/4.png', title: 'Microfisioterapia' },
  { icon: '/services/5.png', title: 'Shiatsu' },
  { icon: '/services/6.png', title: 'Drenagem Linfática' },
  { icon: '/services/7.png', title: 'Fisioterapia' },
  { icon: '/services/8.png', title: 'Pilates' }
];

export default function Services({ services = defaultServices }: ServicesProps) {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>
          Nossos serviços, pensados para o que <br />
          você realmente precisa
        </h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <Image 
                src={service.icon} 
                alt={service.title}
                width={80}
                height={80}
                quality={85}
              />
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
