'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
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
    selector: '.main-nav a[href="/"]',
    navigationMenu: true,
    title: 'Home navigation button',
    description: 'Choose Home to return to the top of the homepage.',
  },
  {
    path: '/',
    selector: '.main-nav a[href="/services"]',
    navigationMenu: true,
    title: 'Services navigation button',
    description: 'Choose Services to browse car accessories, products and their photo galleries.',
  },
  {
    path: '/',
    selector: '.main-nav a[href="/about"]',
    navigationMenu: true,
    title: 'About navigation button',
    description: 'Choose About Us to learn about Amit Motor and its experience.',
  },
  {
    path: '/',
    selector: '.main-nav a[href="/contact"]',
    navigationMenu: true,
    title: 'Contact navigation button',
    description: 'Choose Contact Us to find contact details and send an enquiry.',
  },
  {
    path: '/',
    selector: '.main-nav .language-toggle',
    navigationMenu: true,
    title: 'Language switch',
    description: 'Choose EN for English or ગુજરાતી for Gujarati. Your choice is saved and used throughout the website.',
  },
  {
    path: '/',
    selector: '.main-nav .theme-toggle',
    navigationMenu: true,
    title: 'Display theme button',
    description: 'Choose the sun or moon button to switch between light and dark display themes.',
  },
  {
    path: '/',
    selector: '.main-nav .nav-call',
    navigationMenu: true,
    title: 'Call button',
    description: 'Choose Call Now to phone Amit Motor directly.',
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
  const [navigationOpen, setNavigationOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (window.localStorage.getItem(completionKey) !== 'true') setIsOpen(true);
  }, []);

  const closeGuide = useCallback(() => {
    window.localStorage.setItem(completionKey, 'true');
    setIsOpen(false);
    setNavigationOpen(false);
  }, []);
  const openGuide = useCallback(() => {
    setStepIndex(0);
    setNavigationOpen(false);
    setIsOpen(true);
  }, []);

  return (
    <WebsiteGuideContext.Provider value={{ openGuide, navigationOpen, setNavigationOpen }}>
      {children}
      <WebsiteGuide
        isOpen={isOpen}
        stepIndex={stepIndex}
        setStepIndex={setStepIndex}
        setNavigationOpen={setNavigationOpen}
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

function WebsiteGuide({ isOpen, stepIndex, setStepIndex, setNavigationOpen, pathname, router, onClose }) {
  const [targetRect, setTargetRect] = useState(null);
  const [cardRect, setCardRect] = useState(null);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const cardRef = useRef(null);
  const { language, setLanguage, t } = useLanguage();
  const step = guideSteps[stepIndex];

  useEffect(() => {
    const shouldExpandNavigation = isOpen && step.navigationMenu && window.matchMedia('(max-width: 800px)').matches;
    setNavigationOpen(shouldExpandNavigation);
  }, [isOpen, setNavigationOpen, step]);

  useEffect(() => {
    if (!isOpen) return;

    const cardBounds = cardRef.current?.getBoundingClientRect();
    setCardRect(cardBounds ? {
      top: cardBounds.top,
      left: cardBounds.left,
      right: cardBounds.right,
      bottom: cardBounds.bottom,
      width: cardBounds.width,
      height: cardBounds.height,
    } : null);
  }, [isOpen, language, stepIndex, targetRect]);

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
      const cardBounds = cardRef.current?.getBoundingClientRect();
      setCardRect(cardBounds ? {
        top: cardBounds.top,
        left: cardBounds.left,
        right: cardBounds.right,
        bottom: cardBounds.bottom,
        width: cardBounds.width,
        height: cardBounds.height,
      } : null);
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
  }, [isOpen, language, pathname, router, step]);

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
  const arrowPath = targetRect && cardRect ? getGuideArrowPath(cardRect, targetRect) : null;

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
      {arrowPath && <svg className="website-guide-arrow" viewBox={`0 0 ${viewport.width} ${viewport.height}`} aria-hidden="true">
        <defs>
          <marker id="website-guide-arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto">
            <path d="M0 0 8 4 0 8" />
          </marker>
        </defs>
        <path d={arrowPath} markerEnd="url(#website-guide-arrowhead)" />
      </svg>}
      <section
        ref={cardRef}
        className={`website-guide-card${targetRect && targetRect.top > viewport.height / 2 ? ' website-guide-card-top' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="website-guide-title"
        aria-describedby="website-guide-description"
      >
        <div className="website-guide-card-topline">
          <span>{t('Website guide')}</span>
          <div className="website-guide-topline-controls">
            <div className="language-toggle website-guide-language-toggle" role="group" aria-label={t('Choose language')}>
              <button type="button" onClick={() => setLanguage('en')} aria-pressed={language === 'en'} lang="en">EN</button>
              <button type="button" onClick={() => setLanguage('gu')} aria-pressed={language === 'gu'} lang="gu">ગુજરાતી</button>
            </div>
            <span aria-label={`${t('Step')} ${stepIndex + 1} ${t('of')} ${guideSteps.length}`}>{stepIndex + 1} / {guideSteps.length}</span>
          </div>
        </div>
        <h2 id="website-guide-title">{t(step.title)}</h2>
        <p id="website-guide-description">{t(step.description)}</p>
        <div className="website-guide-actions">
          <button className="website-guide-skip" type="button" onClick={onClose}>{t('Skip tour')}</button>
          <div>
            {stepIndex > 0 && <button className="website-guide-back" type="button" onClick={goBack} aria-label={t('Back')}><span aria-hidden="true">←</span> {t('Back')}</button>}
            <button className="website-guide-next" type="button" onClick={advance} aria-label={t(isLastStep ? 'Finish tour' : 'Next')}>{t(isLastStep ? 'Finish tour' : 'Next')} {!isLastStep && <span aria-hidden="true">→</span>}</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function getGuideArrowPath(card, target) {
  const startX = card.left + card.width / 2;
  const startY = card.top + card.height / 2;
  const endX = target.left + target.width / 2;
  const endY = target.top + target.height / 2;
  const deltaX = endX - startX;
  const deltaY = endY - startY;
  const cardScale = Math.min(
    Math.abs(deltaX) > 0 ? card.width / 2 / Math.abs(deltaX) : Infinity,
    Math.abs(deltaY) > 0 ? card.height / 2 / Math.abs(deltaY) : Infinity,
  );
  const targetScale = Math.min(
    Math.abs(deltaX) > 0 ? Math.max(target.width / 2, 12) / Math.abs(deltaX) : Infinity,
    Math.abs(deltaY) > 0 ? Math.max(target.height / 2, 12) / Math.abs(deltaY) : Infinity,
  );
  const fromX = startX + deltaX * cardScale;
  const fromY = startY + deltaY * cardScale;
  const toX = endX - deltaX * targetScale;
  const toY = endY - deltaY * targetScale;
  const distanceY = toY - fromY;
  const distanceX = toX - fromX;
  const control1X = fromX + distanceX * 0.18;
  const control1Y = fromY + distanceY * 0.55;
  const control2X = toX - distanceX * 0.18;
  const control2Y = toY - distanceY * 0.45;

  return `M ${fromX} ${fromY} C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${toX} ${toY}`;
}
