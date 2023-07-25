import { Component, EventEmitter, Output } from '@angular/core';
import { Preguntas } from '../../interfaces/preguntas.inteface';


@Component({
  selector: 'shared-formm1',
  templateUrl: './formm1.component.html',
  styleUrls: ['./formm1.component.css']
})
export class Formm1Component {

  @Output() finalizado = new  EventEmitter<boolean>();
  respInc: boolean = false;
  respCor: boolean = false;
  error: number[] = [];
  showModal = false;

  //Se inicializa un variable de tipo string[] para guardar las respuestas selecionadas
  respuestasSeleccionadas: string[] = [];

  public preguntas: Preguntas[] = [
    {
      pregunta: '1. En la época prehispánica ¿Cómo se llamaban las primeras organizaciones que vivían el cooperativismo?',
      opciones: ['a) Tierra de barrios', 'b) Calpulli', 'c) Cooperativas'],
      respuesta: "b) Calpulli"
    },
    {
      pregunta: '2. ¿Quiénes son algunos de los primeros representantes del Cooperativismo?',
      opciones: ['a) Tomás Moro, Tommaso Campanella y Francis Bacon', 'b) Phillippe Buchez y Louis Blanc', 'c) Francis Bacon y Louis Blanc'],
      respuesta: "b) Phillippe Buchez y Louis Blanc"
    },
    {
      pregunta: '3. ¿En qué año nació la primera Cooperativa de Producción en México?',
      opciones: ['a) 1810', 'b) 1916', 'c) 1873'],
      respuesta: "b) 1916"
    },
    {
      pregunta: '4. En México, ¿Cuándo nacieron en su versión moderna, las Cajas?',
      opciones: ['a) Año 2001', 'b) Año 1952', 'c) Año 1951'],
      respuesta: "c) Año 1951"
    },
    {
      pregunta: '5. ¿Cuál es uno de los objetivos del Cooperativismo?',
      opciones: ['a) Ofrecer alternativas financieras justas a quienes forman parte de su comunidad.', 'b) Ofrecer créditos.', 'c) Combatir la injusticia entre campesinos y obreros.'],
      respuesta: "a) Ofrecer alternativas financieras justas a quienes forman parte de su comunidad."
    },
    {
      pregunta: '6. ¿Quién propone el modelo de la bandera del Cooperativismo?',
      opciones: ['a) Guillermo Álvarez Macías', 'b) Charles Gide', 'c) Luis Blanc'],
      respuesta: "b) Charles Gide"
    },
    // Agrega el resto de preguntas aquí
  ];

  // Se crea una variable de tipo arreglo de boleanos y esta crea un nuevo arreglo con la longitud de el arreglo 'Preguntas'
  // y con el .fill(false) rellena todos los campos de arreglo en false dependiendo de la longitud de este
  respSelec: boolean[] = new Array(this.preguntas.length).fill(false);


  verificarRespuestas() {
    let aciertos: number;

    // si existen menos preguntas seleccionadas de las preguntas que hay se muestra un modal
    if (this.respuestasSeleccionadas.length < this.preguntas.length) {
      console.log(' Faltan preguntas por selecionar ')
      this.showModal = true;
    } else {
      //recorremos el arreglo de respuestasSeleccionadas
      for (let i = 0; i < this.respuestasSeleccionadas.length; i++) {
        //Si la respuestasSeleccionadas en la posicion i es exactamente igual a el arreglo de respuestasCorrectas en la misma posicion
        if (this.respuestasSeleccionadas[i] === this.preguntas[i].respuesta) {
          // Hacer algo si la respuesta es correcta
          this.error[i] = 1;
        } else {
          // Hacer algo si la respuesta es incorrecta
          this.error[i] = 0;
        }
      }
      // Declaramos una variable para sumar todos los campos del arreglo error con .reduce
      aciertos = this.error.reduce((acumulador, numero) => acumulador + numero, 0);

      // si el numero de aciertos es igual al numero de preguntas entonces:
      if (aciertos === this.preguntas.length) {
        this.finalizado.emit(true);
      }else{
        this.showModal = true;
      }
    }

  }


  cerrarPopup() {
    this.showModal = false;
  }




}
