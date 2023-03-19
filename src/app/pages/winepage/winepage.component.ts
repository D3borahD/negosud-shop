import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Family} from "../../core/models/family.model";
import {FamilyService} from "../../core/services/family.service";
import {Product} from "../../core/models/product.model";
import {ProductService} from "../../core/services/product.service";
import {CartService} from "../../core/services/cart.service";
import {UserService} from "../../core/services/user.service";
import {User} from "../../core/models/user.model";

const ROWS_HEIGHT: {[id:number]: number} = {1:200, 3:330}

@Component({
  selector: 'app-winepage',
  templateUrl: './winepage.component.html',
  styleUrls: ['./winepage.component.scss']
})
export class WinepageComponent implements OnInit {

  cols = 3
  rowHeight = ROWS_HEIGHT[this.cols]

  families$!: Observable<Family[]>
  family$!: Observable<Family>
  family: string | undefined
  house: string | undefined


  products$!: Observable<Product[]>
  user$!: Observable<User>
  users$!: Observable<User[]>


  constructor(private familyService:FamilyService,
              private productService:ProductService,
              private  cartService:CartService,
              private userService:UserService)
  { }

  ngOnInit(): void {
    this.families$ = this.familyService.getAllFamilies()
    const familyId = 1;
    this.family$ = this.familyService.getFamillyById(familyId)
    this.products$ = this.productService.getAllProducts()
    const userId = 1;
    this.user$ = this.userService.getUserById(userId)
    this.users$ = this.userService.getAllUser()


  }

  onColumnsCountChange(colsNum: number):void {
    this.cols = colsNum
    this.rowHeight = ROWS_HEIGHT[this.cols]
  }

  onShowFamily(newFamily: string): void {
    this.family = newFamily
  }

  onShowHouse(newHouse: string):void {
    this.house = newHouse
  }


  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      imageProduct: product.imageUrl,
      name:product.nameProduct,
      price: product.unitePrice,
      quantity: 1,
      id: product.idProduct
    })
  }
}
