import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee;

  @ViewChild('createEmployee')
  createEmployee: NgForm;

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private route: ActivatedRoute) {
    this.employee = {name: '', id: -1, gender: '', dateOfBirth: null, department: ''};
   }

   ngOnInit(): void {
    const empId = +this.route.snapshot.paramMap.get('id');
    if (empId !== 0) {
    this.employee = Object.assign({}, this.employeeService.getEmployee(empId));
    }
  }

  onSave(): void {
    if (this.employee.id !== -1) {
      this.employeeService.updateEmployee(this.employee);
    }
    else {
    this.employeeService.saveEmployee(this.employee);
    }
    this.createEmployee.reset();
    this.router.navigate(['employees']);
  }

}
