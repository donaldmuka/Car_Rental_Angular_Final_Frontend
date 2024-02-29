import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/model/Address';
import { Customer } from 'src/app/model/Customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {

  customer: Customer = new Customer();
  submitted = false;

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {}

  newCustomer(): void {
    this.submitted = true;
    this.customer = new Customer();
  }

  saveCustomer() {
this.customerService.createCustomer(this.customer).subscribe(data => {
      console.log(data)
      this.newCustomer()
      this.gotoList();
    }, 
    error => console.log(error));
    
  }
  resetform(){
          this.customer.firstName = '';
          this.customer.email = '';
          this.customer.address = "";
          this.gotoCreate()
}
  gotoCreate() {
     this.submitted=false
     this.router.navigate(['/createcustomer']);
  }

  onSubmit() {
    this.submitted = true;
    this.saveCustomer();    
  }

  gotoList() {
    this.router.navigate(['/customerlist']);
  }

}