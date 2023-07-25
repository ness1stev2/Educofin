import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  isActive: boolean = false;

  toggleActive(): void {
    this.isActive = !this.isActive;
  }


  constructor() { }


}
