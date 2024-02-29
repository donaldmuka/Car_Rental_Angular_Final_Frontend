import { Address } from "./Address";
import { Car } from "./Car";
import { Department } from "./Department";
import { Employee } from "./Employee";
import { Rental } from "./Rental";

export class Branch{
  id!:number;
  name!:string;
  rental!:Rental;
  address_id!:Address;
  employees!:Employee[];
  cars!:Car[];
  address!:string;
  departments!:Department[];

}