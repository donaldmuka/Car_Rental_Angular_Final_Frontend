import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Customer } from '../model/Customer';
import { CustomerService } from '../service/customer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/AppUser';
import { UserService } from '../service/user.service';
import { UserProfileComponent } from '../page/user-profile/user-profile.component';
import { LoginComponent } from '../page/login/login.component';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit{
  constructor(private userService:UserService, private router:Router,private userProfile:UserProfileComponent,private Logincomp:LoginComponent){

  }
  user?:User;
    principal? :PrincipalProfile


  editUserForm!: FormGroup;


  goBackToUserProfile(values:any){

    
    this.userService.updateUser(values).subscribe({
      next:(response) => {
          this.principal=response
          this.Logincomp.loginUser(values);
        this.router.navigate(['userprofile'])
          setTimeout(() => {
    this.userProfile.ngOnInit();
  }, 500); 

      },
      error:(err) => {
        console.log("error ", err);

      }
    })

  }

      ngOnInit(): void {
   this.initeditForm()
this.user = this.userService.getUserFromStorage()??undefined
   this.userService.getProfileInfo().subscribe({
      next:(response) => {
        this.principal= response.principal;
        this.editUserForm.get('email')?.setValue(this.principal?.email);
        this.editUserForm.get('firstname')?.setValue(this.principal?.firstname);
        this.editUserForm.get('username')?.setValue(this.principal?.username);
        this.editUserForm.get('lastname')?.setValue(this.principal?.lastname);
        this.editUserForm.get('password')?.setValue("");
        this.editUserForm.get('id')?.setValue(this.principal?.id);
      
      }});
      




      }


      
  initeditForm() {

    this.editUserForm = new FormGroup({
      id:new FormControl("",{validators:[Validators.required]}),
      username:new FormControl("",{validators:[Validators.required]}),
      firstname:new FormControl("",{validators:[Validators.required]}),
      lastname:new FormControl("",{validators:[Validators.required]}),
      email:new FormControl("",{validators:[Validators.required]}),
      password:new FormControl("",{validators:[Validators.required]})
    })

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