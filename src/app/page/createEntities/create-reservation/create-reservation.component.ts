import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Branch } from 'src/app/model/Branch';
import { Car } from 'src/app/model/Car';
import { Customer } from 'src/app/model/Customer';
import { Department } from 'src/app/model/Department';
import { Loan } from 'src/app/model/Loan';
import { Reservation } from 'src/app/model/Reservation';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent {


  reservation: Reservation = new Reservation();
  submitted = false;

  constructor(private reservationService:ReservationService,
    private router: Router) { }

  ngOnInit() {}

  newReservation(): void {
    this.submitted = true;
    this.reservation = new Reservation();
  }

  saveReservation() {
this.reservationService.createReservation(this.reservation).subscribe(data => {
      console.log(data)
      this.newReservation()
      this.gotoList();
    }, 
    error => console.log(error));
    
  }
//   resetform(){
//           this.reservation.dateofBooking = new Date();
//           this.reservation.client = new Customer();
//           this.reservation.car_id = new Car();
//           this.reservation.date_to = new Date();
//           this.reservation.branch_of_loan = new Branch();
//           this.reservation.return_department_id = new Department();
//           this.reservation.amount = 0;

//           this.gotoCreate()
// }
  gotoCreate() {
     this.submitted=false
     this.router.navigate(['/createreservation']);
  }

  onSubmit() {
    this.submitted = true;
    this.saveReservation();    
  }

  gotoList() {
    this.router.navigate(['/reservationlist']);
  }

}
