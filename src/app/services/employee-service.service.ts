import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable()
export class EmployeeService {

  private employees: Employee[];
  constructor() {
    this.employees = [
      {name: 'Employee1', id: 101, gender: 'male', dateOfBirth: new Date('2020-04-06'), department: 'IT'},
      {name: 'Employee2', id: 102, gender: 'female', dateOfBirth: new Date('2020-04-07'), department: 'IT'},
      {name: 'Employee3', id: 103, gender: 'male', dateOfBirth: new Date('2020-04-07'), department: 'HR'},
      {name: 'Employee4', id: 104, gender: 'female', dateOfBirth: new Date('2020-04-07'), department: 'Payroll'},
      {name: 'Employee5', id: 105, gender: 'male', dateOfBirth: new Date('2020-04-07'), department: 'Admin'},
    ];
  }

  public getAllEmployees(): Employee[] {
    return this.employees;
  }

  public getEmployee(id: number): Employee {
    return this.employees.find(x => x.id === id);
  }

  public saveEmployee(employee: Employee): void {
    employee.id = 106;
    this.employees.push({name: employee.name, id: employee.id, gender: employee.gender,
      dateOfBirth: employee.dateOfBirth, department: employee.department});
  }

  public updateEmployee(employee: Employee): void {
    const empIndex = this.employees.findIndex(x => x.id === employee.id);
    if (empIndex !== -1){
      this.employees[empIndex] = Object.assign({}, employee);
    }
  }

  public deleteEmployee(employeeId: number): void {
    const empIndex = this.employees.findIndex(x => x.id === employeeId);
    if (empIndex !== -1){
      this.employees.splice(empIndex, 1);
    }
  }

}
