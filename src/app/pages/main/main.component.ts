import { Component } from '@angular/core';
import { PagesService } from '../service/pages.service';

@Component({
  selector: 'pages-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  members: any[] = [];

  constructor(private memberService: PagesService) { }

  ngOnInit(): void {
    this.members = this.memberService.getMembers();
  }

}
