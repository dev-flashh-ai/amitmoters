import { business } from '../../lib/siteData';
import { T } from '../../components/LanguageProvider';
import WhatsAppLink from '../../components/WhatsAppLink';

export const metadata = { title: 'Contact Us | Amit Motor Car Accessories', description: 'Contact Amit Motor Car Accessories for product and installation enquiries in Bhavnagar and across Gujarat.' };

export default function ContactPage() {
  return <>
    <section className="page-hero contact-hero">
      <div className="container">
        <p className="eyebrow light"><T>Let’s talk cars</T></p>
        <h1><T>Bring your idea.</T><br /><em><T>We’ll make it real.</T></em></h1>
        <p><T>Have a question, a vision or simply need the right advice? We are here for your enquiry 24/7.</T></p>
      </div>
    </section>
    <section className="section-pad contact-section">
      <div className="container contact-grid">
        <div className="contact-details">
          <p className="eyebrow"><T>Contact Amit Motor</T></p>
          <h2><T>Let’s start with a conversation.</T></h2>
          <p><T>Call, WhatsApp or send us your requirements. We serve customers across Gujarat from our Bhavnagar workshop.</T></p>
          <figure className="contact-feature-image">
            <img src="/amit-motor-location.png" alt="Street view of Amit Motor Car Accessories and the surrounding Bhavnagar location" />
          </figure>
          <div className="detail-list">
            <a href="tel:9824994998"><span><T>Call us</T></span><strong>+91 98249 94998 ↗</strong></a>
            <WhatsAppLink><span><T>WhatsApp us</T></span><strong><T>Chat with Amit Motor</T> ↗</strong></WhatsAppLink>
            <div><span><T>Visit us</T></span><strong><T>{business.address}</T></strong></div>
            <div><span><T>Availability</T></span><strong><T>24/7 enquiries · All Gujarat</T></strong></div>
          </div>
          <a className="map-link" href="https://www.google.com/maps/@21.7717924,72.1397263,43a,75y,308.64h,79.75t/data=!3m7!1e1!3m5!1se_xlIeiccAhMSN0sMLM8Ig!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D10.25%26panoid%3De_xlIeiccAhMSN0sMLM8Ig%26yaw%3D308.64!7i16384!8i8192!5m1!1e2?entry=ttu&amp;g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer"><T>Open location in Google Maps</T> ↗</a>
        </div>
      </div>
    </section>
  </>;
}
