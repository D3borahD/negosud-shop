import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Cart, } from "../models/cart.model";
import {Product} from "../models/product.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  url = 'http://localhost:4200/api/v1/shopping-carts'

  constructor(private http: HttpClient,
              private _snackBar: MatSnackBar) {
  }

  getShoppingCartById(shoppingCartId:number): Observable<Cart> {
    return this.http.get<Cart>(this.url +'/'+shoppingCartId)
  }


}
