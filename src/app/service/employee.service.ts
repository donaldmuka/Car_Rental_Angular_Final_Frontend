import { Injectable } from '@angular/core';
import { Employee } from '../model/Employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiLink
   = 'http://localhost:8080/createEmployee';
  createEmployee(employee:Employee): Observable<Object> {
    return this.http.post(`${this.apiLink
    }`, employee);
  }

  constructor(private http:HttpClient) { }
}