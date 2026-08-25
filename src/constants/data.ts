export const PROFILE = {
  name: "Satwik Saxena",
  title: "Full-Stack Developer & Backend Engineer",
  roles: [
    "Full-Stack Developer",
    "Backend Developer",
    "React.js Developer",
    "Spring Boot Developer",
    "AI Enthusiast",
  ],
  intro:
    "Passionate Full-Stack Developer specializing in scalable web applications, backend engineering, and AI-powered solutions. I enjoy building modern user experiences with React, robust APIs using Node.js and Spring Boot, and solving real-world problems through clean, efficient code.",
  location: "Moradabad, Uttar Pradesh, India",
  email: "satwiksaxena41@gmail.com",
  phone: "+91 8126666980",
  github: "https://github.com/satwik12dev",
  linkedin: "https://linkedin.com/in/satwik-saxena",
  resumeUrl: "/Resume.pdf",
};

export type NavItem = {
  id: string;
  label: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "skills",
    label: "Skills",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "projects",
    label: "Projects",
  },
  {
    id: "certifications",
    label: "Certificates",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

export type Education = {
  degree: string;
  school: string;
  period: string;
  detail: string;
};

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    school: "Teerthanker Mahaveer University",
    period: "2023 – 2027",
    detail:
      "Currently pursuing B.Tech in Computer Science with a CGPA of 9.18. Focused on Full-Stack Development, Backend Engineering, Artificial Intelligence, and Data Structures & Algorithms.",
  },
];

export type Skill = {
  name: string;
  color: string;
  level: number;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "AI & Tools";
  tag?: string;
};

export const SKILLS: Skill[] = [
  // Frontend
  {
    name: "React.js",
    color: "#61DAFB",
    level: 80,
    category: "Frontend",
    tag: "UI Library",
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    level: 95,
    category: "Frontend",
    tag: "ES6+ Core",
  },
  {
    name: "Tailwind CSS",
    color: "#38BDF8",
    level: 92,
    category: "Frontend",
    tag: "Modern Styling",
  },
  {
    name: "HTML5",
    color: "#E34F26",
    level: 96,
    category: "Frontend",
    tag: "Semantic Web",
  },
  {
    name: "CSS3",
    color: "#1572B6",
    level: 93,
    category: "Frontend",
    tag: "Animations",
  },

  // Backend
  {
    name: "Spring Boot",
    color: "#6DB33F",
    level: 70,
    category: "Backend",
    tag: "Java Framework",
  },
  {
    name: "Java",
    color: "#F89820",
    level: 85,
    category: "Backend",
    tag: "OOP & Systems",
  },
  {
    name: "Node.js",
    color: "#339933",
    level: 90,
    category: "Backend",
    tag: "Runtime",
  },
  {
    name: "Express.js",
    color: "#808080",
    level: 90,
    category: "Backend",
    tag: "API Framework",
  },
  {
    name: "REST APIs",
    color: "#22D3EE",
    level: 95,
    category: "Backend",
    tag: "Microservices",
  },
  {
    name: "MongoDB",
    color: "#47A248",
    level: 88,
    category: "Database",
    tag: "NoSQL Document",
  },
  {
    name: "MySQL",
    color: "#4479A1",
    level: 91,
    category: "Database",
    tag: "RDBMS",
  },

  // AI & Tools / DevOps
  {
    name: "Gemini AI / LLMs",
    color: "#A855F7",
    level: 50,
    category: "AI & Tools",
    tag: "GenAI Integration",
  },
  {
    name: "Postman",
    color: "#FF6C37",
    level: 80,
    category: "DevOps",
    tag: "API Testing & Docs",
  },
  {
    name: "Docker",
    color: "#2496ED",
    level: 70,
    category: "DevOps",
    tag: "Containers",
  },
  {
    name: "Git & GitHub",
    color: "#F05032",
    level: 75,
    category: "DevOps",
    tag: "Version Control",
  },
];
export type Experience = {
  role: string;
  company: string;
  period: string;
  year?: string;
  tag?: string;
  type?: string;
  location?: string;
  accent?: string;
  isCurrent?: boolean;
  certificateUrl?: string;
  certificateImage?: string;
  certificateId?: string;
  impactMetrics?: { label: string; value: string }[];
  description: string;
  stack: string[];
  highlights: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Full-Stack Developer (Freelance)",
    company: "TrustGates – Payment Operations",
    period: "Aug 2026 – Present",
    year: "Present",
    tag: "Payment Gateway CMS & Fintech Operations",
    type: "Freelance",
    location: "Remote",
    accent: "#06B6D4",
    isCurrent: true,
    impactMetrics: [
      { label: "REST APIs Built", value: "100+" },
      { label: "Manual Effort Cut", value: "~60%" },
      { label: "DB Efficiency", value: "+30%" },
    ],
    description:
      "Engineered an enterprise Payment Gateway CMS and Merchant Operations Platform with 100+ REST APIs for managing merchant lifecycles, real-time transaction processing, automated settlements, KYC verification, refund workflows, and operational analytics.",
    stack: [
      "Node.js",
      "Express.js",
      "React.js",
      "MySQL",
      "Redis",
      "JWT",
      "Razorpay APIs",
      "REST APIs",
    ],
    highlights: [
      "Built 100+ RESTful microservices for merchant onboarding, KYC verification, wallet transactions, and automated settlement cycles.",
      "Integrated Razorpay APIs and webhook listeners for real-time payment synchronization, reducing manual transaction tracking by ~60%.",
      "Implemented role-based access control (RBAC), KYC verification, API credential management, and IP whitelisting for high-security platform administration.",
      "Designed and optimized 15+ relational MySQL tables and indexing strategies, improving query retrieval performance by ~25%.",
      "Implemented Redis-based OTP verification, caching, and temporary session/token management, eliminating ~30% unnecessary database operations.",
    ],
  },

  {
    role: "Full Stack Developer Intern",
    company: "Kodexive Technologies",
    period: "June 2026 – Aug 2026",
    year: "2026",
    tag: "Enterprise CRM & Full-Stack Platform",
    type: "Internship",
    location: "On-site",
    accent: "#22D3EE",
    isCurrent: false,
    impactMetrics: [
      { label: "REST APIs Built", value: "80+" },
      { label: "Security System", value: "JWT & RBAC" },
      { label: "Production System", value: "ZymGo CRM" },
    ],
    description:
      "Engineered production-grade full-stack architecture for ZymGo, an enterprise Gym Management CRM. Developing responsive React interfaces, high-throughput REST APIs, implementing business logic, optimizing relational MySQL databases, and building robust role-based authentication.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST APIs",
      "JWT",
      "Docker",
    ],
    highlights: [
      "Built responsive frontend modules in React and developed 80+ secure backend REST APIs.",
      "Implemented secure JWT Authentication and Role-Based Access Control (RBAC).",
      "Designed and optimized relational MySQL databases for high concurrency and performance.",
      "Built automated business reporting pipelines with CSV and data export capabilities.",
      "Engineered automated member subscriptions, renewal tracking, and financial analytics dashboards.",
    ],
  },

  {
    role: "AI Intern",
    company: "IBM PBEL",
    period: "June 2025 – Aug 2025",
    year: "2025",
    tag: "Generative AI & LLM Systems",
    type: "Internship",
    location: "Virtual / IBM Labs",
    accent: "#A855F7",
    isCurrent: false,
    certificateUrl: "/certificate/PBEL.png",
    certificateImage: "/certificate/PBEL.png",
    certificateId: "IBM-PBEL-AI-2025",
    impactMetrics: [
      { label: "Core Focus", value: "LLMs & CNN" },
      { label: "Prompt Chains", value: "Engineered" },
      { label: "AI Workflows", value: "Production" },
    ],
    description:
      "Completed hands-on AI engineering through IBM SkillsBuild and PBEL, developing practical machine learning pipelines, prompt engineering architectures, and integrating Google Gemini AI and LLM APIs into real-world applications.",
    stack: [
      "Python",
      "Machine Learning",
      "Generative AI",
      "LLMs",
      "Prompt Engineering",
      "REST APIs",
    ],
    highlights: [
      "Built AI-powered applications leveraging Gemini AI and LLM API integrations.",
      "Engineered structured prompt chains and context injection for optimal inference accuracy.",
      "Trained and evaluated Computer Vision and CNN classification models.",
      "Integrated machine learning microservices into real-world business automation workflows.",
      "Demonstrated practical ML lifecycle mastery in collaborative agile sprints.",
    ],
  },

  {
    role: "Full Stack Developer",
    company: "Ezy Tranship",
    period: "Jan 2025 – May 2025",
    year: "2025",
    tag: "Logistics Web Platform",
    type: "College Project",
    location: "College Project",
    accent: "#10B981",
    isCurrent: false,
    impactMetrics: [
      { label: "Delivery", value: "100% Completed" },
      { label: "Architecture", value: "Full-Stack" },
      { label: "Performance", value: "Sub-second Query" },
    ],
    description:
      "Architected and built a commercial vehicle booking and logistics platform as a comprehensive college project, building high-speed backend search APIs and intuitive, responsive React user interfaces.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST APIs",
    ],
    highlights: [
      "Engineered end-to-end backend vehicle search, rental booking, and user management APIs.",
      "Crafted responsive and interactive modern UI components with clean React state management.",
      "Optimized MySQL database queries and indexing for rapid data retrieval.",
      "Maintained modular architecture with strict error handling and security practices.",
      "Successfully demonstrated complete booking and fleet management workflows.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  stack: string[];
  github: string;
  demo: string;
  accent: string;
  category?: "All" | "Full-Stack & Backend" | "AI & Gen-AI" | "Java & Systems";
  featured?: boolean;
  impact?: string;
  highlights?: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "Payment Gateway CMS – Merchant Operations Platform",
    description:
      "A high-throughput Payment Gateway CMS with 100+ REST APIs for centralized management of merchants, transactions, settlements, refunds, KYC verification, wallets, analytics, and payment operations.",
    image: "trustgates.png",
    stack: [
      "Node.js",
      "Express.js",
      "React.js",
      "MySQL",
      "Redis",
      "JWT",
      "Razorpay APIs",
      "REST APIs",
    ],
    github: "https://github.com/satwik12dev/trustgates-backend.git",
    demo: "https://trustgates.co.in/",
    accent: "#06B6D4",
    category: "Full-Stack & Backend",
    featured: true,
    impact: "100+ REST APIs • Razorpay & Redis",
    highlights: [
      "Centralized Admin & Merchant dashboards with 10+ operational metrics for real-time monitoring.",
      "Integrated Razorpay APIs & webhooks to synchronize payment data, reducing manual tracking by ~60%.",
      "Role-Based Access Control (RBAC), KYC verification, API credential management & IP whitelisting.",
      "Optimized 15+ MySQL tables & complex queries, improving data retrieval performance by ~25%.",
      "Implemented Redis-based OTP & session/token management, eliminating ~30% unnecessary DB operations.",
    ],
  },

  {
    title: "Gym Management CRM (ZymGo)",
    description:
      "A production-grade Gym Management CRM featuring role-based authentication, high-throughput REST APIs, member management, automated subscriptions, attendance tracking, revenue analytics, and CSV export automation.",
    image: "zym.png",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT & RBAC",
      "REST APIs",
    ],
    github: "https://github.com/satwik12dev/ZymGo.git",
    demo: "#",
    accent: "#22D3EE",
    category: "Full-Stack & Backend",
    featured: true,
    impact: "80+ REST APIs • Production System",
    highlights: [
      "Role-Based Access Control (Admin, Trainer, Member)",
      "Automated subscription renewal tracking & analytics",
      "High concurrency relational MySQL query optimization",
    ],
  },

  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered Resume Intelligence engine using Google Gemini AI that parses candidate resumes against job descriptions, calculates contextual ATS match scores, detects missing skills, and generates actionable tailoring advice.",
    image: "resumeanalyser.png",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini AI API",
      "TailwindCSS",
    ],
    github: "https://github.com/satwik12dev/Gen-AI-Resume-Analyzer.git",
    demo: "#",
    accent: "#A855F7",
    category: "AI & Gen-AI",
    featured: true,
    impact: "Google Gemini 1.5 • ATS Scoring",
    highlights: [
      "Context-aware ATS keyword gap analysis",
      "Multi-format document text extraction & parsing",
      "Interactive candidate match breakdown visualizer",
    ],
  },

  {
    title: "Authentication & Task Management API",
    description:
      "Enterprise-grade secure authentication microservice featuring access & refresh token rotation, bcrypt password hashing, PostgreSQL persistence, Docker containerization, and Swagger OpenAPI documentation.",
    image: "auth.png",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Docker",
      "Swagger",
    ],
    github: "https://github.com/satwik12dev/Auth-System-Task-API",
    demo: "#",
    accent: "#10B981",
    category: "Full-Stack & Backend",
    impact: "JWT Rotation • Dockerized API",
    highlights: [
      "Access & Refresh token dual-layer authentication",
      "Docker compose for rapid containerized deployment",
      "Complete Swagger UI interactive API test suite",
    ],
  },

  {
    title: "CRM Inventory Management System",
    description:
      "A full-stack inventory and warehouse operations system with secure JWT authentication, inventory CRUD, low-stock threshold triggers, multi-file image uploading, and interactive telemetry dashboards.",
    image: "crm.png",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "REST APIs",
    ],
    github: "https://github.com/satwik12dev/CRM-Inventory-System-.git",
    demo: "#",
    accent: "#3B82F6",
    category: "Full-Stack & Backend",
    impact: "Full CRUD • Real-time Stock Alerts",
    highlights: [
      "Instant low-stock automatic threshold alerts",
      "Multipart image upload & asset management",
      "Analytical dashboard for weekly product turnover",
    ],
  },

  {
    title: "AI Smart Email Generator",
    description:
      "An intelligent email composition engine built using React.js and Spring Boot that generates context-aware, polished business communications using Google Gemini AI across customizable tone presets.",
    image: "Email.png",
    stack: [
      "Spring Boot",
      "Java 17",
      "React.js",
      "Gemini AI",
      "Spring AI",
    ],
    github:
      "https://github.com/satwik12dev/Email-Generator-API-Using-Spring-Boot-and-Spring-AI",
    demo: "#",
    accent: "#EC4899",
    category: "AI & Gen-AI",
    impact: "Spring Boot 3 • Spring AI Integration",
    highlights: [
      "Context-injected LLM prompt engineering chains",
      "Multiple communication tones (Formal, Casual, Sales)",
      "High-speed reactive Spring Boot backend",
    ],
  },

  {
    title: "File Hider Secure Vault",
    description:
      "A robust Java CLI security application that encrypts and hides sensitive disk files using cryptographic ciphers, SMTP Two-Factor OTP authentication, and JDBC MySQL transaction storage.",
    image: "filehider.png",
    stack: [
      "Java",
      "SMTP 2FA",
      "JDBC",
      "MySQL",
      "Maven",
      "Cryptography",
    ],
    github: "https://github.com/satwik12dev/File-Hider",
    demo: "#",
    accent: "#F97316",
    category: "Java & Systems",
    impact: "AES Encryption • 2FA SMTP OTP",
    highlights: [
      "Two-factor OTP email verification before file access",
      "Binary file encryption & hidden storage",
      "Atomic JDBC database transaction control",
    ],
  },

  {
    title: "Commercial Vehicle Booking System",
    description:
      "A responsive vehicle rental platform built with modern JavaScript and Firebase, featuring real-time vehicle fleet search, booking management, automated invoicing, and sub-second query retrieval.",
    image: "ezy.png",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Firebase",
      "Node.js",
    ],
    github:
      "https://github.com/satwik12dev/LPBEI.git",
    demo: "#",
    accent: "#0EA5E9",
    category: "Full-Stack & Backend",
    impact: "Firebase DB • Fleet Booking API",
    highlights: [
      "Real-time fleet status & rental availability",
      "Dynamic price estimation and booking scheduling",
      "Responsive state management for mobile and desktop",
    ],
  },

  {
    title: "Cat & Dog Image Classification",
    description:
      "A Deep Learning computer vision system utilizing Convolutional Neural Networks (CNN) and TensorFlow to classify images with high accuracy, paired with an interactive Streamlit inference UI.",
    image: "cat.png",
    stack: [
      "Python",
      "TensorFlow",
      "CNN",
      "Deep Learning",
      "Streamlit",
      "Keras",
    ],
    github:
      "https://github.com/satwik12dev/Image-Classification-of-cat--and-dog-using-CNN-DL",
    demo: "#",
    accent: "#8B5CF6",
    category: "AI & Gen-AI",
    impact: "Convolutional Neural Nets • Streamlit UI",
    highlights: [
      "Multi-layer CNN architecture trained on Kaggle datasets",
      "Real-time image upload & probability prediction",
      "Data augmentation pipelines to prevent overfitting",
    ],
  },
];
export type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  color: string;
  description: string;
  image?: string;
  category?: "All" | "Cloud & DevOps" | "Backend & Core" | "AI & ML" | "Professional";
  skills?: string[];
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "May 2025",
    credentialId: "AWS-CCP-2025",
    color: "#FF9900",
    image: "/certificate/AWS.png",
    category: "Cloud & DevOps",
    skills: ["AWS Core Services", "Cloud Architecture", "IAM & Security", "Pricing Models"],
    description:
      "Validated knowledge of AWS Cloud fundamentals, core AWS services, security, pricing models, and cloud architecture best practices.",
  },

  {
    title: "Introduction to Cloud",
    issuer: "IBM Skills Network",
    date: "July 2025",
    credentialId: "IBM-CLOUD-2025",
    color: "#1261FE",
    image: "/certificate/Cloud.png",
    category: "Cloud & DevOps",
    skills: ["Cloud Computing", "Virtualization", "Cloud Models (IaaS/PaaS/SaaS)", "Infrastructure"],
    description:
      "Completed cloud computing fundamentals including cloud deployment models, virtualization, cloud services, and modern infrastructure concepts.",
  },

  {
    title: "Java Developer Certification",
    issuer: "IBM Skills Network",
    date: "June 2025",
    credentialId: "IBM-JAVA-2025",
    color: "#F89820",
    image: "/certificate/Java.png",
    category: "Backend & Core",
    skills: ["Java OOP", "Collections Framework", "Exception Handling", "Multithreading"],
    description:
      "Demonstrated strong understanding of Java programming, Object-Oriented Programming, collections, exception handling, multithreading, and backend development.",
  },

  {
    title: "Agile Methodology Certification",
    issuer: "IBM Skills Network",
    date: "January 2025",
    credentialId: "IBM-AGILE-2025",
    color: "#00B894",
    image: "/certificate/Agile.png",
    category: "Professional",
    skills: ["Agile Development", "Scrum Framework", "Git & Version Control", "Docker"],
    description:
      "Covered Agile Software Development, Scrum methodology, Version Control, Git, Docker, and collaborative software engineering practices.",
  },

  {
    title: "Developer Virtual Experience Program",
    issuer: "Accenture",
    date: "August 2025",
    credentialId: "ACCENTURE-DEV-2025",
    color: "#A100FF",
    image: "/certificate/Accenture.png",
    category: "Professional",
    skills: ["Architecture Design", "Software Engineering", "Security Practices", "Code Review"],
    description:
      "Completed developer job simulation covering system architecture, application development, debugging, and enterprise software engineering workflows.",
  },

  {
    title: "TCS iON Career Edge – Job Readiness",
    issuer: "TCS iON",
    date: "July 2025",
    credentialId: "TCS-ION-2025",
    color: "#0056D2",
    image: "/certificate/TCS-ION.png",
    category: "Professional",
    skills: ["Communication", "Workplace Readiness", "Interview Mastery", "Professional Ethics"],
    description:
      "Completed professional training focused on communication skills, interview preparation, workplace readiness, MS Office, and personality development.",
  },

  {
    title: "Project Based Experiential Learning (PBEL)",
    issuer: "IBM",
    date: "July 2025",
    credentialId: "IBM-PBEL-2025",
    color: "#6C5CE7",
    image: "/certificate/PBEL.png",
    category: "AI & ML",
    skills: ["Machine Learning", "Deep Learning", "CNN", "Python", "Model Deployment"],
    description:
      "Hands-on project experience in Artificial Intelligence, Machine Learning, Deep Learning, CNN, Python, Kaggle, and model deployment.",
  },

  {
    title: "Computer Architecture",
    issuer: "NPTEL - Swayam",
    date: "Jul 2025 – Oct 2025",
    credentialId: "NPTEL-CA-2025",
    color: "#E17055",
    image: "/certificate/CA.png",
    category: "Backend & Core",
    skills: ["Processor Design", "Pipelining", "Memory Hierarchy", "Cache Optimization"],
    description:
      "Successfully completed a 12-week NPTEL course covering processor organization, instruction sets, pipelining, memory hierarchy, cache optimization, and computer system architecture.",
  },
];

export const ABOUT_STATS = [
  {
    label: "Projects",
    value: 9,
    suffix: "+",
  },
  {
    label: "Certificates",
    value: 7,
    suffix: "+",
  },
  {
    label: "Technologies",
    value: 12,
    suffix: "+",
  },
  {
    label: "REST APIs Built",
    value: 100,
    suffix: "+",
  },
];
/* ---------------------------------------------
   CONTACT INFORMATION
---------------------------------------------- */

export const CONTACT = {
  email: "satwiksaxena41@gmail.com",
  phone: "+91 8126666980", // Replace with your number
  location: "Moradabad, Uttar Pradesh, India",

  github: "https://github.com/satwik12dev",

  linkedin: "https://www.linkedin.com/in/satwik-12-dev/",

  resume: "#",
};

/* ---------------------------------------------
   SOCIAL LINKS
---------------------------------------------- */

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: "github",
    url: "https://github.com/satwik12dev",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/in/satwik-12-dev/",
  },
  {
    name: "Portfolio",
    icon: "globe",
    url: "https://satwik-12-dev.vercel.app",
  },
];

/* ---------------------------------------------
   HERO BUTTONS
---------------------------------------------- */

export const HERO_BUTTONS = [
  {
    title: "Download Resume",
    href: "Resume.pdf",
    primary: true,
  },
  {
    title: "View Projects",
    href: "#projects",
    primary: false,
  },
];

/* ---------------------------------------------
   SERVICES
---------------------------------------------- */

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const SERVICES: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Building modern, responsive, and interactive web applications using React.js, Tailwind CSS, and JavaScript.",
    icon: "💻",
  },

  {
    title: "Backend Development",
    description:
      "Designing scalable REST APIs, authentication systems, and production-ready backend services using Node.js, Express.js, Java, and Spring Boot.",
    icon: "⚙️",
  },

  {
    title: "Database Design",
    description:
      "Creating optimized relational and NoSQL database architectures using MySQL, PostgreSQL, and MongoDB.",
    icon: "🗄️",
  },

  {
    title: "AI Integration",
    description:
      "Integrating Generative AI solutions using Google Gemini AI and LLM APIs into modern web applications.",
    icon: "🤖",
  },
];

/* ---------------------------------------------
   FOOTER
---------------------------------------------- */

export const FOOTER = {
  copyright:
    "© 2026 Satwik Saxena. All Rights Reserved.",

  tagline:
    "Designed & Developed with ❤️ using React, TypeScript, Three.js and Tailwind CSS.",
};

/* ---------------------------------------------
   EXPORTS
---------------------------------------------- */

export default {
  PROFILE,
  NAV_ITEMS,
  EDUCATION,
  SKILLS,
  EXPERIENCE,
  PROJECTS,
  CERTIFICATIONS,
  ABOUT_STATS,
  CONTACT,
  SOCIAL_LINKS,
  HERO_BUTTONS,
  SERVICES,
  FOOTER,
};
