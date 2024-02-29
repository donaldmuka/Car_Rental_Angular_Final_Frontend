import { Branch } from "./Branch";
import { Car } from "./Car";
import { Customer } from "./Customer";

export class Reservation{
  id!:number;
  dateofBooking!:Date;
  client!:Customer;
  car!:Car;
  dateTo!:Date;
  branchOfLoan!:Branch;
  amount!: number;
}