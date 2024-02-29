import { Employee } from "./Employee";
import { Reservation } from "./Reservation";

export class Refund{
  id!:number;
  employee!:Employee;
  dateOfReturn!:Date;
  reservation!:Reservation;
  subcharge!:number;
  comment!:string;
}