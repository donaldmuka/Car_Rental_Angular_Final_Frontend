import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Refund } from '../model/Refund';

@Injectable({
  providedIn: 'root'
})
export class RefundService {
  private apiLink
   = 'http://localhost:8080/createRefund';
  createRefund(refund:Refund): Observable<Object> {
    return this.http.post(`${this.apiLink
    }`, refund);
  }

  constructor(private http:HttpClient) { }
}