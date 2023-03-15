export interface User {
  firstname: string;
  lastname:string;
  email: string;
  password: string;
}

export interface LoginRequestPayload {
  email: string;
  password: string;
}
export interface Token {
  accessToken: string
}
export interface TokenUser {
  sub: string
  id: number
  email?: string
  iat?: number
  exp?: number
}
