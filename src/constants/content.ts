import { Mail, Phone, Globe, Laptop } from 'lucide-react';

export const CONTENT = {
  profile: {
    name: "Tuan Nguyen",
    role: "Freelance Web Developer in Vietnam | Laravel, WordPress, Node.js, Python",
    email: "Tuannguyen0719@gmail.com",
    phone: "+84 984 350 829",
    address: "C2/22 Thuan Giao Residential Area, Thuan Giao Ward, Thuan An City, Binh Duong Province",
    socials: [
      { platform: "Website", url: "https://jacklabs.io.vn/", icon: Globe },
      { platform: "Email", url: "mailto:Tuannguyen0719@gmail.com", icon: Mail },
      { platform: "Portfolio", url: "https://jacklabs.io.vn/", icon: Laptop },
      { platform: "Phone", url: "tel:+84984350829", icon: Phone },
    ],
    summary: "I am a freelance web developer in Vietnam specializing in Laravel, WordPress, Node.js, and Python. I provide website maintenance, custom web development, and feature development services for businesses, startups, and growing companies at a flexible hourly rate of $12/hour.",
    tags: ["Freelance Laravel Developer", "Freelance WordPress Developer", "Freelance Node.js Developer", "Freelance Python Developer", "Website Maintenance", "Custom Web Development", "Feature Development", "$12/hour"]
  },
  expertise: [
    {
      title: "Custom Web Development",
      desc: "Building modern websites and web applications with Laravel, WordPress, Node.js, and Python for startups, agencies, and growing businesses.",
      icon: "Target"
    },
    {
      title: "Website Maintenance & Feature Development",
      desc: "Maintaining existing websites, fixing issues, writing new features, and improving performance for long-term business growth.",
      icon: "Code"
    },
    {
      title: "Backend & API Solutions",
      desc: "Creating scalable backend systems, APIs, and integrations with PHP, Laravel, Node.js, and Python to support modern products.",
      icon: "Layers"
    }
  ],
  skills: {
    technical: [
      { name: "Vue.js", percentage: 90 },
      { name: "Laravel Framework", percentage: 85 },
      { name: "Magento2", percentage: 88 },
      { name: "WordPress", percentage: 92 },
      { name: "PHP OOP", percentage: 87 },
      { name: "HTML5 & CSS3", percentage: 93 },
    ],
    professional: [
      { name: "Teamwork", percentage: 90 },
      { name: "Communication", percentage: 92 },
      { name: "Project Management", percentage: 88 },
      { name: "Customer Relations", percentage: 85 },
    ]
  },
  experience: {
    education: [
      { title: "Study Thu Duc Technology College", period: "2009-2012", description: "Bachelor degree in software engineering." },
      { title: "Continuous Professional Learning", period: "2013-Present", description: "Self-driven learning in Magento2, WordPress, Laravel, Vue.js and Linux server management." },
      { title: "Core Knowledge Areas", period: "Career Focus", description: "UI/UX implementation, project management and customer communication for dynamic web systems." },
    ],
    work: [
      { 
        title: "Technician - Vinadigistar IT & Solution", 
        period: "2014", 
        description: "Role as a general IT technician",
        responsibilities: ["Website design", "New module programming for company CMS"] 
      },
      { 
        title: "Magento Technician - PhuNam Technology / Levinci LLC", 
        period: "2016-08/2018", 
        description: "Specialized in e-commerce",
        responsibilities: ["Develop and maintain Magento projects", "Write themes and extensions"] 
      },
      { 
        title: "Frontend Technician - Viet A Technology JSC", 
        period: "08/2018-Present", 
        description: "Senior frontend role",
        responsibilities: ["Build clinic software interfaces with Vue.js", "Deliver frontend features for enterprise web systems"] 
      },
    ]
  },
  projects: [
    {
      id: "p1",
      title: "tascon.vn",
      category: "WordPress",
      subTitle: "WordPress",
      description: "Professional corporate website focusing on construction services.",
      image: "assets/images/portfolio/g1.jpg",
      link: "#",
      tags: ["WordPress", "UI/UX"]
    },
    {
      id: "p2",
      title: "bamc.com.vn",
      category: "WordPress",
      subTitle: "WordPress",
      description: "News and media portal with high traffic handling.",
      image: "assets/images/portfolio/g2.png",
      link: "#",
      tags: ["WordPress", "Performance"]
    },
    {
      id: "p3",
      title: "bhg.com.vn",
      category: "WordPress",
      subTitle: "WordPress",
      description: "E-commerce specialized for electronics.",
      image: "assets/images/portfolio/g3.png",
      link: "#",
      tags: ["WordPress", "E-commerce"]
    },
    {
      id: "p4",
      title: "jacklabs.io.vn",
      category: "WordPress",
      subTitle: "WordPress",
      description: "Personal branding and portfolio site.",
      image: "assets/images/portfolio/g4.png",
      link: "#",
      tags: ["WordPress", "Branding"]
    },
    {
      id: "p5",
      title: "smreal.vn",
      category: "Laravel",
      subTitle: "WordPress",
      description: "Real estate portal with advanced search and filtering.",
      image: "assets/images/portfolio/g5.png",
      link: "#",
      tags: ["Laravel", "Real Estate"]
    },
    {
      id: "p6",
      title: "vietamedical.com",
      category: "Laravel",
      subTitle: "Laravel",
      description: "Medical equipment corporate site.",
      image: "assets/images/portfolio/g6.png",
      link: "#",
      tags: ["Laravel", "Healthcare"]
    },
    {
      id: "p7",
      title: "vietacorp.com",
      category: "Laravel",
      subTitle: "Laravel",
      description: "Enterprise corporate identity site.",
      image: "assets/images/portfolio/g8.png",
      link: "#",
      tags: ["Laravel", "Corporate"]
    },
    {
      id: "p8",
      title: "vacclinic.vietamedical.com",
      category: "Vue.js",
      subTitle: "Vue.js",
      description: "Clinic management system frontend.",
      image: "assets/images/portfolio/g9.png",
      link: "#",
      tags: ["Vue.js", "SPA"]
    },
    {
      id: "p9",
      title: "bentreshop.com",
      category: "Magento2",
      subTitle: "Magento2",
      description: "High-end e-commerce store for fashion.",
      image: "assets/images/portfolio/g7.jpg",
      link: "#",
      tags: ["Magento2", "E-commerce"]
    }
  ]
};
