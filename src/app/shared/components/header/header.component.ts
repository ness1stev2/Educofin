import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Url } from '../../interfaces/url.interface';
import { Usuario } from 'src/app/pages/interfaces/page.interface';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public toolbarItems: Url[] = [
    {label: 'INICIO', icon: 'icon fas fa-house-user',url: '/inicio', },
    {label: `${this.user?.nombre} ${this.user?.apellidos}`, icon: 'icon fa-solid fa-user',url: './perfil', },
    {label: 'CERRAR SESIÓN', icon: ''},
  ]

  constructor(
    private authService: AuthService,
    public router: Router
  ) { }

  scrollDownClass: boolean = false;
  isMenuActive: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: void) {
    // Obtiene la posición actual de desplazamiento
    const scrollPosition = window.scrollY ;

    // Verifica si la posición actual de desplazamiento es mayor o igual a 10 píxeles
    this.scrollDownClass = scrollPosition >= 10;
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  // metodo que cierra la sesion
  onLogout(){
    this.authService.logout();
    this.router.navigate(['/auth/sesion'])
  }

  get user(): Usuario | undefined{
    return this.authService.currentUser;
  }


}
