import { Injectable } from '@angular/core';
import { Branch } from '../model/Branch';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

 
    private apiLink
   = 'http://localhost:8080/createBranch';

  

  constructor(private http:HttpClient) { }
    getBranch(): Observable<any> {
    return this.http.get(`${this.apiLink
    }`);
  }

  getBranchById(id:number):Observable<any>{
    return this.http.get(`${this.apiLink}/${id}`);
  }
   updateBranch(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.apiLink}/${id}`, value);
  }
    deleteBranch(id: number): Observable<any> {
    return this.http.delete(`${this.apiLink}/${id}`, { responseType: 'text' });
  }

   createBranch(branch:Branch): Observable<Object> {
    return this.http.post(`${this.apiLink
    }`, branch);
  }

}
