import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  { path: 'home', title: 'SailRC - Home', component: HomeComponent, data: { icon: 'home' } },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];
