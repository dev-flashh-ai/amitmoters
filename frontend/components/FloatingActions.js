import { whatsappLink } from '../lib/siteData';

export default function FloatingActions() {
  return <a className="whatsapp-float" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><span>◔</span><b>WhatsApp</b></a>;
}
