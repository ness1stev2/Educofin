import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Domicilio } from '../../interfaces/page.interface';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-edit-perfil',
    templateUrl: './edit-perfil.component.html',
    styleUrls: ['./edit-perfil.component.scss'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, NgFor]
})
export class EditPerfilComponent {

  public domicilio: Domicilio = {
    calle: '',
    numero: '',
    colonia: '',
    municipio: '',
    codigoPostal: '',
    estado: '',
  };

  public userForm = new FormGroup({
    id: new FormControl<string>(''),
    nombre: new FormControl<string>('', { nonNullable: true }),
    apellidos: new FormControl(''),
    nSocio: new FormControl(''),
    email: new FormControl(''),
    contraseña: new FormControl(''),
    telefono: new FormControl(''),
    domicilio: new FormControl<Domicilio>(this.domicilio),
    foto: new FormControl(''),
  })

  onSubmit():void {
    console.log({
      formIsValid: this.userForm.valid,
      value: this.userForm.value,
    })
  }

  public estados: string[] = [
    'Seleccione un estado',
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'Chiapas',
    'Chihuahua',
    'Ciudad de México',
    'Coahuila',
    'Colima',
    'Durango',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',
    'México',
    'Michoacán',
    'Morelos',
    'Nayarit',
    'Nuevo León',
    'Oaxaca',
    'Puebla',
    'Querétaro',
    'Quintana Roo',
    'San Luis Potosí',
    'Sinaloa',
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz',
    'Yucatán',
    'Zacatecas'
  ]

}
