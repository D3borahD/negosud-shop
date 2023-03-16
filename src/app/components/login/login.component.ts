import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form)
    this.http.post(`http://localhost:9000/api/v1/auth/authenticate`, this.form)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      )
  }
}
