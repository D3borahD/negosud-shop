import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SingupRequestPayload} from "../signup/singup-request.payload";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  signup(signupRequestPayload: SingupRequestPayload): Observable<any> {
    return this.httpClient.post(`http://localhost:9000/api/v1/auth/register`,
      signupRequestPayload,
      {responseType: 'text'});
  }
}
