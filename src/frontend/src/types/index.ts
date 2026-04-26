export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  details: string[];
  duration: string;
  category: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface NavLink {
  label: string;
  href: string;
}
