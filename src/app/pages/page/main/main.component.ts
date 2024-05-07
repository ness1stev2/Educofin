import { Component, OnInit, computed, inject } from '@angular/core';
import { Usuario } from '../../interfaces/page.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
import { User } from 'src/app/auth/interfaces';

@Component({
    selector: 'pages-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class MainComponent implements OnInit{

  public usuario:User = this.authService.user;

  private router = inject( Router);
  private vpScroller = inject ( ViewportScroller )

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
