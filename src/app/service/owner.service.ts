import { Injectable } from '@angular/core';
import { Owner } from '../model/Owner';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private apiLink
   = 'http://localhost:8080/owner';
   createOwner(owner: Owner, address_id: string): Observable<Object> {
    const params = new HttpParams().set('address', address_id);
    const options = { params: params };
    console.log(owner);
    
    return this.http.post(`${this.apiLink}`, owner, options);
  }

  constructor(private http:HttpClient) { }
}
