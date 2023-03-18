import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../core/services/cart.service";
import {UserService} from "../../core/services/user.service";
import {Cart} from "../../core/models/cart.model";
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
  //dataSource: CartItem[] = []

  @Input() product!: Product
  cart$!: Observable<Cart>;
  users$!: Observable<User[]>;
  users: User[] = []



/*  displayedColumns: Array<string> = [
    'imageUrl',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]*/




  constructor(private shoppingCartService: CartService,
  private userService: UserService) { }

  ngOnInit(): void {
  /*  this.cart$ = this.shoppingCartService.getShoppingCartById(1);
    this.dataSource = this.cart.items*/

     this.userService.getAllUser()
      .subscribe(
        data => this.users = data,
      )
  }

  getTotal(items: Product[]): number {
    return items.
    map((item) => item.unitePrice * item.quantity)
      .reduce((prev, current) => prev + current, 0)
  }
}
