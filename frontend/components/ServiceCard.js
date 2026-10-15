'use client';

import { useLanguage } from './LanguageProvider';
import WhatsAppLink from './WhatsAppLink';

export default function ServiceCard({ service, index = 0 }) {
  const { t } = useLanguage();
  const translatedTitle = t(service.title);
  return <article className="service-card" style={{ '--delay': `${index * 70}ms` }}>
    <div className="service-image"><img src={service.image} alt={translatedTitle} loading="lazy" /><span className="service-tag">{t(service.tag)}</span>{service.imageCredit && <a className="image-credit" href={service.imageCreditUrl} target="_blank" rel="noreferrer">Photo: {service.imageCredit}</a>}</div>
    <div className="service-card-body"><h3>{translatedTitle}</h3><p>{t(service.description)}</p><WhatsAppLink className="text-link" product={service.title}>{t('Enquire on WhatsApp')} <span>↗</span></WhatsAppLink></div>
  </article>;
}