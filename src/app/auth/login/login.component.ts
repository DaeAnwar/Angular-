import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  isSubmitted = false;
  login(){
    this.isSubmitted = true;
    let usersData: Array<any> = [];

    let localUsers = localStorage.getItem("users");
    console.log(localUsers)
    if(localUsers != null)
      usersData = JSON.parse(localUsers);

    console.log(usersData);
    if(usersData.length ==0 ){
      alert("not found");
    }else{
     let user =  usersData.filter( row => row.username == this.loginForm.controls.username.value && row.password == this.loginForm.controls.password.value);
      if(user.length){
        localStorage.setItem("user-info", JSON.stringify(user));
        this.router.navigateByUrl("/home");
      }else{
        // not found inside array
        alert("not found in aray")
      }
    }
  }
}
