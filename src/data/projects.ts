import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'tastybites',
    title: 'TastyBites',
    shortDescription:
      'A food ordering application with a React and TypeScript client, supported by a NestJS API for customer profile and order history workflows.',
    technologies: ['React', 'NestJS', 'TypeScript', 'PostgreSQL', 'Docker'],
    image: '/images/tastybites.png',
    githubLink:
      'https://github.com/Gtosin99/My-Portfolio/tree/main/Web%20%26%20Mobile%20Dev/Tastybites%20Web',
  },
  {
    id: 'garden-gems',
    title: 'Garden Gems',
    shortDescription:
      'A gardening services platform where visitors can explore services and send contact, newsletter, and consultation requests.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Express', 'SQLite', 'PostgreSQL'],
    image: '/images/garden-gems-logo.png',
    liveLink: 'https://garden-gems.vercel.app/',
    fullDescription:
      'Garden Gems is a gardening services website built as a Next.js client with an Express API. The client presents the company, its services, and project work, while the server exposes endpoints for service enquiries, consultation scheduling, contact messages, and newsletter sign-ups.',
    problemSolved:
      'The site gives people a central place to learn about gardening services and submit an enquiry or request a consultation instead of relying on disconnected contact channels.',
    features: [
      'Company and service information presented through a multi-page Next.js site.',
      'Consultation scheduling form connected to an Express route.',
      'Contact form and newsletter sign-up routes.',
      'Services API and database setup using SQLite and PostgreSQL packages.',
    ],
    learned:
      'I learned how to connect a multi-page Next.js interface to backend API routes, build forms for real user requests, and work with database integrations. The project also strengthened my understanding of how frontend and server responsibilities fit together in a full-stack application.',
    screenshots: [
      { label: 'Garden Gems home page', image: '/images/garden-gems1.png' },
      { label: 'Services and consultation flow', image: '/images/garden-gems2.png' },
    ],
  },
];
