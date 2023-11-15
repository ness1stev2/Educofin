import { Component } from '@angular/core';

@Component({
  selector: 'app-modulo2',
  templateUrl: './modulo2.component.html',
  styleUrls: ['./modulo2.component.scss']
})

export class Modulo2Component {
  animatedElements: Element[] = [];
  flashElements: Element[] = [];
  backInDownElements: Element[] = [];
  pulseElements: Element[] = [];
  backInLeftElements: Element[] = [];
  backInRightElements: Element[] = [];

  ngOnInit() {
    this.animatedElements = Array.from(document.querySelectorAll('.animated-element'));
    this.flashElements = Array.from(document.querySelectorAll('.flash-element'));
    this.backInDownElements = Array.from(document.querySelectorAll('.backInDown-element'));
    this.pulseElements = Array.from(document.querySelectorAll('.pulse-element'));
    this.backInLeftElements = Array.from(document.querySelectorAll('.backInLeft-element'));
    this.backInRightElements = Array.from(document.querySelectorAll('.backInRight-element'));
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
        element.classList.add('swing');
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
}
