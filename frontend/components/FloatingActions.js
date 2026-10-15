import WhatsAppLink from './WhatsAppLink';
import { T } from './LanguageProvider';

export default function FloatingActions() {
  return <WhatsAppLink className="whatsapp-float" ariaLabel="Chat on WhatsApp"><span>◔</span><b><T>WhatsApp</T></b></WhatsAppLink>;
}
