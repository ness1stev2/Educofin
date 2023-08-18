import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';

import { environment } from 'src/environments/environments';
import { Usuario } from '../interfaces/usuario.interface';
import { User, AuthStatus, LoginResponse, CheckTokenResponse } from '../interfaces';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // readonly sirve para que incluso estando en el mismo servicio nadie lo va a poder editar
  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking)

  //! Al mundo exterior (fuera de este archivo)
  public currentUser = computed(() => this._currentUser())
  public authStatus = computed(() => this._authStatus())
  public user: User = {
    _id: "",
    email: "",
    name: "",
    apellidos: "",
    nSocio: 0,
    isActive: true,
    roles: []
  }

  constructor(private userService: UserService) {
    this.checkAuthStatus().subscribe();
  }

  private setAuthentication(user: User, token: string): boolean {
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('token', token)
    localStorage.setItem('nombre', user.name)
    localStorage.setItem('socio', user.nSocio.toString())
    localStorage.setItem('email', user.email)
    this.user = user


    this.userService.updateUser(user);
    return true
  }



  register(user: User): Observable<boolean> {
    const url = `${this.baseUrl}/auth/register`;

    return this.http.post<LoginResponse>(url, user)
      .pipe(
        map(({ user, token }) => this.setAuthentication(user, token)),
        catchError(err => throwError(() => err.error.message))
      )
  }
  /* register() */

  login(email: string, password: string): Observable<boolean> {

    const url = `${this.baseUrl}/auth/login`;
    const body = { email, password };

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map(({ user, token }) => this.setAuthentication(user, token)),
        catchError(err => throwError(() => err.error.message))
      )

  }

  checkAuthStatus(): Observable<boolean> {

    const url = `${this.baseUrl}/auth/check-token`;
    const token = localStorage.getItem('token');

    if (!token) {
      this.logout();
      return of(false)
    }
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.http.get<CheckTokenResponse>(url, { headers })
      .pipe(
        map(({ user, token }) => this.setAuthentication(user, token)),
        //Error
        catchError(() => {
          this._authStatus.set(AuthStatus.notAuthenticated)
          return of(false)
        })
      )
  }

  logout() {
    localStorage.clear()
    localStorage.removeItem('token')
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.notAuthenticated)
  }


  //  TODO: CODIGO DE SECCIONES ANTERIORES QUE NOS PUEDE SERVIR DE REFERENCIA

  /* private usuario?: Usuario */

  /* constructor(private http: HttpClient) { } */

  /* // Obtenermos el usuario
  get currentUser(): Usuario | undefined {
    // si el usuario no existe retornaremos undefined
    if (!this.usuario) return undefined
    // de lo contrario crearemos un clone profundo del usuario
    return structuredClone(this.usuario);
  } */

  /*  // login es una fucion que recibe  2 parametros (email y password) y este retorna un observable de tipo Usuario
   login(email: string, password: string): Observable<Usuario> {

     // Se hace la peticion http a la base de datos
     return this.http.get<Usuario>(`${this.baseUrl}/usuarios/1`)
       .pipe(
         // con el operador tap disparamos un efecto secundario y guardamos al usuario recibido en la propiedad local usuario
         tap(usuario => this.usuario = usuario),
         // grabamos un token en el localStorage con un token
         tap(usuario => localStorage.setItem('token', 'adsfasdf.54651.s5fdg4')),
       )

   }

   // verifica la autenticacion del usuario y retorna un observable boleano
   checkAuthentication(): Observable<boolean>{
     // si en el local storage no existe un token retorna un observable(false)
     if ( !localStorage.getItem('token')) return of(false);

     // de lo contrario guardamos el token en una contante que viene del localStorage
     const token = localStorage.getItem('token');

     // y retormanos la peticion http para traer un Usuario de la base de datos
     return this.http.get<Usuario>(`${ this.baseUrl }/usuarios/1`)
       .pipe(
         // con el operadr tap hacemos que el usuario recibido sea igual a la propiedad usuario local
         tap( usuario => this.usuario = usuario ),
         // y convertimos al usuario en true con la doble negacion ya que la primera negacion hace referencia a si el usario no tiene ningun valor y como si lo tiene arroja un false
         // y la segunda negacion hace que sea verdadero porque convierte el falso en verdadero
         map( usuario => !!usuario ),
         // si hay un error en la peticion retoramos un observable false
         catchError( err => of(false))
       );
   }

   logout(){
     // el usuario lo ponemos indefinido
     this.usuario = undefined;
     // y limpiamos todo el localStorage
     localStorage.clear();
   } */

}
