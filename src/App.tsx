import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import About from '@/components/landing/About';
import Equipment from '@/components/landing/Equipment';
import Info from '@/components/landing/Info';
import Testimonials from '@/components/landing/Testimonials';
import FAQ from '@/components/landing/FAQ';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';
import Slider from '@/components/landing/Slider';
import WhatsAppButton from '@/components/landing/WhatsAppButton';
import ScrollReveal from '@/components/shared/ScrollReveal';
import VLibras from '@/components/shared/VLibras';

export default function App() {
  return (
    <main className="landing-page">
      <Navbar />
      <Hero />

      <ScrollReveal animation="fade-up">
        <Slider />
      </ScrollReveal>

      <ScrollReveal animation="fade-up" delay={0.2}>
        <Services />
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <About />
      </ScrollReveal>

      <ScrollReveal animation="zoom-in">
        <Equipment />
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <Info />
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <FAQ />
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <Contact />
      </ScrollReveal>

      <Footer />
      <WhatsAppButton />
      <VLibras />
    </main>
  );
}
