import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private members: any[] = [];

  constructor() { }

  addMember(nombre: string, apellidos: string, numeroSocio: string, email: string, contraseña: string): void {
    const member = {
      nombre,
      apellidos,
      numeroSocio,
      email,
      contraseña
    };
    this.members.push(member);
  }

  getMembers(): any[] {
    return [...this.members];
  }
}
