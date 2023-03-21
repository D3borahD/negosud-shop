import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../../../../core/models/product.model";
import {ProductService} from "../../../../../core/services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../../../../core/services/cart.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Output() addToCart = new EventEmitter()

  product$!: Observable<Product>;
  quantity: number = 0;
  priceTypeUnit: boolean = true;

  constructor(private productService: ProductService,
              private route:ActivatedRoute,
              private router:Router,
              private cartService: CartService) { }

  ngOnInit(): void {
    const productId = +this.route.snapshot.params['id']
    this.product$ = this.productService.getProductById(productId);
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

  onAddToCart(product: Product):void {

    console.log('THIS PRICE TYPE : ', this.priceTypeUnit)
    this.cartService.addToCart(
      product,
      this.quantity,
      !this.priceTypeUnit)
    console.log()
    this.router.navigateByUrl(`panier`)
  }

}
