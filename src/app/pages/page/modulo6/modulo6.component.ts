import { Component, ElementRef } from '@angular/core';
import { RetroAct6Component } from '../../components/retro-act6/retro-act6.component';
import { AnimationService } from '../../service/Animation.service';

@Component({
    selector: 'app-modulo6',
    imports: [RetroAct6Component],
    templateUrl: './modulo6.component.html',
    styleUrls: ['./modulo6.component.scss'],
    standalone: true
})
export class Modulo6Component {

  constructor(
    private animationService: AnimationService,
    private el: ElementRef,
  ) {}

  ngAfterViewInit(): void {
    this.animationService.setupIntersectionObserver(this.el);
  }

  ngOnInit() {
    this.animationService.scrollToTopOnNavigation();
  }

}
