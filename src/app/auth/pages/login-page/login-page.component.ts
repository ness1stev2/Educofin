import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { User } from '../../interfaces';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  imports: [NgClass, ReactiveFormsModule],
  standalone: true,
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  private fb          = inject( FormBuilder );
  private authService = inject( AuthService );
  private router      = inject( Router )

  public myForm: FormGroup = this.fb.group({

    email:    ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],

  });

  public myFormRegister: FormGroup = this.fb.group({

    name:    ['',  Validators.required ],
    nSocio:    ['', [ Validators.required, Validators.maxLength(6) ]],
    email:    ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],

  })

  register(){
    const user: User = this.myFormRegister.value;


    this.authService.register(user)
      .subscribe({
        next: () => this.router.navigateByUrl('/inicio'),
        error: (message) => {
          Swal.fire('Error', message, 'error')
        }
      })

  }

  login(){
    const { email, password } = this.myForm.value;

    this.authService.login(email, password)
      .subscribe({
        next: () => this.router.navigateByUrl('/inicio'),
        error: (message) => {
          console.log(message)
          Swal.fire('Error', message, 'error')
        }
      }
      )
  }


  isActive: boolean = false;
  toggleActive(): void {
    this.isActive = !this.isActive;
  }

  constructor(
  ) { }


  //TODO VER SI BORRAR ESTE METODO
  /* onLogin(): void {
    this.authService.login('nestor@gmail.com', '123456')
      .subscribe( user => {
        this.router.navigate(['/'])
      })
  } */


}
