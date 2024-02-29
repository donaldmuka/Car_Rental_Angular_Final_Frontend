import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Branch } from 'src/app/model/Branch';
import { Employee } from 'src/app/model/Employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService:EmployeeService,
    private router: Router) { }

  ngOnInit() {}

  newEmployee(): void {
    this.submitted = true;
    this.employee = new Employee();
  }

  saveEmployee() {
this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data)
      this.newEmployee()
      this.gotoList();
    }, 
    error => console.log(error));
    
  }
  resetform(){
          this.employee.branch = new Branch();
          this.employee.firstName = '';
          this.employee.position = "";
          this.gotoCreate()
}
  gotoCreate() {
     this.submitted=false
     this.router.navigate(['/createemployee']);
  }

  onSubmit() {
    this.submitted = true;
    this.saveEmployee();    
  }

  gotoList() {
    this.router.navigate(['/employeelist']);
  }

}