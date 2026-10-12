'use client';

import { useState } from 'react';
import { whatsappLink } from '../lib/siteData';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  function submit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) { setError('Please add your name, phone number and enquiry.'); setSent(false); return; }
    setError(''); setSent(true);
    const message = `Hello Amit Motor Lening Work,\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service || 'General enquiry'}\nEnquiry: ${form.message}`;
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  }
  return <form className="contact-form" onSubmit={submit} noValidate><div className="form-row"><label>Name *<input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label><label>Phone *<input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Your phone number" inputMode="tel" /></label></div><label>Interested in<select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}><option value="">Select a service</option><option>Seat covers</option><option>Music system</option><option>LED lights</option><option>Interior styling</option><option>Car modification</option><option>Bus / Traveller accessories</option></select></label><label>Your enquiry *<textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us what you would like to upgrade..." rows="5" /></label>{error && <p className="form-message error">{error}</p>}{sent && <p className="form-message success">Opening WhatsApp with your enquiry — we will get back to you soon.</p>}<button className="button button-dark" type="submit">Send Enquiry on WhatsApp <span>↗</span></button></form>;
}
