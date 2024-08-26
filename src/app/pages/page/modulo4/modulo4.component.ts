import { Component, ElementRef } from '@angular/core';
import { RetroAct4Component } from '../../components/retro-act4/retro-act4.component';
import { AnimationService } from '../../service/Animation.service';

@Component({
    selector: 'app-modulo4',
    templateUrl: './modulo4.component.html',
    styleUrls: ['./modulo4.component.scss'],
    standalone: true,
    imports: [RetroAct4Component]
})
export class Modulo4Component {

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
