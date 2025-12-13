// ============================================
// TIPOS E INTERFACES
// ============================================

// Tipos para serviços
export interface Service {
  icon: string;
  title: string;
}

// Tipos para equipamentos
export interface Equipment {
  name: string;
  image: string;
  description?: string;
}

// Tipos para depoimentos
export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  image?: string;
  date?: string;
}

// Tipos para FAQ
export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

// Props do botão
export interface ButtonProps {
  texto: string;
  cor?: string;
  icone?: React.ComponentType<{ size?: number; className?: string }>;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

// Props do ScrollReveal
export interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out';
  delay?: number;
  duration?: number;
  threshold?: number;
}

// Props da Navbar
export interface NavbarProps {
  transparent?: boolean;
}

// Props do Hero
export interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

// Props dos Services
export interface ServicesProps {
  services?: Service[];
}

// Props do Contact Form
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Props do Slider
export interface SliderImage {
  src: string;
  alt: string;
  title?: string;
}

export interface SliderProps {
  images?: SliderImage[];
  autoPlay?: boolean;
  interval?: number;
}

// Tipos para animações
export type AnimationType = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-left' 
  | 'fade-right' 
  | 'zoom-in' 
  | 'zoom-out';

// Tipos para cores do tema
export type ThemeColor = 
  | 'bg-main' 
  | 'bg-secondary' 
  | 'bg-dark' 
  | 'bg-white' 
  | 'bg-transparent';
