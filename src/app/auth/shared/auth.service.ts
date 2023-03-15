import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SingupRequestPayload} from "../signup/singup-request.payload";
import {map, Observable, tap} from "rxjs";
import {LoginRequestPayload} from "../login/login-request.payload";
import {LoginResponse} from "../login/login-response.payload";
import {LocalStorageService} from "ngx-webstorage";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  refreshTokenPayload = {
    refreshToken: this.getRefreshToken(),
    username: this.getUserName()
  }

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

  getJwtToken() {
    return this.localStorage.retrieve('authenticationToken');
  }

  refreshToken() {
    return this.httpClient.post<LoginResponse>('http://localhost:8080/api/auth/refresh/token',
      this.refreshTokenPayload)
      .pipe(tap(response => {
        this.localStorage.clear('authenticationToken');
        this.localStorage.clear('expiresAt');

        this.localStorage.store('authenticationToken',
          response.authenticationToken);
        this.localStorage.store('expiresAt', response.expiresAt);
      }));
  }

  getUserName() {
    return this.localStorage.retrieve('username');
  }
  getRefreshToken() {
    return this.localStorage.retrieve('refreshToken');
  }
}
