import './globals.css';
import './theme.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import { LanguageProvider } from '../components/LanguageProvider';

export const metadata = {
  title: 'Amit Motor Car Accessories | Bhavnagar',
  description: 'Premium car accessories, styling, modifications and installations by Amitbhai Parmar. Serving all Gujarat for 40+ years.',
  keywords: 'car accessories Bhavnagar, car modification Gujarat, seat covers, LED lights, music systems',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
