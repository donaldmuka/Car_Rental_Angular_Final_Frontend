import { Owner } from "./Owner";

export class Rental{
  id!:number;
  name!:string;
  internetDomain!:string;
  owner!:Owner;
  logo!:string;
  revenue!:number;
  address!:string;
}