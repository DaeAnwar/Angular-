import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish-main',
  templateUrl: './dish-main.component.html',
  styleUrls: ['./dish-main.component.scss']
})
export class DishMainComponent implements OnInit {

  @Input("img-name")  imgname = "";
  @Input("description")  description = "";
  @Input("price")  price = "";

  constructor() { }

  ngOnInit(): void {
  }

}
