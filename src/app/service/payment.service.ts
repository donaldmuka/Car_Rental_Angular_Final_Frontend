import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  private apiLink
  = 'http://localhost:8080/payment';

  
 payment(payment:PaymentService): Observable<Object> {
   return this.http.post(`${this.apiLink
   }`, payment);
 }

 
}
