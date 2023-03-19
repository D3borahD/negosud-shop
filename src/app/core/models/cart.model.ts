export interface Cart {
  items: Array<CartItem>
}

export interface CartItem {
  imageProduct:string;
  name: string;
  price: number;
  quantity: number;
  id:number;

}



