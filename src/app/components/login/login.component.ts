import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null,
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form)
    this.authService.login(this.form)
      .subscribe(
        (data: any) => console.log(data.token),
        (err: any) => console.log(err)
      )
  }
}
