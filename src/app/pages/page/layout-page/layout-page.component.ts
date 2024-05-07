import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
    selector: 'app-layout-page',
    templateUrl: './layout-page.component.html',
    styles: [],
    standalone: true,
    imports: [HeaderComponent, RouterOutlet, FooterComponent]
})
export class LayoutPageComponent {

}
