'use client';

import { whatsappLink } from '../lib/siteData';
import { useLanguage } from './LanguageProvider';

export default function WhatsAppLink({ children, className, product, ariaLabel }) {
  const { language, productName } = useLanguage();
  const message = language === 'gu'
    ? product
      ? `નમસ્તે અમિત મોટર, મને ${productName(product)} વિશે વધુ માહિતી આપશો?`
      : 'નમસ્તે અમિત મોટર કાર એસેસરીઝ, મને તમારી સેવાઓ વિશે માહિતી જોઈએ છે.'
    : product
      ? `Hello, I am interested in ${product}. Please share more details.`
      : undefined;

  return <a className={className} href={whatsappLink(message)} target="_blank" rel="noreferrer" aria-label={ariaLabel}>{children}</a>;
}