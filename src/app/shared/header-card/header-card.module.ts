import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCardComponent } from './src/header-card.component';



@NgModule({
  declarations: [
    HeaderCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderCardComponent
  ]
})
export class HeaderCardModule { }
