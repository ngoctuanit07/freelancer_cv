import { Mail, Phone, Globe, Laptop } from 'lucide-react';

// ĐÃ XÓA TOÀN BỘ IMPORT HÌNH ẢNH (g1 đến g9) TẠI ĐÂY

export const CONTENT = {
  profile: {
    name: "Tuan Nguyen",
    role: "Freelance Web Developer in Vietnam | Laravel, WordPress, Node.js, Python",
    email: "Tuannguyen0719@gmail.com",
    phone: "+84 984 350 829",
    address: "178/61 HUYNH VAN LUY STREET, PHU LOI WARD, HO CHI MINH CITY, VIETNAM",
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
       { name: "Node.js", percentage: 85 },
         { name: "Python", percentage: 85 },
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
      { 
        title: "Software Engineering — Thu Duc College of Technology (TDC)", 
        period: "2009 - 2012", 
        description: "Graduated with a major in Software Engineering. Built solid engineering foundations in Object-Oriented Programming (OOP), database design (MySQL), data structures & algorithms, and web application architecture." 
      },
      { 
        title: "Continuous Professional Development & Technology Research", 
        period: "2013 - Present", 
        description: "Proactive self-driven mastery of modern web ecosystems: PHP (Laravel, WordPress), JavaScript/TypeScript (Vue.js, Node.js), Python, along with Linux server deployment (LEMP/LAMP) and CI/CD pipelines." 
      },
      { 
        title: "Core Engineering Competencies & Architecture", 
        period: "Career Focus", 
        description: "Specialized in scalable RESTful API design, Single-Page Application (SPA) architecture, web performance & speed optimization, and responsive UI/UX implementation." 
      },
    ],
    work: [
      { 
        title: "Senior Frontend Developer — Viet A Technology JSC", 
        period: "08/2018 - Present", 
        description: "Lead frontend engineering for medical systems and enterprise web platforms.",
        responsibilities: [
          "Architect and deliver responsive Single-Page Applications (SPA) for clinic management and healthcare systems using Vue.js, Vuex, and component-driven UI.",
          "Integrate secure RESTful APIs and ensure seamless data synchronization between frontend interfaces and backend microservices.",
          "Optimize rendering performance and asset delivery, reducing page load times and elevating user experience across devices.",
          "Collaborate closely with backend engineers and product owners in Agile sprints, ensuring high code quality and maintainability."
        ] 
      },
      { 
        title: "E-Commerce Developer (Magento Specialist) — PhuNam Technology / Levinci LLC", 
        period: "2016 - 08/2018", 
        description: "Specialized in building scalable e-commerce portals on Magento 1 & Magento 2.",
        responsibilities: [
          "Developed, customized, and deployed custom Magento themes and modular extensions matching client business logic.",
          "Maintained and optimized high-traffic online stores, ensuring 99.9% uptime and smooth checkout experiences.",
          "Integrated third-party APIs including secure payment gateways, automated shipping providers, and inventory systems.",
          "Tuned database queries and full-page caching to accelerate load speeds and improve conversion rates."
        ] 
      },
      { 
        title: "Web Developer — Vinadigistar IT & Solution", 
        period: "2014", 
        description: "Full-cycle website development and internal CMS feature programming.",
        responsibilities: [
          "Engineered custom modules and dynamic features for the company's proprietary CMS using PHP and MySQL.",
          "Converted designer mockups into responsive, semantic HTML5, CSS3, and JavaScript web interfaces.",
          "Handled website maintenance, cross-browser debugging, and customer deployment support."
        ] 
      },
    ]
  },
  portfolioIntro: {
    badge: "Interactive UI & HTML Demos",
    title: "Web Development Portfolio",
    subtitle: "Turn Any HTML Prototype Into a Dynamic WordPress Theme or Full-Stack Application",
    description: "Browse my collection of interactive HTML/UI demos below. Found a design that fits your business vision? I can seamlessly convert any of these front-end templates into a fully customized WordPress theme, or build it into a high-performance web application using Laravel, Node.js, or Python — complete with custom database architecture, secure APIs, and an intuitive admin panel.",
    conversionServices: [
      {
        tag: "WordPress CMS",
        title: "HTML to WordPress Theme",
        description: "Convert static templates into dynamic, Gutenberg/ACF-ready WordPress themes with full WooCommerce store integration."
      },
      {
        tag: "Laravel Framework",
        title: "HTML to Laravel Web App",
        description: "Engineer custom business logic, secure authentication, role permissions, and scalable database backends."
      },
      {
        tag: "Node.js & Python",
        title: "HTML to Node.js / Python API",
        description: "Develop high-speed RESTful APIs, real-time features, automated data pipelines, and microservices."
      }
    ]
  },
  projects: [
    {
      id: "p1",
      title: "Tascon Construction",
      category: "WordPress",
      subTitle: "Live HTML Demo • Ready for WordPress / Laravel",
      description: "Clean corporate UI demo for construction & architecture. Ready to convert into a dynamic WordPress CMS or Laravel web portal with quotation workflows.",
      image: "./assets/images/portfolio/g1.jpg",
      link: "https://jacklabs.io.vn/",
      tags: ["HTML5 Demo", "WordPress Theme", "Laravel"]
    },
    {
      id: "p2",
      title: "BAMC Media & Portal",
      category: "WordPress",
      subTitle: "Live HTML Demo • High-Traffic Media Ready",
      description: "High-performance news portal interface. Can be deployed on WordPress with advanced caching or built with Node.js/Python for real-time article delivery.",
      image: "./assets/images/portfolio/g2.png",
      link: "https://jacklabs.io.vn/",
      tags: ["HTML5 Demo", "WordPress", "Node.js"]
    },
    {
      id: "p3",
      title: "BHG Electronics E-Commerce",
      category: "WordPress",
      subTitle: "Live HTML Demo • E-Commerce Ready",
      description: "Modern electronics store UI. Convertible into a WooCommerce shop or a custom Laravel/Python e-commerce platform with automated payment gateways.",
      image: "./assets/images/portfolio/g3.png",
      link: "https://jacklabs.io.vn/",
      tags: ["HTML5 Demo", "WooCommerce", "Laravel"]
    },
    {
      id: "p4",
      title: "Jacklabs Portfolio & Agency",
      category: "WordPress",
      subTitle: "Live HTML Demo • Personal Branding & Agency",
      description: "Personal branding and digital service portfolio site with fast loading speed, interactive animations, and responsive layout.",
      image: "./assets/images/portfolio/g4.png",
      link: "https://jacklabs.io.vn/",
      tags: ["HTML5 Demo", "WordPress", "Branding"]
    },
    {
      id: "p5",
      title: "SM Real Estate Platform",
      category: "Laravel",
      subTitle: "Live HTML Demo • Real Estate Portal",
      description: "Real estate listing interface featuring advanced filtering and map integration. Ready to integrate with Laravel or Python (FastAPI/Django) backend.",
      image: "./assets/images/portfolio/g5.png",
      link: "https://jacklabs.io.vn/",
      tags: ["HTML5 Demo", "Laravel", "Python"]
    },
    {
      id: "p6",
      title: "Vieta Medical Corporate",
      category: "Laravel",
      subTitle: "Live HTML Demo • Healthcare Corporate",
      description: "Medical equipment corporate site with product catalog, certification showcase, and direct inquiry workflow.",
      image: "./assets/images/portfolio/g6.png",
      link: "https://jacklabs.io.vn/",
      tags: ["HTML5 Demo", "Laravel", "Healthcare"]
    },
    {
      id: "p7",
      title: "Vieta Corp Identity",
      category: "Laravel",
      subTitle: "Live HTML Demo • Enterprise Identity",
      description: "Enterprise corporate identity site designed for scalability, multi-language support, and high-security compliance.",
      image: "./assets/images/portfolio/g8.png",
      link: "https://jacklabs.io.vn/",
      tags: ["HTML5 Demo", "Laravel", "Enterprise"]
    },
    {
      id: "p8",
      title: "VAC Healthcare & Clinic SPA",
      category: "Vue.js",
      subTitle: "Live Frontend Demo • SPA Architecture",
      description: "Clinic management interface built with Vue.js SPA. Connects seamlessly with Node.js, Python, or Laravel APIs for appointment booking and patient records.",
      image: "./assets/images/portfolio/g9.png",
      link: "https://jacklabs.io.vn/",
      tags: ["Vue.js SPA", "Node.js API", "Laravel"]
    },
    {
      id: "p9",
      title: "Ben Tre Shop Fashion",
      category: "Magento2",
      subTitle: "Live HTML Demo • Fashion E-Commerce",
      description: "High-end fashion e-commerce store with product filtering, cart drawer, and optimized checkout flow for WordPress or Magento.",
      image: "./assets/images/portfolio/g7.jpg",
      link: "https://jacklabs.io.vn/",
      tags: ["HTML5 Demo", "WooCommerce", "Magento2"]
    }
  ]
};