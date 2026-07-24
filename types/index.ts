export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
  buttonLink: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  service?: string;
}
