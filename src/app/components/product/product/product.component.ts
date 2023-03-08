import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../../core/models/product.model";
import {ProductService} from "../../../core/services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product$!: Observable<Product>;
  quantity: number = 0;


  constructor(private productService: ProductService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    const productId = +this.route.snapshot.params['id']
    this.product$ = this.productService.getProductById(productId)
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
}
