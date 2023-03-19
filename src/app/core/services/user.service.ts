import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlShort = 'http://localhost:4200/api/v1/user'
  url = 'http://localhost:4200/api/v1/users'
  constructor(private http: HttpClient) {
  }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }

  getUserById(userId:number): Observable<User> {
    return this.http.get<User>(this.url+'/'+userId)
  }

  getUserByEmail(userEmail:string): Observable<User> {
    return this.http.get<User>(this.urlShort+'/'+userEmail)
  }

}
