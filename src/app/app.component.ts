import { Component, computed, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthStatus } from './auth/interfaces';
import { AuthService } from './auth/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet]
})

export class AppComponent {
  /* private authService = inject( AuthService );
  private router = inject( Router )

  public finishedAuthCheck = computed<boolean>(() => {
    if( this.authService.authStatus() === AuthStatus.checking ) {
      return false;
    }
    return true
  })

  public authStatusChangedEffect = effect( () => {
    switch( this.authService.authStatus()){
      case AuthStatus.checking:
        return;

      case AuthStatus.authenticated:
        // Guardar la ruta actual antes de recargar
        const currentRoute = this.router.url;
        localStorage.setItem('currentRoute', currentRoute);

        // Usar la ruta guardada para la redirección
        const savedRoute = localStorage.getItem('currentRoute');
        this.router.navigateByUrl(savedRoute || '/inicio');
        return;

      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/auth/sesion');
        return;
    }
  }); */

}

/* export class AppComponent {
  private authService = inject( AuthService );
  private router = inject( Router )

  public finishedAuthCheck = computed<boolean>(() => {
    if( this.authService.authStatus() === AuthStatus.checking ) {
      return false;
    }
    return true
  })

  public authStatusChangedEffect = effect( () => {
    switch( this.authService.authStatus()){
      case AuthStatus.checking:
        return;

      case AuthStatus.authenticated:
        this.router.navigateByUrl('/inicio');
        return;

      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/auth/sesion');
        return;
    }
  });

} */
