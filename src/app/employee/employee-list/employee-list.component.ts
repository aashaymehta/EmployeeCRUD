import { Component, OnInit } from '@angular/core';
// import { EmployeeService } from 'src/app/services/employee-service.service';
import { Employee } from 'src/app/models/employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  constructor(
              // private employeeService: EmployeeService,
              private route: ActivatedRoute) {
    // Same key name as provided in routing module while registering resolve guard
    const resolveGuardKey = 'employeeListKey';
    this.employees = this.route.snapshot.data[resolveGuardKey];
   }

  ngOnInit(): void {
    // The ResolveGuard will prefetch the data when employee list route is called
    // this.employees = this.employeeService.getAllEmployees();
  }

}
