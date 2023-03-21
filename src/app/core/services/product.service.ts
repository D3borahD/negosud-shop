import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product.model";
import {Family} from "../models/family.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:4200/api/v1/products'
  constructor(private http: HttpClient) {
  }

 /* getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url)
  }*/




  getAllProducts(
    sort = 'desc',
    family?:string
  ): Observable<Product[]> {
    return this.http.get<Product[]>(
        this.url+`${
        family ? '/familly/'+ family : ''
        }?sort=${sort}`
    )
  }

 /* @GetMapping("/products/familly/{nameFamilly}")*/

  getProductByFamilly(): Observable<Family[]>{
    return this.http.get<Family[]>(
      this.url+`/familly`
    )
  }


  getProductById(productId:number): Observable<Product> {
    return this.http.get<Product>(
      this.url+'/'+productId)
  }

}
