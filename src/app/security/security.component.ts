import { Component } from '@angular/core';
import { Owner } from '../model/Owner';
import { Customer } from '../model/Customer';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { TestService } from '../service/test.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {
 constructor(private loginService: TestService) {}

     onSubmit(credentials: any): void {
       this.loginService.login(credentials).subscribe(
         (response) => {
           // Handle successful login response
           console.log('Login successful', response);
         },
         (error) => {
           // Handle login error
           console.error('Login failed', error);
         }
       );
     }
   }
