import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Cart, } from "../models/cart.model";
import {Product} from "../models/product.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private http: HttpClient,
              private _snackBar: MatSnackBar) {
  }

  /*getShoppingCartById(shoppingCartId:number): Observable<Cart> {
    return this.http.get<Cart>(`http://localhost:9000/api/v1/shopping-carts/${shoppingCartId}`)
  }*/


}