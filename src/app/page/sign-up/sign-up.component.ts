import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Address } from 'src/app/model/Address';
import { User } from 'src/app/model/AppUser';
import { Customer } from 'src/app/model/Customer';
import { Owner } from 'src/app/model/Owner';
import { CustomerService } from 'src/app/service/customer.service';
import { OwnerService } from 'src/app/service/owner.service';
import { UserService } from 'src/app/service/user.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user?:User
  signupForm!: FormGroup;

  goToLogin(){
    this.router.navigate(['/login']);
  
  }

  constructor (private router:Router,private userService:UserService, private logincomp:LoginComponent){}


  initSignUpForm() {

    this.signupForm = new FormGroup({
      username:new FormControl("",{validators:[Validators.required]}),
            firstname:new FormControl("",{validators:[Validators.required]}),
                  lastname:new FormControl("",{validators:[Validators.required]}),
                        email:new FormControl("",{validators:[Validators.required]}),
      password:new FormControl("",{validators:[Validators.required]})
    })

  }


goToUserProfile(id:number) {
  this.router.navigate(['/userprofile',id]);
}


ngOnInit() {
  this.initSignUpForm()
}

saveCustomer(values:any) {
this.userService.createUser(values).subscribe(data => {
    this.user= data
    this.logincomp.loginUser(values)
  }, 
  error => console.log(error));
  
}


}