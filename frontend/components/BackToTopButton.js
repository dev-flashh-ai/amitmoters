'use client';

import { useEffect, useState } from 'react';
import { T, useLanguage } from './LanguageProvider';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    function updateVisibility() {
      setVisible(window.scrollY > 400);
    }

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  if (!visible) return null;

  function scrollToTop() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  return (
    <button className="back-to-top" type="button" onClick={scrollToTop} aria-label={t('Back to top')} title={t('Back to top')}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 7-7 7 7M12 19V5" /></svg>
      <T>Back to top</T>
    </button>
  );
}
