import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/model/Address';
import { AddressService } from 'src/app/service/address.service';

@Component({
  selector: 'app-createaddress',
  templateUrl: './createaddress.component.html',
  styleUrls: ['./createaddress.component.css']
})
export class CreateaddressComponent {
  address: Address = new Address();
  city_id!:number;
  state_id!:number;
  submitted = false;

  constructor(private addressService:AddressService,
    private router: Router) { }

  ngOnInit() {
    // this.addressService.getAllCities()
    //   .subscribe(data => {
    //     console.log(data)
    //     this.cities=data
    //   }, error => console.log(error));

    //   this.addressService.getAllStates()
    //   .subscribe(data => {
    //     console.log(data)
    //     this.states=data
    //   }, error => console.log(error));

  }

  newAddress(): void {
    this.submitted = true;
    this.address = new Address();
  }

  saveAddress() {
    console.log(this.city_id);
    console.log(this.state_id);
this.addressService.createAddress(this.address,this.city_id,this.state_id).subscribe(data => {
      console.log(data)
      this.newAddress()
      this.gotoList();
    }, 
    error => console.log(error));
    
  }
  resetform(){
       //   this.address.city = 
          this.gotoCreate()
}
  gotoCreate() {
     this.submitted=false
     this.router.navigate(['/createaddress']);
  }

  onSubmit() {
    this.submitted = true;
    this.saveAddress();    
  }

  gotoList() {
    this.router.navigate(['/addresslist']);
  }

}