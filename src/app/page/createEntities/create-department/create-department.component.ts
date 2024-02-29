import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Branch } from 'src/app/model/Branch';
import { Department } from 'src/app/model/Department';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent {
  departament: Department = new Department();
  submitted = false;

  constructor(private departmentServcice:DepartmentService,
    private router: Router) { }

  ngOnInit() {}

  newDepartment(): void {
    this.submitted = true;
    this.departament = new Department();
  }

  saveDepartment() {
this.departmentServcice.createDepartment(this.departament).subscribe(data => {
      console.log(data)
      this.newDepartment()
      this.gotoList();
    }, 
    error => console.log(error));
    
  }
  resetform(){
          this.departament.branch = new Branch();
          this.departament.name = '';
          this.gotoCreate()
}
  gotoCreate() {
     this.submitted=false
     this.router.navigate(['/createdepartment']);
  }

  onSubmit() {
    this.submitted = true;
    this.saveDepartment();    
  }

  gotoList() {
    this.router.navigate(['/departmentlist']);
  }

}