import type { Routes }                from '@angular/router';
import { DashboardComponent }         from './pages/dashboard/dashboard.component';
import { ProjectsPageComponent }      from './pages/projects-page/projects-page.component';
import { ViewPageComponent }          from './pages/view-page/view-page.component';
import { CreatePageComponent }        from './pages/create-page/create-page.component';

export const routes: Routes = [
  { path: '',               component: DashboardComponent },
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'projects/:id',   component: ViewPageComponent },
  { path: 'projects',       component: ProjectsPageComponent },
  { path: 'create',         component: CreatePageComponent }
];
