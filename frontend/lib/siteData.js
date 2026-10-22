export const business = {
  name: 'Amit Motor Car Accessories',
  owner: 'Amitbhai Parmar',
  phone: '9824994998',
  whatsapp: '919824994998',
  address: 'Panwadi, Bhavnagar, Gujarat – 364001',
  serviceArea: 'All Gujarat',
};

const seatCoverImages = [
  'https://www.autofurnish.com/cdn/shop/files/4_feeee7d8-11fe-4602-a685-63bdbc08da06.jpg?v=1776925665&width=713',
  'https://www.autofurnish.com/cdn/shop/files/5_6776b7a6-e655-4c70-b604-6a800944c94a.jpg?v=1776925664',
  'https://www.autofurnish.com/cdn/shop/files/6_47481605-7b30-4289-931e-8eb7b836e5f9.jpg?v=1776925663&width=713',
  'https://www.autofurnish.com/cdn/shop/files/3_cccdb992-d3be-4e63-b02b-cc1aaa782fd3.jpg?v=1776925663',
];

export const services = [
  {
    title: 'Custom Seat Covers',
    description: 'Comfortable, tailored finishes in styles that suit your cabin.',
    image: seatCoverImages[0],
    images: seatCoverImages,
    tag: 'Interior',
  },
  { title: '7D EVA Floor Mats', description: 'A precise-fit layer that helps keep every footwell protected.', image: '/accessories/eva-mats.jpg', imageCredit: 'EVACARMAT · CC BY-SA 4.0', imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Eva_Car_Mats.jpg', tag: 'Protection' },
  { title: 'Tailored Carpet Mats', description: 'A clean, comfortable fit made for your vehicle’s floor space.', image: '/accessories/fitted-mats.jpg', imageCredit: 'Keystones · CC BY-SA 3.0', imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Car_mats_fitted.jpg', tag: 'Protection' },
  { title: 'Cabin Styling', description: 'Thoughtful interior details for a cabin that feels like your own.', image: '/accessories/seat-cover.png', imageCredit: 'Amaijani12 · CC BY-SA 4.0', imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Car-seat-cover.png', tag: 'Interior' },
  { title: 'Comfort Accessories', description: 'Practical finishing touches for daily commutes and longer journeys.', image: '/accessories/eva-mats.jpg', imageCredit: 'EVACARMAT · CC BY-SA 4.0', imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Eva_Car_Mats.jpg', tag: 'Comfort' },
  { title: 'Bus & Traveller Accessories', description: 'Comfort-focused upgrades for commercial and family travel.', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=85', tag: 'Commercial' },
];

export const gallery = [
  { title: 'Custom seat covers', image: seatCoverImages[0] },
  { title: '7D EVA floor mats', image: '/accessories/eva-mats.jpg', imageCredit: 'EVACARMAT · CC BY-SA 4.0', imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Eva_Car_Mats.jpg' },
  { title: 'Tailored carpet mats', image: '/accessories/fitted-mats.jpg', imageCredit: 'Keystones · CC BY-SA 3.0', imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Car_mats_fitted.jpg' },
];

export const reviews = [
  { quote: 'The finishing is excellent and the guidance was honest from start to finish. My car feels completely new.', name: 'Happy customer', location: 'Bhavnagar' },
  { quote: 'Amitbhai understands quality. The seat covers were neat, quick and premium.', name: 'Happy customer', location: 'Gujarat' },
  { quote: 'Trusted work, fair advice and great attention to detail. I recommend Amit Motor to every car owner.', name: 'Happy customer', location: 'Bhavnagar' },
];

export function whatsappLink(message = 'Hello Amit Motor Car Accessories, I would like to enquire about your services.') {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
