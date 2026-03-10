import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home') },
  { path: 'detail/:id', loadComponent: () => import('./pages/detail/detail') },
];
