import { whatsappLink } from '../lib/siteData';

export default function ServiceCard({ service, index = 0 }) {
  return <article className="service-card" style={{ '--delay': `${index * 70}ms` }}>
    <div className="service-image"><img src={service.image} alt={service.title} loading="lazy" /><span className="service-tag">{service.tag}</span>{service.imageCredit && <a className="image-credit" href={service.imageCreditUrl} target="_blank" rel="noreferrer">Photo: {service.imageCredit}</a>}</div>
    <div className="service-card-body"><h3>{service.title}</h3><p>{service.description}</p><a href={whatsappLink(`Hello, I am interested in ${service.title}. Please share more details.`)} target="_blank" rel="noreferrer" className="text-link">Enquire on WhatsApp <span>↗</span></a></div>
  </article>;
}