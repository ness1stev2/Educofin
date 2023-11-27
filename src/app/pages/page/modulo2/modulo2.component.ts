import { Component, EventEmitter, Output } from '@angular/core';
import { Validacion } from '../../interfaces/crucigrama.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo2',
  templateUrl: './modulo2.component.html',
  styleUrls: ['./modulo2.component.scss']
})

export class Modulo2Component {

  constructor(private router: Router,) { }

  @Output() finalizado = new  EventEmitter<boolean>();
  public finalizadoP: Boolean = false;
  public contador: number = 10;

  validacion: Validacion = {
    validaciones: [
      { campo: '1_3', letra: 'D' },
      { campo: '1_9', letra: 'A' },
      { campo: '3_3', letra: 'S' },
      { campo: '4_6', letra: 'S' },
      { campo: '4_8', letra: 'C' },
      { campo: '5_1', letra: 'S' },
      { campo: '6_8', letra: 'S' },
      { campo: '9_3', letra: 'I' },
      { campo: '11_4', letra: 'P' },
      { campo: '13_5', letra: 'V' },

      { campo: '1_4', letra: 'E' },
      { campo: '1_5', letra: 'M' },
      { campo: '1_6', letra: 'O' },
      { campo: '1_7', letra: 'C' },
      { campo: '1_8', letra: 'R' },
      { campo: '1_10', letra: 'C' },
      { campo: '1_11', letra: 'I' },
      { campo: '1_12', letra: 'A' },

      { campo: '4_9', letra: 'O' },
      { campo: '4_10', letra: 'O' },
      { campo: '4_11', letra: 'P' },
      { campo: '4_12', letra: 'E' },
      { campo: '4_13', letra: 'R' },
      { campo: '4_14', letra: 'A' },
      { campo: '4_15', letra: 'T' },
      { campo: '4_16', letra: 'I' },
      { campo: '4_17', letra: 'V' },
      { campo: '4_18', letra: 'A' },

      { campo: '5_2', letra: 'O' },
      { campo: '5_3', letra: 'F' },
      { campo: '5_4', letra: 'I' },
      { campo: '5_5', letra: 'P' },
      { campo: '5_6', letra: 'O' },

      { campo: '6_9', letra: 'O' },
      { campo: '6_10', letra: 'C' },
      { campo: '6_11', letra: 'A' },
      { campo: '6_12', letra: 'P' },

      { campo: '9_4', letra: 'G' },
      { campo: '9_5', letra: 'U' },
      { campo: '9_6', letra: 'A' },
      { campo: '9_7', letra: 'L' },
      { campo: '9_8', letra: 'D' },
      { campo: '9_9', letra: 'A' },
      { campo: '9_10', letra: 'D' },

      { campo: '11_5', letra: 'R' },
      { campo: '11_6', letra: 'I' },
      { campo: '11_7', letra: 'N' },
      { campo: '11_8', letra: 'C' },
      { campo: '11_9', letra: 'I' },
      { campo: '11_10', letra: 'P' },
      { campo: '11_11', letra: 'I' },
      { campo: '11_12', letra: 'O' },
      { campo: '11_13', letra: 'S' },

      { campo: '13_6', letra: 'A' },
      { campo: '13_7', letra: 'L' },
      { campo: '13_8', letra: 'O' },
      { campo: '13_9', letra: 'R' },
      { campo: '13_10', letra: 'E' },
      { campo: '13_11', letra: 'S' },

      { campo: '2_9', letra: 'U' },
      { campo: '3_9', letra: 'T' },
      { campo: '5_9', letra: 'N' },
      { campo: '7_9', letra: 'M' },
      { campo: '8_9', letra: 'I' },
      { campo: '4_3', letra: 'O' },
      { campo: '6_3', letra: 'O' },
      { campo: '7_3', letra: 'M' },
      { campo: '6_6', letra: 'L' },
      { campo: '7_6', letra: 'I' },
      { campo: '8_6', letra: 'D' },
      { campo: '10_6', letra: 'R' },
      { campo: '12_6', letra: 'D' },
      { campo: '14_6', letra: 'D' },

    ]
  }

  public display: string = ""

  filas: number[] = Array.from({ length: 14 }, (_, index) => index + 1);

  columnas: number[] = Array.from({ length: 18 }, (_, index) => index + 1);

  placeholders: { [key: string]: number } = {
    '1_3': 1,
    '1_9': 2,
    '3_3': 3,
    '4_6': 4,
    '4_8': 5,
    '5_1': 6,
    '6_8': 7,
    '9_3': 8,
    '11_4': 9,
    '13_5': 10,
  };

  enable: string[] = [

    '1_4',
    '1_5',
    '1_6',
    '1_7',
    '1_8',
    '1_10',
    '1_11',
    '1_12',

    '4_9',
    '4_10',
    '4_11',
    '4_12',
    '4_13',
    '4_14',
    '4_15',
    '4_16',
    '4_17',
    '4_18',

    '5_2',
    '5_3',
    '5_4',
    '5_5',
    '5_6',

    '6_9',
    '6_10',
    '6_11',
    '6_12',

    '9_4',
    '9_5',
    '9_6',
    '9_7',
    '9_8',
    '9_9',
    '9_10',

    '11_5',
    '11_6',
    '11_7',
    '11_8',
    '11_9',
    '11_10',
    '11_11',
    '11_12',
    '11_13',

    '13_6',
    '13_7',
    '13_8',
    '13_9',
    '13_10',
    '13_11',

    '2_9',
    '3_9',
    '5_9',
    '7_3',
    '7_9',
    '8_9',
    '4_3',
    '6_3',
    '6_6',
    '7_6',
    '8_6',
    '10_6',
    '12_6',
    '14_6',
  ];

  changeStyles(flex:string):void {
    // Cambiar los estilos al hacer clic en el botón
    if(flex === 'mostrarCrucigrama'){this.display = 'flex';}
  }

  finalizadoEvent(finalizado: boolean){
    this.finalizadoP = finalizado;
    /* console.log(this.finalizadoP); */
    this.iniciarContador();
  }

  iniciarContador() {
    const interval = setInterval(() => {
      this.contador--;

      if (this.contador === 0) {
        clearInterval(interval);
      }
    }, 1000);

    //con esta funcion determinamos un tiempo para realizar una tarea determinada
    setTimeout(() => {
      //en este caso mandamos a llamar la funcion redirigirAotraPagina() para hacerlo
      this.redirigirAotraPagina();
    }, 10000); // 10000 milisegundos = 10 segundos
  }

  redirigirAotraPagina() {
    this.router.navigate(['/']); // Cambia '/otra-pagina' por la ruta de la página a la que deseas redirigir
  }

  animatedElements: Element[] = [];
  flashElements: Element[] = [];
  backInDownElements: Element[] = [];
  pulseElements: Element[] = [];
  backInLeftElements: Element[] = [];
  backInRightElements: Element[] = [];
  fadeInDownElements: Element[] = [];
  backInUpElements: Element[] = [];
  flipElements: Element[] = [];
  rotateOutElements: Element[] = [];

  ngOnInit() {
    this.animatedElements = Array.from(document.querySelectorAll('.animated-element'));
    this.flashElements = Array.from(document.querySelectorAll('.flash-element'));
    this.backInDownElements = Array.from(document.querySelectorAll('.backInDown-element'));
    this.pulseElements = Array.from(document.querySelectorAll('.pulse-element'));
    this.backInLeftElements = Array.from(document.querySelectorAll('.backInLeft-element'));
    this.backInRightElements = Array.from(document.querySelectorAll('.backInRight-element'));
    this.fadeInDownElements = Array.from(document.querySelectorAll('.fadeInDown-element'));
    this.backInUpElements = Array.from(document.querySelectorAll('.backInUp-element'));
    this.flipElements = Array.from(document.querySelectorAll('.flip-element'));
    this.rotateOutElements = Array.from(document.querySelectorAll('.rotateOut-element'));
  }

  isElementInViewport(element: Element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Calcular la posición vertical en la que se activará la animación (10% del viewport)
    const activationPoint = windowHeight * 0.80;

    // Comprobar si el elemento está dentro del 10% superior del viewport
    return rect.top <= activationPoint;
  }

  onScrollAnimated() {
    this.animatedElements.forEach((element) => {
      if (this.isElementInViewport(element)) {
        element.classList.add('animated');
      }
    });
  }

  onScrollFlash() {
    this.flashElements.forEach((element) => {
      if (this.isElementInViewport(element)) {
        element.classList.add('flash');
      }
    });
  }

  onScrollBackInDown() {
    this.backInDownElements.forEach((element) => {
      if (this.isElementInViewport(element)) {
        element.classList.add('backInDown');
      }
    });
  }

  onScrollpulse() {
    this.pulseElements.forEach((element) => {
      if (this.isElementInViewport(element)) {
        element.classList.add('pulse');
      }
    });
  }

  onScrollBackInLeft() {
    this.backInLeftElements.forEach((element) => {
      if (this.isElementInViewport(element)) {
        element.classList.add('backInLeft');
      }
    });
  }

  onScrollBackInRight() {
    this.backInRightElements.forEach((element) => {
      if (this.isElementInViewport(element)) {
        element.classList.add('backInRight');
      }
    });
  }

  onScrollFadeInDown() {
    this.fadeInDownElements.forEach((element) => {
      if (this.isElementInViewport(element)) {
        element.classList.add('fadeInDown');
      }
    });
  }

  onScrollBackInUp() {
    this.backInUpElements.forEach((element) => {
      if (this.isElementInViewport(element)) {
        element.classList.add('backInUp');
      }
    });
  }

  onScrollFlip() {
    this.flipElements.forEach((element) => {
      if (this.isElementInViewport(element)) {
        element.classList.add('flip');
      }
    });
  }

  onScrollRotateOut() {
    this.rotateOutElements.forEach((element) => {
      if (this.isElementInViewport(element)) {
        element.classList.add('rotateOut');
      }
    });
  }

}
