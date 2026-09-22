import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Home · Annu Mudgal',
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about').then((m) => m.About),
    title: 'About · Annu Mudgal',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/project-list/project-list').then((m) => m.ProjectList),
    title: 'Projects · Annu Mudgal',
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./features/projects/project-detail/project-detail').then((m) => m.ProjectDetail),
    title: 'Project · Annu Mudgal',
  },
  {
    path: 'skills',
    loadComponent: () => import('./features/skills/skills').then((m) => m.Skills),
    title: 'Skills · Annu Mudgal',
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services').then((m) => m.Services),
    title: 'Services · Annu Mudgal',
  },
  {
    path: 'journey',
    loadComponent: () => import('./features/journey/journey').then((m) => m.Journey),
    title: 'Journey · Annu Mudgal',
  },
  {
    path: 'thoughts',
    loadComponent: () => import('./features/thoughts/thoughts').then((m) => m.Thoughts),
    title: 'Thoughts · Annu Mudgal',
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
    title: 'Contact · Annu Mudgal',
  },
  {
    path: 'reviews',
    loadComponent: () => import('./features/reviews/reviews').then((m) => m.Reviews),
    title: 'Reviews · Annu Mudgal',
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
    title: 'Not Found · Annu Mudgal',
  },
];