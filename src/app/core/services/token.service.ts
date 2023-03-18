import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

  saveToken(token:string): void {
    localStorage.setItem('token', token)
    this.router.navigate(['panier'])
  }

  isLogged(): boolean {
    const token = localStorage.getItem('token')
    // not not => transforme la variable en boolean
    // si la variable est null = false
    // si la variable existe = true
    return !! token
  }

  clearToken(): void {
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

  clearTokenExpired() {
    localStorage.removeItem('token')
    this.router.navigate(['connexion'])
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }



/*  getPayload(){
    let user: ITokenUser = {
      id: 0,
      nom: '',
      prenom: '',
      email: ''
    }

    let token = localStorage.getItem('token')
    if(token != null){
      const decode: ITokenUser =  jwtDecode<ITokenUser>(token)
      user.id = decode.id
      user.nom = decode.nom
      user.prenom = decode.prenom
      user.email = decode.email
    }

    return user

  }*/

}
