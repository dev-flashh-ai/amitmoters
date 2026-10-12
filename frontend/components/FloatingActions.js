import { whatsappLink } from '../lib/siteData';

export default function FloatingActions() {
  return <>
    <a className="whatsapp-float" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><span>◔</span><b>WhatsApp</b></a>
    <a className="flashh-float" href="https://app.flashh.ai/" target="_blank" rel="noreferrer" aria-label="Made by Flashh.ai"><img src="/flashh-logo.png" alt="Made by Flashh.ai" /></a>
  </>;
}
