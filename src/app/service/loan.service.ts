import { Injectable } from '@angular/core';
import { Loan } from '../model/Loan';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiLink
   = 'http://localhost:8080/createLoan';
  createLoan(loan:Loan): Observable<Object> {
    return this.http.post(`${this.apiLink
    }`, loan);
  }

  constructor(private http:HttpClient) { }
}