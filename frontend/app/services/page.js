import { services } from '../../lib/siteData';
import ServiceCard from '../../components/ServiceCard';
import CtaSection from '../../components/CtaSection';

export const metadata = { title: 'Services | Amit Motor Lening Work', description: 'Explore premium car accessories, modifications, interior styling, lighting and audio services.' };

export default function ServicesPage() { return <><section className="page-hero"><div className="container"><p className="eyebrow light">Our expertise</p><h1>Better details.<br /><em>Better drives.</em></h1><p>From subtle refinements to head-turning transformations, find the finishing touch your vehicle deserves.</p></div></section><section className="section-pad services-page"><div className="container"><div className="service-grid service-grid-large">{services.map((service, i) => <ServiceCard service={service} index={i} key={service.title} />)}</div></div></section><CtaSection compact /></>; }
