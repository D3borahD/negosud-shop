import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {ICredentials, IToken} from "../../core/models/user.model";
import {TokenService} from "../../core/services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: ICredentials = {
    email: '',
    password: '',
  }

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,

  ) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.authService.login(this.form)
      .subscribe(
        data => {
          //console.log('login data token : ',data.token)
          this.tokenService.saveToken(data.token)
        },
        err => console.log(err)
      )
  }
}
