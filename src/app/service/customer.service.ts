import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getCustomerDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiLink
    }/${id}`);

  }
  private apiLink
  = 'http://localhost:8080/costumer';
 createCustomer(customer:Customer): Observable<Object> {
   return this.http.post(`${this.apiLink
   }`,customer);
 }

 constructor(private http:HttpClient) { }
}