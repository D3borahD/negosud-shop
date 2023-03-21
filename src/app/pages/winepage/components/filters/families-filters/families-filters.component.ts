import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {Family} from "../../../../../core/models/family.model";
import {FamilyService} from "../../../../../core/services/family.service";

@Component({
  selector: 'app-families-filters',
  templateUrl: './families-filters.component.html',
  styleUrls: ['./families-filters.component.scss']
})
export class FamiliesFiltersComponent implements OnInit {
  @Output() showFamily = new EventEmitter<string>()
  families$!: Observable<Family[]>

  constructor(private familyService:FamilyService,)
  { }

  ngOnInit(): void {
    this.families$ = this.familyService.getAllFamilies()

  }

  onShowFamily(family: string): void {
    this.showFamily.emit(family)
  }
}
