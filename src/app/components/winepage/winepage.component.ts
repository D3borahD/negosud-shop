import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Family} from "../../core/models/family.model";
import {FamilyService} from "../../core/services/family.service";
import {Product} from "../../core/models/product.model";
import {ProductService} from "../../core/services/product.service";

@Component({
  selector: 'app-winepage',
  templateUrl: './winepage.component.html',
  styleUrls: ['./winepage.component.scss']
})
export class WinepageComponent implements OnInit {

  families$!: Observable<Family[]>
  family$!: Observable<Family>
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
}
