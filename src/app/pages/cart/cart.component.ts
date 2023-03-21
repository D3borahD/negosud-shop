import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../core/services/cart.service";
import {Cart, CartItem} from "../../core/models/cart.model";
import {Product} from "../../core/models/product.model";
import {Address} from "../../core/models/user.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart!: Cart
  dataSource: CartItem[] = []

  @Input() product!: Product
 /* cart$!: Observable<Cart>;*/


/*  displayedColumns: Array<string> = [
    'imageUrl',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]*/

  constructor(private cartService: CartService,) { }

  quantity: number = 0;
  form: Address = {
    idAddress:-1,
    firstname: '',
    lastname: '',
    type:'',
    number: '',
    streetName: '',
    zip: '',
    city: '',
    additional: '',
  }


  ngOnInit(): void {
    this.loadCart()
    console.log(this.dataSource, "DATASOURCE")

  }

  getTotal(): number {
    let total = 0
    const _items: Array<CartItem> = this.cartService.getItems()
    _items.forEach((item) => {
      let quantity = item.quantity
      let price = item.isPackage ? item.product.packagePrice : item.product.unitePrice
      total += price * quantity
    })
    return total
  }

  removeProduct() {
    if(this.quantity === 0) {
      this.quantity = 0;
    } else {
      this.quantity--;
    }
  }

  addProduct() {
    this.quantity++;
  }

  loadCart() {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart
      this.dataSource = this.cartService.getItems()
    })
  }

  onClearCart(): void {
    this.cartService.clearCart()
    this.loadCart()
  }


  onRemoveFromCart(item: CartItem): void {
    let id = item.uid
    this.cartService.removeFromCart(id, true)
    this.loadCart()
  }

  onAddQuantity(item: Product):void {

    this.cartService.addToCart(item, this.quantity, true)
    this.loadCart()
  }

  onRemoveQuantity(item: CartItem) {
    let id = item.uid
    this.cartService.updateItemQuantity(id, 1)
  }

  onSubmit() {
    return false;
  }
}




