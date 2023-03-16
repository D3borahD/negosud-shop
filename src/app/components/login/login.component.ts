import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form)
  }
}
