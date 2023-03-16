import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:9000/api/v1/auth/authenticate'

  constructor(private http: HttpClient) {}

  login(credentials: any): any {
    return this.http.post(this.url, credentials)
  }


}

