import { Component } from '@angular/core';
import { environment } from 'src/environments/environments';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-error404-page',
    templateUrl: './error404-page.component.html',
    standalone: true,
    imports: [RouterLink],
})
export class Error404PageComponent {

  public baseUrl = environment.baseUrl

}
