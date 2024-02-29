import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
goToProfile() {
this.router.navigate(['/userprofile']);}

isUserAdmin(): any {
return this.userService.isUserAdmin()
}
isUserLoggedIn() {
return this.userService.isUserPresent()}

  goToHomePage() {
    this.router.navigate(['/homepage']);
  }

goToSignUp() {
  this.router.navigate(['/signup']);

}
goToLogin() {
  this.router.navigate(['/login']);

}
goToDashbord() {
  this.router.navigate(['']);

}
logoutUser(){

    this.userService.logOutUser().subscribe({
      next:(response:any )=> {


        if(Object.values(response).find((value:any) => value === true)){

          sessionStorage.clear()
          this.router.navigate(['homepage'])
         }

      },
      error:(err) => {

      }
    })
  }

constructor ( private router: Router,private userService:UserService){}

}