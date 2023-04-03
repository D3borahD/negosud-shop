import {Component,  OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FamilyService} from "../../core/services/family.service";
import {Product} from "../../core/models/product.model";
import {ProductService} from "../../core/services/product.service";
import {CartService} from "../../core/services/cart.service";

const ROWS_HEIGHT: {[id:number]: number} = {1:200, 3:330}

@Component({
  selector: 'app-winepage',
  templateUrl: './winepage.component.html',
  styleUrls: ['./winepage.component.scss']
})
export class WinepageComponent implements OnInit, OnDestroy {

  cols = 3
  rowHeight = ROWS_HEIGHT[this.cols]
  products: Product[] | undefined
  sort= 'desc'

  family: string | undefined
  house: string | undefined
  year: string | undefined
  productsSubscription: Subscription | undefined

  constructor(
    private familyService:FamilyService,
    private productService:ProductService,
    private  cartService:CartService,

  )
  { }

  ngOnInit(): void {
    this.getProducts()
  }

  onColumnsCountChange(colsNum: number):void {
    this.cols = colsNum
    this.rowHeight = ROWS_HEIGHT[this.cols]
  }
  onSortChange(newSort: string):void {
    this.sort = newSort
    this.getProducts()
  }

  onShowFamily(newFamily: string): void {
    this.family = newFamily
    this.getProducts()
  }

  onShowHouse(newHouse: string):void {
    this.house = newHouse
    console.log(this.house)
    this.getProducts()
  }

  onShowYear(newYear: string):void {
    this.year = newYear
    console.log(this.year)
    this.getProducts()
  }

  getProducts(): void {
    this.productsSubscription = this.productService
      .getAllProducts(this.sort, this.family, this.house, this.year)
      .subscribe((_products) => {
        this.products = _products;
      });
  }


  reload($event: any) {
    this.productService.getRefreshProducts()
  }

  onAddToCart(product: Product): void {
    console.log("produit : ", product)
    this.cartService.addToCart(
      product,
      1,
      false)
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }



}

