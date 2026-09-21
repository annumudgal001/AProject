import { Injectable } from '@angular/core';
import { Portfolio } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private portfolio: Portfolio = {
    name: 'Annu',
    role: 'MEAN Stack Developer',
    tagline: 'Building modern full-stack web applications.',
    bio: `I am a developer interested in building practical,
           scalable and user-friendly web applications.`,

    email: 'your-email@example.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',

    skills: [
      {
        name: 'Angular',
        category: 'Frontend',
        level: 80
      },
      {
        name: 'TypeScript',
        category: 'Frontend',
        level: 75
      },
      {
        name: 'Node.js',
        category: 'Backend',
        level: 75
      },
      {
        name: 'Express.js',
        category: 'Backend',
        level: 75
      },
      {
        name: 'MongoDB',
        category: 'Database',
        level: 70
      }
    ],

    projects: [
      {
        id: 'portfolio',
        title: 'Personal Portfolio',
        description:
          'A full-stack personal portfolio built using the MEAN stack.',
        technologies: [
          'Angular',
          'Node.js',
          'Express',
          'MongoDB'
        ],
        githubUrl: '#',
        liveUrl: '#',
        status: 'in-progress'
      },

      {
        id: 'project-2',
        title: 'Project Two',
        description:
          'A full-stack application demonstrating CRUD and API integration.',
        technologies: [
          'Angular',
          'Express',
          'MongoDB'
        ],
        githubUrl: '#',
        status: 'completed'
      }
    ],

    services: [
      {
        title: 'Web Development',
        description:
          'Building responsive and modern web applications.',
        icon: '💻'
      },
      {
        title: 'Frontend Development',
        description:
          'Creating interactive interfaces using Angular.',
        icon: '🎨'
      },
      {
        title: 'Backend Development',
        description:
          'Developing REST APIs using Node.js and Express.',
        icon: '⚙️'
      }
    ],

    journey: [
      {
        year: '2025',
        title: 'Started Web Development',
        description:
          'Started learning modern web development technologies.'
      },
      {
        year: '2026',
        title: 'MEAN Stack',
        description:
          'Started building full-stack applications using Angular, Node.js, Express and MongoDB.'
      }
    ]
  };

  getPortfolio(): Portfolio {
    return this.portfolio;
  }
}