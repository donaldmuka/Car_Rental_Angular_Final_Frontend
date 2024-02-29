import { Branch } from "./Branch";
import { Reservation } from "./Reservation";
import { Status } from "./Status";

export class Car {
  id!:number;
  branch!:Branch;
  brand!:number;
  model!:number;
  yearOfManufacture!:number;
  color!:string;
  mileage!:number;
  amountPerDay!:number;
  image!:string;
  statuses!:Status[]
  reservations!:Reservation[]

}