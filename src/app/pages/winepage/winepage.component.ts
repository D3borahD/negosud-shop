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
  productsSubscription: Subscription | undefined

  /*families$!: Observable<Family[]>
  family$!: Observable<Family>*/

/*  products$!: Observable<Product[]>
  user$!: Observable<User>
  users$!: Observable<User[]>*/


  constructor(
    private familyService:FamilyService,
    private productService:ProductService,
    private  cartService:CartService,
           /*   private userService:UserService*/
  )
  { }

  ngOnInit(): void {
    this.getProducts()
   /* this.families$ = this.familyService.getAllFamilies()
    const familyId = 1;
    this.family$ = this.familyService.getFamillyById(familyId)
    this.products$ = this.productService.getAllProducts()*/
   /* const userId = 1;
    this.user$ = this.userService.getUserById(userId)
    this.users$ = this.userService.getAllUser()*/


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
  }
  getProducts(): void {
    this.productsSubscription = this.productService
      .getAllProducts(this.sort, this.family)
      .subscribe((_products) => {
        this.products = _products;
      });
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

