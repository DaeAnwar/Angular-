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
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { MenuMobileModule } from '../shared/menu-mobile/menu-mobile.module';
import { GuardInGuard } from '../guards/guard-in.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from '../shared/table/table.module';

const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'book/:eventid',
        component: BookTableModalComponent,
        canActivate: [GuardInGuard]
      }
    ]
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    CarrasolComponent,
    EventsBlockComponent,
    BookTableModalComponent,
    ContactUsComponent,
    GalleryComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    RouterModule.forChild(routes),
    MenuModule,
    HeaderCardModule,
    MenuMobileModule,
    ReactiveFormsModule,
    // HeaderCardModule
    TableModule
  ]
})
export class HomeModule { }
