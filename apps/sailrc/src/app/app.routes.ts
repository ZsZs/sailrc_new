import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  { path: 'home', title: 'home', component: HomeComponent, data: { icon: 'home' } },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'auth', loadChildren: () => import('@processpuzzle/auth').then((m) => m.authRoutes) },
  { path: 'race-planning', title: 'plan_race', data: { icon: 'event' }, children: [
    { path: '', pathMatch: 'full', redirectTo: 'overview' },
    { path: 'overview', title: 'race_planning_overview', data: { icon: 'event' }, loadComponent: () => import('./race-planning/race-planning-overview.component').then((comp) => comp.RacePlanningOverviewComponent)},
    { path: 'doc', title: 'race_planning_documentation', data: { icon: 'description' }, loadComponent: () => import('./race-planning/race-planning-doc.component').then((comp) => comp.RacePlanningDocComponent)}
    ]},
  { path: 'race-conduction', title: 'conduct_race', data: { icon: 'sports_score' }, children: [
    { path: '', pathMatch: 'full', redirectTo: 'overview' },
    { path: 'overview', title: 'race_conduction_overview', data: { icon: 'sports_score' }, loadComponent: () => import('./race-conduction/race-conduction-overview.component').then(( comp) => comp.RaceConductionOverviewComponent) },
    { path: 'doc', title: 'race_conduction_documentation', data: { icon: 'description' }, loadComponent: () => import('./race-conduction/race-conduction-doc.component').then((comp) => comp.RaceConductionDocComponent) }
    ]},
  { path: 'race-analysis', title: 'analyse_race', data: { icon: 'analytics' }, children: [
    { path: '', pathMatch: 'full', redirectTo: 'overview' },
    { path: 'overview', title: 'race_analysis_overview', loadComponent: () => import('./race-analysis/race-analysis-overview.component').then(( comp) => comp.RaceAnalysisOverviewComponent)},
    { path: 'doc', title: 'race_analysis_documentation', data: { icon: 'description' }, loadComponent: () => import('./race-analysis/race-analysis-doc.component').then((comp) => comp.RaceAnalysisDocComponent) }
  ]},
];
