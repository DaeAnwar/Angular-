import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signupForm = new FormGroup({
    username: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    phoneNumber: new FormControl(null, [Validators.required,Validators.minLength(8), Validators.maxLength(8)]),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  isSubmitted = false;
  signUp(){
    this.isSubmitted = true;
    if(this.signupForm.invalid)
      return;
    localStorage.setItem("user-info", JSON.stringify(
      this.signupForm.value
    ));

    let users = [];
    let usersData : any = [];
    usersData = localStorage.getItem("users");
    if( usersData == null ){

      users.push(this.signupForm.value);
      localStorage.setItem("users", JSON.stringify(users));
    }else{
      users = JSON.parse(usersData);
      users.push(this.signupForm.value);
      // localStorage.removeItem("users");
      localStorage.setItem("users", JSON.stringify(users));
    }

    this.router.navigateByUrl("/home");


  }

}
