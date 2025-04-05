import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  { path: 'home', title: 'Home', component: HomeComponent, data: { icon: 'home' } },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'race-planning', title: 'Plan Race', data: { icon: 'event' }, children: [
    { path: '', pathMatch: 'full', redirectTo: 'overview' },
    { path: 'overview', title: 'Race Planning Overview', data: { icon: 'event' }, loadComponent: () => import('./race-planning/race-planning-overview.component').then((comp) => comp.RacePlanningOverviewComponent)},
    { path: 'doc', title: 'Race Planning Documentation', data: { icon: 'description' }, loadComponent: () => import('./race-planning/race-planning-doc.component').then((comp) => comp.RacePlanningDocComponent)}
    ]},
  { path: 'race-conduction', title: 'Conduct Race', data: { icon: 'sports_score' }, children: [
    { path: '', pathMatch: 'full', redirectTo: 'overview' },
    { path: 'overview', title: 'Race Conduction Overview', data: { icon: 'sports_score' }, loadComponent: () => import('./race-conduction/race-conduction-overview.component').then(( comp) => comp.RaceConductionOverviewComponent) },
    { path: 'doc', title: 'Race Conduction Documentation', data: { icon: 'description' }, loadComponent: () => import('./race-conduction/race-conduction-doc.component').then((comp) => comp.RaceConductionDocComponent) }
    ]},
  { path: 'race-analysis', title: 'Analyse Race', data: { icon: 'analytics' }, children: [
    { path: '', pathMatch: 'full', redirectTo: 'overview' },
    { path: 'overview', title: 'Race Analysis Overview', loadComponent: () => import('./race-analysis/race-analysis-overview.component').then(( comp) => comp.RaceAnalysisOverviewComponent)},
    { path: 'doc', title: 'Race Analysis Documentation', data: { icon: 'description' }, loadComponent: () => import('./race-analysis/race-analysis-doc.component').then((comp) => comp.RaceAnalysisDocComponent) }
  ]},
];
