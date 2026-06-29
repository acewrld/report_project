import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { ReportPage } from './pages/report-page/report-page';
import { Logs } from './pages/logs/logs';
import { MainLayout } from './components/main-layout/main-layout';
import { Department } from './pages/department/department';


export const routes: Routes = [
  {
    path: '', pathMatch: 'full', loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'dashboard', pathMatch: 'full', loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard) },
      { path: 'report', pathMatch: 'full', loadComponent: () => import('./pages/report-page/report-page').then(m => m.ReportPage) },
      { path: 'audit', pathMatch: 'full', loadComponent: () => import('./pages/logs/logs').then(m => m.Logs) },
      { path: 'department', pathMatch: 'full', loadComponent: () => import('./pages/department/department').then(m => m.Department) }
    ],
  },
];

