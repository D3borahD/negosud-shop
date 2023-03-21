import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Cart, CartItem} from "../models/cart.model";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({items: []})
  cartItem!: CartItem

  url = 'http://localhost:4200/api/v1/shopping-carts'
  shoppingCartName = 'negosud_shopping_cart'

  constructor(private http: HttpClient,
              private _snackBar: MatSnackBar
  ) {
    if(localStorage.getItem(this.shoppingCartName) !== null) { return }
    localStorage.setItem(this.shoppingCartName, JSON.stringify([]))
  }

  getShoppingCartById(shoppingCartId:number): Observable<Cart> {
    return this.http.get<Cart>(this.url +'/'+shoppingCartId)
  }

  addToCart(item: Product, quantity: number, isPackage: boolean):void {
    const itemsJSON: string | null = localStorage.getItem("negosud_shopping_cart")

    if(!itemsJSON) {
      let shoppingCartItem: CartItem = this.createCartItem()
      shoppingCartItem.quantity = quantity
      shoppingCartItem.isPackage = isPackage
      shoppingCartItem.product = item
      this.updateCart([shoppingCartItem])
      return
    }

    let items: Array<CartItem> = JSON.parse(itemsJSON)

    let itemInCart = items.filter((_item) => _item.product.idProduct === item.idProduct)
    if(itemInCart?.length == 0){
      console.log("0")
      let shoppingCartItem: CartItem = this.createCartItem()
      shoppingCartItem.quantity = quantity
      shoppingCartItem.isPackage = isPackage
      shoppingCartItem.product = item
      this.updateCart([...items, shoppingCartItem])
      return;
    }
    else if(itemInCart?.length == 1){
      // remove item from cart
      items = items.filter((_item) => { return _item.product.idProduct !== item.idProduct })
      // create new cartItem
      let shoppingCartItem: CartItem = itemInCart[0]
      shoppingCartItem.quantity = quantity
      shoppingCartItem.isPackage = isPackage

      items.push(shoppingCartItem);
    }
    else if(itemInCart?.length == 2){
      // @ts-ignore
      const currentItem: CartItem = itemInCart.find((_item) => { return item.isPackage === isPackage })
      // remove item from cart
      items = items.filter((_item) => { return _item.product.idProduct !== item.idProduct })
      // create new cartItem
      let shoppingCartItem: CartItem = currentItem
      shoppingCartItem.quantity = quantity
      shoppingCartItem.isPackage = isPackage

      items.push(shoppingCartItem);
    }
    this.updateCart(items)
  }

  updateCart(items: CartItem[]) {
    localStorage.setItem(this.shoppingCartName, JSON.stringify(items))
    console.log("cart updated")
    console.log(this.getItems())
  }
  getItems() { // @ts-ignore
    return JSON.parse(localStorage.getItem(this.shoppingCartName))
  }

  createCartItem() {
    let item = {...this.cartItem}
    item.uid = window.crypto.getRandomValues((new Uint32Array(1))).toString();
    return item
  }

  clearCart(): void { this.updateCart([]) }

  // @ts-ignore
  removeFromCart(id: string, update = true): Array<CartItem> | null {
    let itemInCart = this.getItems().filter((_item: CartItem) => _item.uid === id)
    if(itemInCart?.length == 0){ return null }
    if(itemInCart?.length == 1){
      const items: Array<CartItem> = this.getItems().filter((_item: CartItem) => { return _item.uid !== id })
      this.updateCart(items)
    }
    if(itemInCart?.length == 2){
      // @ts-ignore
      const currentItem: CartItem = itemInCart.find((_item) => { return item.isPackage === isPackage })
      const items: Array<CartItem> = this.getItems().filter((_item: CartItem) => { return _item.uid !== currentItem.uid })
      this.updateCart(items)
    }
    return this.getItems()
  }

  updateItemQuantity(id: string, quantity: number): void {
    let itemInCart = this.getItems().filter((_item: CartItem) => _item.uid === id)
    let items: Array<CartItem> = []
    if(itemInCart?.length == 0){ return }
    if(itemInCart?.length == 1){
      // remove item from cart
      items = this.getItems().filter((_item: CartItem) => { return _item.uid !== id })
      // create new cartItem
      let shoppingCartItem: CartItem = itemInCart[0]
      shoppingCartItem.quantity = quantity
      items.push(shoppingCartItem);
    }
    if(itemInCart?.length == 2){
      // @ts-ignore
      const currentItem: CartItem = itemInCart.find((_item) => { return item.isPackage === isPackage })
      // remove item from cart
      items = this.getItems().filter((_item: CartItem) => { return _item.uid !== id })
      // create new cartItem
      let shoppingCartItem: CartItem = currentItem
      shoppingCartItem.quantity = quantity
      items.push(shoppingCartItem);
    }
    this.updateCart(items)
  }
}
