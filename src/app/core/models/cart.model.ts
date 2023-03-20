import {Product} from "./product.model";

export interface Cart {
  items: Array<CartItem>
}

export interface CartItem {
  uid: string
  product: Product
  quantity: number
  isPackage: boolean

}



