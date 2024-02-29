import { Injectable } from '@angular/core';
import { Customer } from '../model/Customer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Owner } from '../model/Owner';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  private apiLink
  = 'http://localhost:8080';
  
 validateLoginAsUser(customer:Customer): Observable<Object> {
   return this.http.post(`${this.apiLink
   }/user/login`,customer);
 }
  validateLoginAsManager(owner: Owner) {
    return this.http.post(`${this.apiLink
   }/owner/login`,owner);
  }

}
