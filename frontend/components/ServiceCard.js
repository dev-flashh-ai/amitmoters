'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageProvider';
import WhatsAppLink from './WhatsAppLink';

export default function ServiceCard({ service, index = 0 }) {
  const { t } = useLanguage();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const translatedTitle = t(service.title);
  const translatedTag = t(typeof service.tag === 'string' ? service.tag.trim() : '');
  const images = service.images || [service.image];

  useEffect(() => {
    if (!galleryOpen) return undefined;

    function closeOnEscape(event) {
      if (event.key === 'Escape') setGalleryOpen(false);
    }

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [galleryOpen]);

  return <>
    <article className="service-card" style={{ '--delay': `${index * 70}ms` }}>
      <div className={`service-image${service.images ? ' service-image-product' : ''}`}>
        {service.images
          ? <button className="service-image-open" type="button" onClick={() => { setSelectedImage(0); setGalleryOpen(true); }} aria-label={`${t('View product images')}: ${translatedTitle}`}>
            <img src={service.image} alt={translatedTitle} loading="lazy" />
            <img className="service-image-hover" src={images[1]} alt="" loading="lazy" />
          </button>
          : <img src={service.image} alt={translatedTitle} loading="lazy" />}
        <span className="service-tag">{translatedTag}</span>
        {service.imageCredit && <a className="image-credit" href={service.imageCreditUrl} target="_blank" rel="noreferrer">Photo: {service.imageCredit}</a>}
      </div>
      <div className="service-card-body"><h3>{translatedTitle}</h3><p>{t(service.description)}</p><WhatsAppLink className="text-link" product={service.title}>{t('Enquire on WhatsApp')} <span>↗</span></WhatsAppLink></div>
    </article>
    {service.images && galleryOpen && <div className="product-gallery-backdrop" role="presentation" onClick={event => { if (event.target === event.currentTarget) setGalleryOpen(false); }}>
      <section className="product-gallery" role="dialog" aria-modal="true" aria-label={`${translatedTitle} ${t('product gallery')}`}>
        <div className="product-gallery-header">
          <h2>{translatedTitle}</h2>
          <button className="product-gallery-close" type="button" onClick={() => setGalleryOpen(false)} aria-label={t('Close image gallery')}>×</button>
        </div>
        <img className="product-gallery-main" src={images[selectedImage]} alt={`${translatedTitle} — ${selectedImage + 1} / ${images.length}`} />
        <div className="product-gallery-thumbnails" aria-label={t('Choose product image')}>
          {images.map((image, imageIndex) => <button key={image} type="button" className={selectedImage === imageIndex ? 'selected' : ''} onClick={() => setSelectedImage(imageIndex)} aria-label={`${t('Image')} ${imageIndex + 1}`} aria-pressed={selectedImage === imageIndex}>
            <img src={image} alt="" />
          </button>)}
        </div>
      </section>
    </div>}
  </>;
}