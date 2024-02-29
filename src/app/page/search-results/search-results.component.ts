import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Car } from 'src/app/model/Car';
import { CarService } from 'src/app/service/car.service';
import { HomePageComponent } from '../home-page/home-page.component';
import { SearchService } from 'src/app/service/search.service';
import { SearchObject } from 'src/app/model/SearchObject';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit{
searchObject: SearchObject=this.searchService.getSearchObject();;
carlist: Car[]=[];
models: string[]=[];
sec:string[]=[
    "COROLLA",
    "CAMRY",
    "RAV4",
    "ACCORD",
    "CIVIC",
    "CRV",
    "MUSTANG",
    "FOCUS",
    "ESCAPE",
    "SERIES_3",
    "SERIES_5",
    "X5",
    "C_CLASS",
    "E_CLASS",
    "S_CLASS",
    "A3",
    "A4",
    "Q5"
];

goToCheckOut(id:number) {
  this.router.navigate(['/checkout',id]);
}
constructor (private searchService:SearchService,private router:Router, private carService: CarService){
  this.searchObject = this.searchService.getSearchObject();
}
ngOnInit() {

   this.searchObject = this.searchService.getSearchObject();
  this.carService.getFilterCars(this.searchObject,this.sec).subscribe(data=>{
    this.carlist=data;
  })
  this.carService.getAllCarModels().subscribe(data =>{
    this.models= data;
    console.log(data);
  })
}
addtoSearch(item: string) {
  if (this.sec.length === this.models.length) {
    this.sec = [];
    this.sec.push(item);
    this.getCarsByYear();
  } else if (this.sec.includes(item)) {
    this.sec.splice(this.sec.indexOf(item), 1);
    if(this.sec.length==0){
      this.sec=this.models;
      this.getCarsByYear()
    }
    this.getCarsByYear();
  } else {
    this.sec.push(item);
    this.getCarsByYear();
  }
}
  getCarsByYear(): any {
  this.carService.getFilterCars(this.searchObject,this.sec).subscribe(data=>{
    this.carlist=data;
},er=>{console.error(er);
      window.location.href = 'http://localhost:8080/';});
}

}


