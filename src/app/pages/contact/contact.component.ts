import { Component, OnInit } from '@angular/core';
import { mail} from "../../core/models/user.model";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: mail = {
    subject: '',
    message: '',
    email: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    return false;
  }
}
