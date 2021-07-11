import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input("is-home-page") isHomePage : boolean = true;

  @Output("on-nav-reservation") onNavReservation = new EventEmitter<void>();
  @Output("on-nav-menu") onNavMenu = new EventEmitter<void>();
  @Output("on-nav-gallery") onNavGallery = new EventEmitter<void>();

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userExist =  localStorage.getItem("user-info") != null;
    this.actRoute.queryParams.subscribe( params => {
      if(params["q"]){
        if( params["q"] == 'reservation')
          this.onNavReservation.emit();
        else if( params["q"] == 'menu' )
          this.onNavMenu.emit()
        else if( params["q"] == 'gallery' )
          this.onNavGallery.emit();
      }
    })
  }

  get isUserExist(){
    if(localStorage.getItem("user-info"))
      return true;
    return false;
    // return JSON.parse(localStorage.getItem("user-info");
  }

  displayMobileItems = false;

  userExist = false;


  logout(){
    this.displayMobileItems = false;
    this.userExist = false;
    localStorage.removeItem("user-info");
    this.router.navigateByUrl("/");
    // this.router.navigateByUrl("");
  }

  redirectToContactUs(){
    this.router.navigateByUrl("/info");
  }

  redirectToHome(block: string){
    this.router.navigateByUrl("/home?q="+block);
  }
}
