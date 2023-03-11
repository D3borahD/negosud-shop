import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../core/services/shopping-cart.service";
import {ShoppingCart} from "../../core/models/shopping-cart.model";
import {Observable} from "rxjs";
import {Product} from "../../core/models/product.model";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  @Input() product!: Product
  shoppingCart$!: Observable<ShoppingCart>;




  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCart$ = this.shoppingCartService.getShoppingCartById(1);



  }

}
