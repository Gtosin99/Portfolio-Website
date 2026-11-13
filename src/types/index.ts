export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
  fullDescription?: string;
  problemSolved?: string;
  features?: string[];
  learned?: string;
  screenshots?: { label: string; image: string }[];
}
