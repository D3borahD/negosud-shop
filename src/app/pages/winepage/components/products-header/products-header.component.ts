import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss']
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>()
  @Output() sortChange = new EventEmitter<string>()

 /* @Output() refresh = new EventEmitter<boolean>()*/
  sort = 'desc'
  refresh = true

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onColumnsUpdates(colsNum: number):void {
    this.columnsCountChange.emit(colsNum)
  }

  onSortUpdated(newSort: string): void {
    this.sortChange.emit(newSort)
    this.sort = newSort
  }

  resetFilter(): void {
    // Naviguer vers la même URL sans paramètre de filtre

  }

}
