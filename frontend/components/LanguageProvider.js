'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext(null);

const gujarati = {
  Home: 'હોમ',
  Services: 'સેવાઓ',
  'About Us': 'અમારા વિશે',
  'Contact Us': 'સંપર્ક',
  'CAR ACCESSORIES': 'કાર એસેસરીઝ',
  'Call Now': 'હમણાં કૉલ કરો',
  'Switch to light mode': 'લાઇટ મોડ ચાલુ કરો',
  'Switch to dark mode': 'ડાર્ક મોડ ચાલુ કરો',
  'Choose language': 'ભાષા પસંદ કરો',
  'Toggle navigation': 'મેનુ ખોલો અથવા બંધ કરો',
  'Chat on WhatsApp': 'WhatsApp પર વાત કરો',
  WhatsApp: 'WhatsApp',
  'Bhavnagar · Serving all Gujarat': 'ભાવનગર · સમગ્ર ગુજરાતમાં સેવા',
  'Make every drive': 'દરેક મુસાફરીને',
  'feel extraordinary.': 'ખાસ બનાવો.',
  'Premium car accessories, thoughtful styling and trusted craftsmanship — perfected over 40+ years.': '૪૦થી વધુ વર્ષના અનુભવ સાથે પ્રીમિયમ કાર એસેસરીઝ, સુંદર સ્ટાઇલિંગ અને વિશ્વાસપાત્ર કારીગરી.',
  'Explore Our Services': 'અમારી સેવાઓ જુઓ',
  'View Our Work': 'અમારું કામ જુઓ',
  'Special offer': 'ખાસ ઑફર',
  'Customise your seat covers with your name': 'તમારા નામ સાથે સીટ કવર કસ્ટમાઇઝ કરાવો',
  'Get a FREE steering wheel cover with your customised seat covers.': 'કસ્ટમાઇઝ્ડ સીટ કવર સાથે સ્ટિયરિંગ વ્હીલ કવર મફત મેળવો.',
  'Ask about this offer': 'આ ઑફર વિશે પૂછો',
  'Years of experience': 'વર્ષોનો અનુભવ',
  'Happy customers': 'સંતુષ્ટ ગ્રાહકો',
  'Enquiry availability': 'પૂછપરછ માટે ઉપલબ્ધ',
  'Scroll to explore': 'વધુ જાણવા નીચે સ્ક્રોલ કરો',
  'The Amit Motor difference': 'અમિત મોટરની ખાસિયત',
  'Details that make your car': 'તમારી કારને ખાસ બનાવતી વિગતો',
  'feel like yours.': 'તેને તમારી બનાવે છે.',
  'From a crisp new cabin to a complete style transformation, we bring practical expertise and a premium eye to every installation.': 'નવી કેબિનથી લઈને સંપૂર્ણ સ્ટાઇલિંગ સુધી, દરેક ઇન્સ્ટોલેશનમાં અમે અનુભવ અને ગુણવત્તાનું ધ્યાન રાખીએ છીએ.',
  'Discover our story': 'અમારી સફર જાણો',
  'What we do': 'અમે શું કરીએ છીએ',
  'Upgrade your everyday.': 'રોજની મુસાફરીને વધુ સારી બનાવો.',
  'See all services': 'બધી સેવાઓ જુઓ',
  'Crafted with experience': 'અનુભવથી તૈયાર કરેલું',
  'Four decades of doing it right.': 'ચાર દાયકાનો વિશ્વાસપાત્ર અનુભવ.',
  'Experience is not just a number. It is knowing the right fit, the right finish and the right advice for every customer.': 'અનુભવ માત્ર આંકડો નથી. દરેક ગ્રાહક માટે યોગ્ય ફિટિંગ, યોગ્ય ફિનિશ અને યોગ્ય સલાહ આપવી એ અનુભવ છે.',
  Accessories: 'કાર એસેસરીઝ',
  'Made to fit your drive.': 'તમારી મુસાફરીને અનુરૂપ.',
  'Start your upgrade': 'તમારું અપગ્રેડ શરૂ કરો',
  'Custom seat covers': 'કસ્ટમ સીટ કવર',
  '7D EVA floor mats': '7D EVA ફ્લોર મેટ્સ',
  'Music system upgrades': 'મ્યુઝિક સિસ્ટમ અપગ્રેડ',
  'Tailored carpet mats': 'કસ્ટમ કાર્પેટ મેટ્સ',
  'Customer love': 'ગ્રાહકોનો વિશ્વાસ',
  'Trust, in their words.': 'તેમના શબ્દોમાં વિશ્વાસ.',
  'Sample reviews · Replace with verified reviews': 'નમૂનાના અભિપ્રાયો · ચકાસેલા અભિપ્રાયોથી બદલો',
  'The finishing is excellent and the guidance was honest from start to finish. My car feels completely new.': 'ફિનિશિંગ ઉત્તમ છે અને શરૂઆતથી અંત સુધી સાચી સલાહ મળી. મારી કાર હવે એકદમ નવી લાગે છે.',
  'Amitbhai understands quality. The seat covers and music system installation were neat, quick and premium.': 'અમિતભાઈ ગુણવત્તા સમજે છે. સીટ કવર અને મ્યુઝિક સિસ્ટમનું કામ સરસ, ઝડપી અને પ્રીમિયમ હતું.',
  'Trusted work, fair advice and great attention to detail. I recommend Amit Motor to every car owner.': 'વિશ્વાસપાત્ર કામ, યોગ્ય સલાહ અને દરેક વિગતો પર ધ્યાન. હું દરેક કારમાલિકને અમિત મોટરની ભલામણ કરું છું.',
  'Happy customer': 'સંતુષ્ટ ગ્રાહક',
  'Your car, your signature': 'તમારી કાર, તમારી ઓળખ',
  'Ready to give your drive a': 'તમારી મુસાફરીને આપવા તૈયાર છો',
  'premium upgrade?': 'પ્રીમિયમ અપગ્રેડ?',
  'Tell us what you have in mind. We will help you choose the right finish, fit and features.': 'તમારી જરૂરિયાત જણાવો. યોગ્ય ફિનિશ, ફિટિંગ અને સુવિધા પસંદ કરવામાં અમે મદદ કરીશું.',
  'Chat on WhatsApp': 'WhatsApp પર વાત કરો',
  'Our expertise': 'અમારી વિશેષતા',
  'Better details.': 'વધુ સારી વિગતો.',
  'Better drives.': 'વધુ સારી મુસાફરી.',
  'From subtle refinements to head-turning transformations, find the finishing touch your vehicle deserves.': 'નાના સુધારાથી લઈને સંપૂર્ણ બદલાવ સુધી, તમારી કારને અનુરૂપ એસેસરીઝ શોધો.',
  'Custom Seat Covers': 'કસ્ટમ સીટ કવર',
  'Comfortable, tailored finishes in styles that suit your cabin.': 'તમારી કેબિનને અનુરૂપ આરામદાયક અને સુંદર સીટ કવર.',
  '7D EVA Floor Mats': '7D EVA ફ્લોર મેટ્સ',
  'A precise-fit layer that helps keep every footwell protected.': 'ચોક્કસ ફિટિંગવાળા મેટ્સ, જે કારના ફ્લોરને સુરક્ષિત રાખે છે.',
  'Android Music Systems': 'એન્ડ્રોઇડ મ્યુઝિક સિસ્ટમ',
  'Bring clearer sound and easy everyday connectivity to your drive.': 'વધુ સારો અવાજ અને સરળ કનેક્ટિવિટી સાથે મુસાફરીનો આનંદ લો.',
  'Tailored Carpet Mats': 'કસ્ટમ કાર્પેટ મેટ્સ',
  'A clean, comfortable fit made for your vehicle’s floor space.': 'તમારી કારના ફ્લોર માટે સ્વચ્છ અને આરામદાયક મેટ્સ.',
  'Cabin Styling': 'કેબિન સ્ટાઇલિંગ',
  'Thoughtful interior details for a cabin that feels like your own.': 'તમારી પસંદગી મુજબ કેબિનને સુંદર બનાવતી વિગતો.',
  'Dashboard & Audio Upgrades': 'ડેશબોર્ડ અને ઑડિયો અપગ્રેડ',
  'Modern controls and a more enjoyable in-car listening experience.': 'આધુનિક કંટ્રોલ અને કારમાં વધુ સારો ઑડિયો અનુભવ.',
  'Comfort Accessories': 'આરામદાયક એસેસરીઝ',
  'Practical finishing touches for daily commutes and longer journeys.': 'રોજની અને લાંબી મુસાફરી માટે ઉપયોગી એસેસરીઝ.',
  'Bus & Traveller Accessories': 'બસ અને ટ્રાવેલર એસેસરીઝ',
  'Comfort-focused upgrades for commercial and family travel.': 'કમર્શિયલ અને પરિવારની મુસાફરી માટે આરામદાયક અપગ્રેડ.',
  Interior: 'ઇન્ટિરિયર',
  Protection: 'સુરક્ષા',
  Audio: 'ઑડિયો',
  Technology: 'ટેકનોલોજી',
  Comfort: 'આરામ',
  Commercial: 'કમર્શિયલ',
  'Enquire on WhatsApp': 'WhatsApp પર પૂછપરછ કરો',
  'Our story': 'અમારી સફર',
  'Built on trust.': 'વિશ્વાસથી બનેલી.',
  'Driven by detail.': 'દરેક વિગતોનું ધ્યાન.',
  'For more than 40 years, Amit Motor Car Accessories has helped Gujarat’s drivers love their vehicles a little more.': '૪૦ વર્ષથી વધુ સમયથી અમિત મોટર કાર એસેસરીઝ ગુજરાતના ડ્રાઇવરોની કારને વધુ સુંદર અને આરામદાયક બનાવે છે.',
  'Custom black seat cover with red stitching': 'લાલ સ્ટિચિંગવાળું કસ્ટમ કાળું સીટ કવર',
  'The Amit Motor story': 'અમિત મોટરની સફર',
  'One workshop. Generations of confidence.': 'એક વર્કશોપ. પેઢીઓનો વિશ્વાસ.',
  'What began with a love for automobiles has grown into a trusted destination for car accessories, installations and custom styling in Bhavnagar.': 'ઓટોમોબાઇલ પ્રત્યેના પ્રેમથી શરૂ થયેલું કામ આજે ભાવનગરમાં કાર એસેસરીઝ, ઇન્સ્ટોલેશન અને કસ્ટમ સ્ટાઇલિંગ માટેનું વિશ્વાસપાત્ર સ્થળ બન્યું છે.',
  'Owner': 'માલિક',
  'believes good work starts by listening. Every recommendation is practical, every installation is carefully finished, and every customer leaves knowing their vehicle is in capable hands.': 'માને છે કે સારું કામ સાંભળવાથી શરૂ થાય છે. દરેક સલાહ ઉપયોગી અને દરેક ઇન્સ્ટોલેશન કાળજીપૂર્વક થાય છે.',
  'Quality-first work': 'ગુણવત્તાને પ્રથમ સ્થાન',
  'Honest guidance': 'પ્રામાણિક સલાહ',
  'Customer trust': 'ગ્રાહકનો વિશ્વાસ',
  'Why Gujarat chooses us': 'ગુજરાત અમને કેમ પસંદ કરે છે',
  'Expertise you can feel in every detail.': 'દરેક વિગતોમાં અનુભવનો અહેસાસ.',
  'Whether you are refreshing your daily driver, preparing a family car for the road or styling a commercial vehicle, our team brings the same care to every job.': 'દૈનિક ઉપયોગની કાર હોય, પરિવારની કાર હોય કે કમર્શિયલ વાહન, દરેક કામમાં અમારી ટીમ સમાન કાળજી રાખે છે.',
  'Let’s talk cars': 'ચાલો, કાર વિશે વાત કરીએ',
  'Bring your idea.': 'તમારો વિચાર જણાવો.',
  'We’ll make it real.': 'અમે તેને સાકાર કરીશું.',
  'Have a question, a vision or simply need the right advice? We are here for your enquiry 24/7.': 'કોઈ પ્રશ્ન છે અથવા યોગ્ય સલાહ જોઈએ છે? તમારી પૂછપરછ માટે અમે હંમેશાં ઉપલબ્ધ છીએ.',
  'Contact Amit Motor': 'અમિત મોટરનો સંપર્ક કરો',
  'Let’s start with a conversation.': 'ચાલો વાતચીતથી શરૂઆત કરીએ.',
  'Call, WhatsApp or send us your requirements. We serve customers across Gujarat from our Bhavnagar workshop.': 'કૉલ કરો, WhatsApp કરો અથવા તમારી જરૂરિયાત મોકલો. ભાવનગરથી અમે સમગ્ર ગુજરાતમાં સેવા આપીએ છીએ.',
  'Call us': 'કૉલ કરો',
  'WhatsApp us': 'WhatsApp કરો',
  'Chat with Amit Motor': 'અમિત મોટર સાથે વાત કરો',
  'Visit us': 'મુલાકાત લો',
  'Availability': 'ઉપલબ્ધતા',
  '24/7 enquiries · All Gujarat': 'ચોવીસ કલાક પૂછપરછ · સમગ્ર ગુજરાત',
  'Open location in Google Maps': 'Google Maps માં સ્થાન જુઓ',
  'Name *': 'નામ *',
  'Your name': 'તમારું નામ',
  'Phone *': 'ફોન નંબર *',
  'Your phone number': 'તમારો ફોન નંબર',
  'Interested in': 'શેમાં રસ છે',
  'Select a service': 'સેવા પસંદ કરો',
  'General enquiry': 'સામાન્ય પૂછપરછ',
  'Seat covers': 'સીટ કવર',
  '7D EVA floor mats': '7D EVA ફ્લોર મેટ્સ',
  'Car carpet mats': 'કાર્પેટ મેટ્સ',
  'Android music systems': 'એન્ડ્રોઇડ મ્યુઝિક સિસ્ટમ',
  'Dashboard and audio upgrades': 'ડેશબોર્ડ અને ઑડિયો અપગ્રેડ',
  'Cabin styling': 'કેબિન સ્ટાઇલિંગ',
  'Bus / Traveller accessories': 'બસ / ટ્રાવેલર એસેસરીઝ',
  'Your enquiry *': 'તમારી પૂછપરછ *',
  'Tell us what you would like to upgrade...': 'તમે શું અપગ્રેડ કરવા માંગો છો તે જણાવો...',
  'Please add your name, phone number and enquiry.': 'કૃપા કરીને નામ, ફોન નંબર અને પૂછપરછ લખો.',
  'Opening WhatsApp with your enquiry — we will get back to you soon.': 'તમારી પૂછપરછ સાથે WhatsApp ખૂલી રહ્યું છે — અમે ટૂંક સમયમાં જવાબ આપીશું.',
  'Send Enquiry on WhatsApp': 'WhatsApp પર પૂછપરછ મોકલો',
  Explore: 'માહિતી',
  'Our Services': 'અમારી સેવાઓ',
  'Our Story': 'અમારી સફર',
  'Get in touch': 'સંપર્ક કરો',
  'WhatsApp Enquiry': 'WhatsApp પૂછપરછ',
  'Trusted automotive styling and accessories by Amitbhai Parmar, serving Gujarat with pride for over four decades.': 'અમિતભાઈ પરમાર દ્વારા વિશ્વાસપાત્ર કાર સ્ટાઇલિંગ અને એસેસરીઝ. ચાર દાયકાથી ગૌરવપૂર્વક સમગ્ર ગુજરાતમાં સેવા.',
  'Serving all Gujarat · Enquiries welcome 24/7': 'સમગ્ર ગુજરાતમાં સેવા · ચોવીસ કલાક પૂછપરછ',
  'Panwadi, Bhavnagar, Gujarat – 364001': 'પાનવાડી, ભાવનગર, ગુજરાત – ૩૬૪૦૦૧',
  Bhavnagar: 'ભાવનગર',
  Gujarat: 'ગુજરાત',
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('amit-motor-language');
    if (savedLanguage === 'gu') setLanguage('gu');
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function changeLanguage(nextLanguage) {
    setLanguage(nextLanguage);
    window.localStorage.setItem('amit-motor-language', nextLanguage);
  }

  const translate = text => language === 'gu' ? gujarati[text] || text : text;

  return <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t: translate }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}

export function T({ children }) {
  const { t } = useLanguage();
  return t(children);
}