import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginRequestPayload} from "./login-request.payload";
import {AuthService} from "../shared/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {throwError} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup | any;
  loginRequestPayload!:LoginRequestPayload;
  registerSuccessMessage: 'je serait bientôt un message dynamique' | undefined;
  isError: boolean | undefined;

  constructor(private authService: AuthService,
              private  activatedRoute: ActivatedRoute,
              private router: Router,
              private _snackbar: MatSnackBar
              ) {
    this.loginRequestPayload = {
      email: '',
      password: ''
    }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });

    //MESSAGE D'ERREUR
    /*this.activatedRoute.queryParams
      .subscribe(params => {
        if (params.registered !== undefined && params.registered === 'true') {
          console.log('Signup Successful');
          console.log('Please Check your inbox for activation email '
            + 'activate your account before you Login!');
        }
      });*/


  }

  login() {
    this.loginRequestPayload.email = this.loginForm.get('email').value;
    this.loginRequestPayload.password = this.loginForm.get('password').value;

   /* this.authService.login(this.loginRequestPayload).subscribe(data => {
      console.log('Login succesful')
    })*/

    this.authService.login(this.loginRequestPayload).subscribe(data => {
      this.isError = false;
      this.router.navigateByUrl('/vins');
      console.log('Login Successful')
     // this.toastr.success('Login Successful');
    }, error => {
      this.isError = true;
      throwError(error);
    });
  }

}
