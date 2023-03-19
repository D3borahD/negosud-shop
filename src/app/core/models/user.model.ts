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
  role!: string;
  orders?: CustomerOrder;
  shoppingCart?: ShoppingCart | null;
  address?: Address;
}

export interface  ICredentials {
  email: string,
  password: string,
}

export interface IToken {
  token: string,
}

export interface ITokenUser {
  email:string,
  sub: string,
  iat?:number,
  exp?: number,
}
 export interface mail {
   subject: string,
   message: string,
   email: string,
 }

export interface NewUser {
  firstname: string,
  lastname: string,
  email: string,
  password: string,
}
