'use client';

import { useEffect, useState } from 'react';

const banners = [
  { src: '/banners/seat-covers.webp', alt: 'Custom seat covers with a free steering wheel cover offer' },
  { src: '/banners/car-body-cover.webp', alt: 'Premium car body cover available for 500 or more car models' },
  { src: '/banners/steering-wheel-cover.webp', alt: 'Premium tan leather steering wheel covers' },
];

export default function HomeBannerSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex(index => (index + 1) % banners.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const showBanner = index => setActiveIndex((index + banners.length) % banners.length);

  return (
    <section
      className="home-slider"
      aria-label="Featured products"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className="home-slider-image-wrap">
        {banners.map((banner, index) => (
          <img
            className={`home-slider-image${index === activeIndex ? ' is-active' : ''}`}
            src={banner.src}
            alt={banner.alt}
            key={banner.src}
            aria-hidden={index !== activeIndex}
          />
        ))}
      </div>
      <div className="home-slider-controls">
        <button type="button" aria-label="Previous banner" onClick={() => showBanner(activeIndex - 1)}>‹</button>
        <div className="home-slider-dots" role="group" aria-label="Choose a banner">
          {banners.map((banner, index) => (
            <button
              type="button"
              aria-label={`Show banner ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              className={index === activeIndex ? 'is-active' : ''}
              key={banner.src}
              onClick={() => showBanner(index)}
            />
          ))}
        </div>
        <button type="button" aria-label="Next banner" onClick={() => showBanner(activeIndex + 1)}>›</button>
      </div>
    </section>
  );
}
