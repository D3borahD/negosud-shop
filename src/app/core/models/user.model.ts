export class User {
  firstname!: string;
  lastname!:string;
  email!: string;
  password!: string;
}

export interface  ICredentials {
  email: string,
  password: string,
}

export interface IToken {
  token: string,
}
