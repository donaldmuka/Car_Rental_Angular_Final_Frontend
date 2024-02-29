import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee';
import { Refund } from 'src/app/model/Refund';
import { Reservation } from 'src/app/model/Reservation';
import { RefundService } from 'src/app/service/refund.service';

@Component({
  selector: 'app-create-refund',
  templateUrl: './create-refund.component.html',
  styleUrls: ['./create-refund.component.css']
})
export class CreateRefundComponent {
  refund: Refund = new Refund();
  submitted = false;

  constructor(private refundService:RefundService,
    private router: Router) { }

  ngOnInit() {}

  newRefund(): void {
    this.submitted = true;
    this.refund = new Refund();
  }

  saveRefund() {
this.refundService.createRefund(this.refund).subscribe(data => {
      console.log(data)
      this.newRefund()
      this.gotoList();
    }, 
    error => console.log(error));
    
  }
  resetform(){
          this.refund.employee = new Employee();
          this.refund.dateOfReturn = new Date ();
          this.refund.reservation = new Reservation();
          this.refund.comment = '';
          this.refund.subcharge = 0;
          this.gotoCreate()
}
  gotoCreate() {
     this.submitted=false
     this.router.navigate(['/createrefund']);
  }

  onSubmit() {
    this.submitted = true;
    this.saveRefund();    
  }

  gotoList() {
    this.router.navigate(['/refundlist']);
  }

}
