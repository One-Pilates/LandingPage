'use client';

import { useEffect, useRef, useState, CSSProperties } from 'react';
import type { ScrollRevealProps } from '@/lib/types';

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.8,
  threshold = 0.1
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  const animations: Record<string, CSSProperties> = {
    'fade-up': {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
    },
    'fade-down': {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(-30px)'
    },
    'fade-left': {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateX(0)' : 'translateX(30px)'
    },
    'fade-right': {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateX(0)' : 'translateX(-30px)'
    },
    'zoom-in': {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'scale(1)' : 'scale(0.9)'
    },
    'zoom-out': {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'scale(1)' : 'scale(1.1)'
    }
  };

  const style: CSSProperties = {
    ...animations[animation],
    transition: `all ${duration}s ease-out ${delay}s`,
    willChange: 'transform, opacity'
  };

  return (
    <div ref={elementRef} style={style}>
      {children}
    </div>
  );
}
