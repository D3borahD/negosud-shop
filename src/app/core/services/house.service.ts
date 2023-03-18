import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Family} from "../models/family.model";
import {Observable} from "rxjs";
import {House} from "../models/house.model";

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  constructor(private http: HttpClient) {
  }

  getAllHouses(): Observable<House[]> {
    return this.http.get<House[]>(`http://localhost:4200/api/v1/houses`)
  }

  getHouseById(houseId:number): Observable<House> {
    return this.http.get<House>(`http://localhost:4200/api/v1/houses/${houseId}`)
  }
}
