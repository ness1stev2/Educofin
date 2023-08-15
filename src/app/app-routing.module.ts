import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { PublicGuard } from './auth/guards/public.guard';
import { isAuthenticatedGuard, isNotAuthenticatedGuard } from './auth/guards';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
    canActivate: [ isNotAuthenticatedGuard ]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule),
    canActivate: [ isAuthenticatedGuard ]
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  { path: '**', redirectTo: '404' },
  /*{ path: 'contact', component: ContactComponent } */

];

@NgModule({
  // ponerlo en la ruta para produccion
  /* { useHash: false} */
  imports: [RouterModule.forRoot(routes, )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
