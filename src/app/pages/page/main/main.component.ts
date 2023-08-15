import { Component, OnInit, computed, inject } from '@angular/core';
import { Usuario } from '../../interfaces/page.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'pages-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  public name: string | null = localStorage.getItem('nombre')
  public nSocio: string | null = localStorage.getItem('socio')

  private router = inject( Router);
  private vpScroller = inject ( ViewportScroller )
  public user = computed(() => this.authService.currentUser())

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      // Desplázate al inicio de la página
      this.vpScroller.scrollToPosition([0, 0]);
  });}

  /* get user(): Usuario | undefined{
    return this.authService.currentUser
  } */

}
