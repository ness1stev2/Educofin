import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

import { environments } from 'src/environments/environments';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({providedIn: 'root'})
export class AuthService {

  private baseUrl = environments.baseUrl;
  private usuario?: Usuario

  constructor(private http: HttpClient) { }

  // Obtenermos el usuario
  get currentUser(): Usuario | undefined {
    // si el usuario no existe retornaremos undefined
    if (!this.usuario) return undefined
    // de lo contrario crearemos un clone profundo del usuario
    return structuredClone(this.usuario);
  }

  // login es una fucion que recibe  2 parametros (email y password) y este retorna un observable de tipo Usuario
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
  }

}
