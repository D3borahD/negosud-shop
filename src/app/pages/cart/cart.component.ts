import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../core/services/cart.service";
import {UserService} from "../../core/services/user.service";
import {Cart, CartItem} from "../../core/models/cart.model";
import {Observable} from "rxjs";
import {Product} from "../../core/models/product.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart!: Cart
  dataSource: CartItem[] = []

  @Input() product!: Product
  cart$!: Observable<Cart>;


  displayedColumns: Array<string> = [
    'imageUrl',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]


  constructor(private cartService: CartService,) { }

  quantity: number = 0;


  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart
      this.dataSource = this.cartService.getItems()
    })

    console.log(this.dataSource, "DATASOURCE")

  }

  getTotal(items: Array<CartItem>): number {
    return items.
    map((item) => item.product.unitePrice * item.quantity)
      .reduce((prev, current) => prev + current, 0)
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

  onClearCart(): void {
    this.cartService.clearCart()
  }

  onRemoveFromCart(item: CartItem): void {
    let id = item.uid
    this.cartService.removeFromCart(id, true)
  }

  onAddQuantity(item: Product):void {
    this.cartService.addToCart(item, 2, true)
  }

  onRemoveQuantity(item: CartItem) {
    let id = item.uid
    this.cartService.updateItemQuantity(id, 1)
  }
}
