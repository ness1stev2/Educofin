import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { isAuthenticatedGuard, isNotAuthenticatedGuard } from './auth/guards';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [ isNotAuthenticatedGuard ],
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
  },
  {
    path: 'inicio',
    canActivate: [ isAuthenticatedGuard ],
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule),
  },
  { path: '**', redirectTo: 'auth' },
  {
    path: '404',
    component: Error404PageComponent
  },

];

@NgModule({
  // ponerlo en la ruta para produccion
  /* { useHash: false} */
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
