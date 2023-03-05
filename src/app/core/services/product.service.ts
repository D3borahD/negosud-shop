import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Family} from "../models/family.model";
import {Observable} from "rxjs";
import {House} from "../models/house.model";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:9000/api/v1/products`)
  }

  getProductById(productId:number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:9000/api/v1/products/${productId}`)
  }

}
