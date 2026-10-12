'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [['Home', '/'], ['Services', '/services'], ['About Us', '/about'], ['Contact Us', '/contact']];
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-badge">AM</span>
          <span><strong>AMIT MOTOR</strong><small>LENING WORK</small></span>
        </Link>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
        <nav className={open ? 'main-nav open' : 'main-nav'}>
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <a className="nav-call" href="tel:9824994998">Call Now <span>↗</span></a>
        </nav>
      </div>
    </header>
  );
}
