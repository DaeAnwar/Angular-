import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardOutGuard } from './guards/guard-out.guard';
import { PageInformationComponent } from './page-information/page-information.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import("./auth/auth.module").then( m => m.AuthModule ),
    canActivate: [GuardOutGuard]
  },
  {
    path: 'home',
    loadChildren: ()=> import("./home/home.module").then( m => m.HomeModule)
  },{
    path: 'info',
    component: PageInformationComponent
  },{
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
