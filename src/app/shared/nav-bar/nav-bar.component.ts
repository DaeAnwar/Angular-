import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input("is-home-page") isHomePage : boolean = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userExist =  localStorage.getItem("user-info") != null;

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
}
