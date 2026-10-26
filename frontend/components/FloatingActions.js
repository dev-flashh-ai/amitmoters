import WhatsAppLink from './WhatsAppLink';
import { T } from './LanguageProvider';
import WebsiteChatbot from './WebsiteChatbot';

export default function FloatingActions() {
  return <div className="floating-actions">
    <WebsiteChatbot />
    <WhatsAppLink className="whatsapp-float" ariaLabel="Chat on WhatsApp">
      <svg className="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L4 20l1.1-3.5a8.5 8.5 0 1 1 15.4-5Z" />
        <path d="M8.2 7.8c.2-.4.5-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4-.1.6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.7-.6c.2-.2.4-.2.6-.1l1.8.8c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.5.4-1.1.6-1.8.4-1.2-.3-2.5-1.1-3.7-2.3-1.2-1.2-2-2.5-2.3-3.7-.2-.7 0-1.3.4-1.8Z" />
      </svg>
      <b><T>WhatsApp</T></b>
    </WhatsAppLink>
    <a className="call-float" href="tel:9824994998" aria-label="Call Amit Motor">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3H4.8A1.8 1.8 0 0 0 3 4.8C3 13.7 10.3 21 19.2 21a1.8 1.8 0 0 0 1.8-1.8V17l-5-2-1.5 2a14 14 0 0 1-6.5-6.5l2-1.5-2-5Z" /></svg>
      <b><T>Call Now</T></b>
    </a>
  </div>;
}
