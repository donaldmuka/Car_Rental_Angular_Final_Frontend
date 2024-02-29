import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { session } from '../model/secssion';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http:HttpClient) { }

  private apiLink
  = 'http://localhost:8080/checkout';
    private confirmapi
  = 'http://localhost:8080/api/confirm-payment1';
  
 checkOut(checkout:CheckoutService): Observable<Object> {
   return this.http.post(`${this.apiLink
   }`, checkout);
 }

 session: session ={
   sessionId: ''
 };

  setSessionid(sessionid:string) {
    this.session.sessionId =sessionid;
  }

  getSearchObject() {
    return this.session;
  }
 confirm(): Observable<any> {
  
   return this.http.get<any>(this.confirmapi);
 }

 

}
