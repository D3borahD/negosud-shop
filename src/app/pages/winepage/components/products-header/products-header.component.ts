import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss']
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>()
  @Output() sortChange = new EventEmitter<string>()
  sort = 'desc'


  constructor() { }

  ngOnInit(): void {
  }

  onColumnsUpdates(colsNum: number):void {
    this.columnsCountChange.emit(colsNum)
  }

  onSortUpdated(newSort: string): void {
    this.sortChange.emit(newSort)
    this.sort = newSort
  }


}
