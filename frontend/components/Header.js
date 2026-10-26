'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { T, useLanguage } from './LanguageProvider';
import BrandMark from './BrandMark';
import { useWebsiteGuide } from './WebsiteGuide';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const { language, setLanguage, t } = useLanguage();
  const { openGuide } = useWebsiteGuide();
  const links = [['Home', '/'], ['Services', '/services'], ['About Us', '/about'], ['Contact Us', '/contact']];

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('amit-motor-theme');
    const initialTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('amit-motor-theme', nextTheme);
  }

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <BrandMark />
          <span><strong>AMIT MOTOR</strong><small>CAR ACCESSORIES</small></span>
        </Link>
        <button className="menu-toggle" aria-label={t('Toggle navigation')} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
        <nav className={open ? 'main-nav open' : 'main-nav'}>
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}><T>{label}</T></Link>)}
          <div className="language-toggle" role="group" aria-label={t('Choose language')}>
            <button type="button" onClick={() => setLanguage('en')} aria-pressed={language === 'en'}>EN</button>
            <button type="button" onClick={() => setLanguage('gu')} aria-pressed={language === 'gu'} lang="gu">ગુજરાતી</button>
          </div>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={t(`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`)} aria-pressed={theme === 'dark'} title={t(`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`)}>
            {theme === 'dark' ? <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg> : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z" /></svg>}
          </button>
          <a className="nav-call" href="tel:9824994998"><T>Call Now</T> <span>↗</span></a>
        </nav>
      </div>
      <button className="website-guide-launch" type="button" onClick={openGuide} aria-label={t('Open website guide')} title={t('Open website guide')}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M9.7 9a2.4 2.4 0 1 1 4.2 1.6c-.9 1-1.9 1.2-1.9 2.7M12 17h.01" /></svg>
        <span><T>Website guide</T></span>
      </button>
    </header>
  );
}
