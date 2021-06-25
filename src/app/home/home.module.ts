import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './src/pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CarrasolComponent } from '../shared/carrasol/carrasol.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderCardModule } from '../shared/header-card/header-card.module';
import { MenuModule } from '../shared/menu/menu.module';

const routes : Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    CarrasolComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    RouterModule.forChild(routes),
    MenuModule
    // HeaderCardModule
  ]
})
export class HomeModule { }
