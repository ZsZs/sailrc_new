import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  { path: 'home', title: 'SailRC - Home', component: HomeComponent, data: { icon: 'home' } },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'race-planning', title: 'Plan Race', data: { icon: 'event' }, loadComponent: () => import('./race-planning/race-planning.component').then((comp) => comp.RacePlanningComponent) },
  { path: 'race-conduction', title: 'Conduct Race', data: { icon: 'sports_score' }, loadComponent: () => import('./race-conduction/race-conduction.component').then((comp) => comp.RaceConductionComponent) },
  { path: 'race-analysis', title: 'Analyse Race', data: { icon: 'analytics' }, loadComponent: () => import('./race-analysis/race-analysis.component').then((comp) => comp.RaceAnalysisComponent) },
];
