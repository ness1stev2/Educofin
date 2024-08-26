import { Component, ElementRef } from '@angular/core';
import { RetroAct5Component } from '../../components/retro-act5/retro-act5.component';
import { AnimationService } from '../../service/Animation.service';

@Component({
  selector: 'app-modulo5',
  imports: [RetroAct5Component],
  templateUrl: './modulo5.component.html',
  styleUrls: ['./modulo5.component.scss'],
  standalone: true
})
export class Modulo5Component {

  constructor(
    private animationService: AnimationService,
    private el: ElementRef,
  ) { }

  ngAfterViewInit(): void {
    this.animationService.setupIntersectionObserver(this.el);
  }

  ngOnInit() {
    this.animationService.scrollToTopOnNavigation();
  }

}
