import {Family} from "./family.model";
import {House} from "./house.model";

export class Product {
  idProduct!: number;
  imageUrl!: string;
  nameProduct!: string;
  unitePrice!: number;
  packagePrice!: number;
  year! : string;
  quantity! : number;
 /* needRefill!: boolean;*/
  comment!: string;
 /* cepage!: string;*/
/*  automaticReplenishmentTreshold!: boolean;*/
  familly!: Family;
  house!: House;
}

export interface ISingleProduct {
  data: Product
}
export interface IListroduct {
  data: Product[]
}
