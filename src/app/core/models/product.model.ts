import {Family} from "./family.model";
import {House} from "./house.model";

export class Product {
  idProduct!: number;
  nameProduct!: string;
  unitePrice!: number;
  packagePrice!: number;
  year! : string;
  quantity! : string;
  needRefill!: boolean;
  comment!: string;
  cepage!: string;
  automaticReplenishmentTreshold!: boolean;
  familly!: Family;
  house!: House;
}

