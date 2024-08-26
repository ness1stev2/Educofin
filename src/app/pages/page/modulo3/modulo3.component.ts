import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { RetroAct3Component } from '../../components/retro-act3/retro-act3.component';
import { AnimationService } from '../../service/Animation.service';

@Component({
  selector: 'app-modulo3',
  templateUrl: './modulo3.component.html',
  styleUrls: ['./modulo3.component.scss'],
  standalone: true,
  imports: [RetroAct3Component]
})
export class Modulo3Component implements AfterViewInit {

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
