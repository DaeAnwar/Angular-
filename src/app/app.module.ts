import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { NgbCarousel, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrasolComponent } from './shared/carrasol/carrasol.component';
import { HeaderCardModule } from './shared/header-card/header-card.module';
import { PageInformationComponent } from './page-information/page-information.component';

@NgModule({
  declarations: [
    AppComponent,
    PageInformationComponent,
    // NavBarComponent,
    // CarrasolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    // NgbCarouselModule
    HeaderCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
/**
 * App module
 */
export class AppModule { }
