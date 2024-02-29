import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/model/Address';
import { Owner } from 'src/app/model/Owner';
import { OwnerService } from 'src/app/service/owner.service';

@Component({
  selector: 'app-create-owner',
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.css']
})
export class CreateOwnerComponent {
  owner: Owner = new Owner();
  submitted = false;
  address_id!: string;

  constructor(private ownerService:OwnerService,
    private router: Router) { }

  ngOnInit() {}

  newOwner(): void {
    this.submitted = true;
    this.owner = new Owner();
  }

  saveOwner() {
      this.ownerService.createOwner(this.owner,this.address_id).subscribe(data => {
      console.log(data)
      this.newOwner()
      this.gotoList();
    }, 
    error => console.log(error));
    
  }
  resetform(){
          this.owner.address =new Address();
          this.owner.name = '';
          this.gotoCreate()
}
  gotoCreate() {
     this.submitted=false
     this.router.navigate(['/createowner']);
  }

  onSubmit() {
    this.submitted = true;
    this.saveOwner();    
  }

  gotoList() {
    this.router.navigate(['/ownerlist']);
  }

}
