import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';
import { User } from '../model/AppUser';
import { UserInfoDto } from '../model/UserInfoDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  

private apiLink = 'http://localhost:8080/carrental/v1/';

  constructor(private http:HttpClient) { }



  loginUser(userName:string,password:string):Observable<User>{


    let url = this.apiLink + "login"

    let formData = new FormData()
    formData.append('username', userName)
    formData.append('password', password)


    return this.http.post<User>(url, formData)
  }

  createUser(values: any) :Observable<any> {
    
    let url = this.apiLink + "register"


    return this.http.post<User>(url, values)
  }


  saveUserOnStorage(user:User){

    sessionStorage.setItem("user", JSON.stringify(user))
  }

  getUserFromStorage():User | null{
   const userString = sessionStorage.getItem("user");

    if (userString !== null) {
        return JSON.parse(userString);
    } else {
        return null;
    }
}
  isUserPresent(){
    return sessionStorage.getItem('user') !== null
  }

  isUserAdmin(): boolean{


    return this.getUserFromStorage() ? this.getUserFromStorage()?.role === "ROLE_ADMIN":false
  }

  getProfileInfo():Observable<UserInfoDto>{

    let url = this.apiLink + "profile"

    return this.http.get<UserInfoDto>(url)

  } 
  updateUser(newUser:any):Observable<any>{    
    let url = this.apiLink + "edituser"

    return this.http.post<User>(url,newUser)

  }

  logOutUser(){

    let url = this.apiLink + "logout"

    return this.http.post(url,{})

  }

}

