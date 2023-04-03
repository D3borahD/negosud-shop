import { Component, OnInit } from '@angular/core';
import {ICredentials, NewUser} from "../../core/models/user.model";
import {AuthService} from "../../core/services/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../core/services/user.service";

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

  form: NewUser = {
    lastname: '',
    firstname:'',
    email: '',
    password: '',
  }

  constructor( private userService: UserService,
               protected router:Router) {
  }

  ngOnInit(): void {

  }


  onSubmitForm() {
    this.userService.addUser(this.form).subscribe()
    this.router.navigateByUrl('connexion')
  }
}
