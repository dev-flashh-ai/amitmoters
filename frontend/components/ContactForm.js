'use client';

import { useState } from 'react';
import { whatsappLink } from '../lib/siteData';
import { T, useLanguage } from './LanguageProvider';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const { language, t } = useLanguage();
  function submit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) { setError(t('Please add your name, phone number and enquiry.')); setSent(false); return; }
    setError(''); setSent(true);
    const message = language === 'gu'
      ? `નમસ્તે અમિત મોટર કાર એસેસરીઝ,\nનામ: ${form.name}\nફોન: ${form.phone}\nસેવા: ${t(form.service || 'General enquiry')}\nપૂછપરછ: ${form.message}`
      : `Hello Amit Motor Car Accessories,\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service || t('General enquiry')}\nEnquiry: ${form.message}`;
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  }
  return <form className="contact-form" onSubmit={submit} noValidate><div className="form-row"><label><T>Name *</T><input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder={t('Your name')} /></label><label><T>Phone *</T><input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder={t('Your phone number')} inputMode="tel" /></label></div><label><T>Interested in</T><select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}><option value="">{t('Select a service')}</option>{['Seat covers', '7D EVA floor mats', 'Car carpet mats', 'Android music systems', 'Dashboard and audio upgrades', 'Cabin styling', 'Bus / Traveller accessories'].map(option => <option key={option} value={option}>{t(option)}</option>)}</select></label><label><T>Your enquiry *</T><textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder={t('Tell us what you would like to upgrade...')} rows="5" /></label>{error && <p className="form-message error">{error}</p>}{sent && <p className="form-message success"><T>Opening WhatsApp with your enquiry — we will get back to you soon.</T></p>}<button className="button button-dark" type="submit"><T>Send Enquiry on WhatsApp</T> <span>↗</span></button></form>;
}
