import { Component } from '@angular/core';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-error404-page',
  templateUrl: './error404-page.component.html',
})
export class Error404PageComponent {

  public baseUrl = environment.baseUrl

}
