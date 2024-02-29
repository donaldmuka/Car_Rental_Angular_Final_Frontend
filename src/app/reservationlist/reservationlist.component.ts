import { Component, Input } from '@angular/core';
import { Reservation } from '../model/Reservation';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../service/reservation.service';

@Component({
  selector: 'app-reservationlist',
  templateUrl: './reservationlist.component.html',
  styleUrls: ['./reservationlist.component.css']
})
export class ReservationlistComponent {
bookAgain(id: number) {
this.router.navigate(['/checkout',id]);

}
  


onDelete(reservation_id: number) {
  this.ReservationService.deleteReservation(reservation_id)
}
  input: string = " ";
  reservationList!: Reservation[];
  reservation!:Reservation;
     sortKey: string="null";
     sortOrder: string="null";

    
   constructor(private route: ActivatedRoute,private router: Router,private ReservationService: ReservationService) { }
  
   ngOnInit(): void {
    
    this.reloadData();
  
   }
  
    
  
   reloadData() {
    this.ReservationService.getAllMyReservations().subscribe(data=>{
      this.reservationList=data;
      console.log(this.reservationList);
    })}
  
  //   onDelete(id: number) {
  //       this.foodService.deleteFood(id)
  //       .subscribe(
  //         data => {
  //           console.log(data);
  //           this.reloadData();
  //         },
  //         error => console.log(error));
  // }
    gotoList() {
      this.router.navigate(['/reservationlist/{{id}}']);
    }
    gotoCreate() {
      this.router.navigate(['/createreservation']);
  }
  
  //    addressDetails(id: number){
  //     this.router.navigate(['details', id]);
  //   }
  
  //  editFood(foodId: number) {
  //     this.router.navigate(['updateFood', foodId]);
      
  // }

  
  onSearch(event: Event) {
   const searchForm = (event.target as HTMLInputElement).value;
   console.log(searchForm);
  }
  }
  