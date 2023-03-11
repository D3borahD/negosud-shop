import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShoppingCart} from "../models/shopping-cart.model";
import {Product} from "../models/product.model";


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {
  }

  getShoppingCartById(shoppingCartId:number): Observable<ShoppingCart> {
    return this.http.get<ShoppingCart>(`http://localhost:9000/api/v1/shopping-carts/${shoppingCartId}`)
  }

  addToCart(product:Product) {
    //return this.http.put<ShoppingCart>(`http://localhost:9000/api/v1/shopping-carts/${shoppingCartId}`, product)
    this.items.push(product)
  }

  getItems(){
    return this.items
  }

  itemsCount(){
    return this.items.length
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

}
