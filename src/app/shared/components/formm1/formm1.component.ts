import { Component } from '@angular/core';

@Component({
  selector: 'shared-formm1',
  templateUrl: './formm1.component.html',
  styleUrls: ['./formm1.component.css']
})
export class Formm1Component {
  
    public respuestaSeleccionada: string;

  constructor(){
    this.respuestaSeleccionada = ""
  }

  validarRespuesta() {
    if (this.respuestaSeleccionada === 'a') {
      console.log('Respuesta correcta');
      // Realiza las acciones necesarias para una respuesta correcta
    } else {
      console.log('Respuesta incorrecta');
      // Realiza las acciones necesarias para una respuesta incorrecta
    }
  }
}
