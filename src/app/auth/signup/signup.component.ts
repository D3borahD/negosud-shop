import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SingupRequestPayload} from "./singup-request.payload";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signuRequestPayload!: SingupRequestPayload;
  signupForm!: FormGroup | any;
  constructor(private authService: AuthService) {
    this.signuRequestPayload = {
      lastname: '',
      firstname: '',
      email: '',
      password: '',
    }
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      lastname: new FormControl('', Validators.required),
      firstname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
  }

  signup() {
    this.signuRequestPayload.lastname = this.signupForm.get('lastname').value;
    this.signuRequestPayload.firstname = this.signupForm.get('firstname').value;
    this.signuRequestPayload.email = this.signupForm.get('email').value;
    this.signuRequestPayload.password = this.signupForm.get('password').value;

    this.authService.signup(this.signuRequestPayload)
      .subscribe(data => {
        console.log(data)
      })
  }
}
