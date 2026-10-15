import { T } from './LanguageProvider';
import WhatsAppLink from './WhatsAppLink';

export default function CtaSection({ compact = false }) {
  return <section className={compact ? 'cta-section compact' : 'cta-section'}><div className="container cta-inner"><div><p className="eyebrow"><T>Your car, your signature</T></p><h2><T>Ready to give your drive a</T> <em><T>premium upgrade?</T></em></h2><p><T>Tell us what you have in mind. We will help you choose the right finish, fit and features.</T></p></div><div className="cta-actions"><WhatsAppLink className="button button-light"><T>Chat on WhatsApp</T> <span>↗</span></WhatsAppLink><a href="tel:9824994998" className="button button-outline-light"><T>Call Now</T></a></div></div></section>;
}

