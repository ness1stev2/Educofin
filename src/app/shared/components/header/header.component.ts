import { Component, HostListener } from '@angular/core';
import { PagesService } from 'src/app/pages/service/pages.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public toolbarItems = [
    {label: 'INICIO', icon: 'icon fas fa-house-user',url: '/inicio'},
    {label: 'Nestor Daniel Basave Davalos', icon: 'icon fa-solid fa-user',url: './perfil'},
    {label: 'CERRAR SESIÓN', icon: '',url: '/auth/sesion'},
  ]

  constructor() { }

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


}
