import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, finalize } from 'rxjs';
import { Branch } from 'src/app/model/Branch';
import { Car } from 'src/app/model/Car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  fileName = '';
  uploadProgress!:number;
  uploadSub!: Subscription;

  car: Car = new Car();
  submitted = false;
  models: string[]=[];
  createcarForm!: FormGroup;



  constructor(private carService:CarService,
    private router: Router,private http:HttpClient) { }
  //   onFileSelected(event: { target: { files: File[]; }; }) {

  //       const file:File = event.target.files[0];

  //       if (file) {

  //           this.fileName = file.name;

  //           const formData = new FormData();

  //           formData.append("thumbnail", file);

  //           const upload$ = this.http.post("/api/thumbnail-upload", formData, {
  //               reportProgress: true,
  //               observe: 'events'
  //           })
  //           .pipe(
  //               finalize(() => this.reset())
  //           );
          
  //           this.uploadSub = upload$.subscribe(event => {
  //             if (event.type == HttpEventType.UploadProgress) {
  //               this.uploadProgress = Math.round(100 * (event.loaded / event.total));
  //             }
  //           })
  //       }
  //   }
  //   cancelUpload() {
  //   this.uploadSub.unsubscribe();
  //   this.reset();
  // }

  // reset() {
  //   this.uploadProgress = 0;
  //   this.uploadSub = new Subscription;
  // }
  ngOnInit(): void {
    
    this.initcreateCarForm();
    this.carService.getAllCarModels().subscribe(data =>{
    this.models= data;
    console.log(data);
  })
  }


   initcreateCarForm() {
this.createcarForm= new FormGroup({
      color:new FormControl("",{validators:[Validators.required]}),
      model:new FormControl("",{validators:[Validators.required]}),
      yearOfManufacture:new FormControl("",{validators:[Validators.required]})
      ,
      amountPerDay:new FormControl("",{validators:[Validators.required]}),
      milage:new FormControl("",{validators:[Validators.required]})
    })

  }
  


  saveCar(value:any) {
    console.log(value);
    
this.carService.createCar(value).subscribe(data => {
     console.log(data);
     this.router.navigate(['/userprofile'])
     
    }, 
    error => console.log(error));
    
  }

  gotoCreate() {
     this.submitted=false
     this.router.navigate(['/createcar']);
  }

  gotoList() {
    this.router.navigate(['/carlist']);
  }
}