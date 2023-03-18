import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ICredentials, IToken} from "../models/user.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:4200/api/v1/auth/authenticate'

  constructor(private http: HttpClient) {}

  login(credentials: ICredentials): Observable<IToken> {
    return this.http.post<IToken>(this.url, credentials)
  }



}

