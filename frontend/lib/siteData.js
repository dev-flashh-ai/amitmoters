export const business = {
  name: 'Amit Motor Lening Work',
  owner: 'Amitbhai Parmar',
  phone: '9824994998',
  whatsapp: '919824994998',
  address: 'Panwadi, Bhavnagar, Gujarat – 364001',
  serviceArea: 'All Gujarat',
};

export const services = [
  { title: 'Premium Seat Covers', description: 'Tailored comfort and a refined finish for every drive.', image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1000&q=85', tag: 'Interior' },
  { title: 'Music Systems', description: 'Immersive sound upgrades tuned for your car and your taste.', image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1000&q=85', tag: 'Audio' },
  { title: 'LED Lighting', description: 'Sharper visibility and a striking modern road presence.', image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1000&q=85', tag: 'Lighting' },
  { title: 'Interior Styling', description: 'Make your cabin feel personal, premium and perfectly finished.', image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1000&q=85', tag: 'Custom' },
  { title: 'Steering Covers', description: 'Better grip, lasting comfort and a detail that completes the cabin.', image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1000&q=85', tag: 'Interior' },
  { title: 'Bus & Traveller Accessories', description: 'Reliable, comfortable upgrades for commercial and family travel.', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=85', tag: 'Commercial' },
];

export const gallery = [
  { title: 'Luxury cabin finish', image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Bold road presence', image: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Detail-led styling', image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Premium interiors', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85' },
];

export const reviews = [
  { quote: 'The finishing is excellent and the guidance was honest from start to finish. My car feels completely new.', name: 'Happy customer', location: 'Bhavnagar' },
  { quote: 'Amitbhai understands quality. The seat covers and music system installation were neat, quick and premium.', name: 'Happy customer', location: 'Gujarat' },
  { quote: 'Trusted work, fair advice and great attention to detail. I recommend Amit Motor to every car owner.', name: 'Happy customer', location: 'Bhavnagar' },
];

export function whatsappLink(message = 'Hello Amit Motor Lening Work, I would like to enquire about your services.') {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
