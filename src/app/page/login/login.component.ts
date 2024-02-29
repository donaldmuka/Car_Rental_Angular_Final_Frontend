import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/AppUser';
import { Customer } from 'src/app/model/Customer';
import { Owner } from 'src/app/model/Owner';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id!:number;
  user?:User;

loginForm!: FormGroup;


constructor (private loginService:LoginService, private router: Router,private userService:UserService){}
  ngOnInit(): void {
    this.initLoginForm()
  }

  initLoginForm() {

    this.loginForm = new FormGroup({
      username:new FormControl("",{validators:[Validators.required]}),
      password:new FormControl("",{validators:[Validators.required]})
    })

  }

  loginUser(values:any){

    this.userService.loginUser(values.username,values.password).subscribe({
      next:(response) => {

        this.user = response

        this.userService.saveUserOnStorage(this.user)

        this.router.navigate(['userprofile'])

      },
      error:(err) => {
        console.log("error ", err);

      }
    })
  }

goToForgetPassword() {
  this.router.navigate(['/forgotpassword']);
}
goToSignUp() {
  this.router.navigate(['/signup']);
}
onSubmit() {


}

}
