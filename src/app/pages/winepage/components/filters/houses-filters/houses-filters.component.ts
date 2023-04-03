import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {House} from "../../../../../core/models/house.model";

import {HouseService} from "../../../../../core/services/house.service";

@Component({
  selector: 'app-houses-filters',
  templateUrl: './houses-filters.component.html',
  styleUrls: ['./houses-filters.component.scss']
})
export class HousesFiltersComponent implements OnInit {
  @Output() showHouse = new EventEmitter<string>()
  houses$!: Observable<House[]>

  constructor(private houseService:HouseService,) { }

  ngOnInit(): void {
    this.houses$ = this.houseService.getAllHouses()
  }

  onShowHouse(house: string): void {
    this.showHouse.emit(house)
  }

}
