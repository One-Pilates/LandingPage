'use client';

import type { ButtonProps } from '@/lib/types';

export default function Button({
  texto,
  cor = 'bg-main',
  icone: Icone,
  onClick,
  type = 'button',
  disabled = false,
  className = ''
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${cor} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      aria-label={texto}
    >
      {Icone && <Icone size={20} className="button-icon" />}
      <span>{texto}</span>
    </button>
  );
}
