import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  goToSearchResult() {
    this.router.navigate(['/searchresult']);
  }
  
  
  constructor (private router:Router){}

}
