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
    badge: "Completed Products",
    title: "Products I Have Built",
    subtitle: "End-to-End SaaS Platforms for Real-World Operations",
    description: "A selection of complete, working products I have designed and developed for property management, restaurants, retail operations, and schools. Explore each live application to see the user experience and core workflows in action."
  },
  projects: [
    {
      id: "p1",
      title: "Rentora",
      category: "Property Management",
      subTitle: "Rental Management & Tenant Portal",
      description: "An integrated rental platform connecting landlords, property managers, and tenants with property search, online applications, leases, rent payments, and maintenance requests.",
      image: "./assets/images/portfolio/rentora.png",
      link: "https://rentora-lac.vercel.app/",
      tags: ["Property SaaS", "Tenant Portal", "Full Stack"]
    },
    {
      id: "p2",
      title: "TableTrack",
      category: "Restaurant SaaS",
      subTitle: "Restaurant Operations Platform",
      description: "A complete restaurant management system with POS sales, QR ordering, kitchen displays, table reservations, reporting, and staff management for single or multi-branch operations.",
      image: "./assets/images/portfolio/restaurant-saas.png",
      link: "https://restaurant-sass-zeta.vercel.app/",
      tags: ["Restaurant SaaS", "POS", "QR Ordering"]
    },
    {
      id: "p3",
      title: "Stocky SaaS",
      category: "Retail SaaS",
      subTitle: "Inventory, POS & Multi-Channel Sales",
      description: "An all-in-one retail platform combining multi-warehouse inventory, barcode POS, an e-commerce storefront, and subscription billing in a single operational system.",
      image: "./assets/images/portfolio/stocky-saas.png",
      link: "https://stocky-saas.vercel.app/",
      tags: ["Inventory", "Retail POS", "E-Commerce"]
    },
    {
      id: "p4",
      title: "SOA School Management",
      category: "Education",
      subTitle: "Comprehensive School Management System",
      description: "A role-based school operations platform for administrators, teachers, accountants, librarians, parents, and students, with dedicated account and card-based access.",
      image: "./assets/images/portfolio/school-management.png",
      link: "https://school-management-six-pink.vercel.app/",
      tags: ["School ERP", "Role-Based Access", "Management"]
    }
  ]
};
