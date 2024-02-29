import { Injectable } from '@angular/core';
import { Department } from '../model/Department';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiLink
  = 'http://localhost:8080/createDepartment';
 createDepartment(department:Department): Observable<Object> {
   return this.http.post(`${this.apiLink
   }`, department);
 }

 constructor(private http:HttpClient) { }
}