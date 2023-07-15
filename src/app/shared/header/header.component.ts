import { Component, HostListener } from '@angular/core';
import { PagesService } from 'src/app/pages/service/pages.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  members: any[] = [];

  constructor(private memberService: PagesService) { }

  ngOnInit(): void {
    this.members = this.memberService.getMembers();
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


}
