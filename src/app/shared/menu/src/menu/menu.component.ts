import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  imgname = "assets/dish1.jpg";
  price = "12500";

  constructor() { }

  ngOnInit(): void {
  }

  setDish(dish: any){
    console.info(dish);
    this.imgname = dish.imgname;
    this.price = dish.price;
  }

}
