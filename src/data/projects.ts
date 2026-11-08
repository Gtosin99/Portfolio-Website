import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "garden-gems",
    title: "Garden Gems",
    shortDescription:
      "A web platform connecting customers with gardening solutions, services, and investment opportunities.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "SQLite"
    ],
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    githubLink: "https://github.com/123johnpaul/garden-gems",
    fullDescription:
      "Garden Gems is a collaborative web development project designed to provide users with access to gardening-related solutions and services. The platform includes features that support customer engagement, service enquiries, consultation scheduling, and investor interest. I contributed primarily to the backend development as part of the project team.",
    problemSolved:
      "The project aims to make gardening services and related opportunities easier to discover and access through a centralised digital platform.",
    features: [
      "Backend API development using Node.js and Express.",
      "Contact and service enquiry functionality.",
      "Consultation scheduling functionality.",
      "Newsletter and customer engagement functionality.",
      "Database integration for storing application data."
    ],
    learned:
      "I gained practical experience working on a collaborative full-stack application, particularly in backend development, API integration, database interaction, and coordinating backend functionality with frontend requirements."
  },

  {
    id: "sante-lims",
    title: "Sante Laboratory Information Management System",
    shortDescription:
      "A laboratory management application designed to organise patient requests, sample tracking, test processing, and result management.",
    technologies: [
      "Java",
      "JavaFX",
      "PostgreSQL",
      "Maven",
      "BCrypt"
    ],
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    githubLink: "https://github.com/Gtosin99/OOP",
    fullDescription:
      "Sante LIMS is a laboratory information management system developed to support the organisation of laboratory operations. It provides different user roles, including administrators, laboratory attendants, and customers, with functionality for managing test requests, tracking samples, and handling laboratory results.",
    problemSolved:
      "The system addresses the challenges of organising laboratory workflows by providing a structured digital platform for managing test requests, sample processing, results, and user access.",
    features: [
      "Role-based access for administrators, laboratory attendants, and customers.",
      "User authentication and email verification.",
      "Laboratory test catalogue and test request management.",
      "Sample tracking and result management.",
      "Result validation and result history.",
      "Notifications and audit logging."
    ],
    learned:
      "I strengthened my understanding of object-oriented programming, Java application development, database design, authentication, and the importance of separating application responsibilities into well-structured components."
  },

  {
    id: "tastybites",
    title: "TastyBites",
    shortDescription:
      "A food ordering platform built with a React frontend and a NestJS backend, with functionality for customer profiles and order management.",
    technologies: [
      "React",
      "TypeScript",
      "NestJS",
      "Node.js",
      "TypeORM",
      "PostgreSQL",
      "Docker"
    ],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    githubLink:
      "https://github.com/Gtosin99/My-Portfolio/tree/main/Web%20%26%20Mobile%20Dev/Tastybites%20Web",
    fullDescription:
      "TastyBites is a food ordering web application developed as a web and mobile development project. It combines a React and TypeScript frontend with a NestJS backend. The project explores how frontend interfaces, backend services, and relational databases work together in a full-stack application.",
    problemSolved:
      "The project explores how a digital food ordering platform can simplify the interaction between customers and food service providers through an organised interface and supporting backend services.",
    features: [
      "React-based frontend interface.",
      "Customer profile management.",
      "Order-related functionality and API integration.",
      "NestJS backend application structure.",
      "PostgreSQL database integration using TypeORM.",
      "Docker-based development environment."
    ],
    learned:
      "I improved my understanding of full-stack application architecture, TypeScript, REST API integration, backend module organisation, relational databases, and containerised development using Docker."
  }
];