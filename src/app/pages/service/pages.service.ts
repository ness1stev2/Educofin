import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/page.interface';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class PagesService {


  // se crea una propiedad de tipo string en el cual seobtiene la url (endpoint)
  private baseUrl: string = environments.baseUrl

  // se inyecta el servicio HttpClient para realizar solicitudes HTTP a servidores remotos para obtener o enviar datos
  constructor(private http: HttpClient) { }


  // Con este metodo que regresa un obserbable que a la vez estara emitiendo un arreglo de Usuario[]
  getUser():Observable<Usuario[]> {
    // y retornara una peticion de la base de datos
    // en este caso obtiene el arreglo de los Usuarios
    return this.http.get<Usuario[]>(`${ this.baseUrl }/usuarios`)
  }

}
