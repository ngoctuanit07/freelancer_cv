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
