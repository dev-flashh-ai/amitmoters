'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from './LanguageProvider';

const WebsiteGuideContext = createContext(null);
const completionKey = 'amit-motor-guide-completed';

const guideSteps = [
  {
    path: '/',
    title: 'Welcome to Amit Motor',
    description: 'This quick tour shows you where to find products, explore the site and contact us. Use Next to continue, or close the tour whenever you like.',
  },
  {
    path: '/',
    selector: '.site-header',
    title: 'Find your way around',
    description: 'Use Home, Services, About Us and Contact Us to explore the website. The language and theme controls let you switch between Gujarati and English or choose light and dark mode.',
  },
  {
    path: '/',
    selector: '.hero-actions',
    title: 'Start exploring',
    description: 'Explore Our Services opens the full service and product catalogue. View Our Work takes you to our contact page.',
  },
  {
    path: '/',
    selector: '.home-slider',
    title: 'Browse featured products',
    description: 'The featured banner changes automatically. Use the arrow buttons or dots below it to choose a banner.',
  },
  {
    path: '/services',
    selector: '.service-grid-large .service-image-product',
    title: 'Explore products and images',
    description: 'Select a product photo to open its gallery. Choose a thumbnail, use the arrows, or select the main image to enlarge it.',
  },
  {
    path: '/contact',
    selector: '.contact-form',
    title: 'Send an enquiry',
    description: 'Fill in your contact details and enquiry, then choose Send Enquiry on WhatsApp to open WhatsApp with your message.',
  },
  {
    path: '/contact',
    selector: '.floating-actions',
    title: 'Contact us anytime',
    description: 'The floating WhatsApp and Call buttons are available throughout the website for a quick enquiry or phone call.',
  },
  {
    path: '/contact',
    selector: '.site-footer',
    title: 'Need help later?',
    description: 'The footer has useful page links and our contact details. You can reopen this guide any time with the guide button.',
  },
];

export function WebsiteGuideProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (window.localStorage.getItem(completionKey) !== 'true') setIsOpen(true);
  }, []);

  const closeGuide = useCallback(() => {
    window.localStorage.setItem(completionKey, 'true');
    setIsOpen(false);
  }, []);
  const openGuide = useCallback(() => {
    setStepIndex(0);
    setIsOpen(true);
  }, []);

  return (
    <WebsiteGuideContext.Provider value={{ openGuide }}>
      {children}
      <WebsiteGuide
        isOpen={isOpen}
        stepIndex={stepIndex}
        setStepIndex={setStepIndex}
        pathname={pathname}
        router={router}
        onClose={closeGuide}
      />
    </WebsiteGuideContext.Provider>
  );
}

export function useWebsiteGuide() {
  const context = useContext(WebsiteGuideContext);
  if (!context) throw new Error('useWebsiteGuide must be used within WebsiteGuideProvider');
  return context;
}

function WebsiteGuide({ isOpen, stepIndex, setStepIndex, pathname, router, onClose }) {
  const [targetRect, setTargetRect] = useState(null);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const { t } = useLanguage();
  const step = guideSteps[stepIndex];

  useEffect(() => {
    if (!isOpen) return undefined;

    function closeOnEscape(event) {
      if (event.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', closeOnEscape);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return undefined;
    setTargetRect(null);
    if (pathname !== step.path) {
      router.push(step.path);
      return undefined;
    }

    let frame;
    const element = step.selector ? document.querySelector(step.selector) : null;

    function updatePosition() {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
      if (!element) {
        setTargetRect(null);
        return;
      }

      const { top, left, right, bottom, width, height } = element.getBoundingClientRect();
      setTargetRect({ top, left, right, bottom, width, height });
    }

    if (element) {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      element.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    }

    const timer = window.setTimeout(updatePosition, 350);
    function updateOnScroll() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updatePosition);
    }

    window.addEventListener('scroll', updateOnScroll, { passive: true });
    window.addEventListener('resize', updatePosition);
    return () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateOnScroll);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen, pathname, router, step]);

  if (!isOpen) return null;

  const isLastStep = stepIndex === guideSteps.length - 1;

  function advance() {
    if (isLastStep) {
      onClose();
      return;
    }
    setStepIndex(index => index + 1);
  }

  function goBack() {
    setStepIndex(index => Math.max(0, index - 1));
  }

  const dimmerStyle = targetRect
    ? {
      top: Math.max(0, targetRect.top - 8),
      left: Math.max(0, targetRect.left - 8),
      right: Math.max(0, viewport.width - targetRect.right - 8),
      bottom: Math.max(0, viewport.height - targetRect.bottom - 8),
    }
    : null;

  return (
    <div className="website-guide" aria-live="polite">
      {targetRect ? <>
        <div className="website-guide-dimmer website-guide-dimmer-top" style={{ height: dimmerStyle.top }} />
        <div className="website-guide-dimmer website-guide-dimmer-bottom" style={{ top: targetRect.bottom + 8 }} />
        <div className="website-guide-dimmer website-guide-dimmer-left" style={{ top: dimmerStyle.top, left: 0, width: dimmerStyle.left, height: targetRect.height + 16 }} />
        <div className="website-guide-dimmer website-guide-dimmer-right" style={{ top: dimmerStyle.top, left: targetRect.right + 8 }} />
        <div
          className="website-guide-spotlight"
          style={{
            top: Math.max(0, targetRect.top - 8),
            left: Math.max(0, targetRect.left - 8),
            width: Math.min(viewport.width, targetRect.width + 16),
            height: Math.min(viewport.height, targetRect.height + 16),
          }}
        />
      </> : <div className="website-guide-dimmer website-guide-dimmer-full" />}
      <section
        className={`website-guide-card${targetRect && targetRect.top > viewport.height / 2 ? ' website-guide-card-top' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="website-guide-title"
        aria-describedby="website-guide-description"
      >
        <div className="website-guide-card-topline">
          <span>{t('Website guide')}</span>
          <span>{stepIndex + 1} / {guideSteps.length}</span>
        </div>
        <h2 id="website-guide-title">{t(step.title)}</h2>
        <p id="website-guide-description">{t(step.description)}</p>
        <div className="website-guide-actions">
          <button className="website-guide-skip" type="button" onClick={onClose}>{t('Skip tour')}</button>
          <div>
            {stepIndex > 0 && <button className="website-guide-back" type="button" onClick={goBack}>{t('Back')}</button>}
            <button className="website-guide-next" type="button" onClick={advance}>{t(isLastStep ? 'Finish tour' : 'Next')}</button>
          </div>
        </div>
      </section>
    </div>
  );
}
