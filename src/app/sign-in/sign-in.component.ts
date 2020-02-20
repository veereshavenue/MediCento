import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
// import { NgxSpinnerService } from "ngx-spinner";

import { AuthService } from "../services/auth.service";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public loginForm: FormGroup;
  public isSubmitted  =  false;
  public loading = false;
  public error=false;

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder,
    private authService: AuthService
     ) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      gitUsername: ['', Validators.required],
      gitPassword: ['', Validators.required]
    });
  }

  // get formControls() { return this.loginForm.controls; }

  login(){
    
    // this.spinner.show();
    let loggedIn = this.authService.login(this.loginForm.value.gitUsername, this.loginForm.value.gitPassword)
    if (loggedIn) {
      this.router.navigateByUrl('/home');
    } else {
        this.error = true
    }
  }
  //   this.authService.login(this.loginForm.value.gitUsername, this.loginForm.value.gitPassword)
  //   .subscribe((res) => {
  //     this.spinner.hide();
  //     this.userService.setAuthUser(res);
  //     this.router.navigateByUrl('/home');
  // },
  // error => {
  //   this.spinner.hide();
  //   this.error=true;
  // } 
  // );
   
  // }


}
