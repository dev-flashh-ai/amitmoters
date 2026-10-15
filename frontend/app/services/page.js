import { services } from '../../lib/siteData';
import ServiceCard from '../../components/ServiceCard';
import CtaSection from '../../components/CtaSection';
import { T } from '../../components/LanguageProvider';

export const metadata = { title: 'Car Accessories | Amit Motor Bhavnagar', description: 'Explore seat covers, car mats, music systems, interior styling and more at Amit Motor.' };

export default function ServicesPage() { return <><section className="page-hero"><div className="container"><p className="eyebrow light"><T>Our expertise</T></p><h1><T>Better details.</T><br /><em><T>Better drives.</T></em></h1><p><T>From subtle refinements to head-turning transformations, find the finishing touch your vehicle deserves.</T></p></div></section><section className="section-pad services-page"><div className="container"><div className="service-grid service-grid-large">{services.map((service, i) => <ServiceCard service={service} index={i} key={service.title} />)}</div></div></section><CtaSection compact /></>; }
