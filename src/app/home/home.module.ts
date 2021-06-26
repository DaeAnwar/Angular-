import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './src/pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CarrasolComponent } from '../shared/carrasol/carrasol.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderCardModule } from '../shared/header-card/header-card.module';
import { MenuModule } from '../shared/menu/menu.module';
import { EventsBlockComponent } from './src/components/events-block/events-block.component';
import { BookTableModalComponent } from './src/components/book-table-modal/book-table-modal.component';
import { ContactUsComponent } from './src/components/contact-us/contact-us.component';
import { GalleryComponent } from './src/components/gallery/gallery.component';

const routes : Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    CarrasolComponent,
    EventsBlockComponent,
    BookTableModalComponent,
    ContactUsComponent,
    GalleryComponent
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
