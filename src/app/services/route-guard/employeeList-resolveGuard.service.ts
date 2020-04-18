import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { Observable, of } from 'rxjs';
import { EmployeeService } from '../employee-service.service';

@Injectable()
export class EmployeeListResolveGuardService implements Resolve<Employee[]> {

    constructor(private employeeService: EmployeeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> {
        return of(this.employeeService.getAllEmployees());
    }
}
