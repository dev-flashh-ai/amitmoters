'use client';

import { useEffect, useState } from 'react';
import { T, useLanguage } from './LanguageProvider';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    document.body.classList.add('services-page-with-back-to-top');

    function updateVisibility() {
      setVisible(window.scrollY > 400);
    }

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => {
      document.body.classList.remove('services-page-with-back-to-top');
      window.removeEventListener('scroll', updateVisibility);
    };
  }, []);

  function scrollToTop() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  return (
    <button className={`back-to-top${visible ? ' is-visible' : ''}`} type="button" onClick={scrollToTop} aria-label={t('Back to top')} title={t('Back to top')} aria-hidden={!visible} tabIndex={visible ? 0 : -1}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 7-7 7 7M12 19V5" /></svg>
      <T>Back to top</T>
    </button>
  );
}
