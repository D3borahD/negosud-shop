import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../core/services/cart.service";
import {UserService} from "../../core/services/user.service";
import {Cart, CartItem} from "../../core/models/cart.model";
import {Observable} from "rxjs";
import {Product} from "../../core/models/product.model";
import {User} from "../../core/models/user.model";

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
  users$!: Observable<User[]>;
  users: User[] = []



  displayedColumns: Array<string> = [
    'imageUrl',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]




  constructor(private cartService: CartService,
  private userService: UserService) { }
  quantity: number = 0;

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart
      this.dataSource = this.cart.items
    })


   /*this.cart$ = this.shoppingCartService.getShoppingCartById(1);
    this.dataSource = this.cart.items

     this.userService.getAllUser()
      .subscribe(
        data => this.users = data,
      )*/
  }

  getTotal(items: Array<CartItem>): number {
    return items.
    map((item) => item.price * item.quantity)
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
    this.cartService.removeFromCart(item)
  }

  onAddQuantity(item: CartItem):void {
    this.cartService.addToCart(item)
  }

  onRemoveQuantity(item: CartItem) {
    this.cartService.removeToCart(item)
  }
}
