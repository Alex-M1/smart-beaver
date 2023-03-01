export const urls = {
  main: 'http://localhost:3000',
  products: '/products',
  about_us: '/about_us',
  faq: '/faq',
  contact: '/contact',
  send_mail: '/api/send_mail',
  facebook: 'https://www.facebook.com/people/Smart-Beaver/100088857526559/',
  instagram: '',
  bathroom_vanities: '/bathroom_vanities',
  cabinet_doors: '/cabinet_doors',
  cabinet_finishing: '/cabinet_finishing',
  kitchen_cabinets: '/kitchen_cabinets',
  polities_and_terms: '/polities_and_terms',
  specialty_islands: '/specialty_islands',
  wood_species: '/wood_species',
  kitchen_quote: '/kitchen_quote',
  bathroom_quote: '/bathroom_quote',
};

export type Urls = keyof typeof urls;
