import { Component, OnInit } from '@angular/core';
import { Car } from '../model/Car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
Favorite() {
throw new Error('Method not implemented.');
}
gotocheckoutPage(arg0: number) {
throw new Error('Method not implemented.');
}
input: string = " ";
car!:Car;
  Cars :Car[]=[]

constructor(private route: ActivatedRoute,private router: Router,private carService: CarService) { }
  ngOnInit(): void {
  this.carService.getAllCars().subscribe(data=>{
    this.Cars=data.slice(0,4);

  })}
        
        
}

