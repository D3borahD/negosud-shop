import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUserById(userId:number): Observable<User> {
    return this.http.get<User>(`http://localhost:4200/api/v1/users/${userId}`)
  }

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:4200/api/v1/users`)
  }


}
