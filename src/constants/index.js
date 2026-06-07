import { tiledLights } from "three/examples/jsm/tsl/lighting/TiledLightsNode.js";
import {
  CA,
  aws,
  ca,
  cloud,
  javax,
  tcs,
  ibm,
  agile,
  Java,
  TCS,
  PEBL,
  Agile,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  shopify,
  docker,
  meta,
  starbucks,
  tesla,
  carrent,
  threejs,
  java,
  kubernetes,
  jobit,
  tripguide,
  AWS,
  SpringBoot,
  Clouds,
  auth,
  gitauth,
  ra,
  gra,
} from "../assets";
import { color } from "framer-motion";
import { Cloud } from "lucide-react";
import { title } from "framer-motion/client";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id:"tech",
    title:"Tech",
  },

  {
    id: "work",
    title: "Work",
  },

  {
    id:"mywork",
    title:"Projects",
  },
  {
  id :"certificates",
  title:"Certificates",
  },
  {
    id :"testimonials",
    title:"Feedbacks",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/ML Model Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Vite",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name:"Spring Boot",
    icon:SpringBoot,
  }
];

const experiences = [
  {
    title: "Image classification of cats and dog",
    company_name: "AI Intern Project",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2025 - August 2025",
    points: [
      "Developing and maintaining web applications using Stream lit and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "EzyTranship: Web application for booking commercial vehicles",
    company_name: "College Project",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - july 2025",
    points: [
      "Developing and maintaining the web applications using javascript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "File Hider App using Java SMTP JDBC & Encryption via OTP",
    company_name: "Personal Project",
    icon: shopify,
    iconBg: "#383E56",
    date: "Aug 2025 - Sep 2025",
    points: [
      "Designed and developed a Command Line application in Java for securely hiding and managing files.",
      "Implemented SMTP functionality to enable secure Email OTP Verification For Login and Signup with the help of javax mail.",
      "Using JDBC for database connectivity to handle files operation i.e show, hidden, open, unide ",
      "Applied encryption techniques to protect sensitive files and ensure secure storage.",
      "Tested and optimized the application for reliability, performance, and security."
    ],
  },
  {
    title: "Authentication & Task Management API with RBAC",
    company_name: "Personal Project",
    icon: auth,
    iconBg: "#383E56",
    date: "Dec 2026 - feb 2026",
    points: [
      "Built a secure full-stack Task Management application using React, Node.js, Express.js, and PostgreSQL.",
      "Implemented JWT-based Authentication and Role-Based Access Control (RBAC) to manage user permissions and protect API endpoints.",
      "Developed RESTful APIs for user registration, login, role management, and task CRUD operations with robust validation and error handling.",
      "Integrated PostgreSQL for persistent data storage and optimized database queries for efficient task and user management.",
      "Containerized the application using Docker and Docker Compose, and integrated Swagger API documentation for streamlined development and deployment."
    ],
  },
  {
  title: "AI Resume Analyzer",
  company_name: "Personal Project",
  icon: ra,
  iconBg: "#383E56",
  date: "2026",
  points: [
    "Developed an AI-powered Resume Analyzer using React.js, Node.js, Express.js, and MongoDB to evaluate resumes against job descriptions.",
    "Integrated Google Gemini AI to generate ATS compatibility scores, identify missing keywords, and provide personalized resume improvement suggestions.",
    "Built secure REST APIs for resume uploads, job description analysis, and AI-generated feedback with robust validation and error handling.",
    "Implemented resume parsing and keyword matching algorithms to assess candidate-job alignment and highlight strengths and weaknesses.",
    "Designed a responsive user interface with real-time analysis results, improving user experience and helping candidates optimize resumes for recruitment systems."
  ],
},
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Satwik does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
  },
  {
    testimonial:
      "After Satwik optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/men/37.jpg",
  },
];

const projects = [
  {
    name: "Commercial Vehicle: A Web based booking system",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "HTML5, CSS3, Javascript6",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/satwik12dev/BookingWebApplication.git",
  },
  {
    name: "Cat and Dog Image Classification Using CNN & DL",
    description:
      "It is an AI model that automatically identifies whether an image contains a cat or a dog. It uses machine learning techniques to classify images with high accuracy.",
      tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Convolution Neural Netwok ",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/satwik12dev/Image-Classification-of-cat--and-dog-using-CNN-DL.git",
  },
  {
    name: "File Hider App using Java SMTP JDBC & Encryption via OTP",
    description:
      "A Java-based Command Line application that securely hides, encrypts, and manages files. Integrates SMTP for secure notifications and uses MySQL for data storage, with Maven for project management.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SMTP",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name:"Maven",
        color : "white-text-gradient",
      },
      {
        name:"Database Management System",
        color:"green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/satwik12dev/File-Hider.git",
},
  {
  name: "Auth System & Task Management API",
  description:
    "A full-stack task management platform built with React, Node.js, Express.js, and PostgreSQL. Features JWT-based authentication, Role-Based Access Control (RBAC), secure REST APIs, task CRUD operations, Swagger documentation, and Dockerized deployment.",
  tags: [
    {
      name: "React.js",
      color: "blue-text-gradient",
    },
    {
      name: "Node.js",
      color: "green-text-gradient",
    },
    {
      name: "PostgreSQL",
      color: "pink-text-gradient",
    },
    {
      name: "JWT",
      color: "white-text-gradient",
    },
    {
      name: "Docker",
      color: "green-text-gradient",
    },
    {
      name: "RBAC",
      color: "blue-text-gradient",
    },
  ],
  image: gitauth,
  source_code_link: "https://github.com/satwik12dev/Auth-System-Task-API.git",
},
  {
  name: "AI Resume Analyzer Using Generative AI",
  description:
    "An AI-powered Resume Analyzer built with React.js, Node.js, Express.js, and Google Gemini AI. It analyzes resumes against job descriptions, provides ATS compatibility scores, identifies missing keywords, highlights strengths and weaknesses, and generates actionable suggestions to improve resume performance.",
  tags: [
    {
      name: "React.js",
      color: "blue-text-gradient",
    },
    {
      name: "Node.js",
      color: "green-text-gradient",
    },
    {
      name: "Express.js",
      color: "green-text-gradient",
    },
    {
      name: "Gemini AI",
      color: "pink-text-gradient",
    },
    {
      name: "MongoDB",
      color: "green-text-gradient",
    },
  ],
  image: gra,
  source_code_link: "https://github.com/satwik12dev/Gen-AI-Resume-Analyzer.git",
},
];
const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "May 2025",
    image: AWS,
    icon: aws, // 👈 Icon for timeline circle
    link: "https://aws.amazon.com/certification/",
    description:
      "Validated understanding of AWS Cloud fundamentals, pricing, and core services.",
    tags: ["Cloud", "AWS", "Fundamentals"],
  },
  {
    title: "Introduction to Cloud",
    issuer: "IBM",
    date: "July 2025",
    image: Clouds,
    icon: cloud, // 👈
    link: "https://courses.cognitiveclass.ai/certificates/b24e468eea0e46c8bd51d8bff82b0a52",
    description:
      "Hands-on training on Generative AI, Vertex AI, and responsible AI practices.",
    tags: ["AI", "Generative AI", "Vertex AI"],
  },
  {
    title: "Java Developer Certification",
    issuer: "IBM",
    date: "June 2025",
    image: Java,
    icon: javax,
    link: "https://courses.tmu.skillsnetwork.site/certificates/c3822a5e81324739889ec2ee7e3aa8dd",
    description:
      "Demonstrated expertise in Java programming, OOP concepts, and backend systems.",
    tags: ["Java", "OOP", "Backend"],
  },
  {
    title: "Agile Methodology Certification",
    issuer: "IBM",
    date: "Jan 2025",
    image: Agile,
    icon: agile,
    link: "https://courses.tmu.skillsnetwork.site/certificates/107b567540234d76bc0477e1c8ca5fae",
    description:
      "Demonstrated expertise in Agile methodology, Version Control Systems, and Docker.",
    tags: ["Agile", "Git Bash", "Docker"],
  },
  {
    title: "TCS ION Career Edge - Interview & Job Readiness",
    issuer: "TCS iON",
    date: "July 2025",
    image: TCS,
    icon: tcs,
    link: TCS,
    description:
      "Demonstrated expertise in Soft Skills, MS Office, and Personality Development.",
    tags: ["Soft Skills", "MS Office", "Personality Making"],
  },
  {
    title: "Project-Based Experiential Learning (PBEL) / Virtual Internship",
    issuer: "IBM",
    date: "July 2025",
    image: PEBL,
    icon: ibm,
    link: "https://courses.ibmmooc.skillsnetwork.site/certificates/242ddeb87eef4496bef78e0bcd101932",
    description:
      "Demonstrated expertise in AI, ML, Python, Kaggle, Convolutional Neural Networks, and Deep Learning.",
    tags: ["Python", "AI & ML", "CNN & DL", "Kaggle"],
  },
{
  title: "Computer Architecture",
  issuer: "Swayam NPTEL",
  date: "Jul - Oct 2025",
  image: CA,
  icon:ca,
  link: CA, // 👈 Add certificate link or image path
  description:
    "Successfully completed a 12-week NPTEL course on Computer Architecture, gaining strong knowledge of processor design, memory hierarchy, instruction sets, and performance optimization concepts.",
  tags: ["Computer Architecture", "NPTEL", "System Design"],
}

];


export { services, technologies, experiences, testimonials, projects, certificates };
