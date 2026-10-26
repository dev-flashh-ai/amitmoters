'use client';

import { useEffect, useRef, useState } from 'react';
import { whatsappLink } from '../lib/siteData';
import { useLanguage } from './LanguageProvider';

const quickQuestions = [
  'What services do you offer?',
  'Do you have seat covers?',
  'Where are you located?',
];

const faqTopics = [
  {
    keywords: ['service', 'services', 'accessories', 'સેવા', 'એસેસરીઝ'],
    answer: 'We offer custom seat covers, 7D EVA and carpet floor mats, cabin styling, comfort accessories, and bus and traveller accessories.',
  },
  {
    keywords: ['seat', 'cover', 'સીટ', 'કવર'],
    answer: 'We offer custom seat covers and model-specific Signature Series seat covers. Tell us your car model on WhatsApp and our team can help with fit and options.',
  },
  {
    keywords: ['mat', 'mats', 'floor', 'eva', 'carpet', 'મેટ', 'ફ્લોર', 'કાર્પેટ'],
    answer: 'We offer 7D EVA floor mats, tailored carpet mats, and universal or vehicle-specific foot mats. Ask us on WhatsApp about options for your car.',
  },
  {
    keywords: ['location', 'address', 'where', 'bhavnagar', 'visit', 'સ્થળ', 'સરનામું', 'ભાવનગર'],
    answer: 'Amit Motor is in Panwadi, Bhavnagar, Gujarat 364001. We serve customers across Gujarat.',
  },
  {
    keywords: ['phone', 'call', 'contact', 'number', 'કૉલ', 'ફોન', 'સંપર્ક'],
    answer: 'You can call Amit Motor at 9824994998 or send your question on WhatsApp using the button below.',
  },
  {
    keywords: ['time', 'timing', 'hours', 'open', 'કેટલા વાગ્યે', 'સમય'],
    answer: 'Enquiries are welcome 24/7. Please contact us to confirm workshop availability before visiting.',
  },
];

export default function WebsiteChatbot() {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ text: 'Hello! Ask me about our services, products, or location.', translated: true, from: 'bot' }]);
  const messageListRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    function closeOnEscape(event) {
      if (event.key === 'Escape') setIsOpen(false);
    }

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  useEffect(() => {
    if (messageListRef.current) messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
  }, [messages, isOpen]);

  function submitQuestion(question) {
    const trimmedQuestion = question.trim();
    if (!trimmedQuestion) return;

    const normalizedQuestion = trimmedQuestion.toLocaleLowerCase();
    const matchedTopic = faqTopics.find(topic => topic.keywords.some(keyword => normalizedQuestion.includes(keyword)));
    const answer = matchedTopic?.answer || 'I do not have that detail yet. Send us a WhatsApp message and our team will help you.';

    setMessages(currentMessages => [
      ...currentMessages,
      { text: trimmedQuestion, from: 'visitor' },
      { text: answer, translated: true, from: 'bot' },
    ]);
    setInput('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    submitQuestion(input);
  }

  const whatsappMessage = language === 'gu'
    ? 'નમસ્તે અમિત મોટર, મને વેબસાઇટ પરની પૂછપરછમાં મદદ જોઈએ છે.'
    : 'Hello Amit Motor, I need help with a question from your website.';

  return (
    <div className="website-chatbot">
      {isOpen && <section id="website-chatbot-panel" className="website-chatbot-panel" role="dialog" aria-modal="false" aria-labelledby="website-chatbot-title">
        <header className="website-chatbot-header">
          <div>
            <h2 id="website-chatbot-title">{t('Amit Motor assistant')}</h2>
            <p>{t('Ask about services, products, or our location')}</p>
          </div>
          <button type="button" onClick={() => setIsOpen(false)} aria-label={t('Close chat')}>×</button>
        </header>
        <div className="website-chatbot-messages" ref={messageListRef} role="log" aria-live="polite">
          {messages.map((message, index) => <p className={`website-chatbot-message ${message.from}`} key={`${index}-${message.text}`}>
            {message.translated ? t(message.text) : message.text}
          </p>)}
        </div>
        <div className="website-chatbot-quick-questions" aria-label={t('Common questions')}>
          {quickQuestions.map(question => <button type="button" key={question} onClick={() => submitQuestion(t(question))}>{t(question)}</button>)}
        </div>
        <form className="website-chatbot-form" onSubmit={handleSubmit}>
          <label className="website-chatbot-visually-hidden" htmlFor="website-chatbot-input">{t('Type your question')}</label>
          <input
            id="website-chatbot-input"
            value={input}
            onChange={event => setInput(event.target.value)}
            placeholder={t('Type your question')}
            maxLength={500}
          />
          <button type="submit" disabled={!input.trim()} aria-label={t('Send message')}>➤</button>
        </form>
        <a className="website-chatbot-whatsapp" href={whatsappLink(whatsappMessage)} target="_blank" rel="noreferrer">
          {t('Talk to us on WhatsApp')} <span aria-hidden="true">↗</span>
        </a>
      </section>}
      <button
        className="website-chatbot-launch"
        type="button"
        onClick={() => setIsOpen(open => !open)}
        aria-label={t(isOpen ? 'Close chat' : 'Open chat')}
        aria-expanded={isOpen}
        aria-controls="website-chatbot-panel"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-11.1 6.6L4 19l1.2-4.2A7.5 7.5 0 1 1 20 11.5Z" /><path d="M8.5 11.5h.01m3.49 0h.01m3.49 0h.01" /></svg>
        <b>{t('Chat with us')}</b>
      </button>
    </div>
  );
}
