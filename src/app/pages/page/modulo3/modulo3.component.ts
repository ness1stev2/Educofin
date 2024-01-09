import { Component } from '@angular/core';

@Component({
  selector: 'app-modulo3',
  templateUrl: './modulo3.component.html',
  styleUrls: ['./modulo3.component.scss']
})
export class Modulo3Component {

  animatedElements: Element[] = [];
  fadeInLeftElements: Element[] = [];
  fadeInRightElements: Element[] = [];
  jackInTheBoxElements: Element[] = [];

  ngOnInit() {
    this.animatedElements = Array.from(document.querySelectorAll('.animated-element'));
    this.fadeInLeftElements = Array.from(document.querySelectorAll('.fade-in-left'));
    this.fadeInRightElements = Array.from(document.querySelectorAll('.fade-in-right'));
    this.jackInTheBoxElements = Array.from(document.querySelectorAll('.jackInTheBox'));
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

  onScrollFadeInLeft() {
    this.fadeInLeftElements.forEach((element) => {
      if (this.isElementInViewport(element)) {
        element.classList.add('fadeInLeft');
      }
    });
  }

  onScrollFadeInRight() {
    this.fadeInRightElements.forEach((element) => {
      if (this.isElementInViewport(element)) {
        element.classList.add('fadeInRight');
      }
    });
  }

  onScrollJackInTheBox() {
    this.jackInTheBoxElements.forEach((element) => {
      if (this.isElementInViewport(element)) {
        element.classList.add('jackInTheBox');
      }
    });
  }

}
