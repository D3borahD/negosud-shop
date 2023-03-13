import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SingupRequestPayload} from "../signup/singup-request.payload";
import {map, Observable} from "rxjs";
import {LoginRequestPayload} from "../login/login-request.payload";
import {LoginResponse} from "../login/login-response.payload";
import {LocalStorageService} from "ngx-webstorage";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
              private localStorage: LocalStorageService) {
  }

  signup(signupRequestPayload: SingupRequestPayload): Observable<any> {
    return this.httpClient.post(`http://localhost:9000/api/v1/auth/register`,
      signupRequestPayload,
      {responseType: 'text'});
  }

  login(loginRequestPayload: LoginRequestPayload): Observable<boolean>{
    return this.httpClient.post<LoginResponse>(`http://localhost:9000/api/v1/auth/authenticate`,
      loginRequestPayload)
      .pipe(map(data => {
        this.localStorage.store('authenticationToken', data.authenticationToken)
        this.localStorage.store('username', data.username)
        this.localStorage.store('refreshToken', data.refreshToken)
        this.localStorage.store('expiresAt', data.expiresAt)

        return true
      }))
  }
}
