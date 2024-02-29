import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckOutComponent } from '../check-out/check-out.component';
import { CheckoutService } from 'src/app/service/checkout.service';

@Component({
  selector: 'app-successpage',
  templateUrl: './successpage.component.html',
  styleUrls: ['./successpage.component.css']
})
export class SuccesspageComponent implements OnInit {
  constructor(private router:Router, private check:CheckoutService){}
  ngOnInit(): void {
    console.log(this.check.getSearchObject());
    this.check.confirm().subscribe((data:string)=>{console.log(data);
    })

    
    
    
  }

  goToHomePage() {
  this.router.navigate
  (['/homepage']);
  }
}
