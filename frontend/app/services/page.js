import { services } from '../../lib/siteData';
import seatCoverProducts from '../../lib/seatCoverProducts.json';
import footMatProducts from '../../lib/footMatProducts.json';
import ServiceCard from '../../components/ServiceCard';
import CtaSection from '../../components/CtaSection';
import { T } from '../../components/LanguageProvider';

export const metadata = { title: 'Car Accessories | Amit Motor Bhavnagar', description: 'Explore seat covers, car mats, music systems, interior styling and more at Amit Motor.' };

export default function ServicesPage() { return <>
  <section className="page-hero"><div className="container"><p className="eyebrow light"><T>Our expertise</T></p><h1><T>Better details.</T><br /><em><T>Better drives.</T></em></h1><p><T>From subtle refinements to head-turning transformations, find the finishing touch your vehicle deserves.</T></p></div></section>
  <section className="section-pad services-page">
    <div className="container">
      <div className="section-heading"><div><p className="eyebrow"><T>Seat cover collection</T></p><h2><T>Signature Series Seat Covers</T></h2></div><p><T>Browse model-specific styles and view every product image.</T></p></div>
      <div className="service-grid service-grid-large" id="seat-covers">{seatCoverProducts.map((product, i) => <ServiceCard service={product} index={i} key={product.handle} />)}</div>
      <div className="section-heading product-category-heading"><div><p className="eyebrow"><T>Foot mat collection</T></p><h2><T>Car Foot Mats</T></h2></div><p><T>Explore universal and vehicle-specific mats with full image galleries.</T></p></div>
      <div className="service-grid service-grid-large" id="foot-mats">{footMatProducts.map((product, i) => <ServiceCard service={product} index={i} key={product.handle} />)}</div>
    </div>
  </section>
  <section className="section-pad services-page"><div className="container"><div className="section-heading"><div><p className="eyebrow"><T>More upgrades</T></p><h2><T>Explore our services</T></h2></div></div><div className="service-grid service-grid-large">{services.map((service, i) => <ServiceCard service={service} index={i} key={service.title} />)}</div></div></section>
  <CtaSection compact />
</>; }
