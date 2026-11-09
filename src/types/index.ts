export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  deliveryTime: string;
  idealFor: string;
  badge?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'lojas' | 'restaurantes' | 'servicos' | 'barbearias' | 'oficinas';
  categoryLabel: string;
  client: string;
  location: string;
  image: string;
  metric: string;
  metricLabel: string;
  summary: string;
  fullStory: string;
  highlights: string[];
  liveFeatures: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  business: string;
  segment: string;
  city: string;
  avatarText: string;
  quote: string;
  result: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  price: string;
  installments: string;
  deliveryTime: string;
  description: string;
  included: string[];
  notIncluded?: string[];
  ctaLabel: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  snippet: string;
  readTime: string;
  date: string;
  category: string;
  content: string[];
  actionTip: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'prazos' | 'pagamento' | 'tecnologia' | 'suporte';
}
