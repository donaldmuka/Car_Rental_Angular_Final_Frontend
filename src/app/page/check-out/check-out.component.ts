import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/app/environment';
import { Car } from 'src/app/model/Car';
import { CarService } from 'src/app/service/car.service';
import { CheckoutService } from 'src/app/service/checkout.service';
import { loadStripe } from '@stripe/stripe-js';
import { UserService } from 'src/app/service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/AppUser';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
isPresent(): any {
  if(this.userService.isUserPresent()){
return true;
  }else{
    return false;
  }
  
}
checkoutForm!:FormGroup;
  principal? :PrincipalProfile
  sessId?:string
  user?:User;
  stripePromise =loadStripe(environment.stripe);
  id!:number;
  clientSecret: string = "";
  car!:Car;
  stripe: any;
  card: any;
  days:number=1;
   

  constructor (private http:HttpClient, private checkoutService:CheckoutService, private router: Router,private route:ActivatedRoute,private carService:CarService,private userService:UserService){}
  ngOnInit(): void {
    this.user = this.userService.getUserFromStorage()??undefined  
    this.id= this.route.snapshot.params['id'];
    this.carService.getCarById(this.id).subscribe(data=>{
      this.car=data;
      console.log(this.car);
      
    })
      this.initcheckoutForm()
      if(this.isPresent()){
this.user = this.userService.getUserFromStorage()??undefined
   this.userService.getProfileInfo().subscribe({
      next:(response) => {
        this.principal= response.principal;
        this.checkoutForm.get('email')?.setValue(this.principal?.email);
      }});   
      }
  }

 initPaymentObject(total:number) {
  // this.payment.amount=total;
  // this.payment.name="Rental of "+this.car.brand+" - "+this.days+' Days';
  // this.payment.customer_email=this.checkoutForm.controls["email"].value;
}

   initcheckoutForm() {

    this.checkoutForm = new FormGroup({
      email:new FormControl("",{validators:[Validators.required]}),
    })

  }
  async goToPayment(total:number): Promise<void> {
    const payment = {
      name: this.car.model,
      currency: 'usd',
      amount: this.car.amountPerDay*this.days*100,
      quantity: '2',
      // client_reference_id:0,
      // description:'Test Payment',
      customer_email:this.checkoutForm.controls['email'].value,
    };
   


  this.http
  .post(`${environment.serverUrl}`, payment)
  .subscribe(async (data: any) => {
    const stripe = await this.stripePromise;
    if (stripe) {
      stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });
    }else{
      console.log("test")
    }
  });
  }

async createPaymentIntent() {
  
  // Make a request to your backend to create a PaymentIntent
  const response = await this.http.post<string>('http://localhost:8080/api/create-payment-intent1', {}).subscribe(data=>{this.clientSecret=data});
  this.goToPayment(12345);


}

async onSubmit() {
  // this.initPaymentObject(total)
  await this.createPaymentIntent();


    // Create PaymentIntent and confirm the payment
    
    // this.http.post('/api/payment/confirm-payment', { clientSecret: this.clientSecret }).subscribe(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.error(error);
    //   }
    // );
}




}

interface PrincipalProfile {
  id: number;
  username: string;
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




