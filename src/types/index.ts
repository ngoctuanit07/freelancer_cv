export interface SocialLink {
  platform: string;
  url: string;
  icon: any; 
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Experience {
  title: string;
  period: string;
  description: string;
  responsibilities?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  subTitle: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export type SupportedStack = 'Laravel' | 'WordPress' | 'Next.js';

export interface TemplateProduct {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  demoUrl: string;
  vercelProjectUrl?: string;
  tags: string[];
  supportedStacks: SupportedStack[];
  features?: string[];
}
