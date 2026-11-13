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
  ],
  templatesIntro: {
    badge: "Ready-to-Deploy Templates",
    title: "Web Templates & Full-Stack Solutions",
    subtitle: "Custom-Built HTML Templates • Turnkey Frontend & Backend Delivery",
    description: "Explore my curated collection of 15 production-ready HTML templates across various industries. Every template can be completely customized and converted into a full-stack, dynamic web application using Laravel, WordPress, or Next.js — delivering both high-performance frontend interfaces and robust backend management.",
    fullStackNotice: {
      headline: "Full-Stack Custom Development Available",
      subheadline: "Need more than a static template? I can build the complete frontend and backend for your selected design using:",
      stacks: [
        {
          name: "Laravel",
          badge: "Full-Stack / API",
          desc: "Custom Admin CMS, secure authentication, relational databases (MySQL/PostgreSQL), RESTful APIs, order processing, and payment gateway integration (Stripe, PayPal, VNPay).",
          features: ["Custom Admin Panel", "RESTful API Backend", "Scalable Database Architecture", "Payment & Webhook Integration"]
        },
        {
          name: "WordPress / WooCommerce",
          badge: "CMS & E-Commerce",
          desc: "Full custom theme conversion, Gutenberg / ACF custom fields, WooCommerce store configuration, multi-currency support, and easy non-technical content management.",
          features: ["Custom Theme Conversion", "WooCommerce Integration", "SEO & Speed Optimization", "User-Friendly Dashboard"]
        },
        {
          name: "Next.js & React",
          badge: "Modern Jamstack",
          desc: "High-performance Server-Side Rendering (SSR) & Static Generation (SSG), lightning-fast page transitions, API routes, and seamless Headless CMS integration.",
          features: ["SSR & SSG Performance", "Headless CMS Integration", "Interactive UI Components", "Production Edge Deployment"]
        }
      ]
    }
  },
  templates: [
    {
      id: "tpl-bags",
      title: "Bags & Luxury Accessories",
      category: "Fashion & Lifestyle",
      tagline: "High-End E-Commerce Storefront",
      description: "A refined, minimalist online boutique tailored for luxury handbags, leather goods, and fashion accessories with rich product filtering and wishlist support.",
      image: "./assets/images/templates/bags.png",
      demoUrl: "https://bagstemplate.vercel.app/",
      tags: ["E-Commerce", "Accessories", "Bags"],
      supportedStacks: ["Laravel", "WordPress", "Next.js"],
      features: ["Filterable catalog", "Quick view drawer", "Mobile-optimized cart", "Brand story section"]
    },
    {
      id: "tpl-beauty",
      title: "Beauty, Cosmetics & Skincare",
      category: "Health & Wellness",
      tagline: "Modern Beauty & Organic Wellness",
      description: "Pastel-accented e-commerce design built for cosmetic lines, organic skincare brands, and wellness salons with product highlight tabs and mega menu.",
      image: "./assets/images/templates/beauty.png",
      demoUrl: "https://beautytemplate.vercel.app/",
      tags: ["Cosmetics", "Skincare", "Beauty"],
      supportedStacks: ["Laravel", "WordPress", "Next.js"],
      features: ["Skincare routine tabs", "Customer reviews slider", "Newsletter popup", "Ingredients highlight"]
    },
    {
      id: "tpl-fashion7",
      title: "Fashion 7 Apparel & Invoicing",
      category: "Fashion & Lifestyle",
      tagline: "Retail Apparel with Built-In Invoicing",
      description: "Full-scale fashion store template equipped with multiple ready-to-use invoice layouts, email notification designs, and seasonal lookbook sliders.",
      image: "./assets/images/templates/fashion-7.png",
      demoUrl: "https://fashion-7template.vercel.app/",
      tags: ["Fashion", "Apparel", "Invoice UI"],
      supportedStacks: ["Laravel", "WordPress", "Next.js"],
      features: ["5 Invoice templates", "Email announcement UI", "Trending fashion slider", "Countdown promotions"]
    },
    {
      id: "tpl-goggles",
      title: "Eyewear, Sunglasses & Goggles",
      category: "Fashion & Lifestyle",
      tagline: "Designer Eyewear & Optics Shop",
      description: "Sleek and focused storefront designed for designer sunglasses, optical frames, and sports eyewear with interactive frame category previews.",
      image: "./assets/images/templates/goggles.png",
      demoUrl: "https://gogglestemplate.vercel.app/",
      tags: ["Eyewear", "Sunglasses", "Optical"],
      supportedStacks: ["Laravel", "WordPress", "Next.js"],
      features: ["Frame shape filter", "Lens type selector", "High-res zoom", "Responsive checkout"]
    },
    {
      id: "tpl-gradient-v1",
      title: "Gradient Tech Store v1",
      category: "Creative & Showcase",
      tagline: "Vibrant Gradient Tech & Gadgets",
      description: "High-energy gradient aesthetic with multi-currency selector, multi-language toggles, and modular promo banners for tech gear and creative gadgets.",
      image: "./assets/images/templates/gradient-v1.png",
      demoUrl: "https://gradienttemplate.vercel.app/",
      tags: ["Gradient UI", "Multi-Currency", "Gadgets"],
      supportedStacks: ["Laravel", "WordPress", "Next.js"],
      features: ["Multi-currency switch", "Language selector", "Vibrant gradient styling", "Product card hover effects"]
    },
    {
      id: "tpl-gym",
      title: "Gym, Fitness & Protein Nutrition",
      category: "Health & Wellness",
      tagline: "Athletic Club & Sports Nutrition",
      description: "Dynamic, dark-mode athletic storefront for gym facilities, fitness trainers, and protein supplement stores with nutrition breakdown sections.",
      image: "./assets/images/templates/gym.png",
      demoUrl: "https://gymtemplate-phi.vercel.app/",
      tags: ["Gym", "Fitness", "Supplements"],
      supportedStacks: ["Laravel", "WordPress", "Next.js"],
      features: ["Supplement nutrition facts", "Trainer merchandise", "Subscription packs", "High-contrast dark UI"]
    },
    {
      id: "tpl-gradient-v2",
      title: "Gradient Creative Shop v2",
      category: "Creative & Showcase",
      tagline: "Modern Fluid Gradient Storefront",
      description: "Contemporary storefront layout featuring smooth gradient blends, tabbed collection showcases, promotional banners, and clean typography.",
      image: "./assets/images/templates/gradient-v2.png",
      demoUrl: "https://gradienttemplate-kx3p.vercel.app/",
      tags: ["Gradient UI", "Modern Retail", "Showcase"],
      supportedStacks: ["Laravel", "WordPress", "Next.js"],
      features: ["Fluid color gradients", "Tabbed collections", "Featured deals banner", "Clean mobile drawer"]
    },
    {
      id: "tpl-kids",
      title: "Kids & Baby Fashion Store",
      category: "Fashion & Lifestyle",
      tagline: "Playful Children Apparel & Toys",
      description: "Joyful and family-friendly e-commerce theme tailored for children's clothing, toys, and baby essentials with intuitive age-based navigation.",
      image: "./assets/images/templates/kids.png",
      demoUrl: "https://kidstemplate.vercel.app/",
      tags: ["Kids Fashion", "Baby Care", "Toys"],
      supportedStacks: ["Laravel", "WordPress", "Next.js"],
      features: ["Age category filters", "Playful iconography", "Safety badges display", "Bundle deal sections"]
    },
    {
      id: "tpl-lookbook",
      title: "Editorial Fashion Lookbook",
      category: "Fashion & Lifestyle",
      tagline: "High-Fashion Editorial & Catalog",
      description: "Magazine-inspired visual catalog built for fashion houses and independent designers featuring lookbook storytelling and interactive product tags.",
      image: "./assets/images/templates/lookbook.png",
      demoUrl: "https://lookbooktemplate.vercel.app/",
      tags: ["Lookbook", "Editorial", "High Fashion"],
      supportedStacks: ["Laravel", "WordPress", "Next.js"],
      features: ["Full-bleed photography", "Interactive lookbook pins", "Designer notes", "Minimalist checkout"]
    },
    {
      id: "tpl-medical",
      title: "Medical & Healthcare Supplies",
      category: "Health & Wellness",
      tagline: "Clinical Equipment & Pharmacy",
      description: "Trust-oriented professional layout for pharmacies, medical device distributors, and clinic supplies with structured prescription notes and categories.",
      image: "./assets/images/templates/medical.png",
      demoUrl: "https://medicaltemplate-ecru.vercel.app/",
      tags: ["Medical", "Healthcare", "Pharmacy"],
      supportedStacks: ["Laravel", "WordPress", "Next.js"],
      features: ["Prescription upload UI", "Clinical category tree", "Regulatory compliance badges", "Bulk order request"]
    },
    {
      id: "tpl-parallax",
      title: "Parallax Interactive Experience",
      category: "Creative & Showcase",
      tagline: "3D Depth & Narrative Scrolling",
      description: "Visually immersive template featuring smooth parallax scrolling layers, full-screen hero slides, and cinematic storytelling for innovative brands.",
      image: "./assets/images/templates/parallax.png",
      demoUrl: "https://parallaxtemplate-alpha.vercel.app/",
      tags: ["Parallax", "Motion", "Storytelling"],
      supportedStacks: ["Laravel", "WordPress", "Next.js"],
      features: ["Multi-layer parallax", "Smooth scroll physics", "Fullscreen hero visuals", "Interactive micro-animations"]
    },
    {
      id: "tpl-pets",
      title: "Pet Shop & Animal Care",
      category: "Retail & Specialty",
      tagline: "Pet Food, Care & Accessories",
      description: "Heartwarming and approachable storefront for pet supply shops, veterinary clinics, grooming salons, and animal adoption centers.",
      image: "./assets/images/templates/pets.png",
      demoUrl: "https://petstemplate.vercel.app/",
      tags: ["Pets", "Pet Food", "Animal Care"],
      supportedStacks: ["Laravel", "WordPress", "Next.js"],
      features: ["Pet type filter (Dog/Cat/Fish)", "Dietary food filters", "Grooming booking UI", "Customer pet photo gallery"]
    },
    {
      id: "tpl-vegetables",
      title: "Organic Grocery & Fresh Market",
      category: "Retail & Specialty",
      tagline: "Farm-Fresh Produce & Supermarket",
      description: "Fresh green-themed grocery marketplace featuring fresh produce categories, daily deal timers, weight-based quantity selectors, and delivery slots.",
      image: "./assets/images/templates/vegetables.png",
      demoUrl: "https://vegetables-5template.vercel.app/",
      tags: ["Organic Food", "Grocery", "Fresh Market"],
      supportedStacks: ["Laravel", "WordPress", "Next.js"],
      features: ["Weight & quantity selector", "Daily fresh deals banner", "Delivery time selector UI", "Organic certification tags"]
    },
    {
      id: "tpl-video",
      title: "Video Background Beauty Showcase",
      category: "Creative & Showcase",
      tagline: "Multimedia Hero & Luxury Cosmetics",
      description: "Captivating retail storefront featuring autoplay background video hero banners, luxury aesthetics, drawer filters, and high-impact promotions.",
      image: "./assets/images/templates/video.png",
      demoUrl: "https://videotemplate-five.vercel.app/",
      tags: ["Video BG", "Multimedia", "Cosmetics"],
      supportedStacks: ["Laravel", "WordPress", "Next.js"],
      features: ["HTML5 Video background", "Slide-out filter drawer", "Luxury cosmetic cards", "Newsletter capture"]
    },
    {
      id: "tpl-yoga",
      title: "Yoga Studio & Online Classes",
      category: "Health & Wellness",
      tagline: "Next.js Wellness & Class Booking",
      description: "Full Next.js wellness platform featuring yoga class schedule timetable, instructor biographies, membership tiers, wellness blog, and cart booking.",
      image: "./assets/images/templates/yoga.png",
      demoUrl: "https://yogatemplate.vercel.app/",
      vercelProjectUrl: "https://vercel.com/walters-projects-2196e8f3/yoga_template",
      tags: ["Next.js", "Yoga Studio", "Class Booking"],
      supportedStacks: ["Next.js", "Laravel", "WordPress"],
      features: ["Weekly class schedule UI", "Instructor profiles", "Membership pricing cards", "Online booking flow"]
    }
  ]
};
