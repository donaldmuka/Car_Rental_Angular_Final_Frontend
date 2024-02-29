import { Injectable } from '@angular/core';
import { Reservation } from '../model/Reservation';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  deleteReservation(reservation_id: number): Observable<any> {
    return this.http.delete(`${this.apiLink
    }/${reservation_id}`);
    
  }
  getAllMyReservations() : Observable <any>{
    
    return this.http.get(`${this.apiLink
    }`);
  }
  private apiLink
   = 'http://localhost:8080/carrental/v1/reservation';
  createReservation(reservation:Reservation): Observable<Object> {
    return this.http.post(`${this.apiLink
    }`, reservation);
  }

  constructor(private http:HttpClient) { }
}