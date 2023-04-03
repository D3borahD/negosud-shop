import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Family} from "../models/family.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  url = 'http://localhost:4200/api/v1/families'
  constructor(private http: HttpClient) {
  }

  getAllFamilies(): Observable<Family[]> {
    return this.http.get<Family[]>(this.url)
  }

  getFamillyById(familyId:number): Observable<Family> {
    return this.http.get<Family>(this.url+'/'+familyId)
  }
}
