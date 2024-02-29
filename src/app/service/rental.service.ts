import { Injectable } from '@angular/core';
import { Rental } from '../model/Rental';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private apiLink
   = 'http://localhost:8080/rental';
   createRental(rental: Rental, owner_id: string,address_id:string): Observable<Object> {
    const params = new HttpParams().set('owner', owner_id).set('address',address_id);
    const options = { params: params };
    return this.http.post(`${this.apiLink}`, rental, options);
  }
  constructor(private http:HttpClient) { }
}
