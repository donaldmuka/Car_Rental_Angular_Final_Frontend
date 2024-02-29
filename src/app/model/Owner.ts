import { Address } from "./Address";

export class Owner{
  id!:number;
  name!:string;
  email:string="";
  password:string="";
  address!:Address;

}