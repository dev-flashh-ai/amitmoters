'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageProvider';
import WhatsAppLink from './WhatsAppLink';

export default function ServiceCard({ service, index = 0 }) {
  const { t } = useLanguage();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const translatedTitle = t(service.title);
  const translatedTag = t(typeof service.tag === 'string' ? service.tag.trim() : '');
  const images = service.images || [service.image];

  useEffect(() => {
    if (!galleryOpen) return undefined;

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        if (zoomOpen) setZoomOpen(false);
        else setGalleryOpen(false);
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        setSelectedImage(index => (index + 1) % images.length);
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setSelectedImage(index => (index - 1 + images.length) % images.length);
      }
    }

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [galleryOpen, images.length, zoomOpen]);

  function showImage(index) {
    setSelectedImage((index + images.length) % images.length);
  }

  return <>
    <article className="service-card" style={{ '--delay': `${index * 70}ms` }}>
      <div className={`service-image${service.images ? ' service-image-product' : ''}`}>
        {service.images
          ? <button className="service-image-open" type="button" onClick={() => { setSelectedImage(0); setZoomOpen(false); setGalleryOpen(true); }} aria-label={`${t('View product images')}: ${translatedTitle}`}>
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
        <div className="product-gallery-viewer">
          <button className="product-gallery-zoom-trigger" type="button" onClick={() => setZoomOpen(true)} aria-label={t('Zoom image')}>
            <img className="product-gallery-main" src={images[selectedImage]} alt={`${translatedTitle} — ${selectedImage + 1} / ${images.length}`} />
            <span>{t('Click to enlarge')} <span aria-hidden="true">↗</span></span>
          </button>
          {images.length > 1 && <>
            <button className="product-gallery-nav product-gallery-previous" type="button" onClick={() => showImage(selectedImage - 1)} aria-label={t('Previous image')}>‹</button>
            <button className="product-gallery-nav product-gallery-next" type="button" onClick={() => showImage(selectedImage + 1)} aria-label={t('Next image')}>›</button>
          </>}
        </div>
        <p className="product-gallery-count">{String(selectedImage + 1).padStart(2, '0')} <span>/</span> {String(images.length).padStart(2, '0')}</p>
        <div className="product-gallery-thumbnails" aria-label={t('Choose product image')}>
          {images.map((image, imageIndex) => <button key={image} type="button" className={selectedImage === imageIndex ? 'selected' : ''} onClick={() => showImage(imageIndex)} aria-label={`${t('Image')} ${imageIndex + 1}`} aria-pressed={selectedImage === imageIndex}>
            <img src={image} alt="" />
          </button>)}
        </div>
      </section>
      {zoomOpen && <div className="product-image-zoom-backdrop" role="presentation" onClick={event => { if (event.target === event.currentTarget) setZoomOpen(false); }}>
        <section className="product-image-zoom" role="dialog" aria-modal="true" aria-label={`${translatedTitle} ${t('enlarged image')}`}>
          <button className="product-gallery-close product-image-zoom-close" type="button" onClick={() => setZoomOpen(false)} aria-label={t('Close enlarged image')}>×</button>
          <img src={images[selectedImage]} alt={`${translatedTitle} — ${selectedImage + 1} / ${images.length}`} />
          {images.length > 1 && <>
            <button className="product-gallery-nav product-image-zoom-previous" type="button" onClick={() => showImage(selectedImage - 1)} aria-label={t('Previous image')}>‹</button>
            <button className="product-gallery-nav product-image-zoom-next" type="button" onClick={() => showImage(selectedImage + 1)} aria-label={t('Next image')}>›</button>
          </>}
        </section>
      </div>}
    </div>}
  </>;
}