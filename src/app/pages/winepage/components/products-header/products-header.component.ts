import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss']
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>()
  sort = 'prix décroissants'
  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort
  }

  onColumnsUpdates(colsNum: number):void {
    this.columnsCountChange.emit(colsNum)
  }
}
