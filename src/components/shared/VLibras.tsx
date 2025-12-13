'use client';

import { useEffect } from 'react';

export default function VLibras() {
  useEffect(() => {
    // Criar o HTML do VLibras
    const vlibrasDiv = document.createElement('div');
    vlibrasDiv.setAttribute('vw', '');
    vlibrasDiv.className = 'enabled';
    
    vlibrasDiv.innerHTML = `
      <div vw-access-button class="active"></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
      </div>
    `;
    
    document.body.appendChild(vlibrasDiv);
    
    // Carregar o script do VLibras
    const script = document.createElement('script');
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.async = true;
    script.onload = () => {
      // Inicializar o VLibras quando o script carregar
      if ((window as any).VLibras) {
        new (window as any).VLibras.Widget('https://vlibras.gov.br/app');
      }
    };
    document.body.appendChild(script);
    
    // Cleanup ao desmontar
    return () => {
      if (vlibrasDiv && vlibrasDiv.parentNode) {
        vlibrasDiv.parentNode.removeChild(vlibrasDiv);
      }
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
  
  return null;
}
