import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Cart, CartItem} from "../models/cart.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({items: []})

  url = 'http://localhost:4200/api/v1/shopping-carts'

  constructor(private http: HttpClient,
              private _snackBar: MatSnackBar) {
  }

  getShoppingCartById(shoppingCartId:number): Observable<Cart> {
    return this.http.get<Cart>(this.url +'/'+shoppingCartId)
  }

  addToCart(item: CartItem):void {
    const items = [...this.cart.value.items]

    const itemInCart = items.find((_item) => _item.id === item.id)
    if(itemInCart){
      itemInCart.quantity +=1
    } else {
      items.push(item)
    }

    this.cart.next({ items })

    //this._snackBar.open("1 produit ajouté dans la panier", 'Ok', {duration: 3000})
    //console.log(this.cart.value)
  }

  clearCart(): void {
    this.cart.next({ items: []})
  }

  removeFromCart(item: CartItem, update = true): Array<CartItem> {
    const filteredItems =  this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    )

    if(update){
      this.cart.next({ items: filteredItems})
    }

    return filteredItems

  }

  removeToCart(item: CartItem): void {
    let itemForRemoval: CartItem | undefined
    let filteredItems = this.cart.value.items.map(
      (_item) => {
        if(_item.id === item.id){
          _item.quantity--

          if(_item.quantity === 0) {
            itemForRemoval = _item
          }
        }
        return _item
      }
    )
    if (itemForRemoval) {
      filteredItems = this.removeFromCart(itemForRemoval, false)
    }

    this.cart.next({ items: filteredItems})
  }
}
