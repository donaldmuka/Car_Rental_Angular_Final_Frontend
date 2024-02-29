import { Employee } from "./Employee";
import { Reservation } from "./Reservation";

export class Loan{
  id!:number;
  employee!:Employee;
  dateOfRental!:Date;
  reservation!:Reservation;
  comment!:string;
}