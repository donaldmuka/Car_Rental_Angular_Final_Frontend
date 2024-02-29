import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/Employee';
import { Loan } from 'src/app/model/Loan';
import { Reservation } from 'src/app/model/Reservation';
import { LoanService } from 'src/app/service/loan.service';

@Component({
  selector: 'app-create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.css']
})
export class CreateLoanComponent {
  loan: Loan = new Loan();
  submitted = false;

  constructor(private loanService:LoanService,
    private router: Router) { }

  ngOnInit() {}

  newLoan(): void {
    this.submitted = true;
    this.loan = new Loan();
  }

  saveLoan() {
    this.loanService.createLoan(this.loan).subscribe(data => {
      console.log(data)
      this.newLoan()
      this.gotoList();
    }, 
    error => console.log(error));
  
  }
  resetform(){
          this.loan.employee = new Employee();
          this.loan.comment = '';
          this.loan.reservation = new Reservation();
          this.loan.dateOfRental = new Date();
          this.gotoCreate()
}
  gotoCreate() {
     this.submitted=false
     this.router.navigate(['/createloan']);
  }

  onSubmit() {
    this.submitted = true;
    this.saveLoan();    
  }

  gotoList() {
    this.router.navigate(['/loanlist']);
  }

}