import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from "../../../../../core/services/product.service";
import {distinctUntilChanged, map, Observable, Subscription} from "rxjs";
import {Product} from "../../../../../core/models/product.model";
import {Family} from "../../../../../core/models/family.model";

@Component({
  selector: 'app-years-filters',
  templateUrl: './years-filters.component.html',
  styleUrls: ['./years-filters.component.scss']
})
export class YearsFiltersComponent implements OnInit {

  @Output() showYear = new EventEmitter<string>()
  year$!: Observable<string[]>

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  this.year$ = this.productService.getAllProducts().pipe(
    map(products => products.map(product => product.year)),
    map(years => [...new Set(years)]), // Supprimer les doublons
    map(years => years.sort((a, b) => a.localeCompare(b))),
    distinctUntilChanged()
    );
  }

  onShowYear(year: string): void{
    this.showYear.emit(year)
  }


}
