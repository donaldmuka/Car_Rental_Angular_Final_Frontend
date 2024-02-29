import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '../model/Address';
import { AddressService } from '../service/address.service';

@Component({
  selector: 'app-addresslist',
  templateUrl: './addresslist.component.html',
  styleUrls: ['./addresslist.component.css']
})
export class AddresslistComponent implements OnInit{

  input: string = " ";
  listOfAddress!: Address[];
  address!:Address;
     sortKey: string="null";
     sortOrder: string="null";
     @Input() searchEvent: any;
    listOfAddresToDisplay!: Address[];
   constructor(private route: ActivatedRoute,private router: Router,private AddressService: AddressService) { }
  
   ngOnInit(): void {
    
    console.log(this.input)
    this.reloadData();
  
   }
  
    sort(key: string) {
      if (this.sortKey === key) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortKey = key;
        this.sortOrder = 'asc';
      }
     this.listOfAddress.sort((a:any , b: any) => {
        const firstValue = typeof a[key] === 'string' ? a[key].toLowerCase() : a[key];
        const secondValue = typeof b[key] === 'string' ? b[key].toLowerCase() : b[key];
        if (firstValue < secondValue) {
          return this.sortOrder === 'asc' ? -1 : 1;
        } else if (a[key] > b[key]) {
          return this.sortOrder === 'asc' ? 1 : -1;
        } else {
          return 0;
        }
        });
     }
  
   reloadData() {
    this.AddressService.getAllAddress().subscribe(data=>{
      this.listOfAddress=data;
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
      this.router.navigate(['/addresslist']);
    }
    gotoCreate() {
      this.router.navigate(['/createaddress']);
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
  