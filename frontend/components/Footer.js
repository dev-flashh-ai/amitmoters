import Link from 'next/link';
import { business } from '../lib/siteData';
import { T } from './LanguageProvider';
import WhatsAppLink from './WhatsAppLink';
import BrandMark from './BrandMark';

export default function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div><Link href="/" className="brand footer-brand"><BrandMark /><span><strong>AMIT MOTOR</strong><small><T>CAR ACCESSORIES</T></small></span></Link><p className="footer-intro"><T>Trusted automotive styling and accessories by Amitbhai Parmar, serving Gujarat with pride for over four decades.</T></p></div>
      <div><h3><T>Explore</T></h3><Link href="/services"><T>Our Services</T></Link><Link href="/about"><T>Our Story</T></Link><Link href="/contact"><T>Contact Us</T></Link></div>
      <div><h3><T>Get in touch</T></h3><a href="tel:9824994998">+91 98249 94998</a><WhatsAppLink><T>WhatsApp Enquiry</T></WhatsAppLink><span><T>{business.address}</T></span></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} {business.name}</span><span><T>Serving all Gujarat · Enquiries welcome 24/7</T></span></div>
  </footer>;
}
