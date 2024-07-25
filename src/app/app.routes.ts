import { Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { isAuthenticatedGuard, isNotAuthenticatedGuard } from './auth/guards';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [ isNotAuthenticatedGuard ],
    loadChildren: () => import('./auth/auth.routes').then( m => m.routes),
  },
  {
    path: 'inicio',
    // canActivate: [ isAuthenticatedGuard ],
    loadChildren: () => import('./pages/pages.routes').then( m => m.routes),
  },
  { path: '**', redirectTo: 'inicio' },
  {
    path: '404',
    component: Error404PageComponent
  },
];
