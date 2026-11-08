export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  image: string; // Placeholder for our screenshots
  githubLink?: string;
  liveLink?: string;
  // Detailed fields specifically for the dedicated project page
  fullDescription?: string;
  problemSolved?: string;
  features?: string[];
  learned?: string;
}