import Link from 'next/link';
import { gallery, reviews, services } from '../lib/siteData';
import ServiceCard from '../components/ServiceCard';
import CtaSection from '../components/CtaSection';
import HomeBannerSlider from '../components/HomeBannerSlider';
import WhatsAppLink from '../components/WhatsAppLink';
import { T } from '../components/LanguageProvider';

export default function Home() {
  return <>
    <section className="hero"><div className="hero-bg" /><div className="container hero-content"><p className="eyebrow light"><T>Bhavnagar · Serving all Gujarat</T></p><h1><T>Make every drive</T><br /><em><T>feel extraordinary.</T></em></h1><p className="hero-copy"><T>Premium car accessories, thoughtful styling and trusted craftsmanship — perfected over 40+ years.</T></p><div className="hero-actions"><Link className="button button-orange" href="/services"><T>Explore Our Services</T> <span>↗</span></Link><Link className="button button-ghost" href="/contact"><T>View Our Work</T></Link></div><div className="hero-proof"><span><strong>40+</strong> <T>Years of experience</T></span><span><strong>1000s</strong> <T>Happy customers</T></span><span><strong>24/7</strong> <T>Enquiry availability</T></span></div></div><div className="hero-scroll"><T>Scroll to explore</T> <span>↓</span></div></section>
    <HomeBannerSlider />
    <section className="seat-cover-offer">
      <div className="container seat-cover-offer-inner">
        <div>
          <p className="eyebrow light"><T>Special offer</T></p>
          <h2><T>Customise your seat covers with your name</T></h2>
          <p><T>Get a FREE steering wheel cover with your customised seat covers.</T></p>
        </div>
        <WhatsAppLink className="button button-light" product="Custom Seat Covers"><T>Ask about this offer</T> <span>↗</span></WhatsAppLink>
      </div>
    </section>
    <section className="intro-section"><div className="container split-intro"><div><p className="eyebrow"><T>The Amit Motor difference</T></p><h2><T>Details that make your car</T> <em><T>feel like yours.</T></em></h2></div><div className="intro-text"><p><T>From a crisp new cabin to a complete style transformation, we bring practical expertise and a premium eye to every installation.</T></p><Link className="text-link" href="/about"><T>Discover our story</T> <span>↗</span></Link></div></div></section>
    <section className="services-preview section-pad"><div className="container"><div className="section-heading"><div><p className="eyebrow"><T>What we do</T></p><h2><T>Upgrade your everyday.</T></h2></div><Link className="text-link" href="/services"><T>See all services</T> <span>↗</span></Link></div><div className="service-grid">{services.slice(0, 3).map((service, i) => <ServiceCard service={service} index={i} key={service.title} />)}</div></div></section>
    <section className="experience-band"><div className="container experience-grid"><div className="big-number">40<span>+</span></div><div><p className="eyebrow light"><T>Crafted with experience</T></p><h2><T>Four decades of doing it right.</T></h2><p><T>Experience is not just a number. It is knowing the right fit, the right finish and the right advice for every customer.</T></p></div><Link className="round-arrow" href="/about">↗</Link></div></section>
    <section className="gallery-section section-pad"><div className="container"><div className="section-heading"><div><p className="eyebrow"><T>Accessories</T></p><h2><T>Made to fit your drive.</T></h2></div><Link className="text-link" href="/contact"><T>Start your upgrade</T> <span>↗</span></Link></div><div className="gallery-grid">{gallery.map((item, i) => <figure className={`gallery-item gallery-${i + 1}`} key={item.title}><img src={item.image} alt={item.title} loading="lazy" /><figcaption><span>0{i + 1}</span><span className="gallery-copy"><strong><T>{item.title}</T></strong>{item.imageCredit && <a className="image-credit" href={item.imageCreditUrl} target="_blank" rel="noreferrer">Photo: {item.imageCredit}</a>}</span></figcaption></figure>)}</div></div></section>
    <section className="reviews-section section-pad"><div className="container"><div className="section-heading"><div><p className="eyebrow"><T>Customer love</T></p><h2><T>Trust, in their words.</T></h2></div><span className="sample-note"><T>Sample reviews · Replace with verified reviews</T></span></div><div className="reviews-grid">{reviews.map(review => <article className="review" key={review.quote}><div className="stars">★★★★★</div><p>“<T>{review.quote}</T>”</p><span><T>{review.name}</T> · {review.location}</span></article>)}</div></div></section>
    <CtaSection />
  </>;
}