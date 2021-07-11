import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/dishes.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  imgname = "assets/dish1.jpg";
  price = "12500";

  BASEURL = environment.BASE_URL;

  constructor(
    private dishesSrv: DishesService
  ) { }

  ngOnInit(): void {
    this.loadDishes();
  }

  setDish(dish: any){
    console.info(dish);
    this.imgname = dish.imgname;
    this.price = dish.price;
  }

  dishes : any = [];
  loadDishes(){
    this.dishesSrv.getDishes().subscribe( res => {
      console.log(res);
      this.dishes = res;
      if(this.dishes.length){
        this.imgname = this.BASEURL+'/images/'+this.dishes[0].image;
        this.price = this.dishes[0].price;
      }
    }, err => {
      console.error(err);
    });
  }


}
