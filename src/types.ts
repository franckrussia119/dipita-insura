export interface Service {
  slug: string;
  icon: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  pricingTiers: {
    name: string;
    price: string;
    period: string;
    features: string[];
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  initials: string;
  bgClass: string;
  social: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  content: string;
  bgGradient: string;
}

export interface Testimonial {
  initials: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
  bgClass: string;
}
