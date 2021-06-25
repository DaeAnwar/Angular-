import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.scss']
})
export class DishItemComponent implements OnInit {

  @Input("img-name")  imgname = "";
  @Input("title")  title = "";
  @Input("description")  description = "";
  @Input("price")  price = "";

  @Output("on-clicked") onClicked = new EventEmitter<{
    imgname: string,
    description: string,
    price: string,
    title: string
  }>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.onClicked.emit({
      imgname:this.imgname,
      description:this.description,
      price:this.price,
      title:this.title
    });
  }

}
