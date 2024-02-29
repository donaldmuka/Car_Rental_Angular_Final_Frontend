import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/AppUser';
import { Customer } from 'src/app/model/Customer';
import { Reservation } from 'src/app/model/Reservation';
import { UserInfoDto } from 'src/app/model/UserInfoDto';
import { CustomerService } from 'src/app/service/customer.service';
import { ReservationService } from 'src/app/service/reservation.service';
import { UserService } from 'src/app/service/user.service';
import { UserProfile } from 'src/app/service/userprofile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
isUserAdmin(): any {
return this.userService.isUserAdmin()
}


  id!:number;
  reservationlist: Reservation[]=[];
  user?:User
  principal? :PrincipalProfile
  

  userInfoDto?:UserInfoDto

  addANewCar() {
    this.router.navigate(['createcar']);
  }

  goToMyReservationList() {
    this.router.navigate(['userprofile/reservationlist']);
  }
  
    editUserProfile(){
      this.router.navigate(['userprofile','edituser']);
    }

    constructor(private router:Router, private reservationService: ReservationService, private route: ActivatedRoute,private customerService:CustomerService,private userService:UserService){}
    ngOnInit() {
         this.user = this.userService.getUserFromStorage()??undefined         
    this.getInfoProfile()
      this.reservationService.getAllMyReservations().subscribe(data=>{
        this.reservationlist= data;
      })}
      
      
      getInfoProfile(){

    this.userService.getProfileInfo().subscribe({
      next:(response) => {
        this.principal= response.principal;
        this.user=response.principal;
        console.log("profile response ", this.principal);

      }
    })

  }
  

  ngOnDestroy(){


  }
    
}
interface PrincipalProfile {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  password: string;
  email: string;
  role: UserRole[];
  enabled: boolean;
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
}

interface UserRole {
  id: number;
  role: string;
}