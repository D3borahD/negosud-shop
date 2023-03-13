import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../core/services/cart.service";
import {Cart} from "../../core/models/cart.model";
import {Observable} from "rxjs";
import {Product} from "../../core/models/product.model";

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

  displayedColumns: Array<string> = [
    'imageUrl',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]


  constructor(private shoppingCartService: CartService) { }

  ngOnInit(): void {
  /*  this.cart$ = this.shoppingCartService.getShoppingCartById(1);
    this.dataSource = this.cart.items*/

  }

  getTotal(items: Product[]): number {
    return items.
    map((item) => item.unitePrice * item.quantity)
      .reduce((prev, current) => prev + current, 0)
  }
}
