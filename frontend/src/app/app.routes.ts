import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () =>
            import('./features/home/home')
                .then(m => m.Home)
    },

    {
        path: 'about',
        loadComponent: () =>
            import('./features/about/about')
                .then(m => m.About)
    },

    {
        path: 'projects',
        loadComponent: () =>
            import('./features/projects/project-list/project-list')
                .then(m => m.ProjectList)
    },

    {
        path: 'projects/:id',
        loadComponent: () =>
            import('./features/projects/project-detail/project-detail')
                .then(m => m.ProjectDetail)
    },

    {
        path: 'skills',
        loadComponent: () =>
            import('./features/skills/skills')
                .then(m => m.Skills)
    },

    {
        path: 'services',
        loadComponent: () =>
            import('./features/services/services')
                .then(m => m.Services)
    },

    {
        path: 'journey',
        loadComponent: () =>
            import('./features/journey/journey')
                .then(m => m.Journey)
    },

    {
        path: 'thoughts',
        loadComponent: () =>
            import('./features/thoughts/thoughts')
                .then(m => m.Thoughts)
    },

    {
        path: 'contact',
        loadComponent: () =>
            import('./features/contact/contact')
                .then(m => m.Contact)
    },

    {
        path: 'reviews',
        loadComponent: () =>
            import('./features/reviews/reviews')
                .then(m => m.Reviews)
    },

    {
        path: '**',
        loadComponent: () =>
            import('./features/not-found/not-found')
                .then(m => m.NotFound)
    }

];