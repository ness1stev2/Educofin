import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Usuario } from '../interfaces/page.interface';
import { environment } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class PagesService {


  // se crea una propiedad de tipo string en el cual seobtiene la url (endpoint)
  private baseUrl: string = environment.baseUrl

  // se inyecta el servicio HttpClient para realizar solicitudes HTTP a servidores remotos para obtener o enviar datos
  constructor(private http: HttpClient) { }


  // Con este metodo que regresa un obserbable que a la vez estara emitiendo un arreglo de Usuario[]
  // TODO: ESTE GET USER TRAERA TODOS LOS USUARIOS Y LO PODEMOS IMPLEMENTAR UNICAMENTE PARA EL ADMINISTRADOR
  getUser():Observable<Usuario[]> {
    // y retornara una peticion de la base de datos
    // en este caso obtiene el arreglo de los Usuarios
    return this.http.get<Usuario[]>(`${ this.baseUrl }/usuarios`)
  }

  // Con este medetodo obtenemos un usuario de la tabla Usuarios por medio del ID como parametro
  // este metodo retorna un Observable y retornara un Usuario o Indefinido
  getUserById( id: string ): Observable<Usuario | undefined>{
    // Hacemos una peticion http pasandole parametros como la baseUrl y el ID
    return this.http.get<Usuario>(`${ this.baseUrl }/usuarios/${ id }`)
    .pipe(
      // Si exite un error lo cacha y regresa un observable de undefined
      catchError( error => of(undefined))
    );
  }


  // Metodo para agregar un usuario que recibira un parametro de tipo Usuario
  // este metodo retorna un Observable de tipo Usuario
  addUser( user:Usuario ) : Observable<Usuario>{
    // Hacemos una peticion http (post) para agregar un Usuario
    return this.http.post<Usuario>(`${ this.baseUrl }/usuarios`, user)
  }

  // Metodo para actualizar un usuario que recibira un parametro de tipo Usuario
  updateUser( user:Usuario ) : Observable<Usuario>{

    // Si el usuario id no existe mandaremos un Error con mensaje
    if( !user.id ) throw Error('User id is required')

    // Hacemos la peticion http (Patch) para actualizar los datos mandados
    return this.http.patch<Usuario>(`${ this.baseUrl }/usuarios/${ user.id }`, user)
  }


  // Metodo para eliminar un usuario que recibe como parametro el id
  // este metodo retornara un Obsevable de tipo Boolean
  deleteHeroById( id:string ) : Observable<Boolean> {

    // Hacemos la peticion http (delete) para eliminar al usuario que coinsida con el id
    return this.http.delete(`${ this.baseUrl }/usuarios/${ id }`)
    .pipe(
      // Si existiera un error en la peticion retornamos un nuevo observable con valor de false
      catchError( err => of(false)),
      // de lo contrario si no entra en el error retornaremos un observable con valor de true
      map( resp => true )
    );

  }

}
