import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShoppingCart} from "../models/shopping-cart.model";


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) {
  }

  getShoppingCartById(shoppingCartId:number): Observable<ShoppingCart> {
    return this.http.get<ShoppingCart>(`http://localhost:9000/api/v1/shopping-carts/${shoppingCartId}`)
  }

  updateShoppindCart(shoppingCartId:number, shoppingCart:ShoppingCart): Observable<ShoppingCart>{
    return this.http.put<ShoppingCart>(`http://localhost:9000/api/v1/shopping-carts/${shoppingCartId}`, shoppingCart)
  }

}
