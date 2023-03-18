class Address{
  idAddress!: number
  type!: string;
  number!: string;
  streetName!: string;
  zip!: string;
  city!: string;
  additional!: string;
}

class ShoppingCart {
}

class CustomerOrder {
}

export class User {
  idUser!: number;
  firstName!: string;
  lastname!:string;
  email!: string;
  password!: string;
  Role!: string;
  Orders?: CustomerOrder;
  ShoppingCart?: ShoppingCart;
  Address?: Address;
}

export interface  ICredentials {
  email: string,
  password: string,
}

export interface IToken {
  token: string,
}
 export interface mail {
   subject: string,
   message: string,
   email: string,
 }

