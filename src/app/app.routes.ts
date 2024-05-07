import { Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { isAuthenticatedGuard, isNotAuthenticatedGuard } from './auth/guards';
import { MantenimientoComponent } from './shared/pages/mantenimiento/mantenimiento.component';

export const routes: Routes = [
  /* {
    path: 'Mantenimiento', // Ruta para la página de mantenimiento
    component: MantenimientoComponent, // Componente de la página de mantenimiento
  }, */
  {
    path: 'inicio',
    /* canActivate: [ isAuthenticatedGuard ], */
    loadChildren: () => import('./pages/pages.routes').then( m => m.routes),
  },
  /* {
    path: 'auth',
    canActivate: [ isNotAuthenticatedGuard ],
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
  }, */
  /* { path: '**', redirectTo: 'auth' }, */
  { path: '**', redirectTo: 'inicio' },
  {
    path: '404',
    component: Error404PageComponent
  },
  /* { path: '**', redirectTo: 'auth' } */

];
