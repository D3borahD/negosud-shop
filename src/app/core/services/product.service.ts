import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:4200/api/v1/products'
  constructor(private http: HttpClient) {
  }

  getRefreshProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url)
  }



 getAllProducts(sort = 'desc', family?: string, houses?:string, year?:string): Observable<Product[]> {
    let url = this.url;
   if (family) {
      console.log('Family:', family);
      url+=`${family ? '/familly/'+ family : ''}?sort=${sort}`
    }
    if (houses) {
      console.log('House:', houses);
      url+=`${houses? '/houses/'+ houses : ''}?sort=${sort}`
    }
    if (year) {
      console.log('Years:', year);
      url+=`${year? '/year/'+ year : ''}?sort=${sort}`
    }
    console.log('URL:', url);

    return this.http.get<Product[]>(url);
  }







  getProductById(productId:number): Observable<Product> {
    return this.http.get<Product>(
      this.url+'/'+productId)
  }

}
