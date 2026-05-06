import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Home } from './pages/home/home';
import { ReportPage } from './pages/report-page/report-page';
import { Logs } from './pages/logs/logs';

export const routes: Routes = [
    {path: '', component: Home, },
    {path: 'dashboard', component: Dashboard},
    {path: 'report', component: ReportPage},
    {path:'audit', component:Logs}
];
