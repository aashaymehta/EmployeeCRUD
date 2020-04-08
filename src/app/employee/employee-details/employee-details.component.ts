import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee-service.service';
import { Employee } from 'src/app/models/employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;
  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const empId = +this.route.snapshot.paramMap.get('id');
    this.employee = this.employeeService.getEmployee(empId);
  }

  onBackButtonClick(): void {
    this.router.navigate(['employees']);
  }

}
