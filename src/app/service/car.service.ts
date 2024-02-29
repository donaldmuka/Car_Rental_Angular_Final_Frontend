import { Injectable } from '@angular/core';
import { Car } from '../model/Car';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchObject } from '../model/SearchObject';
import { CheckOutComponent } from '../page/check-out/check-out.component';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  getFilterCars(searchObject: SearchObject,models:string[]):Observable<any> {
    const params = new HttpParams().set('year', searchObject.year).set('budget',searchObject.budgetValue).set('models', models.join(','));
    const options = { params: params };
    return this.http.get(`${this.apiLink
    }/search`,options);
  }
  getCarsByYear(year: any):Observable<any>{
    return this.http.get(`${this.apiLink
    }/year/${year}`);
  }

  getCarById(id:number):Observable<any> {
    return this.http.get(`${this.apiLink
    }/${id}`);
  }
  getAllCars(): Observable <any>{
    return this.http.get(`${this.apiLink
    }`);
  }
  getAllCarModels(): Observable <any>{
    return this.http.get(`${this.apiLink
    }/models`);
  }
  private apiLink
  = 'http://localhost:8080/car';
   private apiLink2
  = 'http://localhost:8080/createcar';
 createCar(car:Car): Observable<Object> {
   return this.http.post(`${this.apiLink2
   }`, car);
 }

 constructor(private http:HttpClient) { }

}