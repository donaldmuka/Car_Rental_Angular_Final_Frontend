import { Injectable } from '@angular/core';
import { Address } from '../model/Address';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  getAllAddress(): Observable<any> {
    return this.http.get(`${this.apiLink
    }`);}


  getAllCities(): Observable<any> {
    return this.http.get(`${this.apicity
    }`);}

  getAllStates() : Observable<any> {
    return this.http.get(`${this.apistate
    }`);}
  private apiLink
  = 'http://localhost:8080/address';
  private apicity
  = 'http://localhost:8080/city';
  private apistate
  = 'http://localhost:8080/state';
  createAddress(address: Address, city_id: number, state_id: number): Observable<Object> {
    const params = new HttpParams().set('city_id', city_id).set('state_id',state_id);
    const options = { params: params };
    return this.http.post(`${this.apiLink}`, address, options);
  }

 constructor(private http:HttpClient) { }
}