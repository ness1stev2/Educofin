import { Component, HostListener, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Url } from '../../interfaces/url.interface';
import { User } from 'src/app/auth/interfaces';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  private authService = inject( AuthService );
  public user = computed(() => this.authService.currentUser())
  /* public name: string | null = localStorage.getItem('nombre') */
  public usuario:User = this.authService.user;

  public toolbarItems: Url[] = [
    {label: 'INICIO', icon: 'icon fas fa-house-user',url: '/inicio', },
    {label: this.usuario.name , icon: 'icon fa-solid fa-user',url: './perfil', },
    {label: 'CERRAR SESIÓN', icon: ''},
  ]




  constructor(
    public router: Router,
  ) {
  }

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


  onLogout(){
    this.authService.logout();
  }

  // metodo que cierra la sesion
  /* onLogout(){
    this.authService.logout();
    this.router.navigate(['/auth/sesion'])
  } */

  /* get user(): Usuario | undefined{
    return this.authService.currentUser;
  } */


}
