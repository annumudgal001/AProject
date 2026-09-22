export interface SocialLinks {
  linkedin: string;
  github: string;
  twitter: string;
  instagram: string;
}

export interface Profile {
  name: string;
  headline: string;
  shortRole: string;
  alternateRole: string;
  currentTitle: string;
  profileImage: string;
  resume: string;
  introduction: string;
  dynamicRoles: string[];
  portfolioUrl: string;
  email: string;
  phone: string;
  social: SocialLinks;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  industry: string;
  logo: string;
  description: string;
}

export interface EducationScore {
  value: number;
  unit: string;
  description?: string;
  equivalent?: string;
}

export interface Education {
  institution: string;
  fullInstitutionName?: string;
  degree: string;
  duration: string;
  expectedCompletion?: string;
  location: string;
  score: EducationScore;
  logo: string;
  coursework: string[];
  description: string;
}

export interface SkillItem {
  name: string;
  level?: number;
  description?: string;
  technologies?: string[];
}

export interface Skills {
  frontend: SkillItem[];
  backend: SkillItem[];
  fullStack: SkillItem[];
  versionControl: SkillItem[];
  testing: SkillItem[];
  programmingLanguages: string[];
  tools: string[];
  coreSkills: SkillItem[];
}

export interface ServiceItem {
  name: string;
  level?: number;
  icon: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  image: string;
  description: string;
  technologies: string[];
  liveDemo: string | null;
  sourceCode: string;
  status?: 'completed' | 'in-progress' | 'archived';
  problem?: string;
  solution?: string;
  architecture?: string;
  features?: string[];
  challenges?: string[];
  lessons?: string[];
}

export interface Certification {
  name: string;
  provider: string;
  image: string;
  credential: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  organization: string | null;
  avatar: string;
  rating: number;
  testimonial: string;
  date?: string;
}

export interface JourneyEntry {
  id: string;
  type: 'experience' | 'education' | 'milestone';
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  description: string;
  logo?: string;
}

export interface Thought {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
}

export interface Philosophy {
  building: string;
  developerQuote: string;
  learning: string;
  closingMessage: string;
}

export interface PortfolioMeta {
  copyright: string;
  designedAndDevelopedBy: string;
  github: string;
}

export interface NavItem {
  name: string;
  route: string;
  icon?: string;
}