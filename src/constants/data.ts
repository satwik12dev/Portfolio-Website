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
  email: "satwik.saxena.dev@gmail.com",
  github: "https://github.com/satwik12dev",
  linkedin: "https://linkedin.com/in/satwik-saxena",
  resumeUrl: "#",
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
  category: "Frontend" | "Backend" | "Database" | "DevOps";
};

export const SKILLS: Skill[] = [
  {
    name: "HTML5",
    color: "#E34F26",
    level: 95,
    category: "Frontend",
  },
  {
    name: "CSS3",
    color: "#1572B6",
    level: 92,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    level: 94,
    category: "Frontend",
  },
  {
    name: "React.js",
    color: "#61DAFB",
    level: 93,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    color: "#38BDF8",
    level: 90,
    category: "Frontend",
  },
  {
    name: "Node.js",
    color: "#339933",
    level: 90,
    category: "Backend",
  },
  {
    name: "Express.js",
    color: "#808080",
    level: 88,
    category: "Backend",
  },
  {
    name: "Java",
    color: "#F89820",
    level: 91,
    category: "Backend",
  },
  {
    name: "REST APIs",
    color: "#22D3EE",
    level: 92,
    category: "Backend",
  },
  {
    name: "MongoDB",
    color: "#47A248",
    level: 87,
    category: "Database",
  },
  {
    name: "MySQL",
    color: "#4479A1",
    level: 90,
    category: "Database",
  },
  {
    name: "Git",
    color: "#F05032",
    level: 90,
    category: "DevOps",
  },
  {
    name: "Docker",
    color: "#2496ED",
    level: 82,
    category: "DevOps",
  },
];
export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
  highlights: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Backend Developer Intern",
    company: "Kodexive",
    period: "June 2026 – Present",
    description:
      "Working on production-grade backend systems for ZymGo, a Gym Management CRM. Developing scalable REST APIs, implementing business workflows, optimizing MySQL databases, and building secure authentication systems.",
    stack: [
      "Node.js",
      "Express.js",
      "MySQL",
      "REST APIs",
      "JWT",
      "Docker",
    ],
    highlights: [
      "Developed 80+ secure REST APIs for multiple business modules.",
      "Implemented JWT Authentication and Role-Based Access Control (RBAC).",
      "Designed and optimized relational MySQL databases.",
      "Built analytics dashboards, reports, and CSV export functionality.",
      "Worked on subscriptions, payments, attendance, and member management.",
    ],
  },

 {
  role: "AI Intern",
  company: "IBM PBEL",
  period: "June 2025 – Aug 2025",
  description:
    "Completed AI internships at IBM SkillsBuild and Pebl, gaining hands-on experience in Machine Learning, Generative AI, Large Language Models (LLMs), prompt engineering, and AI-powered application development through real-world projects and industry-focused learning.",
  stack: [
    "Python",
    "Machine Learning",
    "Generative AI",
    "LLMs",
    "Prompt Engineering",
    "REST APIs",
  ],
  highlights: [
    "Built AI-powered applications using Generative AI technologies.",
    "Worked with Large Language Models (LLMs) and prompt engineering techniques.",
    "Developed practical Machine Learning and AI projects.",
    "Integrated AI APIs into real-world applications.",
    "Applied AI concepts to solve business and automation problems.",
  ],
},

  {
    role: "Freelance Full Stack Developer",
    company: "Ezy Tranship",
    period: "Jan 2025 - May 2025",
    description:
      "Developed and enhanced features for a logistics and transportation platform as a freelance developer, focusing on scalable backend services and responsive frontend interfaces.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "REST APIs",
    ],
    highlights: [
      "Built and integrated backend APIs.",
      "Implemented responsive frontend components.",
      "Optimized database queries for performance.",
      "Collaborated with the client to deliver requested features.",
      "Maintained clean and scalable codebase.",
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
};

export const PROJECTS: Project[] = [
  {
    title: "Gym Management CRM",
    description:
      "A production-ready Gym Management CRM built using Node.js, Express.js, and MySQL. Features role-based authentication, member management, subscriptions, attendance, payments, analytics dashboard, reports, and business automation.",
    image: "zym.png",
    stack: [
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "REST API",
    ],
    github: "#",
    demo: "#",
    accent: "#22D3EE",
  },

  {
    title: "CRM Inventory Management System",
    description:
      "A full-stack inventory management platform with JWT authentication, product CRUD, stock monitoring, dashboard analytics, image uploads, low-stock alerts, and profile management.",
    image: "crm.png",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
    ],
    github: "https://github.com/satwik12dev/CRM-Inventory-System-.git",
    demo: "#",
    accent: "#3B82F6",
  },

  {
    title: "Authentication & Task Management API",
    description:
      "Secure full-stack Task Management application implementing JWT Authentication, Refresh Tokens, Role-Based Access Control (RBAC), PostgreSQL, Docker, and Swagger documentation.",
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
  },

  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered Resume Analyzer using Google Gemini AI that compares resumes against job descriptions, calculates ATS scores, detects missing keywords, and provides improvement suggestions.",
    image: "resumeanalyser.png",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini AI",
    ],
    github: "https://github.com/satwik12dev/Gen-AI-Resume-Analyzer",
    demo: "#",
    accent: "#A855F7",
  },

  {
    title: "AI Email Generator",
    description:
      "AI-powered Email Generator built using React.js and Spring Boot that generates context-aware professional emails using Gemini AI with multiple tone options.",
    image: "Email.png",
    stack: [
      "Spring Boot",
      "Java",
      "React.js",
      "Gemini AI",
    ],
    github:
      "https://github.com/satwik12dev/Email-Generator-API-Using-Spring-Boot-and-Spring-AI",
    demo: "#",
    accent: "#EC4899",
  },

  {
    title: "File Hider Application",
    description:
      "Java CLI application that securely hides files using encryption, SMTP OTP verification, JDBC, and MySQL for secure file management.",
    image: "filehider.png",
    stack: [
      "Java",
      "SMTP",
      "JDBC",
      "MySQL",
      "Maven",
    ],
    github: "https://github.com/satwik12dev/File-Hider",
    demo: "#",
    accent: "#F97316",
  },

  {
    title: "Commercial Vehicle Booking System",
    description:
      "A responsive web application that enables users to search, book, and manage commercial vehicle rentals with Firebase integration and secure backend services.",
    image: "ezy.png",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Node.js",
    ],
    github:
      "https://github.com/satwik12dev/BookingWebApplication",
    demo: "#",
    accent: "#0EA5E9",
  },

  {
    title: "Cat & Dog Image Classification",
    description:
      "Deep Learning model using CNN and TensorFlow capable of accurately classifying cat and dog images with a Streamlit-based prediction interface.",
    image: "cat.png",
    stack: [
      "Python",
      "TensorFlow",
      "CNN",
      "Deep Learning",
      "Streamlit",
    ],
    github:
      "https://github.com/satwik12dev/Image-Classification-of-cat--and-dog-using-CNN-DL",
    demo: "#",
    accent: "#8B5CF6",
  },
];
export type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  color: string;
  description: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "May 2025",
    credentialId: "AWS-CCP-2025",
    color: "#FF9900",
    description:
      "Validated knowledge of AWS Cloud fundamentals, core AWS services, security, pricing models, and cloud architecture best practices.",
  },

  {
    title: "Introduction to Cloud",
    issuer: "IBM Skills Network",
    date: "July 2025",
    credentialId: "IBM-CLOUD-2025",
    color: "#1261FE",
    description:
      "Completed cloud computing fundamentals including cloud deployment models, virtualization, cloud services, and modern infrastructure concepts.",
  },

  {
    title: "Java Developer Certification",
    issuer: "IBM Skills Network",
    date: "June 2025",
    credentialId: "IBM-JAVA-2025",
    color: "#F89820",
    description:
      "Demonstrated strong understanding of Java programming, Object-Oriented Programming, collections, exception handling, multithreading, and backend development.",
  },

  {
    title: "Agile Methodology Certification",
    issuer: "IBM Skills Network",
    date: "January 2025",
    credentialId: "IBM-AGILE-2025",
    color: "#00B894",
    description:
      "Covered Agile Software Development, Scrum methodology, Version Control, Git, Docker, and collaborative software engineering practices.",
  },

  {
    title: "TCS iON Career Edge – Interview & Job Readiness",
    issuer: "TCS iON",
    date: "July 2025",
    credentialId: "TCS-ION-2025",
    color: "#0056D2",
    description:
      "Completed professional training focused on communication skills, interview preparation, workplace readiness, MS Office, and personality development.",
  },

  {
    title: "Project Based Experiential Learning (PBEL)",
    issuer: "IBM",
    date: "July 2025",
    credentialId: "IBM-PBEL-2025",
    color: "#6C5CE7",
    description:
      "Hands-on project experience in Artificial Intelligence, Machine Learning, Deep Learning, CNN, Python, Kaggle, and model deployment.",
  },

  {
    title: "Computer Architecture",
    issuer: "NPTEL - Swayam",
    date: "Jul 2025 – Oct 2025",
    credentialId: "NPTEL-CA-2025",
    color: "#E17055",
    description:
      "Successfully completed a 12-week NPTEL course covering processor organization, instruction sets, pipelining, memory hierarchy, cache optimization, and computer system architecture.",
  },
];

export const ABOUT_STATS = [
  {
    label: "Projects",
    value: 8,
    suffix: "+",
  },
  {
    label: "Certificates",
    value: 7,
    suffix: "+",
  },
  {
    label: "Technologies",
    value: 10,
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
