import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/model/Address';
import { Branch } from 'src/app/model/Branch';
import { Rental } from 'src/app/model/Rental';
import { BranchService } from 'src/app/service/branch.service';

@Component({
  selector: 'app-create-branch',
  templateUrl: './create-branch.component.html',
  styleUrls: ['./create-branch.component.css']
})

export class CreateBranchComponent {

  branch: Branch = new Branch();
  submitted = false;

  constructor(private branchService:BranchService,
    private router: Router) { }

  ngOnInit() {}

  newBranch(): void {
    this.submitted = true;
    this.branch = new Branch();
  }

  saveBranch() {
this.branchService.createBranch(this.branch).subscribe(data => {
      console.log(data)
      this.newBranch()
      this.gotoList();
    }, 
    error => console.log(error));
    
  }
  resetform(){
          this.branch.rental= new Rental();
          this.branch.address_id =  new Address();
          this.gotoCreate()
}
  gotoCreate() {
     this.submitted=false
     this.router.navigate(['/createbranch']);
  }

  onSubmit() {
    this.submitted = true;
    this.saveBranch();    
  }

  gotoList() {
    this.router.navigate(['/branchlist']);
  }
}
