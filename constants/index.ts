export type Sneaker = {
  id: string;
  title: string;
  name: string;
  image: string;
};

const navLinks: { id: string; href: string; title: string }[] = [
  {
    id: 'nv-1',
    href: '#',
    title: 'Brands',
  },
  {
    id: 'nv-2',
    href: '/about',
    title: 'About',
  },
  {
    id: 'nv-3',
    href: '/contact',
    title: 'Contact',
  },
  {
    id: 'nv-4',
    href: '#faqs',
    title: 'FAQs',
  },
];

const brands: { id: string; href: string; title: string }[] = [
  {
    id: 'br-1',
    href: '/brands',
    title: 'All',
  },
  {
    id: 'br-2',
    href: '/brands/nike',
    title: 'Nike',
  },
  {
    id: 'br-3',
    href: '/brands/adida',
    title: 'Adida',
  },
  {
    id: 'br-4',
    href: '/brands/rebook',
    title: 'Nike',
  },
  {
    id: 'br-5',
    href: '/brands/veja',
    title: 'Veja',
  },
  {
    id: 'br-6',
    href: '/brands/new-balance',
    title: 'New Balance',
  },
];

const heroStats: { id: string; title: string; value: string }[] = [
  {
    id: 'hero-stat-1',
    title: 'Brands',
    value: '108+',
  },
  {
    id: 'hero-stat-2',
    title: 'Models',
    value: '2,000+',
  },
  {
    id: 'hero-stat-3',
    title: 'Customers',
    value: '500,000+',
  },
];

const heroTexts = ['Find', 'Compare', 'Buy'];

const newReleases: Sneaker[] = [
  {
    id: 'new-sneaker-1',
    title: 'Air Jordan',
    name: "Wmns Air Jordan 11 Retro 'Neapolitan'",
    image: '/images/new-sneaker-1.jpg',
  },
  {
    id: 'new-sneaker-2',
    title: 'Air Jordan',
    name: "Air Jordan 5 Retro SE 'Midnight Navy'",
    image: '/images/new-sneaker-2.jpg',
  },
  {
    id: 'new-sneaker-3',
    title: 'Air Jordan',
    name: "Air Jordan 1 Retro High OG 'Royal Reimagined'",
    image: '/images/new-sneaker-3.jpg',
  },
  {
    id: 'new-sneaker-4',
    title: 'Air Jordan',
    name: "Air Jordan 12 Retro 'Cherry' 2023",
    image: '/images/new-sneaker-4.jpg',
  },
  {
    id: 'new-sneaker-5',
    title: 'Air Jordan',
    name: "Air Jordan 6 Retro 'Aqua'",
    image: '/images/new-sneaker-5.jpg',
  },
  {
    id: 'new-sneaker-6',
    title: 'Nike',
    name: "Dunk Low 'Smoke Grey Gum'",
    image: '/images/new-sneaker-6.jpg',
  },
  {
    id: 'new-sneaker-7',
    title: 'Air Jordan',
    name: "Wmns Air Jordan 1 Retro High OG 'Satin Bred' 2023",
    image: '/images/new-sneaker-7.jpg',
  },
  {
    id: 'new-sneaker-8',
    title: 'Air Jordan',
    name: "Travis Scott x Air Jordan 1 Low Golf 'Neutral Olive'",
    image: '/images/new-sneaker-8.jpg',
  },
];

const topSellers: Sneaker[] = [
  {
    id: 'top-seller-1',
    title: 'Air Jordan',
    name: "Air Jordan 12 Retro 'Cherry' 2023",
    image: '/images/top-seller-1.jpg',
  },
  {
    id: 'top-seller-2',
    title: 'Nike',
    name: "Dunk Low 'Black White'",
    image: '/images/top-seller-2.jpg',
  },
  {
    id: 'top-seller-3',
    title: 'Nike',
    name: "Dunk Low 'Grey Fog'",
    image: '/images/top-seller-3.jpg',
  },
  {
    id: 'top-seller-4',
    title: 'Air Jordan',
    name: "Air Jordan 8 Retro 'Playoff' 2023",
    image: '/images/top-seller-4.jpg',
  },
  {
    id: 'top-seller-5',
    title: 'Air Jordan',
    name: "Air Jordan 1 Retro High OG 'Royal Reimagined'",
    image: '/images/top-seller-5.jpg',
  },
  {
    id: 'top-seller-6',
    title: 'Air Jordan',
    name: "Air Jordan 4 Retro 'Red Cement'",
    image: '/images/top-seller-6.jpg',
  },
  {
    id: 'top-seller-7',
    title: 'Nike',
    name: "Wmns Dunk Low 'Cacao Wow'",
    image: '/images/top-seller-7.jpg',
  },
  {
    id: 'top-seller-8',
    title: 'Nike',
    name: "Dunk Low GS 'Triple Pink'",
    image: '/images/top-seller-8.jpg',
  },
];

export { navLinks, brands, heroStats, heroTexts, newReleases, topSellers };
