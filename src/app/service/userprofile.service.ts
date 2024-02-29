import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfile {
  private apiLink
   = 'http://localhost:8080/userprofile';
  createUserProfile(userprofile:UserProfile): Observable<Object> {
    return this.http.post(`${this.apiLink
    }`, userprofile);
  }

  constructor(private http:HttpClient) { }
}