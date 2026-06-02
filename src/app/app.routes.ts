import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Dashboard } from './pages/dashboard/dashboard';
import { ReportPage } from './pages/report-page/report-page';
import { Logs } from './pages/logs/logs';
import { MainLayout } from './components/main-layout/main-layout';
import { Settings } from './pages/settings/settings';
import { Department } from './pages/department/department';


export const routes: Routes = [
  {
    path: '',
    component: Home,
  },

  // Routes WITH sidenav
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'report', component: ReportPage },
      { path: 'audit', component: Logs },
      {path: 'settings', component: Settings },
      {path: 'department', component: Department }
    ],
  },
];

