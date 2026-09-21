export interface Portfolio {
  name: string;
  role: string;
  tagline: string;
  bio: string;

  email: string;
  github: string;
  linkedin: string;

  skills: Skill[];
  projects: Project[];
  services: Service[];
  journey: JourneyItem[];
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  status: 'completed' | 'in-progress';
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface JourneyItem {
  year: string;
  title: string;
  description: string;
}