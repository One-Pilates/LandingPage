import Navbar from '@/components/landing/Navbar';
import WhatsAppButton from '@/components/landing/WhatsAppButton';
import VLibras from '@/components/shared/VLibras';
import LandingPage from '@/pages/LandingPage';
import EquipmentsPage from '@/pages/EquipmentsPage';
import ServicePage from '@/pages/ServicePage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsOfUsePage from '@/pages/TermsOfUsePage';
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

function ScrollToTopOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/equipamentos" element={<EquipmentsPage />} />
        <Route path="/servicos/:slug" element={<ServicePage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
        <Route path="/termos-de-uso" element={<TermsOfUsePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <WhatsAppButton />
      <VLibras />
    </>
  );
}
