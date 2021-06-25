import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './src/menu/menu.component';
import { DishItemComponent } from './src/dish-item/dish-item.component';
import { DishMainComponent } from './src/dish-main/dish-main.component';



@NgModule({
  declarations: [
    MenuComponent,
    DishItemComponent,
    DishMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
