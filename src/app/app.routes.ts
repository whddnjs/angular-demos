import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home') },
  { path: 'detail/:id', loadComponent: () => import('./pages/detail/detail') },
  { path: 'pipes', loadComponent: () => import('./pages/pipes-demo/pipes-demo') },
  { path: 'directives', loadComponent: () => import('./pages/directives-demo/directives-demo') },
];
