import Link from 'next/link';
import { whatsappLink } from '../lib/siteData';

export default function CtaSection({ compact = false }) {
  return <section className={compact ? 'cta-section compact' : 'cta-section'}><div className="container cta-inner"><div><p className="eyebrow">Your car, your signature</p><h2>Ready to give your drive a <em>premium upgrade?</em></h2><p>Tell us what you have in mind. We will help you choose the right finish, fit and features.</p></div><div className="cta-actions"><a href={whatsappLink()} target="_blank" rel="noreferrer" className="button button-light">Chat on WhatsApp <span>↗</span></a><a href="tel:9824994998" className="button button-outline-light">Call Now</a></div></div></section>;
}
