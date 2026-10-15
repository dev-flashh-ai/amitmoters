import Link from 'next/link';
import { business, whatsappLink } from '../lib/siteData';

export default function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div><Link href="/" className="brand footer-brand"><span className="brand-badge">AM</span><span><strong>AMIT MOTOR</strong><small>CAR ACCESSORIES</small></span></Link><p className="footer-intro">Trusted automotive styling and accessories by Amitbhai Parmar, serving Gujarat with pride for over four decades.</p></div>
      <div><h3>Explore</h3><Link href="/services">Our Services</Link><Link href="/about">Our Story</Link><Link href="/contact">Contact Us</Link></div>
      <div><h3>Get in touch</h3><a href="tel:9824994998">+91 98249 94998</a><a href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp Enquiry</a><span>{business.address}</span></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} {business.name}</span><span>Serving all Gujarat · Enquiries welcome 24/7</span></div>
  </footer>;
}
