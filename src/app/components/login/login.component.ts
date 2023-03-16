import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {ICredentials, IToken} from "../../core/models/user.model";
import {TokenService} from "../../core/services/token.service";


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

  constructor(private authService: AuthService,
            private tokenService: TokenService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form)
    this.authService.login(this.form)
      .subscribe(
        data => {
          /*console.log(data.token)*/
          this.tokenService.saveToken(data.token)
        },
        err => console.log(err)
      )
  }
}
