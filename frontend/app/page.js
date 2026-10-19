import Link from 'next/link';
import { gallery, reviews, services } from '../lib/siteData';
import ServiceCard from '../components/ServiceCard';
import CtaSection from '../components/CtaSection';
import { T } from '../components/LanguageProvider';

export default function Home() {
  return <>
    <section className="feature-hero">
      <div className="container feature-hero__inner">
        <div className="feature-hero__content">
          <p className="eyebrow feature-hero__eyebrow"><T>Customize</T></p>
          <h1>
            <T>Your seat covers</T>
            <span className="feature-hero__line"><T>with your name</T></span>
          </h1>
          <div className="feature-hero__offer">
            <span><T>Get a</T></span>
            <strong><T>FREE</T></strong>
            <span><T>steering wheel cover!</T></span>
          </div>
          <div className="hero-actions">
            <Link className="button button-orange" href="/services"><T>Shop now</T> <span>↗</span></Link>
          </div>
          <div className="feature-hero__tagline"><T>Your Car. Your Style. Your Identity.</T></div>
        </div>

        <div className="feature-hero__visual" aria-label="Featured accessories">
          <div className="hero-product-track">
            <div className="hero-slide hero-slide--seat">
              <img src="/accessories/seat-cover.png" alt="Custom seat cover" />
            </div>
            <div className="hero-slide hero-slide--wheel">
              <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=900&q=80" alt="Steering wheel cover" />
            </div>
            <div className="hero-slide hero-slide--mat">
              <img src="/accessories/fitted-mats.jpg" alt="Premium car mats" />
            </div>
          </div>
        </div>
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