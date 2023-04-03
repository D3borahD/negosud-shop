import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {ITokenUser, User} from "../models/user.model";
import jwtDecode from "jwt-decode";
import {UserService} from "./user.service";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public user: User | undefined = undefined
  public currentUser: User | undefined
  public userStorage: ITokenUser = {
    sub: '',
    email: '',
  };
  private _user$: BehaviorSubject<User|undefined> = new BehaviorSubject<User|undefined>(undefined)
  public get user$(): Observable<User|undefined> {
    return this._user$
  }
  constructor(private router: Router,
              private userService: UserService) { }

  public saveToken(token:string): void {
    localStorage.setItem('token', token)
    this.router.navigate(['panier'])
  }

  public isLogged(): boolean {
    this.getCurrentUser()

    const token = localStorage.getItem('token')
    // not not => transforme la variable en boolean
    // si la variable est null = false
    // si la variable existe = true
    return !! token
  }

  public clearToken(): void {
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

  public clearTokenExpired() {
    localStorage.removeItem('token')
    this.router.navigate(['connexion'])
  }

  public getToken(): string | null {
    return localStorage.getItem('token')
  }

  public getPayload(){
    let token = localStorage.getItem('token')
    if(token != null){
      const decode: ITokenUser = jwtDecode<ITokenUser>(token)
      this.userStorage.sub = decode.sub
    }
    return this.userStorage
  }

  public getCurrentUser() {
    let email:string;
    email = this.getPayload().sub
    this.userService.getUserByEmail(email).subscribe(
      (user) => {
        this.currentUser = user
        this._user$.next(this.currentUser)
       // console.log('je suis le CurrentUser de TOKENSERVICE : ', this.currentUser )
        return this.currentUser
      }
    )
  }
}
