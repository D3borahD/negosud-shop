import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Family} from "../../core/models/family.model";
import {FamilyService} from "../../core/services/family.service";
import {Product} from "../../core/models/product.model";
import {ProductService} from "../../core/services/product.service";


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

  products$!: Observable<Product[]>

  constructor(private familyService:FamilyService,
              private productService:ProductService)
  { }

  ngOnInit(): void {
    this.families$ = this.familyService.getAllFamilies()
    const familyId = 1;
    this.family$ = this.familyService.getFamillyById(familyId)
    this.products$ = this.productService.getAllProducts()
  }

  onColumnsCountChange(colsNum: number):void {
    this.cols = colsNum
    this.rowHeight = ROWS_HEIGHT[this.cols]
  }

  onShowFamily(newFamily: string): void {
    this.family = newFamily
  }
}
