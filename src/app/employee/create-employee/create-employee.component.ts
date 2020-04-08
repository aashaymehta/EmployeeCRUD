import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee-service.service';
import { Router } from '@angular/router';
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
              private router: Router) {
    this.employee = {name: '', id: -1, gender: '', dateOfBirth: null, department: ''};
   }

  ngOnInit(): void {
  }

  onSave(): void {
    this.employeeService.saveEmployee(this.employee);
    this.createEmployee.reset();
    this.router.navigate(['employees']);
  }

}
