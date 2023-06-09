import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../core/models/product.model";
import {ProductService} from "../../../../core/services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {


  @Input() fullWidthMode = false
  @Input() product!: Product

  @Output() addToCart = new EventEmitter();

  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onViewDetailProduct() {
    this.router.navigateByUrl(`vins/${this.product.idProduct}`)
  }

  onAddToCart():void {
    this.addToCart.emit(this.product)
  }
}
