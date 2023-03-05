import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Family} from "../models/family.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  constructor(private http: HttpClient) {
  }

  getAllFamilies(): Observable<Family[]> {
    return this.http.get<Family[]>(`http://localhost:9000/api/v1/families`)
  }

  getFamillyById(familyId:number): Observable<Family> {
    return this.http.get<Family>(`http://localhost:9000/api/v1/families/${familyId}`)
  }
}
