import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

// CanActivate: para verificar si un usuario tiene permiso para acceder a una ruta específica
// CanMatch es una interfaz en Angular que una clase puede implementar para ser un guardia que decide si una ruta puede coincidir
export class AuthGuard implements CanActivate, CanMatch {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  // función que devuelve un Observable<boolean> o un valor booleano.
  private checkAuthStatus(): Observable<boolean> | boolean {
    return true
    /* this.authService.checkAuthentication()
      .pipe(
        // Operador tap para verificar si el usuario está autenticado
        tap( isAuthenticated => {
          // Si el usuario no está autenticado, navega a la ruta './auth/login'
          if ( !isAuthenticated ) this.router.navigate(['./auth/sesion'])
        })
      ) */
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {

    return this.checkAuthStatus();
    /* console.log('Can Match')
    console.log({ route, segments })
    return false; */
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    return this.checkAuthStatus();
    /* console.log('Can Activate')
    console.log({ route, state })
    return false; */
  }
}
