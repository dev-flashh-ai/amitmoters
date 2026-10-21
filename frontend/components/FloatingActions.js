import WhatsAppLink from './WhatsAppLink';
import { T } from './LanguageProvider';

export default function FloatingActions() {
  return <div className="floating-actions">
    <WhatsAppLink className="whatsapp-float" ariaLabel="Chat on WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" /><path d="M9 8.5c.3-.5.6-.5.9-.5l.7 1.7-.7.9c.6 1.2 1.3 1.9 2.5 2.5l.9-.7 1.7.7c0 .3 0 .6-.5.9-.6.5-1.4.6-2.3.3-1.3-.4-2.5-1.3-3.4-2.2-.9-.9-1.8-2.1-2.2-3.4-.3-.9-.2-1.7.4-2.2Z" /></svg>
      <b><T>WhatsApp</T></b>
    </WhatsAppLink>
    <a className="call-float" href="tel:9824994998" aria-label="Call Amit Motor">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3H4.8A1.8 1.8 0 0 0 3 4.8C3 13.7 10.3 21 19.2 21a1.8 1.8 0 0 0 1.8-1.8V17l-5-2-1.5 2a14 14 0 0 1-6.5-6.5l2-1.5-2-5Z" /></svg>
      <b><T>Call Now</T></b>
    </a>
  </div>;
}
