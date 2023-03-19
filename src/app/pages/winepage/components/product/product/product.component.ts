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

/*  onAddToCart(): void {
    this.cartService.addToCart({
      imageProduct: this.product$.,
      name:product.nameProduct,
      price: product.unitePrice,
      quantity: 1,
      id: product.idProduct
    })
  }*/

  onAddToCart():void {
    console.log("je suis un o : ", this.product$)
    this.addToCart.emit(this.product$)
    /*this.product$
      .subscribe(data => {
      console.log(data , "je suis le produit !!!")
        this.cartService.addToCart({
          imageProduct: this.product$.value,
          name:product.nameProduct,
          price: product.unitePrice,
          quantity: 1,
          id: product.idProduct
        })


    })*/
  }


}
