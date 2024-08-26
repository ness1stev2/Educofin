import { ViewportScroller } from '@angular/common';
import { ElementRef, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
  ) {}

  setupIntersectionObserver(el: ElementRef): void {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated");
            const animationClasses = (entry.target as HTMLElement).dataset["animate"]?.split(" ") || [];
            entry.target.classList.add(...animationClasses);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    const elements = el.nativeElement.querySelectorAll('.animate-on-scroll');
    elements.forEach((element: Element) => observer.observe(element));
  }

  scrollToTopOnNavigation(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }

}
