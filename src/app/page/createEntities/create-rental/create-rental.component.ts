import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/model/Address';
import { Owner } from 'src/app/model/Owner';
import { Rental } from 'src/app/model/Rental';
import { RentalService } from 'src/app/service/rental.service';

@Component({
  selector: 'app-create-rental',
  templateUrl: './create-rental.component.html',
  styleUrls: ['./create-rental.component.css']
})
export class CreateRentalComponent {

  owner_id!: string;
  address_id!: string;

  rental: Rental = new Rental();
  submitted = false;

  constructor(private rentalService:RentalService,
    private router: Router) { }

  ngOnInit() {}

  newRental(): void {
    this.submitted = true;
    this.rental = new Rental();
  }

  saveRental() {
this.rentalService.createRental(this.rental, this.owner_id,this.address_id).subscribe(data => {
      console.log(data)
      this.newRental()
      this.gotoList();
    }, 
    error => console.log(error));
    
  }
//   resetform(){
//           this.rental.name = '';
//           this.rental.internet_domain =  '';
//           this.rental.contact_address = new Address;
//           this.rental.owner_id = 0;
//           this.rental.logo = '';
//           this.rental.revenue = 0;

//           this.gotoCreate()
// }
  gotoCreate() {
     this.submitted=false
     this.router.navigate(['/createrenatl']);
  }

  onSubmit() {
    this.submitted = true;
    this.saveRental();    
  }

  gotoList() {
    this.router.navigate(['/rentallist']);
  }

}
