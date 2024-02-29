import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/AppUser';

@Injectable({
  providedIn: 'root'
})
export class TestService {
     private loginUrl = 'http://localhost:8080/biddingapp/v1/login';

     constructor(private http: HttpClient) {}

     login(credentials: any): Observable<any> {
       return this.http.post(this.loginUrl, credentials);
     }
   }
