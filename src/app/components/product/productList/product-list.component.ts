import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../../core/services/product.service";
import {Product} from "../../../core/models/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() product!: Product

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onViewDetailProduct() {
    this.router.navigateByUrl('products/${this.product.id}')
  }

}
