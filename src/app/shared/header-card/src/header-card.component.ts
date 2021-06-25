import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-card',
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.scss']
})
export class HeaderCardComponent implements OnInit {

  @Input("img-name") imgName = "";
  @Input("title") title = "";
  @Input("description") description = "";

  constructor() { }

  ngOnInit(): void {
  }

}
