import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../model/Car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../service/car.service';
import { CheckOutComponent } from '../page/check-out/check-out.component';

@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrls: ['./carditem.component.css']
})


export class CarditemComponent implements OnInit {

isfavorite:boolean=false
Favorite() {
this.isfavorite=!this.isfavorite
}



@Input() car!: Car;
  constructor(private route: ActivatedRoute,private router: Router,private carService: CarService,private chech:CheckOutComponent) { }
  ngOnInit(): void {
  }

  gotocheckoutPage(id:number) {
this.router.navigate(['/checkout',id]);
  setTimeout(() => {
    this.chech.ngOnInit();
  }, 500); 
}

}